function WriteCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || 0;
	this.code = properties.code || 0;
	this.error = properties.error || '';
	if (properties.errorDescription) {
		throw new Error('WriteCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('WriteCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.source = properties.source || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new WriteCallbackArgs(properties);
};