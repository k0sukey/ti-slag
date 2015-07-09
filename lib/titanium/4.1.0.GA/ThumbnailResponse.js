function ThumbnailResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.image = properties.image || {};
	this.time = properties.time || 0;
	return this;
}
module.exports = function (properties) {
	return new ThumbnailResponse(properties);
};