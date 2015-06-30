function PushNotificationErrorArg(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.success = properties.success || undefined;
	this.type = properties.type || undefined;

	return this;
}



module.exports = function(properties){ return new PushNotificationErrorArg(properties); };