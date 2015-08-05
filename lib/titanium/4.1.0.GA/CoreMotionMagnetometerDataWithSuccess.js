var crypto = require('crypto');
function CoreMotionMagnetometerDataWithSuccess(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'timestamp',
			'magneticField',
			'success',
			'error',
			'code',
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
	if (__SLAG_PROPERTIES.timestamp) {
		throw new Error('CoreMotionMagnetometerDataWithSuccess.timestamp is read only property');
	}
	this.timestamp = 0;
	if (__SLAG_PROPERTIES.magneticField) {
		throw new Error('CoreMotionMagnetometerDataWithSuccess.magneticField is read only property');
	}
	this.magneticField = {};
	if (__SLAG_PROPERTIES.success) {
		throw new Error('CoreMotionMagnetometerDataWithSuccess.success is read only property');
	}
	this.success = true;
	if (__SLAG_PROPERTIES.error) {
		throw new Error('CoreMotionMagnetometerDataWithSuccess.error is read only property');
	}
	this.error = '';
	if (__SLAG_PROPERTIES.code) {
		throw new Error('CoreMotionMagnetometerDataWithSuccess.code is read only property');
	}
	this.code = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionMagnetometerDataWithSuccess(properties);
};