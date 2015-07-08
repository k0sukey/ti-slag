function DocumentViewerOptions(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.view = properties.view || {};
	return this;
}
module.exports = function (properties) {
	return new DocumentViewerOptions(properties);
};