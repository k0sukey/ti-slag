function DocumentType(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.DocumentType';
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
		throw new Error('Ti.XML.DocumentType.text was deprecated, since 2.0.0');
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
	this.name = properties.name || '';
	this.entities = properties.entities || {};
	this.notations = properties.notations || {};
	this.publicId = properties.publicId || '';
	this.systemId = properties.systemId || '';
	this.internalSubset = properties.internalSubset || '';
	return this;
}
DocumentType.prototype.addEventListener = function () {
};
DocumentType.prototype.removeEventListener = function () {
};
DocumentType.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentType.prototype.fireEvent = function () {
};
DocumentType.prototype.insertBefore = function () {
	return {};
};
DocumentType.prototype.replaceChild = function () {
	return {};
};
DocumentType.prototype.removeChild = function () {
	return {};
};
DocumentType.prototype.appendChild = function () {
	return {};
};
DocumentType.prototype.hasChildNodes = function () {
	return true;
};
DocumentType.prototype.cloneNode = function () {
	return {};
};
DocumentType.prototype.normalize = function () {
};
DocumentType.prototype.isSupported = function () {
	return true;
};
DocumentType.prototype.hasAttributes = function () {
	return true;
};
DocumentType.prototype.getBubbleParent = function () {
	return true;
};
DocumentType.prototype.setBubbleParent = function () {
};
DocumentType.prototype.getApiName = function () {
	return '';
};
DocumentType.prototype.getLifecycleContainer = function () {
	return {};
};
DocumentType.prototype.setLifecycleContainer = function () {
};
DocumentType.prototype.getTextContent = function () {
	return '';
};
DocumentType.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentType.getText was deprecated, since 2.0.0');
};
DocumentType.prototype.getNodeValue = function () {
	return '';
};
DocumentType.prototype.setNodeValue = function () {
};
DocumentType.prototype.getPrefix = function () {
	return '';
};
DocumentType.prototype.setPrefix = function () {
};
DocumentType.prototype.getNodeName = function () {
	return '';
};
DocumentType.prototype.getNodeType = function () {
	return 0;
};
DocumentType.prototype.getParentNode = function () {
	return {};
};
DocumentType.prototype.getChildNodes = function () {
	return {};
};
DocumentType.prototype.getFirstChild = function () {
	return {};
};
DocumentType.prototype.getLastChild = function () {
	return {};
};
DocumentType.prototype.getPreviousSibling = function () {
	return {};
};
DocumentType.prototype.getNextSibling = function () {
	return {};
};
DocumentType.prototype.getAttributes = function () {
	return {};
};
DocumentType.prototype.getOwnerDocument = function () {
	return {};
};
DocumentType.prototype.getNamespaceURI = function () {
	return '';
};
DocumentType.prototype.getLocalName = function () {
	return '';
};
DocumentType.prototype.setLocalName = function () {
};
DocumentType.prototype.getName = function () {
	return '';
};
DocumentType.prototype.getEntities = function () {
	return {};
};
DocumentType.prototype.getNotations = function () {
	return {};
};
DocumentType.prototype.getPublicId = function () {
	return '';
};
DocumentType.prototype.getSystemId = function () {
	return '';
};
DocumentType.prototype.getInternalSubset = function () {
	return '';
};
module.exports = function (properties) {
	return new DocumentType(properties);
};