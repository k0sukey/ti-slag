function CloudKeyValuesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.keyvalues = properties.keyvalues || [];
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudKeyValuesResponse(properties);
};