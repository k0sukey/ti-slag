function DecodeNumberDict(properties) {
	properties = properties || {};

	this.byteOrder = properties.byteOrder || undefined;
	this.position = properties.position || undefined;
	this.source = properties.source || undefined;
	this.type = properties.type || undefined;

	return this;
}



module.exports = function(properties){ return new DecodeNumberDict(properties); };