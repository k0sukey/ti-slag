function PushNotificationSuccessArg(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.deviceToken = properties.deviceToken || undefined;
	this.error = properties.error || undefined;
	this.success = properties.success || undefined;
	this.type = properties.type || undefined;

	return this;
}



module.exports = function(properties){ return new PushNotificationSuccessArg(properties); };