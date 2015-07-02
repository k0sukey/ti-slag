function UDP(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Network.Socket.UDP';
	this.data = properties.data || undefined;
	this.error = properties.error || undefined;
	this.port = properties.port || undefined;
	this.started = properties.started || undefined;
	return this;
}
UDP.prototype.addEventListener = function () {
};
UDP.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
UDP.prototype.close = function () {
};
UDP.prototype.fireEvent = function () {
};
UDP.prototype.getApiName = function () {
	return this.apiName;
};
UDP.prototype.getPort = function () {
	return this.port;
};
UDP.prototype.getStarted = function () {
	return this.started;
};
UDP.prototype.isReadable = function () {
	return true;
};
UDP.prototype.isWriteable = function () {
	return true;
};
UDP.prototype.read = function () {
	return 0;
};
UDP.prototype.removeEventListener = function () {
};
UDP.prototype.sendBytes = function () {
};
UDP.prototype.sendString = function () {
};
UDP.prototype.setData = function (property) {
	this.data = property;
};
UDP.prototype.setError = function (property) {
	this.error = property;
};
UDP.prototype.setPort = function (property) {
	this.port = property;
};
UDP.prototype.setStarted = function (property) {
	this.started = property;
};
UDP.prototype.start = function () {
};
UDP.prototype.stop = function () {
};
UDP.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new UDP(properties);
};