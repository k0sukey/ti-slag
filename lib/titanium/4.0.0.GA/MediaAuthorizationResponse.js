function MediaAuthorizationResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new MediaAuthorizationResponse(properties);
};