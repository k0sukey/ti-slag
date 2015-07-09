function PushNotificationConfig(properties) {
	properties = properties || {};
	this.types = properties.types || 0;
	this.success = properties.success || {};
	this.error = properties.error || {};
	this.callback = properties.callback || {};
	return this;
}
module.exports = function (properties) {
	return new PushNotificationConfig(properties);
};