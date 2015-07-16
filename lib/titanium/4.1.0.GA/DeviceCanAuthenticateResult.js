function DeviceCanAuthenticateResult(properties) {
	properties = properties || {};
	this.canAuthenticate = properties.canAuthenticate || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	return this;
}
module.exports = function (properties) {
	return new DeviceCanAuthenticateResult(properties);
};