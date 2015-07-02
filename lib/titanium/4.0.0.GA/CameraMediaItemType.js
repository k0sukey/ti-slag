function CameraMediaItemType(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.cropRect = properties.cropRect || undefined;
	this.error = properties.error || undefined;
	this.media = properties.media || undefined;
	this.mediaType = properties.mediaType || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new CameraMediaItemType(properties);
};