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
	this.apiName = 'Titanium.XML.Text';
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
	this.text = properties.text || undefined;
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
	return this.apiName;
};
Text.prototype.getAttributes = function () {
	return this.attributes;
};
Text.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Text.prototype.getChildNodes = function () {
	return this.childNodes;
};
Text.prototype.getData = function () {
	return this.data;
};
Text.prototype.getFirstChild = function () {
	return this.firstChild;
};
Text.prototype.getLastChild = function () {
	return this.lastChild;
};
Text.prototype.getLength = function () {
	return this.length;
};
Text.prototype.getLocalName = function () {
	return this.localName;
};
Text.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Text.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Text.prototype.getNodeName = function () {
	return this.nodeName;
};
Text.prototype.getNodeType = function () {
	return this.nodeType;
};
Text.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Text.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Text.prototype.getParentNode = function () {
	return this.parentNode;
};
Text.prototype.getPrefix = function () {
	return this.prefix;
};
Text.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Text.prototype.getText = function () {
	return this.text;
};
Text.prototype.getTextContent = function () {
	return this.textContent;
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
Text.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Text.prototype.setData = function (property) {
	this.data = property;
};
Text.prototype.setLocalName = function (property) {
	this.localName = property;
};
Text.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Text.prototype.setPrefix = function (property) {
	this.prefix = property;
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