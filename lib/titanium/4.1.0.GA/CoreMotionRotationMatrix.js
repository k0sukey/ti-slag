var crypto = require('crypto');
function CoreMotionRotationMatrix(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'm11',
			'm12',
			'm13',
			'm21',
			'm22',
			'm23',
			'm31',
			'm32',
			'm33',
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
	if (__SLAG__properties.m11) {
		throw new Error('CoreMotionRotationMatrix.m11 is read only property');
	}
	this.m11 = 0;
	if (__SLAG__properties.m12) {
		throw new Error('CoreMotionRotationMatrix.m12 is read only property');
	}
	this.m12 = 0;
	if (__SLAG__properties.m13) {
		throw new Error('CoreMotionRotationMatrix.m13 is read only property');
	}
	this.m13 = 0;
	if (__SLAG__properties.m21) {
		throw new Error('CoreMotionRotationMatrix.m21 is read only property');
	}
	this.m21 = 0;
	if (__SLAG__properties.m22) {
		throw new Error('CoreMotionRotationMatrix.m22 is read only property');
	}
	this.m22 = 0;
	if (__SLAG__properties.m23) {
		throw new Error('CoreMotionRotationMatrix.m23 is read only property');
	}
	this.m23 = 0;
	if (__SLAG__properties.m31) {
		throw new Error('CoreMotionRotationMatrix.m31 is read only property');
	}
	this.m31 = 0;
	if (__SLAG__properties.m32) {
		throw new Error('CoreMotionRotationMatrix.m32 is read only property');
	}
	this.m32 = 0;
	if (__SLAG__properties.m33) {
		throw new Error('CoreMotionRotationMatrix.m33 is read only property');
	}
	this.m33 = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionRotationMatrix(properties);
};