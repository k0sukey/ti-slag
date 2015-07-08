function YQLResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.data = properties.data || {};
	this.error = properties.error || '';
	if (properties.message) {
		throw new Error('YQLResponse.message was deprecated, since 3.1.0');
	}
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new YQLResponse(properties);
};