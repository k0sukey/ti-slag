function FacebookDialogResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.cancelled = properties.cancelled || true;
	this.result = properties.result || '';
	return this;
}
module.exports = function (properties) {
	return new FacebookDialogResponse(properties);
};