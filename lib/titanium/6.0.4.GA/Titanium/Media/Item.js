var crypto = require('crypto');
function Item(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Media.Item.apiName is read only property');
	}
	this.apiName = 'Ti.Media.Item';
	if (__SLAG_PROPERTIES.albumArtist) {
		throw new Error('Ti.Media.Item.albumArtist is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumArtist = undefined;
	} else {
		this.albumArtist = '';
	}
	if (__SLAG_PROPERTIES.albumTitle) {
		throw new Error('Ti.Media.Item.albumTitle is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumTitle = undefined;
	} else {
		this.albumTitle = '';
	}
	if (__SLAG_PROPERTIES.albumTrackCount) {
		throw new Error('Ti.Media.Item.albumTrackCount is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumTrackCount = undefined;
	} else {
		this.albumTrackCount = 0;
	}
	if (__SLAG_PROPERTIES.albumTrackNumber) {
		throw new Error('Ti.Media.Item.albumTrackNumber is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumTrackNumber = undefined;
	} else {
		this.albumTrackNumber = 0;
	}
	if (__SLAG_PROPERTIES.artist) {
		throw new Error('Ti.Media.Item.artist is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.artist = undefined;
	} else {
		this.artist = '';
	}
	if (__SLAG_PROPERTIES.artwork) {
		throw new Error('Ti.Media.Item.artwork is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.artwork = undefined;
	} else {
		this.artwork = {};
	}
	if (__SLAG_PROPERTIES.composer) {
		throw new Error('Ti.Media.Item.composer is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.composer = undefined;
	} else {
		this.composer = '';
	}
	if (__SLAG_PROPERTIES.discCount) {
		throw new Error('Ti.Media.Item.discCount is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.discCount = undefined;
	} else {
		this.discCount = 0;
	}
	if (__SLAG_PROPERTIES.discNumber) {
		throw new Error('Ti.Media.Item.discNumber is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.discNumber = undefined;
	} else {
		this.discNumber = 0;
	}
	if (__SLAG_PROPERTIES.genre) {
		throw new Error('Ti.Media.Item.genre is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.genre = undefined;
	} else {
		this.genre = '';
	}
	if (__SLAG_PROPERTIES.isCompilation) {
		throw new Error('Ti.Media.Item.isCompilation is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isCompilation = undefined;
	} else {
		this.isCompilation = true;
	}
	if (__SLAG_PROPERTIES.lyrics) {
		throw new Error('Ti.Media.Item.lyrics is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lyrics = undefined;
	} else {
		this.lyrics = '';
	}
	if (__SLAG_PROPERTIES.mediaType) {
		throw new Error('Ti.Media.Item.mediaType is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaType = undefined;
	} else {
		this.mediaType = 0;
	}
	if (__SLAG_PROPERTIES.playCount) {
		throw new Error('Ti.Media.Item.playCount is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.playCount = undefined;
	} else {
		this.playCount = 0;
	}
	if (__SLAG_PROPERTIES.playbackDuration) {
		throw new Error('Ti.Media.Item.playbackDuration is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.playbackDuration = undefined;
	} else {
		this.playbackDuration = 0;
	}
	if (__SLAG_PROPERTIES.podcastTitle) {
		throw new Error('Ti.Media.Item.podcastTitle is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.podcastTitle = undefined;
	} else {
		this.podcastTitle = '';
	}
	if (__SLAG_PROPERTIES.rating) {
		throw new Error('Ti.Media.Item.rating is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rating = undefined;
	} else {
		this.rating = 0;
	}
	if (__SLAG_PROPERTIES.skipCount) {
		throw new Error('Ti.Media.Item.skipCount is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.skipCount = undefined;
	} else {
		this.skipCount = 0;
	}
	if (__SLAG_PROPERTIES.title) {
		throw new Error('Ti.Media.Item.title is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Item.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Item.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Item.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Item.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Item.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Item.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Item.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Item.prototype.getAlbumArtist = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.albumArtist;
};
Item.prototype.getAlbumTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.albumTitle;
};
Item.prototype.getAlbumTrackCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.albumTrackCount;
};
Item.prototype.getAlbumTrackNumber = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.albumTrackNumber;
};
Item.prototype.getArtist = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.artist;
};
Item.prototype.getArtwork = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.artwork;
};
Item.prototype.getComposer = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.composer;
};
Item.prototype.getDiscCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.discCount;
};
Item.prototype.getDiscNumber = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.discNumber;
};
Item.prototype.getGenre = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.genre;
};
Item.prototype.getIsCompilation = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isCompilation;
};
Item.prototype.getLyrics = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lyrics;
};
Item.prototype.getMediaType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.mediaType;
};
Item.prototype.getPlayCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playCount;
};
Item.prototype.getPlaybackDuration = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playbackDuration;
};
Item.prototype.getPodcastTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.podcastTitle;
};
Item.prototype.getRating = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rating;
};
Item.prototype.getSkipCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.skipCount;
};
Item.prototype.getTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
module.exports = function (properties) {
	return new Item(properties);
};