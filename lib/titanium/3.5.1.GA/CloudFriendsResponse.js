function CloudFriendsResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	this.users = properties.users || [];
	return this;
}
module.exports = function (properties) {
	return new CloudFriendsResponse(properties);
};