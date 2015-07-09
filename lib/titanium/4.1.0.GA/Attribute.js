function Attribute(properties) {
	properties = properties || {};
	this.type = properties.type || 0;
	this.value = properties.value || 0;
	this.range = properties.range || 0;
	return this;
}
module.exports = function (properties) {
	return new Attribute(properties);
};