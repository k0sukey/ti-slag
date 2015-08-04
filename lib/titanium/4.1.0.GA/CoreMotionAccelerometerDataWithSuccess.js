var crypto = require('crypto');
function CoreMotionAccelerometerDataWithSuccess(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'timestamp',
			'acceleration',
			'success',
			'error',
			'code',
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
	if (__SLAG__properties.timestamp) {
		throw new Error('CoreMotionAccelerometerDataWithSuccess.timestamp is read only property');
	}
	this.timestamp = 0;
	if (__SLAG__properties.acceleration) {
		throw new Error('CoreMotionAccelerometerDataWithSuccess.acceleration is read only property');
	}
	this.acceleration = {};
	if (__SLAG__properties.success) {
		throw new Error('CoreMotionAccelerometerDataWithSuccess.success is read only property');
	}
	this.success = true;
	if (__SLAG__properties.error) {
		throw new Error('CoreMotionAccelerometerDataWithSuccess.error is read only property');
	}
	this.error = '';
	if (__SLAG__properties.code) {
		throw new Error('CoreMotionAccelerometerDataWithSuccess.code is read only property');
	}
	this.code = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionAccelerometerDataWithSuccess(properties);
};