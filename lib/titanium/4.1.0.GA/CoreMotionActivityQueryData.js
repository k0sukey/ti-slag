function CoreMotionActivityQueryData(properties) {
	properties = properties || {};
	this.activities = properties.activities || [];
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivityQueryData(properties);
};