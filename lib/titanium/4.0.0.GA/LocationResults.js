function LocationResults(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.coords = properties.coords || {};
	this.error = properties.error || '';
	this.provider = properties.provider || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new LocationResults(properties);
};