function MusicLibraryResponseType(properties) {
	properties = properties || {};
	this.representative = properties.representative || {};
	this.items = properties.items || [];
	this.types = properties.types || 0;
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryResponseType(properties);
};