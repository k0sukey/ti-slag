var crypto = require('crypto');
function LocationCoordinates(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accuracy',
			'altitude',
			'altitudeAccuracy',
			'floor',
			'heading',
			'latitude',
			'longitude',
			'speed',
			'timestamp',
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
	this.accuracy = __SLAG__properties.accuracy || 0;
	this.altitude = __SLAG__properties.altitude || 0;
	this.altitudeAccuracy = __SLAG__properties.altitudeAccuracy || 0;
	this.floor = __SLAG__properties.floor || {};
	this.heading = __SLAG__properties.heading || 0;
	this.latitude = __SLAG__properties.latitude || 0;
	this.longitude = __SLAG__properties.longitude || 0;
	this.speed = __SLAG__properties.speed || 0;
	this.timestamp = __SLAG__properties.timestamp || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new LocationCoordinates(properties);
};