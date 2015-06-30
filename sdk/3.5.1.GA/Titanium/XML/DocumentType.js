function DocumentType(properties) {
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
	this.apiName = 'Titanium.XML.DocumentType';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.entities = properties.entities || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.internalSubset = properties.internalSubset || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.name = properties.name || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.notations = properties.notations || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.publicId = properties.publicId || undefined;
	this.systemId = properties.systemId || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;
	return this;
}
DocumentType.prototype.addEventListener = function () {
};
DocumentType.prototype.appendChild = function () {
	return {};
};
DocumentType.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentType.prototype.cloneNode = function () {
	return {};
};
DocumentType.prototype.fireEvent = function () {
};
DocumentType.prototype.getApiName = function () {
	return this.apiName;
};
DocumentType.prototype.getAttributes = function () {
	return this.attributes;
};
DocumentType.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DocumentType.prototype.getChildNodes = function () {
	return this.childNodes;
};
DocumentType.prototype.getEntities = function () {
	return this.entities;
};
DocumentType.prototype.getFirstChild = function () {
	return this.firstChild;
};
DocumentType.prototype.getInternalSubset = function () {
	return this.internalSubset;
};
DocumentType.prototype.getLastChild = function () {
	return this.lastChild;
};
DocumentType.prototype.getLocalName = function () {
	return this.localName;
};
DocumentType.prototype.getName = function () {
	return this.name;
};
DocumentType.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
DocumentType.prototype.getNextSibling = function () {
	return this.nextSibling;
};
DocumentType.prototype.getNodeName = function () {
	return this.nodeName;
};
DocumentType.prototype.getNodeType = function () {
	return this.nodeType;
};
DocumentType.prototype.getNodeValue = function () {
	return this.nodeValue;
};
DocumentType.prototype.getNotations = function () {
	return this.notations;
};
DocumentType.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
DocumentType.prototype.getParentNode = function () {
	return this.parentNode;
};
DocumentType.prototype.getPrefix = function () {
	return this.prefix;
};
DocumentType.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
DocumentType.prototype.getPublicId = function () {
	return this.publicId;
};
DocumentType.prototype.getSystemId = function () {
	return this.systemId;
};
DocumentType.prototype.getText = function () {
	return this.text;
};
DocumentType.prototype.getTextContent = function () {
	return this.textContent;
};
DocumentType.prototype.hasAttributes = function () {
	return true;
};
DocumentType.prototype.hasChildNodes = function () {
	return true;
};
DocumentType.prototype.insertBefore = function () {
	return {};
};
DocumentType.prototype.isSupported = function () {
	return true;
};
DocumentType.prototype.normalize = function () {
};
DocumentType.prototype.removeChild = function () {
	return {};
};
DocumentType.prototype.removeEventListener = function () {
};
DocumentType.prototype.replaceChild = function () {
	return {};
};
DocumentType.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DocumentType.prototype.setLocalName = function (property) {
	this.localName = property;
};
DocumentType.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
DocumentType.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new DocumentType(properties);
};