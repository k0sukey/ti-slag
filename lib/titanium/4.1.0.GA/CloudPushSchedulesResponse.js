function CloudPushSchedulesResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.push_schedules = properties.push_schedules || [];
	return this;
}
module.exports = function (properties) {
	return new CloudPushSchedulesResponse(properties);
};