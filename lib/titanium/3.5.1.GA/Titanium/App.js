function App(properties) {
	properties = properties || {};
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = properties.EVENT_ACCESSIBILITY_ANNOUNCEMENT || '';
	this.EVENT_ACCESSIBILITY_CHANGED = properties.EVENT_ACCESSIBILITY_CHANGED || '';
	this.accessibilityEnabled = properties.accessibilityEnabled || true;
	this.analytics = properties.analytics || true;
	this.apiName = 'Ti.App';
	this.bubbleParent = properties.bubbleParent || true;
	this.copyright = properties.copyright || '';
	this.deployType = properties.deployType || '';
	this.description = properties.description || '';
	this.disableNetworkActivityIndicator = properties.disableNetworkActivityIndicator || true;
	this.forceSplashAsSnapshot = properties.forceSplashAsSnapshot || true;
	this.guid = properties.guid || '';
	this.id = properties.id || '';
	this.idleTimerDisabled = properties.idleTimerDisabled || true;
	this.installId = properties.installId || '';
	this.keyboardVisible = properties.keyboardVisible || true;
	this.name = properties.name || '';
	this.proximityDetection = properties.proximityDetection || true;
	this.proximityState = properties.proximityState || true;
	this.publisher = properties.publisher || '';
	this.sessionId = properties.sessionId || '';
	this.url = properties.url || '';
	this.version = properties.version || '';
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
App.prototype.getArguments = function () {
	return {};
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