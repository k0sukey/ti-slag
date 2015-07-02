function textAreaSelectedParams(properties) {
	properties = properties || {};
	this.length = properties.length || undefined;
	this.location = properties.location || undefined;
	return this;
}
module.exports = function (properties) {
	return new textAreaSelectedParams(properties);
};