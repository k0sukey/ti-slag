function PushNotificationErrorArg(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new PushNotificationErrorArg(properties);
};