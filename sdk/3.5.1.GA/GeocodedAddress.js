function GeocodedAddress(properties) {
	properties = properties || {};
	this.address = properties.address || undefined;
	this.city = properties.city || undefined;
	this.country = properties.country || undefined;
	this.countryCode = properties.countryCode || undefined;
	this.country_code = properties.country_code || undefined;
	this.displayAddress = properties.displayAddress || undefined;
	this.latitude = properties.latitude || undefined;
	this.longitude = properties.longitude || undefined;
	this.postalCode = properties.postalCode || undefined;
	this.region1 = properties.region1 || undefined;
	this.region2 = properties.region2 || undefined;
	this.street = properties.street || undefined;
	this.street1 = properties.street1 || undefined;
	this.zipcode = properties.zipcode || undefined;
	return this;
}
module.exports = function (properties) {
	return new GeocodedAddress(properties);
};