var crypto = require('crypto');
function FileStream(__SLAG__properties) {
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
		throw new Error('Ti.Filesystem.FileStream.apiName is read only property');
	}
	this.apiName = 'Ti.Filesystem.FileStream';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
FileStream.prototype.addEventListener = function () {
};
FileStream.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
FileStream.prototype.close = function () {
};
FileStream.prototype.fireEvent = function () {
};
FileStream.prototype.getApiName = function () {
	return this.apiName;
};
FileStream.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
FileStream.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
FileStream.prototype.isReadable = function () {
	return true;
};
FileStream.prototype.isWriteable = function () {
	return true;
};
FileStream.prototype.read = function () {
	return 0;
};
FileStream.prototype.removeEventListener = function () {
};
FileStream.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
FileStream.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
FileStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new FileStream(properties);
};