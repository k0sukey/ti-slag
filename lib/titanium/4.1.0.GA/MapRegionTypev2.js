var crypto = require('crypto');
function MapRegionTypev2(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bearing',
			'longitude',
			'latitude',
			'longitudeDelta',
			'latitudeDelta',
			'tilt',
			'zoom',
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
	this.bearing = __SLAG__properties.bearing || 0;
	this.longitude = __SLAG__properties.longitude || 0;
	this.latitude = __SLAG__properties.latitude || 0;
	this.longitudeDelta = __SLAG__properties.longitudeDelta || 0;
	this.latitudeDelta = __SLAG__properties.latitudeDelta || 0;
	this.tilt = __SLAG__properties.tilt || 0;
	this.zoom = __SLAG__properties.zoom || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new MapRegionTypev2(properties);
};