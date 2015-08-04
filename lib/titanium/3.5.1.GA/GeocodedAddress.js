var crypto = require('crypto');
function GeocodedAddress(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'address',
			'city',
			'country',
			'countryCode',
			'country_code',
			'displayAddress',
			'latitude',
			'longitude',
			'postalCode',
			'region1',
			'region2',
			'street',
			'street1',
			'zipcode',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.address = __SLAG__properties.address || '';
	this.city = __SLAG__properties.city || '';
	this.country = __SLAG__properties.country || '';
	this.countryCode = __SLAG__properties.countryCode || '';
	this.country_code = __SLAG__properties.country_code || '';
	this.displayAddress = __SLAG__properties.displayAddress || '';
	this.latitude = __SLAG__properties.latitude || '';
	this.longitude = __SLAG__properties.longitude || '';
	this.postalCode = __SLAG__properties.postalCode || '';
	this.region1 = __SLAG__properties.region1 || '';
	this.region2 = __SLAG__properties.region2 || '';
	this.street = __SLAG__properties.street || '';
	this.street1 = __SLAG__properties.street1 || '';
	this.zipcode = __SLAG__properties.zipcode || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new GeocodedAddress(properties);
};