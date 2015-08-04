var crypto = require('crypto');
function Comment(__SLAG__properties) {
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
		throw new Error('Ti.XML.Comment.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Comment.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Comment.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Comment.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Comment.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Comment.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Comment.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Comment.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Comment.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Comment.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Comment.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Comment.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Comment.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Comment';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Comment.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Comment.childNodes is read only property');
	}
	this.childNodes = {};
	this.data = __SLAG__properties.data || '';
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Comment.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Comment.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.length) {
		throw new Error('Ti.XML.Comment.length is read only property');
	}
	this.length = 0;
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Comment.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Comment.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Comment.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Comment.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Comment.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Comment.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Comment.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Comment.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Comment.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Comment.prototype.addEventListener = function () {
};
Comment.prototype.appendChild = function () {
	return {};
};
Comment.prototype.appendData = function () {
};
Comment.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Comment.prototype.cloneNode = function () {
	return {};
};
Comment.prototype.deleteData = function () {
};
Comment.prototype.fireEvent = function () {
};
Comment.prototype.getApiName = function () {
	return this.apiName;
};
Comment.prototype.getAttributes = function () {
	return this.attributes;
};
Comment.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Comment.prototype.getChildNodes = function () {
	return this.childNodes;
};
Comment.prototype.getData = function () {
	return this.data;
};
Comment.prototype.getFirstChild = function () {
	return this.firstChild;
};
Comment.prototype.getLastChild = function () {
	return this.lastChild;
};
Comment.prototype.getLength = function () {
	return this.length;
};
Comment.prototype.getLocalName = function () {
	return this.localName;
};
Comment.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Comment.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Comment.prototype.getNodeName = function () {
	return this.nodeName;
};
Comment.prototype.getNodeType = function () {
	return this.nodeType;
};
Comment.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Comment.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Comment.prototype.getParentNode = function () {
	return this.parentNode;
};
Comment.prototype.getPrefix = function () {
	return this.prefix;
};
Comment.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Comment.prototype.getText = function () {
	throw new Error('Ti.XML.Comment.getText was deprecated, since 2.0.0');
};
Comment.prototype.getTextContent = function () {
	return this.textContent;
};
Comment.prototype.hasAttributes = function () {
	return true;
};
Comment.prototype.hasChildNodes = function () {
	return true;
};
Comment.prototype.insertBefore = function () {
	return {};
};
Comment.prototype.insertData = function () {
};
Comment.prototype.isSupported = function () {
	return true;
};
Comment.prototype.normalize = function () {
};
Comment.prototype.removeChild = function () {
	return {};
};
Comment.prototype.removeEventListener = function () {
};
Comment.prototype.replaceChild = function () {
	return {};
};
Comment.prototype.replaceData = function () {
};
Comment.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Comment.prototype.setData = function (property) {
	this.data = property;
};
Comment.prototype.setLocalName = function (property) {
	this.localName = property;
};
Comment.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Comment.prototype.setPrefix = function (property) {
	this.prefix = property;
};
Comment.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new Comment(properties);
};