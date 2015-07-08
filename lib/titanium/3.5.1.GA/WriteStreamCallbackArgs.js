function WriteStreamCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || 0;
	this.code = properties.code || 0;
	this.error = properties.error || '';
	if (properties.errorDescription) {
		throw new Error('WriteStreamCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('WriteStreamCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.fromStream = properties.fromStream || {};
	this.success = properties.success || true;
	this.toStream = properties.toStream || {};
	return this;
}
module.exports = function (properties) {
	return new WriteStreamCallbackArgs(properties);
};