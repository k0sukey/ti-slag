function EncodeNumberDict(properties) {
	properties = properties || {};
	this.byteOrder = properties.byteOrder || 0;
	this.dest = properties.dest || {};
	this.position = properties.position || 0;
	this.source = properties.source || 0;
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new EncodeNumberDict(properties);
};