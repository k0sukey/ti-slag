function CloudUsersSecureResponse(properties) {
	properties = properties || {};
	this.accessToken = properties.accessToken || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.expiresIn = properties.expiresIn || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudUsersSecureResponse(properties);
};