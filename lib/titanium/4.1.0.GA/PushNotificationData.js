function PushNotificationData(properties) {
	properties = properties || {};
	this.data = properties.data || {};
	this.inBackground = properties.inBackground || true;
	return this;
}
module.exports = function (properties) {
	return new PushNotificationData(properties);
};