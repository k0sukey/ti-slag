var crypto = require('crypto');
function Places(__SLAG__properties) {
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
		throw new Error('Modules.Cloud.Places.apiName is read only property');
	}
	this.apiName = 'Modules.Cloud.Places';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Places.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Places.prototype.create = function () {
};
Places.prototype.getApiName = function () {
	return this.apiName;
};
Places.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Places.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Places.prototype.query = function () {
};
Places.prototype.remove = function () {
};
Places.prototype.search = function () {
};
Places.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Places.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Places.prototype.show = function () {
};
Places.prototype.update = function () {
};
module.exports = function (properties) {
	return new Places(properties);
};