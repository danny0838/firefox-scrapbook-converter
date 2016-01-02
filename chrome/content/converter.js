var evernoteCryptImage = "data:image/gif;base64,R0lGODlhXQASAPcBAIODg////+Dg4Kurq+Li4uTk5LKysp+fn7u7u8/Pz62trd7e3tvb25eXl+fn59jY2MTExMjIyMzMzICAgKioqJubm6SkpNLS0vDw8NXV1ZCQkLq6uurq6u/v7+zs7Le3t6+vr4WFhYuLi4yMjH5+ftra2t/f38XFxYiIiJmZmZWVlYeHh+bm5tnZ2Xx8fIaGhunp6fT09OHh4To6Otzc3NbW1jg4ODY2Nu3t7e7u7uPj48HBwaamppiYmCgoKL+/v1VVVTMzM+vr67m5uYGBgcfHx8rKytHR0cPDw2tra3BwcN3d3VlZWfv7+29vbyUlJYKCgmJiYoSEhIqKiri4uJqamomJiXl5ebCwsAICAnd3dwMDA8nJydTU1KOjo7GxsaWlpdPT0+jo6BoaGpGRka6urtDQ0F9fX2hoaHR0dJSUlGFhYaCgoMLCwpycnE1NTZOTk87OzkpKShsbG2pqapaWllhYWBgYGKmpqXt7ey8vL9fX1/39/ff396Ghoc3NzXV1dfPz8/7+/r29vT8/P7W1tTIyMnh4eGBgYGlpaURERKysrEhISDk5ORISEh8fH3Z2dn19fY2NjXNzc21tbQkJCU5OTgUFBV1dXQ4ODnp6el5eXh0dHTc3N2ZmZpKSkiAgIMvLyy0tLSQkJBYWFr6+vgsLC/X19cbGxjU1NQ8PD1tbW/Ly8vHx8ba2to+Pj2RkZEtLSwgICHJycjExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAEALAAAAABdABIAAAj/AAMIFOhhgxspABIqXMiwocOHECNKhCjFzQYPAzMGaLKhTgQWgjSKHEmypMmTKEcKYhGhzoYmGlvw2NAHA4wCLAoU0OFAJ0+dJsTozHCzQAIOOo8mRWqUqdKmS6NCnfr0CFMaPXVqLQADQ58NPFoM9PCCRiAdBGSwIEBgx4YfaTmwpSGXABccbDfkYPuhA1+/BPr+HRwYsODChA/rZRvKA1sZbCOz1cGKxgscAqkUwSFAgIkCApYA2UJaDmgBDIR0NsJZQKEOnUFgiD1bgGzauG3Xvq07N28ssAX88ND5gYPOyJPDKEIlAIweHRYsWFJAOhRHPMzwIAVpAQMP0rvk/3AxQcmE83QwLHDh5PwEJy6kJ3HfPn4G8uXPu6iBgbz580mox557SuQh3QMsSKfggtJ50IAQQ1zAAAMlEDBhCUAcAoMMrbwQywMeTBhGDgxogMIBKEKhwYRaoHiAFAeseIQGKIaAogZHYEDjCy5egUGJPKL4wooMHOIijCtewMKELcgw4ZNQQrDBAS08UIMAD1gpAxAN1CDGA2wwIkSWZuCQJREKpLmCAik8UEQKaU6RZgpcYACnCGkqkAcGD6SAZ5oitPmAC3ni2SYXcCpgxZxGsJBlFLJUckkWlMqR5aUNvNBCGCZkkAGnM4xxhyqmZHLHGDNkEAcOniKhAgUUTP8Aqwo/dPCqrLAqgUEGKhABKwVEqODpLL9CQYGwrsJq7LE72EoBCb9e4YCnCdDwBiiPcDJHI3F46ukeU7yQwBIXXGAGDReM4YMPT4zyxLpz/CFEuTvkoIEFV1igLyw4XKDBJPpakIYG5XoSMCAWEOzKvRZooa8GH9jbcMBo5OBvGgFrQvAFESxwwQmK0KJHJxuUa/IRVnzSRQIJ/FECy08YEsTMMxvyhBgs7+BBAiMA4mIiI7C8ys8HBD3ACCjSgeIIA3iAdBIubrLzCFCjmETQCWDiIiVFJ1CKCSxLMMQMqXjB8tkJQNDAIF9IYMQDErjtww10132DD3HvAEPcaFT/4HcUFaAggR8o+I2I3yj4wUHhh/sNBAcSoLCG3xWsIbgEQFAOuOBsFF4B4IEbIEDcEewhQQ8hxK163F8MAQMcJ2QQQQSodKGHDbjnboMoEfzAUgRlhNBAA2cMH0IPLAhvx/ANvOFABCEsPzwTIcxuCfNMNFA96tMb34ADwmc//BkEzP5DDbOnr34ERcABQwAfDAIBBG0cAQEAhMygv/6EkPCDAPMDAQsc4IAhxICAZdABBByggAMyMAbzU8ApCNhAB0CADA6soAPIwJMHUrAAC9TgEAIxv0I8YH5ImJ8KVUiB5gRACCEYABWMgAAEyIAPGuEDAWpQwwHIoIZqEEAN0q1gghquoIgIWMECjCjEJCLxiDV8wRKMSAMjLtGJRkSiJK4IhgfUcAM1DGMYBxACjAhEJl7AggFAAAEDrBEJbiyDBNwIBga4kQw0cCMRSuBGEvDRAH7sox0B+cdAGiASLehjDfqYSEL28Y97dKMaHuDGL7jxkm7EQg/CohGOTKEHixjAAPDwAVHiYQOiBAMERFmFIojyFScQpQhiOYBZypKWtqwlLld5tDaIcgRIuKUwj0ZLFexAlMhMphdSMIWXkKQgVZiINKdJzWo6pAoX0UhAAAA7";

