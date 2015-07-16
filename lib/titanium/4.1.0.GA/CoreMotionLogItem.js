function CoreMotionLogItem(properties) {
	properties = properties || {};
	this.timestamp = properties.timestamp || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionLogItem(properties);
};