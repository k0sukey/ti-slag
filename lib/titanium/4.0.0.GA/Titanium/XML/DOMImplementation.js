var crypto = require('crypto');
function DOMImplementation(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.DOMImplementation.apiName is read only property');
	}
	this.apiName = 'Ti.XML.DOMImplementation';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
DOMImplementation.prototype.addEventListener = function () {
};
DOMImplementation.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DOMImplementation.prototype.createDocument = function (params) {
	var Document = require('./DOMImplementation/Document');
	return Document(params);
};
DOMImplementation.prototype.createDocumentType = function (params) {
	var DocumentType = require('./DOMImplementation/DocumentType');
	return DocumentType(params);
};
DOMImplementation.prototype.fireEvent = function () {
};
DOMImplementation.prototype.getApiName = function () {
	return this.apiName;
};
DOMImplementation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DOMImplementation.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
DOMImplementation.prototype.hasFeature = function () {
	return true;
};
DOMImplementation.prototype.removeEventListener = function () {
};
DOMImplementation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DOMImplementation.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new DOMImplementation(properties);
};