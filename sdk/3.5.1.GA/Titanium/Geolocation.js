function Geolocation(properties) {
	properties = properties || {};
	this.ACCURACY_BEST = properties.ACCURACY_BEST || undefined;
	this.ACCURACY_BEST_FOR_NAVIGATION = properties.ACCURACY_BEST_FOR_NAVIGATION || undefined;
	this.ACCURACY_HIGH = properties.ACCURACY_HIGH || undefined;
	this.ACCURACY_HUNDRED_METERS = properties.ACCURACY_HUNDRED_METERS || undefined;
	this.ACCURACY_KILOMETER = properties.ACCURACY_KILOMETER || undefined;
	this.ACCURACY_LOW = properties.ACCURACY_LOW || undefined;
	this.ACCURACY_NEAREST_TEN_METERS = properties.ACCURACY_NEAREST_TEN_METERS || undefined;
	this.ACCURACY_THREE_KILOMETERS = properties.ACCURACY_THREE_KILOMETERS || undefined;
	this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = properties.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION || undefined;
	this.ACTIVITYTYPE_FITNESS = properties.ACTIVITYTYPE_FITNESS || undefined;
	this.ACTIVITYTYPE_OTHER = properties.ACTIVITYTYPE_OTHER || undefined;
	this.ACTIVITYTYPE_OTHER_NAVIGATION = properties.ACTIVITYTYPE_OTHER_NAVIGATION || undefined;
	this.AUTHORIZATION_ALWAYS = properties.AUTHORIZATION_ALWAYS || undefined;
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || undefined;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || undefined;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || undefined;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || undefined;
	this.AUTHORIZATION_WHEN_IN_USE = properties.AUTHORIZATION_WHEN_IN_USE || undefined;
	this.ERROR_DENIED = properties.ERROR_DENIED || undefined;
	this.ERROR_HEADING_FAILURE = properties.ERROR_HEADING_FAILURE || undefined;
	this.ERROR_LOCATION_UNKNOWN = properties.ERROR_LOCATION_UNKNOWN || undefined;
	this.ERROR_NETWORK = properties.ERROR_NETWORK || undefined;
	this.ERROR_REGION_MONITORING_DELAYED = properties.ERROR_REGION_MONITORING_DELAYED || undefined;
	this.ERROR_REGION_MONITORING_DENIED = properties.ERROR_REGION_MONITORING_DENIED || undefined;
	this.ERROR_REGION_MONITORING_FAILURE = properties.ERROR_REGION_MONITORING_FAILURE || undefined;
	this.ERROR_TIMEOUT = properties.ERROR_TIMEOUT || undefined;
	this.PROVIDER_GPS = properties.PROVIDER_GPS || undefined;
	this.PROVIDER_NETWORK = properties.PROVIDER_NETWORK || undefined;
	this.PROVIDER_PASSIVE = properties.PROVIDER_PASSIVE || undefined;
	this.accuracy = properties.accuracy || undefined;
	this.activityType = properties.activityType || undefined;
	this.apiName = 'Titanium.Geolocation';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.distanceFilter = properties.distanceFilter || undefined;
	this.frequency = properties.frequency || undefined;
	this.hasCompass = properties.hasCompass || undefined;
	this.headingFilter = properties.headingFilter || undefined;
	this.lastGeolocation = properties.lastGeolocation || undefined;
	this.locationServicesAuthorization = properties.locationServicesAuthorization || undefined;
	this.locationServicesEnabled = properties.locationServicesEnabled || undefined;
	this.pauseLocationUpdateAutomatically = properties.pauseLocationUpdateAutomatically || undefined;
	this.preferredProvider = properties.preferredProvider || undefined;
	this.purpose = properties.purpose || undefined;
	this.showCalibration = properties.showCalibration || undefined;
	this.trackSignificantLocationChange = properties.trackSignificantLocationChange || undefined;
	return this;
}
Geolocation.prototype.addEventListener = function () {
};
Geolocation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Geolocation.prototype.fireEvent = function () {
};
Geolocation.prototype.forwardGeocoder = function () {
};
Geolocation.prototype.getAccuracy = function () {
	return this.accuracy;
};
Geolocation.prototype.getActivityType = function () {
	return this.activityType;
};
Geolocation.prototype.getApiName = function () {
	return this.apiName;
};
Geolocation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Geolocation.prototype.getCurrentHeading = function () {
};
Geolocation.prototype.getCurrentPosition = function () {
};
Geolocation.prototype.getDistanceFilter = function () {
	return this.distanceFilter;
};
Geolocation.prototype.getFrequency = function () {
	return this.frequency;
};
Geolocation.prototype.getHasCompass = function () {
	return this.hasCompass;
};
Geolocation.prototype.getHeadingFilter = function () {
	return this.headingFilter;
};
Geolocation.prototype.getLastGeolocation = function () {
	return this.lastGeolocation;
};
Geolocation.prototype.getLocationServicesAuthorization = function () {
	return this.locationServicesAuthorization;
};
Geolocation.prototype.getLocationServicesEnabled = function () {
	return this.locationServicesEnabled;
};
Geolocation.prototype.getPauseLocationUpdateAutomatically = function () {
	return this.pauseLocationUpdateAutomatically;
};
Geolocation.prototype.getPreferredProvider = function () {
	return this.preferredProvider;
};
Geolocation.prototype.getPurpose = function () {
	return this.purpose;
};
Geolocation.prototype.getShowCalibration = function () {
	return this.showCalibration;
};
Geolocation.prototype.getTrackSignificantLocationChange = function () {
	return this.trackSignificantLocationChange;
};
Geolocation.prototype.removeEventListener = function () {
};
Geolocation.prototype.reverseGeocoder = function () {
};
Geolocation.prototype.setAccuracy = function (property) {
	this.accuracy = property;
};
Geolocation.prototype.setActivityType = function (property) {
	this.activityType = property;
};
Geolocation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Geolocation.prototype.setDistanceFilter = function (property) {
	this.distanceFilter = property;
};
Geolocation.prototype.setFrequency = function (property) {
	this.frequency = property;
};
Geolocation.prototype.setHeadingFilter = function (property) {
	this.headingFilter = property;
};
Geolocation.prototype.setLocationServicesAuthorization = function (property) {
	this.locationServicesAuthorization = property;
};
Geolocation.prototype.setPauseLocationUpdateAutomatically = function (property) {
	this.pauseLocationUpdateAutomatically = property;
};
Geolocation.prototype.setPreferredProvider = function (property) {
	this.preferredProvider = property;
};
Geolocation.prototype.setPurpose = function (property) {
	this.purpose = property;
};
Geolocation.prototype.setShowCalibration = function (property) {
	this.showCalibration = property;
};
Geolocation.prototype.setTrackSignificantLocationChange = function (property) {
	this.trackSignificantLocationChange = property;
};
module.exports = function (properties) {
	return new Geolocation(properties);
};