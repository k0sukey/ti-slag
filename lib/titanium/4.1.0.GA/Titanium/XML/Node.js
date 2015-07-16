function Node(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.Node';
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
		throw new Error('Ti.XML.Node.text was deprecated, since 2.0.0');
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
	return this;
}
Node.prototype.addEventListener = function () {
};
Node.prototype.removeEventListener = function () {
};
Node.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Node.prototype.fireEvent = function () {
};
Node.prototype.insertBefore = function () {
	return {};
};
Node.prototype.replaceChild = function () {
	return {};
};
Node.prototype.removeChild = function () {
	return {};
};
Node.prototype.appendChild = function () {
	return {};
};
Node.prototype.hasChildNodes = function () {
	return true;
};
Node.prototype.cloneNode = function () {
	return {};
};
Node.prototype.normalize = function () {
};
Node.prototype.isSupported = function () {
	return true;
};
Node.prototype.hasAttributes = function () {
	return true;
};
Node.prototype.getBubbleParent = function () {
	return true;
};
Node.prototype.setBubbleParent = function () {
};
Node.prototype.getApiName = function () {
	return '';
};
Node.prototype.getLifecycleContainer = function () {
	return {};
};
Node.prototype.setLifecycleContainer = function () {
};
Node.prototype.getTextContent = function () {
	return '';
};
Node.prototype.getText = function () {
	throw new Error('Ti.XML.Node.getText was deprecated, since 2.0.0');
};
Node.prototype.getNodeValue = function () {
	return '';
};
Node.prototype.setNodeValue = function () {
};
Node.prototype.getPrefix = function () {
	return '';
};
Node.prototype.setPrefix = function () {
};
Node.prototype.getNodeName = function () {
	return '';
};
Node.prototype.getNodeType = function () {
	return 0;
};
Node.prototype.getParentNode = function () {
	return {};
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
Node.prototype.getPreviousSibling = function () {
	return {};
};
Node.prototype.getNextSibling = function () {
	return {};
};
Node.prototype.getAttributes = function () {
	return {};
};
Node.prototype.getOwnerDocument = function () {
	return {};
};
Node.prototype.getNamespaceURI = function () {
	return '';
};
Node.prototype.getLocalName = function () {
	return '';
};
Node.prototype.setLocalName = function () {
};
module.exports = function (properties) {
	return new Node(properties);
};