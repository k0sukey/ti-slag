var crypto = require('crypto');
function MediaQueryType(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'albumArtist',
			'albumTitle',
			'artist',
			'composer',
			'genre',
			'grouping',
			'isCompilation',
			'mediaType',
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
	this.albumArtist = __SLAG__properties.albumArtist || {};
	this.albumTitle = __SLAG__properties.albumTitle || {};
	this.artist = __SLAG__properties.artist || {};
	this.composer = __SLAG__properties.composer || {};
	this.genre = __SLAG__properties.genre || {};
	this.grouping = __SLAG__properties.grouping || 0;
	this.isCompilation = __SLAG__properties.isCompilation || {};
	this.mediaType = __SLAG__properties.mediaType || {};
	this.title = __SLAG__properties.title || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};