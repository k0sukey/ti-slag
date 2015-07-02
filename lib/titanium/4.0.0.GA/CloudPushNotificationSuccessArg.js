function CloudPushNotificationSuccessArg(properties) {
	properties = properties || {};
	this.deviceToken = properties.deviceToken || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationSuccessArg(properties);
};