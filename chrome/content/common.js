(function(){
    var PREF = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.scrapbook.addon.converter.");
    var PREF_GLOBAL = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("");

    // API support for different ScrapBook versions
    if (typeof(sbCommonUtils) == "object") {
        // ScrapBook X >= 1.10, ScrapBook Plus, ScrapBook < 1.4
        try { var oSBCommon = sbCommonUtils; } catch(ex){}
        try { var oSBData = sbDataSource; } catch(ex){}
        try { var oSBController = sbController; } catch(ex){}
        try { var oSBTree = sbTreeHandler; } catch(ex){}
        try { var oSBList = sbListHandler; } catch(ex){}
        try { var oSBTrade = sbTradeService; } catch(ex){}
    }
    else if (typeof(ScrapBookUtils) == "object") {
        // ScrapBook X < 1.10, ScrapBook >= 1.4
        try { var oSBCommon = ScrapBookUtils; } catch(ex){}
        try { var oSBData = ScrapBookData; } catch(ex){}
        try { var oSBController = sbController; } catch(ex){}
        try { var oSBTree = sbTreeUI; } catch(ex){}
        try { var oSBList = null; } catch(ex){}
        try { var oSBTrade = sbTradeService; } catch(ex){}
    }

    window.sbConvCommon = {
        get BUNDLE() {
            return oSBCommon.BUNDLE;
        },

        get RDF() {
            return oSBCommon.RDF;
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

        getScrapBookDir : function() {
            return oSBCommon.getScrapBookDir();
        },

        getContentDir : function(aID, aSuppressCreate) {
            return oSBCommon.getContentDir(aID, aSuppressCreate);
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
                
        timeStampToDate : function(aTimeStamp) {
            var dd;
            if (aTimeStamp.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/)) {
                dd = new Date(
                    parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10) - 1, parseInt(RegExp.$3, 10),
                    parseInt(RegExp.$4, 10), parseInt(RegExp.$5, 10), parseInt(RegExp.$6, 10)
                );
            }
            return dd;
        },

        getLastModifiedTime : function(aTimeStamp) {
            var date = this.timeStampToDate(aTimeStamp);
            if (date) {
                return date.getTime();
            }
            return false;
        },

        getW3CTimeStamp : function(date) {
            var date = date || new Date();
            var y = date.getUTCFullYear();
            var m = date.getUTCMonth() + 1; if ( m < 10 ) m = "0" + m;
            var d = date.getUTCDate();      if ( d < 10 ) d = "0" + d;
            var h = date.getUTCHours();     if ( h < 10 ) h = "0" + h;
            var i = date.getUTCMinutes();   if ( i < 10 ) i = "0" + i;
            var s = date.getUTCSeconds();   if ( s < 10 ) s = "0" + s;
            return y.toString() + "-" + m.toString() + "-" + d.toString() + "T" + h.toString() + ":" + i.toString() + ":" + s.toString() + "Z";
        },
        
        convertFilePathToURL : function(aFilePath) {
            return oSBCommon.convertFilePathToURL(aFilePath);
        },
        
        resolveURL : function(aBaseURL, aRelURL) {
            return oSBCommon.resolveURL(aBaseURL, aRelURL);
        },

        convertURLToFile : function(aURLString) {
            return oSBCommon.convertURLToFile(aURLString);
        },

        convertToUnicode : function(aString, aCharset) {
            return oSBCommon.convertToUnicode(aString, aCharset);
        },
        
        splitFileName : function(aFileName) {
            return oSBCommon.splitFileName(aFileName);
        },

        escapeFileName : function(aString) {
            return ("escapeFileName" in oSBCommon) ? oSBCommon.escapeFileName(aString) : escapeFileName(aString);

            function escapeFileName(aString) {
                return aString.replace(/[#]+|(?:%[0-9A-Fa-f]{2})+/g, function(m){return encodeURIComponent(m);});
            }
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

        parseIndexDat : function(aFile) {
            return oSBTrade.parseIndexDat(aFile);
        },

        getFileMime : function(aFile) {
            if (oSBCommon.getFileMime) return oSBCommon.getFileMime(aFile);
            try {
                var MIME = Components.classes["@mozilla.org/mime;1"].getService(Components.interfaces.nsIMIMEService);
                return MIME.getTypeFromFile(aFile);
            }
            catch(ex) {}
            return false;
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

        escapeHTML : function(aStr, aNoDoubleQuotes, aSingleQuotes, aNoAmp) {
            if (!aNoAmp) aStr = aStr.replace(/&/g, "&amp;");
            aStr = aStr.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (!aNoDoubleQuotes) aStr = aStr.replace(/"/g, "&quot;");
            if (aSingleQuotes) aStr = aStr.replace(/'/g, "&apos;");
            return aStr;
        },

        unescapeHTML : function(aStr) {
            var list = { "&amp;": "&", "&lt;": "<", "&gt;" : ">", "&quot;" : '"', "&nbsp;" : " " };
            return aStr.replace(/&amp;|&lt;|&gt;|&quot;|&nbsp;|&#(\d+);|&#x([0-9A-Fa-f]+);/g, function(entity, dec, hex) {
                if (dec) return String.fromCharCode(parseInt(dec, 10));
                if (hex) return String.fromCharCode(parseInt(hex, 16));
                return list[entity];
            });
        },

        /**
         * We cannot and don't have to handle all possible cases.
         * Here's a heuristic that handles most possible cases of a standard HTML page
         */
        getMetaRefreshUrl : function(sourceHtml) {
          var regex = /<\!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<style>[\s\S]*?<\/style>|<script>[\s\S]*?<\/script>|<xmp>[\s\S]*?<\/xmp>|<meta\s+([^>]*)>/ig;
          while (regex.exec(sourceHtml) && RegExp.$1) {
            var attrs = RegExp.$1;
            if (!/\s*http-equiv\s*=\s*("[^"]+"|'[^']*'|\S+)/i.test(attrs)) continue;
            var value = this.unescapeHTML(/^(["'])?(.*)\1$/.exec(RegExp.$1)[2]);
            if (value.toLowerCase() !== "refresh") continue;
            if (!/\s*content\s*=\s*("[^"]+"|'[^']*'|\S+)/i.test(attrs)) continue;
            var value = this.unescapeHTML(/^(["']?)(.*)\1$/.exec(RegExp.$1)[2]);
            if (!/;\s*url\s*=\s*("[^"]+"|'[^']+'|\S+)\s*$/i.test(value)) continue;
            var value = /^(["']?)(.*)\1$/.exec(RegExp.$1)[2];
            return value;
          }
          return false;
        },

        escapeRegExp : function(aString) {
            return aString.replace(/([\*\+\?\.\^\/\$\\\|\[\]\{\}\(\)])/g, "\\$1");
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

        getSbUnicharPref : function(aName, aDefaultValue) {
            var result = false;
            try {
                result = PREF_GLOBAL.getComplexValue("extensions.scrapbook." + aName, Components.interfaces.nsISupportsString).data;
            } catch(ex) {}
            if (result !== false) return result;
            try {
                result = PREF_GLOBAL.getComplexValue("scrapbook." + aName, Components.interfaces.nsISupportsString).data;
            } catch(ex) {}
            if (result !== false) return result;
            return aDefaultValue;
        },

        getGlobalUnicharPref : function(aName, aDefaultValue) {
            try {
                return PREF_GLOBAL.getComplexValue(aName, Components.interfaces.nsISupportsString).data;
            } catch(ex) {
                return aDefaultValue;
            }
        }
    };

    window.sbConvData = {
        get data() {
            return ("dataSource" in oSBData) ? oSBData.dataSource : oSBData.data;
        },

        flattenResources: function(aContRes, aRule, aRecursive) {
            return oSBData.flattenResources(aContRes, aRule, aRecursive);
        },

        findParentResource: function(aRes) {
            return oSBData.findParentResource(aRes);
        },

        getProperty: function(aRes, aProp) {
            return oSBData.getProperty(aRes, aProp);
        },
        
        isContainer: function(aRes) {
            return oSBData.isContainer(aRes);
        },
    };
})();
