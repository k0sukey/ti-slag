function LocationResults(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.provider = properties.provider || {};
	this.coords = properties.coords || {};
	return this;
}
module.exports = function (properties) {
	return new LocationResults(properties);
};