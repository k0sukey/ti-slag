function Socket(properties) {
	properties = properties || {};
	this.CLOSED = properties.CLOSED || 0;
	this.CONNECTED = properties.CONNECTED || 0;
	this.ERROR = properties.ERROR || 0;
	this.INITIALIZED = properties.INITIALIZED || 0;
	this.LISTENING = properties.LISTENING || 0;
	this.apiName = 'Ti.Network.Socket';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Socket.prototype.addEventListener = function () {
};
Socket.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Socket.prototype.createTCP = function (params) {
	var TCP = require('./Socket/TCP');
	return TCP(params);
};
Socket.prototype.fireEvent = function () {
};
Socket.prototype.getApiName = function () {
	return '';
};
Socket.prototype.getBubbleParent = function () {
	return true;
};
Socket.prototype.getLifecycleContainer = function () {
	return {};
};
Socket.prototype.removeEventListener = function () {
};
Socket.prototype.setBubbleParent = function () {
};
Socket.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Socket(properties);
};