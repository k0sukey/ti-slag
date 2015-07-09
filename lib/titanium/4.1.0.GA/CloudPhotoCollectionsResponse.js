function CloudPhotoCollectionsResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.collections = properties.collections || [];
	return this;
}
module.exports = function (properties) {
	return new CloudPhotoCollectionsResponse(properties);
};