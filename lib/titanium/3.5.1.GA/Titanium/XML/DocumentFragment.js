function DocumentFragment(properties) {
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
	this.apiName = 'Ti.XML.DocumentFragment';
	this.attributes = properties.attributes || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.childNodes = properties.childNodes || {};
	this.firstChild = properties.firstChild || {};
	this.lastChild = properties.lastChild || {};
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
		throw new Error('Ti.XML.DocumentFragment.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || '';
	return this;
}
DocumentFragment.prototype.addEventListener = function () {
};
DocumentFragment.prototype.appendChild = function () {
	return {};
};
DocumentFragment.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentFragment.prototype.cloneNode = function () {
	return {};
};
DocumentFragment.prototype.fireEvent = function () {
};
DocumentFragment.prototype.getApiName = function () {
	return '';
};
DocumentFragment.prototype.getAttributes = function () {
	return {};
};
DocumentFragment.prototype.getBubbleParent = function () {
	return true;
};
DocumentFragment.prototype.getChildNodes = function () {
	return {};
};
DocumentFragment.prototype.getFirstChild = function () {
	return {};
};
DocumentFragment.prototype.getLastChild = function () {
	return {};
};
DocumentFragment.prototype.getLocalName = function () {
	return '';
};
DocumentFragment.prototype.getNamespaceURI = function () {
	return '';
};
DocumentFragment.prototype.getNextSibling = function () {
	return {};
};
DocumentFragment.prototype.getNodeName = function () {
	return '';
};
DocumentFragment.prototype.getNodeType = function () {
	return 0;
};
DocumentFragment.prototype.getNodeValue = function () {
	return '';
};
DocumentFragment.prototype.getOwnerDocument = function () {
	return {};
};
DocumentFragment.prototype.getParentNode = function () {
	return {};
};
DocumentFragment.prototype.getPrefix = function () {
	return '';
};
DocumentFragment.prototype.getPreviousSibling = function () {
	return {};
};
DocumentFragment.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentFragment.getText was deprecated, since 2.0.0');
};
DocumentFragment.prototype.getTextContent = function () {
	return '';
};
DocumentFragment.prototype.hasAttributes = function () {
	return true;
};
DocumentFragment.prototype.hasChildNodes = function () {
	return true;
};
DocumentFragment.prototype.insertBefore = function () {
	return {};
};
DocumentFragment.prototype.isSupported = function () {
	return true;
};
DocumentFragment.prototype.normalize = function () {
};
DocumentFragment.prototype.removeChild = function () {
	return {};
};
DocumentFragment.prototype.removeEventListener = function () {
};
DocumentFragment.prototype.replaceChild = function () {
	return {};
};
DocumentFragment.prototype.setBubbleParent = function () {
};
DocumentFragment.prototype.setLocalName = function () {
};
DocumentFragment.prototype.setNodeValue = function () {
};
DocumentFragment.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new DocumentFragment(properties);
};