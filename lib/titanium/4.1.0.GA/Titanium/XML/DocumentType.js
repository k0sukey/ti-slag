var crypto = require('crypto');
function DocumentType(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'ELEMENT_NODE',
			'ATTRIBUTE_NODE',
			'TEXT_NODE',
			'CDATA_SECTION_NODE',
			'ENTITY_REFERENCE_NODE',
			'ENTITY_NODE',
			'PROCESSING_INSTRUCTION_NODE',
			'COMMENT_NODE',
			'DOCUMENT_NODE',
			'DOCUMENT_TYPE_NODE',
			'DOCUMENT_FRAGMENT_NODE',
			'NOTATION_NODE',
			'textContent',
			'text',
			'nodeValue',
			'prefix',
			'nodeName',
			'nodeType',
			'parentNode',
			'childNodes',
			'firstChild',
			'lastChild',
			'previousSibling',
			'nextSibling',
			'attributes',
			'ownerDocument',
			'namespaceURI',
			'localName',
			'name',
			'entities',
			'notations',
			'publicId',
			'systemId',
			'internalSubset',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.DocumentType.apiName is read only property');
	}
	this.apiName = 'Ti.XML.DocumentType';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.DocumentType.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.DocumentType.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.DocumentType.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.DocumentType.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.DocumentType.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.DocumentType.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.DocumentType.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.DocumentType.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.DocumentType.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.DocumentType.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.DocumentType.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.DocumentType.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.DocumentType.textContent is read only property');
	}
	this.textContent = '';
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.DocumentType.text was deprecated, since 2.0.0');
	}
	this.nodeValue = __SLAG__properties.nodeValue || '';
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.DocumentType.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.DocumentType.nodeType is read only property');
	}
	this.nodeType = 0;
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.DocumentType.parentNode is read only property');
	}
	this.parentNode = {};
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.DocumentType.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.DocumentType.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.DocumentType.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.DocumentType.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.DocumentType.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.DocumentType.attributes is read only property');
	}
	this.attributes = {};
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.DocumentType.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.DocumentType.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.name) {
		throw new Error('Ti.XML.DocumentType.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.entities) {
		throw new Error('Ti.XML.DocumentType.entities is read only property');
	}
	this.entities = {};
	if (__SLAG__properties.notations) {
		throw new Error('Ti.XML.DocumentType.notations is read only property');
	}
	this.notations = {};
	if (__SLAG__properties.publicId) {
		throw new Error('Ti.XML.DocumentType.publicId is read only property');
	}
	this.publicId = '';
	if (__SLAG__properties.systemId) {
		throw new Error('Ti.XML.DocumentType.systemId is read only property');
	}
	this.systemId = '';
	if (__SLAG__properties.internalSubset) {
		throw new Error('Ti.XML.DocumentType.internalSubset is read only property');
	}
	this.internalSubset = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
DocumentType.prototype.addEventListener = function () {
};
DocumentType.prototype.removeEventListener = function () {
};
DocumentType.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
	return this.bubbleParent;
};
DocumentType.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DocumentType.prototype.getApiName = function () {
	return this.apiName;
};
DocumentType.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
DocumentType.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
DocumentType.prototype.getTextContent = function () {
	return this.textContent;
};
DocumentType.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentType.getText was deprecated, since 2.0.0');
};
DocumentType.prototype.getNodeValue = function () {
	return this.nodeValue;
};
DocumentType.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
DocumentType.prototype.getPrefix = function () {
	return this.prefix;
};
DocumentType.prototype.setPrefix = function (property) {
	this.prefix = property;
};
DocumentType.prototype.getNodeName = function () {
	return this.nodeName;
};
DocumentType.prototype.getNodeType = function () {
	return this.nodeType;
};
DocumentType.prototype.getParentNode = function () {
	return this.parentNode;
};
DocumentType.prototype.getChildNodes = function () {
	return this.childNodes;
};
DocumentType.prototype.getFirstChild = function () {
	return this.firstChild;
};
DocumentType.prototype.getLastChild = function () {
	return this.lastChild;
};
DocumentType.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
DocumentType.prototype.getNextSibling = function () {
	return this.nextSibling;
};
DocumentType.prototype.getAttributes = function () {
	return this.attributes;
};
DocumentType.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
DocumentType.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
DocumentType.prototype.getLocalName = function () {
	return this.localName;
};
DocumentType.prototype.setLocalName = function (property) {
	this.localName = property;
};
DocumentType.prototype.getName = function () {
	return this.name;
};
DocumentType.prototype.getEntities = function () {
	return this.entities;
};
DocumentType.prototype.getNotations = function () {
	return this.notations;
};
DocumentType.prototype.getPublicId = function () {
	return this.publicId;
};
DocumentType.prototype.getSystemId = function () {
	return this.systemId;
};
DocumentType.prototype.getInternalSubset = function () {
	return this.internalSubset;
};
module.exports = function (properties) {
	return new DocumentType(properties);
};