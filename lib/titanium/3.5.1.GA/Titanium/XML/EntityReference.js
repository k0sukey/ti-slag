function EntityReference(properties) {
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
	this.apiName = 'Ti.XML.EntityReference';
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
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	if (properties.text) {
		throw new Error('Ti.XML.EntityReference.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
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
EntityReference.prototype.setLocalName = function () {
};
EntityReference.prototype.setNodeValue = function () {
};
EntityReference.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new EntityReference(properties);
};