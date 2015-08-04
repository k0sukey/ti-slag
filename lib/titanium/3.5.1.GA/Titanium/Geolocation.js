var crypto = require('crypto');
function Geolocation(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ACCURACY_BEST',
			'ACCURACY_BEST_FOR_NAVIGATION',
			'ACCURACY_HIGH',
			'ACCURACY_HUNDRED_METERS',
			'ACCURACY_KILOMETER',
			'ACCURACY_LOW',
			'ACCURACY_NEAREST_TEN_METERS',
			'ACCURACY_THREE_KILOMETERS',
			'ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION',
			'ACTIVITYTYPE_FITNESS',
			'ACTIVITYTYPE_OTHER',
			'ACTIVITYTYPE_OTHER_NAVIGATION',
			'AUTHORIZATION_ALWAYS',
			'AUTHORIZATION_AUTHORIZED',
			'AUTHORIZATION_DENIED',
			'AUTHORIZATION_RESTRICTED',
			'AUTHORIZATION_UNKNOWN',
			'AUTHORIZATION_WHEN_IN_USE',
			'ERROR_DENIED',
			'ERROR_HEADING_FAILURE',
			'ERROR_LOCATION_UNKNOWN',
			'ERROR_NETWORK',
			'ERROR_REGION_MONITORING_DELAYED',
			'ERROR_REGION_MONITORING_DENIED',
			'ERROR_REGION_MONITORING_FAILURE',
			'ERROR_TIMEOUT',
			'PROVIDER_GPS',
			'PROVIDER_NETWORK',
			'PROVIDER_PASSIVE',
			'accuracy',
			'activityType',
			'apiName',
			'bubbleParent',
			'distanceFilter',
			'frequency',
			'hasCompass',
			'headingFilter',
			'lastGeolocation',
			'locationServicesAuthorization',
			'locationServicesEnabled',
			'pauseLocationUpdateAutomatically',
			'preferredProvider',
			'purpose',
			'showCalibration',
			'trackSignificantLocationChange',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.ACCURACY_BEST) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST is read only property');
	}
	this.ACCURACY_BEST = 0;
	if (__SLAG__properties.ACCURACY_BEST_FOR_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST_FOR_NAVIGATION is read only property');
	}
	this.ACCURACY_BEST_FOR_NAVIGATION = 0;
	if (__SLAG__properties.ACCURACY_HIGH) {
		throw new Error('Ti.Geolocation.ACCURACY_HIGH is read only property');
	}
	this.ACCURACY_HIGH = 0;
	if (__SLAG__properties.ACCURACY_HUNDRED_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_HUNDRED_METERS is read only property');
	}
	this.ACCURACY_HUNDRED_METERS = 0;
	if (__SLAG__properties.ACCURACY_KILOMETER) {
		throw new Error('Ti.Geolocation.ACCURACY_KILOMETER is read only property');
	}
	this.ACCURACY_KILOMETER = 0;
	if (__SLAG__properties.ACCURACY_LOW) {
		throw new Error('Ti.Geolocation.ACCURACY_LOW is read only property');
	}
	this.ACCURACY_LOW = 0;
	if (__SLAG__properties.ACCURACY_NEAREST_TEN_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS is read only property');
	}
	this.ACCURACY_NEAREST_TEN_METERS = 0;
	if (__SLAG__properties.ACCURACY_THREE_KILOMETERS) {
		throw new Error('Ti.Geolocation.ACCURACY_THREE_KILOMETERS is read only property');
	}
	this.ACCURACY_THREE_KILOMETERS = 0;
	if (__SLAG__properties.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION is read only property');
	}
	this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = '';
	if (__SLAG__properties.ACTIVITYTYPE_FITNESS) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_FITNESS is read only property');
	}
	this.ACTIVITYTYPE_FITNESS = '';
	if (__SLAG__properties.ACTIVITYTYPE_OTHER) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER is read only property');
	}
	this.ACTIVITYTYPE_OTHER = '';
	if (__SLAG__properties.ACTIVITYTYPE_OTHER_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER_NAVIGATION is read only property');
	}
	this.ACTIVITYTYPE_OTHER_NAVIGATION = '';
	if (__SLAG__properties.AUTHORIZATION_ALWAYS) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_ALWAYS is read only property');
	}
	this.AUTHORIZATION_ALWAYS = 0;
	if (__SLAG__properties.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG__properties.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG__properties.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG__properties.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG__properties.AUTHORIZATION_WHEN_IN_USE) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE is read only property');
	}
	this.AUTHORIZATION_WHEN_IN_USE = 0;
	if (__SLAG__properties.ERROR_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_DENIED is read only property');
	}
	this.ERROR_DENIED = 0;
	if (__SLAG__properties.ERROR_HEADING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_HEADING_FAILURE is read only property');
	}
	this.ERROR_HEADING_FAILURE = 0;
	if (__SLAG__properties.ERROR_LOCATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.ERROR_LOCATION_UNKNOWN is read only property');
	}
	this.ERROR_LOCATION_UNKNOWN = 0;
	if (__SLAG__properties.ERROR_NETWORK) {
		throw new Error('Ti.Geolocation.ERROR_NETWORK is read only property');
	}
	this.ERROR_NETWORK = 0;
	if (__SLAG__properties.ERROR_REGION_MONITORING_DELAYED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED is read only property');
	}
	this.ERROR_REGION_MONITORING_DELAYED = 0;
	if (__SLAG__properties.ERROR_REGION_MONITORING_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DENIED is read only property');
	}
	this.ERROR_REGION_MONITORING_DENIED = 0;
	if (__SLAG__properties.ERROR_REGION_MONITORING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE is read only property');
	}
	this.ERROR_REGION_MONITORING_FAILURE = 0;
	if (__SLAG__properties.ERROR_TIMEOUT) {
		throw new Error('Ti.Geolocation.ERROR_TIMEOUT is read only property');
	}
	this.ERROR_TIMEOUT = 0;
	if (__SLAG__properties.PROVIDER_GPS) {
		throw new Error('Ti.Geolocation.PROVIDER_GPS is read only property');
	}
	this.PROVIDER_GPS = '';
	if (__SLAG__properties.PROVIDER_NETWORK) {
		throw new Error('Ti.Geolocation.PROVIDER_NETWORK is read only property');
	}
	this.PROVIDER_NETWORK = '';
	if (__SLAG__properties.PROVIDER_PASSIVE) {
		throw new Error('Ti.Geolocation.PROVIDER_PASSIVE is read only property');
	}
	this.PROVIDER_PASSIVE = '';
	this.accuracy = __SLAG__properties.accuracy || 0;
	this.activityType = __SLAG__properties.activityType || 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Geolocation.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.distanceFilter = __SLAG__properties.distanceFilter || 0;
	if (__SLAG__properties.frequency) {
		throw new Error('Ti.Geolocation.frequency was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.hasCompass) {
		throw new Error('Ti.Geolocation.hasCompass is read only property');
	}
	this.hasCompass = true;
	this.headingFilter = __SLAG__properties.headingFilter || 0;
	if (__SLAG__properties.lastGeolocation) {
		throw new Error('Ti.Geolocation.lastGeolocation is read only property');
	}
	this.lastGeolocation = '';
	this.locationServicesAuthorization = __SLAG__properties.locationServicesAuthorization || 0;
	if (__SLAG__properties.locationServicesEnabled) {
		throw new Error('Ti.Geolocation.locationServicesEnabled is read only property');
	}
	this.locationServicesEnabled = true;
	this.pauseLocationUpdateAutomatically = __SLAG__properties.pauseLocationUpdateAutomatically || true;
	if (__SLAG__properties.preferredProvider) {
		throw new Error('Ti.Geolocation.preferredProvider was deprecated, since 2.0.0');
	}
	this.purpose = __SLAG__properties.purpose || '';
	this.showCalibration = __SLAG__properties.showCalibration || true;
	this.trackSignificantLocationChange = __SLAG__properties.trackSignificantLocationChange || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Geolocation.prototype.addEventListener = function () {
};
Geolocation.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
	throw new Error('Ti.Geolocation.getFrequency was deprecated, since 2.0.0');
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
	throw new Error('Ti.Geolocation.getPreferredProvider was deprecated, since 2.0.0');
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
Geolocation.prototype.setFrequency = function () {
	throw new Error('Ti.Geolocation.setFrequency was deprecated, since 2.0.0');
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
Geolocation.prototype.setPreferredProvider = function () {
	throw new Error('Ti.Geolocation.setPreferredProvider was deprecated, since 2.0.0');
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