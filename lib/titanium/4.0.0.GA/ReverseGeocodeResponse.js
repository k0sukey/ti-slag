function ReverseGeocodeResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	this.places = properties.places || [];
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new ReverseGeocodeResponse(properties);
};