function CoreMotionStepCountingQueryData(properties) {
	properties = properties || {};
	this.numberOfSteps = properties.numberOfSteps || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionStepCountingQueryData(properties);
};