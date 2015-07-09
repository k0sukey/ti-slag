function MediaQueryType(properties) {
	properties = properties || {};
	this.grouping = properties.grouping || 0;
	this.mediaType = properties.mediaType || {};
	this.title = properties.title || {};
	this.albumTitle = properties.albumTitle || {};
	this.artist = properties.artist || {};
	this.albumArtist = properties.albumArtist || {};
	this.genre = properties.genre || {};
	this.composer = properties.composer || {};
	this.isCompilation = properties.isCompilation || {};
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};