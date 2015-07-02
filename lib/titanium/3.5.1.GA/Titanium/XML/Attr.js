function Attr(properties) {
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
	this.apiName = 'Titanium.XML.Attr';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.name = properties.name || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.ownerElement = properties.ownerElement || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.specified = properties.specified || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;
	this.value = properties.value || undefined;
	return this;
}
Attr.prototype.addEventListener = function () {
};
Attr.prototype.appendChild = function () {
	return {};
};
Attr.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Attr.prototype.cloneNode = function () {
	return {};
};
Attr.prototype.fireEvent = function () {
};
Attr.prototype.getApiName = function () {
	return this.apiName;
};
Attr.prototype.getAttributes = function () {
	return this.attributes;
};
Attr.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Attr.prototype.getChildNodes = function () {
	return this.childNodes;
};
Attr.prototype.getFirstChild = function () {
	return this.firstChild;
};
Attr.prototype.getLastChild = function () {
	return this.lastChild;
};
Attr.prototype.getLocalName = function () {
	return this.localName;
};
Attr.prototype.getName = function () {
	return this.name;
};
Attr.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Attr.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Attr.prototype.getNodeName = function () {
	return this.nodeName;
};
Attr.prototype.getNodeType = function () {
	return this.nodeType;
};
Attr.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Attr.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Attr.prototype.getOwnerElement = function () {
	return this.ownerElement;
};
Attr.prototype.getParentNode = function () {
	return this.parentNode;
};
Attr.prototype.getPrefix = function () {
	return this.prefix;
};
Attr.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Attr.prototype.getSpecified = function () {
	return this.specified;
};
Attr.prototype.getText = function () {
	return this.text;
};
Attr.prototype.getTextContent = function () {
	return this.textContent;
};
Attr.prototype.getValue = function () {
	return this.value;
};
Attr.prototype.hasAttributes = function () {
	return true;
};
Attr.prototype.hasChildNodes = function () {
	return true;
};
Attr.prototype.insertBefore = function () {
	return {};
};
Attr.prototype.isSupported = function () {
	return true;
};
Attr.prototype.normalize = function () {
};
Attr.prototype.removeChild = function () {
	return {};
};
Attr.prototype.removeEventListener = function () {
};
Attr.prototype.replaceChild = function () {
	return {};
};
Attr.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Attr.prototype.setLocalName = function (property) {
	this.localName = property;
};
Attr.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Attr.prototype.setPrefix = function (property) {
	this.prefix = property;
};
Attr.prototype.setValue = function (property) {
	this.value = property;
};
module.exports = function (properties) {
	return new Attr(properties);
};