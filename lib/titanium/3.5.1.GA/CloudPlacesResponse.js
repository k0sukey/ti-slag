function CloudPlacesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || true;
	this.message = properties.message || '';
	this.meta = properties.meta || {};
	this.places = properties.places || [];
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CloudPlacesResponse(properties);
};