function CloudPostsResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.posts = properties.posts || [];
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPostsResponse(properties);
};