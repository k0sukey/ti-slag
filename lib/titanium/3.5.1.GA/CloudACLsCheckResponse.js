function CloudACLsCheckResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.permission = properties.permission || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudACLsCheckResponse(properties);
};