function windowToolbarParam(properties) {
	properties = properties || {};
	this.translucent = properties.translucent || true;
	this.animated = properties.animated || true;
	this.barColor = properties.barColor || '';
	this.tintColor = properties.tintColor || '';
	return this;
}
module.exports = function (properties) {
	return new windowToolbarParam(properties);
};