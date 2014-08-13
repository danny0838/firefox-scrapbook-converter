function init() {
    var args = window.arguments;
    if (!args) {
        print("ERROR: no arguments.");
        return;
    }
    var data = window.arguments[0];
    convert(data);
}

function print(txt) {
    var field = document.getElementById("sbconvConverterStatus");
    field.value += txt + "\n";
    field.selectionStart = field.selectionEnd = field.value.length;
}

function convert(data) {
    // check input
    try {
        var input = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
        input.initWithPath(data.input);
        if (!input.exists()) throw "not exist";
    }
    catch(ex) {
        print("ERROR: input directory '" + input.path + "' does not exist.");
        return;
    }
    if (!input.isDirectory()) {
        print("ERROR: input directory '" + input.path + "' is not a directory.");
        return;
    }

    // check output
    try {
        var output = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
        output.initWithPath(data.output);
        if (!output.exists()) throw "not exist";
    }
    catch(ex) {
        print("ERROR: output directory '" + output.path + "' does not exist.");
        return;
    }
    if (!output.isDirectory()) {
        print("ERROR: output directory '" + output.path + "' is not a directory.");
        return;
    }

    // call the convert method
    switch (data.method) {
        case "enex2sb":
            convert_enex2sb(input, output, data.includeSubdir);
            break;
        case "maf2sb":
            convert_maf2sb(input, output, data.includeSubdir);
            break;
        case "html2sb":
            convert_html2sb(input, output, data.includeSubdir);
            break;
        default:
            print("ERROR: unknown method.");
            break;
    }
}

