function CoreMotionDeviceMotionData(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.attitude = properties.attitude || {};
	this.rotationRate = properties.rotationRate || {};
	this.gravity = properties.gravity || {};
	this.userAcceleration = properties.userAcceleration || {};
	this.magneticField = properties.magneticField || {};
	return this;
}
module.exports = function (properties) {
	return new CoreMotionDeviceMotionData(properties);
};