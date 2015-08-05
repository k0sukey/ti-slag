var crypto = require('crypto');
function LocationCoordinates(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'accuracy',
			'altitude',
			'altitudeAccuracy',
			'heading',
			'latitude',
			'longitude',
			'speed',
			'timestamp',
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
	this.accuracy = __SLAG_PROPERTIES.accuracy || 0;
	this.altitude = __SLAG_PROPERTIES.altitude || 0;
	this.altitudeAccuracy = __SLAG_PROPERTIES.altitudeAccuracy || 0;
	this.heading = __SLAG_PROPERTIES.heading || 0;
	this.latitude = __SLAG_PROPERTIES.latitude || 0;
	this.longitude = __SLAG_PROPERTIES.longitude || 0;
	this.speed = __SLAG_PROPERTIES.speed || 0;
	this.timestamp = __SLAG_PROPERTIES.timestamp || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new LocationCoordinates(properties);
};