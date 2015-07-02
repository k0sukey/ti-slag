function MusicLibraryResponseType(properties) {
	properties = properties || {};
	this.items = properties.items || undefined;
	this.representative = properties.representative || undefined;
	this.types = properties.types || undefined;
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryResponseType(properties);
};