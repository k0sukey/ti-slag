var crypto = require('crypto');
function MusicPlayer(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'currentPlaybackTime',
			'nowPlaying',
			'playbackState',
			'repeatMode',
			'shuffleMode',
			'volume',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.MusicPlayer.apiName is read only property');
	}
	this.apiName = 'Ti.Media.MusicPlayer';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.currentPlaybackTime = __SLAG__properties.currentPlaybackTime || 0;
	if (__SLAG__properties.nowPlaying) {
		throw new Error('Ti.Media.MusicPlayer.nowPlaying is read only property');
	}
	this.nowPlaying = {};
	if (__SLAG__properties.playbackState) {
		throw new Error('Ti.Media.MusicPlayer.playbackState is read only property');
	}
	this.playbackState = 0;
	this.repeatMode = __SLAG__properties.repeatMode || 0;
	this.shuffleMode = __SLAG__properties.shuffleMode || 0;
	this.volume = __SLAG__properties.volume || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
MusicPlayer.prototype.addEventListener = function () {
};
MusicPlayer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
MusicPlayer.prototype.fireEvent = function () {
};
MusicPlayer.prototype.getApiName = function () {
	return this.apiName;
};
MusicPlayer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
MusicPlayer.prototype.getCurrentPlaybackTime = function () {
	return this.currentPlaybackTime;
};
MusicPlayer.prototype.getNowPlaying = function () {
	return this.nowPlaying;
};
MusicPlayer.prototype.getPlaybackState = function () {
	return this.playbackState;
};
MusicPlayer.prototype.getRepeatMode = function () {
	return this.repeatMode;
};
MusicPlayer.prototype.getShuffleMode = function () {
	return this.shuffleMode;
};
MusicPlayer.prototype.getVolume = function () {
	return this.volume;
};
MusicPlayer.prototype.pause = function () {
};
MusicPlayer.prototype.play = function () {
};
MusicPlayer.prototype.removeEventListener = function () {
};
MusicPlayer.prototype.seekBackward = function () {
};
MusicPlayer.prototype.seekForward = function () {
};
MusicPlayer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
MusicPlayer.prototype.setCurrentPlaybackTime = function (property) {
	this.currentPlaybackTime = property;
};
MusicPlayer.prototype.setQueue = function () {
};
MusicPlayer.prototype.setRepeatMode = function (property) {
	this.repeatMode = property;
};
MusicPlayer.prototype.setShuffleMode = function (property) {
	this.shuffleMode = property;
};
MusicPlayer.prototype.setVolume = function (property) {
	this.volume = property;
};
MusicPlayer.prototype.skipToBeginning = function () {
};
MusicPlayer.prototype.skipToNext = function () {
};
MusicPlayer.prototype.skipToPrevious = function () {
};
MusicPlayer.prototype.stop = function () {
};
MusicPlayer.prototype.stopSeeking = function () {
};
module.exports = function (properties) {
	return new MusicPlayer(properties);
};