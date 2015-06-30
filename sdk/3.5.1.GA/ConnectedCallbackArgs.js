function ConnectedCallbackArgs(properties) {
	properties = properties || {};

	this.socket = properties.socket || undefined;

	return this;
}



module.exports = function(properties){ return new ConnectedCallbackArgs(properties); };