function CoreMotionRotationMatrix(properties) {
	properties = properties || {};
	this.m11 = properties.m11 || 0;
	this.m12 = properties.m12 || 0;
	this.m13 = properties.m13 || 0;
	this.m21 = properties.m21 || 0;
	this.m22 = properties.m22 || 0;
	this.m23 = properties.m23 || 0;
	this.m31 = properties.m31 || 0;
	this.m32 = properties.m32 || 0;
	this.m33 = properties.m33 || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionRotationMatrix(properties);
};