function FacebookGraphResponsev1(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.path = properties.path || '';
	this.result = properties.result || '';
	return this;
}
module.exports = function (properties) {
	return new FacebookGraphResponsev1(properties);
};