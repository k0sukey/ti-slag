function MediaQueryType(properties) {
	properties = properties || {};
	this.albumArtist = properties.albumArtist || {};
	this.albumTitle = properties.albumTitle || {};
	this.artist = properties.artist || {};
	this.composer = properties.composer || {};
	this.genre = properties.genre || {};
	this.grouping = properties.grouping || 0;
	this.isCompilation = properties.isCompilation || {};
	this.mediaType = properties.mediaType || {};
	this.title = properties.title || {};
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};