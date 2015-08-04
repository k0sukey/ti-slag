var crypto = require('crypto');
function BroadcastReceiver(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
			'onReceived',
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
		throw new Error('Ti.Android.BroadcastReceiver.apiName is read only property');
	}
	this.apiName = 'Ti.Android.BroadcastReceiver';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.onReceived = __SLAG__properties.onReceived || {};
	this.url = __SLAG__properties.url || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
BroadcastReceiver.prototype.addEventListener = function () {
};
BroadcastReceiver.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
BroadcastReceiver.prototype.fireEvent = function () {
};
BroadcastReceiver.prototype.getApiName = function () {
	return this.apiName;
};
BroadcastReceiver.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BroadcastReceiver.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
BroadcastReceiver.prototype.getOnReceived = function () {
	return this.onReceived;
};
BroadcastReceiver.prototype.getUrl = function () {
	return this.url;
};
BroadcastReceiver.prototype.removeEventListener = function () {
};
BroadcastReceiver.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BroadcastReceiver.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
BroadcastReceiver.prototype.setOnReceived = function (property) {
	this.onReceived = property;
};
BroadcastReceiver.prototype.setUrl = function (property) {
	this.url = property;
};
module.exports = function (properties) {
	return new BroadcastReceiver(properties);
};