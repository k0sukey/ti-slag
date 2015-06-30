function PumpCallbackArgs(properties) {
	properties = properties || {};
	this.buffer = properties.buffer || undefined;
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.errorDescription = properties.errorDescription || undefined;
	this.errorState = properties.errorState || undefined;
	this.source = properties.source || undefined;
	this.success = properties.success || undefined;
	this.totalBytesProcessed = properties.totalBytesProcessed || undefined;
	return this;
}
module.exports = function (properties) {
	return new PumpCallbackArgs(properties);
};