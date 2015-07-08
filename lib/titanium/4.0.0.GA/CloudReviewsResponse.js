function CloudReviewsResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.reviews = properties.reviews || [];
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudReviewsResponse(properties);
};