function BufferStream(properties) {
	properties = properties || {};
	this.apiName = 'Ti.BufferStream';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
BufferStream.prototype.addEventListener = function () {
};
BufferStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BufferStream.prototype.close = function () {
};
BufferStream.prototype.fireEvent = function () {
};
BufferStream.prototype.getApiName = function () {
	return '';
};
BufferStream.prototype.getBubbleParent = function () {
	return true;
};
BufferStream.prototype.getLifecycleContainer = function () {
	return {};
};
BufferStream.prototype.isReadable = function () {
	return true;
};
BufferStream.prototype.isWriteable = function () {
	return true;
};
BufferStream.prototype.read = function () {
	return 0;
};
BufferStream.prototype.removeEventListener = function () {
};
BufferStream.prototype.setBubbleParent = function () {
};
BufferStream.prototype.setLifecycleContainer = function () {
};
BufferStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new BufferStream(properties);
};