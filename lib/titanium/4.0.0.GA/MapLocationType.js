var crypto = require('crypto');
function MapLocationType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'animate',
			'latitude',
			'latitudeDelta',
			'longitude',
			'longitudeDelta',
			'regionFit',
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
	this.animate = __SLAG_PROPERTIES.animate || true;
	this.latitude = __SLAG_PROPERTIES.latitude || 0;
	this.latitudeDelta = __SLAG_PROPERTIES.latitudeDelta || 0;
	this.longitude = __SLAG_PROPERTIES.longitude || 0;
	this.longitudeDelta = __SLAG_PROPERTIES.longitudeDelta || 0;
	this.regionFit = __SLAG_PROPERTIES.regionFit || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new MapLocationType(properties);
};