function Facebook(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Facebook';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.BUTTON_STYLE_NORMAL = properties.BUTTON_STYLE_NORMAL || 0;
	this.BUTTON_STYLE_WIDE = properties.BUTTON_STYLE_WIDE || 0;
	this.accessToken = properties.accessToken || '';
	this.appid = properties.appid || '';
	this.expirationDate = properties.expirationDate || new Date();
	this.forceDialogAuth = properties.forceDialogAuth || true;
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
Facebook.prototype.dialog = function () {
};
Facebook.prototype.logout = function () {
};
Facebook.prototype.request = function () {
};
Facebook.prototype.requestWithGraphPath = function () {
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
Facebook.prototype.setAccessToken = function () {
};
Facebook.prototype.getAppid = function () {
	return '';
};
Facebook.prototype.setAppid = function () {
};
Facebook.prototype.getExpirationDate = function () {
	return new Date();
};
Facebook.prototype.setExpirationDate = function () {
};
Facebook.prototype.getForceDialogAuth = function () {
	return true;
};
Facebook.prototype.setForceDialogAuth = function () {
};
Facebook.prototype.getLoggedIn = function () {
	return true;
};
Facebook.prototype.setLoggedIn = function () {
};
Facebook.prototype.getPermissions = function () {
	return '';
};
Facebook.prototype.setPermissions = function () {
};
Facebook.prototype.getUid = function () {
	return '';
};
Facebook.prototype.setUid = function () {
};
Facebook.prototype.createLoginButton = function () {
	throw new Error('Ti.Facebook.createLoginButton was deprecated, since 3.1.0');
};
module.exports = function (properties) {
	return new Facebook(properties);
};