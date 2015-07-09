function PreviewImageError(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	if (properties.message) {
		throw new Error('PreviewImageError.message was deprecated, since 3.1.0');
	}
	return this;
}
module.exports = function (properties) {
	return new PreviewImageError(properties);
};