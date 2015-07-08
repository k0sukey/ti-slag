function windowToolbarParam(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.barColor = properties.barColor || '';
	this.tintColor = properties.tintColor || '';
	this.translucent = properties.translucent || true;
	return this;
}
module.exports = function (properties) {
	return new windowToolbarParam(properties);
};