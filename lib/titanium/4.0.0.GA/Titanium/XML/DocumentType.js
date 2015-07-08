function DocumentType(properties) {
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
	this.apiName = 'Ti.XML.DocumentType';
	this.attributes = properties.attributes || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.childNodes = properties.childNodes || {};
	this.entities = properties.entities || {};
	this.firstChild = properties.firstChild || {};
	this.internalSubset = properties.internalSubset || '';
	this.lastChild = properties.lastChild || {};
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.localName = properties.localName || '';
	this.name = properties.name || '';
	this.namespaceURI = properties.namespaceURI || '';
	this.nextSibling = properties.nextSibling || {};
	this.nodeName = properties.nodeName || '';
	this.nodeType = properties.nodeType || 0;
	this.nodeValue = properties.nodeValue || '';
	this.notations = properties.notations || {};
	this.ownerDocument = properties.ownerDocument || {};
	this.parentNode = properties.parentNode || {};
	this.prefix = properties.prefix || '';
	this.previousSibling = properties.previousSibling || {};
	this.publicId = properties.publicId || '';
	this.systemId = properties.systemId || '';
	if (properties.text) {
		throw new Error('Ti.XML.DocumentType.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || '';
	return this;
}
DocumentType.prototype.addEventListener = function () {
};
DocumentType.prototype.appendChild = function () {
	return {};
};
DocumentType.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentType.prototype.cloneNode = function () {
	return {};
};
DocumentType.prototype.fireEvent = function () {
};
DocumentType.prototype.getApiName = function () {
	return '';
};
DocumentType.prototype.getAttributes = function () {
	return {};
};
DocumentType.prototype.getBubbleParent = function () {
	return true;
};
DocumentType.prototype.getChildNodes = function () {
	return {};
};
DocumentType.prototype.getEntities = function () {
	return {};
};
DocumentType.prototype.getFirstChild = function () {
	return {};
};
DocumentType.prototype.getInternalSubset = function () {
	return '';
};
DocumentType.prototype.getLastChild = function () {
	return {};
};
DocumentType.prototype.getLifecycleContainer = function () {
	return {};
};
DocumentType.prototype.getLocalName = function () {
	return '';
};
DocumentType.prototype.getName = function () {
	return '';
};
DocumentType.prototype.getNamespaceURI = function () {
	return '';
};
DocumentType.prototype.getNextSibling = function () {
	return {};
};
DocumentType.prototype.getNodeName = function () {
	return '';
};
DocumentType.prototype.getNodeType = function () {
	return 0;
};
DocumentType.prototype.getNodeValue = function () {
	return '';
};
DocumentType.prototype.getNotations = function () {
	return {};
};
DocumentType.prototype.getOwnerDocument = function () {
	return {};
};
DocumentType.prototype.getParentNode = function () {
	return {};
};
DocumentType.prototype.getPrefix = function () {
	return '';
};
DocumentType.prototype.getPreviousSibling = function () {
	return {};
};
DocumentType.prototype.getPublicId = function () {
	return '';
};
DocumentType.prototype.getSystemId = function () {
	return '';
};
DocumentType.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentType.getText was deprecated, since 2.0.0');
};
DocumentType.prototype.getTextContent = function () {
	return '';
};
DocumentType.prototype.hasAttributes = function () {
	return true;
};
DocumentType.prototype.hasChildNodes = function () {
	return true;
};
DocumentType.prototype.insertBefore = function () {
	return {};
};
DocumentType.prototype.isSupported = function () {
	return true;
};
DocumentType.prototype.normalize = function () {
};
DocumentType.prototype.removeChild = function () {
	return {};
};
DocumentType.prototype.removeEventListener = function () {
};
DocumentType.prototype.replaceChild = function () {
	return {};
};
DocumentType.prototype.setBubbleParent = function () {
};
DocumentType.prototype.setLifecycleContainer = function () {
};
DocumentType.prototype.setLocalName = function () {
};
DocumentType.prototype.setNodeValue = function () {
};
DocumentType.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new DocumentType(properties);
};