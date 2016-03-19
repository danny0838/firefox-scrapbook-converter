function pickFileSave(targetId, defaultName) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeSave);
    FP.defaultString = defaultName;
    FP.defaultExtension = "epub";
    FP.appendFilter("EPUB", "*.epub");
    if ( [FP.returnOK, FP.returnReplace].indexOf(FP.show()) === -1 ) return false;
    var targetElem = document.getElementById(targetId);
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    return true;
}

function pickFileLoad() {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeOpen);
    FP.appendFilters(FP.filterImages);
    if ( FP.show() !== FP.returnOK ) return false;
    document.getElementById("cover").src = sbConvCommon.convertFilePathToURL(FP.file.path);
    document.getElementById("coverPath").label = document.getElementById("coverPath").value = FP.file.path;
    return true;
}

window.addEventListener("load", function () {
    document.getElementById("inputPath").value = sbConvCommon.getScrapBookDir().path;

    document.getElementById("sbconvConverterOptionWindow").addEventListener("dialogaccept", function () {
        var data = {
            method: "sb2epub",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("inputPath").value, // dummy value to prevent check fail
            outputFile: document.getElementById("outputPath").value,
            includeAllFiles: document.getElementById("includeAllFiles").checked,
            bookMeta: {
                cover: document.getElementById("coverPath").value,
            },
        };
        window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
    });

    document.getElementById("outputPick").addEventListener("command", function () {
        return pickFileSave("outputPath", sbConvCommon.validateFileName(sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook"));
    });

    document.getElementById("coverPick").addEventListener("command", function () {
        return pickFileLoad("cover");
    });
});
