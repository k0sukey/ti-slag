function WebAPIError(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.name = properties.name || '';
	return this;
}
module.exports = function (properties) {
	return new WebAPIError(properties);
};