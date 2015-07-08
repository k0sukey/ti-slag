function MusicPlayer(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Media.MusicPlayer';
	this.bubbleParent = properties.bubbleParent || true;
	this.currentPlaybackTime = properties.currentPlaybackTime || 0;
	this.nowPlaying = properties.nowPlaying || {};
	this.playbackState = properties.playbackState || 0;
	this.repeatMode = properties.repeatMode || 0;
	this.shuffleMode = properties.shuffleMode || 0;
	this.volume = properties.volume || 0;
	return this;
}
MusicPlayer.prototype.addEventListener = function () {
};
MusicPlayer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MusicPlayer.prototype.fireEvent = function () {
};
MusicPlayer.prototype.getApiName = function () {
	return '';
};
MusicPlayer.prototype.getBubbleParent = function () {
	return true;
};
MusicPlayer.prototype.getCurrentPlaybackTime = function () {
	return 0;
};
MusicPlayer.prototype.getNowPlaying = function () {
	return {};
};
MusicPlayer.prototype.getPlaybackState = function () {
	return 0;
};
MusicPlayer.prototype.getRepeatMode = function () {
	return 0;
};
MusicPlayer.prototype.getShuffleMode = function () {
	return 0;
};
MusicPlayer.prototype.getVolume = function () {
	return 0;
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
MusicPlayer.prototype.setBubbleParent = function () {
};
MusicPlayer.prototype.setCurrentPlaybackTime = function () {
};
MusicPlayer.prototype.setQueue = function () {
};
MusicPlayer.prototype.setRepeatMode = function () {
};
MusicPlayer.prototype.setShuffleMode = function () {
};
MusicPlayer.prototype.setVolume = function () {
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