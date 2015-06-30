function PreviewImageOptions(properties) {
	properties = properties || {};
	this.error = properties.error || undefined;
	this.image = properties.image || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new PreviewImageOptions(properties);
};