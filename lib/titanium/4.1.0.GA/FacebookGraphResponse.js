function FacebookGraphResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.path = properties.path || '';
	this.result = properties.result || '';
	return this;
}
module.exports = function (properties) {
	return new FacebookGraphResponse(properties);
};