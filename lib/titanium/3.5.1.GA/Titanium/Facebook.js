var crypto = require('crypto');
function Facebook(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BUTTON_STYLE_NORMAL',
			'BUTTON_STYLE_WIDE',
			'accessToken',
			'apiName',
			'appid',
			'bubbleParent',
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
	if (__SLAG__properties.BUTTON_STYLE_NORMAL) {
		throw new Error('Ti.Facebook.BUTTON_STYLE_NORMAL is read only property');
	}
	this.BUTTON_STYLE_NORMAL = 0;
	if (__SLAG__properties.BUTTON_STYLE_WIDE) {
		throw new Error('Ti.Facebook.BUTTON_STYLE_WIDE is read only property');
	}
	this.BUTTON_STYLE_WIDE = 0;
	this.accessToken = __SLAG__properties.accessToken || '';
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Facebook.apiName is read only property');
	}
	this.apiName = 'Ti.Facebook';
	this.appid = __SLAG__properties.appid || '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
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
Facebook.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Facebook.prototype.authorize = function () {
};
Facebook.prototype.createLoginButton = function () {
	throw new Error('Ti.Facebook.createLoginButton was deprecated, since 3.1.0');
};
Facebook.prototype.dialog = function () {
};
Facebook.prototype.fireEvent = function () {
};
Facebook.prototype.getAccessToken = function () {
	return this.accessToken;
};
Facebook.prototype.getApiName = function () {
	return this.apiName;
};
Facebook.prototype.getAppid = function () {
	return this.appid;
};
Facebook.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Facebook.prototype.getExpirationDate = function () {
	return this.expirationDate;
};
Facebook.prototype.getForceDialogAuth = function () {
	return this.forceDialogAuth;
};
Facebook.prototype.getLoggedIn = function () {
	return this.loggedIn;
};
Facebook.prototype.getPermissions = function () {
	return this.permissions;
};
Facebook.prototype.getUid = function () {
	return this.uid;
};
Facebook.prototype.logout = function () {
};
Facebook.prototype.removeEventListener = function () {
};
Facebook.prototype.request = function () {
};
Facebook.prototype.requestWithGraphPath = function () {
};
Facebook.prototype.setAccessToken = function (property) {
	this.accessToken = property;
};
Facebook.prototype.setAppid = function (property) {
	this.appid = property;
};
Facebook.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Facebook.prototype.setExpirationDate = function (property) {
	this.expirationDate = property;
};
Facebook.prototype.setForceDialogAuth = function (property) {
	this.forceDialogAuth = property;
};
Facebook.prototype.setLoggedIn = function (property) {
	this.loggedIn = property;
};
Facebook.prototype.setPermissions = function (property) {
	this.permissions = property;
};
Facebook.prototype.setUid = function (property) {
	this.uid = property;
};
module.exports = function (properties) {
	return new Facebook(properties);
};