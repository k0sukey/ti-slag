function Geolocation(properties) {
	properties = properties || {};
	this.ACCURACY_BEST = properties.ACCURACY_BEST || 0;
	this.ACCURACY_BEST_FOR_NAVIGATION = properties.ACCURACY_BEST_FOR_NAVIGATION || 0;
	this.ACCURACY_HIGH = properties.ACCURACY_HIGH || 0;
	this.ACCURACY_HUNDRED_METERS = properties.ACCURACY_HUNDRED_METERS || 0;
	this.ACCURACY_KILOMETER = properties.ACCURACY_KILOMETER || 0;
	this.ACCURACY_LOW = properties.ACCURACY_LOW || 0;
	this.ACCURACY_NEAREST_TEN_METERS = properties.ACCURACY_NEAREST_TEN_METERS || 0;
	this.ACCURACY_THREE_KILOMETERS = properties.ACCURACY_THREE_KILOMETERS || 0;
	this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = properties.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION || '';
	this.ACTIVITYTYPE_FITNESS = properties.ACTIVITYTYPE_FITNESS || '';
	this.ACTIVITYTYPE_OTHER = properties.ACTIVITYTYPE_OTHER || '';
	this.ACTIVITYTYPE_OTHER_NAVIGATION = properties.ACTIVITYTYPE_OTHER_NAVIGATION || '';
	this.AUTHORIZATION_ALWAYS = properties.AUTHORIZATION_ALWAYS || 0;
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || 0;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || 0;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || 0;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || 0;
	this.AUTHORIZATION_WHEN_IN_USE = properties.AUTHORIZATION_WHEN_IN_USE || 0;
	this.ERROR_DENIED = properties.ERROR_DENIED || 0;
	this.ERROR_HEADING_FAILURE = properties.ERROR_HEADING_FAILURE || 0;
	this.ERROR_LOCATION_UNKNOWN = properties.ERROR_LOCATION_UNKNOWN || 0;
	this.ERROR_NETWORK = properties.ERROR_NETWORK || 0;
	this.ERROR_REGION_MONITORING_DELAYED = properties.ERROR_REGION_MONITORING_DELAYED || 0;
	this.ERROR_REGION_MONITORING_DENIED = properties.ERROR_REGION_MONITORING_DENIED || 0;
	this.ERROR_REGION_MONITORING_FAILURE = properties.ERROR_REGION_MONITORING_FAILURE || 0;
	this.ERROR_TIMEOUT = properties.ERROR_TIMEOUT || 0;
	this.PROVIDER_GPS = properties.PROVIDER_GPS || '';
	this.PROVIDER_NETWORK = properties.PROVIDER_NETWORK || '';
	this.PROVIDER_PASSIVE = properties.PROVIDER_PASSIVE || '';
	this.accuracy = properties.accuracy || 0;
	this.activityType = properties.activityType || 0;
	this.apiName = 'Ti.Geolocation';
	this.bubbleParent = properties.bubbleParent || true;
	this.distanceFilter = properties.distanceFilter || 0;
	if (properties.frequency) {
		throw new Error('Ti.Geolocation.frequency was deprecated, since 2.0.0');
	}
	this.hasCompass = properties.hasCompass || true;
	this.headingFilter = properties.headingFilter || 0;
	this.lastGeolocation = properties.lastGeolocation || '';
	this.locationServicesAuthorization = properties.locationServicesAuthorization || 0;
	this.locationServicesEnabled = properties.locationServicesEnabled || true;
	this.pauseLocationUpdateAutomatically = properties.pauseLocationUpdateAutomatically || true;
	if (properties.preferredProvider) {
		throw new Error('Ti.Geolocation.preferredProvider was deprecated, since 2.0.0');
	}
	this.purpose = properties.purpose || '';
	this.showCalibration = properties.showCalibration || true;
	this.trackSignificantLocationChange = properties.trackSignificantLocationChange || true;
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