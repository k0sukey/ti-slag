function FileStream(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Filesystem.FileStream';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
FileStream.prototype.addEventListener = function () {
};
FileStream.prototype.removeEventListener = function () {
};
FileStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
FileStream.prototype.fireEvent = function () {
};
FileStream.prototype.read = function () {
	return {};
};
FileStream.prototype.write = function () {
	return {};
};
FileStream.prototype.isWriteable = function () {
	return {};
};
FileStream.prototype.isReadable = function () {
	return {};
};
FileStream.prototype.close = function () {
};
FileStream.prototype.getBubbleParent = function () {
	return {};
};
FileStream.prototype.setBubbleParent = function () {
};
FileStream.prototype.getApiName = function () {
	return {};
};
FileStream.prototype.getLifecycleContainer = function () {
	return {};
};
FileStream.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new FileStream(properties);
};