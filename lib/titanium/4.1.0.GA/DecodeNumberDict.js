function DecodeNumberDict(properties) {
	properties = properties || {};
	this.source = properties.source || {};
	this.type = properties.type || '';
	this.position = properties.position || 0;
	this.byteOrder = properties.byteOrder || 0;
	return this;
}
module.exports = function (properties) {
	return new DecodeNumberDict(properties);
};