function CloudLikesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.likes = properties.likes || [];
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudLikesResponse(properties);
};