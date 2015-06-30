function CloudChatGroupsResponse(properties) {
	properties = properties || {};
	this.chat_groups = properties.chat_groups || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudChatGroupsResponse(properties);
};