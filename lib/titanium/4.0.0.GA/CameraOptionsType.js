function CameraOptionsType(properties) {
	properties = properties || {};
	this.allowEditing = properties.allowEditing || true;
	this.animated = properties.animated || true;
	this.arrowDirection = properties.arrowDirection || 0;
	this.autohide = properties.autohide || true;
	this.autorotate = properties.autorotate || true;
	this.cancel = properties.cancel || {};
	this.error = properties.error || {};
	this.inPopOver = properties.inPopOver || true;
	this.mediaTypes = properties.mediaTypes || '';
	this.overlay = properties.overlay || {};
	this.popoverView = properties.popoverView || {};
	this.saveToPhotoGallery = properties.saveToPhotoGallery || true;
	this.showControls = properties.showControls || true;
	this.success = properties.success || {};
	this.transform = properties.transform || {};
	this.videoMaximumDuration = properties.videoMaximumDuration || 0;
	this.videoQuality = properties.videoQuality || 0;
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};