function PumpCallbackArgs(properties) {
	properties = properties || {};
	this.buffer = properties.buffer || undefined;
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.errorDescription) {
		throw new Error('PumpCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (properties.errorState) {
		throw new Error('PumpCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.source = properties.source || undefined;
	this.success = properties.success || undefined;
	this.totalBytesProcessed = properties.totalBytesProcessed || undefined;
	return this;
}
module.exports = function (properties) {
	return new PumpCallbackArgs(properties);
};