function convert_enex2sb(input, output, includeSubdir) {
    print("convert method: .enex --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include sub-directory: " + (includeSubdir ? "yes" : "no"));
    print("");
    var files = getDescFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile()) ) continue;
            print("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            subPath.pop();
            subPath = subPath.join("\t");
            parseEnex(loadXMLFile(file));
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        print("");
        print("done.");
    }

    function parseEnex(xmlDoc) {
        // check if it's enex, skip if not
        if (xmlDoc.documentElement.nodeName == "en-export") {
            var notesDOM = xmlDoc.getElementsByTagName("note");
            var notes = [];
            for (var i=0, I=notesDOM.length; i<I; i++) notes.push(notesDOM[i]);
            notesNext();
        }
        else {
            print("skip invalid enex: '" + file.path + "'");
            notesFinish();
        }

        function notesNext() {
            var note = notes.shift();
            if (note) {
                parseNote(note);
            }
            else {
                notesFinish();
                return;
            }
            // next note (async)
            setTimeout(notesNext, 0);
        }

        function notesFinish() {
            // next file (async)
            setTimeout(filesNext, 0);
        }

        function parseNote(note) {
            var item = sbConvCommon.newItem();
            var resHash2FileName = {};
            var resHash2Mime = {};

            // basic meta data
            item.type = "notex";
            item.chars = "UTF-8";

            // title
            try {
                item.title = note.getElementsByTagName("title")[0].textContent;
            } catch(ex){}

            // set paths
            var destDir = getUniqueDir(output, item.title);
            print("exporting note: '" + item.title + "' --> '" + destDir.leafName + "'");
            // -- create index.dat and index.html beforehand to prevent overwrite
            var indexDat = destDir.clone(); indexDat.append("index.dat");
            sbConvCommon.writeFile(indexDat, "", "UTF-8", true);
            var indexHTML = destDir.clone(); indexHTML.append("index.html");
            sbConvCommon.writeFile(indexHTML, "", "UTF-8", true);

            // create
            try {
                item.create = parseEnexTime(note.getElementsByTagName("created")[0].textContent);
                if (!item.id && item.create) item.id = item.create;
            } catch(ex){}

            // modify
            try {
                item.modify = parseEnexTime(note.getElementsByTagName("updated")[0].textContent);
                if (!item.id && item.modify) item.id = item.modify;
            } catch(ex){}

            // create an id if none
            if (!item.id) item.id = sbConvCommon.getTimeStamp();

            // source
            try {
                var sourceObj = note.getElementsByTagName("source-url")[0];
                var source = sourceObj.textContent;
                // Evernote uses a blizzard url format for local files, fix it
                if (source.match(/^file:\/\/(.*)$/i)) {
                    source = sbConvCommon.convertFilePathToURL(RegExp.$1);
                }
                item.source = source;
                sourceObj.parentNode.removeChild(sourceObj);
            } catch(ex){}

            // folder
            item.folder = subPath;

            // tags
            try {
                var tags = note.getElementsByTagName("tag");
                for (var i=0, I=tags.length; i<I; i++) {
                    var tag = tags[i];
                    item.comment += "<tag>" + tag.innerHTML + "</tag>";
                }
            } catch(ex){}

            // attributes
            try {
                item.comment += note.getElementsByTagName("note-attributes")[0].innerHTML;
            } catch(ex){}

            // resources
            var ress = note.getElementsByTagName("resource");
            for (var i=0, I=ress.length; i<I; i++) {
                var res = ress[i];
                try {
                    var data = res.getElementsByTagName("data")[0];
                    var encoding = data.getAttribute("encoding");
                    // we only support base64 currently
                    if (encoding == "base64") {
                        var data_base64 = data.textContent;
                        var data_bin = window.atob(data_base64)
                        var mime = res.getElementsByTagName("mime")[0].textContent;
                        // var width = (function(){
                            // try{return res.getElementsByTagName("width")[0].textContent;} catch(ex){}
                        // })();
                        // var height = (function(){
                            // try{return res.getElementsByTagName("height")[0].textContent;} catch(ex){}
                        // })();
                        var attributes = res.getElementsByTagName("resource-attributes")[0];
                        var filename = (function(){
                            try{return attributes.getElementsByTagName("file-name")[0].textContent;} catch(ex){}
                        })();
                        var resFile = getUniqueFile(destDir, filename);
                        var ostream = Components.classes['@mozilla.org/network/file-output-stream;1'].createInstance(Components.interfaces.nsIFileOutputStream);
                        ostream.init(resFile, -1, 0666, 0);
                        ostream.write(data_bin, data_bin.length);
                        ostream.close();
                        var hash = hex_md5(data_bin);
                        resHash2FileName[hash] = resFile.leafName;
                        resHash2Mime[hash] = mime;
                    }
                } catch(ex){
                    console.debug(ex);
                }
            }

            // content
            var content = parseEnexContent(note.getElementsByTagName("content")[0].firstChild.data);
            
            // output
            sbConvCommon.writeIndexDat(item, indexDat);
            sbConvCommon.writeFile(indexHTML, content, "UTF-8", true);

            function parseEnexTime(time) {
                if (time.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/)) {
                    var date = new Date(
                        parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10) - 1, parseInt(RegExp.$3, 10),
                        parseInt(RegExp.$4, 10), parseInt(RegExp.$5, 10), parseInt(RegExp.$6, 10)
                    );
                    var date = new Date(date.valueOf() - date.getTimezoneOffset() * 60 * 1000);
                    return sbConvCommon.getTimeStamp(date);
                }
                return false;
            }

            function parseEnexContent(data) {
                var html = false;
                var htmlDoc = loadHTML(data);

                try {
                    var ennote = htmlDoc.getElementsByTagName("en-note")[0];
                    // handle Evernote special objects
                    // -- en-todo
                    var nodes = ennote.getElementsByTagName("en-todo");
                    for (var i=nodes.length-1; i>=0; i--) {
                        var node = nodes[i];
                        // new node in replace of the old one
                        var node2 = htmlDoc.createElement("INPUT");
                        node2.setAttribute("type", "checkbox");
                        node2.setAttribute("data-sb-obj", "todo");
                        if (node.getAttribute("checked")=="true") node2.setAttribute("checked", "checked");
                        node.parentNode.insertBefore(node2, node);
                        // Fix DOMParser misprocess
                        // Firefox DOMParser cannot read unknown tags correctly and they are extended to the tail
                        // eg. <div><en-todo/>blah</div> will be <div><en-todo>blah</en-todo></div>
                        var childs = node.childNodes;
                        while (childs.length) {
                            node.parentNode.insertBefore(childs[0], node);
                        }
                        // remove the old node
                        node.parentNode.removeChild(node);
                    }
                    // -- en-media
                    var nodes = ennote.getElementsByTagName("en-media");
                    for (var i=nodes.length-1; i>=0; i--) {
                        var node = nodes[i];
                        // new node in replace of the old one
                        var hash = node.getAttribute("hash");
                        var mime = resHash2Mime[hash];
                        if (mime.indexOf("image/") == 0) {
                            var node2 = htmlDoc.createElement("IMG");
                            node2.setAttribute("src", resHash2FileName[hash]);
                            node2.setAttribute("alt", resHash2FileName[hash]);
                            node.parentNode.insertBefore(node2, node);
                        }
                        else {
                            var node2 = htmlDoc.createElement("A");
                            node2.setAttribute("href", resHash2FileName[hash]);
                            node2.textContent = resHash2FileName[hash];
                            node.parentNode.insertBefore(node2, node);
                        }
                        // Fix DOMParser misprocess
                        var childs = node.childNodes;
                        while (childs.length) {
                            node.parentNode.insertBefore(childs[0], node);
                        }
                        // remove the old node
                        node.parentNode.removeChild(node);
                    }
                    // -- en-crypt
                    var nodes = ennote.getElementsByTagName("en-crypt");
                    for (var i=nodes.length-1; i>=0; i--) {
                        var node = nodes[i];
                        // new node in replace of the old one
                        var node2 = htmlDoc.createElement("IMG");
                        node2.setAttribute("alt", node.textContent);  // crypted data string
                        node2.setAttribute("title", "Evernote Crypt");
                        node2.setAttribute("data-evernote-hint", node.getAttribute("hint"));
                        node2.setAttribute("data-evernote-cipher", node.getAttribute("cipher"));
                        node2.setAttribute("data-evernote-length", node.getAttribute("length"));
                        node2.setAttribute("src", "data:image/gif;base64,R0lGODlhXQASAPcBAIODg////+Dg4Kurq+Li4uTk5LKysp+fn7u7u8/Pz62trd7e3tvb25eXl+fn59jY2MTExMjIyMzMzICAgKioqJubm6SkpNLS0vDw8NXV1ZCQkLq6uurq6u/v7+zs7Le3t6+vr4WFhYuLi4yMjH5+ftra2t/f38XFxYiIiJmZmZWVlYeHh+bm5tnZ2Xx8fIaGhunp6fT09OHh4To6Otzc3NbW1jg4ODY2Nu3t7e7u7uPj48HBwaamppiYmCgoKL+/v1VVVTMzM+vr67m5uYGBgcfHx8rKytHR0cPDw2tra3BwcN3d3VlZWfv7+29vbyUlJYKCgmJiYoSEhIqKiri4uJqamomJiXl5ebCwsAICAnd3dwMDA8nJydTU1KOjo7GxsaWlpdPT0+jo6BoaGpGRka6urtDQ0F9fX2hoaHR0dJSUlGFhYaCgoMLCwpycnE1NTZOTk87OzkpKShsbG2pqapaWllhYWBgYGKmpqXt7ey8vL9fX1/39/ff396Ghoc3NzXV1dfPz8/7+/r29vT8/P7W1tTIyMnh4eGBgYGlpaURERKysrEhISDk5ORISEh8fH3Z2dn19fY2NjXNzc21tbQkJCU5OTgUFBV1dXQ4ODnp6el5eXh0dHTc3N2ZmZpKSkiAgIMvLyy0tLSQkJBYWFr6+vgsLC/X19cbGxjU1NQ8PD1tbW/Ly8vHx8ba2to+Pj2RkZEtLSwgICHJycjExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAEALAAAAABdABIAAAj/AAMIFOhhgxspABIqXMiwocOHECNKhCjFzQYPAzMGaLKhTgQWgjSKHEmypMmTKEcKYhGhzoYmGlvw2NAHA4wCLAoU0OFAJ0+dJsTozHCzQAIOOo8mRWqUqdKmS6NCnfr0CFMaPXVqLQADQ58NPFoM9PCCRiAdBGSwIEBgx4YfaTmwpSGXABccbDfkYPuhA1+/BPr+HRwYsODChA/rZRvKA1sZbCOz1cGKxgscAqkUwSFAgIkCApYA2UJaDmgBDIR0NsJZQKEOnUFgiD1bgGzauG3Xvq07N28ssAX88ND5gYPOyJPDKEIlAIweHRYsWFJAOhRHPMzwIAVpAQMP0rvk/3AxQcmE83QwLHDh5PwEJy6kJ3HfPn4G8uXPu6iBgbz580mox557SuQh3QMsSKfggtJ50IAQQ1zAAAMlEDBhCUAcAoMMrbwQywMeTBhGDgxogMIBKEKhwYRaoHiAFAeseIQGKIaAogZHYEDjCy5egUGJPKL4wooMHOIijCtewMKELcgw4ZNQQrDBAS08UIMAD1gpAxAN1CDGA2wwIkSWZuCQJREKpLmCAik8UEQKaU6RZgpcYACnCGkqkAcGD6SAZ5oitPmAC3ni2SYXcCpgxZxGsJBlFLJUckkWlMqR5aUNvNBCGCZkkAGnM4xxhyqmZHLHGDNkEAcOniKhAgUUTP8Aqwo/dPCqrLAqgUEGKhABKwVEqODpLL9CQYGwrsJq7LE72EoBCb9e4YCnCdDwBiiPcDJHI3F46ukeU7yQwBIXXGAGDReM4YMPT4zyxLpz/CFEuTvkoIEFV1igLyw4XKDBJPpakIYG5XoSMCAWEOzKvRZooa8GH9jbcMBo5OBvGgFrQvAFESxwwQmK0KJHJxuUa/IRVnzSRQIJ/FECy08YEsTMMxvyhBgs7+BBAiMA4mIiI7C8ys8HBD3ACCjSgeIIA3iAdBIubrLzCFCjmETQCWDiIiVFJ1CKCSxLMMQMqXjB8tkJQNDAIF9IYMQDErjtww10132DD3HvAEPcaFT/4HcUFaAggR8o+I2I3yj4wUHhh/sNBAcSoLCG3xWsIbgEQFAOuOBsFF4B4IEbIEDcEewhQQ8hxK163F8MAQMcJ2QQQQSodKGHDbjnboMoEfzAUgRlhNBAA2cMH0IPLAhvx/ANvOFABCEsPzwTIcxuCfNMNFA96tMb34ADwmc//BkEzP5DDbOnr34ERcABQwAfDAIBBG0cAQEAhMygv/6EkPCDAPMDAQsc4IAhxICAZdABBByggAMyMAbzU8ApCNhAB0CADA6soAPIwJMHUrAAC9TgEAIxv0I8YH5ImJ8KVUiB5gRACCEYABWMgAAEyIAPGuEDAWpQwwHIoIZqEEAN0q1gghquoIgIWMECjCjEJCLxiDV8wRKMSAMjLtGJRkSiJK4IhgfUcAM1DGMYBxACjAhEJl7AggFAAAEDrBEJbiyDBNwIBga4kQw0cCMRSuBGEvDRAH7sox0B+cdAGiASLehjDfqYSEL28Y97dKMaHuDGL7jxkm7EQg/CohGOTKEHixjAAPDwAVHiYQOiBAMERFmFIojyFScQpQhiOYBZypKWtqwlLld5tDaIcgRIuKUwj0ZLFexAlMhMphdSMIWXkKQgVZiINKdJzWo6pAoX0UhAAAA7");  // crypt image
                        node.parentNode.insertBefore(node2, node);
                        // remove the old node
                        node.parentNode.removeChild(node);
                    }

                    // set output html
                    html = '<!DOCTYPE html>\n'
                        + '<html>\n'
                        + '<head>\n'
                        + '  <meta charset="UTF-8">\n'
                        + '  <title data-sb-obj="title">' + item.title + '</title>\n'
                        + '</head>\n'
                        + '<body' + (ennote.hasAttribute("style") ? ' style="' + ennote.getAttribute("style") + '"' : "") + '>' + ennote.innerHTML + '</body>\n'
                        + '</html>\n';
                } catch(ex){
                    console.debug(ex);
                }

                if (html === false) {
                    print("ERROR: cannot read en-note data and export the original html instead");
                    html = data;
                }

                return html;
            }
        }
    }
}

