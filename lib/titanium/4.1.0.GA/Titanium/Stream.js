function Stream(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Stream';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.MODE_READ = properties.MODE_READ || 0;
	this.MODE_WRITE = properties.MODE_WRITE || 0;
	this.MODE_APPEND = properties.MODE_APPEND || 0;
	return this;
}
Stream.prototype.addEventListener = function () {
};
Stream.prototype.removeEventListener = function () {
};
Stream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Stream.prototype.fireEvent = function () {
};
Stream.prototype.createStream = function (params) {
	var Stream = require('./Stream/Stream');
	return Stream(params);
};
Stream.prototype.read = function () {
};
Stream.prototype.readAll = function () {
	return {};
};
Stream.prototype.write = function () {
};
Stream.prototype.writeStream = function () {
};
Stream.prototype.pump = function () {
};
Stream.prototype.getBubbleParent = function () {
	return true;
};
Stream.prototype.setBubbleParent = function () {
};
Stream.prototype.getApiName = function () {
	return '';
};
Stream.prototype.getLifecycleContainer = function () {
	return {};
};
Stream.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Stream(properties);
};