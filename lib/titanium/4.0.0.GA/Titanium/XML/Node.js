function Node(properties) {
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
	this.apiName = 'Ti.XML.Node';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
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
	if (properties.text) {
		throw new Error('Ti.XML.Node.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
	return this;
}
Node.prototype.addEventListener = function () {
};
Node.prototype.appendChild = function () {
	return {};
};
Node.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Node.prototype.cloneNode = function () {
	return {};
};
Node.prototype.fireEvent = function () {
};
Node.prototype.getApiName = function () {
	return '';
};
Node.prototype.getAttributes = function () {
	return {};
};
Node.prototype.getBubbleParent = function () {
	return true;
};
Node.prototype.getChildNodes = function () {
	return {};
};
Node.prototype.getFirstChild = function () {
	return {};
};
Node.prototype.getLastChild = function () {
	return {};
};
Node.prototype.getLifecycleContainer = function () {
	return {};
};
Node.prototype.getLocalName = function () {
	return '';
};
Node.prototype.getNamespaceURI = function () {
	return '';
};
Node.prototype.getNextSibling = function () {
	return {};
};
Node.prototype.getNodeName = function () {
	return '';
};
Node.prototype.getNodeType = function () {
	return 0;
};
Node.prototype.getNodeValue = function () {
	return '';
};
Node.prototype.getOwnerDocument = function () {
	return {};
};
Node.prototype.getParentNode = function () {
	return {};
};
Node.prototype.getPrefix = function () {
	return '';
};
Node.prototype.getPreviousSibling = function () {
	return {};
};
Node.prototype.getText = function () {
	throw new Error('Ti.XML.Node.getText was deprecated, since 2.0.0');
};
Node.prototype.getTextContent = function () {
	return '';
};
Node.prototype.hasAttributes = function () {
	return true;
};
Node.prototype.hasChildNodes = function () {
	return true;
};
Node.prototype.insertBefore = function () {
	return {};
};
Node.prototype.isSupported = function () {
	return true;
};
Node.prototype.normalize = function () {
};
Node.prototype.removeChild = function () {
	return {};
};
Node.prototype.removeEventListener = function () {
};
Node.prototype.replaceChild = function () {
	return {};
};
Node.prototype.setBubbleParent = function () {
};
Node.prototype.setLifecycleContainer = function () {
};
Node.prototype.setLocalName = function () {
};
Node.prototype.setNodeValue = function () {
};
Node.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new Node(properties);
};