function CloudUsersSecureResponse(properties) {
	properties = properties || {};
	this.accessToken = properties.accessToken || '';
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.expiresIn = properties.expiresIn || 0;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudUsersSecureResponse(properties);
};