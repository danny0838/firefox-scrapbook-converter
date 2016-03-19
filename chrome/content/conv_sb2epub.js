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

function updateCoverImage(file) {
    if (typeof file !== "string") file = file.path;
    if (!file) return;
    document.getElementById("epub_coverImage").src = sbConvCommon.convertFilePathToURL(file);
    document.getElementById("epub_cover").label = document.getElementById("epub_cover").value = file;
    document.getElementById("epub_cover").setAttribute('value', file);
}

function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function getBookMeta() {
    return {
        id: document.getElementById("epub_id").value,
        title: document.getElementById("epub_title").value,
        language: document.getElementById("epub_language").value,
        author: document.getElementById("epub_author").value,
        contributor: document.getElementById("epub_contributor").value,
        publisher: document.getElementById("epub_publisher").value,
        description: document.getElementById("epub_description").value,
        date: document.getElementById("epub_date").value,
        source: document.getElementById("epub_source").value,
        cover: document.getElementById("epub_coverCheck").checked && document.getElementById("epub_cover").value,
    };
}

window.addEventListener("load", function () {
    document.getElementById("inputPath").value = sbConvCommon.getScrapBookDir().path;
    document.getElementById("epub_id").placeholder = "urn:uuid:" + getUUID();
    document.getElementById("epub_title").placeholder = sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook";
    document.getElementById("epub_language").placeholder = sbConvCommon.getGlobalUnicharPref("general.useragent.locale", "") || "en";
    document.getElementById("epub_date").placeholder = sbConvCommon.getW3CTimeStamp("");
    updateCoverImage(document.getElementById("epub_cover").value);

    document.getElementById("sbconvConverterOptionWindow").addEventListener("dialogaccept", function () {
        var elem = document.getElementById("epub_id");
        if (!elem.value) {
            elem.value = elem.placeholder;
            elem.setAttribute("value", elem.value);
        }

        var elem = document.getElementById("epub_title");
        if (!elem.value) {
            elem.value = elem.placeholder;
            elem.setAttribute("value", elem.value);
        }

        var elem = document.getElementById("epub_language");
        if (!elem.value) {
            elem.value = elem.placeholder;
            elem.setAttribute("value", elem.value);
        }

        var elem = document.getElementById("epub_date");
        if (!elem.value) {
            elem.value = elem.placeholder;
            elem.setAttribute("value", elem.value);
        }

        var data = {
            method: "sb2epub",
            input: document.getElementById("inputPath").value,
            output: document.getElementById("inputPath").value, // dummy value to prevent check fail
            outputFile: document.getElementById("outputPath").value,
            includeAllFiles: document.getElementById("includeAllFiles").checked,
            bookMeta: getBookMeta(),
        };
        window.openDialog('chrome://sbconv/content/converter.xul','ScrapBook:Converter:Convert','chrome,toolbar,centerscreen,resizable,modal', data);
    });

    document.getElementById("outputPick").addEventListener("command", function () {
        return pickFileSave("outputPath", sbConvCommon.validateFileName(sbConvCommon.getSbUnicharPref("data.title", "") || "ScrapBook"));
    });

    document.getElementById("epub_coverPick").addEventListener("command", function () {
        var FP = Components.classes['@mozilla.org/filepicker;1'].createInstance(Components.interfaces.nsIFilePicker);
        FP.init(window, null, FP.modeOpen);
        FP.appendFilters(FP.filterImages);
        if ( FP.show() != FP.returnOK ) return;
        updateCoverImage(FP.file.path);
        document.getElementById("epub_coverCheck").checked = true;
    });
});
