function AcceptedCallbackArgs(properties) {
	properties = properties || {};

	this.inbound = properties.inbound || undefined;
	this.socket = properties.socket || undefined;

	return this;
}



module.exports = function(properties){ return new AcceptedCallbackArgs(properties); };