var crypto = require('crypto');
function Properties(__SLAG__properties) {
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
		throw new Error('Ti.App.Properties.apiName is read only property');
	}
	this.apiName = 'Ti.App.Properties';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Properties.prototype.addEventListener = function () {
};
Properties.prototype.removeEventListener = function () {
};
Properties.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Properties.prototype.fireEvent = function () {
};
Properties.prototype.getBool = function () {
	return true;
};
Properties.prototype.getDouble = function () {
	return 0;
};
Properties.prototype.getInt = function () {
	return 0;
};
Properties.prototype.getList = function () {
	return [];
};
Properties.prototype.getObject = function () {
	return {};
};
Properties.prototype.getString = function () {
	return '';
};
Properties.prototype.hasProperty = function () {
	return true;
};
Properties.prototype.listProperties = function () {
	return [];
};
Properties.prototype.removeProperty = function () {
};
Properties.prototype.setBool = function () {
};
Properties.prototype.setDouble = function () {
};
Properties.prototype.setInt = function () {
};
Properties.prototype.setList = function () {
};
Properties.prototype.setObject = function () {
};
Properties.prototype.setString = function () {
};
Properties.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Properties.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Properties.prototype.getApiName = function () {
	return this.apiName;
};
Properties.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Properties.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Properties(properties);
};