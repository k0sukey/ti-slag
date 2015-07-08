function FileStream(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Filesystem.FileStream';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
FileStream.prototype.addEventListener = function () {
};
FileStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
FileStream.prototype.close = function () {
};
FileStream.prototype.fireEvent = function () {
};
FileStream.prototype.getApiName = function () {
	return '';
};
FileStream.prototype.getBubbleParent = function () {
	return true;
};
FileStream.prototype.getLifecycleContainer = function () {
	return {};
};
FileStream.prototype.isReadable = function () {
	return true;
};
FileStream.prototype.isWriteable = function () {
	return true;
};
FileStream.prototype.read = function () {
	return 0;
};
FileStream.prototype.removeEventListener = function () {
};
FileStream.prototype.setBubbleParent = function () {
};
FileStream.prototype.setLifecycleContainer = function () {
};
FileStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new FileStream(properties);
};