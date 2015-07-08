function MusicLibraryResponseType(properties) {
	properties = properties || {};
	this.items = properties.items || [];
	this.representative = properties.representative || {};
	this.types = properties.types || 0;
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryResponseType(properties);
};