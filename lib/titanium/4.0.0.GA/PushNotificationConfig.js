function PushNotificationConfig(properties) {
	properties = properties || {};
	this.callback = properties.callback || {};
	this.error = properties.error || {};
	this.success = properties.success || {};
	this.types = properties.types || 0;
	return this;
}
module.exports = function (properties) {
	return new PushNotificationConfig(properties);
};