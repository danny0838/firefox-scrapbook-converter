(function(){
    var PREF = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.scrapbook.addon.converter.");

    // API support for different ScrapBook versions
    if (typeof(sbCommonUtils) == "object") {
        // ScrapBook X >= 1.10, ScrapBook Plus, ScrapBook < 1.4
        try { var oSBCommon = sbCommonUtils; } catch(ex){}
        try { var oSBData = sbDataSource; } catch(ex){}
        try { var oSBController = sbController; } catch(ex){}
        try { var oSBTree = sbTreeHandler; } catch(ex){}
        try { var oSBList = sbListHandler; } catch(ex){}
    }
    else if (typeof(ScrapBookUtils) == "object") {
        // ScrapBook X < 1.10, ScrapBook >= 1.4
        try { var oSBCommon = ScrapBookUtils; } catch(ex){}
        try { var oSBData = ScrapBookData; } catch(ex){}
        try { var oSBController = sbController; } catch(ex){}
        try { var oSBTree = sbTreeUI; } catch(ex){}
        try { var oSBList = null; } catch(ex){}
    }

    window.sbConvCommon = {
        get BUNDLE() {
            return oSBCommon.BUNDLE;
        },

        get RDFC() {
            return oSBCommon.RDFC;
        },

        newItem : function(aID) {
            return ("newItem" in oSBCommon) ? oSBCommon.newItem(aID) : newItem(aID);

            function newItem(aID) {
                return { id : aID || "", type : "", title : "", chars : "", icon : "", source : "", comment : "", lock : "" };
            }
        },

        readFile : function(aFile) {
            return oSBCommon.readFile(aFile);
        },

        getTimeStamp : function(aDate) {
            // must take a date (like SBX do)
            var dd = aDate || new Date();
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1; if ( m < 10 ) m = "0" + m;
            var d = dd.getDate();      if ( d < 10 ) d = "0" + d;
            var h = dd.getHours();     if ( h < 10 ) h = "0" + h;
            var i = dd.getMinutes();   if ( i < 10 ) i = "0" + i;
            var s = dd.getSeconds();   if ( s < 10 ) s = "0" + s;
            return y.toString() + m.toString() + d.toString() + h.toString() + i.toString() + s.toString();
        },

        convertToUnicode : function(aString, aCharset) {
            return oSBCommon.convertToUnicode(aString, aCharset);
        },

        validateFileName : function(aFileName) {
            return oSBCommon.validateFileName(aFileName);
        },

        writeFile : function(aFile, aContent, aChars, aNoCatch) {
            return oSBCommon.writeFile(aFile, aContent, aChars, aNoCatch);
        },

        writeIndexDat : function(aItem, aFile) {
            return oSBCommon.writeIndexDat(aItem, aFile);
        },

        /* custom */
        _stringBundles : [],
        
        lang : function(aBundle, aName, aArgs) {
            var bundle = this._stringBundles[aBundle];
            if (!bundle) {
                var uri = "chrome://sbconv/locale/%s.properties".replace("%s", aBundle);
                bundle = this._stringBundles[aBundle] = this.BUNDLE.createBundle(uri);
            }
            try {
                if (!aArgs)
                    return bundle.GetStringFromName(aName);
                else
                    return bundle.formatStringFromName(aName, aArgs, aArgs.length);
            }
            catch (ex) {
            }
            return aName;
        },

        getBoolPref : function(aName, aDefaultValue) {
            try {
                return PREF.getBoolPref(aName);
            } catch(ex) {
                return aDefaultValue;
            }
        },
        
        copyUnicharPref : function(aName, aDefaultValue) {
            try {
                return PREF.getComplexValue(aName, Components.interfaces.nsISupportsString).data;
            } catch(ex) {
                return aDefaultValue;
            }
        },

        setUnicharPref : function (aName, aValue) {
            try {
                var str = Components.classes["@mozilla.org/supports-string;1"].
                          createInstance(Components.interfaces.nsISupportsString);
                str.data = aValue;
                PREF.setComplexValue(aName, Components.interfaces.nsISupportsString, str);
            }
            catch (ex) {}
        },
    };
})();
