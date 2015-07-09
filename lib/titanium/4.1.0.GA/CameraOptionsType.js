function CameraOptionsType(properties) {
	properties = properties || {};
	this.success = properties.success || {};
	this.error = properties.error || {};
	this.cancel = properties.cancel || {};
	this.autohide = properties.autohide || true;
	this.animated = properties.animated || true;
	this.saveToPhotoGallery = properties.saveToPhotoGallery || true;
	this.allowEditing = properties.allowEditing || true;
	this.mediaTypes = properties.mediaTypes || '';
	this.videoMaximumDuration = properties.videoMaximumDuration || 0;
	this.videoQuality = properties.videoQuality || 0;
	this.showControls = properties.showControls || true;
	this.overlay = properties.overlay || {};
	this.transform = properties.transform || {};
	this.inPopOver = properties.inPopOver || true;
	this.popoverView = properties.popoverView || {};
	this.arrowDirection = properties.arrowDirection || 0;
	this.autorotate = properties.autorotate || true;
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};