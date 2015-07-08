function MusicLibraryOptionsType(properties) {
	properties = properties || {};
	this.allowMultipleSelections = properties.allowMultipleSelections || true;
	this.animated = properties.animated || true;
	this.autohide = properties.autohide || true;
	this.cancel = properties.cancel || {};
	this.error = properties.error || {};
	this.mediaTypes = properties.mediaTypes || 0;
	this.success = properties.success || {};
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryOptionsType(properties);
};