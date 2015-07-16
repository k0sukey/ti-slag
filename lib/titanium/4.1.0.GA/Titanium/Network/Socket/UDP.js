function UDP(properties) {
	properties = properties || {};
	this.port = properties.port || '';
	this.started = properties.started || '';
	this.data = properties.data || '';
	this.error = properties.error || '';
	this.port = properties.port || 0;
	this.started = properties.started || undefined;
	this.data = properties.data || {};
	this.error = properties.error || {};
	return this;
}
UDP.prototype.addEventListener = function () {
};
UDP.prototype.removeEventListener = function () {
};
UDP.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
UDP.prototype.fireEvent = function () {
};
UDP.prototype.start = function () {
};
UDP.prototype.stop = function () {
};
UDP.prototype.sendString = function () {
};
UDP.prototype.sendBytes = function () {
};
UDP.prototype.getPort = function () {
};
UDP.prototype.setPort = function () {
};
UDP.prototype.getStarted = function () {
};
UDP.prototype.setStarted = function () {
};
UDP.prototype.getData = function () {
};
UDP.prototype.setData = function () {
};
UDP.prototype.getError = function () {
};
UDP.prototype.setError = function () {
};
UDP.prototype.start = function () {
};
UDP.prototype.stop = function () {
};
UDP.prototype.sendString = function () {
};
UDP.prototype.sendBytes = function () {
};
UDP.prototype.getPort = function () {
	return {};
};
UDP.prototype.setPort = function () {
};
UDP.prototype.getStarted = function () {
	return {};
};
UDP.prototype.setStarted = function () {
};
UDP.prototype.getData = function () {
	return {};
};
UDP.prototype.setData = function () {
};
UDP.prototype.getError = function () {
	return {};
};
UDP.prototype.setError = function () {
};
UDP.prototype.getPort = function () {
	return 0;
};
UDP.prototype.setPort = function () {
};
UDP.prototype.getStarted = function () {
};
UDP.prototype.setStarted = function () {
};
UDP.prototype.getData = function () {
	return {};
};
UDP.prototype.setData = function () {
};
UDP.prototype.getError = function () {
	return {};
};
module.exports = function (properties) {
	return new UDP(properties);
};