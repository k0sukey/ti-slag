function Blob(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Blob';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.file = properties.file || undefined;
	this.height = properties.height || undefined;
	this.length = properties.length || undefined;
	this.mimeType = properties.mimeType || undefined;
	this.nativePath = properties.nativePath || undefined;
	this.size = properties.size || undefined;
	this.text = properties.text || undefined;
	this.width = properties.width || undefined;
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
	return this.apiName;
};
Blob.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Blob.prototype.getFile = function () {
	return this.file;
};
Blob.prototype.getHeight = function () {
	return this.height;
};
Blob.prototype.getLength = function () {
	return this.length;
};
Blob.prototype.getMimeType = function () {
	return this.mimeType;
};
Blob.prototype.getNativePath = function () {
	return this.nativePath;
};
Blob.prototype.getSize = function () {
	return this.size;
};
Blob.prototype.getText = function () {
	return this.text;
};
Blob.prototype.getWidth = function () {
	return this.width;
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
Blob.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Blob.prototype.toString = function () {
	return '';
};
module.exports = function (properties) {
	return new Blob(properties);
};