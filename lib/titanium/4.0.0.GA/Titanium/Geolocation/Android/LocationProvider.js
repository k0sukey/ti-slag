var crypto = require('crypto');
function LocationProvider(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
			'minUpdateDistance',
			'minUpdateTime',
			'name',
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
		throw new Error('Ti.Geolocation.Android.LocationProvider.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.Android.LocationProvider';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.minUpdateDistance = __SLAG__properties.minUpdateDistance || 0;
	this.minUpdateTime = __SLAG__properties.minUpdateTime || 0;
	this.name = __SLAG__properties.name || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
LocationProvider.prototype.addEventListener = function () {
};
LocationProvider.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
LocationProvider.prototype.fireEvent = function () {
};
LocationProvider.prototype.getApiName = function () {
	return this.apiName;
};
LocationProvider.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LocationProvider.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
LocationProvider.prototype.getMinUpdateDistance = function () {
	return this.minUpdateDistance;
};
LocationProvider.prototype.getMinUpdateTime = function () {
	return this.minUpdateTime;
};
LocationProvider.prototype.getName = function () {
	return this.name;
};
LocationProvider.prototype.removeEventListener = function () {
};
LocationProvider.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LocationProvider.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
LocationProvider.prototype.setMinUpdateDistance = function (property) {
	this.minUpdateDistance = property;
};
LocationProvider.prototype.setMinUpdateTime = function (property) {
	this.minUpdateTime = property;
};
LocationProvider.prototype.setName = function (property) {
	this.name = property;
};
module.exports = function (properties) {
	return new LocationProvider(properties);
};