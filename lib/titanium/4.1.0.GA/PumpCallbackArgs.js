function PumpCallbackArgs(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.source = properties.source || {};
	this.buffer = properties.buffer || {};
	this.bytesProcessed = properties.bytesProcessed || 0;
	this.totalBytesProcessed = properties.totalBytesProcessed || 0;
	if (properties.errorState) {
		throw new Error('PumpCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	if (properties.errorDescription) {
		throw new Error('PumpCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	return this;
}
module.exports = function (properties) {
	return new PumpCallbackArgs(properties);
};