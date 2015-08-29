var crypto = require('crypto');
function MobileWeb(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.MobileWeb.apiName is read only property');
	}
	this.apiName = 'Ti.UI.MobileWeb';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
MobileWeb.prototype.addEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.removeEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
MobileWeb.prototype.fireEvent = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.getApiName = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
MobileWeb.prototype.createNavigationGroup = function (__SLAG_PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NavigationGroup = require('./MobileWeb/NavigationGroup');
	return NavigationGroup(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};