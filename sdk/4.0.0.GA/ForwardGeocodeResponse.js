function ForwardGeocodeResponse(properties) {
	properties = properties || {};
	this.accuracy = properties.accuracy || undefined;
	this.address = properties.address || undefined;
	this.city = properties.city || undefined;
	this.code = properties.code || undefined;
	this.country = properties.country || undefined;
	this.countryCode = properties.countryCode || undefined;
	this.country_code = properties.country_code || undefined;
	this.displayAddress = properties.displayAddress || undefined;
	this.error = properties.error || undefined;
	this.latitude = properties.latitude || undefined;
	this.longitude = properties.longitude || undefined;
	this.postalCode = properties.postalCode || undefined;
	this.region1 = properties.region1 || undefined;
	this.region2 = properties.region2 || undefined;
	this.street = properties.street || undefined;
	this.street1 = properties.street1 || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ForwardGeocodeResponse(properties);
};