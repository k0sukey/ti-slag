function WriteStreamCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.errorDescription) {
		throw new Error('WriteStreamCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('WriteStreamCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.fromStream = properties.fromStream || undefined;
	this.success = properties.success || undefined;
	this.toStream = properties.toStream || undefined;
	return this;
}
module.exports = function (properties) {
	return new WriteStreamCallbackArgs(properties);
};