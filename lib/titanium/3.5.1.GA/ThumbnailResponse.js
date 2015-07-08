function ThumbnailResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	this.image = properties.image || {};
	this.success = properties.success || true;
	this.time = properties.time || 0;
	return this;
}
module.exports = function (properties) {
	return new ThumbnailResponse(properties);
};