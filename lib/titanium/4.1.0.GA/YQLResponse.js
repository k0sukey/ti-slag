function YQLResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	if (properties.message) {
		throw new Error('YQLResponse.message was deprecated, since 3.1.0');
	}
	this.data = properties.data || {};
	return this;
}
module.exports = function (properties) {
	return new YQLResponse(properties);
};