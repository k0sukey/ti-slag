var crypto = require('crypto');
function MediaQueryType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'grouping',
			'mediaType',
			'title',
			'albumTitle',
			'artist',
			'albumArtist',
			'genre',
			'composer',
			'isCompilation',
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
		this.grouping = undefined;
	} else {
		this.grouping = __SLAG_PROPERTIES.grouping || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaType = undefined;
	} else {
		this.mediaType = __SLAG_PROPERTIES.mediaType || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumTitle = undefined;
	} else {
		this.albumTitle = __SLAG_PROPERTIES.albumTitle || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.artist = undefined;
	} else {
		this.artist = __SLAG_PROPERTIES.artist || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.albumArtist = undefined;
	} else {
		this.albumArtist = __SLAG_PROPERTIES.albumArtist || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.genre = undefined;
	} else {
		this.genre = __SLAG_PROPERTIES.genre || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.composer = undefined;
	} else {
		this.composer = __SLAG_PROPERTIES.composer || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isCompilation = undefined;
	} else {
		this.isCompilation = __SLAG_PROPERTIES.isCompilation || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};