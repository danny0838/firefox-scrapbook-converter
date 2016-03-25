function pickFileSave(targetId, defaultName) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeSave);
    FP.defaultString = defaultName;
    FP.defaultExtension = "maff";
    FP.appendFilter("MAFF", "*.maff");
    if ( [FP.returnOK, FP.returnReplace].indexOf(FP.show()) === -1 ) return false;
    var targetElem = document.getElementById(targetId);
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    return true;
}

window.addEventListener("load", function () {
    document.getElementById("inputPath").value = sbConvCommon.getScrapBookDir().path;
    document.getElementById("entryPage").placeholder = "tree/frame.html";

    document.getElementById("sbconvConverterOptionWindow").addEventListener("dialogaccept", function () {
        var elem = document.getElementById("entryPage");
        if (!elem.value) {
            elem.value = elem.placeholder;
            elem.setAttribute("value", elem.value);
        }

        var data = {
            method: "sb2maff2",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("inputPath").value, // dummy value to prevent check fail
            outputFile: document.getElementById("outputPath").value,
            entryPage: document.getElementById("entryPage").value,
        };
        window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
    });

    document.getElementById("outputPick").addEventListener("command", function () {
        return pickFileSave("outputPath", sbConvCommon.validateFileName(sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook"));
    });
});
