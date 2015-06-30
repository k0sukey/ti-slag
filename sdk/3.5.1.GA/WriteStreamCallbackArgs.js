function WriteStreamCallbackArgs(properties) {
	properties = properties || {};

	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.errorDescription = properties.errorDescription || undefined;
	this.errorState = properties.errorState || undefined;
	this.fromStream = properties.fromStream || undefined;
	this.success = properties.success || undefined;
	this.toStream = properties.toStream || undefined;

	return this;
}



module.exports = function(properties){ return new WriteStreamCallbackArgs(properties); };