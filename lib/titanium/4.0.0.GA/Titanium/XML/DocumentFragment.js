var crypto = require('crypto');
function DocumentFragment(__SLAG__properties) {
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
		throw new Error('Ti.XML.DocumentFragment.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG__properties.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG__properties.COMMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG__properties.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.DocumentFragment.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG__properties.ELEMENT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG__properties.ENTITY_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG__properties.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.DocumentFragment.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG__properties.NOTATION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG__properties.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.DocumentFragment.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG__properties.TEXT_NODE) {
		throw new Error('Ti.XML.DocumentFragment.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.DocumentFragment.apiName is read only property');
	}
	this.apiName = 'Ti.XML.DocumentFragment';
	if (__SLAG__properties.attributes) {
		throw new Error('Ti.XML.DocumentFragment.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.childNodes) {
		throw new Error('Ti.XML.DocumentFragment.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG__properties.firstChild) {
		throw new Error('Ti.XML.DocumentFragment.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG__properties.lastChild) {
		throw new Error('Ti.XML.DocumentFragment.lastChild is read only property');
	}
	this.lastChild = {};
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.localName = __SLAG__properties.localName || '';
	if (__SLAG__properties.namespaceURI) {
		throw new Error('Ti.XML.DocumentFragment.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG__properties.nextSibling) {
		throw new Error('Ti.XML.DocumentFragment.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG__properties.nodeName) {
		throw new Error('Ti.XML.DocumentFragment.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG__properties.nodeType) {
		throw new Error('Ti.XML.DocumentFragment.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG__properties.nodeValue || '';
	if (__SLAG__properties.ownerDocument) {
		throw new Error('Ti.XML.DocumentFragment.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG__properties.parentNode) {
		throw new Error('Ti.XML.DocumentFragment.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG__properties.prefix || '';
	if (__SLAG__properties.previousSibling) {
		throw new Error('Ti.XML.DocumentFragment.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG__properties.text) {
		throw new Error('Ti.XML.DocumentFragment.text was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.textContent) {
		throw new Error('Ti.XML.DocumentFragment.textContent is read only property');
	}
	this.textContent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
DocumentFragment.prototype.addEventListener = function () {
};
DocumentFragment.prototype.appendChild = function () {
	return {};
};
DocumentFragment.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DocumentFragment.prototype.cloneNode = function () {
	return {};
};
DocumentFragment.prototype.fireEvent = function () {
};
DocumentFragment.prototype.getApiName = function () {
	return this.apiName;
};
DocumentFragment.prototype.getAttributes = function () {
	return this.attributes;
};
DocumentFragment.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DocumentFragment.prototype.getChildNodes = function () {
	return this.childNodes;
};
DocumentFragment.prototype.getFirstChild = function () {
	return this.firstChild;
};
DocumentFragment.prototype.getLastChild = function () {
	return this.lastChild;
};
DocumentFragment.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
DocumentFragment.prototype.getLocalName = function () {
	return this.localName;
};
DocumentFragment.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
DocumentFragment.prototype.getNextSibling = function () {
	return this.nextSibling;
};
DocumentFragment.prototype.getNodeName = function () {
	return this.nodeName;
};
DocumentFragment.prototype.getNodeType = function () {
	return this.nodeType;
};
DocumentFragment.prototype.getNodeValue = function () {
	return this.nodeValue;
};
DocumentFragment.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
DocumentFragment.prototype.getParentNode = function () {
	return this.parentNode;
};
DocumentFragment.prototype.getPrefix = function () {
	return this.prefix;
};
DocumentFragment.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
DocumentFragment.prototype.getText = function () {
	throw new Error('Ti.XML.DocumentFragment.getText was deprecated, since 2.0.0');
};
DocumentFragment.prototype.getTextContent = function () {
	return this.textContent;
};
DocumentFragment.prototype.hasAttributes = function () {
	return true;
};
DocumentFragment.prototype.hasChildNodes = function () {
	return true;
};
DocumentFragment.prototype.insertBefore = function () {
	return {};
};
DocumentFragment.prototype.isSupported = function () {
	return true;
};
DocumentFragment.prototype.normalize = function () {
};
DocumentFragment.prototype.removeChild = function () {
	return {};
};
DocumentFragment.prototype.removeEventListener = function () {
};
DocumentFragment.prototype.replaceChild = function () {
	return {};
};
DocumentFragment.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DocumentFragment.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
DocumentFragment.prototype.setLocalName = function (property) {
	this.localName = property;
};
DocumentFragment.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
DocumentFragment.prototype.setPrefix = function (property) {
	this.prefix = property;
};
module.exports = function (properties) {
	return new DocumentFragment(properties);
};