var crypto = require('crypto');
function Android(__SLAG__properties) {
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
		throw new Error('Ti.Media.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Media.Android';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.scanMediaFiles = function () {
};
Android.prototype.setSystemWallpaper = function () {
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Android.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Android(properties);
};