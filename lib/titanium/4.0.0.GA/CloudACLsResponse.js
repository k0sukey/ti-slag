function CloudACLsResponse(properties) {
	properties = properties || {};
	this.acls = properties.acls || [];
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudACLsResponse(properties);
};