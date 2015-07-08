function PushNotificationErrorArg(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	this.success = properties.success || true;
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new PushNotificationErrorArg(properties);
};