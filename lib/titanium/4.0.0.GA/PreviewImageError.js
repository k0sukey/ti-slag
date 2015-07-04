function PreviewImageError(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.message) {
		throw new Error('PreviewImageError.message was deprecated, since 3.1.0');
	}
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new PreviewImageError(properties);
};