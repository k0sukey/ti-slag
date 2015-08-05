var crypto = require('crypto');
function ForwardGeocodeResponse(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
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
	this.success = __SLAG_PROPERTIES.success || true;
	this.error = __SLAG_PROPERTIES.error || '';
	this.code = __SLAG_PROPERTIES.code || 0;
	this.accuracy = __SLAG_PROPERTIES.accuracy || 0;
	this.longitude = __SLAG_PROPERTIES.longitude || '';
	this.latitude = __SLAG_PROPERTIES.latitude || '';
	this.street = __SLAG_PROPERTIES.street || '';
	this.street1 = __SLAG_PROPERTIES.street1 || '';
	this.city = __SLAG_PROPERTIES.city || '';
	this.region1 = __SLAG_PROPERTIES.region1 || '';
	this.region2 = __SLAG_PROPERTIES.region2 || '';
	this.postalCode = __SLAG_PROPERTIES.postalCode || '';
	this.country = __SLAG_PROPERTIES.country || '';
	this.countryCode = __SLAG_PROPERTIES.countryCode || '';
	this.country_code = __SLAG_PROPERTIES.country_code || '';
	this.displayAddress = __SLAG_PROPERTIES.displayAddress || '';
	this.address = __SLAG_PROPERTIES.address || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new ForwardGeocodeResponse(properties);
};