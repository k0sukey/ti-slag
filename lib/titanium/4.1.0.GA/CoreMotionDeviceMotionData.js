var crypto = require('crypto');
function CoreMotionDeviceMotionData(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'timestamp',
			'attitude',
			'rotationRate',
			'gravity',
			'userAcceleration',
			'magneticField',
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
		throw new Error('CoreMotionDeviceMotionData.timestamp is read only property');
	}
	this.timestamp = 0;
	if (__SLAG__properties.attitude) {
		throw new Error('CoreMotionDeviceMotionData.attitude is read only property');
	}
	this.attitude = {};
	if (__SLAG__properties.rotationRate) {
		throw new Error('CoreMotionDeviceMotionData.rotationRate is read only property');
	}
	this.rotationRate = {};
	if (__SLAG__properties.gravity) {
		throw new Error('CoreMotionDeviceMotionData.gravity is read only property');
	}
	this.gravity = {};
	if (__SLAG__properties.userAcceleration) {
		throw new Error('CoreMotionDeviceMotionData.userAcceleration is read only property');
	}
	this.userAcceleration = {};
	if (__SLAG__properties.magneticField) {
		throw new Error('CoreMotionDeviceMotionData.magneticField is read only property');
	}
	this.magneticField = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionDeviceMotionData(properties);
};