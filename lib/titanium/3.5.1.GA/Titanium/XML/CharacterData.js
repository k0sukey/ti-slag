var crypto = require('crypto');
function CharacterData(__SLAG__properties) {
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
			'data',
			'firstChild',
			'lastChild',
			'length',
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
		throw new Error('Ti.XML.CharacterData.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.CharacterData.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.CharacterData.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.CharacterData.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.CharacterData.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.CharacterData.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.CharacterData.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.CharacterData.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.CharacterData.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.CharacterData.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.CharacterData.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.CharacterData.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.CharacterData.apiName is read only property');
	}
	this.apiName = 'Ti.XML.CharacterData';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.CharacterData.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.CharacterData.childNodes is read only property');
	}
	this.childNodes = {};
	this.data = __SLAG__properties.data || '';
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.CharacterData.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.CharacterData.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.length) {
		throw new Error('Ti.XML.CharacterData.length is read only property');
	}
	this.length = 0;
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.CharacterData.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.CharacterData.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.CharacterData.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.CharacterData.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.CharacterData.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.CharacterData.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.CharacterData.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.CharacterData.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.CharacterData.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
CharacterData.prototype.addEventListener = function () {
};
CharacterData.prototype.appendChild = function () {
	return {};
};
CharacterData.prototype.appendData = function () {
};
CharacterData.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CharacterData.prototype.cloneNode = function () {
	return {};
};
CharacterData.prototype.deleteData = function () {
};
CharacterData.prototype.fireEvent = function () {
};
CharacterData.prototype.getApiName = function () {
	return this.apiName;
};
CharacterData.prototype.getAttributes = function () {
	return this.attributes;
};
CharacterData.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CharacterData.prototype.getChildNodes = function () {
	return this.childNodes;
};
CharacterData.prototype.getData = function () {
	return this.data;
};
CharacterData.prototype.getFirstChild = function () {
	return this.firstChild;
};
CharacterData.prototype.getLastChild = function () {
	return this.lastChild;
};
CharacterData.prototype.getLength = function () {
	return this.length;
};
CharacterData.prototype.getLocalName = function () {
	return this.localName;
};
CharacterData.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
CharacterData.prototype.getNextSibling = function () {
	return this.nextSibling;
};
CharacterData.prototype.getNodeName = function () {
	return this.nodeName;
};
CharacterData.prototype.getNodeType = function () {
	return this.nodeType;
};
CharacterData.prototype.getNodeValue = function () {
	return this.nodeValue;
};
CharacterData.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
CharacterData.prototype.getParentNode = function () {
	return this.parentNode;
};
CharacterData.prototype.getPrefix = function () {
	return this.prefix;
};
CharacterData.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
CharacterData.prototype.getText = function () {
	throw new Error('Ti.XML.CharacterData.getText was deprecated, since 2.0.0');
};
CharacterData.prototype.getTextContent = function () {
	return this.textContent;
};
CharacterData.prototype.hasAttributes = function () {
	return true;
};
CharacterData.prototype.hasChildNodes = function () {
	return true;
};
CharacterData.prototype.insertBefore = function () {
	return {};
};
CharacterData.prototype.insertData = function () {
};
CharacterData.prototype.isSupported = function () {
	return true;
};
CharacterData.prototype.normalize = function () {
};
CharacterData.prototype.removeChild = function () {
	return {};
};
CharacterData.prototype.removeEventListener = function () {
};
CharacterData.prototype.replaceChild = function () {
	return {};
};
CharacterData.prototype.replaceData = function () {
};
CharacterData.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CharacterData.prototype.setData = function (property) {
	this.data = property;
};
CharacterData.prototype.setLocalName = function (property) {
	this.localName = property;
};
CharacterData.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
CharacterData.prototype.setPrefix = function (property) {
	this.prefix = property;
};
CharacterData.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CharacterData(properties);
};