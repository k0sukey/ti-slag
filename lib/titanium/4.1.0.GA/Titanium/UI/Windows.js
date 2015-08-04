var crypto = require('crypto');
function Windows(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = ['id'];
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
	this.id = __SLAG__properties.id || '';
	return this;
}
Windows.prototype.addEventListener = function () {
};
Windows.prototype.removeEventListener = function () {
};
Windows.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Windows.prototype.fireEvent = function () {
};
Windows.prototype.createAppBarButton = function (params) {
	var AppBarButton = require('./Windows/AppBarButton');
	return AppBarButton(params);
};
Windows.prototype.createAppBarSeparator = function (params) {
	var AppBarSeparator = require('./Windows/AppBarSeparator');
	return AppBarSeparator(params);
};
Windows.prototype.createAppBarToggleButton = function (params) {
	var AppBarToggleButton = require('./Windows/AppBarToggleButton');
	return AppBarToggleButton(params);
};
Windows.prototype.createCommandBar = function (params) {
	var CommandBar = require('./Windows/CommandBar');
	return CommandBar(params);
};
module.exports = function (properties) {
	return new Windows(properties);
};