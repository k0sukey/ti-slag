function HeadingResponse(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.error = properties.error || '';
	this.heading = properties.heading || {};
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new HeadingResponse(properties);
};