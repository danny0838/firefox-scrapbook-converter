function pickFolder(targetId) {
    var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
    FP.init(window, null, FP.modeGetFolder);
    if ( FP.show() != FP.returnOK ) return false;
    var targetElem = document.getElementById(targetId);
    targetElem.value = FP.file.path;
    targetElem.setAttribute("value", targetElem.value);
    return true;
}

function noMergeOutputAndTopDirNameNone() {
    if (document.getElementById("mergeOutput").checked) {
        document.getElementById("topDirName_none").disabled = true;
        if (document.getElementById("topDirName").value === "none") {
            document.getElementById("topDirName").value = "dir";
        }
    } else {
        document.getElementById("topDirName_none").disabled = false;
    }
}

function htzMode() {
    if (document.getElementById("generateHtz").checked) {
        document.getElementById("topDirName").disabled = true;
        document.getElementById("mergeOutput").disabled = true;
    } else {
        document.getElementById("topDirName").disabled = false;
        document.getElementById("mergeOutput").disabled = false;
    }
}

window.addEventListener("load", function () {
    noMergeOutputAndTopDirNameNone();
    htzMode();

    document.getElementById("sbconvConverterOptionWindow").addEventListener("dialogaccept", function () {
        var data = {
            method: "sb2zip",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("outputPath").value,
            topDirName: document.getElementById("topDirName").value,
            mergeOutput: document.getElementById("mergeOutput").checked,
            generateSubFolders: document.getElementById("generateSubFolders").checked,
            generateHtz: document.getElementById("generateHtz").checked,
        };
        window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
    });

    document.getElementById("inputPick").addEventListener("command", function () {
        return pickFolder("inputPath");
    });

    document.getElementById("outputPick").addEventListener("command", function () {
        return pickFolder("outputPath");
    });

    document.getElementById("generateHtz").addEventListener("command", function () {
        htzMode();
    });

    document.getElementById("mergeOutput").addEventListener("command", function () {
        noMergeOutputAndTopDirNameNone();
    });
});
