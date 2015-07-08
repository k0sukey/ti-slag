function GradientColorRef(properties) {
	properties = properties || {};
	this.color = properties.color || '';
	this.offset = properties.offset || 0;
	return this;
}
module.exports = function (properties) {
	return new GradientColorRef(properties);
};