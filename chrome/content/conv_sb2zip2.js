function onLoad() {
    document.getElementById("inputPath").value = sbConvCommon.getScrapBookDir().path;
}

function onOutputBrowse() {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeSave);
    FP.defaultExtension = "zip";
    FP.appendFilter("ZIP", "*.zip");
    if ( [FP.returnOK, FP.returnReplace].indexOf(FP.show()) === -1 ) return false;
    var targetElem = document.getElementById("outputPath");
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    return true;
}

function convert(method) {
    var data = { method: method }, elem;
    data["input"] = document.getElementById("inputPath").value;
    data["output"] = data["input"]; // dummy value to prevent check fail
    data["outputFile"] = document.getElementById("outputPath").value;
    data["sb2zip2_topDirName"] = document.getElementById("sb2zip2_topDirName").value;

    window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
}