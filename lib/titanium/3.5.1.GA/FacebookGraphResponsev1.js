function FacebookGraphResponsev1(properties) {
	properties = properties || {};
	this.error = properties.error || '';
	this.path = properties.path || '';
	this.result = properties.result || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new FacebookGraphResponsev1(properties);
};