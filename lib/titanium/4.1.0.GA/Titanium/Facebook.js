var crypto = require('crypto');
function Facebook(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'BUTTON_STYLE_NORMAL',
			'BUTTON_STYLE_WIDE',
			'accessToken',
			'appid',
			'expirationDate',
			'forceDialogAuth',
			'loggedIn',
			'permissions',
			'uid',
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
		throw new Error('Ti.Facebook.apiName is read only property');
	}
	this.apiName = 'Ti.Facebook';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.BUTTON_STYLE_NORMAL) {
		throw new Error('Ti.Facebook.BUTTON_STYLE_NORMAL is read only property');
	}
	this.BUTTON_STYLE_NORMAL = 0;
	if (__SLAG__properties.BUTTON_STYLE_WIDE) {
		throw new Error('Ti.Facebook.BUTTON_STYLE_WIDE is read only property');
	}
	this.BUTTON_STYLE_WIDE = 0;
	this.accessToken = __SLAG__properties.accessToken || '';
	this.appid = __SLAG__properties.appid || '';
	this.expirationDate = __SLAG__properties.expirationDate || new Date();
	this.forceDialogAuth = __SLAG__properties.forceDialogAuth || true;
	this.loggedIn = __SLAG__properties.loggedIn || true;
	this.permissions = __SLAG__properties.permissions || '';
	this.uid = __SLAG__properties.uid || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Facebook.prototype.addEventListener = function () {
};
Facebook.prototype.removeEventListener = function () {
};
Facebook.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Facebook.prototype.fireEvent = function () {
};
Facebook.prototype.authorize = function () {
};
Facebook.prototype.dialog = function () {
};
Facebook.prototype.logout = function () {
};
Facebook.prototype.request = function () {
};
Facebook.prototype.requestWithGraphPath = function () {
};
Facebook.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Facebook.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Facebook.prototype.getApiName = function () {
	return this.apiName;
};
Facebook.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Facebook.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Facebook.prototype.getAccessToken = function () {
	return this.accessToken;
};
Facebook.prototype.setAccessToken = function (property) {
	this.accessToken = property;
};
Facebook.prototype.getAppid = function () {
	return this.appid;
};
Facebook.prototype.setAppid = function (property) {
	this.appid = property;
};
Facebook.prototype.getExpirationDate = function () {
	return this.expirationDate;
};
Facebook.prototype.setExpirationDate = function (property) {
	this.expirationDate = property;
};
Facebook.prototype.getForceDialogAuth = function () {
	return this.forceDialogAuth;
};
Facebook.prototype.setForceDialogAuth = function (property) {
	this.forceDialogAuth = property;
};
Facebook.prototype.getLoggedIn = function () {
	return this.loggedIn;
};
Facebook.prototype.setLoggedIn = function (property) {
	this.loggedIn = property;
};
Facebook.prototype.getPermissions = function () {
	return this.permissions;
};
Facebook.prototype.setPermissions = function (property) {
	this.permissions = property;
};
Facebook.prototype.getUid = function () {
	return this.uid;
};
Facebook.prototype.setUid = function (property) {
	this.uid = property;
};
Facebook.prototype.createLoginButton = function () {
	throw new Error('Ti.Facebook.createLoginButton was deprecated, since 3.1.0');
};
module.exports = function (properties) {
	return new Facebook(properties);
};