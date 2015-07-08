function LocationProviderDict(properties) {
	properties = properties || {};
	this.accuracy = properties.accuracy || 0;
	this.name = properties.name || '';
	this.power = properties.power || 0;
	return this;
}
module.exports = function (properties) {
	return new LocationProviderDict(properties);
};