function Document(properties) {
	properties = properties || {};
	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Titanium.XML.Document';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.doctype = properties.doctype || undefined;
	this.documentElement = properties.documentElement || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.implementation = properties.implementation || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;
	return this;
}
Document.prototype.addEventListener = function () {
};
Document.prototype.appendChild = function () {
	return {};
};
Document.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Document.prototype.cloneNode = function () {
	return {};
};
Document.prototype.createAttribute = function (params) {
	var Attribute = require('./Document/Attribute');
	return Attribute(params);
};
Document.prototype.createAttributeNS = function (params) {
	var AttributeNS = require('./Document/AttributeNS');
	return AttributeNS(params);
};
Document.prototype.createCDATASection = function (params) {
	var CDATASection = require('./Document/CDATASection');
	return CDATASection(params);
};
Document.prototype.createComment = function (params) {
	var Comment = require('./Document/Comment');
	return Comment(params);
};
Document.prototype.createDocumentFragment = function (params) {
	var DocumentFragment = require('./Document/DocumentFragment');
	return DocumentFragment(params);
};
Document.prototype.createElement = function (params) {
	var Element = require('./Document/Element');
	return Element(params);
};
Document.prototype.createElementNS = function (params) {
	var ElementNS = require('./Document/ElementNS');
	return ElementNS(params);
};
Document.prototype.createEntityReference = function (params) {
	var EntityReference = require('./Document/EntityReference');
	return EntityReference(params);
};
Document.prototype.createProcessingInstruction = function (params) {
	var ProcessingInstruction = require('./Document/ProcessingInstruction');
	return ProcessingInstruction(params);
};
Document.prototype.createTextNode = function (params) {
	var TextNode = require('./Document/TextNode');
	return TextNode(params);
};
Document.prototype.fireEvent = function () {
};
Document.prototype.getApiName = function () {
	return this.apiName;
};
Document.prototype.getAttributes = function () {
	return this.attributes;
};
Document.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Document.prototype.getChildNodes = function () {
	return this.childNodes;
};
Document.prototype.getDoctype = function () {
	return this.doctype;
};
Document.prototype.getDocumentElement = function () {
	return this.documentElement;
};
Document.prototype.getElementById = function () {
	return {};
};
Document.prototype.getElementsByTagName = function () {
	return {};
};
Document.prototype.getElementsByTagNameNS = function () {
	return {};
};
Document.prototype.getFirstChild = function () {
	return this.firstChild;
};
Document.prototype.getImplementation = function () {
	return this.implementation;
};
Document.prototype.getLastChild = function () {
	return this.lastChild;
};
Document.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Document.prototype.getLocalName = function () {
	return this.localName;
};
Document.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Document.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Document.prototype.getNodeName = function () {
	return this.nodeName;
};
Document.prototype.getNodeType = function () {
	return this.nodeType;
};
Document.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Document.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Document.prototype.getParentNode = function () {
	return this.parentNode;
};
Document.prototype.getPrefix = function () {
	return this.prefix;
};
Document.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Document.prototype.getText = function () {
	return this.text;
};
Document.prototype.getTextContent = function () {
	return this.textContent;
};
Document.prototype.hasAttributes = function () {
	return true;
};
Document.prototype.hasChildNodes = function () {
	return true;
};
Document.prototype.importNode = function () {
	return {};
};
Document.prototype.insertBefore = function () {
	return {};
};
Document.prototype.isSupported = function () {
	return true;
};
Document.prototype.normalize = function () {
};
Document.prototype.removeChild = function () {
	return {};
};
Document.prototype.removeEventListener = function () {
};
Document.prototype.replaceChild = function () {
	return {};
};
Document.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Document.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Document.prototype.setLocalName = function (property) {
	this.localName = property;
};
Document.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Document.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new Document(properties);
};