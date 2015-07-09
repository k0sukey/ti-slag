function CloudClientsResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.ip_address = properties.ip_address || '';
	this.location = properties.location || {};
	return this;
}
module.exports = function (properties) {
	return new CloudClientsResponse(properties);
};