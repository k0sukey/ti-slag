var crypto = require('crypto');
function CDATASection(__SLAG__properties) {
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
		throw new Error('Ti.XML.CDATASection.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.CDATASection.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.CDATASection.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.CDATASection.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.CDATASection.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.CDATASection.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.CDATASection.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.CDATASection.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.CDATASection.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.CDATASection.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.CDATASection.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.CDATASection.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.CDATASection.apiName is read only property');
	}
	this.apiName = 'Ti.XML.CDATASection';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.CDATASection.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.CDATASection.childNodes is read only property');
	}
	this.childNodes = {};
	this.data = __SLAG__properties.data || '';
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.CDATASection.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.CDATASection.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG__properties.length) {
		throw new Error('Ti.XML.CDATASection.length is read only property');
	}
	this.length = 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.CDATASection.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.CDATASection.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.CDATASection.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.CDATASection.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.CDATASection.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.CDATASection.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.CDATASection.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.CDATASection.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.CDATASection.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
CDATASection.prototype.addEventListener = function () {
};
CDATASection.prototype.appendChild = function () {
	return {};
};
CDATASection.prototype.appendData = function () {
};
CDATASection.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CDATASection.prototype.cloneNode = function () {
	return {};
};
CDATASection.prototype.deleteData = function () {
};
CDATASection.prototype.fireEvent = function () {
};
CDATASection.prototype.getApiName = function () {
	return this.apiName;
};
CDATASection.prototype.getAttributes = function () {
	return this.attributes;
};
CDATASection.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CDATASection.prototype.getChildNodes = function () {
	return this.childNodes;
};
CDATASection.prototype.getData = function () {
	return this.data;
};
CDATASection.prototype.getFirstChild = function () {
	return this.firstChild;
};
CDATASection.prototype.getLastChild = function () {
	return this.lastChild;
};
CDATASection.prototype.getLength = function () {
	return this.length;
};
CDATASection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
CDATASection.prototype.getLocalName = function () {
	return this.localName;
};
CDATASection.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
CDATASection.prototype.getNextSibling = function () {
	return this.nextSibling;
};
CDATASection.prototype.getNodeName = function () {
	return this.nodeName;
};
CDATASection.prototype.getNodeType = function () {
	return this.nodeType;
};
CDATASection.prototype.getNodeValue = function () {
	return this.nodeValue;
};
CDATASection.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
CDATASection.prototype.getParentNode = function () {
	return this.parentNode;
};
CDATASection.prototype.getPrefix = function () {
	return this.prefix;
};
CDATASection.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
CDATASection.prototype.getText = function () {
	throw new Error('Ti.XML.CDATASection.getText was deprecated, since 2.0.0');
};
CDATASection.prototype.getTextContent = function () {
	return this.textContent;
};
CDATASection.prototype.hasAttributes = function () {
	return true;
};
CDATASection.prototype.hasChildNodes = function () {
	return true;
};
CDATASection.prototype.insertBefore = function () {
	return {};
};
CDATASection.prototype.insertData = function () {
};
CDATASection.prototype.isSupported = function () {
	return true;
};
CDATASection.prototype.normalize = function () {
};
CDATASection.prototype.removeChild = function () {
	return {};
};
CDATASection.prototype.removeEventListener = function () {
};
CDATASection.prototype.replaceChild = function () {
	return {};
};
CDATASection.prototype.replaceData = function () {
};
CDATASection.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CDATASection.prototype.setData = function (property) {
	this.data = property;
};
CDATASection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
CDATASection.prototype.setLocalName = function (property) {
	this.localName = property;
};
CDATASection.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
CDATASection.prototype.setPrefix = function (property) {
	this.prefix = property;
};
CDATASection.prototype.splitText = function () {
	return {};
};
CDATASection.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CDATASection(properties);
};