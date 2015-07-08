function CloudPhotoCollectionsResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.collections = properties.collections || [];
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPhotoCollectionsResponse(properties);
};