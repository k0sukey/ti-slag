function BlobStream(properties) {
	properties = properties || {};
	this.apiName = 'Ti.BlobStream';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
BlobStream.prototype.addEventListener = function () {
};
BlobStream.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BlobStream.prototype.close = function () {
};
BlobStream.prototype.fireEvent = function () {
};
BlobStream.prototype.getApiName = function () {
	return '';
};
BlobStream.prototype.getBubbleParent = function () {
	return true;
};
BlobStream.prototype.getLifecycleContainer = function () {
	return {};
};
BlobStream.prototype.isReadable = function () {
	return true;
};
BlobStream.prototype.isWriteable = function () {
	return true;
};
BlobStream.prototype.read = function () {
	return 0;
};
BlobStream.prototype.removeEventListener = function () {
};
BlobStream.prototype.setBubbleParent = function () {
};
BlobStream.prototype.setLifecycleContainer = function () {
};
BlobStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new BlobStream(properties);
};