function MusicPlayer(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Media.MusicPlayer';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentPlaybackTime = properties.currentPlaybackTime || undefined;
	this.nowPlaying = properties.nowPlaying || undefined;
	this.playbackState = properties.playbackState || undefined;
	this.repeatMode = properties.repeatMode || undefined;
	this.shuffleMode = properties.shuffleMode || undefined;
	this.volume = properties.volume || undefined;
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