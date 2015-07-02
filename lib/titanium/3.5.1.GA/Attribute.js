function Attribute(properties) {
	properties = properties || {};
	this.range = properties.range || undefined;
	this.type = properties.type || undefined;
	this.value = properties.value || undefined;
	return this;
}
module.exports = function (properties) {
	return new Attribute(properties);
};