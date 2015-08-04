var crypto = require('crypto');
function TCPSocket(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'hostName',
			'isValid',
			'mode',
			'port',
			'stripTerminator',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.TCPSocket.apiName is read only property');
	}
	this.apiName = 'Ti.Network.TCPSocket';
	this.hostName = __SLAG__properties.hostName || '';
	this.isValid = __SLAG__properties.isValid || true;
	this.mode = __SLAG__properties.mode || 0;
	this.port = __SLAG__properties.port || 0;
	this.stripTerminator = __SLAG__properties.stripTerminator || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
TCPSocket.prototype.addEventListener = function () {
};
TCPSocket.prototype.removeEventListener = function () {
};
TCPSocket.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TCPSocket.prototype.fireEvent = function () {
};
TCPSocket.prototype.close = function () {
};
TCPSocket.prototype.connect = function () {
};
TCPSocket.prototype.listen = function () {
};
TCPSocket.prototype.write = function () {
};
TCPSocket.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TCPSocket.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TCPSocket.prototype.getApiName = function () {
	return this.apiName;
};
TCPSocket.prototype.getHostName = function () {
	return this.hostName;
};
TCPSocket.prototype.setHostName = function (property) {
	this.hostName = property;
};
TCPSocket.prototype.getIsValid = function () {
	return this.isValid;
};
TCPSocket.prototype.setIsValid = function (property) {
	this.isValid = property;
};
TCPSocket.prototype.getMode = function () {
	return this.mode;
};
TCPSocket.prototype.setMode = function (property) {
	this.mode = property;
};
TCPSocket.prototype.getPort = function () {
	return this.port;
};
TCPSocket.prototype.setPort = function (property) {
	this.port = property;
};
TCPSocket.prototype.getStripTerminator = function () {
	return this.stripTerminator;
};
TCPSocket.prototype.setStripTerminator = function (property) {
	this.stripTerminator = property;
};
module.exports = function (properties) {
	return new TCPSocket(properties);
};