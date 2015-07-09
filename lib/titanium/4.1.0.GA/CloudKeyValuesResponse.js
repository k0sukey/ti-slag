function CloudKeyValuesResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.keyvalues = properties.keyvalues || [];
	return this;
}
module.exports = function (properties) {
	return new CloudKeyValuesResponse(properties);
};