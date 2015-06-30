function CloudPhotoCollectionsResponse(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.collections = properties.collections || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new CloudPhotoCollectionsResponse(properties); };