function Android(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Geolocation.Android';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.manualMode = properties.manualMode || true;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.addLocationProvider = function () {
};
Android.prototype.removeLocationProvider = function () {
};
Android.prototype.addLocationRule = function () {
};
Android.prototype.removeLocationRule = function () {
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.getApiName = function () {
	return '';
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.setLifecycleContainer = function () {
};
Android.prototype.getManualMode = function () {
	return true;
};
Android.prototype.setManualMode = function () {
};
Android.prototype.createLocationProvider = function (params) {
	var LocationProvider = require('./Android/LocationProvider');
	return LocationProvider(params);
};
Android.prototype.createLocationRule = function (params) {
	var LocationRule = require('./Android/LocationRule');
	return LocationRule(params);
};
module.exports = function (properties) {
	return new Android(properties);
};