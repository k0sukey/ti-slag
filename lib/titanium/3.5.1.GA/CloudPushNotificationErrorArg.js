function CloudPushNotificationErrorArg(properties) {
	properties = properties || {};
	this.error = properties.error || '';
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationErrorArg(properties);
};