function ReadCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.errorDescription) {
		throw new Error('ReadCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('ReadCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.source = properties.source || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ReadCallbackArgs(properties);
};