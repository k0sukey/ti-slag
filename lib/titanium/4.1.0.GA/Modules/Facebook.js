function Facebook(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Facebook';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.AUDIENCE_NONE = properties.AUDIENCE_NONE || 0;
	this.AUDIENCE_ONLY_ME = properties.AUDIENCE_ONLY_ME || 0;
	this.AUDIENCE_FRIENDS = properties.AUDIENCE_FRIENDS || 0;
	this.AUDIENCE_EVERYONE = properties.AUDIENCE_EVERYONE || 0;
	if (properties.BUTTON_STYLE_NORMAL) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_NORMAL was deprecated, since 4.0.0');
	}
	if (properties.BUTTON_STYLE_WIDE) {
		throw new Error('Modules.Facebook.BUTTON_STYLE_WIDE was deprecated, since 4.0.0');
	}
	this.SSO_ONLY = properties.SSO_ONLY || 0;
	this.SSO_WITH_FALLBACK = properties.SSO_WITH_FALLBACK || 0;
	this.SUPPRESS_SSO = properties.SUPPRESS_SSO || 0;
	this.accessToken = properties.accessToken || '';
	if (properties.appid) {
		throw new Error('Modules.Facebook.appid was deprecated, since 4.0.0');
	}
	this.canPresentOpenGraphActionDialog = properties.canPresentOpenGraphActionDialog || true;
	this.canPresentShareDialog = properties.canPresentShareDialog || true;
	this.expirationDate = properties.expirationDate || new Date();
	if (properties.forceDialogAuth) {
		throw new Error('Modules.Facebook.forceDialogAuth was deprecated, since 4.0.0');
	}
	this.loggedIn = properties.loggedIn || true;
	this.permissions = properties.permissions || '';
	this.uid = properties.uid || '';
	return this;
}
Facebook.prototype.addEventListener = function () {
};
Facebook.prototype.removeEventListener = function () {
};
Facebook.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
Facebook.prototype.setBubbleParent = function () {
};
Facebook.prototype.getApiName = function () {
	return '';
};
Facebook.prototype.getLifecycleContainer = function () {
	return {};
};
Facebook.prototype.setLifecycleContainer = function () {
};
Facebook.prototype.getAccessToken = function () {
	return '';
};
Facebook.prototype.getAppid = function () {
	throw new Error('Modules.Facebook.getAppid was deprecated, since 4.0.0');
};
Facebook.prototype.setAppid = function () {
	throw new Error('Modules.Facebook.setAppid was deprecated, since 4.0.0');
};
Facebook.prototype.getCanPresentOpenGraphActionDialog = function () {
	return true;
};
Facebook.prototype.getCanPresentShareDialog = function () {
	return true;
};
Facebook.prototype.getExpirationDate = function () {
	return new Date();
};
Facebook.prototype.getForceDialogAuth = function () {
	throw new Error('Modules.Facebook.getForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.setForceDialogAuth = function () {
	throw new Error('Modules.Facebook.setForceDialogAuth was deprecated, since 4.0.0');
};
Facebook.prototype.getLoggedIn = function () {
	return true;
};
Facebook.prototype.getPermissions = function () {
	return '';
};
Facebook.prototype.setPermissions = function () {
};
Facebook.prototype.getUid = function () {
	return '';
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