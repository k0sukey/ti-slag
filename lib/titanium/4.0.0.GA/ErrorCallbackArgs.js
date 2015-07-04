function ErrorCallbackArgs(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	if (properties.errorCode) {
		throw new Error('ErrorCallbackArgs.errorCode was deprecated, since 3.1.0');
	}
	this.socket = properties.socket || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ErrorCallbackArgs(properties);
};