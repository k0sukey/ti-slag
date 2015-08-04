var crypto = require('crypto');
function Entity(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ATTRIBUTE_NODE',
			'CDATA_SECTION_NODE',
			'COMMENT_NODE',
			'DOCUMENT_FRAGMENT_NODE',
			'DOCUMENT_NODE',
			'DOCUMENT_TYPE_NODE',
			'ELEMENT_NODE',
			'ENTITY_NODE',
			'ENTITY_REFERENCE_NODE',
			'NOTATION_NODE',
			'PROCESSING_INSTRUCTION_NODE',
			'TEXT_NODE',
			'apiName',
			'attributes',
			'bubbleParent',
			'childNodes',
			'firstChild',
			'lastChild',
			'lifecycleContainer',
			'localName',
			'namespaceURI',
			'nextSibling',
			'nodeName',
			'nodeType',
			'nodeValue',
			'notationName',
			'ownerDocument',
			'parentNode',
			'prefix',
			'previousSibling',
			'publicId',
			'systemId',
			'text',
			'textContent',
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
	if (__SLAG__properties.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Entity.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Entity.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Entity.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Entity.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Entity.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Entity.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Entity.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Entity.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Entity.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Entity.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Entity.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Entity.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Entity.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Entity';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Entity.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Entity.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Entity.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Entity.lastChild is read only property');
	}
	this.lastChild = {};
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Entity.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Entity.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Entity.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Entity.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.notationName) {
		throw new Error('Ti.XML.Entity.notationName is read only property');
	}
	this.notationName = '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Entity.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Entity.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Entity.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.publicId) {
		throw new Error('Ti.XML.Entity.publicId is read only property');
	}
	this.publicId = '';
	if (__SLAG__properties.systemId) {
		throw new Error('Ti.XML.Entity.systemId is read only property');
	}
	this.systemId = '';
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Entity.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Entity.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Entity.prototype.addEventListener = function () {
};
Entity.prototype.appendChild = function () {
	return {};
};
Entity.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Entity.prototype.cloneNode = function () {
	return {};
};
Entity.prototype.fireEvent = function () {
};
Entity.prototype.getApiName = function () {
	return this.apiName;
};
Entity.prototype.getAttributes = function () {
	return this.attributes;
};
Entity.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Entity.prototype.getChildNodes = function () {
	return this.childNodes;
};
Entity.prototype.getFirstChild = function () {
	return this.firstChild;
};
Entity.prototype.getLastChild = function () {
	return this.lastChild;
};
Entity.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Entity.prototype.getLocalName = function () {
	return this.localName;
};
Entity.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Entity.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Entity.prototype.getNodeName = function () {
	return this.nodeName;
};
Entity.prototype.getNodeType = function () {
	return this.nodeType;
};
Entity.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Entity.prototype.getNotationName = function () {
	return this.notationName;
};
Entity.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Entity.prototype.getParentNode = function () {
	return this.parentNode;
};
Entity.prototype.getPrefix = function () {
	return this.prefix;
};
Entity.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Entity.prototype.getPublicId = function () {
	return this.publicId;
};
Entity.prototype.getSystemId = function () {
	return this.systemId;
};
Entity.prototype.getText = function () {
	throw new Error('Ti.XML.Entity.getText was deprecated, since 2.0.0');
};
Entity.prototype.getTextContent = function () {
	return this.textContent;
};
Entity.prototype.hasAttributes = function () {
	return true;
};
Entity.prototype.hasChildNodes = function () {
	return true;
};
Entity.prototype.insertBefore = function () {
	return {};
};
Entity.prototype.isSupported = function () {
	return true;
};
Entity.prototype.normalize = function () {
};
Entity.prototype.removeChild = function () {
	return {};
};
Entity.prototype.removeEventListener = function () {
};
Entity.prototype.replaceChild = function () {
	return {};
};
Entity.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Entity.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Entity.prototype.setLocalName = function (property) {
	this.localName = property;
};
Entity.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Entity.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new Entity(properties);
};