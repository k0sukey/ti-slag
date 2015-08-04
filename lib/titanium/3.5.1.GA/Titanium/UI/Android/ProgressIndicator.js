var crypto = require('crypto');
function ProgressIndicator(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'cancelable',
			'location',
			'max',
			'message',
			'messageid',
			'min',
			'type',
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
		throw new Error('Ti.UI.Android.ProgressIndicator.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android.ProgressIndicator';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.cancelable = __SLAG__properties.cancelable || true;
	this.location = __SLAG__properties.location || 0;
	this.max = __SLAG__properties.max || 0;
	this.message = __SLAG__properties.message || '';
	this.messageid = __SLAG__properties.messageid || '';
	this.min = __SLAG__properties.min || 0;
	this.type = __SLAG__properties.type || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ProgressIndicator.prototype.addEventListener = function () {
};
ProgressIndicator.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ProgressIndicator.prototype.fireEvent = function () {
};
ProgressIndicator.prototype.getApiName = function () {
	return this.apiName;
};
ProgressIndicator.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProgressIndicator.prototype.getCancelable = function () {
	return this.cancelable;
};
ProgressIndicator.prototype.getLocation = function () {
	return this.location;
};
ProgressIndicator.prototype.getMax = function () {
	return this.max;
};
ProgressIndicator.prototype.getMessage = function () {
	return this.message;
};
ProgressIndicator.prototype.getMessageid = function () {
	return this.messageid;
};
ProgressIndicator.prototype.getMin = function () {
	return this.min;
};
ProgressIndicator.prototype.getType = function () {
	return this.type;
};
ProgressIndicator.prototype.hide = function () {
};
ProgressIndicator.prototype.removeEventListener = function () {
};
ProgressIndicator.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ProgressIndicator.prototype.setCancelable = function (property) {
	this.cancelable = property;
};
ProgressIndicator.prototype.setLocation = function (property) {
	this.location = property;
};
ProgressIndicator.prototype.setMax = function (property) {
	this.max = property;
};
ProgressIndicator.prototype.setMessage = function (property) {
	this.message = property;
};
ProgressIndicator.prototype.setMessageid = function (property) {
	this.messageid = property;
};
ProgressIndicator.prototype.setMin = function (property) {
	this.min = property;
};
ProgressIndicator.prototype.setType = function (property) {
	this.type = property;
};
ProgressIndicator.prototype.show = function () {
};
module.exports = function (properties) {
	return new ProgressIndicator(properties);
};