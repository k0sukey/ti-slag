function PushNotificationConfig(properties) {
	properties = properties || {};

	this.callback = properties.callback || undefined;
	this.error = properties.error || undefined;
	this.success = properties.success || undefined;
	this.types = properties.types || undefined;

	return this;
}



module.exports = function(properties){ return new PushNotificationConfig(properties); };