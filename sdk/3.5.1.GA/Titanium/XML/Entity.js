function Entity(properties) {
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
	this.apiName = 'Titanium.XML.Entity';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.notationName = properties.notationName || undefined;
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
Entity.prototype.addEventListener = function () {
};
Entity.prototype.appendChild = function () {
	return {};
};
Entity.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Entity.prototype.cloneNode = function () {
	return {};
};
Entity.prototype.fireEvent = function () {
};
Entity.prototype.getApiName = function () {
	return this.apiName;
};
Entity.prototype.getAttributes = function () {
	return this.attributes;
};
Entity.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Entity.prototype.getChildNodes = function () {
	return this.childNodes;
};
Entity.prototype.getFirstChild = function () {
	return this.firstChild;
};
Entity.prototype.getLastChild = function () {
	return this.lastChild;
};
Entity.prototype.getLocalName = function () {
	return this.localName;
};
Entity.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Entity.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Entity.prototype.getNodeName = function () {
	return this.nodeName;
};
Entity.prototype.getNodeType = function () {
	return this.nodeType;
};
Entity.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Entity.prototype.getNotationName = function () {
	return this.notationName;
};
Entity.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Entity.prototype.getParentNode = function () {
	return this.parentNode;
};
Entity.prototype.getPrefix = function () {
	return this.prefix;
};
Entity.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Entity.prototype.getPublicId = function () {
	return this.publicId;
};
Entity.prototype.getSystemId = function () {
	return this.systemId;
};
Entity.prototype.getText = function () {
	return this.text;
};
Entity.prototype.getTextContent = function () {
	return this.textContent;
};
Entity.prototype.hasAttributes = function () {
	return true;
};
Entity.prototype.hasChildNodes = function () {
	return true;
};
Entity.prototype.insertBefore = function () {
	return {};
};
Entity.prototype.isSupported = function () {
	return true;
};
Entity.prototype.normalize = function () {
};
Entity.prototype.removeChild = function () {
	return {};
};
Entity.prototype.removeEventListener = function () {
};
Entity.prototype.replaceChild = function () {
	return {};
};
Entity.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Entity.prototype.setLocalName = function (property) {
	this.localName = property;
};
Entity.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Entity.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new Entity(properties);
};