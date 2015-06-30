function FacebookGraphResponsev1(properties) {
	properties = properties || {};

	this.error = properties.error || undefined;
	this.path = properties.path || undefined;
	this.result = properties.result || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new FacebookGraphResponsev1(properties); };