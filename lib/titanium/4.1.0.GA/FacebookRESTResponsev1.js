function FacebookRESTResponsev1(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.method = properties.method || '';
	this.result = properties.result || '';
	return this;
}
module.exports = function (properties) {
	return new FacebookRESTResponsev1(properties);
};