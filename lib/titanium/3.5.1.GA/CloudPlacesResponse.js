function CloudPlacesResponse(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.places = properties.places || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudPlacesResponse(properties);
};