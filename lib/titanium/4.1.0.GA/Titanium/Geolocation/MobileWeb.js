var crypto = require('crypto');
function MobileWeb(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'locationTimeout',
			'maximumLocationAge',
			'maximumHeadingAge',
			'forwardGeocoderTimeout',
			'reverseGeocoderTimeout',
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
		throw new Error('Ti.Geolocation.MobileWeb.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.MobileWeb';
	this.locationTimeout = __SLAG__properties.locationTimeout || 0;
	this.maximumLocationAge = __SLAG__properties.maximumLocationAge || 0;
	this.maximumHeadingAge = __SLAG__properties.maximumHeadingAge || 0;
	this.forwardGeocoderTimeout = __SLAG__properties.forwardGeocoderTimeout || 0;
	this.reverseGeocoderTimeout = __SLAG__properties.reverseGeocoderTimeout || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
MobileWeb.prototype.addEventListener = function () {
};
MobileWeb.prototype.removeEventListener = function () {
};
MobileWeb.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
MobileWeb.prototype.fireEvent = function () {
};
MobileWeb.prototype.getApiName = function () {
	return this.apiName;
};
MobileWeb.prototype.getLocationTimeout = function () {
	return this.locationTimeout;
};
MobileWeb.prototype.setLocationTimeout = function (property) {
	this.locationTimeout = property;
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	return this.maximumLocationAge;
};
MobileWeb.prototype.setMaximumLocationAge = function (property) {
	this.maximumLocationAge = property;
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	return this.maximumHeadingAge;
};
MobileWeb.prototype.setMaximumHeadingAge = function (property) {
	this.maximumHeadingAge = property;
};
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	return this.forwardGeocoderTimeout;
};
MobileWeb.prototype.setForwardGeocoderTimeout = function (property) {
	this.forwardGeocoderTimeout = property;
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	return this.reverseGeocoderTimeout;
};
MobileWeb.prototype.setReverseGeocoderTimeout = function (property) {
	this.reverseGeocoderTimeout = property;
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};