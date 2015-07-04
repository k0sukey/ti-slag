function Comment(properties) {
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
	this.apiName = 'Ti.XML.Comment';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.data = properties.data || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.length = properties.length || undefined;
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
		throw new Error('Ti.XML.Comment.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
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