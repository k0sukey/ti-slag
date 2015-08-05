var crypto = require('crypto');
function Element(__SLAG_PROPERTIES) {
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
			'tagName',
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
		throw new Error('Ti.XML.Element.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG_PROPERTIES.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Element.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG_PROPERTIES.COMMENT_NODE) {
		throw new Error('Ti.XML.Element.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG_PROPERTIES.ELEMENT_NODE) {
		throw new Error('Ti.XML.Element.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG_PROPERTIES.NOTATION_NODE) {
		throw new Error('Ti.XML.Element.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG_PROPERTIES.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Element.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG_PROPERTIES.TEXT_NODE) {
		throw new Error('Ti.XML.Element.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.XML.Element.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Element';
	if (__SLAG_PROPERTIES.attributes) {
		throw new Error('Ti.XML.Element.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.childNodes) {
		throw new Error('Ti.XML.Element.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG_PROPERTIES.firstChild) {
		throw new Error('Ti.XML.Element.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG_PROPERTIES.lastChild) {
		throw new Error('Ti.XML.Element.lastChild is read only property');
	}
	this.lastChild = {};
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.localName = __SLAG_PROPERTIES.localName || '';
	if (__SLAG_PROPERTIES.namespaceURI) {
		throw new Error('Ti.XML.Element.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG_PROPERTIES.nextSibling) {
		throw new Error('Ti.XML.Element.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG_PROPERTIES.nodeName) {
		throw new Error('Ti.XML.Element.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG_PROPERTIES.nodeType) {
		throw new Error('Ti.XML.Element.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG_PROPERTIES.nodeValue || '';
	if (__SLAG_PROPERTIES.ownerDocument) {
		throw new Error('Ti.XML.Element.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG_PROPERTIES.parentNode) {
		throw new Error('Ti.XML.Element.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG_PROPERTIES.prefix || '';
	if (__SLAG_PROPERTIES.previousSibling) {
		throw new Error('Ti.XML.Element.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG_PROPERTIES.tagName) {
		throw new Error('Ti.XML.Element.tagName is read only property');
	}
	this.tagName = '';
	if (__SLAG_PROPERTIES.text) {
		throw new Error('Ti.XML.Element.text was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.textContent) {
		throw new Error('Ti.XML.Element.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Element.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.appendChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Element.prototype.cloneNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Element.prototype.getAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Element.prototype.getAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Element.prototype.getAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getAttributeNodeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributes;
};
Element.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Element.prototype.getChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.childNodes;
};
Element.prototype.getElementsByTagName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getElementsByTagNameNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getFirstChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstChild;
};
Element.prototype.getLastChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastChild;
};
Element.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Element.prototype.getLocalName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.localName;
};
Element.prototype.getNamespaceURI = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.namespaceURI;
};
Element.prototype.getNextSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nextSibling;
};
Element.prototype.getNodeName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeName;
};
Element.prototype.getNodeType = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeType;
};
Element.prototype.getNodeValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeValue;
};
Element.prototype.getOwnerDocument = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerDocument;
};
Element.prototype.getParentNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.parentNode;
};
Element.prototype.getPrefix = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
Element.prototype.getPreviousSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previousSibling;
};
Element.prototype.getTagName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tagName;
};
Element.prototype.getText = function () {
	throw new Error('Ti.XML.Element.getText was deprecated, since 2.0.0');
};
Element.prototype.getTextContent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textContent;
};
Element.prototype.hasAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.hasAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.hasAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.hasChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.insertBefore = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.normalize = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.replaceChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.setAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.setAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.setAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.setAttributeNodeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Element.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Element.prototype.setLocalName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.localName = __SLAG__PROPERTY;
};
Element.prototype.setNodeValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nodeValue = __SLAG__PROPERTY;
};
Element.prototype.setPrefix = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.prefix = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Element(properties);
};