/* options */
function onInputBrowse() {
    return pickFolder("pref_inputPath");
}

function onOutputBrowse() {
    return pickFolder("pref_outputPath");
}

function pickFolder(targetId) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeGetFolder);
    if ( FP.show() != FP.returnOK ) return false;
    document.getElementById(targetId).value = FP.file.path;
    return true;
}

/* convert */
function convert(method) {
    var data = {
        method: method,
        input: document.getElementById("inputPath").value,
        output: document.getElementById("outputPath").value,
    };
    window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
}
