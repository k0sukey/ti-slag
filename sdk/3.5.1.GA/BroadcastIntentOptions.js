function BroadcastIntentOptions(properties) {
	properties = properties || {};

	this.action = properties.action || undefined;
	this.className = properties.className || undefined;
	this.data = properties.data || undefined;
	this.flags = properties.flags || undefined;
	this.packageName = properties.packageName || undefined;
	this.url = properties.url || undefined;

	return this;
}



module.exports = function(properties){ return new BroadcastIntentOptions(properties); };