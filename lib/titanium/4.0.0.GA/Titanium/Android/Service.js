var crypto = require('crypto');
function Service(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'intent',
			'lifecycleContainer',
			'serviceInstanceId',
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
		throw new Error('Ti.Android.Service.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Service';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.intent) {
		throw new Error('Ti.Android.Service.intent is read only property');
	}
	this.intent = {};
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.serviceInstanceId) {
		throw new Error('Ti.Android.Service.serviceInstanceId is read only property');
	}
	this.serviceInstanceId = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Service.prototype.addEventListener = function () {
};
Service.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Service.prototype.fireEvent = function () {
};
Service.prototype.getApiName = function () {
	return this.apiName;
};
Service.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Service.prototype.getIntent = function () {
	return this.intent;
};
Service.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Service.prototype.getServiceInstanceId = function () {
	return this.serviceInstanceId;
};
Service.prototype.removeEventListener = function () {
};
Service.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Service.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Service.prototype.start = function () {
};
Service.prototype.stop = function () {
};
module.exports = function (properties) {
	return new Service(properties);
};