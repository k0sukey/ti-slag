var crypto = require('crypto');
function Item(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'albumArtist',
			'albumTitle',
			'albumTrackCount',
			'albumTrackNumber',
			'artist',
			'artwork',
			'composer',
			'discCount',
			'discNumber',
			'genre',
			'isCompilation',
			'lyrics',
			'mediaType',
			'playCount',
			'playbackDuration',
			'podcastTitle',
			'rating',
			'skipCount',
			'title',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.Item.apiName is read only property');
	}
	this.apiName = 'Ti.Media.Item';
	if (__SLAG__properties.albumArtist) {
		throw new Error('Ti.Media.Item.albumArtist is read only property');
	}
	this.albumArtist = '';
	if (__SLAG__properties.albumTitle) {
		throw new Error('Ti.Media.Item.albumTitle is read only property');
	}
	this.albumTitle = '';
	if (__SLAG__properties.albumTrackCount) {
		throw new Error('Ti.Media.Item.albumTrackCount is read only property');
	}
	this.albumTrackCount = 0;
	if (__SLAG__properties.albumTrackNumber) {
		throw new Error('Ti.Media.Item.albumTrackNumber is read only property');
	}
	this.albumTrackNumber = 0;
	if (__SLAG__properties.artist) {
		throw new Error('Ti.Media.Item.artist is read only property');
	}
	this.artist = '';
	if (__SLAG__properties.artwork) {
		throw new Error('Ti.Media.Item.artwork is read only property');
	}
	this.artwork = {};
	if (__SLAG__properties.composer) {
		throw new Error('Ti.Media.Item.composer is read only property');
	}
	this.composer = '';
	if (__SLAG__properties.discCount) {
		throw new Error('Ti.Media.Item.discCount is read only property');
	}
	this.discCount = 0;
	if (__SLAG__properties.discNumber) {
		throw new Error('Ti.Media.Item.discNumber is read only property');
	}
	this.discNumber = 0;
	if (__SLAG__properties.genre) {
		throw new Error('Ti.Media.Item.genre is read only property');
	}
	this.genre = '';
	if (__SLAG__properties.isCompilation) {
		throw new Error('Ti.Media.Item.isCompilation is read only property');
	}
	this.isCompilation = true;
	if (__SLAG__properties.lyrics) {
		throw new Error('Ti.Media.Item.lyrics is read only property');
	}
	this.lyrics = '';
	if (__SLAG__properties.mediaType) {
		throw new Error('Ti.Media.Item.mediaType is read only property');
	}
	this.mediaType = 0;
	if (__SLAG__properties.playCount) {
		throw new Error('Ti.Media.Item.playCount is read only property');
	}
	this.playCount = 0;
	if (__SLAG__properties.playbackDuration) {
		throw new Error('Ti.Media.Item.playbackDuration is read only property');
	}
	this.playbackDuration = 0;
	if (__SLAG__properties.podcastTitle) {
		throw new Error('Ti.Media.Item.podcastTitle is read only property');
	}
	this.podcastTitle = '';
	if (__SLAG__properties.rating) {
		throw new Error('Ti.Media.Item.rating is read only property');
	}
	this.rating = 0;
	if (__SLAG__properties.skipCount) {
		throw new Error('Ti.Media.Item.skipCount is read only property');
	}
	this.skipCount = 0;
	if (__SLAG__properties.title) {
		throw new Error('Ti.Media.Item.title is read only property');
	}
	this.title = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Item.prototype.addEventListener = function () {
};
Item.prototype.removeEventListener = function () {
};
Item.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Item.prototype.fireEvent = function () {
};
Item.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Item.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Item.prototype.getApiName = function () {
	return this.apiName;
};
Item.prototype.getAlbumArtist = function () {
	return this.albumArtist;
};
Item.prototype.getAlbumTitle = function () {
	return this.albumTitle;
};
Item.prototype.getAlbumTrackCount = function () {
	return this.albumTrackCount;
};
Item.prototype.getAlbumTrackNumber = function () {
	return this.albumTrackNumber;
};
Item.prototype.getArtist = function () {
	return this.artist;
};
Item.prototype.getArtwork = function () {
	return this.artwork;
};
Item.prototype.getComposer = function () {
	return this.composer;
};
Item.prototype.getDiscCount = function () {
	return this.discCount;
};
Item.prototype.getDiscNumber = function () {
	return this.discNumber;
};
Item.prototype.getGenre = function () {
	return this.genre;
};
Item.prototype.getIsCompilation = function () {
	return this.isCompilation;
};
Item.prototype.getLyrics = function () {
	return this.lyrics;
};
Item.prototype.getMediaType = function () {
	return this.mediaType;
};
Item.prototype.getPlayCount = function () {
	return this.playCount;
};
Item.prototype.getPlaybackDuration = function () {
	return this.playbackDuration;
};
Item.prototype.getPodcastTitle = function () {
	return this.podcastTitle;
};
Item.prototype.getRating = function () {
	return this.rating;
};
Item.prototype.getSkipCount = function () {
	return this.skipCount;
};
Item.prototype.getTitle = function () {
	return this.title;
};
module.exports = function (properties) {
	return new Item(properties);
};