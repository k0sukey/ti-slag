function DecodeStringDict(properties) {
	properties = properties || {};
	this.source = properties.source || {};
	this.position = properties.position || 0;
	this.length = properties.length || 0;
	this.charset = properties.charset || '';
	return this;
}
module.exports = function (properties) {
	return new DecodeStringDict(properties);
};