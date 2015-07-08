function CloudPushSchedulesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.push_schedules = properties.push_schedules || [];
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPushSchedulesResponse(properties);
};