function MediaQueryInfoType(properties) {
	properties = properties || {};

	this.exact = properties.exact || undefined;
	this.value = properties.value || undefined;

	return this;
}



module.exports = function(properties){ return new MediaQueryInfoType(properties); };