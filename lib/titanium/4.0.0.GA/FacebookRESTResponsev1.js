function FacebookRESTResponsev1(properties) {
	properties = properties || {};
	this.error = properties.error || undefined;
	this.method = properties.method || undefined;
	this.result = properties.result || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new FacebookRESTResponsev1(properties);
};