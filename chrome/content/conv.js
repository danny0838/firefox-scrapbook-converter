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

function convert(method) {
    var data = { method: method }, elem;
    elem = document.getElementById("inputPath"); if (elem) data["input"] = elem.value;
    elem = document.getElementById("outputPath"); if (elem) data["output"] = elem.value;
    elem = document.getElementById("includeSubdir"); if (elem) data["includeSubdir"] = elem.checked;
    elem = document.getElementById("includeFileName"); if (elem) data["includeFileName"] = elem.checked;
    elem = document.getElementById("uniqueId"); if (elem) data["uniqueId"] = elem.checked;
    window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
}