// consult http://xml.evernote.com/pub/enml2.dtd
var evernoteAllowedElements = {
    "en-note": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "bgcolor": 1, "text": 1, "xmlns": 1 },
    "en-crypt": { "hint": 1, "cipher": 1, "length": 1 },
    "en-todo": { "checked": 1 },
    "en-media": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "type": 1, "hash": 1, "height": 1, "width": 1, "usemap": 1, "align": 1, "border": 1, "hspace": 1, "vspace": 1, "longdesc": 1, "alt": 1 },
    "a": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "accesskey": 1, "tabindex": 1, "charset": 1, "type": 1, "name": 1, "href": 1, "hreflang": 1, "rel": 1, "rev": 1, "shape": 1, "coords": 1, "target": 1 },
    "abbr": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "acronym": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "address": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "area": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "accesskey": 1, "tabindex": 1, "shape": 1, "coords": 1, "href": 1, "nohref": 1, "alt": 1, "target": 1 },
    "b": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "bdo": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "big": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "blockquote": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "cite": 1 },
    "br": { "style": 1, "title": 1, "clear": 1 },
    "caption": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "center": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "cite": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "code": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "col": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1, "span": 1, "width": 1 },
    "colgroup": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1, "span": 1, "width": 1 },
    "dd": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "del": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "cite": 1, "datetime": 1 },
    "dfn": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "div": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "dl": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "compact": 1 },
    "dt": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "em": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "font": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "size": 1, "color": 1, "face": 1 },
    "h1": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "h2": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "h3": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "h4": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "h5": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "h6": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "hr": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "noshade": 1, "size": 1, "width": 1 },
    "i": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "img": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "src": 1, "alt": 1, "name": 1, "longdesc": 1, "height": 1, "width": 1, "usemap": 1, "ismap": 1, "align": 1, "border": 1, "hspace": 1, "vspace": 1 },
    "ins": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "cite": 1, "datetime": 1 },
    "kbd": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "li": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "type": 1, "value": 1 },
    "map": { "lang": 1, "xml:lang": 1, "dir": 1, "title": 1, "name": 1 },
    "ol": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "type": 1, "compact": 1, "start": 1 },
    "p": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1 },
    "pre": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "width": 1, "xml:space": 1 },
    "q": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "cite": 1 },
    "s": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "samp": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "small": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "span": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "strike": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "strong": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "sub": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "sup": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "table": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "summary": 1, "width": 1, "border": 1, "cellspacing": 1, "cellpadding": 1, "align": 1, "bgcolor": 1 },
    "tbody": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1 },
    "td": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1, "abbr": 1, "rowspan": 1, "colspan": 1, "nowrap": 1, "bgcolor": 1, "width": 1, "height": 1 },
    "tfoot": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1 },
    "th": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1, "abbr": 1, "rowspan": 1, "colspan": 1, "nowrap": 1, "bgcolor": 1, "width": 1, "height": 1 },
    "thead": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1 },
    "tr": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "align": 1, "char": 1, "charoff": 1, "valign": 1, "bgcolor": 1 },
    "tt": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "u": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 },
    "ul": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1, "type": 1, "compact": 1 },
    "var": { "style": 1, "title": 1, "lang": 1, "xml:lang": 1, "dir": 1 }
};

function isEvernoteAllowed(nodeName, attrName) {
    nodeName = nodeName.toLowerCase();
    if (typeof(attrName) === "undefined") return typeof(evernoteAllowedElements[nodeName]) !== "undefined";
    return typeof(evernoteAllowedElements[nodeName][attrName]) !== "undefined";
}

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
            convert_enex2sb(input, output, data.includeSubdir, data.includeFileName, data.uniqueId);
            break;
        case "maf2sb":
            convert_maf2sb(input, output, data.includeSubdir, data.includeFileName, data.uniqueId);
            break;
        case "html2sb":
            convert_html2sb(input, output, data.includeSubdir, data.uniqueId);
            break;
        case "sb2enex":
            convert_sb2enex(input, output, data.sb2enex_addTags, data.sb2enex_folderAsTag, data.sb2enex_importIndexHTML, data.sb2enex_importCommentMetadata, data.sb2enex_importSourcePack, data.sb2enex_mergeOutput);
            break;
        default:
            print("ERROR: unknown method.");
            break;
    }
}

function convert_finish() {
    print("");
    print("done.");
    document.getElementById("sbconvConverterWindow").buttons = "accept";
}

