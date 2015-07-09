function CloudPlacesResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.places = properties.places || [];
	return this;
}
module.exports = function (properties) {
	return new CloudPlacesResponse(properties);
};