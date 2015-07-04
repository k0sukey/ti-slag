function MobileWeb(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Geolocation.MobileWeb';
	this.forwardGeocoderTimeout = properties.forwardGeocoderTimeout || undefined;
	this.locationTimeout = properties.locationTimeout || undefined;
	this.maximumHeadingAge = properties.maximumHeadingAge || undefined;
	this.maximumLocationAge = properties.maximumLocationAge || undefined;
	this.reverseGeocoderTimeout = properties.reverseGeocoderTimeout || undefined;
	return this;
}
MobileWeb.prototype.addEventListener = function () {
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
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	return 0;
};
MobileWeb.prototype.getLocationTimeout = function () {
	return 0;
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	return 0;
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	return 0;
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	return 0;
};
MobileWeb.prototype.removeEventListener = function () {
};
MobileWeb.prototype.setForwardGeocoderTimeout = function () {
};
MobileWeb.prototype.setLocationTimeout = function () {
};
MobileWeb.prototype.setMaximumHeadingAge = function () {
};
MobileWeb.prototype.setMaximumLocationAge = function () {
};
MobileWeb.prototype.setReverseGeocoderTimeout = function () {
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};