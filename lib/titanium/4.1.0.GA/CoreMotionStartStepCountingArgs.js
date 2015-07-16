function CoreMotionStartStepCountingArgs(properties) {
	properties = properties || {};
	this.stepCounts = properties.stepCounts || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionStartStepCountingArgs(properties);
};