function HeadingResponse(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.heading = properties.heading || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new HeadingResponse(properties);
};