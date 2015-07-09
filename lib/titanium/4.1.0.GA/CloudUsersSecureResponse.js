function CloudUsersSecureResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.accessToken = properties.accessToken || '';
	this.expiresIn = properties.expiresIn || 0;
	return this;
}
module.exports = function (properties) {
	return new CloudUsersSecureResponse(properties);
};