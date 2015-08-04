var crypto = require('crypto');
function XML(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.apiName is read only property');
	}
	this.apiName = 'Ti.XML';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
XML.prototype.addEventListener = function () {
};
XML.prototype.removeEventListener = function () {
};
XML.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
XML.prototype.fireEvent = function () {
};
XML.prototype.parseString = function () {
	return {};
};
XML.prototype.serializeToString = function () {
	return '';
};
XML.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
XML.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
XML.prototype.getApiName = function () {
	return this.apiName;
};
XML.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
XML.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new XML(properties);
};