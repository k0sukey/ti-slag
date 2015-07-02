function GradientColorRef(properties) {
	properties = properties || {};
	this.color = properties.color || undefined;
	this.offset = properties.offset || undefined;
	return this;
}
module.exports = function (properties) {
	return new GradientColorRef(properties);
};