function CameraMediaItemType(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || '';
	this.code = properties.code || 0;
	this.media = properties.media || {};
	this.mediaType = properties.mediaType || '';
	this.cropRect = properties.cropRect || {};
	return this;
}
module.exports = function (properties) {
	return new CameraMediaItemType(properties);
};