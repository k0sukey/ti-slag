function Blob(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Blob';
	this.bubbleParent = properties.bubbleParent || true;
	this.file = properties.file || {};
	this.height = properties.height || 0;
	this.length = properties.length || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.mimeType = properties.mimeType || '';
	this.nativePath = properties.nativePath || '';
	this.size = properties.size || 0;
	this.text = properties.text || '';
	this.width = properties.width || 0;
	return this;
}
Blob.prototype.addEventListener = function () {
};
Blob.prototype.append = function () {
};
Blob.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Blob.prototype.fireEvent = function () {
};
Blob.prototype.getApiName = function () {
	return '';
};
Blob.prototype.getBubbleParent = function () {
	return true;
};
Blob.prototype.getFile = function () {
	return {};
};
Blob.prototype.getHeight = function () {
	return 0;
};
Blob.prototype.getLength = function () {
	return 0;
};
Blob.prototype.getLifecycleContainer = function () {
	return {};
};
Blob.prototype.getMimeType = function () {
	return '';
};
Blob.prototype.getNativePath = function () {
	return '';
};
Blob.prototype.getSize = function () {
	return 0;
};
Blob.prototype.getText = function () {
	return '';
};
Blob.prototype.getWidth = function () {
	return 0;
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
Blob.prototype.removeEventListener = function () {
};
Blob.prototype.setBubbleParent = function () {
};
Blob.prototype.setLifecycleContainer = function () {
};
Blob.prototype.toString = function () {
	return '';
};
module.exports = function (properties) {
	return new Blob(properties);
};