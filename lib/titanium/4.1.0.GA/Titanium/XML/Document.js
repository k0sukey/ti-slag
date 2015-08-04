var crypto = require('crypto');
function Document(__SLAG__properties) {
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
			'doctype',
			'implementation',
			'documentElement',
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
		throw new Error('Ti.XML.Document.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Document';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Document.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Document.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Document.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Document.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Document.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Document.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Document.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Document.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Document.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Document.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Document.textContent is read only property');
	}
	this.textContent = '';
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Document.text was deprecated, since 2.0.0');
	}
	this.nodeValue = __SLAG__properties.nodeValue || '';
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Document.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Document.nodeType is read only property');
	}
	this.nodeType = 0;
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Document.parentNode is read only property');
	}
	this.parentNode = {};
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Document.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Document.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Document.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Document.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Document.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Document.attributes is read only property');
	}
	this.attributes = {};
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Document.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Document.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.doctype) {
		throw new Error('Ti.XML.Document.doctype is read only property');
	}
	this.doctype = {};
	if (__SLAG__properties.implementation) {
		throw new Error('Ti.XML.Document.implementation is read only property');
	}
	this.implementation = {};
	if (__SLAG__properties.documentElement) {
		throw new Error('Ti.XML.Document.documentElement is read only property');
	}
	this.documentElement = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Document.prototype.addEventListener = function () {
};
Document.prototype.removeEventListener = function () {
};
Document.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Document.prototype.fireEvent = function () {
};
Document.prototype.insertBefore = function () {
	return {};
};
Document.prototype.replaceChild = function () {
	return {};
};
Document.prototype.removeChild = function () {
	return {};
};
Document.prototype.appendChild = function () {
	return {};
};
Document.prototype.hasChildNodes = function () {
	return true;
};
Document.prototype.cloneNode = function () {
	return {};
};
Document.prototype.normalize = function () {
};
Document.prototype.isSupported = function () {
	return true;
};
Document.prototype.hasAttributes = function () {
	return true;
};
Document.prototype.createElement = function (params) {
	var Element = require('./Document/Element');
	return Element(params);
};
Document.prototype.createDocumentFragment = function (params) {
	var DocumentFragment = require('./Document/DocumentFragment');
	return DocumentFragment(params);
};
Document.prototype.createTextNode = function (params) {
	var TextNode = require('./Document/TextNode');
	return TextNode(params);
};
Document.prototype.createComment = function (params) {
	var Comment = require('./Document/Comment');
	return Comment(params);
};
Document.prototype.createCDATASection = function (params) {
	var CDATASection = require('./Document/CDATASection');
	return CDATASection(params);
};
Document.prototype.createProcessingInstruction = function (params) {
	var ProcessingInstruction = require('./Document/ProcessingInstruction');
	return ProcessingInstruction(params);
};
Document.prototype.createAttribute = function (params) {
	var Attribute = require('./Document/Attribute');
	return Attribute(params);
};
Document.prototype.createEntityReference = function (params) {
	var EntityReference = require('./Document/EntityReference');
	return EntityReference(params);
};
Document.prototype.getElementsByTagName = function () {
	return {};
};
Document.prototype.importNode = function () {
	return {};
};
Document.prototype.createElementNS = function (params) {
	var ElementNS = require('./Document/ElementNS');
	return ElementNS(params);
};
Document.prototype.createAttributeNS = function (params) {
	var AttributeNS = require('./Document/AttributeNS');
	return AttributeNS(params);
};
Document.prototype.getElementsByTagNameNS = function () {
	return {};
};
Document.prototype.getElementById = function () {
	return {};
};
Document.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Document.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Document.prototype.getApiName = function () {
	return this.apiName;
};
Document.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Document.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Document.prototype.getTextContent = function () {
	return this.textContent;
};
Document.prototype.getText = function () {
	throw new Error('Ti.XML.Document.getText was deprecated, since 2.0.0');
};
Document.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Document.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Document.prototype.getPrefix = function () {
	return this.prefix;
};
Document.prototype.setPrefix = function (property) {
	this.prefix = property;
};
Document.prototype.getNodeName = function () {
	return this.nodeName;
};
Document.prototype.getNodeType = function () {
	return this.nodeType;
};
Document.prototype.getParentNode = function () {
	return this.parentNode;
};
Document.prototype.getChildNodes = function () {
	return this.childNodes;
};
Document.prototype.getFirstChild = function () {
	return this.firstChild;
};
Document.prototype.getLastChild = function () {
	return this.lastChild;
};
Document.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Document.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Document.prototype.getAttributes = function () {
	return this.attributes;
};
Document.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Document.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Document.prototype.getLocalName = function () {
	return this.localName;
};
Document.prototype.setLocalName = function (property) {
	this.localName = property;
};
Document.prototype.getDoctype = function () {
	return this.doctype;
};
Document.prototype.getImplementation = function () {
	return this.implementation;
};
Document.prototype.getDocumentElement = function () {
	return this.documentElement;
};
module.exports = function (properties) {
	return new Document(properties);
};