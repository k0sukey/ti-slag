function App(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = properties.EVENT_ACCESSIBILITY_ANNOUNCEMENT || '';
	this.EVENT_ACCESSIBILITY_CHANGED = properties.EVENT_ACCESSIBILITY_CHANGED || '';
	this.accessibilityEnabled = properties.accessibilityEnabled || true;
	this.analytics = properties.analytics || true;
	this.copyright = properties.copyright || '';
	this.deployType = properties.deployType || '';
	this.description = properties.description || '';
	this.disableNetworkActivityIndicator = properties.disableNetworkActivityIndicator || true;
	this.forceSplashAsSnapshot = properties.forceSplashAsSnapshot || true;
	this.guid = properties.guid || '';
	this.id = properties.id || '';
	this.installId = properties.installId || '';
	this.idleTimerDisabled = properties.idleTimerDisabled || true;
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
App.prototype.removeEventListener = function () {
};
App.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
App.prototype.fireEvent = function () {
};
App.prototype.getArguments = function () {
	return {};
};
App.prototype.fireSystemEvent = function () {
};
App.prototype.getBubbleParent = function () {
	return true;
};
App.prototype.setBubbleParent = function () {
};
App.prototype.getApiName = function () {
	return '';
};
App.prototype.getLifecycleContainer = function () {
	return {};
};
App.prototype.setLifecycleContainer = function () {
};
App.prototype.getAccessibilityEnabled = function () {
	return true;
};
App.prototype.getAnalytics = function () {
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
App.prototype.setDisableNetworkActivityIndicator = function () {
};
App.prototype.getForceSplashAsSnapshot = function () {
	return true;
};
App.prototype.setForceSplashAsSnapshot = function () {
};
App.prototype.getGuid = function () {
	return '';
};
App.prototype.getId = function () {
	return '';
};
App.prototype.getInstallId = function () {
	return '';
};
App.prototype.getIdleTimerDisabled = function () {
	return true;
};
App.prototype.setIdleTimerDisabled = function () {
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
App.prototype.setProximityDetection = function () {
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
module.exports = function (properties) {
	return new App(properties);
};