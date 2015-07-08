function GeocodedAddress(properties) {
	properties = properties || {};
	this.address = properties.address || '';
	this.city = properties.city || '';
	this.country = properties.country || '';
	this.countryCode = properties.countryCode || '';
	this.country_code = properties.country_code || '';
	this.displayAddress = properties.displayAddress || '';
	this.latitude = properties.latitude || '';
	this.longitude = properties.longitude || '';
	this.postalCode = properties.postalCode || '';
	this.region1 = properties.region1 || '';
	this.region2 = properties.region2 || '';
	this.street = properties.street || '';
	this.street1 = properties.street1 || '';
	this.zipcode = properties.zipcode || '';
	return this;
}
module.exports = function (properties) {
	return new GeocodedAddress(properties);
};