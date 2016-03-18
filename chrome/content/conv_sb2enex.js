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
            method: "sb2enex",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("outputPath").value,
            addTags: document.getElementById("addTags").checked && document.getElementById("addTagsValue").value,
            folderAsTag: document.getElementById("folderAsTag").checked,
            importIndexHTML: document.getElementById("importIndexHTML").checked,
            importIndexHTML: document.getElementById("importIndexHTML").checked,
            importCommentMetadata: document.getElementById("importCommentMetadata").checked,
            importSourcePackFormat: document.getElementById("importSourcePack").checked && document.getElementById("importSourcePackFormat").value,
            mergeOutput: document.getElementById("mergeOutput").checked,
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