function convert_maf2sb(input, output, includeSubdir) {
    print("convert method: .maff --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include sub-directory: " + (includeSubdir ? "yes" : "no"));
    print("");
    var files = getDescFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile()) ) continue;
            print("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            subPath.pop();
            subPath = subPath.join("\t");
            parseMaf(file);
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        print("");
        print("done.");
    }

    function parseMaf(file) {
        var tmpDir = getUniqueDir(output, ".tmp_" + file.leafName);
        try {
            extractZip(file, tmpDir);
        } catch(ex) {
            // not zip or corrupted zip
            print("skip invalid maff: '" + file.path + "'");
            pagesFinish();
            return;
        }
        var pageDirs = tmpDir.directoryEntries;
        pagesNext();

        function pagesNext() {
            if (pageDirs.hasMoreElements()) {
                var pageDir = pageDirs.getNext().QueryInterface(Components.interfaces.nsIFile);
                parseMafPage(pageDir);
                // next page (async)
                setTimeout(pagesNext, 0);
            }
            else {
                pagesFinish();
            }
        }

        function pagesFinish() {
            tmpDir.remove(true);
            // next file (async)
            setTimeout(filesNext, 0);
        }

        function parseMafPage(pageDir) {
            // read RDF data
            var rdfFile = pageDir.clone(); rdfFile.append("index.rdf");
            var ds = new MaffDataSource();
            var res = ds.resources;
            ds.loadFromFile(rdfFile);

            // create item
            var indexLeafName = ds.getMafProperty(res.indexFileName) || "index.html";
            if (indexLeafName !== "index.html") {
                print("ERROR: maff page with index file other than index.html is not supported");
                return;
            }
            var item = sbConvCommon.newItem();
            item.title = ds.getMafProperty(res.title);
            item.source = ds.getMafProperty(res.originalUrl);
            item.chars = ds.getMafProperty(res.charset);
            item.id = parseMafTime(ds.getMafProperty(res.archiveTime));
            item.create = item.modify = item.id;
            item.folder = subPath;

            var indexDat = pageDir.clone(); indexDat.append("index.dat");
            sbConvCommon.writeIndexDat(item, indexDat);

            // output
            var destDir = getUniqueDir(output, item.title);
            print("exporting page: '" + item.title + "' --> '" + destDir.leafName + "'");
            var pageDirFiles = pageDir.directoryEntries;
            while (pageDirFiles.hasMoreElements()) {
                var pageDirFile = pageDirFiles.getNext().QueryInterface(Components.interfaces.nsIFile);
                pageDirFile.moveTo(destDir, pageDirFile.leafName);
            }

            function parseMafTime(time) {
                var date = new Date(time);
                return sbConvCommon.getTimeStamp(date);
            }
        }
    }
}

