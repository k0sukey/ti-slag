function FacebookDialogResponsev1(properties) {
	properties = properties || {};
	this.cancelled = properties.cancelled || true;
	this.error = properties.error || '';
	this.result = properties.result || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new FacebookDialogResponsev1(properties);
};