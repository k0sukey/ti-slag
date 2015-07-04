function WriteCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.errorDescription) {
		throw new Error('WriteCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('WriteCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.source = properties.source || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new WriteCallbackArgs(properties);
};