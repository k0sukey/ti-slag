var crypto = require('crypto');
function ThreeDMatrix(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.3DMatrix.apiName is read only property');
	}
	this.apiName = 'Ti.UI.3DMatrix';
	this.m11 = __SLAG__properties.m11 || 0;
	this.m12 = __SLAG__properties.m12 || 0;
	this.m13 = __SLAG__properties.m13 || 0;
	this.m14 = __SLAG__properties.m14 || 0;
	this.m21 = __SLAG__properties.m21 || 0;
	this.m22 = __SLAG__properties.m22 || 0;
	this.m23 = __SLAG__properties.m23 || 0;
	this.m24 = __SLAG__properties.m24 || 0;
	this.m31 = __SLAG__properties.m31 || 0;
	this.m32 = __SLAG__properties.m32 || 0;
	this.m33 = __SLAG__properties.m33 || 0;
	this.m34 = __SLAG__properties.m34 || 0;
	this.m41 = __SLAG__properties.m41 || 0;
	this.m42 = __SLAG__properties.m42 || 0;
	this.m43 = __SLAG__properties.m43 || 0;
	this.m44 = __SLAG__properties.m44 || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ThreeDMatrix.prototype.addEventListener = function () {
};
ThreeDMatrix.prototype.removeEventListener = function () {
};
ThreeDMatrix.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ThreeDMatrix.prototype.fireEvent = function () {
};
ThreeDMatrix.prototype.invert = function () {
	return {};
};
ThreeDMatrix.prototype.multiply = function () {
	return {};
};
ThreeDMatrix.prototype.rotate = function () {
	return {};
};
ThreeDMatrix.prototype.scale = function () {
	return {};
};
ThreeDMatrix.prototype.translate = function () {
	return {};
};
ThreeDMatrix.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ThreeDMatrix.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ThreeDMatrix.prototype.getApiName = function () {
	return this.apiName;
};
ThreeDMatrix.prototype.getM11 = function () {
	return this.m11;
};
ThreeDMatrix.prototype.setM11 = function (property) {
	this.m11 = property;
};
ThreeDMatrix.prototype.getM12 = function () {
	return this.m12;
};
ThreeDMatrix.prototype.setM12 = function (property) {
	this.m12 = property;
};
ThreeDMatrix.prototype.getM13 = function () {
	return this.m13;
};
ThreeDMatrix.prototype.setM13 = function (property) {
	this.m13 = property;
};
ThreeDMatrix.prototype.getM14 = function () {
	return this.m14;
};
ThreeDMatrix.prototype.setM14 = function (property) {
	this.m14 = property;
};
ThreeDMatrix.prototype.getM21 = function () {
	return this.m21;
};
ThreeDMatrix.prototype.setM21 = function (property) {
	this.m21 = property;
};
ThreeDMatrix.prototype.getM22 = function () {
	return this.m22;
};
ThreeDMatrix.prototype.setM22 = function (property) {
	this.m22 = property;
};
ThreeDMatrix.prototype.getM23 = function () {
	return this.m23;
};
ThreeDMatrix.prototype.setM23 = function (property) {
	this.m23 = property;
};
ThreeDMatrix.prototype.getM24 = function () {
	return this.m24;
};
ThreeDMatrix.prototype.setM24 = function (property) {
	this.m24 = property;
};
ThreeDMatrix.prototype.getM31 = function () {
	return this.m31;
};
ThreeDMatrix.prototype.setM31 = function (property) {
	this.m31 = property;
};
ThreeDMatrix.prototype.getM32 = function () {
	return this.m32;
};
ThreeDMatrix.prototype.setM32 = function (property) {
	this.m32 = property;
};
ThreeDMatrix.prototype.getM33 = function () {
	return this.m33;
};
ThreeDMatrix.prototype.setM33 = function (property) {
	this.m33 = property;
};
ThreeDMatrix.prototype.getM34 = function () {
	return this.m34;
};
ThreeDMatrix.prototype.setM34 = function (property) {
	this.m34 = property;
};
ThreeDMatrix.prototype.getM41 = function () {
	return this.m41;
};
ThreeDMatrix.prototype.setM41 = function (property) {
	this.m41 = property;
};
ThreeDMatrix.prototype.getM42 = function () {
	return this.m42;
};
ThreeDMatrix.prototype.setM42 = function (property) {
	this.m42 = property;
};
ThreeDMatrix.prototype.getM43 = function () {
	return this.m43;
};
ThreeDMatrix.prototype.setM43 = function (property) {
	this.m43 = property;
};
ThreeDMatrix.prototype.getM44 = function () {
	return this.m44;
};
ThreeDMatrix.prototype.setM44 = function (property) {
	this.m44 = property;
};
module.exports = function (properties) {
	return new ThreeDMatrix(properties);
};