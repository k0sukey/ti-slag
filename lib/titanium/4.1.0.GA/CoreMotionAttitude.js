var crypto = require('crypto');
function CoreMotionAttitude(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'roll',
			'pitch',
			'yaw',
			'rotationMatrix',
			'quaternion',
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
	if (__SLAG__properties.roll) {
		throw new Error('CoreMotionAttitude.roll is read only property');
	}
	this.roll = 0;
	if (__SLAG__properties.pitch) {
		throw new Error('CoreMotionAttitude.pitch is read only property');
	}
	this.pitch = 0;
	if (__SLAG__properties.yaw) {
		throw new Error('CoreMotionAttitude.yaw is read only property');
	}
	this.yaw = 0;
	if (__SLAG__properties.rotationMatrix) {
		throw new Error('CoreMotionAttitude.rotationMatrix is read only property');
	}
	this.rotationMatrix = {};
	if (__SLAG__properties.quaternion) {
		throw new Error('CoreMotionAttitude.quaternion is read only property');
	}
	this.quaternion = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
CoreMotionAttitude.prototype.multiplyByInverseOfAttitude = function () {
};
module.exports = function (properties) {
	return new CoreMotionAttitude(properties);
};