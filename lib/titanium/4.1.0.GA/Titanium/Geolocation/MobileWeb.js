function MobileWeb(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Geolocation.MobileWeb';
	this.locationTimeout = properties.locationTimeout || 0;
	this.maximumLocationAge = properties.maximumLocationAge || 0;
	this.maximumHeadingAge = properties.maximumHeadingAge || 0;
	this.forwardGeocoderTimeout = properties.forwardGeocoderTimeout || 0;
	this.reverseGeocoderTimeout = properties.reverseGeocoderTimeout || 0;
	return this;
}
MobileWeb.prototype.addEventListener = function () {
};
MobileWeb.prototype.removeEventListener = function () {
};
MobileWeb.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MobileWeb.prototype.fireEvent = function () {
};
MobileWeb.prototype.getApiName = function () {
	return '';
};
MobileWeb.prototype.getLocationTimeout = function () {
	return 0;
};
MobileWeb.prototype.setLocationTimeout = function () {
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	return 0;
};
MobileWeb.prototype.setMaximumLocationAge = function () {
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	return 0;
};
MobileWeb.prototype.setMaximumHeadingAge = function () {
};
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	return 0;
};
MobileWeb.prototype.setForwardGeocoderTimeout = function () {
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	return 0;
};
MobileWeb.prototype.setReverseGeocoderTimeout = function () {
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};