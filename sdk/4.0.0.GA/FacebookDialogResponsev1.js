function FacebookDialogResponsev1(properties) {
	properties = properties || {};

	this.cancelled = properties.cancelled || undefined;
	this.error = properties.error || undefined;
	this.result = properties.result || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new FacebookDialogResponsev1(properties); };