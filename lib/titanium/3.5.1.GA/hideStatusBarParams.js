function hideStatusBarParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.animationStyle = properties.animationStyle || 0;
	return this;
}
module.exports = function (properties) {
	return new hideStatusBarParams(properties);
};