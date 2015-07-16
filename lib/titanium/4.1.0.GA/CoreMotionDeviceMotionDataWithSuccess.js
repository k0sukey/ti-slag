function CoreMotionDeviceMotionDataWithSuccess(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.attitude = properties.attitude || {};
	this.rotationRate = properties.rotationRate || {};
	this.gravity = properties.gravity || {};
	this.userAcceleration = properties.userAcceleration || {};
	this.magneticField = properties.magneticField || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionDeviceMotionDataWithSuccess(properties);
};