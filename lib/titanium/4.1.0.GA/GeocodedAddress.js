function GeocodedAddress(properties) {
	properties = properties || {};
	this.street = properties.street || '';
	this.street1 = properties.street1 || '';
	this.city = properties.city || '';
	this.region1 = properties.region1 || '';
	this.region2 = properties.region2 || '';
	this.postalCode = properties.postalCode || '';
	this.zipcode = properties.zipcode || '';
	this.country = properties.country || '';
	this.countryCode = properties.countryCode || '';
	this.country_code = properties.country_code || '';
	this.longitude = properties.longitude || '';
	this.latitude = properties.latitude || '';
	this.displayAddress = properties.displayAddress || '';
	this.address = properties.address || '';
	return this;
}
module.exports = function (properties) {
	return new GeocodedAddress(properties);
};