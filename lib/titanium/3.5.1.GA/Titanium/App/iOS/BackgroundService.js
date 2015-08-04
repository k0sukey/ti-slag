var crypto = require('crypto');
function BackgroundService(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'url',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.iOS.BackgroundService.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.BackgroundService';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.url = __SLAG__properties.url || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
BackgroundService.prototype.addEventListener = function () {
};
BackgroundService.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
BackgroundService.prototype.fireEvent = function () {
};
BackgroundService.prototype.getApiName = function () {
	return this.apiName;
};
BackgroundService.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BackgroundService.prototype.getUrl = function () {
	return this.url;
};
BackgroundService.prototype.removeEventListener = function () {
};
BackgroundService.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BackgroundService.prototype.stop = function () {
};
BackgroundService.prototype.unregister = function () {
};
module.exports = function (properties) {
	return new BackgroundService(properties);
};