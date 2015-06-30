function PhotoGalleryOptionsType(properties) {
	properties = properties || {};
	this.allowEditing = properties.allowEditing || undefined;
	this.animated = properties.animated || undefined;
	this.arrowDirection = properties.arrowDirection || undefined;
	this.autohide = properties.autohide || undefined;
	this.cancel = properties.cancel || undefined;
	this.error = properties.error || undefined;
	this.mediaTypes = properties.mediaTypes || undefined;
	this.popoverView = properties.popoverView || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new PhotoGalleryOptionsType(properties);
};