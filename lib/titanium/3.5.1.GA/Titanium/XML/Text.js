var crypto = require('crypto');
function Text(__SLAG__properties) {
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
		throw new Error('Ti.XML.Text.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Text.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.Text.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Text.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Text.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Text.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.Text.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.Text.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Text.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.Text.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Text.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.Text.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.Text.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Text';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.Text.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.Text.childNodes is read only property');
	}
	this.childNodes = {};
	this.data = __SLAG__properties.data || '';
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.Text.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.Text.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.length) {
		throw new Error('Ti.XML.Text.length is read only property');
	}
	this.length = 0;
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.Text.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.Text.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.Text.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.Text.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.Text.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.Text.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.Text.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.Text.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.Text.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Text.prototype.addEventListener = function () {
};
Text.prototype.appendChild = function () {
	return {};
};
Text.prototype.appendData = function () {
};
Text.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Text.prototype.cloneNode = function () {
	return {};
};
Text.prototype.deleteData = function () {
};
Text.prototype.fireEvent = function () {
};
Text.prototype.getApiName = function () {
	return this.apiName;
};
Text.prototype.getAttributes = function () {
	return this.attributes;
};
Text.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Text.prototype.getChildNodes = function () {
	return this.childNodes;
};
Text.prototype.getData = function () {
	return this.data;
};
Text.prototype.getFirstChild = function () {
	return this.firstChild;
};
Text.prototype.getLastChild = function () {
	return this.lastChild;
};
Text.prototype.getLength = function () {
	return this.length;
};
Text.prototype.getLocalName = function () {
	return this.localName;
};
Text.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
Text.prototype.getNextSibling = function () {
	return this.nextSibling;
};
Text.prototype.getNodeName = function () {
	return this.nodeName;
};
Text.prototype.getNodeType = function () {
	return this.nodeType;
};
Text.prototype.getNodeValue = function () {
	return this.nodeValue;
};
Text.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
Text.prototype.getParentNode = function () {
	return this.parentNode;
};
Text.prototype.getPrefix = function () {
	return this.prefix;
};
Text.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
Text.prototype.getText = function () {
	throw new Error('Ti.XML.Text.getText was deprecated, since 2.0.0');
};
Text.prototype.getTextContent = function () {
	return this.textContent;
};
Text.prototype.hasAttributes = function () {
	return true;
};
Text.prototype.hasChildNodes = function () {
	return true;
};
Text.prototype.insertBefore = function () {
	return {};
};
Text.prototype.insertData = function () {
};
Text.prototype.isSupported = function () {
	return true;
};
Text.prototype.normalize = function () {
};
Text.prototype.removeChild = function () {
	return {};
};
Text.prototype.removeEventListener = function () {
};
Text.prototype.replaceChild = function () {
	return {};
};
Text.prototype.replaceData = function () {
};
Text.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Text.prototype.setData = function (property) {
	this.data = property;
};
Text.prototype.setLocalName = function (property) {
	this.localName = property;
};
Text.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
Text.prototype.setPrefix = function (property) {
	this.prefix = property;
};
Text.prototype.splitText = function () {
	return {};
};
Text.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new Text(properties);
};