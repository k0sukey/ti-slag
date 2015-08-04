var crypto = require('crypto');
function BufferStream(__SLAG__properties) {
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
		throw new Error('Ti.BufferStream.apiName is read only property');
	}
	this.apiName = 'Ti.BufferStream';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
BufferStream.prototype.addEventListener = function () {
};
BufferStream.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
BufferStream.prototype.close = function () {
};
BufferStream.prototype.fireEvent = function () {
};
BufferStream.prototype.getApiName = function () {
	return this.apiName;
};
BufferStream.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BufferStream.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
BufferStream.prototype.isReadable = function () {
	return true;
};
BufferStream.prototype.isWriteable = function () {
	return true;
};
BufferStream.prototype.read = function () {
	return 0;
};
BufferStream.prototype.removeEventListener = function () {
};
BufferStream.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BufferStream.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
BufferStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new BufferStream(properties);
};