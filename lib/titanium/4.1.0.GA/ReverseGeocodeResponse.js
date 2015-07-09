function ReverseGeocodeResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.places = properties.places || [];
	return this;
}
module.exports = function (properties) {
	return new ReverseGeocodeResponse(properties);
};