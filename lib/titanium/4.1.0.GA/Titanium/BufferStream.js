function BufferStream(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.BufferStream';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
BufferStream.prototype.addEventListener = function () {
};
BufferStream.prototype.removeEventListener = function () {
};
BufferStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BufferStream.prototype.fireEvent = function () {
};
BufferStream.prototype.read = function () {
	return 0;
};
BufferStream.prototype.write = function () {
	return 0;
};
BufferStream.prototype.isWriteable = function () {
	return true;
};
BufferStream.prototype.isReadable = function () {
	return true;
};
BufferStream.prototype.close = function () {
};
BufferStream.prototype.getBubbleParent = function () {
	return true;
};
BufferStream.prototype.setBubbleParent = function () {
};
BufferStream.prototype.getApiName = function () {
	return '';
};
BufferStream.prototype.getLifecycleContainer = function () {
	return {};
};
BufferStream.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new BufferStream(properties);
};