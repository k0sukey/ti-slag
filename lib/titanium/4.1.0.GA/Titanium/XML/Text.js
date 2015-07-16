function Text(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.Text';
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
		throw new Error('Ti.XML.Text.text was deprecated, since 2.0.0');
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
	this.data = properties.data || '';
	this.length = properties.length || 0;
	return this;
}
Text.prototype.addEventListener = function () {
};
Text.prototype.removeEventListener = function () {
};
Text.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Text.prototype.fireEvent = function () {
};
Text.prototype.insertBefore = function () {
	return {};
};
Text.prototype.replaceChild = function () {
	return {};
};
Text.prototype.removeChild = function () {
	return {};
};
Text.prototype.appendChild = function () {
	return {};
};
Text.prototype.hasChildNodes = function () {
	return true;
};
Text.prototype.cloneNode = function () {
	return {};
};
Text.prototype.normalize = function () {
};
Text.prototype.isSupported = function () {
	return true;
};
Text.prototype.hasAttributes = function () {
	return true;
};
Text.prototype.substringData = function () {
	return '';
};
Text.prototype.appendData = function () {
};
Text.prototype.insertData = function () {
};
Text.prototype.deleteData = function () {
};
Text.prototype.replaceData = function () {
};
Text.prototype.splitText = function () {
	return {};
};
Text.prototype.getBubbleParent = function () {
	return true;
};
Text.prototype.setBubbleParent = function () {
};
Text.prototype.getApiName = function () {
	return '';
};
Text.prototype.getLifecycleContainer = function () {
	return {};
};
Text.prototype.setLifecycleContainer = function () {
};
Text.prototype.getTextContent = function () {
	return '';
};
Text.prototype.getText = function () {
	throw new Error('Ti.XML.Text.getText was deprecated, since 2.0.0');
};
Text.prototype.getNodeValue = function () {
	return '';
};
Text.prototype.setNodeValue = function () {
};
Text.prototype.getPrefix = function () {
	return '';
};
Text.prototype.setPrefix = function () {
};
Text.prototype.getNodeName = function () {
	return '';
};
Text.prototype.getNodeType = function () {
	return 0;
};
Text.prototype.getParentNode = function () {
	return {};
};
Text.prototype.getChildNodes = function () {
	return {};
};
Text.prototype.getFirstChild = function () {
	return {};
};
Text.prototype.getLastChild = function () {
	return {};
};
Text.prototype.getPreviousSibling = function () {
	return {};
};
Text.prototype.getNextSibling = function () {
	return {};
};
Text.prototype.getAttributes = function () {
	return {};
};
Text.prototype.getOwnerDocument = function () {
	return {};
};
Text.prototype.getNamespaceURI = function () {
	return '';
};
Text.prototype.getLocalName = function () {
	return '';
};
Text.prototype.setLocalName = function () {
};
Text.prototype.getData = function () {
	return '';
};
Text.prototype.setData = function () {
};
Text.prototype.getLength = function () {
	return 0;
};
module.exports = function (properties) {
	return new Text(properties);
};