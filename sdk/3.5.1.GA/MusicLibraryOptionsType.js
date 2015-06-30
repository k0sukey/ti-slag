function MusicLibraryOptionsType(properties) {
	properties = properties || {};
	this.allowMultipleSelections = properties.allowMultipleSelections || undefined;
	this.animated = properties.animated || undefined;
	this.autohide = properties.autohide || undefined;
	this.cancel = properties.cancel || undefined;
	this.error = properties.error || undefined;
	this.mediaTypes = properties.mediaTypes || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryOptionsType(properties);
};