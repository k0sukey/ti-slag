var crypto = require('crypto');
function MobileWeb(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'forwardGeocoderTimeout',
			'locationTimeout',
			'maximumHeadingAge',
			'maximumLocationAge',
			'reverseGeocoderTimeout',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Geolocation.MobileWeb.apiName is read only property');
	}
	this.apiName = 'Ti.Geolocation.MobileWeb';
	this.forwardGeocoderTimeout = __SLAG_PROPERTIES.forwardGeocoderTimeout || 0;
	this.locationTimeout = __SLAG_PROPERTIES.locationTimeout || 0;
	this.maximumHeadingAge = __SLAG_PROPERTIES.maximumHeadingAge || 0;
	this.maximumLocationAge = __SLAG_PROPERTIES.maximumLocationAge || 0;
	this.reverseGeocoderTimeout = __SLAG_PROPERTIES.reverseGeocoderTimeout || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
MobileWeb.prototype.addEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
MobileWeb.prototype.fireEvent = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.getApiName = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
MobileWeb.prototype.getForwardGeocoderTimeout = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.forwardGeocoderTimeout;
};
MobileWeb.prototype.getLocationTimeout = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locationTimeout;
};
MobileWeb.prototype.getMaximumHeadingAge = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.maximumHeadingAge;
};
MobileWeb.prototype.getMaximumLocationAge = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.maximumLocationAge;
};
MobileWeb.prototype.getReverseGeocoderTimeout = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.reverseGeocoderTimeout;
};
MobileWeb.prototype.removeEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MobileWeb.prototype.setForwardGeocoderTimeout = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.forwardGeocoderTimeout = __SLAG__PROPERTY;
};
MobileWeb.prototype.setLocationTimeout = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.locationTimeout = __SLAG__PROPERTY;
};
MobileWeb.prototype.setMaximumHeadingAge = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.maximumHeadingAge = __SLAG__PROPERTY;
};
MobileWeb.prototype.setMaximumLocationAge = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.maximumLocationAge = __SLAG__PROPERTY;
};
MobileWeb.prototype.setReverseGeocoderTimeout = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.reverseGeocoderTimeout = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};