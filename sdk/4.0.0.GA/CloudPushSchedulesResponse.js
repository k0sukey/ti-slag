function CloudPushSchedulesResponse(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.push_schedules = properties.push_schedules || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new CloudPushSchedulesResponse(properties); };