function FacebookDialogResponsev1(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.cancelled = properties.cancelled || true;
	this.result = properties.result || '';
	return this;
}
module.exports = function (properties) {
	return new FacebookDialogResponsev1(properties);
};