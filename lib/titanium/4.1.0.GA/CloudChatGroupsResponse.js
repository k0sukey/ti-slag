function CloudChatGroupsResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.chat_groups = properties.chat_groups || [];
	return this;
}
module.exports = function (properties) {
	return new CloudChatGroupsResponse(properties);
};