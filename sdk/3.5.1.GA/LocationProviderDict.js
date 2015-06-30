function LocationProviderDict(properties) {
	properties = properties || {};
	this.accuracy = properties.accuracy || undefined;
	this.name = properties.name || undefined;
	this.power = properties.power || undefined;
	return this;
}
module.exports = function (properties) {
	return new LocationProviderDict(properties);
};