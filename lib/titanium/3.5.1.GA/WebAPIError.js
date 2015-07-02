function WebAPIError(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.message = properties.message || undefined;
	this.name = properties.name || undefined;
	return this;
}
module.exports = function (properties) {
	return new WebAPIError(properties);
};