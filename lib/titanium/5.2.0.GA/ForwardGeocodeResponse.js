var crypto = require('crypto');
function ForwardGeocodeResponse(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'success',
			'error',
			'code',
			'accuracy',
			'longitude',
			'latitude',
			'street',
			'street1',
			'city',
			'region1',
			'region2',
			'postalCode',
			'country',
			'countryCode',
			'country_code',
			'displayAddress',
			'address',
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
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.success = undefined;
	} else {
		this.success = __SLAG_PROPERTIES.success || true;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.error = undefined;
	} else {
		this.error = __SLAG_PROPERTIES.error || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.code = undefined;
	} else {
		this.code = __SLAG_PROPERTIES.code || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accuracy = undefined;
	} else {
		this.accuracy = __SLAG_PROPERTIES.accuracy || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.longitude = undefined;
	} else {
		this.longitude = __SLAG_PROPERTIES.longitude || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.latitude = undefined;
	} else {
		this.latitude = __SLAG_PROPERTIES.latitude || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.street = undefined;
	} else {
		this.street = __SLAG_PROPERTIES.street || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.street1 = undefined;
	} else {
		this.street1 = __SLAG_PROPERTIES.street1 || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.city = undefined;
	} else {
		this.city = __SLAG_PROPERTIES.city || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.region1 = undefined;
	} else {
		this.region1 = __SLAG_PROPERTIES.region1 || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.region2 = undefined;
	} else {
		this.region2 = __SLAG_PROPERTIES.region2 || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.postalCode = undefined;
	} else {
		this.postalCode = __SLAG_PROPERTIES.postalCode || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.country = undefined;
	} else {
		this.country = __SLAG_PROPERTIES.country || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.countryCode = undefined;
	} else {
		this.countryCode = __SLAG_PROPERTIES.countryCode || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.country_code = undefined;
	} else {
		this.country_code = __SLAG_PROPERTIES.country_code || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.displayAddress = undefined;
	} else {
		this.displayAddress = __SLAG_PROPERTIES.displayAddress || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.address = undefined;
	} else {
		this.address = __SLAG_PROPERTIES.address || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new ForwardGeocodeResponse(properties);
};