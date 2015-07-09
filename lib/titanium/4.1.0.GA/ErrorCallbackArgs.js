function ErrorCallbackArgs(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.socket = properties.socket || {};
	if (properties.errorCode) {
		throw new Error('ErrorCallbackArgs.errorCode was deprecated, since 3.1.0');
	}
	return this;
}
module.exports = function (properties) {
	return new ErrorCallbackArgs(properties);
};