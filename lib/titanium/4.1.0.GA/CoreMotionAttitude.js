function CoreMotionAttitude(properties) {
	properties = properties || {};
	this.roll = properties.roll || 0;
	this.pitch = properties.pitch || 0;
	this.yaw = properties.yaw || 0;
	this.rotationMatrix = properties.rotationMatrix || {};
	this.quaternion = properties.quaternion || {};
	return this;
}
CoreMotionAttitude.prototype.multiplyByInverseOfAttitude = function () {
};
module.exports = function (properties) {
	return new CoreMotionAttitude(properties);
};