function CameraMediaItemType(properties) {
	properties = properties || {};
	this.code = properties.code || 0;
	this.cropRect = properties.cropRect || {};
	this.error = properties.error || '';
	this.media = properties.media || {};
	this.mediaType = properties.mediaType || '';
	this.success = properties.success || true;
	return this;
}
module.exports = function (properties) {
	return new CameraMediaItemType(properties);
};