function Attr(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.Attr';
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
		throw new Error('Ti.XML.Attr.text was deprecated, since 2.0.0');
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
	this.value = properties.value || '';
	this.name = properties.name || '';
	this.specified = properties.specified || true;
	this.ownerElement = properties.ownerElement || {};
	return this;
}
Attr.prototype.addEventListener = function () {
};
Attr.prototype.removeEventListener = function () {
};
Attr.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Attr.prototype.fireEvent = function () {
};
Attr.prototype.insertBefore = function () {
	return {};
};
Attr.prototype.replaceChild = function () {
	return {};
};
Attr.prototype.removeChild = function () {
	return {};
};
Attr.prototype.appendChild = function () {
	return {};
};
Attr.prototype.hasChildNodes = function () {
	return true;
};
Attr.prototype.cloneNode = function () {
	return {};
};
Attr.prototype.normalize = function () {
};
Attr.prototype.isSupported = function () {
	return true;
};
Attr.prototype.hasAttributes = function () {
	return true;
};
Attr.prototype.getBubbleParent = function () {
	return true;
};
Attr.prototype.setBubbleParent = function () {
};
Attr.prototype.getApiName = function () {
	return '';
};
Attr.prototype.getLifecycleContainer = function () {
	return {};
};
Attr.prototype.setLifecycleContainer = function () {
};
Attr.prototype.getTextContent = function () {
	return '';
};
Attr.prototype.getText = function () {
	throw new Error('Ti.XML.Attr.getText was deprecated, since 2.0.0');
};
Attr.prototype.getNodeValue = function () {
	return '';
};
Attr.prototype.setNodeValue = function () {
};
Attr.prototype.getPrefix = function () {
	return '';
};
Attr.prototype.setPrefix = function () {
};
Attr.prototype.getNodeName = function () {
	return '';
};
Attr.prototype.getNodeType = function () {
	return 0;
};
Attr.prototype.getParentNode = function () {
	return {};
};
Attr.prototype.getChildNodes = function () {
	return {};
};
Attr.prototype.getFirstChild = function () {
	return {};
};
Attr.prototype.getLastChild = function () {
	return {};
};
Attr.prototype.getPreviousSibling = function () {
	return {};
};
Attr.prototype.getNextSibling = function () {
	return {};
};
Attr.prototype.getAttributes = function () {
	return {};
};
Attr.prototype.getOwnerDocument = function () {
	return {};
};
Attr.prototype.getNamespaceURI = function () {
	return '';
};
Attr.prototype.getLocalName = function () {
	return '';
};
Attr.prototype.setLocalName = function () {
};
Attr.prototype.getValue = function () {
	return '';
};
Attr.prototype.setValue = function () {
};
Attr.prototype.getName = function () {
	return '';
};
Attr.prototype.getSpecified = function () {
	return true;
};
Attr.prototype.getOwnerElement = function () {
	return {};
};
module.exports = function (properties) {
	return new Attr(properties);
};