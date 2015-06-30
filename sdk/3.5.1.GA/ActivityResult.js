function ActivityResult(properties) {
	properties = properties || {};

	this.intent = properties.intent || undefined;
	this.requestCode = properties.requestCode || undefined;
	this.resultCode = properties.resultCode || undefined;

	return this;
}



module.exports = function(properties){ return new ActivityResult(properties); };