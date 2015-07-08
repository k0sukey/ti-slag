function Point(properties) {
	properties = properties || {};
	this.x = properties.x || 0;
	this.y = properties.y || 0;
	return this;
}
module.exports = function (properties) {
	return new Point(properties);
};