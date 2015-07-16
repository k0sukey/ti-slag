function SecurityManagerProtocol(properties) {
	properties = properties || {};
	return this;
}
SecurityManagerProtocol.prototype.willHandleURL = function () {
	return true;
};
SecurityManagerProtocol.prototype.connectionDelegateForUrl = function () {
	return {};
};
SecurityManagerProtocol.prototype.getTrustManagers = function () {
	return [];
};
SecurityManagerProtocol.prototype.getKeyManagers = function () {
	return [];
};
module.exports = function (properties) {
	return new SecurityManagerProtocol(properties);
};