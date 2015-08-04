var crypto = require('crypto');
function LocalNotification(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
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
		throw new Error('Ti.App.iOS.LocalNotification.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.LocalNotification';
	this.id = __SLAG__properties.id || '';
	return this;
}
LocalNotification.prototype.addEventListener = function () {
};
LocalNotification.prototype.removeEventListener = function () {
};
LocalNotification.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
LocalNotification.prototype.fireEvent = function () {
};
LocalNotification.prototype.cancel = function () {
};
LocalNotification.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LocalNotification.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LocalNotification.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new LocalNotification(properties);
};