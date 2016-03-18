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

// zip utils
var nsIZipWriter = Components.interfaces.nsIZipWriter;
var zipPr = {PR_RDONLY: 0x01, PR_WRONLY: 0x02, PR_RDWR: 0x04, PR_CREATE_FILE: 0x08, PR_APPEND: 0x10, PR_TRUNCATE: 0x20, PR_SYNC: 0x40, PR_EXCL: 0x80}; //https://developer.mozilla.org/en-US/docs/PR_Open#Parameters

var startTime;
var warnCount = 0;
var errorCount = 0;

function init() {
    var args = window.arguments;
    if (!args) {
        error("no arguments.");
        return;
    }
    var data = window.arguments[0];
    convert(data);
}

function convert(data) {
    startTime = new Date();
    // check input
    try {
        var input = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
        input.initWithPath(data.input);
        if (!input.exists()) throw "not exist";
    }
    catch(ex) {
        error("input directory '" + input.path + "' does not exist.");
        return;
    }
    if (!input.isDirectory()) {
        error("input directory '" + input.path + "' is not a directory.");
        return;
    }

    // check output
    try {
        var output = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
        output.initWithPath(data.output);
        if (!output.exists()) throw "not exist";
    }
    catch(ex) {
        error("output directory '" + output.path + "' does not exist.");
        return;
    }
    if (!output.isDirectory()) {
        error("output directory '" + output.path + "' is not a directory.");
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
            convert_sb2enex(input, output, data.sb2enex_addTags, data.sb2enex_folderAsTag, data.sb2enex_importIndexHTML, data.sb2enex_importCommentMetadata, data.sb2enex_importSourcePack && data.sb2enex_importSourcePackFormat, data.mergeOutput);
            break;
        case "sb2maff":
            convert_sb2maff(input, output, data.sb2maff_topDirName, data.mergeOutput);
            break;
        case "sb2zip":
            convert_sb2zip(input, output, data.sb2zip_topDirName, data.mergeOutput);
            break;
        case "sb2epub":
            output.initWithPath(data.outputFile);
            convert_sb2epub(input, output, data.sb2epub_includeAllFiles);
            break;
        case "sb2maff2":
            output.initWithPath(data.outputFile);
            convert_sb2maff2(input, output);
            break;
        case "sb2zip2":
            output.initWithPath(data.outputFile);
            convert_sb2zip2(input, output, data.sb2zip2_topDirName);
            break;
        default:
            error("unknown method.");
            break;
    }
}

function convert_finish() {
    print("");
    print("done in " + ((new Date()) - startTime) + " milliseconds." +
        " (" + errorCount + " errors, " + warnCount + " warnings)");
    document.getElementById("sbconvConverterWindow").buttons = "accept";
}

