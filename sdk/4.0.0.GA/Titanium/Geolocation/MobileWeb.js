function MobileWeb(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Geolocation.MobileWeb';
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
	return this.apiName;
};
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	return this.forwardGeocoderTimeout;
};
MobileWeb.prototype.getLocationTimeout = function () {
	return this.locationTimeout;
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	return this.maximumHeadingAge;
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	return this.maximumLocationAge;
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	return this.reverseGeocoderTimeout;
};
MobileWeb.prototype.removeEventListener = function () {
};
MobileWeb.prototype.setForwardGeocoderTimeout = function (property) {
	this.forwardGeocoderTimeout = property;
};
MobileWeb.prototype.setLocationTimeout = function (property) {
	this.locationTimeout = property;
};
MobileWeb.prototype.setMaximumHeadingAge = function (property) {
	this.maximumHeadingAge = property;
};
MobileWeb.prototype.setMaximumLocationAge = function (property) {
	this.maximumLocationAge = property;
};
MobileWeb.prototype.setReverseGeocoderTimeout = function (property) {
	this.reverseGeocoderTimeout = property;
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};