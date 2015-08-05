var crypto = require('crypto');
function DocumentFragment(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG_PROPERTIES.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG_PROPERTIES.COMMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG_PROPERTIES.ELEMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG_PROPERTIES.NOTATION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG_PROPERTIES.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG_PROPERTIES.TEXT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.XML.DocumentFragment.apiName is read only property');
	}
	this.apiName = 'Ti.XML.DocumentFragment';
	if (__SLAG_PROPERTIES.attributes) {
		throw new Error('Ti.XML.DocumentFragment.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.childNodes) {
		throw new Error('Ti.XML.DocumentFragment.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG_PROPERTIES.firstChild) {
		throw new Error('Ti.XML.DocumentFragment.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG_PROPERTIES.lastChild) {
		throw new Error('Ti.XML.DocumentFragment.lastChild is read only property');
	}
	this.lastChild = {};
	this.localName = __SLAG_PROPERTIES.localName || '';
	if (__SLAG_PROPERTIES.namespaceURI) {
		throw new Error('Ti.XML.DocumentFragment.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG_PROPERTIES.nextSibling) {
		throw new Error('Ti.XML.DocumentFragment.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG_PROPERTIES.nodeName) {
		throw new Error('Ti.XML.DocumentFragment.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG_PROPERTIES.nodeType) {
		throw new Error('Ti.XML.DocumentFragment.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG_PROPERTIES.nodeValue || '';
	if (__SLAG_PROPERTIES.ownerDocument) {
		throw new Error('Ti.XML.DocumentFragment.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG_PROPERTIES.parentNode) {
		throw new Error('Ti.XML.DocumentFragment.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG_PROPERTIES.prefix || '';
	if (__SLAG_PROPERTIES.previousSibling) {
		throw new Error('Ti.XML.DocumentFragment.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG_PROPERTIES.text) {
		throw new Error('Ti.XML.DocumentFragment.text was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.textContent) {
		throw new Error('Ti.XML.DocumentFragment.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
DocumentFragment.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentFragment.prototype.appendChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentFragment.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
DocumentFragment.prototype.cloneNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentFragment.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentFragment.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
DocumentFragment.prototype.getAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributes;
};
DocumentFragment.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
DocumentFragment.prototype.getChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.childNodes;
};
DocumentFragment.prototype.getFirstChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstChild;
};
DocumentFragment.prototype.getLastChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastChild;
};
DocumentFragment.prototype.getLocalName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.localName;
};
DocumentFragment.prototype.getNamespaceURI = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.namespaceURI;
};
DocumentFragment.prototype.getNextSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nextSibling;
};
DocumentFragment.prototype.getNodeName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeName;
};
DocumentFragment.prototype.getNodeType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeType;
};
DocumentFragment.prototype.getNodeValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeValue;
};
DocumentFragment.prototype.getOwnerDocument = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerDocument;
};
DocumentFragment.prototype.getParentNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.parentNode;
};
DocumentFragment.prototype.getPrefix = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
DocumentFragment.prototype.getPreviousSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previousSibling;
};
DocumentFragment.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentFragment.getText was deprecated, since 2.0.0');
};
DocumentFragment.prototype.getTextContent = function () {
	if ([
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textContent;
};
DocumentFragment.prototype.hasAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
DocumentFragment.prototype.hasChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
DocumentFragment.prototype.insertBefore = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentFragment.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
DocumentFragment.prototype.normalize = function () {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentFragment.prototype.removeChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentFragment.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentFragment.prototype.replaceChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentFragment.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
DocumentFragment.prototype.setLocalName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.localName = __SLAG__PROPERTY;
};
DocumentFragment.prototype.setNodeValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nodeValue = __SLAG__PROPERTY;
};
DocumentFragment.prototype.setPrefix = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.prefix = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new DocumentFragment(properties);
};