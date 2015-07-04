function Element(properties) {
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
	this.apiName = 'Ti.XML.Element';
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
	this.tagName = properties.tagName || undefined;
	if (properties.text) {
		throw new Error('Ti.XML.Element.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
	return this;
}
Element.prototype.addEventListener = function () {
};
Element.prototype.appendChild = function () {
	return {};
};
Element.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Element.prototype.cloneNode = function () {
	return {};
};
Element.prototype.fireEvent = function () {
};
Element.prototype.getApiName = function () {
	return '';
};
Element.prototype.getAttribute = function () {
	return '';
};
Element.prototype.getAttributeNS = function () {
	return '';
};
Element.prototype.getAttributeNode = function () {
	return {};
};
Element.prototype.getAttributeNodeNS = function () {
	return {};
};
Element.prototype.getAttributes = function () {
	return {};
};
Element.prototype.getBubbleParent = function () {
	return true;
};
Element.prototype.getChildNodes = function () {
	return {};
};
Element.prototype.getElementsByTagName = function () {
	return {};
};
Element.prototype.getElementsByTagNameNS = function () {
	return {};
};
Element.prototype.getFirstChild = function () {
	return {};
};
Element.prototype.getLastChild = function () {
	return {};
};
Element.prototype.getLocalName = function () {
	return '';
};
Element.prototype.getNamespaceURI = function () {
	return '';
};
Element.prototype.getNextSibling = function () {
	return {};
};
Element.prototype.getNodeName = function () {
	return '';
};
Element.prototype.getNodeType = function () {
	return 0;
};
Element.prototype.getNodeValue = function () {
	return '';
};
Element.prototype.getOwnerDocument = function () {
	return {};
};
Element.prototype.getParentNode = function () {
	return {};
};
Element.prototype.getPrefix = function () {
	return '';
};
Element.prototype.getPreviousSibling = function () {
	return {};
};
Element.prototype.getTagName = function () {
	return '';
};
Element.prototype.getText = function () {
	throw new Error('Ti.XML.Element.getText was deprecated, since 2.0.0');
};
Element.prototype.getTextContent = function () {
	return '';
};
Element.prototype.hasAttribute = function () {
	return true;
};
Element.prototype.hasAttributeNS = function () {
	return true;
};
Element.prototype.hasAttributes = function () {
	return true;
};
Element.prototype.hasChildNodes = function () {
	return true;
};
Element.prototype.insertBefore = function () {
	return {};
};
Element.prototype.isSupported = function () {
	return true;
};
Element.prototype.normalize = function () {
};
Element.prototype.removeAttribute = function () {
};
Element.prototype.removeAttributeNS = function () {
};
Element.prototype.removeAttributeNode = function () {
};
Element.prototype.removeChild = function () {
	return {};
};
Element.prototype.removeEventListener = function () {
};
Element.prototype.replaceChild = function () {
	return {};
};
Element.prototype.setAttribute = function () {
};
Element.prototype.setAttributeNS = function () {
};
Element.prototype.setAttributeNode = function () {
	return {};
};
Element.prototype.setAttributeNodeNS = function () {
	return {};
};
Element.prototype.setBubbleParent = function () {
};
Element.prototype.setLocalName = function () {
};
Element.prototype.setNodeValue = function () {
};
Element.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new Element(properties);
};