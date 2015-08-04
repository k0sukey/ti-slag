var crypto = require('crypto');
function Socket(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'CLOSED',
			'CONNECTED',
			'ERROR',
			'INITIALIZED',
			'LISTENING',
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
	if (__SLAG__properties.CLOSED) {
		throw new Error('Ti.Network.Socket.CLOSED is read only property');
	}
	this.CLOSED = 0;
	if (__SLAG__properties.CONNECTED) {
		throw new Error('Ti.Network.Socket.CONNECTED is read only property');
	}
	this.CONNECTED = 0;
	if (__SLAG__properties.ERROR) {
		throw new Error('Ti.Network.Socket.ERROR is read only property');
	}
	this.ERROR = 0;
	if (__SLAG__properties.INITIALIZED) {
		throw new Error('Ti.Network.Socket.INITIALIZED is read only property');
	}
	this.INITIALIZED = 0;
	if (__SLAG__properties.LISTENING) {
		throw new Error('Ti.Network.Socket.LISTENING is read only property');
	}
	this.LISTENING = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.Socket.apiName is read only property');
	}
	this.apiName = 'Ti.Network.Socket';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Socket.prototype.addEventListener = function () {
};
Socket.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Socket.prototype.createTCP = function (params) {
	var TCP = require('./Socket/TCP');
	return TCP(params);
};
Socket.prototype.fireEvent = function () {
};
Socket.prototype.getApiName = function () {
	return this.apiName;
};
Socket.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Socket.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Socket.prototype.removeEventListener = function () {
};
Socket.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Socket.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Socket(properties);
};