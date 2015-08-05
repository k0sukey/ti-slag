var crypto = require('crypto');
function GeocodedAddress(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'street',
			'street1',
			'city',
			'region1',
			'region2',
			'postalCode',
			'zipcode',
			'country',
			'countryCode',
			'country_code',
			'longitude',
			'latitude',
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
	this.street = __SLAG_PROPERTIES.street || '';
	this.street1 = __SLAG_PROPERTIES.street1 || '';
	this.city = __SLAG_PROPERTIES.city || '';
	this.region1 = __SLAG_PROPERTIES.region1 || '';
	this.region2 = __SLAG_PROPERTIES.region2 || '';
	this.postalCode = __SLAG_PROPERTIES.postalCode || '';
	this.zipcode = __SLAG_PROPERTIES.zipcode || '';
	this.country = __SLAG_PROPERTIES.country || '';
	this.countryCode = __SLAG_PROPERTIES.countryCode || '';
	this.country_code = __SLAG_PROPERTIES.country_code || '';
	this.longitude = __SLAG_PROPERTIES.longitude || '';
	this.latitude = __SLAG_PROPERTIES.latitude || '';
	this.displayAddress = __SLAG_PROPERTIES.displayAddress || '';
	this.address = __SLAG_PROPERTIES.address || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new GeocodedAddress(properties);
};