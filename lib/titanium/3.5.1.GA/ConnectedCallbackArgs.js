function ConnectedCallbackArgs(properties) {
	properties = properties || {};
	this.socket = properties.socket || {};
	return this;
}
module.exports = function (properties) {
	return new ConnectedCallbackArgs(properties);
};