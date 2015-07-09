function IOStream(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.IOStream';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
IOStream.prototype.addEventListener = function () {
};
IOStream.prototype.removeEventListener = function () {
};
IOStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
IOStream.prototype.fireEvent = function () {
};
IOStream.prototype.read = function () {
	return {};
};
IOStream.prototype.write = function () {
	return {};
};
IOStream.prototype.isWriteable = function () {
	return {};
};
IOStream.prototype.isReadable = function () {
	return {};
};
IOStream.prototype.close = function () {
};
IOStream.prototype.getBubbleParent = function () {
	return {};
};
IOStream.prototype.setBubbleParent = function () {
};
IOStream.prototype.getApiName = function () {
	return {};
};
IOStream.prototype.getLifecycleContainer = function () {
	return {};
};
IOStream.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new IOStream(properties);
};