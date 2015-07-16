function CDATASection(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.CDATASection';
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
		throw new Error('Ti.XML.CDATASection.text was deprecated, since 2.0.0');
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
CDATASection.prototype.addEventListener = function () {
};
CDATASection.prototype.removeEventListener = function () {
};
CDATASection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CDATASection.prototype.fireEvent = function () {
};
CDATASection.prototype.insertBefore = function () {
	return {};
};
CDATASection.prototype.replaceChild = function () {
	return {};
};
CDATASection.prototype.removeChild = function () {
	return {};
};
CDATASection.prototype.appendChild = function () {
	return {};
};
CDATASection.prototype.hasChildNodes = function () {
	return true;
};
CDATASection.prototype.cloneNode = function () {
	return {};
};
CDATASection.prototype.normalize = function () {
};
CDATASection.prototype.isSupported = function () {
	return true;
};
CDATASection.prototype.hasAttributes = function () {
	return true;
};
CDATASection.prototype.substringData = function () {
	return '';
};
CDATASection.prototype.appendData = function () {
};
CDATASection.prototype.insertData = function () {
};
CDATASection.prototype.deleteData = function () {
};
CDATASection.prototype.replaceData = function () {
};
CDATASection.prototype.splitText = function () {
	return {};
};
CDATASection.prototype.getBubbleParent = function () {
	return true;
};
CDATASection.prototype.setBubbleParent = function () {
};
CDATASection.prototype.getApiName = function () {
	return '';
};
CDATASection.prototype.getLifecycleContainer = function () {
	return {};
};
CDATASection.prototype.setLifecycleContainer = function () {
};
CDATASection.prototype.getTextContent = function () {
	return '';
};
CDATASection.prototype.getText = function () {
	throw new Error('Ti.XML.CDATASection.getText was deprecated, since 2.0.0');
};
CDATASection.prototype.getNodeValue = function () {
	return '';
};
CDATASection.prototype.setNodeValue = function () {
};
CDATASection.prototype.getPrefix = function () {
	return '';
};
CDATASection.prototype.setPrefix = function () {
};
CDATASection.prototype.getNodeName = function () {
	return '';
};
CDATASection.prototype.getNodeType = function () {
	return 0;
};
CDATASection.prototype.getParentNode = function () {
	return {};
};
CDATASection.prototype.getChildNodes = function () {
	return {};
};
CDATASection.prototype.getFirstChild = function () {
	return {};
};
CDATASection.prototype.getLastChild = function () {
	return {};
};
CDATASection.prototype.getPreviousSibling = function () {
	return {};
};
CDATASection.prototype.getNextSibling = function () {
	return {};
};
CDATASection.prototype.getAttributes = function () {
	return {};
};
CDATASection.prototype.getOwnerDocument = function () {
	return {};
};
CDATASection.prototype.getNamespaceURI = function () {
	return '';
};
CDATASection.prototype.getLocalName = function () {
	return '';
};
CDATASection.prototype.setLocalName = function () {
};
CDATASection.prototype.getData = function () {
	return '';
};
CDATASection.prototype.setData = function () {
};
CDATASection.prototype.getLength = function () {
	return 0;
};
module.exports = function (properties) {
	return new CDATASection(properties);
};