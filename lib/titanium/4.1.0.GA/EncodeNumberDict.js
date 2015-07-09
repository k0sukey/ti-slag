function EncodeNumberDict(properties) {
	properties = properties || {};
	this.source = properties.source || 0;
	this.dest = properties.dest || {};
	this.type = properties.type || '';
	this.position = properties.position || 0;
	this.byteOrder = properties.byteOrder || 0;
	return this;
}
module.exports = function (properties) {
	return new EncodeNumberDict(properties);
};