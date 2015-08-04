var crypto = require('crypto');
function Notation(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
			'publicId',
			'systemId',
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
		throw new Error('Ti.XML.Notation.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Notation';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.publicId) {
		throw new Error('Ti.XML.Notation.publicId is read only property');
	}
	this.publicId = '';
	if (__SLAG__properties.systemId) {
		throw new Error('Ti.XML.Notation.systemId is read only property');
	}
	this.systemId = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Notation.prototype.addEventListener = function () {
};
Notation.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Notation.prototype.fireEvent = function () {
};
Notation.prototype.getApiName = function () {
	return this.apiName;
};
Notation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Notation.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Notation.prototype.getPublicId = function () {
	return this.publicId;
};
Notation.prototype.getSystemId = function () {
	return this.systemId;
};
Notation.prototype.removeEventListener = function () {
};
Notation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Notation.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Notation(properties);
};