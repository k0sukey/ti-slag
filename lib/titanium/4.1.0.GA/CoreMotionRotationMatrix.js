var crypto = require('crypto');
function CoreMotionRotationMatrix(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.m11) {
		throw new Error('CoreMotionRotationMatrix.m11 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m11 = undefined;
	} else {
		this.m11 = 0;
	}
	if (__SLAG_PROPERTIES.m12) {
		throw new Error('CoreMotionRotationMatrix.m12 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m12 = undefined;
	} else {
		this.m12 = 0;
	}
	if (__SLAG_PROPERTIES.m13) {
		throw new Error('CoreMotionRotationMatrix.m13 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m13 = undefined;
	} else {
		this.m13 = 0;
	}
	if (__SLAG_PROPERTIES.m21) {
		throw new Error('CoreMotionRotationMatrix.m21 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m21 = undefined;
	} else {
		this.m21 = 0;
	}
	if (__SLAG_PROPERTIES.m22) {
		throw new Error('CoreMotionRotationMatrix.m22 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m22 = undefined;
	} else {
		this.m22 = 0;
	}
	if (__SLAG_PROPERTIES.m23) {
		throw new Error('CoreMotionRotationMatrix.m23 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m23 = undefined;
	} else {
		this.m23 = 0;
	}
	if (__SLAG_PROPERTIES.m31) {
		throw new Error('CoreMotionRotationMatrix.m31 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m31 = undefined;
	} else {
		this.m31 = 0;
	}
	if (__SLAG_PROPERTIES.m32) {
		throw new Error('CoreMotionRotationMatrix.m32 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m32 = undefined;
	} else {
		this.m32 = 0;
	}
	if (__SLAG_PROPERTIES.m33) {
		throw new Error('CoreMotionRotationMatrix.m33 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m33 = undefined;
	} else {
		this.m33 = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionRotationMatrix(properties);
};