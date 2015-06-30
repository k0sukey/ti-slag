function App(properties) {
	properties = properties || {};
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = properties.EVENT_ACCESSIBILITY_ANNOUNCEMENT || undefined;
	this.EVENT_ACCESSIBILITY_CHANGED = properties.EVENT_ACCESSIBILITY_CHANGED || undefined;
	this.accessibilityEnabled = properties.accessibilityEnabled || undefined;
	this.analytics = properties.analytics || undefined;
	this.apiName = 'Titanium.App';
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
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.accessibilityEnabled;
};
App.prototype.getAnalytics = function () {
	return this.analytics;
};
App.prototype.getApiName = function () {
	return this.apiName;
};
App.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
App.prototype.getCopyright = function () {
	return this.copyright;
};
App.prototype.getDeployType = function () {
	return this.deployType;
};
App.prototype.getDescription = function () {
	return this.description;
};
App.prototype.getDisableNetworkActivityIndicator = function () {
	return this.disableNetworkActivityIndicator;
};
App.prototype.getForceSplashAsSnapshot = function () {
	return this.forceSplashAsSnapshot;
};
App.prototype.getGuid = function () {
	return this.guid;
};
App.prototype.getId = function () {
	return this.id;
};
App.prototype.getIdleTimerDisabled = function () {
	return this.idleTimerDisabled;
};
App.prototype.getInstallId = function () {
	return this.installId;
};
App.prototype.getKeyboardVisible = function () {
	return this.keyboardVisible;
};
App.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
App.prototype.getName = function () {
	return this.name;
};
App.prototype.getProximityDetection = function () {
	return this.proximityDetection;
};
App.prototype.getProximityState = function () {
	return this.proximityState;
};
App.prototype.getPublisher = function () {
	return this.publisher;
};
App.prototype.getSessionId = function () {
	return this.sessionId;
};
App.prototype.getUrl = function () {
	return this.url;
};
App.prototype.getVersion = function () {
	return this.version;
};
App.prototype.removeEventListener = function () {
};
App.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
App.prototype.setDisableNetworkActivityIndicator = function (property) {
	this.disableNetworkActivityIndicator = property;
};
App.prototype.setForceSplashAsSnapshot = function (property) {
	this.forceSplashAsSnapshot = property;
};
App.prototype.setIdleTimerDisabled = function (property) {
	this.idleTimerDisabled = property;
};
App.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
App.prototype.setProximityDetection = function (property) {
	this.proximityDetection = property;
};
module.exports = function (properties) {
	return new App(properties);
};