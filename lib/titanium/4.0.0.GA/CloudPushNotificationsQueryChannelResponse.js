function CloudPushNotificationsQueryChannelResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.push_channels = properties.push_channels || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPushNotificationsQueryChannelResponse(properties);
};