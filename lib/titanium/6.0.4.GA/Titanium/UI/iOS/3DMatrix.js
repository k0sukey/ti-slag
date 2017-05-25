var crypto = require('crypto');
function ThreeDMatrix(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'm11',
			'm12',
			'm13',
			'm14',
			'm21',
			'm22',
			'm23',
			'm24',
			'm31',
			'm32',
			'm33',
			'm34',
			'm41',
			'm42',
			'm43',
			'm44',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iOS.3DMatrix.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.3DMatrix';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m11 = undefined;
	} else {
		this.m11 = __SLAG_PROPERTIES.m11 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m12 = undefined;
	} else {
		this.m12 = __SLAG_PROPERTIES.m12 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m13 = undefined;
	} else {
		this.m13 = __SLAG_PROPERTIES.m13 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m14 = undefined;
	} else {
		this.m14 = __SLAG_PROPERTIES.m14 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m21 = undefined;
	} else {
		this.m21 = __SLAG_PROPERTIES.m21 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m22 = undefined;
	} else {
		this.m22 = __SLAG_PROPERTIES.m22 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m23 = undefined;
	} else {
		this.m23 = __SLAG_PROPERTIES.m23 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m24 = undefined;
	} else {
		this.m24 = __SLAG_PROPERTIES.m24 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m31 = undefined;
	} else {
		this.m31 = __SLAG_PROPERTIES.m31 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m32 = undefined;
	} else {
		this.m32 = __SLAG_PROPERTIES.m32 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m33 = undefined;
	} else {
		this.m33 = __SLAG_PROPERTIES.m33 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m34 = undefined;
	} else {
		this.m34 = __SLAG_PROPERTIES.m34 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m41 = undefined;
	} else {
		this.m41 = __SLAG_PROPERTIES.m41 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m42 = undefined;
	} else {
		this.m42 = __SLAG_PROPERTIES.m42 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m43 = undefined;
	} else {
		this.m43 = __SLAG_PROPERTIES.m43 || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.m44 = undefined;
	} else {
		this.m44 = __SLAG_PROPERTIES.m44 || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
ThreeDMatrix.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ThreeDMatrix.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ThreeDMatrix.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ThreeDMatrix.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
ThreeDMatrix.prototype.invert = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
ThreeDMatrix.prototype.multiply = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
ThreeDMatrix.prototype.rotate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
ThreeDMatrix.prototype.scale = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
ThreeDMatrix.prototype.translate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
ThreeDMatrix.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
ThreeDMatrix.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
ThreeDMatrix.prototype.getM11 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m11;
};
ThreeDMatrix.prototype.setM11 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m11 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM12 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m12;
};
ThreeDMatrix.prototype.setM12 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m12 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM13 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m13;
};
ThreeDMatrix.prototype.setM13 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m13 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM14 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m14;
};
ThreeDMatrix.prototype.setM14 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m14 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM21 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m21;
};
ThreeDMatrix.prototype.setM21 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m21 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM22 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m22;
};
ThreeDMatrix.prototype.setM22 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m22 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM23 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m23;
};
ThreeDMatrix.prototype.setM23 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m23 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM24 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m24;
};
ThreeDMatrix.prototype.setM24 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m24 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM31 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m31;
};
ThreeDMatrix.prototype.setM31 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m31 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM32 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m32;
};
ThreeDMatrix.prototype.setM32 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m32 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM33 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m33;
};
ThreeDMatrix.prototype.setM33 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m33 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM34 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m34;
};
ThreeDMatrix.prototype.setM34 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m34 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM41 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m41;
};
ThreeDMatrix.prototype.setM41 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m41 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM42 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m42;
};
ThreeDMatrix.prototype.setM42 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m42 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM43 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m43;
};
ThreeDMatrix.prototype.setM43 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m43 = __SLAG__PROPERTY;
};
ThreeDMatrix.prototype.getM44 = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.m44;
};
ThreeDMatrix.prototype.setM44 = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.m44 = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new ThreeDMatrix(properties);
};