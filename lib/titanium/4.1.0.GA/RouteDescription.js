function RouteDescription(properties) {
	properties = properties || {};
	this.inputs = properties.inputs || [];
	this.outputs = properties.outputs || [];
	return this;
}
module.exports = function (properties) {
	return new RouteDescription(properties);
};