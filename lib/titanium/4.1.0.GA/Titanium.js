var crypto = require('crypto');
function Titanium(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'version',
			'buildDate',
			'buildHash',
			'userAgent',
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
		throw new Error('Ti.apiName is read only property');
	}
	this.apiName = 'Ti';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.version) {
		throw new Error('Ti.version is read only property');
	}
	this.version = '';
	if (__SLAG__properties.buildDate) {
		throw new Error('Ti.buildDate is read only property');
	}
	this.buildDate = '';
	if (__SLAG__properties.buildHash) {
		throw new Error('Ti.buildHash is read only property');
	}
	this.buildHash = '';
	this.userAgent = __SLAG__properties.userAgent || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Titanium.prototype.addEventListener = function () {
};
Titanium.prototype.removeEventListener = function () {
};
Titanium.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Titanium.prototype.fireEvent = function () {
};
Titanium.prototype.include = function () {
	throw new Error('Ti.include was deprecated, since 3.3.0');
};
Titanium.prototype.createBuffer = function (params) {
	var Buffer = require('./Titanium/Buffer');
	return Buffer(params);
};
Titanium.prototype.createProxy = function (params) {
	var Proxy = require('./Titanium/Proxy');
	return Proxy(params);
};
Titanium.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Titanium.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Titanium.prototype.getApiName = function () {
	return this.apiName;
};
Titanium.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Titanium.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Titanium.prototype.getVersion = function () {
	return this.version;
};
Titanium.prototype.getBuildDate = function () {
	return this.buildDate;
};
Titanium.prototype.getBuildHash = function () {
	return this.buildHash;
};
Titanium.prototype.getUserAgent = function () {
	return this.userAgent;
};
Titanium.prototype.setUserAgent = function (property) {
	this.userAgent = property;
};
module.exports = function (properties) {
	return new Titanium(properties);
};