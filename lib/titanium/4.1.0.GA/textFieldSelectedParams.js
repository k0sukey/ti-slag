function textFieldSelectedParams(properties) {
	properties = properties || {};
	this.location = properties.location || 0;
	this.length = properties.length || 0;
	return this;
}
module.exports = function (properties) {
	return new textFieldSelectedParams(properties);
};