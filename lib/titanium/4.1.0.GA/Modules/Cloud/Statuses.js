var crypto = require('crypto');
function Statuses(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Cloud.Statuses.apiName is read only property');
	}
	this.apiName = 'Modules.Cloud.Statuses';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Statuses.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Statuses.prototype.create = function () {
};
Statuses.prototype.update = function () {
};
Statuses.prototype.show = function () {
};
Statuses.prototype.delete = function () {
};
Statuses.prototype.query = function () {
};
Statuses.prototype.search = function () {
};
Statuses.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Statuses.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Statuses.prototype.getApiName = function () {
	return this.apiName;
};
Statuses.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Statuses.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Statuses(properties);
};