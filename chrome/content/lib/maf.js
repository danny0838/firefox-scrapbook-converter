(function(){

var Ci = Components.interfaces;
var Cc = Components.classes;
var Cr = Components.results;
var Cu = Components.utils;


/* borrowed from chrome://maf/content/general/dataSourceWrapperObject.js in MAF addon 3.0.2 */

// Import XPCOMUtils to generate the QueryInterface functions
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

/**
 * Base class that can be used to implement RDF data sources by wrapping an
 *  inner data source. This class contains the wrapping logic and provides
 *  convenience methods for manipulating the underlying data source.
 *
 * For general information about RDF data sources in Mozilla, see
 *  <https://developer.mozilla.org/en/RDF_in_Mozilla_FAQ> (retrieved
 *  2009-09-28). For more information on RDF data source implementation
 *  techniques, see <https://developer.mozilla.org/en/RDF_Datasource_How-To>
 *  (retrieved 2009-09-28).
 *
 * @param aInnerDataSource   An object implementing the nsIRDFDataSource
 *                            interface that will be wrapped.
 */
function DataSourceWrapper(aInnerDataSource) {
  // This object allows the implementation of the nsIRDFDataSource interface by
  //  forwarding most of the calls to an in-memory data source. The first part
  //  of the initialization consists in creating the wrapper functions.

  // This function creates a forwarding function for aInnerDataSource
  function makeForwardingFunction(functionName) {
    return function() {
      return aInnerDataSource[functionName].apply(aInnerDataSource, arguments);
    }
  }

  // Forward all the functions that are not explicitly overridden
  for (var propertyName in aInnerDataSource) {
    if (typeof aInnerDataSource[propertyName] == "function" &&
     !(propertyName in this)) {
      this[propertyName] = makeForwardingFunction(propertyName);
    }
  }

  // We also set up a convenience access to some of the RDF resource objects
  //  that are commonly used with this data source. This way, users don't need
  //  to call GetResource repeatedly.
  for (var resourceId in this.resources) {
    if (this.resources.hasOwnProperty(resourceId)) {
      var resource = this.resources[resourceId];
      // Since the inner "resources" object is often stored in the prototype of
      //  the derived classes, it is shared by all the instances of the data
      //  source created from the same prototype, and the translation from URL
      //  to RDF resource may have been already done.
      if (typeof resource == "string") {
        this.resources[resourceId] = this._rdf.GetResource(resource);
      }
    }
  }

  // Store a reference to the wrapped object
  this._wrappedObject = aInnerDataSource;
}

DataSourceWrapper.prototype = {

  // --- Public methods and properties ---

  /**
   * Collection of RDF resource objects that form the common subjects and the
   *  vocabulary of this RDF data source.
   *
   * Derived classes usually override this property in their prototype, defining
   *  the resource URLs as strings. The strings are converted to actual RDF
   *  resources as soon as the first instance of the data source is constructed.
   *
   * The original resource URLs can be retrieved using the ValueUTF8 property of
   *  the resource objects.
   */
  resources: {},

  /**
   * Returns the value of the literal to which the given property points.
   */
  getLiteralValue: function(aSource, aProperty) {
    return this.GetTarget(aSource, aProperty, true).
     QueryInterface(Ci.nsIRDFLiteral).Value;
  },

  /**
   * Replaces the literal to which the given property points.
   */
  replaceLiteral: function(aSource, aProperty, aNewValue) {
    // Find the RDF nodes to be modified, assuming that the required assertion
    //  already exists in the data source
    var oldRdfLiteral = this.GetTarget(aSource, aProperty, true);
    var newRdfLiteral = this._rdf.GetLiteral(aNewValue);
    // Execute the change
    this.Change(aSource, aProperty, oldRdfLiteral, newRdfLiteral);
  },

  // --- nsISupports interface functions ---

  QueryInterface: XPCOMUtils.generateQI([Ci.nsIRDFDataSource]),

  // --- nsIRDFDataSource interface functions ---

  Assert: function(aSource, aProperty, aTarget, aTruthValue) {
    // Should return NS_RDF_ASSERTION_REJECTED, but it is a success code
    throw Cr.NS_ERROR_NOT_IMPLEMENTED;
  },

  Change: function(aSource, aProperty, aOldTarget, aNewTarget) {
    // Should return NS_RDF_ASSERTION_REJECTED, but it is a success code
    throw Cr.NS_ERROR_NOT_IMPLEMENTED;
  },

  Move: function(aOldSource, aNewSource, aProperty, aTarget) {
    // Should return NS_RDF_ASSERTION_REJECTED, but it is a success code
    throw Cr.NS_ERROR_NOT_IMPLEMENTED;
  },

  Unassert: function(aSource, aProperty, aTarget) {
    // Should return NS_RDF_ASSERTION_REJECTED, but it is a success code
    throw Cr.NS_ERROR_NOT_IMPLEMENTED;
  },

  // --- Protected methods and properties ---

  /**
   * Returns an RDF literal containing either "true" or "false".
   */
  _rdfBool: function(aBooleanValue) {
    return this._rdf.GetLiteral(aBooleanValue ? "true" : "false");
  },

  /**
   * Makes an RDF sequence associated with the wrapped data source.
   */
  _rdfSequence: function(aResource) {
    return Cc["@mozilla.org/rdf/container-utils;1"]
     .getService(Ci.nsIRDFContainerUtils).MakeSeq(this._wrappedObject,
     aResource);
  },

  /**
   * RDF data source that is wrapped by this object.
   */
  _wrappedObject: null,

  /**
   * Reference to the global RDF service, provided for convenience.
   */
  _rdf: Cc["@mozilla.org/rdf/rdf-service;1"].getService(Ci.nsIRDFService)
}


/* borrowed from chrome://maf/content/archiving/maffDataSourceObject.js in MAF addon 3.0.2 */

// Import XPCOMUtils to generate the QueryInterface functions
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

/**
 * Provides an RDF data source that gives access to the files containing the
 *  saved page metadata of MAFF archives, both for reading and for writing.
 *
 * This class derives from DataSourceWrapper. See the DataSourceWrapper
 *  documentation for details.
 */
function MaffDataSource() {
  // Construct the base class wrapping an in-memory XML data source
  DataSourceWrapper.call(this,
   Cc["@mozilla.org/rdf/datasource;1?name=xml-datasource"].
   createInstance(Ci.nsIRDFDataSource));
}

MaffDataSource.prototype = {
  // Derive from the DataSourceWrapper class in a Mozilla-specific way. See also
  //  <https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Inheritance>
  //  (retrieved 2009-02-01).
  __proto__: DataSourceWrapper.prototype,

  // --- Overridden DataSourceWrapper methods and properties ---

  /**
   * Note: These strings are converted to actual RDF resources by the base class
   *  as soon as this data source is constructed, so GetResource must not be
   *  called. See the DataSourceWrapper documentation for details.
   */
  resources: {
    // Subjects and objects
    root:   "urn:root",
    // Custom predicates
    title:           "http://maf.mozdev.org/metadata/rdf#title",
    originalUrl:     "http://maf.mozdev.org/metadata/rdf#originalurl",
    archiveTime:     "http://maf.mozdev.org/metadata/rdf#archivetime",
    indexFileName:   "http://maf.mozdev.org/metadata/rdf#indexfilename",
    charset:         "http://maf.mozdev.org/metadata/rdf#charset"
  },

  // --- Public methods and properties ---

  /**
   * Getter for an RDF resource representing a predicate in the MAF namespace.
   */
  resourceForProperty: function(aPropertyName) {
    return this._rdf.GetResource(this._mafNamespacePrefix + aPropertyName);
  },

  /**
   * Prepares the data source for receiving new data that will be saved later.
   *
   * This method may not be called if the data will be loaded from a file.
   */
  init: function() {
    // Before saving the data source into an RDF/XML file, we need to add the
    //  proper XML namespace for the resources in the MAF vocabulary. Since the
    //  addNameSpace method of the nsIRDFXMLSink interface is not scriptable, we
    //  can only reach it by parsing an existing XML file into the data source.
    //  The file is generated in memory from an empty data source, then it is
    //  fed to an XML parser that drives the real data source.
    this._feedString(this._getMafNamespaceXml());
  },

  /**
   * Loads the data from the specified RDF file.
   */
  loadFromFile: function(aFile) {
    // Since in the RDF files of the MAFF format some literals are persisted as
    //  RDF resource URLs, we must use a custom RDF/XML parser to prevent the
    //  default parser from trying to resolve the literals as relative URLs.
    var fileContents = this._readEntireFile(aFile, "UTF-8");
    this._feedString(fileContents);
  },

  /**
   * Saves the data into the specified RDF file.
   */
  saveToFile: function(aFile) {
    var fileUrl = Cc["@mozilla.org/network/io-service;1"].
     getService(Ci.nsIIOService).newFileURI(aFile);
    this._wrappedObject.QueryInterface(Ci.nsIRDFRemoteDataSource).
     FlushTo(fileUrl.spec);
  },

  /**
   * Retrieve a string representing the value of the provided property, or a
   *  value that evaluates to false if the property is missing or empty.
   */
  getMafProperty: function(aPredicate) {
    // Get the target of the provided predicate, or null if missing
    var target = this._wrappedObject.
     GetTarget(this.resources.root, aPredicate, true);
    // In RDF files of MAFF archives, values are stored as resources
    return target && target.QueryInterface(Ci.nsIRDFResource).ValueUTF8;
  },

  /**
   * Set the value of the provided property.
   */
  setMafProperty: function(aPredicate, aValue) {
    // For MAFF format compatibility, store the value as an RDF resource
    var valueRes = this._rdf.GetResource(aValue);
    // Store the value as the target of the provided predicate
    this._wrappedObject.Assert(this.resources.root, aPredicate, valueRes, true);
  },

  // --- Private methods and properties ---

  /**
   * Namespace prefix for MAF resource URLs.
   */
  _mafNamespacePrefix: "http://maf.mozdev.org/metadata/rdf#",

  /**
   * Name for the MAF namespace in RDF/XML files.
   */
  _mafNamespaceName: "MAF",

  /**
   * Returns a string with the contents of the provided nsIFile, read using the
   *  specified encoding. An exception will be raised if any character in the
   *  file is not encoded properly.
   */
  _readEntireFile: function(aFile, aEncoding) {
    // Create and initialize an input stream to read from the provided file
    var inputStream = Cc["@mozilla.org/network/file-input-stream;1"].
     createInstance(Ci.nsIFileInputStream);
    inputStream.init(aFile, -1, 0, 0);
    try {
      // Create and initialize a converter that will raise an exception if any
      //  portion of the file is not valid according to the specified encoding
      var convInputStream = Cc["@mozilla.org/intl/converter-input-stream;1"].
       createInstance(Ci.nsIConverterInputStream);
      convInputStream.init(inputStream, aEncoding, 0, 0);
      try {
        // Read as much of the file as possible in one go. According to the
        //  converter input stream interface, readString may return less bytes
        //  than expected, and must be called until it returns 0 to signify the
        //  end of the file. This loop is also required to properly raise an
        //  exception if the file is not valid according to the encoding, as the
        //  first call will only return the portion of the file that precedes
        //  the faulty character.
        var entireContents = "";
        var readContentsObject = {};
        while (convInputStream.readString(0xFFFFFFFF, readContentsObject)) {
          entireContents += readContentsObject.value;
        }
        // Return the entire contents to the caller
        return entireContents;
      } finally {
        // Close the converter stream before returning or in case of exception
        convInputStream.close();
      }
    } finally {
      // Close the underlying stream. This instruction has no effect if the
      //  converter stream has been already closed successfully.
      inputStream.close();
    }
  },

  /**
   * Parse the provided RDF/XML string and feed the results to this data source.
   *
   * Relative RDF resource URLs in the provided XML string are not resolved, and
   * the declared XML namespaces are propagated to the data source.
   */
  _feedString: function(aXmlContents) {
    var emptyUri = Cc["@mozilla.org/network/io-service;1"].
     getService(Ci.nsIIOService).newURI("urn:none", null, null);
    var rdfXmlParser = Cc["@mozilla.org/rdf/xml-parser;1"].
     createInstance(Ci.nsIRDFXMLParser);
    rdfXmlParser.parseString(this._wrappedObject, emptyUri, aXmlContents);
  },

  /**
   * Returns an RDF/XML string representing an empty data source with the proper
   *  MAF XML namespace declarations.
   */
  _getMafNamespaceXml: function() {
    // Create an RDF/XML serializer for an empty data source
    var emptyDataSource =
     Cc["@mozilla.org/rdf/datasource;1?name=xml-datasource"].
     createInstance(Ci.nsIRDFDataSource);
    var serializer = Cc["@mozilla.org/rdf/xml-serializer;1"].
     createInstance(Ci.nsIRDFXMLSerializer);
    serializer.init(emptyDataSource);
    // Add the MAF namespace to the serializer
    var mafNamespaceAtom = Cc["@mozilla.org/atom-service;1"].
     getService(Ci.nsIAtomService).getAtom(this._mafNamespaceName);
    serializer.addNameSpace(mafNamespaceAtom, this._mafNamespacePrefix);
    // Run the serializer using an output stream implemented in JavaScript
    var mafNamespaceXml = "";
    serializer.QueryInterface(Ci.nsIRDFXMLSource).Serialize({
      write: function(aBuf, aCount) {
        mafNamespaceXml += aBuf;
        return aCount;
      }
    });
    // Return the generated string
    return mafNamespaceXml;
  }
}

/* expose variables to the global scope */
window.MaffDataSource = MaffDataSource;

})();