function TCP(properties) {
	properties = properties || {};
	this.accepted = properties.accepted || {};
	this.apiName = 'Ti.Network.Socket.TCP';
	this.bubbleParent = properties.bubbleParent || true;
	this.connected = properties.connected || {};
	this.error = properties.error || {};
	this.host = properties.host || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.listenQueueSize = properties.listenQueueSize || 0;
	this.port = properties.port || 0;
	this.state = properties.state || 0;
	this.timeout = properties.timeout || 0;
	return this;
}
TCP.prototype.accept = function () {
};
TCP.prototype.addEventListener = function () {
};
TCP.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TCP.prototype.close = function () {
};
TCP.prototype.connect = function () {
};
TCP.prototype.fireEvent = function () {
};
TCP.prototype.getAccepted = function () {
	return {};
};
TCP.prototype.getApiName = function () {
	return '';
};
TCP.prototype.getBubbleParent = function () {
	return true;
};
TCP.prototype.getConnected = function () {
	return {};
};
TCP.prototype.getError = function () {
	return {};
};
TCP.prototype.getHost = function () {
	return '';
};
TCP.prototype.getLifecycleContainer = function () {
	return {};
};
TCP.prototype.getListenQueueSize = function () {
	return 0;
};
TCP.prototype.getPort = function () {
	return 0;
};
TCP.prototype.getState = function () {
	return 0;
};
TCP.prototype.getTimeout = function () {
	return 0;
};
TCP.prototype.isReadable = function () {
	return true;
};
TCP.prototype.isWriteable = function () {
	return true;
};
TCP.prototype.listen = function () {
};
TCP.prototype.read = function () {
	return 0;
};
TCP.prototype.removeEventListener = function () {
};
TCP.prototype.setAccepted = function () {
};
TCP.prototype.setBubbleParent = function () {
};
TCP.prototype.setConnected = function () {
};
TCP.prototype.setError = function () {
};
TCP.prototype.setHost = function () {
};
TCP.prototype.setLifecycleContainer = function () {
};
TCP.prototype.setListenQueueSize = function () {
};
TCP.prototype.setPort = function () {
};
TCP.prototype.setTimeout = function () {
};
TCP.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new TCP(properties);
};