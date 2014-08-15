/* options */
function onInputBrowse() {
    return pickFolder("inputPath");
}

function onOutputBrowse() {
    return pickFolder("outputPath");
}

function pickFolder(targetId) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeGetFolder);
    if ( FP.show() != FP.returnOK ) return false;
    var targetElem = document.getElementById(targetId);
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    // document.persist(targetElem, "value");
    return true;
}

/* convert */
function convert(method) {
    var data = {
        method: method,
        input: document.getElementById("inputPath").value,
        output: document.getElementById("outputPath").value,
        includeSubdir: document.getElementById("includeSubdir").checked,
        includeFileName: document.getElementById("includeFileName").checked,
    };
    window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
}
