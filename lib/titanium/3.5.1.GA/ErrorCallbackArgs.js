function ErrorCallbackArgs(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	if (properties.errorCode) {
		throw new Error('ErrorCallbackArgs.errorCode was deprecated, since 3.1.0');
	}
	this.socket = properties.socket || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new ErrorCallbackArgs(properties);
};