var crypto = require('crypto');
function Node(__SLAG__properties) {
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
			'ownerDocument',
			'parentNode',
			'prefix',
			'previousSibling',
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
		throw new Error('Ti.XML.Node.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Node.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Node.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Node.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Node.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Node.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Node.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Node.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Node.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Node.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Node.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Node.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Node.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Node';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Node.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Node.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Node.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Node.lastChild is read only property');
	}
	this.lastChild = {};
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Node.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Node.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Node.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Node.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Node.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Node.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Node.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Node.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Node.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Node.prototype.addEventListener = function () {
};
Node.prototype.appendChild = function () {
	return {};
};
Node.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Node.prototype.cloneNode = function () {
	return {};
};
Node.prototype.fireEvent = function () {
};
Node.prototype.getApiName = function () {
	return this.apiName;
};
Node.prototype.getAttributes = function () {
	return this.attributes;
};
Node.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Node.prototype.getChildNodes = function () {
	return this.childNodes;
};
Node.prototype.getFirstChild = function () {
	return this.firstChild;
};
Node.prototype.getLastChild = function () {
	return this.lastChild;
};
Node.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Node.prototype.getLocalName = function () {
	return this.localName;
};
Node.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Node.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Node.prototype.getNodeName = function () {
	return this.nodeName;
};
Node.prototype.getNodeType = function () {
	return this.nodeType;
};
Node.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Node.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Node.prototype.getParentNode = function () {
	return this.parentNode;
};
Node.prototype.getPrefix = function () {
	return this.prefix;
};
Node.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Node.prototype.getText = function () {
	throw new Error('Ti.XML.Node.getText was deprecated, since 2.0.0');
};
Node.prototype.getTextContent = function () {
	return this.textContent;
};
Node.prototype.hasAttributes = function () {
	return true;
};
Node.prototype.hasChildNodes = function () {
	return true;
};
Node.prototype.insertBefore = function () {
	return {};
};
Node.prototype.isSupported = function () {
	return true;
};
Node.prototype.normalize = function () {
};
Node.prototype.removeChild = function () {
	return {};
};
Node.prototype.removeEventListener = function () {
};
Node.prototype.replaceChild = function () {
	return {};
};
Node.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Node.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Node.prototype.setLocalName = function (property) {
	this.localName = property;
};
Node.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Node.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new Node(properties);
};