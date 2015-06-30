function CameraOptionsType(properties) {
	properties = properties || {};
	this.allowEditing = properties.allowEditing || undefined;
	this.animated = properties.animated || undefined;
	this.arrowDirection = properties.arrowDirection || undefined;
	this.autohide = properties.autohide || undefined;
	this.autorotate = properties.autorotate || undefined;
	this.cancel = properties.cancel || undefined;
	this.error = properties.error || undefined;
	this.inPopOver = properties.inPopOver || undefined;
	this.mediaTypes = properties.mediaTypes || undefined;
	this.overlay = properties.overlay || undefined;
	this.popoverView = properties.popoverView || undefined;
	this.saveToPhotoGallery = properties.saveToPhotoGallery || undefined;
	this.showControls = properties.showControls || undefined;
	this.success = properties.success || undefined;
	this.transform = properties.transform || undefined;
	this.videoMaximumDuration = properties.videoMaximumDuration || undefined;
	this.videoQuality = properties.videoQuality || undefined;
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};