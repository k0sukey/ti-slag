function PreviewImageOptions(properties) {
	properties = properties || {};
	this.image = properties.image || {};
	this.success = properties.success || {};
	this.error = properties.error || {};
	return this;
}
module.exports = function (properties) {
	return new PreviewImageOptions(properties);
};