function convert_html2sb(input, output, includeSubdir) {
    print("convert method: HTML --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include sub-directory: " + (includeSubdir ? "yes" : "no"));
    print("");
    var files = getDescHtmlFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile()) ) continue;
            print("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            subPath.pop();
            subPath = subPath.join("\t");
            parseHtmlPack(file);
            // next file (async)
            setTimeout(filesNext, 0);
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        print("");
        print("done.");
    }

    function parseHtmlPack(file) {
        // load html file
        var htmlTxt = sbConvCommon.readFile(file);
        var htmlDoc = loadHTML(htmlTxt).documentElement;

        // -- charset
        var charset = "UTF-8";
        try {
            var metas = htmlDoc.getElementsByTagName("meta");
            for (var i=0; i<metas.length; i++) {
                var meta = metas[i];
				if (meta.hasAttribute("http-equiv") && meta.hasAttribute("content") &&
					meta.getAttribute("http-equiv").toLowerCase() == "content-type" && 
					meta.getAttribute("content").match(/^[^;]*;\s*charset=(.*)$/i) ) {
                    charset = RegExp.$1;
				}
				else if ( meta.hasAttribute("charset") ) {
                    charset = meta.getAttribute("charset");
                }
            }
        } catch(ex){}

        htmlTxt = sbConvCommon.convertToUnicode(htmlTxt, charset);
        htmlDoc = loadHTML(htmlTxt).documentElement;
        
        // create item
        var item = sbConvCommon.newItem();

        // -- title
        try {
            item.title = file.leafName.replace(/\.\w+$/, "");
        } catch(ex){}

        // -- time
        var time = parseHtmlPackTime(file.lastModifiedTime);
        item.id = item.create = item.modify = time;

        // -- source
        if ( htmlTxt.match(/<!-- saved from url=\((\d+)\)(.*?) -->/i) ) {
            if ( RegExp.$2.length == parseInt(RegExp.$1, 10) ) {
                item.source = RegExp.$2;
            }
        }

        // -- char
        item.chars = charset;
        
        // -- folder
        item.folder = subPath;

        // output
        var destDir = getUniqueDir(output, item.title);
        print("exporting html: '" + item.title + "' --> '" + destDir.leafName + "'");
        var indexDat = destDir.clone(); indexDat.append("index.dat");
        sbConvCommon.writeIndexDat(item, indexDat);
        file.copyTo(destDir, "index.html");

        // -- support folder files
        copySupportFolder();

        function parseHtmlPackTime(time) {
            var date = new Date(time);
            return sbConvCommon.getTimeStamp(date);
        }

        function copySupportFolder() {
            var filename = file.leafName;
            var support = file.parent; support.append(filename.replace(/\.\w+$/, ".files"));
            if (support.exists()) {
                support.copyTo(destDir, support.leafName);
                return;
            }
            var support = file.parent; support.append(filename.replace(/\.\w+$/, "_files"));
            if (support.exists()) {
                support.copyTo(destDir, support.leafName);
                return;
            }
        }
    }
}

