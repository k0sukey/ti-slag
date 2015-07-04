function YQLResponse(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.data = properties.data || undefined;
	this.error = properties.error || undefined;
	if (properties.message) {
		throw new Error('YQLResponse.message was deprecated, since 3.1.0');
	}
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new YQLResponse(properties);
};