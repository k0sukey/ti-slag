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
	return {};
};
MobileWeb.prototype.getLocationTimeout = function () {
	return {};
};
MobileWeb.prototype.setLocationTimeout = function () {
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	return {};
};
MobileWeb.prototype.setMaximumLocationAge = function () {
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	return {};
};
MobileWeb.prototype.setMaximumHeadingAge = function () {
};
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	return {};
};
MobileWeb.prototype.setForwardGeocoderTimeout = function () {
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	return {};
};
MobileWeb.prototype.setReverseGeocoderTimeout = function () {
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};