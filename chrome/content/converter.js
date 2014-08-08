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
            convert_enex2sb(input, output);
            break;
        default:
            print("ERROR: unknown method.");
            break;
    }
}

function convert_enex2sb(input, output) {
    print("convert method: .enex --> ScrapBook format");
    print("input directory: " + input.path);
    print("output directory: " + output.path);
    print("");
    var files = input.directoryEntries;
    var file = null;
    filesNext();

    function filesNext() {
        while (files.hasMoreElements()) {
            file = files.getNext().QueryInterface(Components.interfaces.nsIFile);
            if (!file.isFile()) continue;
            print("converting file: '" + file.path + "'");
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
        var notesDOM = xmlDoc.getElementsByTagName("note");
        var notes = [];
        for (var i=0, I=notesDOM.length; i<I; i++) notes.push(notesDOM[i]);
        notesNext();

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
            var item = sbCommonUtils.newItem();

            // basic meta data
            item.type = "notex";
            item.chars = "UTF-8";

            // title
            try {
                item.title = note.getElementsByTagName("title")[0].textContent;
            } catch(ex){}

            var destDir = getUniqueDir(output, item.title);
            print("exporting note: '" + item.title + "' --> '" + destDir.leafName + "'");

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
            if (!item.id) item.id = sbCommonUtils.getTimeStamp();

            // source
            try {
                item.source = note.getElementsByTagName("source-url")[0].textContent;
            } catch(ex){}

            // content
            var content = parseEnexContent(note.getElementsByTagName("content")[0].firstChild.data);
            
            // output
            var indexDat = destDir.clone(); indexDat.append("index.dat");
            sbCommonUtils.writeIndexDat(item, indexDat);
            var indexHTML = destDir.clone(); indexHTML.append("index.html");
            sbCommonUtils.writeFile(indexHTML, content, "UTF-8", true);

            function parseEnexTime(time) {
                if (time.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/)) {
                    var date = new Date(
                        parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10) - 1, parseInt(RegExp.$3, 10),
                        parseInt(RegExp.$4, 10), parseInt(RegExp.$5, 10), parseInt(RegExp.$6, 10)
                    );
                    var date = new Date(date.valueOf() - date.getTimezoneOffset() * 60 * 1000);
                    return sbCommonUtils.getTimeStamp(date);
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

function loadXMLFile(file) {
    return loadXML(sbCommonUtils.convertToUnicode(sbCommonUtils.readFile(file), "UTF-8"));
}

function loadXML(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "text/xml");
}

function loadHTML(str) {
    var parser = new DOMParser();
    return parser.parseFromString(str, "text/html");
}

function getUniqueDir(dir, name) {
    var name = sbCommonUtils.validateFileName(name).substring(0, 60) || "untitled";
    name = name.replace(/\./g, "");
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