function CoreMotionMagnetometerData(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.magneticField = properties.magneticField || {};
	return this;
}
module.exports = function (properties) {
	return new CoreMotionMagnetometerData(properties);
};