var crypto = require('crypto');
function HeadingData(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'accuracy',
			'magneticHeading',
			'timestamp',
			'trueHeading',
			'x',
			'y',
			'z',
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
	this.magneticHeading = __SLAG_PROPERTIES.magneticHeading || 0;
	this.timestamp = __SLAG_PROPERTIES.timestamp || 0;
	this.trueHeading = __SLAG_PROPERTIES.trueHeading || 0;
	this.x = __SLAG_PROPERTIES.x || 0;
	this.y = __SLAG_PROPERTIES.y || 0;
	this.z = __SLAG_PROPERTIES.z || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new HeadingData(properties);
};