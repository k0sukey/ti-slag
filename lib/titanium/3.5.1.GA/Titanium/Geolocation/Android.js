var crypto = require('crypto');
function Android(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'manualMode',
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
		throw new Error('Ti.Geolocation.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.Android';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.manualMode = __SLAG__properties.manualMode || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.addLocationProvider = function () {
};
Android.prototype.addLocationRule = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Android.prototype.createLocationProvider = function (params) {
	var LocationProvider = require('./Android/LocationProvider');
	return LocationProvider(params);
};
Android.prototype.createLocationRule = function (params) {
	var LocationRule = require('./Android/LocationRule');
	return LocationRule(params);
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getManualMode = function () {
	return this.manualMode;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.removeLocationProvider = function () {
};
Android.prototype.removeLocationRule = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Android.prototype.setManualMode = function (property) {
	this.manualMode = property;
};
module.exports = function (properties) {
	return new Android(properties);
};