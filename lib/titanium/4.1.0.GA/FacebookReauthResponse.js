function FacebookReauthResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.cancelled = properties.cancelled || true;
	return this;
}
module.exports = function (properties) {
	return new FacebookReauthResponse(properties);
};