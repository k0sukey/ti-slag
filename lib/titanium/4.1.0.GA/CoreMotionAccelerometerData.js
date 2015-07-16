function CoreMotionAccelerometerData(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.acceleration = properties.acceleration || {};
	return this;
}
module.exports = function (properties) {
	return new CoreMotionAccelerometerData(properties);
};