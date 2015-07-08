function CloudMessagesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.messages = properties.messages || [];
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudMessagesResponse(properties);
};