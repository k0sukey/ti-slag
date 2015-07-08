function Stream(properties) {
	properties = properties || {};
	this.MODE_APPEND = properties.MODE_APPEND || 0;
	this.MODE_READ = properties.MODE_READ || 0;
	this.MODE_WRITE = properties.MODE_WRITE || 0;
	this.apiName = 'Ti.Stream';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Stream.prototype.addEventListener = function () {
};
Stream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Stream.prototype.createStream = function (params) {
	var Stream = require('./Stream/Stream');
	return Stream(params);
};
Stream.prototype.fireEvent = function () {
};
Stream.prototype.getApiName = function () {
	return '';
};
Stream.prototype.getBubbleParent = function () {
	return true;
};
Stream.prototype.pump = function () {
};
Stream.prototype.read = function () {
};
Stream.prototype.readAll = function () {
	return {};
};
Stream.prototype.removeEventListener = function () {
};
Stream.prototype.setBubbleParent = function () {
};
Stream.prototype.write = function () {
};
Stream.prototype.writeStream = function () {
};
module.exports = function (properties) {
	return new Stream(properties);
};