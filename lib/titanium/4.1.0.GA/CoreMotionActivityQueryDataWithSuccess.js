function CoreMotionActivityQueryDataWithSuccess(properties) {
	properties = properties || {};
	this.activities = properties.activities || [];
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivityQueryDataWithSuccess(properties);
};