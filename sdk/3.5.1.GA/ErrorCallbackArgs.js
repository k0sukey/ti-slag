function ErrorCallbackArgs(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.errorCode = properties.errorCode || undefined;
	this.socket = properties.socket || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ErrorCallbackArgs(properties);
};