var crypto = require('crypto');
function UDP(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'data',
			'error',
			'port',
			'started',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.Socket.UDP.apiName is read only property');
	}
	this.apiName = 'Ti.Network.Socket.UDP';
	this.data = __SLAG__properties.data || {};
	this.error = __SLAG__properties.error || {};
	this.port = __SLAG__properties.port || 0;
	this.started = __SLAG__properties.started || undefined;
	this.id = __SLAG__properties.id || '';
	return this;
}
UDP.prototype.addEventListener = function () {
};
UDP.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
UDP.prototype.close = function () {
};
UDP.prototype.fireEvent = function () {
};
UDP.prototype.getApiName = function () {
	return this.apiName;
};
UDP.prototype.getData = function () {
	return this.data;
};
UDP.prototype.getError = function () {
	return this.error;
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