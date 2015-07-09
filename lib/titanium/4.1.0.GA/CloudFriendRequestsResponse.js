function CloudFriendRequestsResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.friend_requests = properties.friend_requests || [];
	return this;
}
module.exports = function (properties) {
	return new CloudFriendRequestsResponse(properties);
};