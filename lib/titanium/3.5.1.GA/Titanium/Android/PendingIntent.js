var crypto = require('crypto');
function PendingIntent(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'flags',
			'intent',
			'updateCurrentIntent',
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
		throw new Error('Ti.Android.PendingIntent.apiName is read only property');
	}
	this.apiName = 'Ti.Android.PendingIntent';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.flags = __SLAG__properties.flags || 0;
	this.intent = __SLAG__properties.intent || {};
	this.updateCurrentIntent = __SLAG__properties.updateCurrentIntent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
PendingIntent.prototype.addEventListener = function () {
};
PendingIntent.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
PendingIntent.prototype.fireEvent = function () {
};
PendingIntent.prototype.getApiName = function () {
	return this.apiName;
};
PendingIntent.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PendingIntent.prototype.getFlags = function () {
	return this.flags;
};
PendingIntent.prototype.getIntent = function () {
	return this.intent;
};
PendingIntent.prototype.getUpdateCurrentIntent = function () {
	return this.updateCurrentIntent;
};
PendingIntent.prototype.removeEventListener = function () {
};
PendingIntent.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new PendingIntent(properties);
};