function convert_enex2sb(input, output, includeSubdir, includeFileName, uniqueId) {
    print("convert method: .enex --> ScrapBook data");
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
            error("skip invalid enex: '" + file.path + "'");
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
                    warn("cannot read en-note data and export the original html instead");
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
    print("convert method: .maff --> ScrapBook data");
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
            warn("skip invalid maff: '" + file.path + "'");
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
                error("maff page with index file other than index.html is not supported");
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
    print("convert method: HTML --> ScrapBook data");
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

function convert_sb2enex(input, output, addTags, folderAsTag, importIndexHTML, importCommentMetadata, importSourcePackFormat, mergeOutput) {
    print("convert method: ScrapBook data --> .enex");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("add tags: " + (addTags || ""));
    print("import index.html: " + (importIndexHTML ? "yes" : "no"));
    print("write folder to tag: " + (folderAsTag ? "yes" : "no"));
    print("import metadata from comment: " + (importCommentMetadata ? "yes" : "no"));
    print("import source data pack: " + (importSourcePackFormat || "no"));
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
            try {
                var dir = dirs.getNext().QueryInterface(Components.interfaces.nsIFile);
                if ( !(dir.exists() && dir.isDirectory()) ) continue;
                var indexData = dir.clone();
                indexData.append("index.dat");
                if ( !(indexData.exists() && indexData.isFile()) ) continue;
                var indexFile = dir.clone();
                indexFile.append("index.html");
                parseScrapBook(dir, indexFile, indexData, enExportDoc);
            } catch (ex) {
                error(ex);
            }
            // next dir (async)
            setTimeout(dirsNext, 0);
            return;
        }
        // finished
        dirsFinish();
    }

    function dirsFinish() {
        if (mergeOutput) {
            var destFile = output.clone();
            destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".enex");
            sbConvCommon.writeFile(destFile, XMLString(enExportDoc), "UTF-8", true);
            print("exporting file: '" + destFile.leafName + "'");
        }
        convert_finish();
    }
    
    function parseScrapBook(dir, indexFile, indexData, enExportDoc) {
        print("converting ScrapBook data: '" + dir.path + "'");
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            print("skip item of type: '" + item.type + "'");
            return;
        }
        
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
        elem.textContent = item.title || "(empty)";
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
        if (importAttrDoc) {
            var tags = importAttrDoc.documentElement.childNodes;
            for (var i=0, I=tags.length; i<I; ++i) {
                var tag = tags[i];
                switch (tag.nodeName) {
                    case "source-url":
                        overwriteSourceUrl = true;
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
        // ----
        noteElem.appendChild(attributes);

        // import main content
        if (importIndexHTML) {
            parseScrapBookContent(indexFile, item, enNoteDoc, enNoteElem, enExportDoc, noteElem);
        }

        // import source pack
        var specialCheck = true;

        // special handle for maff format:
        // if index.rdf already exists, warn out
        if (importSourcePackFormat === "maff") {
            var rdfFile = dir.clone(); rdfFile.append("index.rdf");
            if (rdfFile.exists()) {
                warn("skip importing maff since '" + rdfFile.path + "' already exists.");
                specialCheck = false;
            }
        }

        if (importSourcePackFormat && specialCheck) {
            switch (importSourcePackFormat) {
                case "zip":
                    var zipFile = output.clone();
                    zipFile.append(sbConvCommon.getTimeStamp() + ".zip");
                    var zw = zipOpen(zipFile);
                    zipAddDir(zw, dir);
                    zipClose(zw);
                    break;
                case "maff":
                    // generate index.rdf content
                    var rdfContent = '<?xml version="1.0"?>\n' +
                        '<RDF:RDF xmlns:MAF="http://maf.mozdev.org/metadata/rdf#"\n' +
                        '         xmlns:NC="http://home.netscape.com/NC-rdf#"\n' +
                        '         xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
                        '  <RDF:Description RDF:about="urn:root">\n' +
                        '    <MAF:originalurl RDF:resource="' + sbConvCommon.escapeHTML(item.source) + '"/>\n' +
                        '    <MAF:title RDF:resource="' + sbConvCommon.escapeHTML(item.title) + '"/>\n' +
                        '    <MAF:archivetime RDF:resource="' + sbConvCommon.timeStampToDate(item.id) + '"/>\n' +
                        '    <MAF:indexfilename RDF:resource="index.html"/>\n' +
                        '    <MAF:charset RDF:resource="' + sbConvCommon.escapeHTML(item.chars) + '"/>\n' +
                        '  </RDF:Description>\n' +
                        '</RDF:RDF>\n';
                    var overwriteName = sbConvCommon.timeStampToDate(item.id).valueOf() + "_" + Math.floor(Math.random() * 1000);

                    var zipFile = output.clone();
                    zipFile.append(sbConvCommon.getTimeStamp() + ".maff");
                    var zw = zipOpen(zipFile);
                    zipAddFile(zw, overwriteName + "/index.rdf", rdfContent);
                    zipAddDir(zw, dir, overwriteName);
                    zipClose(zw);
                    break;
            }

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
            elem.textContent = zipFile.leafName;
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
        if ( !(indexFile.exists() && indexFile.isFile()) ) return;
        var html = sbConvCommon.readFile(indexFile);
        var charset = item.chars || "UTF-8";
        html = sbConvCommon.convertToUnicode(html, charset);
        var htmlDoc = loadHTML(html);
        var body = htmlDoc.body;
        if (!body) return;

        // parse elements
        var metaRefreshTarget = false;
        Array.prototype.slice.call(htmlDoc.getElementsByTagName("*")).forEach(function(elem){
            if (!elem.parentNode) return;  // skip nodes that are already removed from the DOM
            switch (elem.nodeName) {
                case "META":
                    if (metaRefreshTarget) break;  // only the first one should work
                    if ( !(elem.hasAttribute("http-equiv") && elem.getAttribute("http-equiv").toLowerCase() === "refresh" && elem.getAttribute("content").match(/^(\d+;\s*url=)(.*)$/i)) ) break;
                    metaRefreshTarget = getFileFromUrl(RegExp.$2);
                    return;
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
                        return;
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
                    else if (src.indexOf("://") === -1) {  // relative-linked file
                        var resFile = getFileFromUrl(src);
                        if ( !(resFile && resFile.exists() && resFile.isFile()) ) {
                            elem.setAttribute("src", sbConvCommon.convertFilePathToURL(resFile.path));
                            break;
                        }
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = readBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    }
                    else {  // general URL
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
                    if (!elem.hasAttribute("data-evernote-mime") && mime) {
                        elem.setAttribute("data-evernote-mime", mime);
                    }
                    if (!elem.hasAttribute("data-evernote-attributes-file-name") && filename) {
                        elem.setAttribute("data-evernote-attributes-file-name", filename);
                    }
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
                    Array.prototype.slice.call(elem.attributes).forEach(function(attr){
                        mediaElem.setAttribute(attr.name, attr.value);
                    });
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
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
                    else if (href.indexOf("://") === -1) {  // relative-linked file
                        var resFile = getFileFromUrl(href);
                        if ( !(resFile && resFile.exists() && resFile.isFile()) ) {
                            elem.setAttribute("href", sbConvCommon.convertFilePathToURL(resFile.path));
                            break;
                        }
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = readBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    }
                    else {  // general URL
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
                    if (!elem.hasAttribute("data-evernote-mime") && mime) {
                        elem.setAttribute("data-evernote-mime", mime);
                    }
                    if (!elem.hasAttribute("data-evernote-attributes-file-name") && filename) {
                        elem.setAttribute("data-evernote-attributes-file-name", filename);
                    }
                    if (!elem.hasAttribute("data-evernote-attributes-attachment")) {
                        elem.setAttribute("data-evernote-attributes-attachment", "true");
                    }
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
                    Array.prototype.slice.call(elem.attributes).forEach(function(attr){
                        mediaElem.setAttribute(attr.name, attr.value);
                    });
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
                case "INPUT":
                    // en-todo
                    if (!(elem.getAttribute("type") === "checkbox" && elem.getAttribute("data-sb-obj") === "todo")) break;
                    var todoElem = enNoteDoc.createElement("en-todo");
                    if (elem.getAttribute("checked") === "checked") todoElem.setAttribute("checked", "true");
                    elem.parentNode.insertBefore(todoElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
                case "SPAN":
                    // highlight
                    if (!(elem.getAttribute("data-sb-obj") === "linemarker" && elem.getAttribute("style") === "background-color: rgb(255, 250, 165);")) break;
                    elem.setAttribute("style", "background-color:rgb(255, 250, 165);-evernote-highlight:true;");
                    break;
            }
        });
        // if there is a meta-refresh, leave only the redirect target file
        if (metaRefreshTarget) {
            // clear already-added body and resources
            Array.prototype.slice.call(body.attributes).forEach(function(attr){
                body.removeAttribute(attr.name);
            });
            Array.prototype.slice.call(body.childNodes).forEach(function(elem){
                elem.parentNode.removeChild(elem);
            });
            Array.prototype.slice.call(noteElem.getElementsByTagName("resource")).forEach(function(elem){
                elem.parentNode.removeChild(elem);
            });
            if (metaRefreshTarget.exists() && metaRefreshTarget.isFile()) {
                // data
                var filename = metaRefreshTarget.leafName;
                var mime = sbConvCommon.getFileMime(metaRefreshTarget);
                var data_bin = readBinary(metaRefreshTarget);
                var data_b64 = window.btoa(data_bin);
                var data_hash = hex_md5(data_bin);
                // -- resource
                var resourceElem = enExportDoc.createElement("resource");
                // ---- data
                var el = enExportDoc.createElement("data");
                el.setAttribute("encoding", "base64");
                el.textContent = data_b64;
                resourceElem.appendChild(el);
                // ---- mime
                var el = enExportDoc.createElement("mime");
                el.textContent = mime;
                resourceElem.appendChild(el);
                // ---- resource-attributes
                var resourceAttributes = enExportDoc.createElement("resource-attributes");
                var el = enExportDoc.createElement("file-name");
                el.textContent = filename;
                resourceAttributes.appendChild(el);
                resourceElem.appendChild(resourceAttributes);
                noteElem.appendChild(resourceElem);
                // -- en-media
                var mediaElem = enNoteDoc.createElement("en-media");
                mediaElem.setAttribute("hash", data_hash);
                mediaElem.setAttribute("type", mime);
                body.appendChild(mediaElem);
            }
        }
        copyNodeFromHtmlToXml(body, enNoteElem);

        function getFileFromUrl(url) {
            var base = sbConvCommon.convertFilePathToURL(indexFile.parent.path);
            var url = sbConvCommon.resolveURL(base, url);
            var file = sbConvCommon.convertURLToFile(url);
            return file;
        }

        // copy Evernote available attributes and childNodes from sourceNode to targetNode recursively
        // no namespace, use lower case name
        function copyNodeFromHtmlToXml(sourceNode, targetNode) {
            // copy attributes
            Array.prototype.slice.call(sourceNode.attributes).forEach(function(attr){
                if (isEvernoteAllowed(targetNode.nodeName, attr.name)) {
                    targetNode.setAttribute(attr.name, attr.value);
                }
            });
            if (!sourceNode.hasChildNodes()) return;
            Array.prototype.slice.call(sourceNode.childNodes).forEach(function(elem){
                if (elem.nodeType === 1) {
                    if (isEvernoteAllowed(elem.nodeName)) {
                        var newElem = targetNode.ownerDocument.createElement(elem.nodeName.toLowerCase());
                        targetNode.appendChild(newElem);
                        copyNodeFromHtmlToXml(elem, newElem);
                    }
                }
                else {
                    var newElem = elem.cloneNode(true);
                    targetNode.appendChild(newElem);
                }
            });
        }
    }

    function parseScrapBookTime(time) {
        var date = sbConvCommon.timeStampToDate(time);
        if (date) {
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

    function isEvernoteAllowed(nodeName, attrName) {
        nodeName = nodeName.toLowerCase();
        if (typeof(attrName) === "undefined") return typeof(evernoteAllowedElements[nodeName]) !== "undefined";
        return typeof(evernoteAllowedElements[nodeName][attrName]) !== "undefined";
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
}

function convert_sb2maff(input, output, topDirName, mergeOutput) {
    print("convert method: ScrapBook data --> .maff");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("entry directory name: " + topDirName);
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    if (mergeOutput) {
        var destFile = output.clone();
        destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".maff");
        var zipWritter = zipOpen(destFile);
        print("generating file: '" + destFile.leafName + "' ...");
    }

    var dirs = input.directoryEntries;
    dirsNext();

    function dirsNext() {
        while (dirs.hasMoreElements()) {
            try {
                var dir = dirs.getNext().QueryInterface(Components.interfaces.nsIFile);
                if ( !(dir.exists() && dir.isDirectory()) ) continue;
                var indexData = dir.clone();
                indexData.append("index.dat");
                if ( !(indexData.exists() && indexData.isFile()) ) continue;
                var indexFile = dir.clone();
                indexFile.append("index.html");
                parseScrapBook(dir, indexFile, indexData);
            } catch (ex) {
                error(ex);
            }
            // next dir (async)
            setTimeout(dirsNext, 0);
            return;
        }
        // finished
        dirsFinish();
    }

    function dirsFinish() {
        if (mergeOutput) {
            print("exported file: '" + destFile.leafName + "'");
            zipClose(zipWritter);
        }
        convert_finish();
    }
    
    function parseScrapBook(dir, indexFile, indexData) {
        print("converting ScrapBook data: '" + dir.path + "'");

        // load item data
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            print("skip item of type: '" + item.type + "'");
            return;
        }

        // open the zip file if not merged output
        if (mergeOutput) {
            var zw = zipWritter;
        } else {
            var destFile = output.clone();
            destFile.append(dir.leafName + ".maff");
            print("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
            var zw = zipOpen(destFile);
        }

        // check index.rdf
        // if already exists, throw an error
        var rdfFile = dir.clone(); rdfFile.append("index.rdf");
        if (rdfFile.exists()) {
            throw "File '" + rdfFile.path + "' already exists.";
        }

		// determine top level folder name
        switch (topDirName) {
            case "id":
                var overwriteName = getUniqueId(item.id);
                break;
            case "maff":
                var overwriteName = sbConvCommon.timeStampToDate(item.id).valueOf() + 
                "_" + Math.floor(Math.random() * 1000);
                break;
            case "dir":
            default:
                var overwriteName = dir.leafName;
        }

        // generate index.rdf content
        var rdfContent = '<?xml version="1.0"?>\n' +
            '<RDF:RDF xmlns:MAF="http://maf.mozdev.org/metadata/rdf#"\n' +
            '         xmlns:NC="http://home.netscape.com/NC-rdf#"\n' +
            '         xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '  <RDF:Description RDF:about="urn:root">\n' +
            '    <MAF:originalurl RDF:resource="' + sbConvCommon.escapeHTML(item.source) + '"/>\n' +
            '    <MAF:title RDF:resource="' + sbConvCommon.escapeHTML(item.title) + '"/>\n' +
            '    <MAF:archivetime RDF:resource="' + sbConvCommon.timeStampToDate(item.id) + '"/>\n' +
            '    <MAF:indexfilename RDF:resource="index.html"/>\n' +
            '    <MAF:charset RDF:resource="' + sbConvCommon.escapeHTML(item.chars) + '"/>\n' +
            '  </RDF:Description>\n' +
            '</RDF:RDF>\n';

		// add zip file or entry
        zipAddFile(zw, overwriteName + "/index.rdf", rdfContent);
        if (mergeOutput) {
            zipAddDir(zw, dir, overwriteName);
        } else {
            zipAddDir(zw, dir, overwriteName);
            zipClose(zw);
        }
    }
}

function convert_sb2zip(input, output, topDirName, mergeOutput) {
    print("convert method: ScrapBook data --> .zip");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("top directory name: " + topDirName);
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    if (mergeOutput) {
        if (topDirName === "none") {
            error("mergeOutput cannot be used with no top directory name");
            throw "mergeOutput cannot be used with no top directory name";
        }
        
        var destFile = output.clone();
        destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".zip");
        var zipWritter = zipOpen(destFile);
        print("generating file: '" + destFile.leafName + "' ...");
    }

    var dirs = input.directoryEntries;
    dirsNext();

    function dirsNext() {
        while (dirs.hasMoreElements()) {
            try {
                var dir = dirs.getNext().QueryInterface(Components.interfaces.nsIFile);
                if ( !(dir.exists() && dir.isDirectory()) ) continue;
                var indexData = dir.clone();
                indexData.append("index.dat");
                if ( !(indexData.exists() && indexData.isFile()) ) continue;
                var indexFile = dir.clone();
                indexFile.append("index.html");
                parseScrapBook(dir, indexFile, indexData);
            } catch (ex) {
                error(ex);
            }
            // next dir (async)
            setTimeout(dirsNext, 0);
            return;
        }
        // finished
        dirsFinish();
    }

    function dirsFinish() {
        if (mergeOutput) {
            print("exported file: '" + destFile.leafName + "'");
            zipClose(zipWritter);
        }
        convert_finish();
    }
    
    function parseScrapBook(dir, indexFile, indexData) {
        print("compressing ScrapBook data: '" + dir.path + "'");

        // load item data
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            print("skip item of type: '" + item.type + "'");
            return;
        }

        // determine top level folder name
        switch (topDirName) {
            case "dir":
                var overwriteName = dir.leafName;
                break;
            case "id":
                var overwriteName = item.id;
                break;
            case "none":
            default:
                var overwriteName = "";
                break;
        }

        // open the zip file if not merged output
        if (mergeOutput) {
            var zw = zipWritter;
        } else {
            var destFile = output.clone();
            destFile.append(dir.leafName + ".zip");
            print("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
            var zw = zipOpen(destFile);
        }

		// add zip file or entry
        if (mergeOutput) {
            if (topDirName === "id" && overwriteName !== getUniqueId(overwriteName)) {
                warn("skip due to duplicate path: " + overwriteName);
                return;
            }
            zipAddDir(zw, dir, overwriteName);
        } else {
            zipAddDir(zw, dir, overwriteName);
            zipClose(zw);
        }
    }
}

function convert_sb2epub(input, output, includeAllFiles) {
    print("convert method: whole ScrapBook --> .epub");
    print("input directory: " + input.path);
    print("output file: " + output.path);
    print("include all files: " + (includeAllFiles ? "yes" : "no"));
    print("");

    print("generating file: '" + output.leafName + "' ...");

    // book data
    // @TODO: use pref setting or appropriate content
    var bookData = {
        id: "urn:uuid:" + getUUID(),
        title: sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook",
        language: getLocale(),
        modified: getModifiedDateStamp()
    };

    // generate XML
    var [manifest, spine, toc] = getOpfManifestAndSpine();

    // META-INF/container.xml
    var containerTxt = '<?xml version="1.0"?>\n' +
        '<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n' +
        '  <rootfiles>\n' +
        '    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>\n' +
        '  </rootfiles>\n' +
        '</container>\n';

    // OEBPS/content.opf
    var opfTxt = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
        '<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">\n' +
        '  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">\n' +
        '    <dc:identifier id="pub-id">' + sbConvCommon.escapeHTML(bookData.id) + '</dc:identifier>\n' +
        '    <dc:title>' + sbConvCommon.escapeHTML(bookData.title) + '</dc:title>\n' +
        '    <dc:language>' + sbConvCommon.escapeHTML(bookData.language) + '</dc:language>\n' +
        '    <meta property="dcterms:modified">' + sbConvCommon.escapeHTML(bookData.modified) + '</meta>\n' +
        '  </metadata>\n' +
        '  <manifest>\n' +
        '    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />\n' +
        '    <item id="blank" href="blank.xhtml" media-type="application/xhtml+xml" />\n'+ manifest +
        '  </manifest>\n' +
        '  <spine toc="ncx">\n' + spine +
        '  </spine>\n' +
        '</package>\n';

    // OEBPS/toc.ncx
    var tocTxt = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN"\n' +
        ' "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd">\n' +
        '<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">\n' +
        '<head>\n' +
        '   <meta name="dtb:uid" content="amb.vis.ne.jp" />\n' +
        '</head>\n' +
        '<docTitle>\n' +
        '   <text>' + bookData.title + '</text>\n' +
        '</docTitle>\n' +
        '<docAuthor>\n' +
        '   <text>' + bookData.author + '</text>\n' +
        '</docAuthor>\n' +
        '<navMap>\n' + toc +
        '</navMap>\n' +
        '</ncx>\n';

    // OEBPS/blank.xhtml
    // The epub reader may strip folder entries without path, so we make a blank page for them.
    var blankTxt = '<?xml version="1.0" encoding="utf-8"?>\n' +
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '  <head>\n' +
        '    <title></title>\n' +
        '  </head>\n' +
        '  <body></body>\n' +
        '</html>\n';

    // make zip
    var excludeEntries = [
        "backup",
        "tree",
        "scrapbook.rdf",
        "cache.rdf",
        "sitemap.xsl",
        "multiple.txt",
        "folders.txt",
        "collection.html",
        "combine.html",
        "combine.css",
        "note.html",
        "note_template.html",
        "notex_template.html",
        "search.html"
    ].map(function (pattern) { return sbConvCommon.escapeRegExp(pattern); });
    var excludeRegex = new RegExp("^OEBPS\\/Content\\/(?:" + excludeEntries.join("|") + ")(?:\\/|$)", "i");
    var zw = zipOpen(output);
    zipAddFile(zw, "mimetype", "application/epub+zip");
    zipAddFile(zw, "META-INF/container.xml", containerTxt);
    zipAddFile(zw, "OEBPS/content.opf", opfTxt);
    zipAddFile(zw, "OEBPS/toc.ncx", tocTxt);
    zipAddFile(zw, "OEBPS/blank.xhtml", blankTxt);

    if (includeAllFiles) {
        zipAddDirEx(zw, input, "OEBPS/Content");
    } else {
        zipAddDirEx(zw, input, "OEBPS/Content", excludeRegex);
    }

    zipClose(zw);

    // finish
    convert_finish();

    function getModifiedDateStamp() {
        var date = new Date();
        var y = date.getUTCFullYear();
        var m = date.getUTCMonth() + 1; if ( m < 10 ) m = "0" + m;
        var d = date.getUTCDate();      if ( d < 10 ) d = "0" + d;
        var h = date.getUTCHours();     if ( h < 10 ) h = "0" + h;
        var i = date.getUTCMinutes();   if ( i < 10 ) i = "0" + i;
        var s = date.getUTCSeconds();   if ( s < 10 ) s = "0" + s;
        return y.toString() + "-" + m.toString() + "-" + d.toString() + "T" + h.toString() + ":" + i.toString() + ":" + s.toString() + "Z";
    }

    function getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    function getLocale() {
        return sbConvCommon.getGlobalUnicharPref("general.useragent.locale", "") || "en";
    }

    function getOpfManifestAndSpine() {
        // index, playOrder, depth are 1-based
        var result = { manifest: "", spine: "", toc: "" }, index = 1, playOrder = 1;
        
        // include general files
        // do not include data/<id>/*.* now
        var files = getDescFiles(input, true), file;
        while (files.length) {
            file = files.shift();
            if ( !(file.exists() && file.isFile()) ) continue;
            var subPath = "Content/" + sbConvCommon.escapeFileName(getSubPath(input, file).join("/"));
            if (!/^Content\/data\/\d{14}\//.test(subPath)) {
                var id = 'file' + index;
                var mime = sbConvCommon.getFileMime(file) || "application/octet-stream";
                result.manifest += indent(4) + '<item id="' + id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="' + mime + '" />\n';
                index++;
            }
        }

        // include each data entry by order
        var res = sbConvCommon.RDF.GetResource("urn:scrapbook:root");
        processResRecursively(res, 1);

        return [result.manifest, result.spine, result.toc];

        function processResRecursively(containerRes, depth) {
            sbConvCommon.RDFC.Init(sbConvData.data, containerRes);
            var resEnum = sbConvCommon.RDFC.GetElements();
            while (resEnum.hasMoreElements()) {
                var res = resEnum.getNext();
                if (sbConvData.isContainer(res)) {
                    result.toc += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '" playOrder="' + playOrder + '">\n' +
                        indent(depth * 2) + '  <navLabel>\n' +
                        indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(sbConvData.getProperty(res, "title")) + '</text>\n' +
                        indent(depth * 2) + '  </navLabel>\n' +
                        indent(depth * 2) + '  <content src="blank.xhtml" />\n';
                    playOrder++;
                    processResRecursively(res, depth + 1);
                    result.toc += indent(depth * 2) + '</navPoint>\n';
                } else {
                    var id = sbConvData.getProperty(res, "id");
                    var dir = sbConvCommon.getContentDir(id, true);
                    if (dir) {
                        var files = getDescFiles(dir, true), file;
                        while (files.length) {
                            file = files.shift();
                            if ( !(file.exists() && file.isFile()) ) continue;
                            var subPath = "Content/" + sbConvCommon.escapeFileName(getSubPath(input, file).join("/"));
                            var id = 'file' + index;
                            var mime = sbConvCommon.getFileMime(file) || "application/octet-stream";
                            result.manifest += indent(4) + '<item id="' + id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="' + mime + '" />\n';
                            if (/^Content\/data\/\d{14}\/index\.html$/.test(subPath)) {
                                result.spine += indent(4) + '<itemref idref="' + id + '" />\n';
                                result.toc += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '" playOrder="' + playOrder + '">\n' +
                                    indent(depth * 2) + '  <navLabel>\n' +
                                    indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(sbConvData.getProperty(res, "title")) + '</text>\n' +
                                    indent(depth * 2) + '  </navLabel>\n' +
                                    indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n' +
                                    indent(depth * 2) + '</navPoint>\n';
                                playOrder++;
                            }
                            index++;
                        }
                    } else {
                        var text = sbConvCommon.escapeHTML(sbConvData.getProperty(res, "title"));
                        if (sbConvData.getProperty(res, "type") === "separator") { text = "---- " + text + " ----"; }
                        result.toc += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '" playOrder="' + playOrder + '">\n' +
                            indent(depth * 2) + '  <navLabel>\n' +
                            indent(depth * 2) + '    <text>' + text + '</text>\n' +
                            indent(depth * 2) + '  </navLabel>\n' +
                            indent(depth * 2) + '  <content src="blank.xhtml" />\n' +
                            indent(depth * 2) + '</navPoint>\n';
                        playOrder++;
                    }
                }
            }
        }

        function indent(count) {
            return (new Array(count+1)).join(" ");
        }
    }

    // extended version of zipAddDir for better intervention
    function zipAddDirEx(zipWritter, dir, subPath, excludeRegex) {
        //recursviely add all
        var pathBasePattern = dir.path;
        var pathBaseReplace = (typeof subPath !== "undefined") ? subPath : dir.leafName;
        var dirArr = [dir];
        for (var i=0; i<dirArr.length; i++) {
            var dirEntries = dirArr[i].directoryEntries;
            while (dirEntries.hasMoreElements()) {
                var entry = dirEntries.getNext().QueryInterface(Components.interfaces.nsIFile);
                var saveInZipAs = entry.path.replace(pathBasePattern, pathBaseReplace);
                saveInZipAs = saveInZipAs.replace(/\\/g,'/');
                saveInZipAs = saveInZipAs.replace(/^\//, "");

                if (excludeRegex && excludeRegex.test(saveInZipAs)) {
                    continue;
                }

                if (entry.isDirectory()) {
                   dirArr.push(entry);
                }

                var compressionLevel = zipDetermineCompresssionLevel(entry.leafName);

                // epub doesn't support meta refresh, rewrite them to links
                if (/^OEBPS\/Content\/data\/\d{14}\/index\.html$/.test(saveInZipAs)) {
                    // if the file is rather small, reguard them as a total redirect,
                    // and check for a possible meta refresh to the real html file
                    if (entry.fileSize <= 512) {
                        // @TODO: improve the accuracy for meta refresh detection
                        var metaRefreshUrl = sbConvCommon.getMetaRefreshUrl(sbConvCommon.convertToUnicode(sbConvCommon.readFile(entry), "UTF-8"));
                        if (metaRefreshUrl) {
                            var content = "<!DOCTYPE html>\n" +
                                '<html>\n' +
                                '  <head>\n' +
                                '    <meta charset="UTF-8" />\n' +
                                '  </head>\n' +
                                '  <body>\n' +
                                '    <a href="' + metaRefreshUrl + '">#META REDIRECT</a>\n' +
                                '  </body>\n' +
                                '</html>\n';
                            zipAddFile(zipWritter, saveInZipAs, content);
                            continue;
                        }
                    }
                }

                zipWritter.addEntryFile(saveInZipAs, compressionLevel, entry, false);
            }
        }
    }
}

function convert_sb2maff2(input, output) {
    print("convert method: whole ScrapBook --> .maff");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("");

    print("generating file: '" + output.leafName + "' ...");

    var date = (new Date());
    var id = date.valueOf() + "_" + Math.floor(Math.random() * 1000);
    var title = sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook";
    var frameFile = input.clone(); frameFile.append("tree"); frameFile.append("frame.html");

    if (!frameFile.exists()) {
        error("tree/frame.html not generated. Please output HTML with frames first.");
        throw "frame.html not exist";
    }

    var rdfContent = '<?xml version="1.0"?>\n' +
        '<RDF:RDF xmlns:MAF="http://maf.mozdev.org/metadata/rdf#"\n' +
        '         xmlns:NC="http://home.netscape.com/NC-rdf#"\n' +
        '         xmlns:RDF="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
        '  <RDF:Description RDF:about="urn:root">\n' +
        '    <MAF:title RDF:resource="' + sbConvCommon.escapeHTML(title) + '"/>\n' +
        '    <MAF:archivetime RDF:resource="' + date + '"/>\n' +
        '    <MAF:indexfilename RDF:resource="index.html"/>\n' +
        '    <MAF:charset RDF:resource="UTF-8"/>\n' +
        '  </RDF:Description>\n' +
        '</RDF:RDF>\n';

    var indexContent = "<!DOCTYPE html>\n" +
            '<html>\n' +
            '  <head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <meta http-equiv="refresh" content="0;URL=./ScrapBook/tree/frame.html">\n' +
            '  </head>\n' +
            '  <body>\n' +
            '    <a href="ScrapBook/tree/frame.html">ScrapBook</a>\n' +
            '  </body>\n' +
            '</html>\n';

    var zw = zipOpen(output);
    zipAddFile(zw, id + "/index.rdf", rdfContent);
    zipAddFile(zw, id + "/index.html", indexContent);
    zipAddDir(zw, input, id + "/ScrapBook");
    zipClose(zw);

    // finished
    convert_finish();
}

function convert_sb2zip2(input, output, topDirName) {
    print("convert method: whole ScrapBook --> .zip");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("top directory name: " + topDirName);
    print("");

    print("generating file: '" + output.leafName + "' ...");

    // determine top level folder name
    switch (topDirName) {
        case "dir":
            var overwriteName = input.leafName;
            break;
        case "title":
            var overwriteName = sbConvCommon.validateFileName(sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook");
            break;
        case "none":
        default:
            var overwriteName = "";
            break;
    }

    var zw = zipOpen(output);
    zipAddDir(zw, input, overwriteName);
    zipClose(zw);

    // finished
    convert_finish();
}

function print(txt) {
    var field = document.getElementById("sbconvConverterStatus");
    field.value += txt + "\n";
    field.selectionStart = field.selectionEnd = field.value.length;
}

function warn(txt) {
    warnCount++;
    print("WARN: " + txt);
}

function error(txt) {
    errorCount++;
    print("ERROR: " + txt);
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

function zipDetermineCompresssionLevel(filename) {
    // only compress known text-based files
    // @TODO: better algorithm, maybe MIME-based or other detection techniques?
    return /\.(html?|xht(ml)?|xml|rdf|txt|css|js|json)$/i.test(filename) ? nsIZipWriter.COMPRESSION_BEST : nsIZipWriter.COMPRESSION_NONE;
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

function zipOpen(zipFile) {
    var zipWritter = Components.classes['@mozilla.org/zipwriter;1'].createInstance(nsIZipWriter);
    zipWritter.open(zipFile, zipPr.PR_RDWR | zipPr.PR_CREATE_FILE | zipPr.PR_TRUNCATE);
    return zipWritter;
}

function zipHasEntry(zipWritter, entry) {
    return zipWritter.hasEntry(entry);
}

// add the text from content to the zip with path saveInZipAs
function zipAddFile(zipWritter, saveInZipAs, content) {
    var channel = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService)
                 .newChannel("data:," + encodeURIComponent(content), null, null);
    var compressionLevel = zipDetermineCompresssionLevel(saveInZipAs.replace(/^.*\//, ""));
    zipWritter.addEntryChannel(saveInZipAs, Date.now() * 1000, compressionLevel, channel, false);
}

// recursively add dir to the zip, with optionally determinable dirSubPath
// subPath can be "", which means file/directory under dir will be placed at top level
// subPath can be a subfolder, such as "subfolder/here"
function zipAddDir(zipWritter, dir, subPath) {
    //recursviely add all
    var pathBasePattern = dir.path;
    var pathBaseReplace = (typeof subPath !== "undefined") ? subPath : dir.leafName;
    var dirArr = [dir];
    for (var i=0; i<dirArr.length; i++) {
        var dirEntries = dirArr[i].directoryEntries;
        while (dirEntries.hasMoreElements()) {
            var entry = dirEntries.getNext().QueryInterface(Components.interfaces.nsIFile);
            if (entry.isDirectory()) {
               dirArr.push(entry);
            }
            var saveInZipAs = entry.path.replace(pathBasePattern, pathBaseReplace);
            saveInZipAs = saveInZipAs.replace(/\\/g,'/');
            saveInZipAs = saveInZipAs.replace(/^\//, "");
// console.log(entry.path, saveInZipAs, pathBasePattern, pathBaseReplace);
            var compressionLevel = zipDetermineCompresssionLevel(entry.leafName);
            zipWritter.addEntryFile(saveInZipAs, compressionLevel, entry, false);
        }
    }
}

function zipClose(zipWritter) {
    zipWritter.close();
}
