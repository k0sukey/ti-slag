function PhotoGalleryOptionsType(properties) {
	properties = properties || {};
	this.allowEditing = properties.allowEditing || true;
	this.animated = properties.animated || true;
	this.arrowDirection = properties.arrowDirection || 0;
	this.autohide = properties.autohide || true;
	this.cancel = properties.cancel || {};
	this.error = properties.error || {};
	this.mediaTypes = properties.mediaTypes || '';
	this.popoverView = properties.popoverView || {};
	this.success = properties.success || {};
	return this;
}
module.exports = function (properties) {
	return new PhotoGalleryOptionsType(properties);
};