function convert_enex2sb(input, output, includeSubdir, includeFileName, uniqueId) {
    print("convert method: .enex --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include subfolders: " + (includeSubdir ? "yes" : "no"));
    print("include filename: " + (includeFileName ? "yes" : "no"));
    print("prevent duplicate ID: " + (uniqueId ? "yes" : "no"));
    var files = getDescFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile() && file.leafName.match(/\.enex/i)) ) continue;
            print("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            if (!includeFileName) subPath.pop();
            subPath = subPath.join("\t");
            loadXMLFile(file, parseEnex, this);
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        convert_finish();
    }

    function parseEnex(xmlDoc) {
        // check if it's enex, skip if not
        if (xmlDoc && xmlDoc.documentElement.nodeName == "en-export") {
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
            var resHash2Data = {};

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
            } catch(ex){}

            // modify
            try {
                item.modify = parseEnexTime(note.getElementsByTagName("updated")[0].textContent);
            } catch(ex){}

            // id
            item.id = item.create || item.modify || sbConvCommon.getTimeStamp();
            if (uniqueId) item.id = getUniqueId(item.id);

            // source
            try {
                var noteAttributesObj = note.getElementsByTagName("note-attributes")[0];
                var sourceObj = noteAttributesObj.getElementsByTagName("source-url")[0];
                var source = sourceObj.textContent;
                // Evernote uses a bizard url format for local files, fix it
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
                    if (encoding != "base64") continue;

                    // read sub elements and store them in metadata
                    var metadata = { attributes: {} };
                    ["mime", "width", "height"].forEach(function(meta){
                        try { metadata[meta] = res.getElementsByTagName(meta)[0].textContent; } catch(ex){}
                    }, this);
                    var attributes = res.getElementsByTagName("resource-attributes")[0];
                    ["file-name", "source-url", "timestamp ", "latitude", "longitude", "altitude", "camera-make", "camera-model", "attachment", "application-data"].forEach(function(meta){
                        try { metadata.attributes[meta] = attributes.getElementsByTagName(meta)[0].textContent; } catch(ex){}
                    }, this);

                    // calculate the resource hash
                    var data_base64 = data.textContent;
                    var data_bin = window.atob(data_base64);
                    var resFile = getUniqueFile(destDir, metadata["attributes"]["file-name"], metadata["mime"]);
                    var ostream = Components.classes['@mozilla.org/network/file-output-stream;1'].createInstance(Components.interfaces.nsIFileOutputStream);
                    ostream.init(resFile, -1, 0666, 0);
                    ostream.write(data_bin, data_bin.length);
                    ostream.close();
                    if (item.modify) resFile.lastModifiedTime = sbConvCommon.getLastModifiedTime(item.modify);
                    var hash = hex_md5(data_bin);

                    // store the hash-metadata table
                    metadata.filename = resFile.leafName;
                    resHash2Data[hash] = metadata;
                } catch(ex){
                    console.debug(ex);
                }
            }

            // content
            var content = parseEnexContent(note.getElementsByTagName("content")[0].firstChild.data);

            // wrap the metadata
            if (item.comment) item.comment = "<evernote>" + item.comment + "</evernote>";

            // output
            sbConvCommon.writeIndexDat(item, indexDat);
            sbConvCommon.writeFile(indexHTML, content, "UTF-8", true);
            if (item.modify) indexHTML.lastModifiedTime = sbConvCommon.getLastModifiedTime(item.modify);

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
                // replace invalid HTML format <badtag /> with <badtag></badtag>
                data = data.replace(/<(([^\s>]+)(?: [^>]+)?)\/>/g, function(){
                    if ( ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(arguments[2].toLowerCase()) !== -1 ) return arguments[0];
                    return "<" + arguments[1] + "></" + arguments[2] + ">";
                });

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
                        // remove the old node
                        node.parentNode.removeChild(node);
                    }
                    // -- en-media
                    var nodes = ennote.getElementsByTagName("en-media");
                    for (var i=nodes.length-1; i>=0; i--) {
                        var node = nodes[i];
                        var mime = node.getAttribute("type");
                        var hash = node.getAttribute("hash");
                        var metadata = resHash2Data[hash];
                        var filename = metadata.filename;
                        // new node in replace of the old one
                        if (mime && mime.match(/image\/(bmp|jpeg|gif|png|svg)/)) {
                            var node2 = htmlDoc.createElement("IMG");
                            node2.setAttribute("src", filename);
                            node2.setAttribute("alt", filename);
                            node.parentNode.insertBefore(node2, node);
                        }
                        else {
                            var node2 = htmlDoc.createElement("A");
                            node2.setAttribute("href", filename);
                            node2.textContent = filename;
                            node.parentNode.insertBefore(node2, node);
                        }
                        ["align", "alt", "longdesc", "height", "width", "border", "hspace", "vspace", "usemap", "style", "title", "lang", "xml:lang", "dir"].forEach(function(attr){
                            if (node.hasAttribute(attr)) node2.setAttribute(attr, node.getAttribute(attr));
                        }, this);
                        for (var j in metadata) {
                            if (j != "filename" && j != "attributes") {
                                node2.setAttribute("data-evernote-" + j, metadata[j]);
                            }
                        }
                        for (var j in metadata.attributes) {
                            node2.setAttribute("data-evernote-attributes-" + j, metadata.attributes[j]);
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
                        node2.setAttribute("title", "Evernote Crypt");
                        node2.setAttribute("alt", node.textContent);  // crypted data string
                        ["hint", "cipher", "length"].forEach(function(attr){
                            if (node.hasAttribute(attr)) node2.setAttribute("data-evernote-" + attr, node.getAttribute(attr));
                        }, this);
                        node2.setAttribute("src", evernoteCryptImage);  // crypt image
                        node.parentNode.insertBefore(node2, node);
                        // remove the old node
                        node.parentNode.removeChild(node);
                    }
                    // -- span (highlight)
                    var nodes = ennote.getElementsByTagName("span");
                    for (var i=nodes.length-1; i>=0; i--) {
                        var node = nodes[i];
                        if (!node.hasAttribute("style") || !node.getAttribute("style").match(/(-evernote-highlight:\s*true;)/i)) continue;
                        node.setAttribute("style", node.getAttribute("style").replace(RegExp.$1, ""));
                        node.setAttribute("class", "linemarker-marked-line");
                        node.setAttribute("data-sb-obj", "linemarker");
                    }

                    // set output html
                    html = '<!DOCTYPE html>\n'
                        + '<html>\n'
                        + '<head>\n'
                        + '  <meta charset="UTF-8">\n'
                        + '  <title data-sb-obj="title">' + item.title + '</title>\n'
                        + '  <meta name="viewport" content="width=device-width">\n'
                        + '</head>\n'
                        + nodeToTag(ennote, "body", ["bgcolor", "text", "style", "title", "lang", "xml:lang", "dir"]) + '\n'
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

        /**
         * reads data from aNode and returns a new node in string
         */
        function nodeToTag(aNode, aTagName, aAllowedAttrs) {
            if (!aTagName) aTagName = aNode.tagName;
            aTagName = aTagName.toLowerCase();
            if (!aAllowedAttrs) aAllowedAttrs = [];

            var tag = "<" + aTagName;
            for ( var i=0; i<aNode.attributes.length; i++ ) {
                if (aAllowedAttrs.indexOf(aNode.attributes[i].name) !== -1) {
                    tag += ' ' + aNode.attributes[i].name + '="' + sbConvCommon.escapeHTML(aNode.attributes[i].value) + '"';
                }
            }
            tag += ">" + aNode.innerHTML + "</" + aTagName + ">";
            return tag;
        }

        function getUniqueFile(dir, name, mime) {
            if (name) {
                var name = sbConvCommon.validateFileName(name);
            }
            else {
                if (mime && mime.match(/image\/(\w+)/i)) {
                    var ext = RegExp.$1;
                    if (ext == "jpeg") ext = "jpg";
                    else if (ext == "tiff") ext = "tif";
                    var name = "Image." + ext;
                }
                else var name = "Attachment.dat";
            }
            var LR = sbConvCommon.splitFileName(name);
            var num = 0, destFile, fileName;
            do {
                fileName = ( num > 0 ) ? LR[0] + "[" + num + "]." + LR[1] : name;
                destFile = dir.clone();
                destFile.append(fileName);
                num++;
            }
            while ( destFile.exists() );
            return destFile;
        }
    }
}

