function CoreMotionQueryStepCountArgs(properties) {
	properties = properties || {};
	this.start = properties.start || new Date();
	this.end = properties.end || new Date();
	return this;
}
module.exports = function (properties) {
	return new CoreMotionQueryStepCountArgs(properties);
};