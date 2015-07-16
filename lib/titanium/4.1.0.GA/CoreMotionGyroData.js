function CoreMotionGyroData(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	this.rotationRate = properties.rotationRate || {};
	return this;
}
module.exports = function (properties) {
	return new CoreMotionGyroData(properties);
};