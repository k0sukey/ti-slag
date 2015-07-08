function FacebookRESTResponsev1(properties) {
	properties = properties || {};
	this.error = properties.error || '';
	this.method = properties.method || '';
	this.result = properties.result || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new FacebookRESTResponsev1(properties);
};