function CoreMotionStepCountingDataWithSuccess(properties) {
	properties = properties || {};
	this.numberOfSteps = properties.numberOfSteps || 0;
	this.timestamp = properties.timestamp || new Date();
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionStepCountingDataWithSuccess(properties);
};