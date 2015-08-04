var crypto = require('crypto');
function Yahoo(__SLAG__properties) {
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
		throw new Error('Ti.Yahoo.apiName is read only property');
	}
	this.apiName = 'Ti.Yahoo';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Yahoo.prototype.addEventListener = function () {
};
Yahoo.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Yahoo.prototype.fireEvent = function () {
};
Yahoo.prototype.getApiName = function () {
	return this.apiName;
};
Yahoo.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Yahoo.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Yahoo.prototype.removeEventListener = function () {
};
Yahoo.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Yahoo.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Yahoo.prototype.yql = function () {
};
module.exports = function (properties) {
	return new Yahoo(properties);
};