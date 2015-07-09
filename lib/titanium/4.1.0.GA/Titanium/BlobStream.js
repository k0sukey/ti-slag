function BlobStream(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.BlobStream';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
BlobStream.prototype.addEventListener = function () {
};
BlobStream.prototype.removeEventListener = function () {
};
BlobStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BlobStream.prototype.fireEvent = function () {
};
BlobStream.prototype.read = function () {
	return {};
};
BlobStream.prototype.write = function () {
	return {};
};
BlobStream.prototype.isWriteable = function () {
	return {};
};
BlobStream.prototype.isReadable = function () {
	return {};
};
BlobStream.prototype.close = function () {
};
BlobStream.prototype.getBubbleParent = function () {
	return {};
};
BlobStream.prototype.setBubbleParent = function () {
};
BlobStream.prototype.getApiName = function () {
	return {};
};
BlobStream.prototype.getLifecycleContainer = function () {
	return {};
};
BlobStream.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new BlobStream(properties);
};