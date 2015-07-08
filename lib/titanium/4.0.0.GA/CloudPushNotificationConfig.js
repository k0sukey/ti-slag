function CloudPushNotificationConfig(properties) {
	properties = properties || {};
	this.error = properties.error || {};
	this.success = properties.success || {};
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationConfig(properties);
};