function CloudPushNotificationConfig(properties) {
	properties = properties || {};
	this.success = properties.success || {};
	this.error = properties.error || {};
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationConfig(properties);
};