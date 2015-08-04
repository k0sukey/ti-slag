var crypto = require('crypto');
function Accelerometer(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
		throw new Error('Ti.Accelerometer.apiName is read only property');
	}
	this.apiName = 'Ti.Accelerometer';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Accelerometer.prototype.addEventListener = function () {
};
Accelerometer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Accelerometer.prototype.fireEvent = function () {
};
Accelerometer.prototype.getApiName = function () {
	return this.apiName;
};
Accelerometer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Accelerometer.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Accelerometer.prototype.removeEventListener = function () {
};
Accelerometer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Accelerometer.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Accelerometer(properties);
};