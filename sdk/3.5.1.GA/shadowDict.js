function shadowDict(properties) {
	properties = properties || {};

	this.blurRadius = properties.blurRadius || undefined;
	this.color = properties.color || undefined;
	this.offset = properties.offset || undefined;

	return this;
}



module.exports = function(properties){ return new shadowDict(properties); };