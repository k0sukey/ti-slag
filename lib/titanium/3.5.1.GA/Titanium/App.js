function App(properties) {
	properties = properties || {};
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = properties.EVENT_ACCESSIBILITY_ANNOUNCEMENT || undefined;
	this.EVENT_ACCESSIBILITY_CHANGED = properties.EVENT_ACCESSIBILITY_CHANGED || undefined;
	this.accessibilityEnabled = properties.accessibilityEnabled || undefined;
	this.analytics = properties.analytics || undefined;
	this.apiName = 'Ti.App';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.copyright = properties.copyright || undefined;
	this.deployType = properties.deployType || undefined;
	this.description = properties.description || undefined;
	this.disableNetworkActivityIndicator = properties.disableNetworkActivityIndicator || undefined;
	this.forceSplashAsSnapshot = properties.forceSplashAsSnapshot || undefined;
	this.guid = properties.guid || undefined;
	this.id = properties.id || undefined;
	this.idleTimerDisabled = properties.idleTimerDisabled || undefined;
	this.installId = properties.installId || undefined;
	this.keyboardVisible = properties.keyboardVisible || undefined;
	this.name = properties.name || undefined;
	this.proximityDetection = properties.proximityDetection || undefined;
	this.proximityState = properties.proximityState || undefined;
	this.publisher = properties.publisher || undefined;
	this.sessionId = properties.sessionId || undefined;
	this.url = properties.url || undefined;
	this.version = properties.version || undefined;
	return this;
}
App.prototype.addEventListener = function () {
};
App.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
App.prototype.fireEvent = function () {
};
App.prototype.fireSystemEvent = function () {
};
App.prototype.getAccessibilityEnabled = function () {
	return true;
};
App.prototype.getAnalytics = function () {
	return true;
};
App.prototype.getApiName = function () {
	return '';
};
App.prototype.getBubbleParent = function () {
	return true;
};
App.prototype.getCopyright = function () {
	return '';
};
App.prototype.getDeployType = function () {
	return '';
};
App.prototype.getDescription = function () {
	return '';
};
App.prototype.getDisableNetworkActivityIndicator = function () {
	return true;
};
App.prototype.getForceSplashAsSnapshot = function () {
	return true;
};
App.prototype.getGuid = function () {
	return '';
};
App.prototype.getId = function () {
	return '';
};
App.prototype.getIdleTimerDisabled = function () {
	return true;
};
App.prototype.getInstallId = function () {
	return '';
};
App.prototype.getKeyboardVisible = function () {
	return true;
};
App.prototype.getName = function () {
	return '';
};
App.prototype.getProximityDetection = function () {
	return true;
};
App.prototype.getProximityState = function () {
	return true;
};
App.prototype.getPublisher = function () {
	return '';
};
App.prototype.getSessionId = function () {
	return '';
};
App.prototype.getUrl = function () {
	return '';
};
App.prototype.getVersion = function () {
	return '';
};
App.prototype.removeEventListener = function () {
};
App.prototype.setBubbleParent = function () {
};
App.prototype.setDisableNetworkActivityIndicator = function () {
};
App.prototype.setForceSplashAsSnapshot = function () {
};
App.prototype.setIdleTimerDisabled = function () {
};
App.prototype.setProximityDetection = function () {
};
module.exports = function (properties) {
	return new App(properties);
};