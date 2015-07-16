function TCP(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.Socket.TCP';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.host = properties.host || '';
	this.port = properties.port || 0;
	this.listenQueueSize = properties.listenQueueSize || 0;
	this.timeout = properties.timeout || 0;
	this.connected = properties.connected || {};
	this.error = properties.error || {};
	this.accepted = properties.accepted || {};
	this.state = properties.state || 0;
	return this;
}
TCP.prototype.addEventListener = function () {
};
TCP.prototype.removeEventListener = function () {
};
TCP.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TCP.prototype.fireEvent = function () {
};
TCP.prototype.read = function () {
	return 0;
};
TCP.prototype.write = function () {
	return 0;
};
TCP.prototype.isWriteable = function () {
	return true;
};
TCP.prototype.isReadable = function () {
	return true;
};
TCP.prototype.close = function () {
};
TCP.prototype.connect = function () {
};
TCP.prototype.listen = function () {
};
TCP.prototype.accept = function () {
};
TCP.prototype.getBubbleParent = function () {
	return true;
};
TCP.prototype.setBubbleParent = function () {
};
TCP.prototype.getApiName = function () {
	return '';
};
TCP.prototype.getLifecycleContainer = function () {
	return {};
};
TCP.prototype.setLifecycleContainer = function () {
};
TCP.prototype.getHost = function () {
	return '';
};
TCP.prototype.setHost = function () {
};
TCP.prototype.getPort = function () {
	return 0;
};
TCP.prototype.setPort = function () {
};
TCP.prototype.getListenQueueSize = function () {
	return 0;
};
TCP.prototype.setListenQueueSize = function () {
};
TCP.prototype.getTimeout = function () {
	return 0;
};
TCP.prototype.setTimeout = function () {
};
TCP.prototype.getConnected = function () {
	return {};
};
TCP.prototype.setConnected = function () {
};
TCP.prototype.getError = function () {
	return {};
};
TCP.prototype.setError = function () {
};
TCP.prototype.getAccepted = function () {
	return {};
};
TCP.prototype.setAccepted = function () {
};
TCP.prototype.getState = function () {
	return 0;
};
module.exports = function (properties) {
	return new TCP(properties);
};