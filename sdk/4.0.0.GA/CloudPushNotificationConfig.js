function CloudPushNotificationConfig(properties) {
	properties = properties || {};
	this.error = properties.error || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationConfig(properties);
};