function convert_maf2sb(input, output, includeSubdir, includeFileName, uniqueId) {
    print("convert method: .maff --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include subfolders: " + (includeSubdir ? "yes" : "no"));
    print("include filename: " + (includeFileName ? "yes" : "no"));
    print("prevent duplicate ID: " + (uniqueId ? "yes" : "no"));
    print("");
    var files = getDescFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile() && file.leafName.match(/\.maff/i)) ) continue;
            print("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            if (!includeFileName) subPath.pop();
            subPath = subPath.join("\t");
            parseMaf(file);
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        convert_finish();
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
            item.id = item.create = item.modify = parseMafTime(ds.getMafProperty(res.archiveTime));
            if (uniqueId) item.id = getUniqueId(item.id);
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

function convert_html2sb(input, output, includeSubdir, uniqueId) {
    print("convert method: HTML --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include subfolders: " + (includeSubdir ? "yes" : "no"));
    print("prevent duplicate ID: " + (uniqueId ? "yes" : "no"));
    print("");
    var files = getDescHtmlFiles(input, includeSubdir);
    var file = null;
    var subPath = null;
    filesNext();

    function filesNext() {
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile()) ) continue;
            if (file.leafName.match(/\.(x?html|htm|xht)$/i)) {
                print("converting HTML pack: '" + file.path + "'");
                subPath = getSubPath(input, file);
                subPath.pop();
                subPath = subPath.join("\t");
                parseHtmlPack(file);
            }
            else {
                print("converting file: '" + file.path + "'");
                subPath = getSubPath(input, file);
                subPath.pop();
                subPath = subPath.join("\t");
                parseFile(file);
            }
            // next file (async)
            setTimeout(filesNext, 0);
            return;
        }
        // finished
        filesFinish();
    }

    function filesFinish() {
        convert_finish();
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
        
        // create item
        var item = sbConvCommon.newItem();

        // -- title
        try {
            item.title = file.leafName.replace(/\.\w+$/, "");
        } catch(ex){}

        // -- time
        var time = parseHtmlPackTime(file.lastModifiedTime);
        item.id = item.create = item.modify = time;
        if (uniqueId) item.id = getUniqueId(item.id);

        // -- source
        if ( htmlTxt.match(/<!-- saved from url=\((\d+)\)(.*?) -->/i) ) {
            if ( RegExp.$2.length == parseInt(RegExp.$1, 10) ) {
                item.source = sbConvCommon.convertToUnicode(RegExp.$2, charset);
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

    function parseFile(file) {
        // create item
        var item = sbConvCommon.newItem();

        // -- title
        try {
            item.title = file.leafName.replace(/\.\w+$/, "");
        } catch(ex){}

        // -- time
        var time = parseFileTime(file.lastModifiedTime);
        item.id = item.create = item.modify = time;
        if (uniqueId) item.id = getUniqueId(item.id);

        // -- type
        item.type = "file";

        // -- icon
        item.icon = "moz-icon://" + sbConvCommon.escapeFileName(file.leafName) + "?size=16";

        // -- char
        // @TODO: detect charset of text files?
        item.chars = "UTF-8";

        // -- folder
        item.folder = subPath;

        // output
        var destDir = getUniqueDir(output, item.title);
        print("exporting file: '" + item.title + "' --> '" + destDir.leafName + "'");
        var indexDat = destDir.clone(); indexDat.append("index.dat");
        sbConvCommon.writeIndexDat(item, indexDat);
        file.copyTo(destDir, file.leafName);
        var indexHtml = '<html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;URL=./' + sbConvCommon.escapeHTML(sbConvCommon.escapeFileName(file.leafName)) + '"></head><body></body></html>';
        var indexHtmlFile = destDir.clone(); indexHtmlFile.append("index.html");
        sbConvCommon.writeFile(indexHtmlFile, indexHtml, "UTF-8", true);
        if (item.modify) indexHtmlFile.lastModifiedTime = sbConvCommon.getLastModifiedTime(item.modify);

        function parseFileTime(time) {
            var date = new Date(time);
            return sbConvCommon.getTimeStamp(date);
        }
    }
}

function convert_sb2enex(input, output, addTags, folderAsTag, importIndexHTML, importCommentMetadata, importSourcePack, mergeOutput) {
    print("convert method: ScrapBook format --> .enex");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("add tags: " + (addTags || ""));
    print("import index.html: " + (importIndexHTML ? "yes" : "no"));
    print("write folder to tag: " + (folderAsTag ? "yes" : "no"));
    print("import metadata from comment: " + (importCommentMetadata ? "yes" : "no"));
    print("import source data pack: " + (importSourcePack ? "yes" : "no"));
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    // en-export
    var enExport = '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export2.dtd">\n'
        + '<en-export>\n</en-export>';
    var enExportDoc = loadXML(enExport);
    var enExportElem = enExportDoc.documentElement;
    enExportElem.setAttribute("export-date", parseScrapBookTime(sbConvCommon.getTimeStamp()));
    enExportElem.setAttribute("application", "ScrapBook X Converter");
    enExportElem.setAttribute("version", "1.0.x");

    var dirs = input.directoryEntries;
    dirsNext();

    function dirsNext() {
        while (dirs.hasMoreElements()) {
            var dir = dirs.getNext().QueryInterface(Components.interfaces.nsIFile);
            if ( !(dir.exists() && dir.isDirectory()) ) continue;
            var indexFile = dir.clone();
            indexFile.append("index.html");
            if ( !(indexFile.exists() && indexFile.isFile()) ) continue;
            var indexData = dir.clone();
            indexData.append("index.dat");
            if ( !(indexData.exists() && indexData.isFile()) ) continue;
            parseScrapBook(dir, indexFile, indexData, enExportDoc);
            // next dir (async)
            setTimeout(dirsNext, 0);
            return;
        }
        // finished
        if (mergeOutput) {
            var destFile = output.clone();
            destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".enex");
            sbConvCommon.writeFile(destFile, XMLString(enExportDoc), "UTF-8", true);
            print("exporting file: '" + destFile.leafName + "'");
        }
        dirsFinish();
    }

    function dirsFinish() {
        convert_finish();
    }
    
    function parseScrapBook(dir, indexFile, indexData, enExportDoc) {
        print("converting ScrapBook data: '" + dir.path + "'");
        var item = sbConvCommon.parseIndexDat(indexData);
        if (!mergeOutput) {
            var enExportDoc = enExportDoc.cloneNode(true);
        }
        var enExportElem = enExportDoc.documentElement;

        var noteElem = enExportDoc.createElement("note");
        enExportElem.appendChild(noteElem);

        // en-note
        var enNote = '<?xml version="1.0" encoding="UTF-8"?>\n'
            + '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n'
            + '\n'
            + '<en-note></en-note>';
        var enNoteDoc = loadXML(enNote);
        var enNoteElem = enNoteDoc.documentElement;

        // prepare evernote attributes
        if (importCommentMetadata && item.comment.match(/(<evernote>.*?<\/evernote>)/)) {
            var importAttrDoc = loadXML(RegExp.$1);
        }

        // -- title
        var elem = enExportDoc.createElement("title");
        elem.textContent = item.title;
        noteElem.appendChild(elem);

        // -- content
        var contentElem = enExportDoc.createElement("content");
        noteElem.appendChild(contentElem);

        // -- created
        var elem = enExportDoc.createElement("created");
        elem.textContent = parseScrapBookTime(item.create || "");
        noteElem.appendChild(elem);

        // -- updated
        var elem = enExportDoc.createElement("updated");
        elem.textContent = parseScrapBookTime(item.modify || "");
        noteElem.appendChild(elem);

        // -- tag
        if (importAttrDoc) {
            var tags = importAttrDoc.getElementsByTagName("tag");
            while (tags.length) {
                var tag = tags[0];
                var elem = enExportDoc.createElement("tag");
                elem.textContent = tag.textContent;
                noteElem.appendChild(elem);
                tag.parentNode.removeChild(tag);
            }
        }
        if (addTags) {
            var tags = addTags.split(",");
            for (var i=0, I=tags.length; i<I;++i) {
                var tag = tags[i].replace(/^ +/, "").replace(/ +$/, "");
                if (!tag) continue;
                var elem = enExportDoc.createElement("tag");
                elem.textContent = tag;
                noteElem.appendChild(elem);
            }
        }
        if (folderAsTag) {
            var tag = item.folder.replace(/,/g, "_").replace(/\t/g, "/").replace(/^ +/, "").replace(/ +$/, "");
            if (tag) {
                var elem = enExportDoc.createElement("tag");
                elem.textContent = tag;
                noteElem.appendChild(elem);
            }
        }

        // -- note-attributes
        var attributes = enExportDoc.createElement("note-attributes");
        var overwriteSourceUrl = false;
        var overwriteSourceApplication = false;
        if (importAttrDoc) {
            var tags = importAttrDoc.documentElement.childNodes;
            for (var i=0, I=tags.length; i<I; ++i) {
                var tag = tags[i];
                switch (tag.nodeName) {
                    case "source-url":
                        overwriteSourceUrl = true;
                        break;
                    case "source-application":
                        overwriteSourceApplication = true;
                        break;
                }
                var elem = enExportDoc.createElement(tag.nodeName);
                elem.textContent = tag.textContent;
                attributes.appendChild(elem);
            }
        }
        // ---- source-url
        if (!overwriteSourceUrl && item.source) {
            var elem = enExportDoc.createElement("source-url");
            elem.textContent = item.source;
            attributes.appendChild(elem);
        }
        // ---- source-application
        if (!overwriteSourceApplication) {
            var elem = enExportDoc.createElement("source-application");
            elem.textContent = "ScrapBook";
            attributes.appendChild(elem);
        }
        // ----
        noteElem.appendChild(attributes);

        // import main content
        if (importIndexHTML) {
            parseScrapBookContent(indexFile, item, enNoteDoc, enNoteElem, enExportDoc, noteElem);
        }

        // import source pack
        if (importSourcePack) {
            var zipFile = output.clone();
            zipFile.append(sbConvCommon.getTimeStamp() + ".zip");
            makeZip(dir, zipFile);
            if (item.modify) zipFile.lastModifiedTime = sbConvCommon.getLastModifiedTime(item.modify);
            var data = readBinary(zipFile);
            var data_b64 = window.btoa(data);
            var data_hash = hex_md5(data);
            zipFile.remove(true);

            // resource
            var resource = enExportDoc.createElement("resource");
            // -- data
            var elem = enExportDoc.createElement("data");
            elem.setAttribute("encoding", "base64");
            elem.textContent = data_b64;
            resource.appendChild(elem);
            // -- mime
            var elem = enExportDoc.createElement("mime");
            elem.textContent = "application/zip";
            resource.appendChild(elem);
            // -- resource-attributes
            var resourceAttributes = enExportDoc.createElement("resource-attributes");
            // ---- file-name
            var elem = enExportDoc.createElement("file-name");
            elem.textContent = dir.leafName + ".zip";
            resourceAttributes.appendChild(elem);
            // ---- attachment
            var elem = enExportDoc.createElement("attachment");
            elem.textContent = "true";
            resourceAttributes.appendChild(elem);
            // ----
            resource.appendChild(resourceAttributes);
            // --
            noteElem.appendChild(resource);

            // en-media and a simple box
            var box = enNoteDoc.createElement("div");
            box.setAttribute("style", "margin-top: 1em; border-top: 1px solid #000; padding: 1em;");
            var elem = enNoteDoc.createElement("en-media");
            elem.setAttribute("hash", data_hash);
            elem.setAttribute("type", "text/html");
            box.appendChild(elem);
            enNoteElem.appendChild(box);
        }

        // output
        contentElem.appendChild(enExportDoc.createCDATASection(XMLString(enNoteDoc)));
        if (!mergeOutput) {
            var destFile = output.clone();
            destFile.append(dir.leafName + ".enex");
            sbConvCommon.writeFile(destFile, XMLString(enExportDoc), "UTF-8", true);
            print("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
        }
    }

    function parseScrapBookContent(indexFile, item, enNoteDoc, enNoteElem, enExportDoc, noteElem) {
        var html = sbConvCommon.readFile(indexFile);
        var charset = item.chars || "UTF-8";
        html = sbConvCommon.convertToUnicode(html, charset);
        var htmlDoc = loadHTML(html);
        var body = htmlDoc.body;
        if (!body) return;

        // parse elements
        var elems = htmlDoc.getElementsByTagName("*");
        for (var i=elems.length-1; i>=0; i--) {
            var elem = elems[i];
            switch (elem.nodeName) {
                case "HTML":
                    continue;
                case "HEAD":
                    continue;
                case "BODY":
                    continue;
                case "IMG":
                    if (!elem.hasAttribute("src")) break;
                    // en-crypt
                    if (elem.getAttribute("title") === "Evernote Crypt" && elem.hasAttribute("alt") && elem.getAttribute("src") === evernoteCryptImage) {
                        var cryptElem = enNoteDoc.createElement("en-crypt");
                        cryptElem.textContent = elem.getAttribute("alt");  // crypted data string
                        ["hint", "cipher", "length"].forEach(function(attr){
                            var attr2 = "data-evernote-" + attr;
                            if (elem.hasAttribute(attr2)) cryptElem.setAttribute(attr, elem.getAttribute(attr2));
                        }, this);
                        elem.parentNode.insertBefore(cryptElem, elem);
                        elem.parentNode.removeChild(elem);
                        continue;
                    }
                    // en-media
                    var src = elem.getAttribute("src");
                    if (src.indexOf("data:") === 0) {  // data URI
                        var filename = "";
                        src.match(/^data:([^;]*)(?:;charset=([^;,]*))?(;base64)?,([\s\S]*)$/i);
                        var mime = RegExp.$1 || "text/plain", charset = RegExp.$2, base64 = RegExp.$3, data = RegExp.$4;
                        if (base64) {
                            var data_b64 = data;
                            var data_bin = window.atob(data_b64);
                            var data_hash = hex_md5(data_bin);
                        }
                        else if (charset) {
                            var data_bin = sbConvCommon.convertToUnicode(decodeURIComponent(data), charset || "US-ASCII");
                            var data_b64 = window.btoa(data_bin);
                            var data_hash = hex_md5(data_bin);
                        }
                        // not supported yet
                        else {
                            break;
                        }
                    }
                    else if (src.indexOf("://") === -1) {  // normal file
                        var resFile = getFileFromUrl(src);
                        if (!resFile) break;
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = readBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    }
                    else {  // bad scheme
                        break;
                    }
                    // -- resource
                    var resourceElem = enExportDoc.createElement("resource");
                    // ---- data
                    var el = enExportDoc.createElement("data");
                    el.setAttribute("encoding", "base64");
                    el.textContent = data_b64;
                    resourceElem.appendChild(el);
                    // ---- overwrite values
                    if (!elem.hasAttribute("data-evernote-mime") && mime) elem.setAttribute("data-evernote-mime", mime);
                    if (!elem.hasAttribute("data-evernote-attributes-file-name") && filename) elem.setAttribute("data-evernote-attributes-file-name", filename);
                    // ---- resource childs
                    ["mime", "width", "height"].forEach(function(meta){
                        var metaInData = "data-evernote-" + meta;
                        if (elem.hasAttribute(metaInData)) {
                            var el = enExportDoc.createElement(meta);
                            el.textContent = elem.getAttribute(metaInData);
                            resourceElem.appendChild(el);
                            elem.removeAttribute(metaInData);
                        }
                    }, this);
                    // ---- resource-attributes childs
                    var resourceAttributes = enExportDoc.createElement("resource-attributes");
                    ["file-name", "source-url", "timestamp ", "latitude", "longitude", "altitude", "camera-make", "camera-model", "attachment", "application-data"].forEach(function(meta){
                        var metaInData = "data-evernote-attributes-" + meta;
                        if (elem.hasAttribute(metaInData)) {
                            var el = enExportDoc.createElement(meta);
                            el.textContent = elem.getAttribute(metaInData);
                            resourceAttributes.appendChild(el);
                            elem.removeAttribute(metaInData);
                        }
                    }, this);
                    // ----
                    resourceElem.appendChild(resourceAttributes);
                    noteElem.appendChild(resourceElem);
                    // -- media
                    var mediaElem = enNoteDoc.createElement("en-media");
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    var attrs = elem.attributes;
                    for (var k=attrs.length-1; k>=0; k--) {
                        var attr = attrs[k];
                        if (isEvernoteAllowed(mediaElem.nodeName, attr.name)) {
                            mediaElem.setAttribute(attr.name, attr.value);
                        }
                    }
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    continue;
                case "A":
                    if (!elem.hasAttribute("href")) break;
                    // en-media
                    var href = elem.getAttribute("href");
                    if (href.indexOf("data:") === 0) {  // data URI
                        var filename = "";
                        href.match(/^data:([^;]*)(?:;charset=([^;,]*))?(;base64)?,([\s\S]*)$/i);
                        var mime = RegExp.$1 || "text/plain", charset = RegExp.$2, base64 = RegExp.$3, data = RegExp.$4;
                        if (base64) {
                            var data_b64 = data;
                            var data_bin = window.atob(data_b64);
                            var data_hash = hex_md5(data_bin);
                        }
                        else if (charset) {
                            var data_bin = sbConvCommon.convertToUnicode(decodeURIComponent(data), charset || "US-ASCII");
                            var data_b64 = window.btoa(data_bin);
                            var data_hash = hex_md5(data_bin);
                        }
                        // not supported yet
                        else {
                            break;
                        }
                    }
                    else if (href.indexOf("://") === -1) {  // normal file
                        var resFile = getFileFromUrl(href);
                        if (!resFile) break;
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = readBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    }
                    else {  // bad scheme
                        break;
                    }
                    // -- resource
                    var resourceElem = enExportDoc.createElement("resource");
                    // ---- data
                    var el = enExportDoc.createElement("data");
                    el.setAttribute("encoding", "base64");
                    el.textContent = data_b64;
                    resourceElem.appendChild(el);
                    // ---- overwrite values
                    if (!elem.hasAttribute("data-evernote-mime") && mime) elem.setAttribute("data-evernote-mime", mime);
                    if (!elem.hasAttribute("data-evernote-attributes-file-name") && filename) elem.setAttribute("data-evernote-attributes-file-name", filename);
                    if (!elem.hasAttribute("data-evernote-attributes-attachment")) elem.setAttribute("data-evernote-attributes-attachment", "true");
                    // ---- resource childs
                    ["mime", "width", "height"].forEach(function(meta){
                        var metaInData = "data-evernote-" + meta;
                        if (elem.hasAttribute(metaInData)) {
                            var el = enExportDoc.createElement(meta);
                            el.textContent = elem.getAttribute(metaInData);
                            resourceElem.appendChild(el);
                            elem.removeAttribute(metaInData);
                        }
                    }, this);
                    // ---- resource-attributes childs
                    var resourceAttributes = enExportDoc.createElement("resource-attributes");
                    ["file-name", "source-url", "timestamp ", "latitude", "longitude", "altitude", "camera-make", "camera-model", "attachment", "application-data"].forEach(function(meta){
                        var metaInData = "data-evernote-attributes-" + meta;
                        if (elem.hasAttribute(metaInData)) {
                            var el = enExportDoc.createElement(meta);
                            el.textContent = elem.getAttribute(metaInData);
                            resourceAttributes.appendChild(el);
                            elem.removeAttribute(metaInData);
                        }
                    }, this);
                    // ----
                    resourceElem.appendChild(resourceAttributes);
                    noteElem.appendChild(resourceElem);
                    // -- media
                    var mediaElem = enNoteDoc.createElement("en-media");
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    var attrs = elem.attributes;
                    for (var k=attrs.length-1; k>=0; k--) {
                        var attr = attrs[k];
                        if (isEvernoteAllowed(mediaElem.nodeName, attr.name)) {
                            mediaElem.setAttribute(attr.name, attr.value);
                        }
                    }
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    continue;
                case "INPUT":
                    // en-todo
                    if (!(elem.getAttribute("type") === "checkbox" && elem.getAttribute("data-sb-obj") === "todo")) break;
                    var todoElem = enNoteDoc.createElement("en-todo");
                    if (elem.getAttribute("checked") === "checked") todoElem.setAttribute("checked", "true");
                    elem.parentNode.insertBefore(todoElem, elem);
                    elem.parentNode.removeChild(elem);
                    continue;
                case "SPAN":
                    // highlight
                    if (!(elem.getAttribute("data-sb-obj") === "linemarker" && elem.getAttribute("style") === "background-color: rgb(255, 250, 165);")) break;
                    elem.setAttribute("style", "background-color:rgb(255, 250, 165);-evernote-highlight:true;");
                    break;
            }

            // general process
            if (!isEvernoteAllowed(elem.nodeName)) {
                elem.parentNode.removeChild(elem);
                continue;
            }
            var attrs = elem.attributes;
            for (var k=attrs.length-1; k>=0; k--) {
                var attr = attrs[k];
                if (!isEvernoteAllowed(elem.nodeName, attr.name)) elem.removeAttribute(attr.name);
            }
        }
        copyNodeFromHtmlToXml(body, enNoteElem);
        
        function listMakeRegExp(list) {
            var join = list.join("|");
            join = join.replace(/\*/g, ".*")
            return new RegExp("^" + "(" + join + ")" + "$", "i");
        }

        function getFileFromUrl(url) {
            var base = sbConvCommon.convertFilePathToURL(indexFile.parent.path);
            var url = sbConvCommon.resolveURL(base, url);
            var file = sbConvCommon.convertURLToFile(url);
            if ( !(file && file.exists() && file.isFile()) ) return false;
            return file;
        }
    }

    function parseScrapBookTime(time) {
        if (time.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/)) {
            var date = new Date(
                parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10) - 1, parseInt(RegExp.$3, 10),
                parseInt(RegExp.$4, 10), parseInt(RegExp.$5, 10), parseInt(RegExp.$6, 10)
            );
            var date = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1; if ( m < 10 ) m = "0" + m;
            var d = date.getDate();      if ( d < 10 ) d = "0" + d;
            var h = date.getHours();     if ( h < 10 ) h = "0" + h;
            var i = date.getMinutes();   if ( i < 10 ) i = "0" + i;
            var s = date.getSeconds();   if ( s < 10 ) s = "0" + s;
            return y.toString() + m.toString() + d.toString() + "T" + h.toString() + i.toString() + s.toString() + "Z";
        }
        return false;
    }

    function readBinary(aFile) {
        try {
            var istream = Components.classes['@mozilla.org/network/file-input-stream;1'].createInstance(Components.interfaces.nsIFileInputStream);
            istream.init(aFile, -1, -0, false);
            var bstream = Components.classes["@mozilla.org/binaryinputstream;1"].createInstance(Components.interfaces.nsIBinaryInputStream);
            bstream.setInputStream(istream);
            var bytes = bstream.readBytes(bstream.available());
            bstream.close();
            istream.close();
            return bytes;
        }
        catch(ex) {
            return false;
        }
    }

    // replicate the attributes and childNodes from sourceNode to targetNode
    // no namespace, and use lower case name
    function copyNodeFromHtmlToXml(sourceNode, targetNode) {
        var attrs = sourceNode.attributes;
        for (var i=0, I=attrs.length; i<I; i++) {
            targetNode.setAttribute(attrs[i].name, attrs[i].value);
        }
        if (sourceNode.hasChildNodes()) {
            var elems = sourceNode.childNodes;
            for (var i=0, I=elems.length; i<I; i++) {
                var elem = elems[i];
                if (elem.nodeType === 1) {
                    var newElem = targetNode.ownerDocument.createElement(elem.nodeName.toLowerCase());
                    targetNode.appendChild(newElem);
                    copyNodeFromHtmlToXml(elem, newElem);
                }
                else {
                    var newElem = elem.cloneNode(true);
                    targetNode.appendChild(newElem);
                }
            }
        }
    }
}

