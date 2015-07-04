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
	this.apiName = 'Ti.Geolocation';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.distanceFilter = properties.distanceFilter || undefined;
	if (properties.frequency) {
		throw new Error('Ti.Geolocation.frequency was deprecated, since 2.0.0');
	}
	this.hasCompass = properties.hasCompass || undefined;
	this.headingFilter = properties.headingFilter || undefined;
	this.lastGeolocation = properties.lastGeolocation || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.locationServicesAuthorization = properties.locationServicesAuthorization || undefined;
	this.locationServicesEnabled = properties.locationServicesEnabled || undefined;
	this.pauseLocationUpdateAutomatically = properties.pauseLocationUpdateAutomatically || undefined;
	if (properties.preferredProvider) {
		throw new Error('Ti.Geolocation.preferredProvider was deprecated, since 2.0.0');
	}
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
	return 0;
};
Geolocation.prototype.getActivityType = function () {
	return 0;
};
Geolocation.prototype.getApiName = function () {
	return '';
};
Geolocation.prototype.getBubbleParent = function () {
	return true;
};
Geolocation.prototype.getCurrentHeading = function () {
};
Geolocation.prototype.getCurrentPosition = function () {
};
Geolocation.prototype.getDistanceFilter = function () {
	return 0;
};
Geolocation.prototype.getFrequency = function () {
	throw new Error('Ti.Geolocation.getFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.getHasCompass = function () {
	return true;
};
Geolocation.prototype.getHeadingFilter = function () {
	return 0;
};
Geolocation.prototype.getLastGeolocation = function () {
	return '';
};
Geolocation.prototype.getLifecycleContainer = function () {
	return {};
};
Geolocation.prototype.getLocationServicesAuthorization = function () {
	return 0;
};
Geolocation.prototype.getLocationServicesEnabled = function () {
	return true;
};
Geolocation.prototype.getPauseLocationUpdateAutomatically = function () {
	return true;
};
Geolocation.prototype.getPreferredProvider = function () {
	throw new Error('Ti.Geolocation.getPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.getPurpose = function () {
	return '';
};
Geolocation.prototype.getShowCalibration = function () {
	return true;
};
Geolocation.prototype.getTrackSignificantLocationChange = function () {
	return true;
};
Geolocation.prototype.removeEventListener = function () {
};
Geolocation.prototype.reverseGeocoder = function () {
};
Geolocation.prototype.setAccuracy = function () {
};
Geolocation.prototype.setActivityType = function () {
};
Geolocation.prototype.setBubbleParent = function () {
};
Geolocation.prototype.setDistanceFilter = function () {
};
Geolocation.prototype.setFrequency = function () {
	throw new Error('Ti.Geolocation.setFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.setHeadingFilter = function () {
};
Geolocation.prototype.setLifecycleContainer = function () {
};
Geolocation.prototype.setLocationServicesAuthorization = function () {
};
Geolocation.prototype.setPauseLocationUpdateAutomatically = function () {
};
Geolocation.prototype.setPreferredProvider = function () {
	throw new Error('Ti.Geolocation.setPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.setPurpose = function () {
};
Geolocation.prototype.setShowCalibration = function () {
};
Geolocation.prototype.setTrackSignificantLocationChange = function () {
};
module.exports = function (properties) {
	return new Geolocation(properties);
};