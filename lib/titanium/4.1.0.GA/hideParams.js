function hideParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	return this;
}
module.exports = function (properties) {
	return new hideParams(properties);
};