function CoreMotionMagnetometerDataWithSuccess(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.magneticField = properties.magneticField || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionMagnetometerDataWithSuccess(properties);
};