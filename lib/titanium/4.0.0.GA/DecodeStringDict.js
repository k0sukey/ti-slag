function DecodeStringDict(properties) {
	properties = properties || {};
	this.charset = properties.charset || '';
	this.length = properties.length || 0;
	this.position = properties.position || 0;
	this.source = properties.source || {};
	return this;
}
module.exports = function (properties) {
	return new DecodeStringDict(properties);
};