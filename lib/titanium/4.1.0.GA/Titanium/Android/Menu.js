var crypto = require('crypto');
function Menu(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'items',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Menu.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Menu';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.items) {
		throw new Error('Ti.Android.Menu.items is read only property');
	}
	this.items = [];
	this.id = __SLAG__properties.id || '';
	return this;
}
Menu.prototype.addEventListener = function () {
};
Menu.prototype.removeEventListener = function () {
};
Menu.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Menu.prototype.fireEvent = function () {
};
Menu.prototype.add = function () {
	return {};
};
Menu.prototype.clear = function () {
};
Menu.prototype.close = function () {
};
Menu.prototype.findItem = function () {
	return {};
};
Menu.prototype.getItem = function () {
	return {};
};
Menu.prototype.hasVisibleItems = function () {
	return true;
};
Menu.prototype.removeGroup = function () {
};
Menu.prototype.removeItem = function () {
};
Menu.prototype.setGroupEnabled = function () {
};
Menu.prototype.setGroupVisible = function () {
};
Menu.prototype.size = function () {
	return 0;
};
Menu.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Menu.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Menu.prototype.getApiName = function () {
	return this.apiName;
};
Menu.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Menu.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Menu.prototype.getItems = function () {
	return this.items;
};
module.exports = function (properties) {
	return new Menu(properties);
};