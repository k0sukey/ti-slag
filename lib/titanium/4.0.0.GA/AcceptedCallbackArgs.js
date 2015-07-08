function AcceptedCallbackArgs(properties) {
	properties = properties || {};
	this.inbound = properties.inbound || {};
	this.socket = properties.socket || {};
	return this;
}
module.exports = function (properties) {
	return new AcceptedCallbackArgs(properties);
};