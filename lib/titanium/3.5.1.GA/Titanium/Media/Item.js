function Item(properties) {
	properties = properties || {};
	this.albumArtist = properties.albumArtist || undefined;
	this.albumTitle = properties.albumTitle || undefined;
	this.albumTrackCount = properties.albumTrackCount || undefined;
	this.albumTrackNumber = properties.albumTrackNumber || undefined;
	this.apiName = 'Ti.Media.Item';
	this.artist = properties.artist || undefined;
	this.artwork = properties.artwork || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.composer = properties.composer || undefined;
	this.discCount = properties.discCount || undefined;
	this.discNumber = properties.discNumber || undefined;
	this.genre = properties.genre || undefined;
	this.isCompilation = properties.isCompilation || undefined;
	this.lyrics = properties.lyrics || undefined;
	this.mediaType = properties.mediaType || undefined;
	this.playCount = properties.playCount || undefined;
	this.playbackDuration = properties.playbackDuration || undefined;
	this.podcastTitle = properties.podcastTitle || undefined;
	this.rating = properties.rating || undefined;
	this.skipCount = properties.skipCount || undefined;
	this.title = properties.title || undefined;
	return this;
}
Item.prototype.addEventListener = function () {
};
Item.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Item.prototype.fireEvent = function () {
};
Item.prototype.getAlbumArtist = function () {
	return '';
};
Item.prototype.getAlbumTitle = function () {
	return '';
};
Item.prototype.getAlbumTrackCount = function () {
	return 0;
};
Item.prototype.getAlbumTrackNumber = function () {
	return 0;
};
Item.prototype.getApiName = function () {
	return '';
};
Item.prototype.getArtist = function () {
	return '';
};
Item.prototype.getArtwork = function () {
	return {};
};
Item.prototype.getBubbleParent = function () {
	return true;
};
Item.prototype.getComposer = function () {
	return '';
};
Item.prototype.getDiscCount = function () {
	return 0;
};
Item.prototype.getDiscNumber = function () {
	return 0;
};
Item.prototype.getGenre = function () {
	return '';
};
Item.prototype.getIsCompilation = function () {
	return true;
};
Item.prototype.getLyrics = function () {
	return '';
};
Item.prototype.getMediaType = function () {
	return 0;
};
Item.prototype.getPlayCount = function () {
	return 0;
};
Item.prototype.getPlaybackDuration = function () {
	return 0;
};
Item.prototype.getPodcastTitle = function () {
	return '';
};
Item.prototype.getRating = function () {
	return 0;
};
Item.prototype.getSkipCount = function () {
	return 0;
};
Item.prototype.getTitle = function () {
	return '';
};
Item.prototype.removeEventListener = function () {
};
Item.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Item(properties);
};