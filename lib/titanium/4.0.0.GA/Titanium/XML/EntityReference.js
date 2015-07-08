function EntityReference(properties) {
	properties = properties || {};
	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || 0;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || 0;
	this.COMMENT_NODE = properties.COMMENT_NODE || 0;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || 0;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || 0;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || 0;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || 0;
	this.ENTITY_NODE = properties.ENTITY_NODE || 0;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || 0;
	this.NOTATION_NODE = properties.NOTATION_NODE || 0;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || 0;
	this.TEXT_NODE = properties.TEXT_NODE || 0;
	this.apiName = 'Ti.XML.EntityReference';
	this.attributes = properties.attributes || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.childNodes = properties.childNodes || {};
	this.firstChild = properties.firstChild || {};
	this.lastChild = properties.lastChild || {};
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.localName = properties.localName || '';
	this.namespaceURI = properties.namespaceURI || '';
	this.nextSibling = properties.nextSibling || {};
	this.nodeName = properties.nodeName || '';
	this.nodeType = properties.nodeType || 0;
	this.nodeValue = properties.nodeValue || '';
	this.ownerDocument = properties.ownerDocument || {};
	this.parentNode = properties.parentNode || {};
	this.prefix = properties.prefix || '';
	this.previousSibling = properties.previousSibling || {};
	if (properties.text) {
		throw new Error('Ti.XML.EntityReference.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || '';
	return this;
}
EntityReference.prototype.addEventListener = function () {
};
EntityReference.prototype.appendChild = function () {
	return {};
};
EntityReference.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
EntityReference.prototype.cloneNode = function () {
	return {};
};
EntityReference.prototype.fireEvent = function () {
};
EntityReference.prototype.getApiName = function () {
	return '';
};
EntityReference.prototype.getAttributes = function () {
	return {};
};
EntityReference.prototype.getBubbleParent = function () {
	return true;
};
EntityReference.prototype.getChildNodes = function () {
	return {};
};
EntityReference.prototype.getFirstChild = function () {
	return {};
};
EntityReference.prototype.getLastChild = function () {
	return {};
};
EntityReference.prototype.getLifecycleContainer = function () {
	return {};
};
EntityReference.prototype.getLocalName = function () {
	return '';
};
EntityReference.prototype.getNamespaceURI = function () {
	return '';
};
EntityReference.prototype.getNextSibling = function () {
	return {};
};
EntityReference.prototype.getNodeName = function () {
	return '';
};
EntityReference.prototype.getNodeType = function () {
	return 0;
};
EntityReference.prototype.getNodeValue = function () {
	return '';
};
EntityReference.prototype.getOwnerDocument = function () {
	return {};
};
EntityReference.prototype.getParentNode = function () {
	return {};
};
EntityReference.prototype.getPrefix = function () {
	return '';
};
EntityReference.prototype.getPreviousSibling = function () {
	return {};
};
EntityReference.prototype.getText = function () {
	throw new Error('Ti.XML.EntityReference.getText was deprecated, since 2.0.0');
};
EntityReference.prototype.getTextContent = function () {
	return '';
};
EntityReference.prototype.hasAttributes = function () {
	return true;
};
EntityReference.prototype.hasChildNodes = function () {
	return true;
};
EntityReference.prototype.insertBefore = function () {
	return {};
};
EntityReference.prototype.isSupported = function () {
	return true;
};
EntityReference.prototype.normalize = function () {
};
EntityReference.prototype.removeChild = function () {
	return {};
};
EntityReference.prototype.removeEventListener = function () {
};
EntityReference.prototype.replaceChild = function () {
	return {};
};
EntityReference.prototype.setBubbleParent = function () {
};
EntityReference.prototype.setLifecycleContainer = function () {
};
EntityReference.prototype.setLocalName = function () {
};
EntityReference.prototype.setNodeValue = function () {
};
EntityReference.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new EntityReference(properties);
};