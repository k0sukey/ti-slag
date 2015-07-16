function CoreMotionActivityData(properties) {
	properties = properties || {};
	this.activity = properties.activity || {};
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivityData(properties);
};