function PreviewImageError(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	if (properties.message) {
		throw new Error('PreviewImageError.message was deprecated, since 3.1.0');
	}
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new PreviewImageError(properties);
};