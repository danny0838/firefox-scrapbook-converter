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
    var data = args[0];
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
        case "maff2sb":
            convert_maff2sb(input, output, data.includeSubdir, data.includeFileName, data.uniqueId);
            break;
        case "html2sb":
            convert_html2sb(input, output, data.includeSubdir, data.uniqueId);
            break;
        case "sb2enex":
            convert_sb2enex(input, output, data.addTags, data.folderAsTag, data.importIndexHTML, data.importCommentMetadata, data.importSourcePackFormat, data.mergeOutput);
            break;
        case "sb2maff":
            convert_sb2maff(input, output, data.topDirName, data.mergeOutput);
            break;
        case "sb2zip":
            convert_sb2zip(input, output, data.topDirName, data.mergeOutput);
            break;
        case "sb2sf":
            convert_sb2sf(input, output);
            break;
        case "sb2epub":
            output.initWithPath(data.outputFile);
            convert_sb2epub(input, output, data.includeAllFiles, data.bookMeta);
            break;
        case "sb2maff2":
            output.initWithPath(data.outputFile);
            convert_sb2maff2(input, output, data.entryPage);
            break;
        case "sb2zip2":
            output.initWithPath(data.outputFile);
            convert_sb2zip2(input, output, data.topDirName);
            break;
        default:
            error("unknown method.");
            break;
    }
}

function convert_finish() {
    print("");
    print("done in " + (Date.now() - startTime) + " milliseconds." +
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
    print("");

    var filesNext = function () {
        var file, subPath;
        while (fileEnum.hasMoreElements()) {
            file = fileEnum.getNext();
            if ( !(file.exists() && file.isFile() && file.leafName.match(/\.enex/i)) ) continue;
            verbose("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            if (!includeFileName) subPath.pop();
            subPath = subPath.join("\t");
            loadXMLFile(file, function (xmlDoc) {
                parseEnex(xmlDoc, file, subPath);
            }, this);
            return;
        }
        // finished
        filesFinish();
    };

    var filesFinish = function () {
        convert_finish();
    };

    var parseEnex = function (xmlDoc, file, subPath) {

        var notesNext= function () {
            if (!startTime) startTime = Date.now();
            var note = notes.shift();
            while (note) {
                parseNote(note);
                // next
                if (Date.now() - startTime > threadTimeout) {
                    startTime = false;
                    setTimeout(notesNext, 0);
                    return;
                }
                note = notes.shift();
            }
            // finished
            notesFinish();
        };

        var notesFinish = function () {
            // next file
            filesNext();
        };

        var parseNote = function (note) {

            var parseEnexTime = function (time) {
                if (time.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/)) {
                    var date = new Date(
                        parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10) - 1, parseInt(RegExp.$3, 10),
                        parseInt(RegExp.$4, 10), parseInt(RegExp.$5, 10), parseInt(RegExp.$6, 10)
                    );
                    var date = new Date(date.valueOf() - date.getTimezoneOffset() * 60 * 1000);
                    return sbConvCommon.getTimeStamp(date);
                }
                return false;
            };

            var parseEnexContent = function (data) {
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
                    error("cannot read en-note data from '" + item.title + "'. Export the original xhtml as fallback.");
                    html = data;
                }

                return html;
            };

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
            verbose("exporting note: '" + item.title + "' --> '" + destDir.leafName + "'");
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
        };

        /**
         * reads data from aNode and returns a new node in string
         */
        var nodeToTag = function (aNode, aTagName, aAllowedAttrs) {
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
        };

        var getUniqueFile = function (dir, name, mime) {
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
        };

        // check if it's enex, skip if not
        if (xmlDoc && xmlDoc.documentElement.nodeName == "en-export") {
            var notes = Array.prototype.slice.call(xmlDoc.getElementsByTagName("note"));
            notesNext();
        }
        else {
            error("Invalid enex file: '" + file.path + "', skipped.");
            notesFinish();
        }
    };

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var fileEnum = enumFiles(input, includeSubdir);

    filesNext();
}

function convert_maff2sb(input, output, includeSubdir, includeFileName, uniqueId) {
    print("convert method: .maff --> ScrapBook data");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include subfolders: " + (includeSubdir ? "yes" : "no"));
    print("include filename: " + (includeFileName ? "yes" : "no"));
    print("prevent duplicate ID: " + (uniqueId ? "yes" : "no"));
    print("");

    var filesNext = function () {
        newThread = false;
        var file, subPath;
        while (fileEnum.hasMoreElements()) {
            file = fileEnum.getNext();
            if ( !(file.exists() && file.isFile() && file.leafName.match(/\.maff/i)) ) continue;
            verbose("converting file: '" + file.path + "'");
            subPath = getSubPath(input, file);
            if (!includeFileName) subPath.pop();
            subPath = subPath.join("\t");
            parseMaf(file, subPath);
            // if a new thread has started, terminate the old thread
            if (newThread) {
                return;
            }
        }
        // finished
        filesFinish();
    };

    var filesFinish = function () {
        convert_finish();
    };

    var parseMaf = function (file, subPath) {

        var pagesNext = function () {
            if (!startTime) startTime = Date.now();
            while (pageDirs.hasMoreElements()) {
                var pageDir = pageDirs.getNext().QueryInterface(Components.interfaces.nsIFile);
                parseMafPage(pageDir);
                // next
                if (Date.now() - startTime > threadTimeout) {
                    startTime = false;
                    newThread = true;
                    setTimeout(pagesNext, 0);
                    return;
                }
            }
            // finished
            pagesFinish();
        };

        var pagesFinish = function () {
            // @FIXME: Exception is frequently seen here if the page is skipped. Cause to be determined.
            try {
                tmpDir.remove(true);
            } catch (ex) {
                console.error(ex);
            }
            // if we reach here from a new thread, call filesNext()
            if (newThread) {
                filesNext();
            }
        };

        var parseMafPage = function (pageDir) {
            // read RDF data
            var rdfFile = pageDir.clone(); rdfFile.append("index.rdf");
            var ds = new MaffDataSource();
            var res = ds.resources;
            ds.loadFromFile(rdfFile);

            // create item
            var indexLeafName = ds.getMafProperty(res.indexFileName) || "index.html";
            var item = sbConvCommon.newItem();
            item.title = ds.getMafProperty(res.title);
            item.source = ds.getMafProperty(res.originalUrl);
            item.chars = ds.getMafProperty(res.charset);
            item.id = item.create = item.modify = sbConvCommon.getTimeStamp(new Date(ds.getMafProperty(res.archiveTime)));
            if (uniqueId) item.id = getUniqueId(item.id);
            item.folder = subPath;

            if (indexLeafName !== "index.html") {
                var indexFile = pageDir.clone(); indexFile.append("index.html");
                if (!indexFile.exists()) {
                    var metaRefresh = '<html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;URL=./' + sbConvCommon.escapeHTML(indexLeafName) + '"></head><body></body></html>';
                    sbConvCommon.writeFile(indexFile, metaRefresh, "UTF-8", true);
                } else {
                    warn("Converting a maff page with non-index index.html is not supported: '" + item.title + "' (" + item.id + ").");
                    return;
                }
            }

            var indexDat = pageDir.clone(); indexDat.append("index.dat");
            sbConvCommon.writeIndexDat(item, indexDat);

            // output
            var destDir = getUniqueDir(output, item.title);
            verbose("exporting page: '" + item.title + "' --> '" + destDir.leafName + "'");
            var pageDirFiles = pageDir.directoryEntries;
            while (pageDirFiles.hasMoreElements()) {
                var pageDirFile = pageDirFiles.getNext().QueryInterface(Components.interfaces.nsIFile);
                pageDirFile.moveTo(destDir, pageDirFile.leafName);
            }
        };

        var tmpDir = getUniqueDir(output, ".tmp_" + file.leafName);
        try {
            extractZip(file, tmpDir);
        } catch(ex) {
            // not zip or corrupted zip
            error("Invalid maff file: '" + file.path + "', skipped.");
            pagesFinish();
            return;
        }
        var pageDirs = tmpDir.directoryEntries;

        pagesNext();
    };

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime, newThread;
    var fileEnum = enumFiles(input, includeSubdir);

    filesNext();
}

