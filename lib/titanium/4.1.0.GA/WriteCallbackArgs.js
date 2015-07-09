function WriteCallbackArgs(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.source = properties.source || {};
	this.bytesProcessed = properties.bytesProcessed || 0;
	if (properties.errorState) {
		throw new Error('WriteCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	if (properties.errorDescription) {
		throw new Error('WriteCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	return this;
}
module.exports = function (properties) {
	return new WriteCallbackArgs(properties);
};