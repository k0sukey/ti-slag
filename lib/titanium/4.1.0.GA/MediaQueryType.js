var crypto = require('crypto');
function MediaQueryType(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.grouping = __SLAG__properties.grouping || 0;
	this.mediaType = __SLAG__properties.mediaType || {};
	this.title = __SLAG__properties.title || {};
	this.albumTitle = __SLAG__properties.albumTitle || {};
	this.artist = __SLAG__properties.artist || {};
	this.albumArtist = __SLAG__properties.albumArtist || {};
	this.genre = __SLAG__properties.genre || {};
	this.composer = __SLAG__properties.composer || {};
	this.isCompilation = __SLAG__properties.isCompilation || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new MediaQueryType(properties);
};