function MusicLibraryOptionsType(properties) {
	properties = properties || {};
	this.success = properties.success || {};
	this.error = properties.error || {};
	this.cancel = properties.cancel || {};
	this.autohide = properties.autohide || true;
	this.animated = properties.animated || true;
	this.mediaTypes = properties.mediaTypes || 0;
	this.allowMultipleSelections = properties.allowMultipleSelections || true;
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryOptionsType(properties);
};