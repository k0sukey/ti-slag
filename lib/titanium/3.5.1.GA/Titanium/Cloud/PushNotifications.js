var crypto = require('crypto');
function PushNotifications(__SLAG__properties) {
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
		throw new Error('Ti.Cloud.PushNotifications.apiName is read only property');
	}
	this.apiName = 'Ti.Cloud.PushNotifications';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
PushNotifications.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
PushNotifications.prototype.getApiName = function () {
	return this.apiName;
};
PushNotifications.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PushNotifications.prototype.notify = function () {
};
PushNotifications.prototype.notifyTokens = function () {
};
PushNotifications.prototype.query = function () {
};
PushNotifications.prototype.queryChannels = function () {
};
PushNotifications.prototype.resetBadge = function () {
};
PushNotifications.prototype.setBadge = function () {
};
PushNotifications.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PushNotifications.prototype.showChannels = function () {
};
PushNotifications.prototype.subscribe = function () {
};
PushNotifications.prototype.subscribeToken = function () {
};
PushNotifications.prototype.unsubscribe = function () {
};
PushNotifications.prototype.unsubscribeToken = function () {
};
PushNotifications.prototype.updateSubscription = function () {
};
module.exports = function (properties) {
	return new PushNotifications(properties);
};