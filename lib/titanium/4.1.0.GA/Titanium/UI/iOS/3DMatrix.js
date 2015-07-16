function ThreeDMatrix(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.3DMatrix';
	this.m11 = properties.m11 || 0;
	this.m12 = properties.m12 || 0;
	this.m13 = properties.m13 || 0;
	this.m14 = properties.m14 || 0;
	this.m21 = properties.m21 || 0;
	this.m22 = properties.m22 || 0;
	this.m23 = properties.m23 || 0;
	this.m24 = properties.m24 || 0;
	this.m31 = properties.m31 || 0;
	this.m32 = properties.m32 || 0;
	this.m33 = properties.m33 || 0;
	this.m34 = properties.m34 || 0;
	this.m41 = properties.m41 || 0;
	this.m42 = properties.m42 || 0;
	this.m43 = properties.m43 || 0;
	this.m44 = properties.m44 || 0;
	return this;
}
ThreeDMatrix.prototype.addEventListener = function () {
};
ThreeDMatrix.prototype.removeEventListener = function () {
};
ThreeDMatrix.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
ThreeDMatrix.prototype.setBubbleParent = function () {
};
ThreeDMatrix.prototype.getApiName = function () {
	return '';
};
ThreeDMatrix.prototype.getM11 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM11 = function () {
};
ThreeDMatrix.prototype.getM12 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM12 = function () {
};
ThreeDMatrix.prototype.getM13 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM13 = function () {
};
ThreeDMatrix.prototype.getM14 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM14 = function () {
};
ThreeDMatrix.prototype.getM21 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM21 = function () {
};
ThreeDMatrix.prototype.getM22 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM22 = function () {
};
ThreeDMatrix.prototype.getM23 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM23 = function () {
};
ThreeDMatrix.prototype.getM24 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM24 = function () {
};
ThreeDMatrix.prototype.getM31 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM31 = function () {
};
ThreeDMatrix.prototype.getM32 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM32 = function () {
};
ThreeDMatrix.prototype.getM33 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM33 = function () {
};
ThreeDMatrix.prototype.getM34 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM34 = function () {
};
ThreeDMatrix.prototype.getM41 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM41 = function () {
};
ThreeDMatrix.prototype.getM42 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM42 = function () {
};
ThreeDMatrix.prototype.getM43 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM43 = function () {
};
ThreeDMatrix.prototype.getM44 = function () {
	return 0;
};
ThreeDMatrix.prototype.setM44 = function () {
};
module.exports = function (properties) {
	return new ThreeDMatrix(properties);
};