function CharacterData(properties) {
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
	this.apiName = 'Ti.XML.CharacterData';
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
		throw new Error('Ti.XML.CharacterData.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || '';
	return this;
}
CharacterData.prototype.addEventListener = function () {
};
CharacterData.prototype.appendChild = function () {
	return {};
};
CharacterData.prototype.appendData = function () {
};
CharacterData.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CharacterData.prototype.cloneNode = function () {
	return {};
};
CharacterData.prototype.deleteData = function () {
};
CharacterData.prototype.fireEvent = function () {
};
CharacterData.prototype.getApiName = function () {
	return '';
};
CharacterData.prototype.getAttributes = function () {
	return {};
};
CharacterData.prototype.getBubbleParent = function () {
	return true;
};
CharacterData.prototype.getChildNodes = function () {
	return {};
};
CharacterData.prototype.getData = function () {
	return '';
};
CharacterData.prototype.getFirstChild = function () {
	return {};
};
CharacterData.prototype.getLastChild = function () {
	return {};
};
CharacterData.prototype.getLength = function () {
	return 0;
};
CharacterData.prototype.getLifecycleContainer = function () {
	return {};
};
CharacterData.prototype.getLocalName = function () {
	return '';
};
CharacterData.prototype.getNamespaceURI = function () {
	return '';
};
CharacterData.prototype.getNextSibling = function () {
	return {};
};
CharacterData.prototype.getNodeName = function () {
	return '';
};
CharacterData.prototype.getNodeType = function () {
	return 0;
};
CharacterData.prototype.getNodeValue = function () {
	return '';
};
CharacterData.prototype.getOwnerDocument = function () {
	return {};
};
CharacterData.prototype.getParentNode = function () {
	return {};
};
CharacterData.prototype.getPrefix = function () {
	return '';
};
CharacterData.prototype.getPreviousSibling = function () {
	return {};
};
CharacterData.prototype.getText = function () {
	throw new Error('Ti.XML.CharacterData.getText was deprecated, since 2.0.0');
};
CharacterData.prototype.getTextContent = function () {
	return '';
};
CharacterData.prototype.hasAttributes = function () {
	return true;
};
CharacterData.prototype.hasChildNodes = function () {
	return true;
};
CharacterData.prototype.insertBefore = function () {
	return {};
};
CharacterData.prototype.insertData = function () {
};
CharacterData.prototype.isSupported = function () {
	return true;
};
CharacterData.prototype.normalize = function () {
};
CharacterData.prototype.removeChild = function () {
	return {};
};
CharacterData.prototype.removeEventListener = function () {
};
CharacterData.prototype.replaceChild = function () {
	return {};
};
CharacterData.prototype.replaceData = function () {
};
CharacterData.prototype.setBubbleParent = function () {
};
CharacterData.prototype.setData = function () {
};
CharacterData.prototype.setLifecycleContainer = function () {
};
CharacterData.prototype.setLocalName = function () {
};
CharacterData.prototype.setNodeValue = function () {
};
CharacterData.prototype.setPrefix = function () {
};
CharacterData.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CharacterData(properties);
};