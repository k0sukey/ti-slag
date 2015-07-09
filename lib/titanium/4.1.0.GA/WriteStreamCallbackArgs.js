function WriteStreamCallbackArgs(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.fromStream = properties.fromStream || {};
	this.toStream = properties.toStream || {};
	this.bytesProcessed = properties.bytesProcessed || 0;
	if (properties.errorState) {
		throw new Error('WriteStreamCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	if (properties.errorDescription) {
		throw new Error('WriteStreamCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	return this;
}
module.exports = function (properties) {
	return new WriteStreamCallbackArgs(properties);
};