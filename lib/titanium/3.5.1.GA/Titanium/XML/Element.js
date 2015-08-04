var crypto = require('crypto');
function Element(__SLAG__properties) {
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
		throw new Error('Ti.XML.Element.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Element.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Element.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Element.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Element.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Element.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Element.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Element.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Element';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Element.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Element.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Element.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Element.lastChild is read only property');
	}
	this.lastChild = {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Element.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Element.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Element.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Element.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Element.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Element.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Element.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.tagName) {
		throw new Error('Ti.XML.Element.tagName is read only property');
	}
	this.tagName = '';
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Element.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Element.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Element.prototype.addEventListener = function () {
};
Element.prototype.appendChild = function () {
	return {};
};
Element.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Element.prototype.cloneNode = function () {
	return {};
};
Element.prototype.fireEvent = function () {
};
Element.prototype.getApiName = function () {
	return this.apiName;
};
Element.prototype.getAttribute = function () {
	return '';
};
Element.prototype.getAttributeNS = function () {
	return '';
};
Element.prototype.getAttributeNode = function () {
	return {};
};
Element.prototype.getAttributeNodeNS = function () {
	return {};
};
Element.prototype.getAttributes = function () {
	return this.attributes;
};
Element.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Element.prototype.getChildNodes = function () {
	return this.childNodes;
};
Element.prototype.getElementsByTagName = function () {
	return {};
};
Element.prototype.getElementsByTagNameNS = function () {
	return {};
};
Element.prototype.getFirstChild = function () {
	return this.firstChild;
};
Element.prototype.getLastChild = function () {
	return this.lastChild;
};
Element.prototype.getLocalName = function () {
	return this.localName;
};
Element.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Element.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Element.prototype.getNodeName = function () {
	return this.nodeName;
};
Element.prototype.getNodeType = function () {
	return this.nodeType;
};
Element.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Element.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Element.prototype.getParentNode = function () {
	return this.parentNode;
};
Element.prototype.getPrefix = function () {
	return this.prefix;
};
Element.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Element.prototype.getTagName = function () {
	return this.tagName;
};
Element.prototype.getText = function () {
	throw new Error('Ti.XML.Element.getText was deprecated, since 2.0.0');
};
Element.prototype.getTextContent = function () {
	return this.textContent;
};
Element.prototype.hasAttribute = function () {
	return true;
};
Element.prototype.hasAttributeNS = function () {
	return true;
};
Element.prototype.hasAttributes = function () {
	return true;
};
Element.prototype.hasChildNodes = function () {
	return true;
};
Element.prototype.insertBefore = function () {
	return {};
};
Element.prototype.isSupported = function () {
	return true;
};
Element.prototype.normalize = function () {
};
Element.prototype.removeAttribute = function () {
};
Element.prototype.removeAttributeNS = function () {
};
Element.prototype.removeAttributeNode = function () {
};
Element.prototype.removeChild = function () {
	return {};
};
Element.prototype.removeEventListener = function () {
};
Element.prototype.replaceChild = function () {
	return {};
};
Element.prototype.setAttribute = function () {
};
Element.prototype.setAttributeNS = function () {
};
Element.prototype.setAttributeNode = function () {
	return {};
};
Element.prototype.setAttributeNodeNS = function () {
	return {};
};
Element.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Element.prototype.setLocalName = function (property) {
	this.localName = property;
};
Element.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Element.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new Element(properties);
};