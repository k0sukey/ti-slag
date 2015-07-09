function Blob(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Blob';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.file = properties.file || {};
	this.height = properties.height || 0;
	this.length = properties.length || 0;
	this.mimeType = properties.mimeType || '';
	this.nativePath = properties.nativePath || '';
	this.size = properties.size || 0;
	this.text = properties.text || '';
	this.width = properties.width || 0;
	return this;
}
Blob.prototype.addEventListener = function () {
};
Blob.prototype.removeEventListener = function () {
};
Blob.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Blob.prototype.fireEvent = function () {
};
Blob.prototype.imageAsCropped = function () {
	return {};
};
Blob.prototype.imageAsResized = function () {
	return {};
};
Blob.prototype.imageAsThumbnail = function () {
	return {};
};
Blob.prototype.imageWithAlpha = function () {
	return {};
};
Blob.prototype.imageWithRoundedCorner = function () {
	return {};
};
Blob.prototype.imageWithTransparentBorder = function () {
	return {};
};
Blob.prototype.append = function () {
};
Blob.prototype.toString = function () {
	return {};
};
Blob.prototype.getBubbleParent = function () {
	return {};
};
Blob.prototype.setBubbleParent = function () {
};
Blob.prototype.getApiName = function () {
	return {};
};
Blob.prototype.getLifecycleContainer = function () {
	return {};
};
Blob.prototype.setLifecycleContainer = function () {
};
Blob.prototype.getFile = function () {
	return {};
};
Blob.prototype.getHeight = function () {
	return {};
};
Blob.prototype.getLength = function () {
	return {};
};
Blob.prototype.getMimeType = function () {
	return {};
};
Blob.prototype.getNativePath = function () {
	return {};
};
Blob.prototype.getSize = function () {
	return {};
};
Blob.prototype.getText = function () {
	return {};
};
Blob.prototype.getWidth = function () {
	return {};
};
module.exports = function (properties) {
	return new Blob(properties);
};