var crypto = require('crypto');
function CoreMotionDeviceMotionDataWithSuccess(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'timestamp',
			'attitude',
			'rotationRate',
			'gravity',
			'userAcceleration',
			'magneticField',
			'success',
			'error',
			'code',
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
	if (__SLAG__properties.timestamp) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.timestamp is read only property');
	}
	this.timestamp = 0;
	if (__SLAG__properties.attitude) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.attitude is read only property');
	}
	this.attitude = {};
	if (__SLAG__properties.rotationRate) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.rotationRate is read only property');
	}
	this.rotationRate = {};
	if (__SLAG__properties.gravity) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.gravity is read only property');
	}
	this.gravity = {};
	if (__SLAG__properties.userAcceleration) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.userAcceleration is read only property');
	}
	this.userAcceleration = {};
	if (__SLAG__properties.magneticField) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.magneticField is read only property');
	}
	this.magneticField = {};
	if (__SLAG__properties.success) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.success is read only property');
	}
	this.success = true;
	if (__SLAG__properties.error) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.error is read only property');
	}
	this.error = '';
	if (__SLAG__properties.code) {
		throw new Error('CoreMotionDeviceMotionDataWithSuccess.code is read only property');
	}
	this.code = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionDeviceMotionDataWithSuccess(properties);
};