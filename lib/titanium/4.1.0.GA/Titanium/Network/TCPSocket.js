function TCPSocket(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.TCPSocket';
	this.hostName = properties.hostName || '';
	this.isValid = properties.isValid || true;
	this.mode = properties.mode || 0;
	this.port = properties.port || 0;
	this.stripTerminator = properties.stripTerminator || true;
	return this;
}
TCPSocket.prototype.addEventListener = function () {
};
TCPSocket.prototype.removeEventListener = function () {
};
TCPSocket.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
TCPSocket.prototype.setBubbleParent = function () {
};
TCPSocket.prototype.getApiName = function () {
	return '';
};
TCPSocket.prototype.getHostName = function () {
	return '';
};
TCPSocket.prototype.setHostName = function () {
};
TCPSocket.prototype.getIsValid = function () {
	return true;
};
TCPSocket.prototype.setIsValid = function () {
};
TCPSocket.prototype.getMode = function () {
	return 0;
};
TCPSocket.prototype.setMode = function () {
};
TCPSocket.prototype.getPort = function () {
	return 0;
};
TCPSocket.prototype.setPort = function () {
};
TCPSocket.prototype.getStripTerminator = function () {
	return true;
};
TCPSocket.prototype.setStripTerminator = function () {
};
module.exports = function (properties) {
	return new TCPSocket(properties);
};