function SecurityManagerProtocol(properties) {
	properties = properties || {};
	return this;
}
SecurityManagerProtocol.prototype.connectionDelegateForUrl = function () {
	return {};
};
SecurityManagerProtocol.prototype.getKeyManagers = function () {
	return [];
};
SecurityManagerProtocol.prototype.getTrustManagers = function () {
	return [];
};
SecurityManagerProtocol.prototype.willHandleURL = function () {
	return true;
};
module.exports = function (properties) {
	return new SecurityManagerProtocol(properties);
};