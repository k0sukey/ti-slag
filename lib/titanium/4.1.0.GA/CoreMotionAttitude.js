var crypto = require('crypto');
function CoreMotionAttitude(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'roll',
			'pitch',
			'yaw',
			'rotationMatrix',
			'quaternion',
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
	if (__SLAG_PROPERTIES.roll) {
		throw new Error('CoreMotionAttitude.roll is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.roll = undefined;
	} else {
		this.roll = 0;
	}
	if (__SLAG_PROPERTIES.pitch) {
		throw new Error('CoreMotionAttitude.pitch is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pitch = undefined;
	} else {
		this.pitch = 0;
	}
	if (__SLAG_PROPERTIES.yaw) {
		throw new Error('CoreMotionAttitude.yaw is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.yaw = undefined;
	} else {
		this.yaw = 0;
	}
	if (__SLAG_PROPERTIES.rotationMatrix) {
		throw new Error('CoreMotionAttitude.rotationMatrix is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationMatrix = undefined;
	} else {
		this.rotationMatrix = {};
	}
	if (__SLAG_PROPERTIES.quaternion) {
		throw new Error('CoreMotionAttitude.quaternion is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.quaternion = undefined;
	} else {
		this.quaternion = {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
CoreMotionAttitude.prototype.multiplyByInverseOfAttitude = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new CoreMotionAttitude(properties);
};