function convert_html2sb(input, output, includeSubdir, uniqueId) {
    print("convert method: HTML --> ScrapBook data");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("include subfolders: " + (includeSubdir ? "yes" : "no"));
    print("prevent duplicate ID: " + (uniqueId ? "yes" : "no"));
    print("");

    /**
     * Use a special looping strategy to properly manage support folders.
     * For each directory: process all files first, and then subdirectories.
     */
    var dirsNext = function () {
        while (++dirIndex < dirs.length) {
            var dir = dirs[dirIndex];
            if ( supportFolders[dir.path] ) continue;
            fileEnum = dir.directoryEntries;
            filesNext();
            return;
        }
        // finished
        dirsFinish();
    };

    var filesNext = function () {
        if (!startTime) startTime = Date.now();
        var file, subPath;
        while (fileEnum.hasMoreElements()) {
            file = fileEnum.getNext().QueryInterface(Components.interfaces.nsIFile);
            if (file.isDirectory() && includeSubdir) {
                dirs.push(file);
                continue;
            }
            if ( !(file.exists() && file.isFile()) ) continue;
            if (file.leafName.match(/\.(x?html|htm|xht)$/i)) {
                verbose("converting HTML pack: '" + file.path + "'");
                var supportFolder = getSupportFolder(file);
                subPath = getSubPath(input, file);
                subPath.pop();
                subPath = subPath.join("\t");
                parseHtmlPack(file, supportFolder, subPath);
            }
            else {
                verbose("converting file: '" + file.path + "'");
                subPath = getSubPath(input, file);
                subPath.pop();
                subPath = subPath.join("\t");
                parseFile(file, subPath);
            }
            // next
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(filesNext, 0);
                return;
            }
        }
        dirsNext();
    };

    var dirsFinish = function () {
        convert_finish();
    };

    var getSupportFolder = function (file) {
        var filename = file.leafName;
        var supportFolder = file.parent; supportFolder.append(filename.replace(/\.\w+$/, ".files"));
        if (supportFolder.exists() && supportFolder.isDirectory()) {
            supportFolders[supportFolder.path] = true;
            return supportFolder;
        }
        var supportFolder = file.parent; supportFolder.append(filename.replace(/\.\w+$/, "_files"));
        if (supportFolder.exists() && supportFolder.isDirectory()) {
            supportFolders[supportFolder.path] = true;
            return supportFolder;
        }
        return false;
    };

    var parseHtmlPack = function (file, supportFolder, subPath) {
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
        verbose("exporting html: '" + item.title + "' --> '" + destDir.leafName + "'");
        var indexDat = destDir.clone(); indexDat.append("index.dat");
        sbConvCommon.writeIndexDat(item, indexDat);
        file.copyTo(destDir, "index.html");

        // -- support folder files
        if (supportFolder) {
            supportFolder.copyTo(destDir, supportFolder.leafName);
        }

        function parseHtmlPackTime(time) {
            var date = new Date(time);
            return sbConvCommon.getTimeStamp(date);
        }
    };

    var parseFile = function (file, subPath) {
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
        verbose("exporting file: '" + item.title + "' --> '" + destDir.leafName + "'");
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
    };

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var dirs = [input],
        dirIndex = 0,
        fileEnum = dirs[dirIndex].directoryEntries,
        supportFolders = {};

    filesNext();
}

