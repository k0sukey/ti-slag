function Item(properties) {
	properties = properties || {};
	this.albumArtist = properties.albumArtist || '';
	this.albumTitle = properties.albumTitle || '';
	this.albumTrackCount = properties.albumTrackCount || 0;
	this.albumTrackNumber = properties.albumTrackNumber || 0;
	this.apiName = 'Ti.Media.Item';
	this.artist = properties.artist || '';
	this.artwork = properties.artwork || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.composer = properties.composer || '';
	this.discCount = properties.discCount || 0;
	this.discNumber = properties.discNumber || 0;
	this.genre = properties.genre || '';
	this.isCompilation = properties.isCompilation || true;
	this.lyrics = properties.lyrics || '';
	this.mediaType = properties.mediaType || 0;
	this.playCount = properties.playCount || 0;
	this.playbackDuration = properties.playbackDuration || 0;
	this.podcastTitle = properties.podcastTitle || '';
	this.rating = properties.rating || 0;
	this.skipCount = properties.skipCount || 0;
	this.title = properties.title || '';
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