function Android(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Geolocation.Android';
	this.bubbleParent = properties.bubbleParent || true;
	this.manualMode = properties.manualMode || true;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.addLocationProvider = function () {
};
Android.prototype.addLocationRule = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.createLocationProvider = function (params) {
	var LocationProvider = require('./Android/LocationProvider');
	return LocationProvider(params);
};
Android.prototype.createLocationRule = function (params) {
	var LocationRule = require('./Android/LocationRule');
	return LocationRule(params);
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getManualMode = function () {
	return true;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.removeLocationProvider = function () {
};
Android.prototype.removeLocationRule = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setManualMode = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};