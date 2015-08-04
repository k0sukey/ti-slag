var crypto = require('crypto');
function LocationProvider(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'name',
			'minUpdateTime',
			'minUpdateDistance',
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
		throw new Error('Ti.Geolocation.Android.LocationProvider.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.Android.LocationProvider';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.name = __SLAG__properties.name || '';
	this.minUpdateTime = __SLAG__properties.minUpdateTime || 0;
	this.minUpdateDistance = __SLAG__properties.minUpdateDistance || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
LocationProvider.prototype.addEventListener = function () {
};
LocationProvider.prototype.removeEventListener = function () {
};
LocationProvider.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
LocationProvider.prototype.fireEvent = function () {
};
LocationProvider.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LocationProvider.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LocationProvider.prototype.getApiName = function () {
	return this.apiName;
};
LocationProvider.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
LocationProvider.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
LocationProvider.prototype.getName = function () {
	return this.name;
};
LocationProvider.prototype.setName = function (property) {
	this.name = property;
};
LocationProvider.prototype.getMinUpdateTime = function () {
	return this.minUpdateTime;
};
LocationProvider.prototype.setMinUpdateTime = function (property) {
	this.minUpdateTime = property;
};
LocationProvider.prototype.getMinUpdateDistance = function () {
	return this.minUpdateDistance;
};
LocationProvider.prototype.setMinUpdateDistance = function (property) {
	this.minUpdateDistance = property;
};
module.exports = function (properties) {
	return new LocationProvider(properties);
};