var crypto = require('crypto');
function Checkins(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
		throw new Error('Modules.Cloud.Checkins.apiName is read only property');
	}
	this.apiName = 'Modules.Cloud.Checkins';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Checkins.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Checkins.prototype.create = function () {
};
Checkins.prototype.getApiName = function () {
	return this.apiName;
};
Checkins.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Checkins.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Checkins.prototype.query = function () {
};
Checkins.prototype.remove = function () {
};
Checkins.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Checkins.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Checkins.prototype.show = function () {
};
module.exports = function (properties) {
	return new Checkins(properties);
};