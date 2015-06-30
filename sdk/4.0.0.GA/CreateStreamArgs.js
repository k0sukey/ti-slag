function CreateStreamArgs(properties) {
	properties = properties || {};

	this.mode = properties.mode || undefined;
	this.source = properties.source || undefined;

	return this;
}



module.exports = function(properties){ return new CreateStreamArgs(properties); };