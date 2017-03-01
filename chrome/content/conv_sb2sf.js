function pickFolder(targetId) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeGetFolder);
    if ( FP.show() != FP.returnOK ) return false;
    var targetElem = document.getElementById(targetId);
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    return true;
}

window.addEventListener("load", function () {
    document.getElementById("sbconvConverterOptionWindow").addEventListener("dialogaccept", function () {
        var data = {
            method: "sb2sf",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("outputPath").value,
            generateSubFolders: document.getElementById("generateSubFolders").checked,
        };
        window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
    });

    document.getElementById("inputPick").addEventListener("command", function () {
        return pickFolder("inputPath");
    });

    document.getElementById("outputPick").addEventListener("command", function () {
        return pickFolder("outputPath");
    });
});
