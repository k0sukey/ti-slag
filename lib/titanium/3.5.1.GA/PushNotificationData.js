function PushNotificationData(properties) {
	properties = properties || {};
	this.data = properties.data || undefined;
	this.inBackground = properties.inBackground || undefined;
	return this;
}
module.exports = function (properties) {
	return new PushNotificationData(properties);
};