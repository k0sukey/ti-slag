function Text(properties) {
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
	this.apiName = 'Ti.XML.Text';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.data = properties.data || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.length = properties.length || undefined;
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
		throw new Error('Ti.XML.Text.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
	return this;
}
Text.prototype.addEventListener = function () {
};
Text.prototype.appendChild = function () {
	return {};
};
Text.prototype.appendData = function () {
};
Text.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Text.prototype.cloneNode = function () {
	return {};
};
Text.prototype.deleteData = function () {
};
Text.prototype.fireEvent = function () {
};
Text.prototype.getApiName = function () {
	return '';
};
Text.prototype.getAttributes = function () {
	return {};
};
Text.prototype.getBubbleParent = function () {
	return true;
};
Text.prototype.getChildNodes = function () {
	return {};
};
Text.prototype.getData = function () {
	return '';
};
Text.prototype.getFirstChild = function () {
	return {};
};
Text.prototype.getLastChild = function () {
	return {};
};
Text.prototype.getLength = function () {
	return 0;
};
Text.prototype.getLocalName = function () {
	return '';
};
Text.prototype.getNamespaceURI = function () {
	return '';
};
Text.prototype.getNextSibling = function () {
	return {};
};
Text.prototype.getNodeName = function () {
	return '';
};
Text.prototype.getNodeType = function () {
	return 0;
};
Text.prototype.getNodeValue = function () {
	return '';
};
Text.prototype.getOwnerDocument = function () {
	return {};
};
Text.prototype.getParentNode = function () {
	return {};
};
Text.prototype.getPrefix = function () {
	return '';
};
Text.prototype.getPreviousSibling = function () {
	return {};
};
Text.prototype.getText = function () {
	throw new Error('Ti.XML.Text.getText was deprecated, since 2.0.0');
};
Text.prototype.getTextContent = function () {
	return '';
};
Text.prototype.hasAttributes = function () {
	return true;
};
Text.prototype.hasChildNodes = function () {
	return true;
};
Text.prototype.insertBefore = function () {
	return {};
};
Text.prototype.insertData = function () {
};
Text.prototype.isSupported = function () {
	return true;
};
Text.prototype.normalize = function () {
};
Text.prototype.removeChild = function () {
	return {};
};
Text.prototype.removeEventListener = function () {
};
Text.prototype.replaceChild = function () {
	return {};
};
Text.prototype.replaceData = function () {
};
Text.prototype.setBubbleParent = function () {
};
Text.prototype.setData = function () {
};
Text.prototype.setLocalName = function () {
};
Text.prototype.setNodeValue = function () {
};
Text.prototype.setPrefix = function () {
};
Text.prototype.splitText = function () {
	return {};
};
Text.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new Text(properties);
};