function convert_sb2enex(input, output, addTags, folderAsTag, importIndexHTML, importCommentMetadata, importSourcePackFormat, mergeOutput) {
    print("convert method: ScrapBook data --> .enex");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("add tags: " + (addTags || ""));
    print("import index.html: " + (importIndexHTML ? "yes" : "no"));
    print("write folder to tag: " + (folderAsTag ? "yes" : "no"));
    print("import metadata from comment: " + (importCommentMetadata ? "yes" : "no"));
    print("import source data pack as: " + (importSourcePackFormat || "none"));
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    var dirsNext = function () {
        if (!startTime) startTime = Date.now();
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
            // next
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(dirsNext, 0);
                return;
            }
        }
        // finished
        dirsFinish();
    };

    var dirsFinish = function () {
        if (mergeOutput) {
            var destFile = output.clone();
            destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".enex");
            sbConvCommon.writeFile(destFile, XMLString(enExportDoc), "UTF-8", true);
            verbose("exporting file: '" + destFile.leafName + "'");
        }
        convert_finish();
    };
    
    var parseScrapBook = function (dir, indexFile, indexData, enExportDoc) {
        verbose("converting ScrapBook data: '" + dir.path + "'");
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            verbose("skip item of type: '" + item.type + "'");
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
                warn("Converting ScrapBook data with index.rdf to maff is not supported: '" + rdfFile.path + "'.");
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
                    zipWriteFile(zw, overwriteName + "/index.rdf", rdfContent);
                    zipAddDir(zw, dir, overwriteName);
                    zipClose(zw);
                    break;
            }

            if (item.modify) zipFile.lastModifiedTime = sbConvCommon.getLastModifiedTime(item.modify);
            var data = sbConvCommon.readFileBinary(zipFile);
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

            // append the media
            if (importIndexHTML) {
                var box = enNoteDoc.createElement("div");
                box.setAttribute("style", "margin-top: 1em; border-top: 1px solid #000; padding: 1em;");
                var elem = enNoteDoc.createElement("en-media");
                elem.setAttribute("hash", data_hash);
                elem.setAttribute("type", "text/html");
                box.appendChild(elem);
                enNoteElem.appendChild(box);
            } else {
                var elem = enNoteDoc.createElement("en-media");
                elem.setAttribute("hash", data_hash);
                elem.setAttribute("type", "text/html");
                enNoteElem.appendChild(elem);
            }
        }

        // output
        contentElem.appendChild(enExportDoc.createCDATASection(XMLString(enNoteDoc)));
        if (!mergeOutput) {
            var destFile = output.clone();
            destFile.append(dir.leafName + ".enex");
            sbConvCommon.writeFile(destFile, XMLString(enExportDoc), "UTF-8", true);
            verbose("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
        }
    };

    var parseScrapBookContent = function (indexFile, item, enNoteDoc, enNoteElem, enExportDoc, noteElem) {
        if ( !(indexFile.exists() && indexFile.isFile()) ) return;
        var html = sbConvCommon.readFile(indexFile);
        var charset = item.chars || "UTF-8";
        html = sbConvCommon.convertToUnicode(html, charset);
        var htmlDoc = loadHTML(html);
        var body = htmlDoc.body;
        if (!body) return;

        var getFileFromUrl = function (url) {
            var base = sbConvCommon.convertFilePathToURL(indexFile.parent.path);
            var url = sbConvCommon.resolveURL(base, url);
            var file = sbConvCommon.convertURLToFile(url);
            return file;
        };

        // copy Evernote available attributes and childNodes from sourceNode to targetNode recursively
        // no namespace, use lower case name
        var copyNodeFromHtmlToXml = function (sourceNode, targetNode) {
            // copy attributes
            Array.prototype.forEach.call(sourceNode.attributes, function(attr){
                if (isEvernoteAllowed(targetNode.nodeName, attr.name)) {
                    targetNode.setAttribute(attr.name, attr.value);
                }
            });
            if (!sourceNode.hasChildNodes()) return;
            Array.prototype.forEach.call(sourceNode.childNodes, function(elem){
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
        };

        // parse elements
        var metaRefreshTarget = false;
        Array.prototype.forEach.call(htmlDoc.getElementsByTagName("*"), function(elem){
            if (!elem.parentNode) return;  // skip nodes that are already removed from the DOM
            switch (elem.nodeName.toLowerCase()) {
                case "meta":
                    if (metaRefreshTarget) break;  // only the first one should work
                    if ( !(elem.hasAttribute("http-equiv") && elem.getAttribute("http-equiv").toLowerCase() === "refresh" && elem.getAttribute("content").match(/^(\d+;\s*url=)(.*)$/i)) ) break;
                    metaRefreshTarget = getFileFromUrl(RegExp.$2);
                    return;
                case "img":
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
                    } else if (src.indexOf(":") === -1) {  // relative-linked file
                        var resFile = getFileFromUrl(src);
                        if ( !(resFile && resFile.exists() && resFile.isFile()) ) {
                            elem.setAttribute("src", sbConvCommon.convertFilePathToURL(resFile.path));
                            break;
                        }
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = sbConvCommon.readFileBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    } else {
                        if (src.indexOf("http:") === -1 && src.indexOf("https:") === -1 && src.indexOf("file:") === -1) {
                            // Evernote incompatible protocols
                            elem.setAttribute("src", "file:///#");
                        }
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
                    Array.prototype.forEach.call(elem.attributes, function(attr){
                        mediaElem.setAttribute(attr.name, attr.value);
                    });
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
                case "a":
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
                    } else if (href.indexOf(":") === -1) {  // relative-linked file
                        var resFile = getFileFromUrl(href);
                        if ( !(resFile && resFile.exists() && resFile.isFile()) ) {
                            elem.setAttribute("href", sbConvCommon.convertFilePathToURL(resFile.path));
                            break;
                        }
                        var filename = resFile.leafName;
                        var mime = sbConvCommon.getFileMime(resFile);
                        var data_bin = sbConvCommon.readFileBinary(resFile);
                        var data_b64 = window.btoa(data_bin);
                        var data_hash = hex_md5(data_bin);
                    } else {
                        if (href.indexOf("http:") === -1 && href.indexOf("https:") === -1 && href.indexOf("file:") === -1) {
                            // Evernote incompatible protocols
                            elem.setAttribute("href", "file:///#");
                        }
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
                    Array.prototype.forEach.call(elem.attributes, function(attr){
                        mediaElem.setAttribute(attr.name, attr.value);
                    });
                    mediaElem.setAttribute("hash", data_hash);
                    mediaElem.setAttribute("type", mime);
                    elem.parentNode.insertBefore(mediaElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
                case "input":
                    // en-todo
                    if (!(elem.getAttribute("type") === "checkbox" && elem.getAttribute("data-sb-obj") === "todo")) break;
                    var todoElem = enNoteDoc.createElement("en-todo");
                    if (elem.getAttribute("checked") === "checked") todoElem.setAttribute("checked", "true");
                    elem.parentNode.insertBefore(todoElem, elem);
                    elem.parentNode.removeChild(elem);
                    return;
                case "span":
                    // highlight
                    if (!(elem.getAttribute("data-sb-obj") === "linemarker" && elem.getAttribute("style") === "background-color: rgb(255, 250, 165);")) break;
                    elem.setAttribute("style", "background-color:rgb(255, 250, 165);-evernote-highlight:true;");
                    break;
            }
        });
        // if there is a meta-refresh, leave only the redirect target file
        if (metaRefreshTarget) {
            // clear already-added body and resources
            Array.prototype.forEach.call(body.attributes, function(attr){
                body.removeAttribute(attr.name);
            });
            Array.prototype.forEach.call(body.childNodes, function(elem){
                elem.parentNode.removeChild(elem);
            });
            Array.prototype.forEach.call(noteElem.getElementsByTagName("resource"), function(elem){
                elem.parentNode.removeChild(elem);
            });
            if (metaRefreshTarget.exists() && metaRefreshTarget.isFile()) {
                // data
                var filename = metaRefreshTarget.leafName;
                var mime = sbConvCommon.getFileMime(metaRefreshTarget);
                var data_bin = sbConvCommon.readFileBinary(metaRefreshTarget);
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
    };

    var parseScrapBookTime = function (time) {
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
    };

    var isEvernoteAllowed = function (nodeName, attrName) {
        nodeName = nodeName.toLowerCase();
        if (typeof(attrName) === "undefined") return typeof(evernoteAllowedElements[nodeName]) !== "undefined";
        return typeof(evernoteAllowedElements[nodeName][attrName]) !== "undefined";
    };

    // en-export
    var enExport = '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export2.dtd">\n'
        + '<en-export>\n</en-export>';
    var enExportDoc = loadXML(enExport);
    var enExportElem = enExportDoc.documentElement;
    enExportElem.setAttribute("export-date", parseScrapBookTime(sbConvCommon.getTimeStamp()));
    enExportElem.setAttribute("application", "ScrapBook X Converter");
    enExportElem.setAttribute("version", "1.0.x");

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var dirs = input.directoryEntries;

    dirsNext();
}

function convert_sb2maff(input, output, topDirName, mergeOutput) {
    print("convert method: ScrapBook data --> .maff");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("entry directory name: " + topDirName);
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    var dirsNext = function () {
        if (!startTime) startTime = Date.now();
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
            // next
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(dirsNext, 0);
                return;
            }
        }
        // finished
        dirsFinish();
    };

    var dirsFinish = function () {
        if (mergeOutput) {
            verbose("exported file: '" + destFile.leafName + "'");
            zipClose(zipWritter);
        }
        convert_finish();
    };
    
    var parseScrapBook = function (dir, indexFile, indexData) {
        verbose("converting ScrapBook data: '" + dir.path + "'");

        // load item data
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            verbose("skip item of type: '" + item.type + "'");
            return;
        }

        // open the zip file if not merged output
        if (mergeOutput) {
            var zw = zipWritter;
        } else {
            var destFile = output.clone();
            destFile.append(dir.leafName + ".maff");
            verbose("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
            var zw = zipOpen(destFile);
        }

        // check index.rdf
        // if already exists, throw an error
        var rdfFile = dir.clone(); rdfFile.append("index.rdf");
        if (rdfFile.exists()) {
            warn("Converting ScrapBook data with index.rdf to maff is not supported: '" + rdfFile.path + "'.");
            return;
        }

        // determine top level folder name
        switch (topDirName) {
            case "id":
                var overwriteName = item.id;
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
        if (mergeOutput) {
            if (topDirName === "id" && overwriteName !== getUniqueId(overwriteName)) {
                warn("skip due to duplicate path: " + overwriteName);
                return;
            }
            zipWriteFile(zw, overwriteName + "/index.rdf", rdfContent);
            zipAddDir(zw, dir, overwriteName);
        } else {
            zipWriteFile(zw, overwriteName + "/index.rdf", rdfContent);
            zipAddDir(zw, dir, overwriteName);
            zipClose(zw);
        }
    };

    if (mergeOutput) {
        var destFile = output.clone();
        destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".maff");
        var zipWritter = zipOpen(destFile);
        verbose("generating file: '" + destFile.leafName + "' ...");
    }

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var dirs = input.directoryEntries;

    dirsNext();
}

function convert_sb2zip(input, output, topDirName, mergeOutput) {
    print("convert method: ScrapBook data --> .zip");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("top directory name: " + topDirName);
    print("merge output into one file: " + (mergeOutput ? "yes" : "no"));
    print("");

    var dirsNext = function () {
        if (!startTime) startTime = Date.now();
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
            // next
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(dirsNext, 0);
                return;
            }
        }
        // finished
        dirsFinish();
    };

    var dirsFinish = function () {
        if (mergeOutput) {
            verbose("exported file: '" + destFile.leafName + "'");
            zipClose(zipWritter);
        }
        convert_finish();
    };
    
    var parseScrapBook = function (dir, indexFile, indexData) {
        verbose("compressing ScrapBook data: '" + dir.path + "'");

        // load item data
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            verbose("skip item of type: '" + item.type + "'");
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
            verbose("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
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
    };

    if (mergeOutput) {
        if (topDirName === "none") {
            error("mergeOutput cannot be used with no top directory name");
            return;
        }
        
        var destFile = output.clone();
        destFile.append("ScrapBook-" + sbConvCommon.getTimeStamp() + ".zip");
        var zipWritter = zipOpen(destFile);
        verbose("generating file: '" + destFile.leafName + "' ...");
    }

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var dirs = input.directoryEntries;

    dirsNext();
}

function convert_sb2sf(input, output) {
    print("convert method: ScrapBook data --> single file");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("");

    var dirsNext = function () {
        if (!startTime) startTime = Date.now();
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
            // next
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(dirsNext, 0);
                return;
            }
        }
        // finished
        dirsFinish();
    };

    var dirsFinish = function () {
        convert_finish();
    };

    var parseScrapBook = function (dir, indexFile, indexData) {

        var parsePageContent = function (indexFile, recurseChain) {
            // check if it's an HTML file
            // if not, return an object representing the file
            var mime = sbConvCommon.getFileMime(indexFile) || "application/octet-stream";
            if (["text/html", "application/xhtml+xml"].indexOf(mime) < 0) {
                return {
                    file: indexFile,
                    mime: mime,
                };
            }
            
            // read index.html
            var html = sbConvCommon.readFile(indexFile);
            html = sbConvCommon.convertToUnicode(html, charset);
            var htmlDoc = loadHTML(html);
            var body = htmlDoc.body;
            if (!body) {
                error("'" + indexFile + "' is not a valid html file.");
                return;
            }

            var baseUrl = sbConvCommon.convertFilePathToURL(indexFile.path);

            // check meta refresh
            if (metaRefreshAvailable > 0) {
                var metaRefreshTarget;
                Array.prototype.forEach.call(htmlDoc.getElementsByTagName("meta"), function (elem) {
                    if (metaRefreshTarget) return;
                    if ( !(elem.hasAttribute("http-equiv") && elem.getAttribute("http-equiv").toLowerCase() === "refresh" && elem.getAttribute("content").match(/^(\d+;\s*url=)(.*)$/i)) ) return;
                    metaRefreshTarget = getFileFromUrl(baseUrl, RegExp.$2);
                });
                if (metaRefreshTarget) {
                    metaRefreshAvailable--;
                    return parsePageContent(metaRefreshTarget, recurseChain);
                }
            }

            // parse elements
            Array.prototype.forEach.call(htmlDoc.getElementsByTagName("*"), function(elem){
                if (!elem.parentNode) return;  // skip nodes that are already removed from the DOM

                switch (elem.nodeName.toLowerCase()) {
                    case "img":
                        if (elem.hasAttribute("srcset")) {
                            elem.setAttribute("srcset", (function (srcset) {
                                return srcset.replace(/(\s*)([^ ,][^ ]*[^ ,])(\s*(?: [^ ,]+)?\s*(?:,|$))/g, function (m, m1, m2, m3) {
                                    var linkUrl = m2;
                                    if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                        linkUrl = getResDataUri(linkUrl, baseUrl, indexFile, recurseChain);
                                    }
                                    return m1 + linkUrl + m3;
                                });
                            })(elem.getAttribute("srcset")));
                        }
                    case "source":  // in <audio> and <vedio>
                    case "track" :  // in <audio> and <vedio>
                    case "script":
                        if (elem.hasAttribute("src")) {
                            var linkUrl = elem.getAttribute("src");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                elem.setAttribute("src", getResDataUri(linkUrl, baseUrl, indexFile, recurseChain));
                            }
                        }
                        break;
                    case "embed" : 
                        if (elem.hasAttribute("src")) {
                            var linkUrl = elem.getAttribute("src");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                // modifying the link could cause an error, catch it
                                try { elem.setAttribute("src", "about:blank"); } catch (ex) {}
                            }
                        }
                        break;
                    case "object":
                        if (elem.hasAttribute("data")) {
                            var linkUrl = elem.getAttribute("data");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                // modifying the link could cause an error, catch it
                                try { elem.setAttribute("data", "about:blank"); } catch (ex) {}
                            }
                        }
                        break;
                    case "applet":
                        if (elem.hasAttribute("archive")) {
                            var linkUrl = elem.getAttribute("archive");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                // modifying the link could cause an error, catch it
                                try { elem.setAttribute("archive", "about:blank"); } catch (ex) {}
                            }
                        }
                        break;
                    case "body" : 
                    case "table" : 
                    case "tr" : 
                    case "th" : 
                    case "td" : 
                        if (elem.hasAttribute("background")) {
                            var linkUrl = elem.getAttribute("background");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                elem.setAttribute("background", getResDataUri(linkUrl, baseUrl, indexFile, recurseChain));
                            }
                        }
                        break;
                    case "input" :
                        switch (elem.type.toLowerCase()) {
                            case "image":
                                if (elem.hasAttribute("src")) {
                                    var linkUrl = elem.getAttribute("src");
                                    if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                        elem.setAttribute("src", getResDataUri(linkUrl, baseUrl, indexFile, recurseChain));
                                    }
                                }
                                break;
                        }
                        break;
                    case "link" : 
                        // gets "" if rel attribute not defined
                        switch (elem.rel.toLowerCase()) {
                            case "stylesheet" :
                                if (elem.hasAttribute("href")) {
                                    var linkUrl = elem.getAttribute("href");
                                    if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                        elem.setAttribute("href", getResDataUriCss(linkUrl, baseUrl, indexFile, recurseChain));
                                    }
                                }
                                break;
                            case "shortcut icon" :
                            case "icon" :
                            default :
                                if (elem.hasAttribute("href")) {
                                    var linkUrl = elem.getAttribute("href");
                                    if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                        elem.setAttribute("href", getResDataUri(linkUrl, baseUrl, indexFile, recurseChain));
                                    }
                                }
                                break;
                        }
                        break;
                    case "style" :
                        elem.textContent = parseCssText(elem.textContent, baseUrl, indexFile, recurseChain);
                        break;
                    case "a" : 
                    case "area" : 
                        if (elem.hasAttribute("href")) {
                            var linkUrl = elem.getAttribute("href");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                var [dataUri, downloadName] = getResDataUriAnchor(linkUrl, baseUrl, indexFile, recurseChain);
                                elem.setAttribute("href", dataUri);
                                if (downloadName && !elem.hasAttribute("download")) {
                                    elem.setAttribute("download", downloadName);
                                }
                            }
                        }
                        break;
                    case "frame"  : 
                    case "iframe" : 
                        if (elem.hasAttribute("src")) {
                            var linkUrl = elem.getAttribute("src");
                            if (linkUrl.indexOf("://") === -1) {  // relative-linked file
                                elem.setAttribute("src", getResDataUriFrame(linkUrl, baseUrl, indexFile, recurseChain));
                            }
                        }
                        break;
                }

                if (elem.hasAttribute("style")) {
                    elem.setAttribute("style", parseCssText(elem.getAttribute("style"), baseUrl, indexFile, recurseChain));
                }
            });

            return doctypeToString(htmlDoc.doctype) + htmlDoc.documentElement.outerHTML;
        };

        var doctypeToString = function (aDoctype) {
            if ( !aDoctype ) return "";
            var ret = "<!DOCTYPE " + aDoctype.name;
            if ( aDoctype.publicId ) ret += ' PUBLIC "' + aDoctype.publicId + '"';
            if ( aDoctype.systemId ) ret += ' "'        + aDoctype.systemId + '"';
            ret += ">\n";
            return ret;
        };

        var getFileFromUrl = function (base, url) {
            var url = sbConvCommon.resolveURL(base, url);
            var file = sbConvCommon.convertURLToFile(url);
            return file;
        };

        var getResDataUri = function (linkUrl, baseUrl, baseFile, recurseChain) {
            var linkFile = getFileFromUrl(baseUrl, linkUrl);
            if (linkFile && linkFile.exists() && linkFile.isFile()) {
                // link to self, keep the hash
                if (linkFile.equals(baseFile)) {
                    return sbConvCommon.splitURLByAnchor(linkUrl)[1];
                }
                var mime = sbConvCommon.getFileMime(linkFile) || "application/octet-stream";
                var data_bin = sbConvCommon.readFileBinary(linkFile);
                var data_b64 = window.btoa(data_bin);
                var data_uri = "data:" + mime + ";" + "base64," + data_b64;
                return data_uri;
            }
            return "about:blank";
        };

        var getResDataUriCss = function (linkUrl, baseUrl, baseFile, recurseChain) {
            var linkFile = getFileFromUrl(baseUrl, linkUrl);
            if (linkFile && linkFile.exists() && linkFile.isFile()) {
                // link to self, keep the hash
                if (linkFile.equals(baseFile)) {
                    return sbConvCommon.splitURLByAnchor(linkUrl)[1];
                }
                // circular reference is unsupported, blank it
                if (recurseChain.indexOf(linkFile.path) >= 0) {
                    error("Circular reference of CSS from '" + baseFile.path + "' to '" + linkFile.path + "', blanked.");
                    return "about:blank";
                }
                // use a heuristic to translate url(...) to dataURI
                // @TODO: handle @document, etc
                var data_bin = parseCssText(
                    sbConvCommon.readFileBinary(linkFile),
                    sbConvCommon.convertFilePathToURL(linkFile.path),
                    linkFile,
                    recurseChain.concat(baseFile.path)
                );
                var data_b64 = window.btoa(data_bin);
                var data_uri = "data:text/css;" + "base64," + data_b64;
                return data_uri;
            }
            return "about:blank";
        };

        var getResDataUriAnchor = function (linkUrl, baseUrl, baseFile, recurseChain) {
            var linkFile = getFileFromUrl(baseUrl, linkUrl);
            if (linkFile && linkFile.exists() && linkFile.isFile()) {
                // link to self, keep the hash
                if (linkFile.equals(baseFile)) {
                    return [sbConvCommon.splitURLByAnchor(linkUrl)[1], false];
                }
                var mime = sbConvCommon.getFileMime(linkFile) || "application/octet-stream";
                // link to a web page
                if (["text/html", "application/xhtml+xml"].indexOf(mime) >= 0) {
                    // if it's a site capture, replace the link with source url whenever possible
                    var url = file2url(linkFile);
                    if (url) {
                        // pass
                    // keep 1 depth, which is index.html to another page
                    } else if (recurseChain.length == 0) {
                        var linkContent = parsePageContent(linkFile, recurseChain.concat(baseFile.path));
                        var data_bin = sbConvCommon.convertFromUnicode(linkContent, charset);
                        var data_b64 = window.btoa(data_bin);
                        var data_uri = "data:" + mime + ";" + "base64," + data_b64;
                        url = data_uri;
                    // unsupported, blank it
                    } else {
                        url = "about:blank";
                    }
                    return [url, false];
                // link to a media, keep it
                } else {
                    var data_bin = sbConvCommon.readFileBinary(linkFile);
                    var data_b64 = window.btoa(data_bin);
                    var data_uri = "data:" + mime + ";" + "base64," + data_b64;
                    return [data_uri, linkFile.leafName];
                }
            }
            return ["about:blank", false];
        };

        var getResDataUriFrame = function (linkUrl, baseUrl, baseFile, recurseChain) {
            var linkFile = getFileFromUrl(baseUrl, linkUrl);
            if (linkFile && linkFile.exists() && linkFile.isFile()) {
                // frame content cannot be self, blank it
                if (linkFile.equals(baseFile)) {
                    error("Circular reference of frame from '" + baseFile.path + "' to '" + baseFile.path + "', blanked.");
                    return "about:blank";
                }
                // circular reference is unsupported, blank it
                if (recurseChain.indexOf(linkFile.path) >= 0) {
                    error("Circular reference of frame from '" + baseFile.path + "' to '" + linkFile.path + "', blanked.");
                    return "about:blank";
                }
                // retrieve the page content
                var linkContent = parsePageContent(linkFile, recurseChain.concat(baseFile.path));
                if (typeof linkContent === "string") {
                    var mime = sbConvCommon.getFileMime(linkFile) || "application/octet-stream";
                    var data_bin = sbConvCommon.convertFromUnicode(linkContent, charset);
                } else {
                    var mime = linkContent.mime;
                    var data_bin = sbConvCommon.readFileBinary(linkContent.file);
                }
                var data_b64 = window.btoa(data_bin);
                var data_uri = "data:" + mime + ";" + "base64," + data_b64;
                return data_uri;
            }
            return "about:blank";
        };

        var parseCssText = function (cssText, baseUrl, baseFile, recurseChain) {
            // @TODO: potential mistranslation?
            return cssText.replace(new RegExp([
                /\/\*[\s\S]*?\*\//,                                             //  /* comment */
                /(@import\s*(["'])\s*((?:\\.|[^\\])*?)\2)/,                     //  @import "..."
                /(@import\s+url\(\s*(["']?)\s*((?:\\.|[^\\])*?)\s*\5\s*\))/,    //  @import url(...)
                /(url\(\s*(["']?)\s*((?:\\.|[^\\])*?)\s*\8\s*\))/               //  url(...)
            ].map(function (r) { return r.source; }).join("|"), "ig"), function () {
                if (arguments[1]) {
                    var url = arguments[3];
                    if (url.indexOf("://") === -1) {  // relative-linked file
                        var newUrl = getResDataUriCss(url, baseUrl, baseFile, recurseChain);
                        return "@import " + arguments[2] + newUrl + arguments[2];
                    }
                } else if (arguments[4]) {
                    var url = arguments[6];
                    if (url.indexOf("://") === -1) {  // relative-linked file
                        var newUrl = getResDataUriCss(url, baseUrl, baseFile, recurseChain);
                        return "@import url(" + arguments[5] + newUrl + arguments[5] + ")";
                    }
                } else if (arguments[7]) {
                    var url = arguments[9];
                    if (url.indexOf("://") === -1) {  // relative-linked file
                        var newUrl = getResDataUri(url, baseUrl, baseFile, recurseChain);
                        return "url(" + arguments[8] + newUrl + arguments[8] + ")";
                    }
                }
                return arguments[0];
            });
        };

        var file2url = function (file) {
            if (!file2url.hashArray) {
                file2url.hashArray = {};
                if (item.type === "site") {
                    var file2urlFile = dir.clone(); file2urlFile.append("sb-file2url.txt");
                    if (file2urlFile.exists() && file2urlFile.isFile()) {
                        sbCommonUtils.convertToUnicode(sbCommonUtils.readFile(file2urlFile), "UTF-8").split("\n").forEach(function (line) {
                            var [f, u] = line.split("\t");
                            file2url.hashArray[f] = u;
                        });
                    } else {
                        error("Unable to retrieve source url due to missing sb-file2url.txt");
                    }
                }
            }
            return file2url.hashArray[file.leafName];
        };

        var outputHtml = function (data) {  
        };
        
        verbose("converting ScrapBook data: '" + dir.path + "'");

        // load item data
        var item = sbConvCommon.parseIndexDat(indexData);
        if (["folder", "separator"].indexOf(item.type) !== -1) {
            verbose("skip item of type: '" + item.type + "'");
            return;
        }
        var charset = item.chars || "UTF-8";
        
        // generate main content
        var metaRefreshAvailable = 5;
        var content = parsePageContent(indexFile, []);

        if (typeof content === "string") {
            // determine the output filename
            var destFile = output.clone();
            destFile.append(dir.leafName + ".html");

            // output
            verbose("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
            sbConvCommon.writeFile(destFile, content, charset);
        } else {
            // determine the output filename
            var { file: indexFile, mime: mime } = content;
            var fileExt = sbConvCommon.splitFileName(indexFile.leafName)[1];
            fileExt = sbConvCommon.getMimePrimaryExtension(mime, fileExt);
            var destFile = output.clone();
            destFile.append(dir.leafName + "." + fileExt);

            // output
            verbose("exporting file: '" + item.title + "' --> '" + destFile.leafName + "'");
            indexFile.copyTo(destFile.parent, destFile.leafName);
        }
    };

    var threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var startTime;
    var dirs = input.directoryEntries;

    dirsNext();
}

function convert_sb2epub(input, output, includeAllFiles, bookMeta) {
    print("convert method: whole ScrapBook --> .epub");
    print("input directory: " + input.path);
    print("output file: " + output.path);
    print("include all files: " + (includeAllFiles ? "yes" : "no"));
    print("book id: " + bookMeta.id);
    print("book title: " + bookMeta.title);
    print("book language: " + bookMeta.language);
    print("book author: " + bookMeta.author);
    print("book contributor: " + bookMeta.contributor);
    print("book description: " + bookMeta.description);
    print("book E-publication date: " + bookMeta.date);
    print("book source: " + bookMeta.source);
    print("book cover: " + (bookMeta.cover || "no"));
    print("");

    verbose("generating file: '" + output.leafName + "' ...");

    // record the internal modified time
    bookMeta.internalModified = sbConvCommon.getW3CTimeStamp();

    // create zip
    // nsIZipWriter will add additional digits and corrupt the mimetype from spec
    // we copy a pre-compressed zip file containing the mimetype file instead
    var zipWritter = (function (zipFile) {
        var istream = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService)
                        .newChannel("chrome://sbconv/content/mimetype.zip", null, null).open();
        var bistream = Components.classes["@mozilla.org/binaryinputstream;1"].createInstance(Components.interfaces.nsIBinaryInputStream);
        bistream.setInputStream(istream);
        var ostream = Components.classes['@mozilla.org/network/file-output-stream;1'].createInstance(Components.interfaces.nsIFileOutputStream);
        ostream.init(zipFile, -1, -1, 0);
        var bostream = Components.classes["@mozilla.org/binaryoutputstream;1"].createInstance(Components.interfaces.nsIBinaryOutputStream);
        bostream.setOutputStream(ostream);
        var size = 0;
        while (size = bistream.available()) {
            bostream.writeBytes(bistream.readBytes(size), size);
        }
        bostream.close();
        var zipWritter = Components.classes['@mozilla.org/zipwriter;1'].createInstance(nsIZipWriter);
        zipWritter.open(zipFile, zipPr.PR_RDWR | zipPr.PR_CREATE_FILE);
        return zipWritter;
    })(output);

    // determine files not to include
    var excludeEntries = [
        "backup",
        "tree",
        "scrapbook.rdf",
        "cache.rdf",
        "sitemap.xsl",
        "multibook.txt",
        "folders.txt",
        "collection.html",
        "combine.html",
        "combine.css",
        "note.html",
        "note_template.html",
        "notex_template.html",
        "search.html"
    ].map(function (pattern) { return sbConvCommon.escapeRegExp(pattern); });

    // index, playOrder, depth are 1-based
    var infoTree = { hasCover: false, manifest: "", spine: "", toc: "", ncx: "" },
        fileIndex = 1, playOrder = 1, folderIndex = 1, separatorIndex = 1, bookmarkIndex = 1, refreshIndex = 1;
    var spine_tails = [];

    var indent = function (count) {
        return (new Array(count+1)).join(" ");
    };

    var handleCover = function (coverFilePath) {
        if (!coverFilePath) {
            setTimeout(handleGeneralFiles, 0);
            return;
        }

        // convert path to file object
        try {
            var coverFile = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
            coverFile.initWithPath(coverFilePath);
            if (!(coverFile.exists() && !coverFile.isDirectory())) {
                throw "not valid";
            }
        }
        catch(ex) {
            error("cover image '" + input.path + "' is not an available file.");
            return;
        }

        // add cover file to the zip
        var [filename, ext] = sbConvCommon.splitFileName(coverFile.leafName);
        filename = "cover." + ext;
        zipAddFile(zipWritter, "OEBPS/Images/" + filename, coverFile);

        // generate the cover page
        zipWriteFile(zipWritter, "OEBPS/sb2epub/cover.xhtml",
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<!DOCTYPE html>\n' +
            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
            '  <head>\n' +
            '    <meta charset="UTF-8" />\n' +
            '    <title>Cover</title>\n' +
            '    <style>.cover { text-align: center; }</style>\n' +
            '  </head>\n' +
            '  <body>\n' +
            '    <div><img alt="" src="../Images/' + filename + '" /></div>\n' +
            '  </body>\n' +
            '</html>\n');

        var mime = sbConvCommon.getFileMime(coverFile) || "application/octet-stream";
        infoTree.manifest += indent(4) + '<item id="' + filename + '" href="Images/' + filename + '" media-type="' + mime + '" />\n';
        infoTree.manifest += indent(4) + '<item id="cover" href="sb2epub/cover.xhtml" media-type="application/xhtml+xml" />\n';
        infoTree.spine += indent(4) + '<itemref idref="cover" />\n';
        infoTree.hasCover = true;

        // next step
        setTimeout(handleGeneralFiles, 0);
    };

    // Add files into the zip
    // Do notadd files in the data directory to the itemlist currently
    // (We'll handle them later by walking the resource tree)
    var handleGeneralFiles = function () {
        if (includeAllFiles) {
            var excludeRegex = null;
        } else {
            var excludeRegex = new RegExp("^OEBPS\\/scrapbook\\/(?:" + excludeEntries.join("|") + ")(?:\\/|$)", "i");
        }

        zipAddDirAsync(zipWritter, input, "OEBPS/scrapbook", null, excludeRegex, {
            onTask: function (file, subPath, depth) {
                if (!file.exists()) {
                    error("file '" + file.path + "' is not available.");
                    return false;
                } else if (file.isDirectory()) {
                    return false;
                }

                verbose("compressing file: '" + file.path + "' ...");

                var subPath = "scrapbook/" + encodeURI(getSubPath(input, file).join("/"));
                if (!/^scrapbook\/data\/\d{14}\//.test(subPath)) {
                    var opf_id = 'file' + fileIndex;
                    var mime = sbConvCommon.getFileMime(file) || "application/octet-stream";
                    infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="' + mime + '" fallback="blank" />\n';
                    fileIndex++;
                    spine_tails.push(opf_id);
                }
            },
            onComplete: function () {
                setTimeout(handleResTree, 0);
            }
        });
    };

    var handleResTree = function () {
        var rootRes = sbConvCommon.RDF.GetResource("urn:scrapbook:root"), lastDepth = 0, openedFolderDepth = 0;

        var closeOpenedFolders = function (depth) {
            var changed;
            do {
                changed = false;
                if (depth > lastDepth) {
                    // if we go in to a deeper level, open an ol
                    infoTree.toc += indent(depth * 4) + '<ol>\n';
                    lastDepth++;
                    changed = true;
                }
                if (depth < lastDepth) {
                    // if we go out of a deeper level, close an ol
                    infoTree.toc += indent(lastDepth * 4) + '</ol>\n';
                    lastDepth--;
                    changed = true;
                }
                // if the current depth is not a child of previously opened folder, close the folder tag
                if (openedFolderDepth > 0 && depth <= openedFolderDepth) {
                    infoTree.toc += indent(openedFolderDepth * 4 + 2) + '</li>\n';
                    infoTree.ncx += indent(openedFolderDepth * 2) + '</navPoint>\n';
                    openedFolderDepth--;
                    changed = true;
                }
            } while (changed);
        };
        
        forResTreeAsync(rootRes, {
            onTask: function (res, depth) {
                closeOpenedFolders(depth);

                var id = sbConvData.getProperty(res, "id");
                var type = sbConvData.getProperty(res, "type");
                var title = sbConvData.getProperty(res, "title");
                var source = sbConvData.getProperty(res, "source");

                verbose("processing item " + id + " (" + title + ") ...");

                switch (type) {
                    case "folder":
                        var opf_id = "folder" + folderIndex;
                        folderIndex++;
                        var subPath = "sb2epub/" + opf_id + ".xhtml";

                        // The epub reader may strip folder entries without path, so we make a blank page for them.
                        zipWriteFile(zipWritter, "OEBPS/" + subPath,
                            '<?xml version="1.0" encoding="utf-8"?>\n' +
                            '<!DOCTYPE html>\n' +
                            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
                            '  <head>\n' + 
                            '    <title>' + sbConvCommon.escapeHTML(title) + '</title>\n' +
                            '  </head>\n' +
                            '  <body></body>\n' +
                            '</html>\n');

                        infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="application/xhtml+xml" />\n';
                        infoTree.spine += indent(4) + '<itemref idref="' + opf_id + '" />\n';
                        infoTree.toc += indent(depth * 4 + 2) + '<li><a href="' + sbConvCommon.escapeHTML(subPath) + '">' + sbConvCommon.escapeHTML(title) + '</a>\n';
                        infoTree.ncx += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '">\n' +
                            indent(depth * 2) + '  <navLabel>\n' +
                            indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(title) + '</text>\n' +
                            indent(depth * 2) + '  </navLabel>\n' +
                            indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n';
                        playOrder++;
                        break;

                    case "separator":
                        var opf_id = "separator" + separatorIndex;
                        separatorIndex++;
                        var subPath = "sb2epub/" + opf_id + ".xhtml";

                        // The epub reader may strip folder entries without path, so we make a blank page for them.
                        zipWriteFile(zipWritter, "OEBPS/" + subPath,
                            '<?xml version="1.0" encoding="utf-8"?>\n' +
                            '<!DOCTYPE html>\n' +
                            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
                            '  <head>\n' + 
                            '    <title>' + sbConvCommon.escapeHTML(title) + '</title>\n' +
                            '  </head>\n' +
                            '  <body></body>\n' +
                            '</html>\n');

                        infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="application/xhtml+xml" />\n';
                        infoTree.spine += indent(4) + '<itemref idref="' + opf_id + '" />\n';
                        infoTree.toc += indent(depth * 4 + 2) + '<li><a href="' + sbConvCommon.escapeHTML(subPath) + '">---- ' + sbConvCommon.escapeHTML(title) + ' ----</a></li>\n';
                        infoTree.ncx += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '">\n' +
                            indent(depth * 2) + '  <navLabel>\n' +
                            indent(depth * 2) + '    <text>---- ' + sbConvCommon.escapeHTML(title) + ' ----</text>\n' +
                            indent(depth * 2) + '  </navLabel>\n' +
                            indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n';
                        playOrder++;
                        break;

                    case "bookmark":
                        var opf_id = "bookmark" + bookmarkIndex;
                        bookmarkIndex++;
                        var subPath = "sb2epub/" + opf_id + ".xhtml";

                        zipWriteFile(zipWritter, "OEBPS/" + subPath, 
                            '<?xml version="1.0" encoding="utf-8"?>\n' +
                            '<!DOCTYPE html>\n' +
                            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
                            '  <head>\n' +
                            '    <meta charset="UTF-8" />\n' +
                            '  </head>\n' +
                            '  <body>\n' +
                            '    #BOOKMARK <a href="' + sbConvCommon.escapeHTML(source) + '" target="_blank">' + sbConvCommon.escapeHTML(source) + '</a>\n' +
                            '  </body>\n' +
                            '</html>\n');

                        infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="application/xhtml+xml" />\n';
                        infoTree.spine += indent(4) + '<itemref idref="' + opf_id + '" />\n';
                        infoTree.toc += indent(depth * 4 + 2) + '<li><a href="' + sbConvCommon.escapeHTML(subPath) + '">' + sbConvCommon.escapeHTML(title) + '</a></li>\n';
                        infoTree.ncx += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '">\n' +
                            indent(depth * 2) + '  <navLabel>\n' +
                            indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(title) + '</text>\n' +
                            indent(depth * 2) + '  </navLabel>\n' +
                            indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n';
                        playOrder++;
                        break;

                    default:
                        var dir = sbConvCommon.getContentDir(id, true);
                        if (!dir) break;
                        var fileEnum = enumFiles(dir, true), file;
                        while (fileEnum.hasMoreElements()) {
                            file = fileEnum.getNext();
                            if ( !(file.exists() && file.isFile()) ) continue;

                            var subPath = "scrapbook/" + encodeURI(getSubPath(input, file).join("/"));
                            var opf_id = 'file' + fileIndex;
                            fileIndex++;
                            var mime = sbConvCommon.getFileMime(file) || "application/octet-stream";

                            infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="' + mime + '" fallback="blank" />\n';
                            // handle main pages (index.html)
                            if (/^scrapbook\/data\/\d{14}\/index\.html$/.test(subPath)) {
                                // epub doesn't support meta refresh, generate entry files for them

                                // if the file is rather small, reguard them as a total redirect,
                                // and check for a possible meta refresh to the real html file
                                if (file.fileSize <= 512) {
                                    // @TODO: improve the accuracy for meta refresh detection
                                    var metaRefreshUrl = sbConvCommon.getMetaRefreshUrl(sbConvCommon.convertToUnicode(sbConvCommon.readFile(file), "UTF-8"));
                                    if (metaRefreshUrl) {
                                        spine_tails.push(opf_id);

                                        var opf_id = "refresh" + refreshIndex;
                                        refreshIndex++;
                                        var subPath = "sb2epub/" + opf_id + ".xhtml";

                                        // prevent not-well-escaped chars
                                        metaRefreshUrl = sbConvCommon.escapeHTML(sbConvCommon.unescapeHTML(metaRefreshUrl));

                                        if (/^[a-z][a-z0-9+.-]*:/.test(metaRefreshUrl)) {
                                            // absolute link
                                            var metaRefreshRef = metaRefreshUrl;
                                        } else if (/^\/\//.test(metaRefreshUrl)) {
                                            // protocol relative link:
                                            // meaningless for file: protocol in ScrapBook and shouldn't happen
                                            // treat them as absolute link, althoug this would get an almost random target
                                            var metaRefreshRef = metaRefreshUrl;
                                        } else {
                                            // relative link: rewrite the path
                                            var metaRefreshRef = "../scrapbook/data/" + id + "/" + metaRefreshUrl;
                                        }

                                        zipWriteFile(zipWritter, "OEBPS/" + subPath,
                                            '<?xml version="1.0" encoding="utf-8"?>\n' +
                                            '<!DOCTYPE html>\n' +
                                            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
                                            '  <head>\n' +
                                            '    <meta charset="UTF-8" />\n' +
                                            '  </head>\n' +
                                            '  <body>\n' +
                                            '    #META REFRESH <a href="' + metaRefreshRef + '" target="_blank">' + metaRefreshUrl + '</a>\n' +
                                            '  </body>\n' +
                                            '</html>\n');

                                        infoTree.manifest += indent(4) + '<item id="' + opf_id + '" href="' + sbConvCommon.escapeHTML(subPath) + '" media-type="application/xhtml+xml" />\n';
                                        infoTree.spine += indent(4) + '<itemref idref="' + opf_id + '" />\n';
                                        infoTree.toc += indent(depth * 4 + 2) + '<li><a href="' + sbConvCommon.escapeHTML(subPath) + '">' + sbConvCommon.escapeHTML(title) + '</a></li>\n';
                                        infoTree.ncx += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '">\n' +
                                            indent(depth * 2) + '  <navLabel>\n' +
                                            indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(title) + '</text>\n' +
                                            indent(depth * 2) + '  </navLabel>\n' +
                                            indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n';
                                        playOrder++;
                                        continue;
                                    }
                                }

                                // add main entry to the spine and toc
                                infoTree.spine += indent(4) + '<itemref idref="' + opf_id + '" />\n';
                                infoTree.toc += indent(depth * 4 + 2) + '<li><a href="' + sbConvCommon.escapeHTML(subPath) + '">' + sbConvCommon.escapeHTML(title) + '</a></li>\n';
                                infoTree.ncx += indent(depth * 2) + '<navPoint id="navPoint-' + playOrder + '">\n' +
                                    indent(depth * 2) + '  <navLabel>\n' +
                                    indent(depth * 2) + '    <text>' + sbConvCommon.escapeHTML(title) + '</text>\n' +
                                    indent(depth * 2) + '  </navLabel>\n' +
                                    indent(depth * 2) + '  <content src="' + sbConvCommon.escapeHTML(subPath) + '" />\n';
                                playOrder++;
                            } else {
                                // add non-main entries to spine tails
                                spine_tails.push(opf_id);
                            }
                        }
                        break;
                }

                if (sbConvData.isContainer(res)) {
                    openedFolderDepth++;
                } else {
                    infoTree.ncx += indent(depth * 2) + '</navPoint>\n';
                }
                
            },
            onComplete: function () {
                closeOpenedFolders(0);
                setTimeout(handleSpineTails, 0);
            }
        });
    };

    var handleSpineTails = function () {
        spine_tails.forEach(function (spine_id) {
            infoTree.spine += indent(4) + '<itemref idref="' + spine_id + '" linear="no" />\n';
        });
        setTimeout(handleEpubSpecs, 0);
    };
    
    var handleEpubSpecs = function () {
        zipWriteFile(zipWritter, "META-INF/container.xml", 
            '<?xml version="1.0"?>\n' +
            '<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n' +
            '  <rootfiles>\n' +
            '    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>\n' +
            '  </rootfiles>\n' +
            '</container>\n');

        zipWriteFile(zipWritter, "OEBPS/content.opf",
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
            '<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="pub-id">\n' +
            '  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n' +
            '    <dc:identifier id="pub-id">' + sbConvCommon.escapeHTML(bookMeta.id) + '</dc:identifier>\n' +
            '    <dc:title>' + sbConvCommon.escapeHTML(bookMeta.title) + '</dc:title>\n' +
            '    <dc:language>' + sbConvCommon.escapeHTML(bookMeta.language) + '</dc:language>\n' +
            (bookMeta.author ? '    <dc:creator>' + sbConvCommon.escapeHTML(bookMeta.author) + '</dc:creator>\n' : "") +
            (bookMeta.contributor ? '    <dc:contributor>' + sbConvCommon.escapeHTML(bookMeta.contributor) + '</dc:contributor>\n' : "") +
            (bookMeta.publisher ? '    <dc:publisher>' + sbConvCommon.escapeHTML(bookMeta.publisher) + '</dc:publisher>\n' : "") +
            (bookMeta.description ? '    <dc:description>' + sbConvCommon.escapeHTML(bookMeta.description) + '</dc:description>\n' : "") +
            '    <dc:date>' + sbConvCommon.escapeHTML(bookMeta.date) + '</dc:date>\n' +
            (bookMeta.source ? '    <dc:source>' + sbConvCommon.escapeHTML(bookMeta.source) + '</dc:source>\n' : "") +
            '    <meta property="dcterms:modified">' + sbConvCommon.escapeHTML(bookMeta.internalModified) + '</meta>\n' +
            (infoTree.hasCover ? '    <meta name="cover" content="cover" />\n' : "") +
            '  </metadata>\n' +
            '  <manifest>\n' +
            '    <item id="toc" properties="nav" href="toc.xhtml" media-type="application/xhtml+xml" /><!-- epub3 -->\n' +
            '    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" /><!-- epub2 -->\n' +
            '    <item id="blank" href="sb2epub/blank.xhtml" media-type="application/xhtml+xml" />\n' + infoTree.manifest +
            '  </manifest>\n' +
            '  <spine toc="ncx">\n' + infoTree.spine +
            '  </spine>\n' +
            '</package>\n');

        zipWriteFile(zipWritter, "OEBPS/toc.xhtml",
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<!DOCTYPE html>\n' +
            '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">\n' +
            '<head>\n' +
            '   <meta charset="UTF-8" />\n' +
            '   <title>' + sbConvCommon.escapeHTML(bookMeta.title) + '</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '  <nav id="toc" role="doc-toc" epub:type="toc">\n' + infoTree.toc +
            '  </nav>\n' +
            '</body>\n' +
            '</html>\n');

        zipWriteFile(zipWritter, "OEBPS/toc.ncx",
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">\n' +
            '<head>\n' +
            '   <meta name="dtb:uid" content="' + sbConvCommon.escapeHTML(bookMeta.id) + '" />\n' +
            '</head>\n' +
            '<docTitle>\n' +
            '   <text>' + sbConvCommon.escapeHTML(bookMeta.title) + '</text>\n' +
            '</docTitle>\n' +
            '<docAuthor>\n' +
            '   <text>' + sbConvCommon.escapeHTML(bookMeta.author) + '</text>\n' +
            '</docAuthor>\n' +
            '<navMap>\n' + infoTree.ncx +
            '</navMap>\n' +
            '</ncx>\n');

        // simple fallback for pages that cannot be rendered
        zipWriteFile(zipWritter, "OEBPS/sb2epub/blank.xhtml",
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<!DOCTYPE html>\n' +
            '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
            '  <head></head>\n' +
            '  <body></body>\n' +
            '</html>\n');

        // finish
        setTimeout(finish, 0);
    };

    var finish = function () {
        zipClose(zipWritter);
        convert_finish();
    };

    handleCover(bookMeta.cover);
}

function convert_sb2maff2(input, output, entryPage) {
    print("convert method: whole ScrapBook --> .maff");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("entry page: " + entryPage);
    print("");

    verbose("generating file: '" + output.leafName + "' ...");

    var date = (new Date());
    var id = date.valueOf() + "_" + Math.floor(Math.random() * 1000);
    var title = sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook";

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

    var entryFile = sbConvCommon.escapeHTML(entryPage.split("/").map(function (part) {
        return sbConvCommon.escapeFileName(sbConvCommon.validateFileName(part));
    }).join("/"));
        
    var indexContent = "<!DOCTYPE html>\n" +
            '<html>\n' +
            '  <head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <meta http-equiv="refresh" content="0;URL=./ScrapBook/' + entryFile + '">\n' +
            '  </head>\n' +
            '  <body>\n' +
            '    #META REFRESH <a href="ScrapBook/' + entryFile + '">' + entryFile + '</a>\n' +
            '  </body>\n' +
            '</html>\n';

    var zw = zipOpen(output);
    zipWriteFile(zw, id + "/index.rdf", rdfContent);
    zipWriteFile(zw, id + "/index.html", indexContent);
    zipAddDirAsync(zw, input, id + "/ScrapBook", null, null, {
        onTask: function (file, subPath) {
            if (!file.isFile()) return;
            verbose("compressing file: '" + file.path + "' ...");
        },
        onComplete: function () {
            zipClose(zw);
            // finished
            convert_finish();
        }
    });
}

function convert_sb2zip2(input, output, topDirName) {
    print("convert method: whole ScrapBook --> .zip");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("top directory name: " + topDirName);
    print("");

    verbose("generating file: '" + output.leafName + "' ...");

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
    zipAddDirAsync(zw, input, overwriteName, null, null, {
        onTask: function (file, subPath) {
            if (!file.isFile()) return;
            verbose("compressing file: '" + file.path + "' ...");
        },
        onComplete: function () {
            zipClose(zw);
            // finished
            convert_finish();
        }
    });
}

function print(txt) {
    var field = document.getElementById("sbconvConverterStatus");
    field.value += txt + "\n";
    field.selectionStart = field.selectionEnd = field.value.length;
}

function verbose(txt) {
    if (sbConvCommon.getBoolPref('noVerbose', false)) return;
    print(txt);
}

function warn(txt) {
    warnCount++;
    print("WARN: " + txt);
}

function error(txt) {
    errorCount++;
    console.error(txt);
    print("ERROR: " + txt);
}

/**
 * Recursively walk down the resource tree and fires the hook for every entry res
 *
 * @param container
 * The resource container to run this async task.
 *
 * @param hook
 * The hook that fires on each file meet, which is an object that provides two methods:
 *
 * @param hook.onTask
 * function (res, depth) {}
 * depth is 0-based (the initial given dir is depth 0); skips looking into the container if return true 
 *
 * @param hook.onComplete
 * function () {}
 */
function forResTreeAsync(container, hook, includeRoot) {
    var hasOnTask = hook && hook.onTask,
        hasOnComplete = hook && hook.onComplete,
        threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200);
    var resEnums = [], resEnum, startTime;
    
    var nextResEntry = function () {
        if (!startTime) startTime = Date.now();
        while (resEnums.length) {
            resEnum = resEnums[resEnums.length - 1];
            if (resEnum.hasMoreElements()) {
                var entry = resEnum.getNext();
                handleEntry(entry);
                if (Date.now() - startTime > threadTimeout) {
                    startTime = false;
                    setTimeout(nextResEntry, 0);
                    return;
                }
                continue;
            }
            resEnums.pop();
        }
        finish();
    };
    
    var handleEntry = function (entry) {
        var interrupt = false;
        if (hasOnTask) {
            interrupt = hook.onTask(entry, resEnums.length);
        }
        if (!interrupt && sbConvData.isContainer(entry)) {
            sbConvCommon.RDFC.Init(sbConvData.data, entry);
            resEnums.push(sbConvCommon.RDFC.GetElements());
        }
    };

    var finish = function () {
        if (hasOnComplete) {
            hook.onComplete();
        }
    };

    if (includeRoot) {
        handleEntry(container);
    } else {
        sbConvCommon.RDFC.Init(sbConvData.data, container);
        resEnums.push(sbConvCommon.RDFC.GetElements());
    }
    nextResEntry();
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

/**
 * Returns the iterator for the given directory that travels all subdirectories and files
 */
function enumFiles(dir, includeSubdir) {
    var dirEnums = [], dirEnum, canSkip;

    var addEntryToEnums = function (entry) {
        if (entry.isDirectory()) {
            canSkip = true;
            dirEnums.push(entry.directoryEntries);
        }
    };

    addEntryToEnums(dir);

    var iterator = {};
    
    iterator.hasMoreElements = function () {
        while (dirEnums.length) {
            dirEnum = dirEnums[dirEnums.length - 1];
            if (dirEnum.hasMoreElements()) {
                return true;
            }
            dirEnums.pop();
        }
        return false;
    };

    iterator.getNext = function () {
        while (dirEnums.length) {
            dirEnum = dirEnums[dirEnums.length - 1];
            if (dirEnum.hasMoreElements()) {
                var entry = dirEnum.getNext().QueryInterface(Components.interfaces.nsIFile);
                if (includeSubdir) {
                    canSkip = false;
                    addEntryToEnums(entry);
                }
                return entry;
            }
            dirEnums.pop();
        }
        return;
    };

    iterator.getNextWithDepth = function () {
        while (dirEnums.length) {
            dirEnum = dirEnums[dirEnums.length - 1];
            if (dirEnum.hasMoreElements()) {
                var entry = dirEnum.getNext().QueryInterface(Components.interfaces.nsIFile);
                var result = [entry, dirEnums.length];
                addEntryToEnums(entry);
                return result;
            }
            dirEnums.pop();
        }
        return;
    };

    iterator.skipSubdir = function () {
        if (canSkip) {
            canSkip = false;
            dirEnums.pop();
        }
    };

    return iterator;
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

function zipDetermineCompresssionLevel(file) {
    // only compress known text-based files
    // @TODO: better algorithm, maybe MIME-based or other detection techniques?
    return /\.(html?|xht(ml)?|xml|rdf|txt|css|js|json)$/i.test(file.leafName) ? nsIZipWriter.COMPRESSION_BEST : nsIZipWriter.COMPRESSION_NONE;
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

// write the specific content into the zip with entry saveInZipAs directly
function zipWriteFile(zipWritter, saveInZipAs, content) {
    var channel = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService)
                 .newChannel("data:," + encodeURIComponent(content), null, null);
    zipWritter.addEntryChannel(saveInZipAs, Date.now() * 1000, nsIZipWriter.COMPRESSION_BEST, channel, false);
}

function zipAddFile(zipWritter, saveInZipAs, file) {
    var compressionLevel = zipDetermineCompresssionLevel(file);
    zipWritter.addEntryFile(saveInZipAs, compressionLevel, file, false);
}

/**
 * recursively add dir to the zip, with optionally determinable dirSubPath
 * subPath can be "", which means file/directory under dir will be placed at top level
 * subPath can be a subfolder, such as "subfolder/here"
 */
function zipAddDir(zipWritter, dir, subPath, includeRegex, excludeRegex) {
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

            if (includeRegex && !includeRegex.test(saveInZipAs)) {
                continue;
            }

            if (excludeRegex && excludeRegex.test(saveInZipAs)) {
                continue;
            }

            if (entry.isDirectory()) {
               dirArr.push(entry);
            }

            var compressionLevel = zipDetermineCompresssionLevel(entry);
            zipWritter.addEntryFile(saveInZipAs, compressionLevel, entry, false);
        }
    }
}

/**
 * Recursively walk down the directory tree and add every entry to zip
 *
 * @param zipWritter
 * The opened zip writter to write file into.
 *
 * @param dir
 * The directory tree to add files from.
 *
 * @param subPath
 * Add files to the sub path in the zip.
 * Path separator must use "/".
 * subPath can be "", which means entries directly under the given dir will be placed at top level
 * subPath can be a subfolder, such as "subfolder/here"
 *
 * @param includeRegex
 * entries whose calculated zip inner path does not match this regex will be skipped.
 *
 * @param excludeRegex
 * entries whose calculated zip inner path does match this regex will be skipped.
 *
 * @param hook
 * The observer that fires on each task.
 * Must be an object that provides two methods:
 *
 * @param hook.onTask
 * function (entry, saveInZipAs, depth) {}
 *
 * @param hook.onComplete
 * function () {}
 */
function zipAddDirAsync(zipWritter, dir, subPath, includeRegex, excludeRegex, hook) {
    var hasOnTask = hook && !!hook.onTask,
        hasOnComplete = hook && !!hook.onComplete,
        threadTimeout = sbConvCommon.getIntPref("threadTimeout", 200),
        startTime;
    var pathBasePattern = dir.path;
    var pathBaseReplace = (typeof subPath !== "undefined") ? subPath : dir.leafName;

    var filesEnum = enumFiles(dir);
    
    var nextEntry = function () {
        if (!startTime) startTime = Date.now();
        while (filesEnum.hasMoreElements()) {
            var [entry, depth] = filesEnum.getNextWithDepth();
            if (hasOnTask) {
                interrupt = handleEntry(entry, depth);
                if (interrupt) filesEnum.skipSubdir();
            }
            if (Date.now() - startTime > threadTimeout) {
                startTime = false;
                setTimeout(nextEntry, 0);
                return;
            }
        }
        finish();
    };

    var handleEntry = function (entry, depth) {
        var saveInZipAs = entry.path.replace(pathBasePattern, pathBaseReplace);
        saveInZipAs = saveInZipAs.replace(/\\/g,'/');
        saveInZipAs = saveInZipAs.replace(/^\//, "");
        if (!saveInZipAs) return;

        if (includeRegex && !includeRegex.test(saveInZipAs)) {
            return true;
        } else if (excludeRegex && excludeRegex.test(saveInZipAs)) {
            return true;
        } else {
            var compressionLevel = zipDetermineCompresssionLevel(entry);
            if (hasOnTask) {
                hook.onTask(entry, saveInZipAs, depth);
            }
            zipWritter.addEntryFile(saveInZipAs, compressionLevel, entry, false);
        }
    };

    var finish = function () {
        if (hasOnComplete) {
            hook.onComplete();
        }
    };

    nextEntry();
}

function zipClose(zipWritter) {
    zipWritter.close();
}
