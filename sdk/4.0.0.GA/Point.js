function Point(properties) {
	properties = properties || {};
	this.x = properties.x || undefined;
	this.y = properties.y || undefined;
	return this;
}
module.exports = function (properties) {
	return new Point(properties);
};