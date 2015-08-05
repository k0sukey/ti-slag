var crypto = require('crypto');
function Document(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'doctype',
			'implementation',
			'documentElement',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.XML.Document.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Document';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.ELEMENT_NODE) {
		throw new Error('Ti.XML.Document.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG_PROPERTIES.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Document.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG_PROPERTIES.TEXT_NODE) {
		throw new Error('Ti.XML.Document.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG_PROPERTIES.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Document.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Document.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_NODE) {
		throw new Error('Ti.XML.Document.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG_PROPERTIES.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Document.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG_PROPERTIES.COMMENT_NODE) {
		throw new Error('Ti.XML.Document.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG_PROPERTIES.NOTATION_NODE) {
		throw new Error('Ti.XML.Document.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG_PROPERTIES.textContent) {
		throw new Error('Ti.XML.Document.textContent is read only property');
	}
	this.textContent = '';
	if (__SLAG_PROPERTIES.text) {
		throw new Error('Ti.XML.Document.text was deprecated, since 2.0.0');
	}
	this.nodeValue = __SLAG_PROPERTIES.nodeValue || '';
	this.prefix = __SLAG_PROPERTIES.prefix || '';
	if (__SLAG_PROPERTIES.nodeName) {
		throw new Error('Ti.XML.Document.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG_PROPERTIES.nodeType) {
		throw new Error('Ti.XML.Document.nodeType is read only property');
	}
	this.nodeType = 0;
	if (__SLAG_PROPERTIES.parentNode) {
		throw new Error('Ti.XML.Document.parentNode is read only property');
	}
	this.parentNode = {};
	if (__SLAG_PROPERTIES.childNodes) {
		throw new Error('Ti.XML.Document.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG_PROPERTIES.firstChild) {
		throw new Error('Ti.XML.Document.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG_PROPERTIES.lastChild) {
		throw new Error('Ti.XML.Document.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG_PROPERTIES.previousSibling) {
		throw new Error('Ti.XML.Document.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG_PROPERTIES.nextSibling) {
		throw new Error('Ti.XML.Document.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG_PROPERTIES.attributes) {
		throw new Error('Ti.XML.Document.attributes is read only property');
	}
	this.attributes = {};
	if (__SLAG_PROPERTIES.ownerDocument) {
		throw new Error('Ti.XML.Document.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG_PROPERTIES.namespaceURI) {
		throw new Error('Ti.XML.Document.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	this.localName = __SLAG_PROPERTIES.localName || '';
	if (__SLAG_PROPERTIES.doctype) {
		throw new Error('Ti.XML.Document.doctype is read only property');
	}
	this.doctype = {};
	if (__SLAG_PROPERTIES.implementation) {
		throw new Error('Ti.XML.Document.implementation is read only property');
	}
	this.implementation = {};
	if (__SLAG_PROPERTIES.documentElement) {
		throw new Error('Ti.XML.Document.documentElement is read only property');
	}
	this.documentElement = {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Document.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Document.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Document.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Document.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Document.prototype.insertBefore = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.replaceChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.removeChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.appendChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.hasChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Document.prototype.cloneNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.normalize = function () {
	if ([
			'android',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Document.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Document.prototype.hasAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Document.prototype.createElement = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Element = require('./Document/Element');
	return Element(__SLAG_PROPERTY);
};
Document.prototype.createDocumentFragment = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var DocumentFragment = require('./Document/DocumentFragment');
	return DocumentFragment(__SLAG_PROPERTY);
};
Document.prototype.createTextNode = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TextNode = require('./Document/TextNode');
	return TextNode(__SLAG_PROPERTY);
};
Document.prototype.createComment = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Comment = require('./Document/Comment');
	return Comment(__SLAG_PROPERTY);
};
Document.prototype.createCDATASection = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var CDATASection = require('./Document/CDATASection');
	return CDATASection(__SLAG_PROPERTY);
};
Document.prototype.createProcessingInstruction = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ProcessingInstruction = require('./Document/ProcessingInstruction');
	return ProcessingInstruction(__SLAG_PROPERTY);
};
Document.prototype.createAttribute = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Attribute = require('./Document/Attribute');
	return Attribute(__SLAG_PROPERTY);
};
Document.prototype.createEntityReference = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var EntityReference = require('./Document/EntityReference');
	return EntityReference(__SLAG_PROPERTY);
};
Document.prototype.getElementsByTagName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.importNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.createElementNS = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ElementNS = require('./Document/ElementNS');
	return ElementNS(__SLAG_PROPERTY);
};
Document.prototype.createAttributeNS = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AttributeNS = require('./Document/AttributeNS');
	return AttributeNS(__SLAG_PROPERTY);
};
Document.prototype.getElementsByTagNameNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.getElementById = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Document.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Document.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Document.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Document.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Document.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Document.prototype.getTextContent = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textContent;
};
Document.prototype.getText = function () {
	throw new Error('Ti.XML.Document.getText was deprecated, since 2.0.0');
};
Document.prototype.getNodeValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeValue;
};
Document.prototype.setNodeValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nodeValue = __SLAG__PROPERTY;
};
Document.prototype.getPrefix = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
Document.prototype.setPrefix = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.prefix = __SLAG__PROPERTY;
};
Document.prototype.getNodeName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeName;
};
Document.prototype.getNodeType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeType;
};
Document.prototype.getParentNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.parentNode;
};
Document.prototype.getChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.childNodes;
};
Document.prototype.getFirstChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstChild;
};
Document.prototype.getLastChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastChild;
};
Document.prototype.getPreviousSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previousSibling;
};
Document.prototype.getNextSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nextSibling;
};
Document.prototype.getAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributes;
};
Document.prototype.getOwnerDocument = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerDocument;
};
Document.prototype.getNamespaceURI = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.namespaceURI;
};
Document.prototype.getLocalName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.localName;
};
Document.prototype.setLocalName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.localName = __SLAG__PROPERTY;
};
Document.prototype.getDoctype = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.doctype;
};
Document.prototype.getImplementation = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.implementation;
};
Document.prototype.getDocumentElement = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.documentElement;
};
module.exports = function (properties) {
	return new Document(properties);
};