function loadXMLFile(file) {
    return loadXML(sbConvCommon.convertToUnicode(sbConvCommon.readFile(file), "UTF-8"));
}

function loadXML(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "text/xml");
}

function loadHTML(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "text/html");
}

function getDescFiles(aFolder, aIncludeSubdir) {
    var dirs = [aFolder], result = [];
    for (var i=0; i<dirs.length; i++) {
        var files = dirs[i].directoryEntries;
        while (files.hasMoreElements()) {
            var file = files.getNext().QueryInterface(Components.interfaces.nsIFile);
            if (file.isDirectory() && aIncludeSubdir) {
                dirs.push(file);
            }
            else {
                result.push(file);
            }
        }
    }
    return result;
}

/**
 * similar to getDescFiles, but only gets html files and skips looking into the support folders
 */
function getDescHtmlFiles(aFolder, aIncludeSubdir) {
    var dirs = [aFolder], result = [], forbidden = {};
    for (var i=0; i<dirs.length; i++) {
        if (forbidden[dirs[i].path]) continue;  // skip looking into support folders
        var files = dirs[i].directoryEntries;
        while (files.hasMoreElements()) {
            var file = files.getNext().QueryInterface(Components.interfaces.nsIFile);
            if (file.isDirectory() && aIncludeSubdir) {
                dirs.push(file);
            }
            else {
                var filename = file.leafName;
                if (filename.match(/\.(x?html|htm|xht)$/i)) {
                    result.push(file);
                    // add support folder names to the forbidden list
                    var support = file.parent; support.append(filename.replace(/\.\w+$/, ".files"));
                    forbidden[support.path] = true;
                    var support = file.parent; support.append(filename.replace(/\.\w+$/, "_files"));
                    forbidden[support.path] = true;
                }
            }
        }
    }
    return result;
}

