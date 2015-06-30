function CloudPushNotificationErrorArg(properties) {
	properties = properties || {};

	this.error = properties.error || undefined;

	return this;
}



module.exports = function(properties){ return new CloudPushNotificationErrorArg(properties); };