function loadXMLFile(file, callback, that) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback.call(that, xhr.responseXML);
            }
        }
    }; 
    xhr.open("GET", sbConvCommon.convertFilePathToURL(file.path), true);
    xhr.send();
}

function loadXML(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "application/xml");
}

function XMLString(doc) {
    var oSerializer = new XMLSerializer();
    var sXML = oSerializer.serializeToString(doc);
    return sXML;
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
                result.push(file);
                var filename = file.leafName;
                if (filename.match(/\.(x?html|htm|xht)$/i)) {
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

function getUniqueId(id) {
    if (!arguments.callee.hash) arguments.callee.hash = {};
    var result = parseInt(id, 10);
    while (arguments.callee.hash[result]) result++;
    arguments.callee.hash[result] = true;
    return result.toString();
}

function getUniqueDir(dir, name) {
    var name = name ? sbConvCommon.validateFileName(name).substring(0, 60) : "untitled";

    // filter out invalid folder names (may create a folder in a different name)
    name = name.replace(/^[\s]+/, "").replace(/[.\s]+$/, "");

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

function makeZip(aDir, aZipFile) {
    var zw = Components.classes['@mozilla.org/zipwriter;1'].createInstance(Components.interfaces.nsIZipWriter);
    var pr = {PR_RDONLY: 0x01, PR_WRONLY: 0x02, PR_RDWR: 0x04, PR_CREATE_FILE: 0x08, PR_APPEND: 0x10, PR_TRUNCATE: 0x20, PR_SYNC: 0x40, PR_EXCL: 0x80}; //https://developer.mozilla.org/en-US/docs/PR_Open#Parameters
    zw.open(aZipFile, pr.PR_RDWR | pr.PR_CREATE_FILE | pr.PR_TRUNCATE); //PR_TRUNCATE overwrites if file exists //PR_CREATE_FILE creates file if it dne //PR_RDWR opens for reading and writing
    
    //recursviely add all
    var pathBase = aDir.parent.path;
    var dirArr = [aDir]; //adds dirs to this as it finds it
    for (var i=0; i<dirArr.length; i++) {
        // console.log('adding contents of dir['+i+']: ' + dirArr[i].leafName + ' PATH: ' + dirArr[i].path);
        var dirEntries = dirArr[i].directoryEntries;
        while (dirEntries.hasMoreElements()) {
            var entry = dirEntries.getNext().QueryInterface(Components.interfaces.nsIFile); //entry is instance of nsiFile so here https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIFile
            if (entry.isDirectory()) {
               dirArr.push(entry);
            }
            var relPath = entry.path.replace(pathBase, ''); //need relative because we need to use this for telling addEntryFile where in the zip it should create it, and because zip is a copy of the directory
            // console.log('+' + relPath); //makes it relative to directory the parent dir (dir[0]) so it can succesfully populate files with same names but different folders in this parent dir, needed because recursviely going through all dirs
            var saveInZipAs = relPath.substr(1); //need to get ride of the first '\' forward slash at start otherwise it puts every file added in a folder of its own.
            saveInZipAs = saveInZipAs.replace(/\\/g,'/'); //remember MUST use forward slash (/)
            // console.log('--' + saveInZipAs);
            zw.addEntryFile(saveInZipAs, Components.interfaces.nsIZipWriter.COMPRESSION_NONE, entry, false);
        }
    }
    zw.close();
}
