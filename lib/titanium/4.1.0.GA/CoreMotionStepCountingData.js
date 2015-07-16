function CoreMotionStepCountingData(properties) {
	properties = properties || {};
	this.numberOfSteps = properties.numberOfSteps || 0;
	this.timestamp = properties.timestamp || new Date();
	return this;
}
module.exports = function (properties) {
	return new CoreMotionStepCountingData(properties);
};