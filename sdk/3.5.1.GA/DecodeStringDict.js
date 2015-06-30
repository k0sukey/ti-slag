function DecodeStringDict(properties) {
	properties = properties || {};
	this.charset = properties.charset || undefined;
	this.length = properties.length || undefined;
	this.position = properties.position || undefined;
	this.source = properties.source || undefined;
	return this;
}
module.exports = function (properties) {
	return new DecodeStringDict(properties);
};