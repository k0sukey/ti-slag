function CoreMotionCalibratedMagneticField(properties) {
	properties = properties || {};
	this.field = properties.field || {};
	this.accuracy = properties.accuracy || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionCalibratedMagneticField(properties);
};