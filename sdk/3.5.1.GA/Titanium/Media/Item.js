function Item(properties) {
	properties = properties || {};

	this.albumArtist = properties.albumArtist || undefined;
	this.albumTitle = properties.albumTitle || undefined;
	this.albumTrackCount = properties.albumTrackCount || undefined;
	this.albumTrackNumber = properties.albumTrackNumber || undefined;
	this.apiName = 'Titanium.Media.Item';
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

Item.prototype.addEventListener = function(){};

Item.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Item.prototype.fireEvent = function(){};

Item.prototype.getAlbumArtist = function(){ return this.albumArtist; };

Item.prototype.getAlbumTitle = function(){ return this.albumTitle; };

Item.prototype.getAlbumTrackCount = function(){ return this.albumTrackCount; };

Item.prototype.getAlbumTrackNumber = function(){ return this.albumTrackNumber; };

Item.prototype.getApiName = function(){ return this.apiName; };

Item.prototype.getArtist = function(){ return this.artist; };

Item.prototype.getArtwork = function(){ return this.artwork; };

Item.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Item.prototype.getComposer = function(){ return this.composer; };

Item.prototype.getDiscCount = function(){ return this.discCount; };

Item.prototype.getDiscNumber = function(){ return this.discNumber; };

Item.prototype.getGenre = function(){ return this.genre; };

Item.prototype.getIsCompilation = function(){ return this.isCompilation; };

Item.prototype.getLyrics = function(){ return this.lyrics; };

Item.prototype.getMediaType = function(){ return this.mediaType; };

Item.prototype.getPlayCount = function(){ return this.playCount; };

Item.prototype.getPlaybackDuration = function(){ return this.playbackDuration; };

Item.prototype.getPodcastTitle = function(){ return this.podcastTitle; };

Item.prototype.getRating = function(){ return this.rating; };

Item.prototype.getSkipCount = function(){ return this.skipCount; };

Item.prototype.getTitle = function(){ return this.title; };

Item.prototype.removeEventListener = function(){};

Item.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Item(properties); };