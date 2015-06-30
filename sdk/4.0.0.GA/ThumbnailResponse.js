function ThumbnailResponse(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.image = properties.image || undefined;
	this.success = properties.success || undefined;
	this.time = properties.time || undefined;

	return this;
}



module.exports = function(properties){ return new ThumbnailResponse(properties); };