/**
 * Gets the subPath from the aBaseFolder, return an array or false if error
 */
function getSubPath(aBaseFolder, aFile) {
    var refFile = aFile, result = [];
    while (!refFile.equals(aBaseFolder)) {
        result.unshift(refFile.leafName);
        refFile = refFile.parent;
        if (!refFile.exists()) return false;
    }
    return result;
}

function getUniqueDir(dir, name) {
    var name = sbConvCommon.validateFileName(name).substring(0, 60) || "untitled";
    name = name.replace(/\.+$/, "");
    var num = 0, destDir, dirName;
    do {
        dirName = name;
        if ( num > 0 ) dirName += "-" + num;
        destDir = dir.clone();
        destDir.append(dirName);
    }
    while ( destDir.exists() && ++num < 1024 );
    destDir.create(destDir.DIRECTORY_TYPE, 0700);
    return destDir;
}

function getUniqueFile(dir, name) {
    var name = sbConvCommon.validateFileName(name) || "untitled";
    var num = 0, destFile, fileName;
    do {
        fileName = name;
        if ( num > 0 ) fileName += "[" + num + "]";
        destFile = dir.clone();
        destFile.append(fileName);
        num++;
    }
    while ( destFile.exists() );
    return destFile;
}

/* borrowed from Firefox addon UnZIP */
function extractZip(aZipFile, aDir) {
    var zipReader = Components.classes["@mozilla.org/libjar/zip-reader;1"].createInstance(Components.interfaces.nsIZipReader);

    // open the zip
    zipReader.open(aZipFile);

    // create directories first
    var entries = zipReader.findEntries("*/");
    while (entries.hasMore()) {
        var entryName = entries.getNext();
        var target = getTargetFile(aDir, entryName);
        if (!target.exists()) {
            target.create(aDir.DIRECTORY_TYPE, 0700);
        }
    }

    // create files
    entries = zipReader.findEntries(null);
    while (entries.hasMore()) {
        var entryName = entries.getNext();
        var target = getTargetFile(aDir, entryName);
        if (target.exists()) continue;  // a directory previously created
        zipReader.extract(entryName, target);
    }

    function getTargetFile(aDir, entry) {
        var target = aDir.clone();
        entry.split("/").forEach(function(aPart) {
            target.append(aPart);
        });
        return target;
    }
}