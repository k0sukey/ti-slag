var crypto = require('crypto');
function Stream(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'MODE_READ',
			'MODE_WRITE',
			'MODE_APPEND',
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
		throw new Error('Ti.Stream.apiName is read only property');
	}
	this.apiName = 'Ti.Stream';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.MODE_READ) {
		throw new Error('Ti.Stream.MODE_READ is read only property');
	}
	this.MODE_READ = 0;
	if (__SLAG__properties.MODE_WRITE) {
		throw new Error('Ti.Stream.MODE_WRITE is read only property');
	}
	this.MODE_WRITE = 0;
	if (__SLAG__properties.MODE_APPEND) {
		throw new Error('Ti.Stream.MODE_APPEND is read only property');
	}
	this.MODE_APPEND = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Stream.prototype.addEventListener = function () {
};
Stream.prototype.removeEventListener = function () {
};
Stream.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Stream.prototype.fireEvent = function () {
};
Stream.prototype.createStream = function (params) {
	var Stream = require('./Stream/Stream');
	return Stream(params);
};
Stream.prototype.read = function () {
};
Stream.prototype.readAll = function () {
	return {};
};
Stream.prototype.write = function () {
};
Stream.prototype.writeStream = function () {
};
Stream.prototype.pump = function () {
};
Stream.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Stream.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Stream.prototype.getApiName = function () {
	return this.apiName;
};
Stream.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Stream.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Stream(properties);
};