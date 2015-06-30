function CDATASection(properties) {
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
	this.apiName = 'Titanium.XML.CDATASection';
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
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;
	return this;
}
CDATASection.prototype.addEventListener = function () {
};
CDATASection.prototype.appendChild = function () {
	return {};
};
CDATASection.prototype.appendData = function () {
};
CDATASection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CDATASection.prototype.cloneNode = function () {
	return {};
};
CDATASection.prototype.deleteData = function () {
};
CDATASection.prototype.fireEvent = function () {
};
CDATASection.prototype.getApiName = function () {
	return this.apiName;
};
CDATASection.prototype.getAttributes = function () {
	return this.attributes;
};
CDATASection.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CDATASection.prototype.getChildNodes = function () {
	return this.childNodes;
};
CDATASection.prototype.getData = function () {
	return this.data;
};
CDATASection.prototype.getFirstChild = function () {
	return this.firstChild;
};
CDATASection.prototype.getLastChild = function () {
	return this.lastChild;
};
CDATASection.prototype.getLength = function () {
	return this.length;
};
CDATASection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
CDATASection.prototype.getLocalName = function () {
	return this.localName;
};
CDATASection.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
CDATASection.prototype.getNextSibling = function () {
	return this.nextSibling;
};
CDATASection.prototype.getNodeName = function () {
	return this.nodeName;
};
CDATASection.prototype.getNodeType = function () {
	return this.nodeType;
};
CDATASection.prototype.getNodeValue = function () {
	return this.nodeValue;
};
CDATASection.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
CDATASection.prototype.getParentNode = function () {
	return this.parentNode;
};
CDATASection.prototype.getPrefix = function () {
	return this.prefix;
};
CDATASection.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
CDATASection.prototype.getText = function () {
	return this.text;
};
CDATASection.prototype.getTextContent = function () {
	return this.textContent;
};
CDATASection.prototype.hasAttributes = function () {
	return true;
};
CDATASection.prototype.hasChildNodes = function () {
	return true;
};
CDATASection.prototype.insertBefore = function () {
	return {};
};
CDATASection.prototype.insertData = function () {
};
CDATASection.prototype.isSupported = function () {
	return true;
};
CDATASection.prototype.normalize = function () {
};
CDATASection.prototype.removeChild = function () {
	return {};
};
CDATASection.prototype.removeEventListener = function () {
};
CDATASection.prototype.replaceChild = function () {
	return {};
};
CDATASection.prototype.replaceData = function () {
};
CDATASection.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CDATASection.prototype.setData = function (property) {
	this.data = property;
};
CDATASection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
CDATASection.prototype.setLocalName = function (property) {
	this.localName = property;
};
CDATASection.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
CDATASection.prototype.setPrefix = function (property) {
	this.prefix = property;
};
CDATASection.prototype.splitText = function () {
	return {};
};
CDATASection.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CDATASection(properties);
};