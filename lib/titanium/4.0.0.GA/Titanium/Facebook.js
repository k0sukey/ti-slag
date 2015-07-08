function Facebook(properties) {
	properties = properties || {};
	this.BUTTON_STYLE_NORMAL = properties.BUTTON_STYLE_NORMAL || 0;
	this.BUTTON_STYLE_WIDE = properties.BUTTON_STYLE_WIDE || 0;
	this.accessToken = properties.accessToken || '';
	this.apiName = 'Ti.Facebook';
	this.appid = properties.appid || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.expirationDate = properties.expirationDate || new Date();
	this.forceDialogAuth = properties.forceDialogAuth || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.loggedIn = properties.loggedIn || true;
	this.permissions = properties.permissions || '';
	this.uid = properties.uid || '';
	return this;
}
Facebook.prototype.addEventListener = function () {
};
Facebook.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return '';
};
Facebook.prototype.getApiName = function () {
	return '';
};
Facebook.prototype.getAppid = function () {
	return '';
};
Facebook.prototype.getBubbleParent = function () {
	return true;
};
Facebook.prototype.getExpirationDate = function () {
	return new Date();
};
Facebook.prototype.getForceDialogAuth = function () {
	return true;
};
Facebook.prototype.getLifecycleContainer = function () {
	return {};
};
Facebook.prototype.getLoggedIn = function () {
	return true;
};
Facebook.prototype.getPermissions = function () {
	return '';
};
Facebook.prototype.getUid = function () {
	return '';
};
Facebook.prototype.logout = function () {
};
Facebook.prototype.removeEventListener = function () {
};
Facebook.prototype.request = function () {
};
Facebook.prototype.requestWithGraphPath = function () {
};
Facebook.prototype.setAccessToken = function () {
};
Facebook.prototype.setAppid = function () {
};
Facebook.prototype.setBubbleParent = function () {
};
Facebook.prototype.setExpirationDate = function () {
};
Facebook.prototype.setForceDialogAuth = function () {
};
Facebook.prototype.setLifecycleContainer = function () {
};
Facebook.prototype.setLoggedIn = function () {
};
Facebook.prototype.setPermissions = function () {
};
Facebook.prototype.setUid = function () {
};
module.exports = function (properties) {
	return new Facebook(properties);
};