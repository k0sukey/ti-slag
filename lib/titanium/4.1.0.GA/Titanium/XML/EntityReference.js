var crypto = require('crypto');
function EntityReference(__SLAG__properties) {
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
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.EntityReference.apiName is read only property');
	}
	this.apiName = 'Ti.XML.EntityReference';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.EntityReference.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.EntityReference.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.EntityReference.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.EntityReference.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.EntityReference.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.EntityReference.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.EntityReference.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.EntityReference.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.EntityReference.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.EntityReference.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.EntityReference.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.EntityReference.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.EntityReference.textContent is read only property');
	}
	this.textContent = '';
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.EntityReference.text was deprecated, since 2.0.0');
	}
	this.nodeValue = __SLAG__properties.nodeValue || '';
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.EntityReference.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.EntityReference.nodeType is read only property');
	}
	this.nodeType = 0;
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.EntityReference.parentNode is read only property');
	}
	this.parentNode = {};
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.EntityReference.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.EntityReference.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.EntityReference.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.EntityReference.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.EntityReference.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.EntityReference.attributes is read only property');
	}
	this.attributes = {};
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.EntityReference.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.EntityReference.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	this.localName = __SLAG__properties.localName || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
EntityReference.prototype.addEventListener = function () {
};
EntityReference.prototype.removeEventListener = function () {
};
EntityReference.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
EntityReference.prototype.fireEvent = function () {
};
EntityReference.prototype.insertBefore = function () {
	return {};
};
EntityReference.prototype.replaceChild = function () {
	return {};
};
EntityReference.prototype.removeChild = function () {
	return {};
};
EntityReference.prototype.appendChild = function () {
	return {};
};
EntityReference.prototype.hasChildNodes = function () {
	return true;
};
EntityReference.prototype.cloneNode = function () {
	return {};
};
EntityReference.prototype.normalize = function () {
};
EntityReference.prototype.isSupported = function () {
	return true;
};
EntityReference.prototype.hasAttributes = function () {
	return true;
};
EntityReference.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
EntityReference.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
EntityReference.prototype.getApiName = function () {
	return this.apiName;
};
EntityReference.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
EntityReference.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
EntityReference.prototype.getTextContent = function () {
	return this.textContent;
};
EntityReference.prototype.getText = function () {
	throw new Error('Ti.XML.EntityReference.getText was deprecated, since 2.0.0');
};
EntityReference.prototype.getNodeValue = function () {
	return this.nodeValue;
};
EntityReference.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
EntityReference.prototype.getPrefix = function () {
	return this.prefix;
};
EntityReference.prototype.setPrefix = function (property) {
	this.prefix = property;
};
EntityReference.prototype.getNodeName = function () {
	return this.nodeName;
};
EntityReference.prototype.getNodeType = function () {
	return this.nodeType;
};
EntityReference.prototype.getParentNode = function () {
	return this.parentNode;
};
EntityReference.prototype.getChildNodes = function () {
	return this.childNodes;
};
EntityReference.prototype.getFirstChild = function () {
	return this.firstChild;
};
EntityReference.prototype.getLastChild = function () {
	return this.lastChild;
};
EntityReference.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
EntityReference.prototype.getNextSibling = function () {
	return this.nextSibling;
};
EntityReference.prototype.getAttributes = function () {
	return this.attributes;
};
EntityReference.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
EntityReference.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
EntityReference.prototype.getLocalName = function () {
	return this.localName;
};
EntityReference.prototype.setLocalName = function (property) {
	this.localName = property;
};
module.exports = function (properties) {
	return new EntityReference(properties);
};