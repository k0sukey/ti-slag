function MediaQueryType(properties) {
	properties = properties || {};
	this.albumArtist = properties.albumArtist || undefined;
	this.albumTitle = properties.albumTitle || undefined;
	this.artist = properties.artist || undefined;
	this.composer = properties.composer || undefined;
	this.genre = properties.genre || undefined;
	this.grouping = properties.grouping || undefined;
	this.isCompilation = properties.isCompilation || undefined;
	this.mediaType = properties.mediaType || undefined;
	this.title = properties.title || undefined;
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};