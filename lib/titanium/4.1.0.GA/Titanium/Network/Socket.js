function Socket(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.Socket';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.INITIALIZED = properties.INITIALIZED || 0;
	this.CONNECTED = properties.CONNECTED || 0;
	this.LISTENING = properties.LISTENING || 0;
	this.CLOSED = properties.CLOSED || 0;
	this.ERROR = properties.ERROR || 0;
	return this;
}
Socket.prototype.addEventListener = function () {
};
Socket.prototype.removeEventListener = function () {
};
Socket.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Socket.prototype.fireEvent = function () {
};
Socket.prototype.createTCP = function (params) {
	var TCP = require('./Socket/TCP');
	return TCP(params);
};
Socket.prototype.getBubbleParent = function () {
	return true;
};
Socket.prototype.setBubbleParent = function () {
};
Socket.prototype.getApiName = function () {
	return '';
};
Socket.prototype.getLifecycleContainer = function () {
	return {};
};
Socket.prototype.setLifecycleContainer = function () {
};
Socket.prototype.createUDP = function (params) {
	var UDP = require('./Socket/UDP');
	return UDP(params);
};
module.exports = function (properties) {
	return new Socket(properties);
};