var crypto = require('crypto');
function LocationRule(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accuracy',
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
			'maxAge',
			'minAge',
			'name',
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
	this.accuracy = __SLAG__properties.accuracy || 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Geolocation.Android.LocationRule.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.Android.LocationRule';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.maxAge = __SLAG__properties.maxAge || 0;
	this.minAge = __SLAG__properties.minAge || 0;
	this.name = __SLAG__properties.name || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
LocationRule.prototype.addEventListener = function () {
};
LocationRule.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
LocationRule.prototype.fireEvent = function () {
};
LocationRule.prototype.getAccuracy = function () {
	return this.accuracy;
};
LocationRule.prototype.getApiName = function () {
	return this.apiName;
};
LocationRule.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LocationRule.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
LocationRule.prototype.getMaxAge = function () {
	return this.maxAge;
};
LocationRule.prototype.getMinAge = function () {
	return this.minAge;
};
LocationRule.prototype.getName = function () {
	return this.name;
};
LocationRule.prototype.removeEventListener = function () {
};
LocationRule.prototype.setAccuracy = function (property) {
	this.accuracy = property;
};
LocationRule.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LocationRule.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
LocationRule.prototype.setMaxAge = function (property) {
	this.maxAge = property;
};
LocationRule.prototype.setMinAge = function (property) {
	this.minAge = property;
};
LocationRule.prototype.setName = function (property) {
	this.name = property;
};
module.exports = function (properties) {
	return new LocationRule(properties);
};