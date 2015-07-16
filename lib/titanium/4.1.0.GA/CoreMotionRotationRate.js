function CoreMotionRotationRate(properties) {
	properties = properties || {};
	this.x = properties.x || 0;
	this.y = properties.y || 0;
	this.z = properties.z || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionRotationRate(properties);
};