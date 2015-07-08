function CloudPushNotificationsShowChannelResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.devices = properties.devices || {};
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationsShowChannelResponse(properties);
};