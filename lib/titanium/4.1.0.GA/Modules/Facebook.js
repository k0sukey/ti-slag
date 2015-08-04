var crypto = require('crypto');
function Facebook(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'AUDIENCE_NONE',
			'AUDIENCE_ONLY_ME',
			'AUDIENCE_FRIENDS',
			'AUDIENCE_EVERYONE',
			'BUTTON_STYLE_NORMAL',
			'BUTTON_STYLE_WIDE',
			'SSO_ONLY',
			'SSO_WITH_FALLBACK',
			'SUPPRESS_SSO',
			'accessToken',
			'appid',
			'canPresentOpenGraphActionDialog',
			'canPresentShareDialog',
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
		throw new Error('Modules.Facebook.apiName is read only property');
	}
	this.apiName = 'Modules.Facebook';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.AUDIENCE_NONE) {
		throw new Error('Modules.Facebook.AUDIENCE_NONE is read only property');
	}
	this.AUDIENCE_NONE = 0;
	if (__SLAG__properties.AUDIENCE_ONLY_ME) {
		throw new Error('Modules.Facebook.AUDIENCE_ONLY_ME is read only property');
	}
	this.AUDIENCE_ONLY_ME = 0;
	if (__SLAG__properties.AUDIENCE_FRIENDS) {
		throw new Error('Modules.Facebook.AUDIENCE_FRIENDS is read only property');
	}
	this.AUDIENCE_FRIENDS = 0;
	if (__SLAG__properties.AUDIENCE_EVERYONE) {
		throw new Error('Modules.Facebook.AUDIENCE_EVERYONE is read only property');
	}
	this.AUDIENCE_EVERYONE = 0;
	if (__SLAG__properties.BUTTON_STYLE_NORMAL) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_NORMAL was deprecated, since 4.0.0');
	}
	if (__SLAG__properties.BUTTON_STYLE_WIDE) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_WIDE was deprecated, since 4.0.0');
	}
	if (__SLAG__properties.SSO_ONLY) {
		throw new Error('Modules.Facebook.SSO_ONLY is read only property');
	}
	this.SSO_ONLY = 0;
	if (__SLAG__properties.SSO_WITH_FALLBACK) {
		throw new Error('Modules.Facebook.SSO_WITH_FALLBACK is read only property');
	}
	this.SSO_WITH_FALLBACK = 0;
	if (__SLAG__properties.SUPPRESS_SSO) {
		throw new Error('Modules.Facebook.SUPPRESS_SSO is read only property');
	}
	this.SUPPRESS_SSO = 0;
	if (__SLAG__properties.accessToken) {
		throw new Error('Modules.Facebook.accessToken is read only property');
	}
	this.accessToken = '';
	if (__SLAG__properties.appid) {
		throw new Error('Modules.Facebook.appid was deprecated, since 4.0.0');
	}
	if (__SLAG__properties.canPresentOpenGraphActionDialog) {
		throw new Error('Modules.Facebook.canPresentOpenGraphActionDialog is read only property');
	}
	this.canPresentOpenGraphActionDialog = true;
	if (__SLAG__properties.canPresentShareDialog) {
		throw new Error('Modules.Facebook.canPresentShareDialog is read only property');
	}
	this.canPresentShareDialog = true;
	if (__SLAG__properties.expirationDate) {
		throw new Error('Modules.Facebook.expirationDate is read only property');
	}
	this.expirationDate = new Date();
	if (__SLAG__properties.forceDialogAuth) {
		throw new Error('Modules.Facebook.forceDialogAuth was deprecated, since 4.0.0');
	}
	if (__SLAG__properties.loggedIn) {
		throw new Error('Modules.Facebook.loggedIn is read only property');
	}
	this.loggedIn = true;
	this.permissions = __SLAG__properties.permissions || '';
	if (__SLAG__properties.uid) {
		throw new Error('Modules.Facebook.uid is read only property');
	}
	this.uid = '';
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
Facebook.prototype.createActivityWorker = function (params) {
	var ActivityWorker = require('./Facebook/ActivityWorker');
	return ActivityWorker(params);
};
Facebook.prototype.dialog = function () {
	throw new Error('Modules.Facebook.dialog was deprecated, since 4.0.0');
};
Facebook.prototype.initialize = function () {
};
Facebook.prototype.logCustomEvent = function () {
};
Facebook.prototype.logout = function () {
};
Facebook.prototype.publishInstall = function () {
	throw new Error('Modules.Facebook.publishInstall was deprecated, since 4.0.0');
};
Facebook.prototype.presentShareDialog = function () {
};
Facebook.prototype.presentWebShareDialog = function () {
};
Facebook.prototype.presentSendRequestDialog = function () {
};
Facebook.prototype.reauthorize = function () {
	throw new Error('Modules.Facebook.reauthorize was deprecated, since 4.0.0');
};
Facebook.prototype.refreshPermissionsFromServer = function () {
};
Facebook.prototype.request = function () {
	throw new Error('Modules.Facebook.request was deprecated, since 4.0.0');
};
Facebook.prototype.requestWithGraphPath = function () {
};
Facebook.prototype.requestNewReadPermissions = function () {
};
Facebook.prototype.requestNewPublishPermissions = function () {
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
Facebook.prototype.getAppid = function () {
	throw new Error('Modules.Facebook.getAppid was deprecated, since 4.0.0');
};
Facebook.prototype.setAppid = function () {
	throw new Error('Modules.Facebook.setAppid was deprecated, since 4.0.0');
};
Facebook.prototype.getCanPresentOpenGraphActionDialog = function () {
	return this.canPresentOpenGraphActionDialog;
};
Facebook.prototype.getCanPresentShareDialog = function () {
	return this.canPresentShareDialog;
};
Facebook.prototype.getExpirationDate = function () {
	return this.expirationDate;
};
Facebook.prototype.getForceDialogAuth = function () {
	throw new Error('Modules.Facebook.getForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.setForceDialogAuth = function () {
	throw new Error('Modules.Facebook.setForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.getLoggedIn = function () {
	return this.loggedIn;
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
Facebook.prototype.createLikeButton = function (params) {
	var LikeButton = require('./Facebook/LikeButton');
	return LikeButton(params);
};
Facebook.prototype.createLoginButton = function (params) {
	var LoginButton = require('./Facebook/LoginButton');
	return LoginButton(params);
};
module.exports = function (properties) {
	return new Facebook(properties);
};