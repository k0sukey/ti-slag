function LocationResults(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.coords = properties.coords || undefined;
	this.error = properties.error || undefined;
	this.provider = properties.provider || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new LocationResults(properties);
};