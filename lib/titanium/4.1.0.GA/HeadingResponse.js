function HeadingResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.heading = properties.heading || {};
	return this;
}
module.exports = function (properties) {
	return new HeadingResponse(properties);
};