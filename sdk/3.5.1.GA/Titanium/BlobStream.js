function BlobStream(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.BlobStream';
	this.bubbleParent = properties.bubbleParent || undefined;
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
	return this.apiName;
};
BlobStream.prototype.getBubbleParent = function () {
	return this.bubbleParent;
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
BlobStream.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BlobStream.prototype.write = function () {
	return 0;
};
module.exports = function (properties) {
	return new BlobStream(properties);
};