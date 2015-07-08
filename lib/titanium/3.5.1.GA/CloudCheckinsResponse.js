function CloudCheckinsResponse(properties) {
	properties = properties || {};
	this.checkins = properties.checkins || [];
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudCheckinsResponse(properties);
};