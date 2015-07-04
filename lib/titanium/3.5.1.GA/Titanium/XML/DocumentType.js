function DocumentType(properties) {
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
	this.apiName = 'Ti.XML.DocumentType';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.entities = properties.entities || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.internalSubset = properties.internalSubset || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.localName = properties.localName || undefined;
	this.name = properties.name || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.notations = properties.notations || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.publicId = properties.publicId || undefined;
	this.systemId = properties.systemId || undefined;
	if (properties.text) {
		throw new Error('Ti.XML.DocumentType.text was deprecated, since 2.0.0');
	}
	this.textContent = properties.textContent || undefined;
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
DocumentType.prototype.setLocalName = function () {
};
DocumentType.prototype.setNodeValue = function () {
};
DocumentType.prototype.setPrefix = function () {
};
module.exports = function (properties) {
	return new DocumentType(properties);
};