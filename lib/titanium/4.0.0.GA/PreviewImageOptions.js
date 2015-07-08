function PreviewImageOptions(properties) {
	properties = properties || {};
	this.error = properties.error || {};
	this.image = properties.image || {};
	this.success = properties.success || {};
	return this;
}
module.exports = function (properties) {
	return new PreviewImageOptions(properties);
};