var crypto = require('crypto');
function Geolocation(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'frequency',
			'preferredProvider',
			'purpose',
			'showCalibration',
			'trackSignificantLocationChange',
			'pauseLocationUpdateAutomatically',
			'ACCURACY_BEST',
			'ACCURACY_BEST_FOR_NAVIGATION',
			'ACCURACY_HUNDRED_METERS',
			'ACCURACY_KILOMETER',
			'ACCURACY_NEAREST_TEN_METERS',
			'ACCURACY_THREE_KILOMETERS',
			'ACCURACY_HIGH',
			'ACCURACY_LOW',
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
			'distanceFilter',
			'headingFilter',
			'hasCompass',
			'locationServicesAuthorization',
			'locationServicesEnabled',
			'lastGeolocation',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Geolocation.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.frequency) {
		throw new Error('Ti.Geolocation.frequency was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.preferredProvider) {
		throw new Error('Ti.Geolocation.preferredProvider was deprecated, since 2.0.0');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.purpose = undefined;
	} else {
		this.purpose = __SLAG_PROPERTIES.purpose || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showCalibration = undefined;
	} else {
		this.showCalibration = __SLAG_PROPERTIES.showCalibration || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.trackSignificantLocationChange = undefined;
	} else {
		this.trackSignificantLocationChange = __SLAG_PROPERTIES.trackSignificantLocationChange || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pauseLocationUpdateAutomatically = undefined;
	} else {
		this.pauseLocationUpdateAutomatically = __SLAG_PROPERTIES.pauseLocationUpdateAutomatically || true;
	}
	if (__SLAG_PROPERTIES.ACCURACY_BEST) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_BEST = undefined;
	} else {
		this.ACCURACY_BEST = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_BEST_FOR_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACCURACY_BEST_FOR_NAVIGATION is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_BEST_FOR_NAVIGATION = undefined;
	} else {
		this.ACCURACY_BEST_FOR_NAVIGATION = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_HUNDRED_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_HUNDRED_METERS is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_HUNDRED_METERS = undefined;
	} else {
		this.ACCURACY_HUNDRED_METERS = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_KILOMETER) {
		throw new Error('Ti.Geolocation.ACCURACY_KILOMETER is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_KILOMETER = undefined;
	} else {
		this.ACCURACY_KILOMETER = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_NEAREST_TEN_METERS) {
		throw new Error('Ti.Geolocation.ACCURACY_NEAREST_TEN_METERS is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_NEAREST_TEN_METERS = undefined;
	} else {
		this.ACCURACY_NEAREST_TEN_METERS = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_THREE_KILOMETERS) {
		throw new Error('Ti.Geolocation.ACCURACY_THREE_KILOMETERS is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_THREE_KILOMETERS = undefined;
	} else {
		this.ACCURACY_THREE_KILOMETERS = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_HIGH) {
		throw new Error('Ti.Geolocation.ACCURACY_HIGH is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_HIGH = undefined;
	} else {
		this.ACCURACY_HIGH = 0;
	}
	if (__SLAG_PROPERTIES.ACCURACY_LOW) {
		throw new Error('Ti.Geolocation.ACCURACY_LOW is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACCURACY_LOW = undefined;
	} else {
		this.ACCURACY_LOW = 0;
	}
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = undefined;
	} else {
		this.ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION = '';
	}
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_FITNESS) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_FITNESS is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVITYTYPE_FITNESS = undefined;
	} else {
		this.ACTIVITYTYPE_FITNESS = '';
	}
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_OTHER) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVITYTYPE_OTHER = undefined;
	} else {
		this.ACTIVITYTYPE_OTHER = '';
	}
	if (__SLAG_PROPERTIES.ACTIVITYTYPE_OTHER_NAVIGATION) {
		throw new Error('Ti.Geolocation.ACTIVITYTYPE_OTHER_NAVIGATION is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVITYTYPE_OTHER_NAVIGATION = undefined;
	} else {
		this.ACTIVITYTYPE_OTHER_NAVIGATION = '';
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_ALWAYS) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_ALWAYS is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_ALWAYS = undefined;
	} else {
		this.AUTHORIZATION_ALWAYS = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_AUTHORIZED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_AUTHORIZED = undefined;
	} else {
		this.AUTHORIZATION_AUTHORIZED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_DENIED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_DENIED = undefined;
	} else {
		this.AUTHORIZATION_DENIED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_RESTRICTED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_RESTRICTED = undefined;
	} else {
		this.AUTHORIZATION_RESTRICTED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_UNKNOWN is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_UNKNOWN = undefined;
	} else {
		this.AUTHORIZATION_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_WHEN_IN_USE) {
		throw new Error('Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_WHEN_IN_USE = undefined;
	} else {
		this.AUTHORIZATION_WHEN_IN_USE = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_DENIED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_DENIED = undefined;
	} else {
		this.ERROR_DENIED = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_HEADING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_HEADING_FAILURE is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_HEADING_FAILURE = undefined;
	} else {
		this.ERROR_HEADING_FAILURE = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_LOCATION_UNKNOWN) {
		throw new Error('Ti.Geolocation.ERROR_LOCATION_UNKNOWN is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_LOCATION_UNKNOWN = undefined;
	} else {
		this.ERROR_LOCATION_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_NETWORK) {
		throw new Error('Ti.Geolocation.ERROR_NETWORK is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_NETWORK = undefined;
	} else {
		this.ERROR_NETWORK = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_DELAYED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_REGION_MONITORING_DELAYED = undefined;
	} else {
		this.ERROR_REGION_MONITORING_DELAYED = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_DENIED) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_DENIED is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_REGION_MONITORING_DENIED = undefined;
	} else {
		this.ERROR_REGION_MONITORING_DENIED = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_REGION_MONITORING_FAILURE) {
		throw new Error('Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_REGION_MONITORING_FAILURE = undefined;
	} else {
		this.ERROR_REGION_MONITORING_FAILURE = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_TIMEOUT) {
		throw new Error('Ti.Geolocation.ERROR_TIMEOUT is read only property');
	}
	if ([
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_TIMEOUT = undefined;
	} else {
		this.ERROR_TIMEOUT = 0;
	}
	if (__SLAG_PROPERTIES.PROVIDER_GPS) {
		throw new Error('Ti.Geolocation.PROVIDER_GPS is read only property');
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROVIDER_GPS = undefined;
	} else {
		this.PROVIDER_GPS = '';
	}
	if (__SLAG_PROPERTIES.PROVIDER_NETWORK) {
		throw new Error('Ti.Geolocation.PROVIDER_NETWORK is read only property');
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROVIDER_NETWORK = undefined;
	} else {
		this.PROVIDER_NETWORK = '';
	}
	if (__SLAG_PROPERTIES.PROVIDER_PASSIVE) {
		throw new Error('Ti.Geolocation.PROVIDER_PASSIVE is read only property');
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROVIDER_PASSIVE = undefined;
	} else {
		this.PROVIDER_PASSIVE = '';
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accuracy = undefined;
	} else {
		this.accuracy = __SLAG_PROPERTIES.accuracy || 0;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityType = undefined;
	} else {
		this.activityType = __SLAG_PROPERTIES.activityType || 0;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.distanceFilter = undefined;
	} else {
		this.distanceFilter = __SLAG_PROPERTIES.distanceFilter || 0;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.headingFilter = undefined;
	} else {
		this.headingFilter = __SLAG_PROPERTIES.headingFilter || 0;
	}
	if (__SLAG_PROPERTIES.hasCompass) {
		throw new Error('Ti.Geolocation.hasCompass is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.hasCompass = undefined;
	} else {
		this.hasCompass = true;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.locationServicesAuthorization = undefined;
	} else {
		this.locationServicesAuthorization = __SLAG_PROPERTIES.locationServicesAuthorization || 0;
	}
	if (__SLAG_PROPERTIES.locationServicesEnabled) {
		throw new Error('Ti.Geolocation.locationServicesEnabled is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.locationServicesEnabled = undefined;
	} else {
		this.locationServicesEnabled = true;
	}
	if (__SLAG_PROPERTIES.lastGeolocation) {
		throw new Error('Ti.Geolocation.lastGeolocation is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lastGeolocation = undefined;
	} else {
		this.lastGeolocation = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Geolocation.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
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
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.forwardGeocoder = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getCurrentHeading = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getCurrentPosition = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.reverseGeocoder = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Geolocation.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Geolocation.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
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
Geolocation.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Geolocation.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Geolocation.prototype.getFrequency = function () {
	throw new Error('Ti.Geolocation.getFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.setFrequency = function () {
	throw new Error('Ti.Geolocation.setFrequency was deprecated, since 2.0.0');
};
Geolocation.prototype.getPreferredProvider = function () {
	throw new Error('Ti.Geolocation.getPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.setPreferredProvider = function () {
	throw new Error('Ti.Geolocation.setPreferredProvider was deprecated, since 2.0.0');
};
Geolocation.prototype.getPurpose = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.purpose;
};
Geolocation.prototype.setPurpose = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.purpose = __SLAG__PROPERTY;
};
Geolocation.prototype.getShowCalibration = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.showCalibration;
};
Geolocation.prototype.setShowCalibration = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showCalibration = __SLAG__PROPERTY;
};
Geolocation.prototype.getTrackSignificantLocationChange = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.trackSignificantLocationChange;
};
Geolocation.prototype.setTrackSignificantLocationChange = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.trackSignificantLocationChange = __SLAG__PROPERTY;
};
Geolocation.prototype.getPauseLocationUpdateAutomatically = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pauseLocationUpdateAutomatically;
};
Geolocation.prototype.setPauseLocationUpdateAutomatically = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pauseLocationUpdateAutomatically = __SLAG__PROPERTY;
};
Geolocation.prototype.getAccuracy = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accuracy;
};
Geolocation.prototype.setAccuracy = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accuracy = __SLAG__PROPERTY;
};
Geolocation.prototype.getActivityType = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activityType;
};
Geolocation.prototype.setActivityType = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activityType = __SLAG__PROPERTY;
};
Geolocation.prototype.getDistanceFilter = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.distanceFilter;
};
Geolocation.prototype.setDistanceFilter = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.distanceFilter = __SLAG__PROPERTY;
};
Geolocation.prototype.getHeadingFilter = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.headingFilter;
};
Geolocation.prototype.setHeadingFilter = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.headingFilter = __SLAG__PROPERTY;
};
Geolocation.prototype.getHasCompass = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasCompass;
};
Geolocation.prototype.getLocationServicesAuthorization = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locationServicesAuthorization;
};
Geolocation.prototype.setLocationServicesAuthorization = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.locationServicesAuthorization = __SLAG__PROPERTY;
};
Geolocation.prototype.getLocationServicesEnabled = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locationServicesEnabled;
};
Geolocation.prototype.getLastGeolocation = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastGeolocation;
};
module.exports = function (properties) {
	return new Geolocation(properties);
};