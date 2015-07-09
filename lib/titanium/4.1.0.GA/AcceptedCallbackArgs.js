function AcceptedCallbackArgs(properties) {
	properties = properties || {};
	this.socket = properties.socket || {};
	this.inbound = properties.inbound || {};
	return this;
}
module.exports = function (properties) {
	return new AcceptedCallbackArgs(properties);
};