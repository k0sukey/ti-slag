function UDP(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Network.Socket.UDP';
	this.data = properties.data || {};
	this.error = properties.error || {};
	this.port = properties.port || 0;
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
	return '';
};
UDP.prototype.getData = function () {
	return {};
};
UDP.prototype.getError = function () {
	return {};
};
UDP.prototype.getPort = function () {
	return 0;
};
UDP.prototype.getStarted = function () {
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
UDP.prototype.setData = function () {
};
UDP.prototype.setError = function () {
};
UDP.prototype.setPort = function () {
};
UDP.prototype.setStarted = function () {
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