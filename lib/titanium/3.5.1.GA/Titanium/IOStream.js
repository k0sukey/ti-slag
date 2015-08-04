var crypto = require('crypto');
function IOStream(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
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
		throw new Error('Ti.IOStream.apiName is read only property');
	}
	this.apiName = 'Ti.IOStream';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
IOStream.prototype.addEventListener = function () {
};
IOStream.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
IOStream.prototype.close = function () {
};
IOStream.prototype.fireEvent = function () {
};
IOStream.prototype.getApiName = function () {
	return this.apiName;
};
IOStream.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
IOStream.prototype.isReadable = function () {
	return true;
};
IOStream.prototype.isWriteable = function () {
	return true;
};
IOStream.prototype.read = function () {
	return 0;
};
IOStream.prototype.removeEventListener = function () {
};
IOStream.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
IOStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new IOStream(properties);
};