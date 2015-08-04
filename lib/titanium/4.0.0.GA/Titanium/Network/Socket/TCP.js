var crypto = require('crypto');
function TCP(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accepted',
			'apiName',
			'bubbleParent',
			'connected',
			'error',
			'host',
			'lifecycleContainer',
			'listenQueueSize',
			'port',
			'state',
			'timeout',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accepted = __SLAG__properties.accepted || {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.Socket.TCP.apiName is read only property');
	}
	this.apiName = 'Ti.Network.Socket.TCP';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.connected = __SLAG__properties.connected || {};
	this.error = __SLAG__properties.error || {};
	this.host = __SLAG__properties.host || '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.listenQueueSize = __SLAG__properties.listenQueueSize || 0;
	this.port = __SLAG__properties.port || 0;
	if (__SLAG__properties.state) {
		throw new Error('Ti.Network.Socket.TCP.state is read only property');
	}
	this.state = 0;
	this.timeout = __SLAG__properties.timeout || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TCP.prototype.accept = function () {
};
TCP.prototype.addEventListener = function () {
};
TCP.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TCP.prototype.close = function () {
};
TCP.prototype.connect = function () {
};
TCP.prototype.fireEvent = function () {
};
TCP.prototype.getAccepted = function () {
	return this.accepted;
};
TCP.prototype.getApiName = function () {
	return this.apiName;
};
TCP.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TCP.prototype.getConnected = function () {
	return this.connected;
};
TCP.prototype.getError = function () {
	return this.error;
};
TCP.prototype.getHost = function () {
	return this.host;
};
TCP.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TCP.prototype.getListenQueueSize = function () {
	return this.listenQueueSize;
};
TCP.prototype.getPort = function () {
	return this.port;
};
TCP.prototype.getState = function () {
	return this.state;
};
TCP.prototype.getTimeout = function () {
	return this.timeout;
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
TCP.prototype.setAccepted = function (property) {
	this.accepted = property;
};
TCP.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TCP.prototype.setConnected = function (property) {
	this.connected = property;
};
TCP.prototype.setError = function (property) {
	this.error = property;
};
TCP.prototype.setHost = function (property) {
	this.host = property;
};
TCP.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TCP.prototype.setListenQueueSize = function (property) {
	this.listenQueueSize = property;
};
TCP.prototype.setPort = function (property) {
	this.port = property;
};
TCP.prototype.setTimeout = function (property) {
	this.timeout = property;
};
TCP.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new TCP(properties);
};