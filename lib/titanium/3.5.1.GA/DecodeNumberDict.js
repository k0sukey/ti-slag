function DecodeNumberDict(properties) {
	properties = properties || {};
	this.byteOrder = properties.byteOrder || 0;
	this.position = properties.position || 0;
	this.source = properties.source || {};
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new DecodeNumberDict(properties);
};