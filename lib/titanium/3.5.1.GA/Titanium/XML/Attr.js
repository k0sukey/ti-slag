var crypto = require('crypto');
function Attr(__SLAG__properties) {
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
			'localName',
			'name',
			'namespaceURI',
			'nextSibling',
			'nodeName',
			'nodeType',
			'nodeValue',
			'ownerDocument',
			'ownerElement',
			'parentNode',
			'prefix',
			'previousSibling',
			'specified',
			'text',
			'textContent',
			'value',
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
	if (__SLAG__properties.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Attr.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Attr.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Attr.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Attr.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Attr.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Attr.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Attr.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Attr.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Attr.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Attr.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Attr';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Attr.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Attr.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Attr.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Attr.lastChild is read only property');
	}
	this.lastChild = {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.name) {
		throw new Error('Ti.XML.Attr.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Attr.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Attr.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Attr.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Attr.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Attr.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.ownerElement) {
		throw new Error('Ti.XML.Attr.ownerElement is read only property');
	}
	this.ownerElement = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Attr.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Attr.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.specified) {
		throw new Error('Ti.XML.Attr.specified is read only property');
	}
	this.specified = true;
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Attr.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Attr.textContent is read only property');
	}
	this.textContent = '';
	this.value = __SLAG__properties.value || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Attr.prototype.addEventListener = function () {
};
Attr.prototype.appendChild = function () {
	return {};
};
Attr.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Attr.prototype.cloneNode = function () {
	return {};
};
Attr.prototype.fireEvent = function () {
};
Attr.prototype.getApiName = function () {
	return this.apiName;
};
Attr.prototype.getAttributes = function () {
	return this.attributes;
};
Attr.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Attr.prototype.getChildNodes = function () {
	return this.childNodes;
};
Attr.prototype.getFirstChild = function () {
	return this.firstChild;
};
Attr.prototype.getLastChild = function () {
	return this.lastChild;
};
Attr.prototype.getLocalName = function () {
	return this.localName;
};
Attr.prototype.getName = function () {
	return this.name;
};
Attr.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Attr.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Attr.prototype.getNodeName = function () {
	return this.nodeName;
};
Attr.prototype.getNodeType = function () {
	return this.nodeType;
};
Attr.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Attr.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Attr.prototype.getOwnerElement = function () {
	return this.ownerElement;
};
Attr.prototype.getParentNode = function () {
	return this.parentNode;
};
Attr.prototype.getPrefix = function () {
	return this.prefix;
};
Attr.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Attr.prototype.getSpecified = function () {
	return this.specified;
};
Attr.prototype.getText = function () {
	throw new Error('Ti.XML.Attr.getText was deprecated, since 2.0.0');
};
Attr.prototype.getTextContent = function () {
	return this.textContent;
};
Attr.prototype.getValue = function () {
	return this.value;
};
Attr.prototype.hasAttributes = function () {
	return true;
};
Attr.prototype.hasChildNodes = function () {
	return true;
};
Attr.prototype.insertBefore = function () {
	return {};
};
Attr.prototype.isSupported = function () {
	return true;
};
Attr.prototype.normalize = function () {
};
Attr.prototype.removeChild = function () {
	return {};
};
Attr.prototype.removeEventListener = function () {
};
Attr.prototype.replaceChild = function () {
	return {};
};
Attr.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Attr.prototype.setLocalName = function (property) {
	this.localName = property;
};
Attr.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Attr.prototype.setPrefix = function (property) {
	this.prefix = property;
};
Attr.prototype.setValue = function (property) {
	this.value = property;
};
module.exports = function (properties) {
	return new Attr(properties);
};