function CloudChatGroupsResponse(properties) {
	properties = properties || {};
	this.chat_groups = properties.chat_groups || [];
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudChatGroupsResponse(properties);
};