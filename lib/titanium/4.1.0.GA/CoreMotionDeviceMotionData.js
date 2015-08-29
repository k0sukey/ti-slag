var crypto = require('crypto');
function CoreMotionDeviceMotionData(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'timestamp',
			'attitude',
			'rotationRate',
			'gravity',
			'userAcceleration',
			'magneticField',
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
		throw new Error('CoreMotionDeviceMotionData.timestamp is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.timestamp = undefined;
	} else {
		this.timestamp = 0;
	}
	if (__SLAG_PROPERTIES.attitude) {
		throw new Error('CoreMotionDeviceMotionData.attitude is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.attitude = undefined;
	} else {
		this.attitude = {};
	}
	if (__SLAG_PROPERTIES.rotationRate) {
		throw new Error('CoreMotionDeviceMotionData.rotationRate is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationRate = undefined;
	} else {
		this.rotationRate = {};
	}
	if (__SLAG_PROPERTIES.gravity) {
		throw new Error('CoreMotionDeviceMotionData.gravity is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.gravity = undefined;
	} else {
		this.gravity = {};
	}
	if (__SLAG_PROPERTIES.userAcceleration) {
		throw new Error('CoreMotionDeviceMotionData.userAcceleration is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.userAcceleration = undefined;
	} else {
		this.userAcceleration = {};
	}
	if (__SLAG_PROPERTIES.magneticField) {
		throw new Error('CoreMotionDeviceMotionData.magneticField is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.magneticField = undefined;
	} else {
		this.magneticField = {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionDeviceMotionData(properties);
};