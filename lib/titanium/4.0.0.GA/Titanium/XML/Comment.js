function Comment(properties) {
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
	this.apiName = 'Ti.XML.Comment';
	this.attributes = properties.attributes || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.childNodes = properties.childNodes || {};
	this.data = properties.data || '';
	this.firstChild = properties.firstChild || {};
	this.lastChild = properties.lastChild || {};
	this.length = properties.length || 0;
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
		throw new Error('Ti.XML.Comment.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || '';
	return this;
}
Comment.prototype.addEventListener = function () {
};
Comment.prototype.appendChild = function () {
	return {};
};
Comment.prototype.appendData = function () {
};
Comment.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Comment.prototype.cloneNode = function () {
	return {};
};
Comment.prototype.deleteData = function () {
};
Comment.prototype.fireEvent = function () {
};
Comment.prototype.getApiName = function () {
	return '';
};
Comment.prototype.getAttributes = function () {
	return {};
};
Comment.prototype.getBubbleParent = function () {
	return true;
};
Comment.prototype.getChildNodes = function () {
	return {};
};
Comment.prototype.getData = function () {
	return '';
};
Comment.prototype.getFirstChild = function () {
	return {};
};
Comment.prototype.getLastChild = function () {
	return {};
};
Comment.prototype.getLength = function () {
	return 0;
};
Comment.prototype.getLifecycleContainer = function () {
	return {};
};
Comment.prototype.getLocalName = function () {
	return '';
};
Comment.prototype.getNamespaceURI = function () {
	return '';
};
Comment.prototype.getNextSibling = function () {
	return {};
};
Comment.prototype.getNodeName = function () {
	return '';
};
Comment.prototype.getNodeType = function () {
	return 0;
};
Comment.prototype.getNodeValue = function () {
	return '';
};
Comment.prototype.getOwnerDocument = function () {
	return {};
};
Comment.prototype.getParentNode = function () {
	return {};
};
Comment.prototype.getPrefix = function () {
	return '';
};
Comment.prototype.getPreviousSibling = function () {
	return {};
};
Comment.prototype.getText = function () {
	throw new Error('Ti.XML.Comment.getText was deprecated, since 2.0.0');
};
Comment.prototype.getTextContent = function () {
	return '';
};
Comment.prototype.hasAttributes = function () {
	return true;
};
Comment.prototype.hasChildNodes = function () {
	return true;
};
Comment.prototype.insertBefore = function () {
	return {};
};
Comment.prototype.insertData = function () {
};
Comment.prototype.isSupported = function () {
	return true;
};
Comment.prototype.normalize = function () {
};
Comment.prototype.removeChild = function () {
	return {};
};
Comment.prototype.removeEventListener = function () {
};
Comment.prototype.replaceChild = function () {
	return {};
};
Comment.prototype.replaceData = function () {
};
Comment.prototype.setBubbleParent = function () {
};
Comment.prototype.setData = function () {
};
Comment.prototype.setLifecycleContainer = function () {
};
Comment.prototype.setLocalName = function () {
};
Comment.prototype.setNodeValue = function () {
};
Comment.prototype.setPrefix = function () {
};
Comment.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new Comment(properties);
};