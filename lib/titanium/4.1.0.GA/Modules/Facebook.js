var crypto = require('crypto');
function Facebook(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.Facebook.apiName is read only property');
	}
	this.apiName = 'Modules.Facebook';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.AUDIENCE_NONE) {
		throw new Error('Modules.Facebook.AUDIENCE_NONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIENCE_NONE = undefined;
	} else {
		this.AUDIENCE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.AUDIENCE_ONLY_ME) {
		throw new Error('Modules.Facebook.AUDIENCE_ONLY_ME is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIENCE_ONLY_ME = undefined;
	} else {
		this.AUDIENCE_ONLY_ME = 0;
	}
	if (__SLAG_PROPERTIES.AUDIENCE_FRIENDS) {
		throw new Error('Modules.Facebook.AUDIENCE_FRIENDS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIENCE_FRIENDS = undefined;
	} else {
		this.AUDIENCE_FRIENDS = 0;
	}
	if (__SLAG_PROPERTIES.AUDIENCE_EVERYONE) {
		throw new Error('Modules.Facebook.AUDIENCE_EVERYONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIENCE_EVERYONE = undefined;
	} else {
		this.AUDIENCE_EVERYONE = 0;
	}
	if (__SLAG_PROPERTIES.BUTTON_STYLE_NORMAL) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_NORMAL was deprecated, since 4.0.0');
	}
	if (__SLAG_PROPERTIES.BUTTON_STYLE_WIDE) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_WIDE was deprecated, since 4.0.0');
	}
	if (__SLAG_PROPERTIES.SSO_ONLY) {
		throw new Error('Modules.Facebook.SSO_ONLY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SSO_ONLY = undefined;
	} else {
		this.SSO_ONLY = 0;
	}
	if (__SLAG_PROPERTIES.SSO_WITH_FALLBACK) {
		throw new Error('Modules.Facebook.SSO_WITH_FALLBACK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SSO_WITH_FALLBACK = undefined;
	} else {
		this.SSO_WITH_FALLBACK = 0;
	}
	if (__SLAG_PROPERTIES.SUPPRESS_SSO) {
		throw new Error('Modules.Facebook.SUPPRESS_SSO is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SUPPRESS_SSO = undefined;
	} else {
		this.SUPPRESS_SSO = 0;
	}
	if (__SLAG_PROPERTIES.accessToken) {
		throw new Error('Modules.Facebook.accessToken is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessToken = undefined;
	} else {
		this.accessToken = '';
	}
	if (__SLAG_PROPERTIES.appid) {
		throw new Error('Modules.Facebook.appid was deprecated, since 4.0.0');
	}
	if (__SLAG_PROPERTIES.canPresentOpenGraphActionDialog) {
		throw new Error('Modules.Facebook.canPresentOpenGraphActionDialog is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canPresentOpenGraphActionDialog = undefined;
	} else {
		this.canPresentOpenGraphActionDialog = true;
	}
	if (__SLAG_PROPERTIES.canPresentShareDialog) {
		throw new Error('Modules.Facebook.canPresentShareDialog is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canPresentShareDialog = undefined;
	} else {
		this.canPresentShareDialog = true;
	}
	if (__SLAG_PROPERTIES.expirationDate) {
		throw new Error('Modules.Facebook.expirationDate is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.expirationDate = undefined;
	} else {
		this.expirationDate = new Date();
	}
	if (__SLAG_PROPERTIES.forceDialogAuth) {
		throw new Error('Modules.Facebook.forceDialogAuth was deprecated, since 4.0.0');
	}
	if (__SLAG_PROPERTIES.loggedIn) {
		throw new Error('Modules.Facebook.loggedIn is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.loggedIn = undefined;
	} else {
		this.loggedIn = true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.permissions = undefined;
	} else {
		this.permissions = __SLAG_PROPERTIES.permissions || '';
	}
	if (__SLAG_PROPERTIES.uid) {
		throw new Error('Modules.Facebook.uid is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.uid = undefined;
	} else {
		this.uid = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Facebook.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Facebook.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.authorize = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.createActivityWorker = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ActivityWorker = require('./Facebook/ActivityWorker');
	return ActivityWorker(__SLAG_PROPERTY);
};
Facebook.prototype.dialog = function () {
	throw new Error('Modules.Facebook.dialog was deprecated, since 4.0.0');
};
Facebook.prototype.initialize = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.logCustomEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.logout = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.publishInstall = function () {
	throw new Error('Modules.Facebook.publishInstall was deprecated, since 4.0.0');
};
Facebook.prototype.presentShareDialog = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.presentWebShareDialog = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.presentSendRequestDialog = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.reauthorize = function () {
	throw new Error('Modules.Facebook.reauthorize was deprecated, since 4.0.0');
};
Facebook.prototype.refreshPermissionsFromServer = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.request = function () {
	throw new Error('Modules.Facebook.request was deprecated, since 4.0.0');
};
Facebook.prototype.requestWithGraphPath = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.requestNewReadPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.requestNewPublishPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Facebook.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Facebook.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Facebook.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Facebook.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Facebook.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Facebook.prototype.getAccessToken = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessToken;
};
Facebook.prototype.getAppid = function () {
	throw new Error('Modules.Facebook.getAppid was deprecated, since 4.0.0');
};
Facebook.prototype.setAppid = function () {
	throw new Error('Modules.Facebook.setAppid was deprecated, since 4.0.0');
};
Facebook.prototype.getCanPresentOpenGraphActionDialog = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.canPresentOpenGraphActionDialog;
};
Facebook.prototype.getCanPresentShareDialog = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.canPresentShareDialog;
};
Facebook.prototype.getExpirationDate = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.expirationDate;
};
Facebook.prototype.getForceDialogAuth = function () {
	throw new Error('Modules.Facebook.getForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.setForceDialogAuth = function () {
	throw new Error('Modules.Facebook.setForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.getLoggedIn = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.loggedIn;
};
Facebook.prototype.getPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.permissions;
};
Facebook.prototype.setPermissions = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.permissions = __SLAG__PROPERTY;
};
Facebook.prototype.getUid = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.uid;
};
Facebook.prototype.createLikeButton = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var LikeButton = require('./Facebook/LikeButton');
	return LikeButton(__SLAG_PROPERTY);
};
Facebook.prototype.createLoginButton = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var LoginButton = require('./Facebook/LoginButton');
	return LoginButton(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Facebook(properties);
};