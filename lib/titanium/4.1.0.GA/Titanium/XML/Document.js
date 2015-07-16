function Document(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.Document';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.ELEMENT_NODE = properties.ELEMENT_NODE || 0;
	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || 0;
	this.TEXT_NODE = properties.TEXT_NODE || 0;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || 0;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || 0;
	this.ENTITY_NODE = properties.ENTITY_NODE || 0;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || 0;
	this.COMMENT_NODE = properties.COMMENT_NODE || 0;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || 0;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || 0;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || 0;
	this.NOTATION_NODE = properties.NOTATION_NODE || 0;
	this.textContent = properties.textContent || '';
	if (properties.text) {
		throw new Error('Ti.XML.Document.text was deprecated, since 2.0.0');
	}
	this.nodeValue = properties.nodeValue || '';
	this.prefix = properties.prefix || '';
	this.nodeName = properties.nodeName || '';
	this.nodeType = properties.nodeType || 0;
	this.parentNode = properties.parentNode || {};
	this.childNodes = properties.childNodes || {};
	this.firstChild = properties.firstChild || {};
	this.lastChild = properties.lastChild || {};
	this.previousSibling = properties.previousSibling || {};
	this.nextSibling = properties.nextSibling || {};
	this.attributes = properties.attributes || {};
	this.ownerDocument = properties.ownerDocument || {};
	this.namespaceURI = properties.namespaceURI || '';
	this.localName = properties.localName || '';
	this.doctype = properties.doctype || {};
	this.implementation = properties.implementation || {};
	this.documentElement = properties.documentElement || {};
	return this;
}
Document.prototype.addEventListener = function () {
};
Document.prototype.removeEventListener = function () {
};
Document.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Document.prototype.fireEvent = function () {
};
Document.prototype.insertBefore = function () {
	return {};
};
Document.prototype.replaceChild = function () {
	return {};
};
Document.prototype.removeChild = function () {
	return {};
};
Document.prototype.appendChild = function () {
	return {};
};
Document.prototype.hasChildNodes = function () {
	return true;
};
Document.prototype.cloneNode = function () {
	return {};
};
Document.prototype.normalize = function () {
};
Document.prototype.isSupported = function () {
	return true;
};
Document.prototype.hasAttributes = function () {
	return true;
};
Document.prototype.createElement = function (params) {
	var Element = require('./Document/Element');
	return Element(params);
};
Document.prototype.createDocumentFragment = function (params) {
	var DocumentFragment = require('./Document/DocumentFragment');
	return DocumentFragment(params);
};
Document.prototype.createTextNode = function (params) {
	var TextNode = require('./Document/TextNode');
	return TextNode(params);
};
Document.prototype.createComment = function (params) {
	var Comment = require('./Document/Comment');
	return Comment(params);
};
Document.prototype.createCDATASection = function (params) {
	var CDATASection = require('./Document/CDATASection');
	return CDATASection(params);
};
Document.prototype.createProcessingInstruction = function (params) {
	var ProcessingInstruction = require('./Document/ProcessingInstruction');
	return ProcessingInstruction(params);
};
Document.prototype.createAttribute = function (params) {
	var Attribute = require('./Document/Attribute');
	return Attribute(params);
};
Document.prototype.createEntityReference = function (params) {
	var EntityReference = require('./Document/EntityReference');
	return EntityReference(params);
};
Document.prototype.getElementsByTagName = function () {
	return {};
};
Document.prototype.importNode = function () {
	return {};
};
Document.prototype.createElementNS = function (params) {
	var ElementNS = require('./Document/ElementNS');
	return ElementNS(params);
};
Document.prototype.createAttributeNS = function (params) {
	var AttributeNS = require('./Document/AttributeNS');
	return AttributeNS(params);
};
Document.prototype.getElementsByTagNameNS = function () {
	return {};
};
Document.prototype.getElementById = function () {
	return {};
};
Document.prototype.getBubbleParent = function () {
	return true;
};
Document.prototype.setBubbleParent = function () {
};
Document.prototype.getApiName = function () {
	return '';
};
Document.prototype.getLifecycleContainer = function () {
	return {};
};
Document.prototype.setLifecycleContainer = function () {
};
Document.prototype.getTextContent = function () {
	return '';
};
Document.prototype.getText = function () {
	throw new Error('Ti.XML.Document.getText was deprecated, since 2.0.0');
};
Document.prototype.getNodeValue = function () {
	return '';
};
Document.prototype.setNodeValue = function () {
};
Document.prototype.getPrefix = function () {
	return '';
};
Document.prototype.setPrefix = function () {
};
Document.prototype.getNodeName = function () {
	return '';
};
Document.prototype.getNodeType = function () {
	return 0;
};
Document.prototype.getParentNode = function () {
	return {};
};
Document.prototype.getChildNodes = function () {
	return {};
};
Document.prototype.getFirstChild = function () {
	return {};
};
Document.prototype.getLastChild = function () {
	return {};
};
Document.prototype.getPreviousSibling = function () {
	return {};
};
Document.prototype.getNextSibling = function () {
	return {};
};
Document.prototype.getAttributes = function () {
	return {};
};
Document.prototype.getOwnerDocument = function () {
	return {};
};
Document.prototype.getNamespaceURI = function () {
	return '';
};
Document.prototype.getLocalName = function () {
	return '';
};
Document.prototype.setLocalName = function () {
};
Document.prototype.getDoctype = function () {
	return {};
};
Document.prototype.getImplementation = function () {
	return {};
};
Document.prototype.getDocumentElement = function () {
	return {};
};
module.exports = function (properties) {
	return new Document(properties);
};