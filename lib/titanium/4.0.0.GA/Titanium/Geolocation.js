var crypto = require('crypto');
function Geolocation(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'lifecycleContainer',
			'locationServicesAuthorization',
			'locationServicesEnabled',
			'pauseLocationUpdateAutomatically',
			'preferredProvider',
			'purpose',
			'showCalibration',
			'trackSignificantLocationChange',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.ACCURACY_BEST) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST is read only property');
	}
	this.ACCURACY_BEST = 0;
	if (__SLAG_PROPERTIES.ACCURACY_BEST_FOR_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST_FOR_NAVIGATION is read only property');
	}
	this.ACCURACY_BEST_FOR_NAVIGATION = 0;
	if (__SLAG_PROPERTIES.ACCURACY_HIGH) {
		throw new Error('Ti.Geolocation.ACCURACY_HIGH is read only property');
	}
	this.ACCURACY_HIGH = 0;
	if (__SLAG_PROPERTIES.ACCURACY_HUNDRED_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_HUNDRED_METERS is read only property');
	}
	this.ACCURACY_HUNDRED_METERS = 0;
	if (__SLAG_PROPERTIES.ACCURACY_KILOMETER) {
		throw new Error('Ti.Geolocation.ACCURACY_KILOMETER is read only property');
	}
	this.ACCURACY_KILOMETER = 0;
	if (__SLAG_PROPERTIES.ACCURACY_LOW) {
		throw new Error('Ti.Geolocation.ACCURACY_LOW is read only property');
	}
	this.ACCURACY_LOW = 0;
	if (__SLAG_PROPERTIES.ACCURACY_NEAREST_TEN_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS is read only property');
	}
	this.ACCURACY_NEAREST_TEN_METERS = 0;
	if (__SLAG_PROPERTIES.ACCURACY_THREE_KILOMETERS) {
		throw new Error('Ti.Geolocation.ACCURACY_THREE_KILOMETERS is read only property');
	}
	this.ACCURACY_THREE_KILOMETERS = 0;
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION is read only property');
	}
	this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = '';
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_FITNESS) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_FITNESS is read only property');
	}
	this.ACTIVITYTYPE_FITNESS = '';
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_OTHER) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER is read only property');
	}
	this.ACTIVITYTYPE_OTHER = '';
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_OTHER_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER_NAVIGATION is read only property');
	}
	this.ACTIVITYTYPE_OTHER_NAVIGATION = '';
	if (__SLAG_PROPERTIES.AUTHORIZATION_ALWAYS) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_ALWAYS is read only property');
	}
	this.AUTHORIZATION_ALWAYS = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_WHEN_IN_USE) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE is read only property');
	}
	this.AUTHORIZATION_WHEN_IN_USE = 0;
	if (__SLAG_PROPERTIES.ERROR_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_DENIED is read only property');
	}
	this.ERROR_DENIED = 0;
	if (__SLAG_PROPERTIES.ERROR_HEADING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_HEADING_FAILURE is read only property');
	}
	this.ERROR_HEADING_FAILURE = 0;
	if (__SLAG_PROPERTIES.ERROR_LOCATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.ERROR_LOCATION_UNKNOWN is read only property');
	}
	this.ERROR_LOCATION_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.ERROR_NETWORK) {
		throw new Error('Ti.Geolocation.ERROR_NETWORK is read only property');
	}
	this.ERROR_NETWORK = 0;
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_DELAYED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED is read only property');
	}
	this.ERROR_REGION_MONITORING_DELAYED = 0;
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DENIED is read only property');
	}
	this.ERROR_REGION_MONITORING_DENIED = 0;
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE is read only property');
	}
	this.ERROR_REGION_MONITORING_FAILURE = 0;
	if (__SLAG_PROPERTIES.ERROR_TIMEOUT) {
		throw new Error('Ti.Geolocation.ERROR_TIMEOUT is read only property');
	}
	this.ERROR_TIMEOUT = 0;
	if (__SLAG_PROPERTIES.PROVIDER_GPS) {
		throw new Error('Ti.Geolocation.PROVIDER_GPS is read only property');
	}
	this.PROVIDER_GPS = '';
	if (__SLAG_PROPERTIES.PROVIDER_NETWORK) {
		throw new Error('Ti.Geolocation.PROVIDER_NETWORK is read only property');
	}
	this.PROVIDER_NETWORK = '';
	if (__SLAG_PROPERTIES.PROVIDER_PASSIVE) {
		throw new Error('Ti.Geolocation.PROVIDER_PASSIVE is read only property');
	}
	this.PROVIDER_PASSIVE = '';
	this.accuracy = __SLAG_PROPERTIES.accuracy || 0;
	this.activityType = __SLAG_PROPERTIES.activityType || 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Geolocation.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.distanceFilter = __SLAG_PROPERTIES.distanceFilter || 0;
	if (__SLAG_PROPERTIES.frequency) {
		throw new Error('Ti.Geolocation.frequency was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.hasCompass) {
		throw new Error('Ti.Geolocation.hasCompass is read only property');
	}
	this.hasCompass = true;
	this.headingFilter = __SLAG_PROPERTIES.headingFilter || 0;
	if (__SLAG_PROPERTIES.lastGeolocation) {
		throw new Error('Ti.Geolocation.lastGeolocation is read only property');
	}
	this.lastGeolocation = '';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.locationServicesAuthorization = __SLAG_PROPERTIES.locationServicesAuthorization || 0;
	if (__SLAG_PROPERTIES.locationServicesEnabled) {
		throw new Error('Ti.Geolocation.locationServicesEnabled is read only property');
	}
	this.locationServicesEnabled = true;
	this.pauseLocationUpdateAutomatically = __SLAG_PROPERTIES.pauseLocationUpdateAutomatically || true;
	if (__SLAG_PROPERTIES.preferredProvider) {
		throw new Error('Ti.Geolocation.preferredProvider was deprecated, since 2.0.0');
	}
	this.purpose = __SLAG_PROPERTIES.purpose || '';
	this.showCalibration = __SLAG_PROPERTIES.showCalibration || true;
	this.trackSignificantLocationChange = __SLAG_PROPERTIES.trackSignificantLocationChange || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Geolocation.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Geolocation.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.forwardGeocoder = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getAccuracy = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accuracy;
};
Geolocation.prototype.getActivityType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activityType;
};
Geolocation.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Geolocation.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Geolocation.prototype.getCurrentHeading = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getCurrentPosition = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getDistanceFilter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.distanceFilter;
};
Geolocation.prototype.getFrequency = function () {
	throw new Error('Ti.Geolocation.getFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.getHasCompass = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasCompass;
};
Geolocation.prototype.getHeadingFilter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.headingFilter;
};
Geolocation.prototype.getLastGeolocation = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastGeolocation;
};
Geolocation.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Geolocation.prototype.getLocationServicesAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locationServicesAuthorization;
};
Geolocation.prototype.getLocationServicesEnabled = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locationServicesEnabled;
};
Geolocation.prototype.getPauseLocationUpdateAutomatically = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pauseLocationUpdateAutomatically;
};
Geolocation.prototype.getPreferredProvider = function () {
	throw new Error('Ti.Geolocation.getPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.getPurpose = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.purpose;
};
Geolocation.prototype.getShowCalibration = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.showCalibration;
};
Geolocation.prototype.getTrackSignificantLocationChange = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.trackSignificantLocationChange;
};
Geolocation.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.reverseGeocoder = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.setAccuracy = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accuracy = __SLAG__PROPERTY;
};
Geolocation.prototype.setActivityType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activityType = __SLAG__PROPERTY;
};
Geolocation.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Geolocation.prototype.setDistanceFilter = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.distanceFilter = __SLAG__PROPERTY;
};
Geolocation.prototype.setFrequency = function () {
	throw new Error('Ti.Geolocation.setFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.setHeadingFilter = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.headingFilter = __SLAG__PROPERTY;
};
Geolocation.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Geolocation.prototype.setLocationServicesAuthorization = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.locationServicesAuthorization = __SLAG__PROPERTY;
};
Geolocation.prototype.setPauseLocationUpdateAutomatically = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pauseLocationUpdateAutomatically = __SLAG__PROPERTY;
};
Geolocation.prototype.setPreferredProvider = function () {
	throw new Error('Ti.Geolocation.setPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.setPurpose = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.purpose = __SLAG__PROPERTY;
};
Geolocation.prototype.setShowCalibration = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showCalibration = __SLAG__PROPERTY;
};
Geolocation.prototype.setTrackSignificantLocationChange = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.trackSignificantLocationChange = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Geolocation(properties);
};