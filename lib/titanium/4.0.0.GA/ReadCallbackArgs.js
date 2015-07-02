function ReadCallbackArgs(properties) {
	properties = properties || {};
	this.bytesProcessed = properties.bytesProcessed || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.errorDescription = properties.errorDescription || undefined;
	this.errorState = properties.errorState || undefined;
	this.source = properties.source || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ReadCallbackArgs(properties);
};