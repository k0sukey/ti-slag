function PhotoGalleryOptionsType(properties) {
	properties = properties || {};
	this.success = properties.success || {};
	this.error = properties.error || {};
	this.cancel = properties.cancel || {};
	this.autohide = properties.autohide || true;
	this.animated = properties.animated || true;
	this.allowEditing = properties.allowEditing || true;
	this.mediaTypes = properties.mediaTypes || '';
	this.popoverView = properties.popoverView || {};
	this.arrowDirection = properties.arrowDirection || 0;
	return this;
}
module.exports = function (properties) {
	return new PhotoGalleryOptionsType(properties);
};