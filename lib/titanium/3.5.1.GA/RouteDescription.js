function RouteDescription(properties) {
	properties = properties || {};
	this.inputs = properties.inputs || undefined;
	this.outputs = properties.outputs || undefined;
	return this;
}
module.exports = function (properties) {
	return new RouteDescription(properties);
};