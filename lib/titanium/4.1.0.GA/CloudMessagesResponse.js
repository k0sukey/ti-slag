function CloudMessagesResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.messages = properties.messages || [];
	return this;
}
module.exports = function (properties) {
	return new CloudMessagesResponse(properties);
};