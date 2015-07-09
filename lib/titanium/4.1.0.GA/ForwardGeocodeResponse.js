function ForwardGeocodeResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.accuracy = properties.accuracy || 0;
	this.longitude = properties.longitude || '';
	this.latitude = properties.latitude || '';
	this.street = properties.street || '';
	this.street1 = properties.street1 || '';
	this.city = properties.city || '';
	this.region1 = properties.region1 || '';
	this.region2 = properties.region2 || '';
	this.postalCode = properties.postalCode || '';
	this.country = properties.country || '';
	this.countryCode = properties.countryCode || '';
	this.country_code = properties.country_code || '';
	this.displayAddress = properties.displayAddress || '';
	this.address = properties.address || '';
	return this;
}
module.exports = function (properties) {
	return new ForwardGeocodeResponse(properties);
};