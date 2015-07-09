function CloudCheckinsResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.checkins = properties.checkins || [];
	return this;
}
module.exports = function (properties) {
	return new CloudCheckinsResponse(properties);
};