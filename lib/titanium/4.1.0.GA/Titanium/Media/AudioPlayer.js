function AudioPlayer(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Media.AudioPlayer';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.STATE_BUFFERING = properties.STATE_BUFFERING || 0;
	this.STATE_INITIALIZED = properties.STATE_INITIALIZED || 0;
	this.STATE_PAUSED = properties.STATE_PAUSED || 0;
	this.STATE_PLAYING = properties.STATE_PLAYING || 0;
	this.STATE_STARTING = properties.STATE_STARTING || 0;
	this.STATE_STOPPED = properties.STATE_STOPPED || 0;
	this.STATE_STOPPING = properties.STATE_STOPPING || 0;
	this.STATE_WAITING_FOR_DATA = properties.STATE_WAITING_FOR_DATA || 0;
	this.STATE_WAITING_FOR_QUEUE = properties.STATE_WAITING_FOR_QUEUE || 0;
	this.allowBackground = properties.allowBackground || true;
	this.bitRate = properties.bitRate || 0;
	this.duration = properties.duration || 0;
	this.idle = properties.idle || true;
	this.paused = properties.paused || true;
	this.playing = properties.playing || true;
	this.progress = properties.progress || 0;
	this.state = properties.state || 0;
	this.url = properties.url || '';
	this.volume = properties.volume || 0;
	this.waiting = properties.waiting || true;
	this.bufferSize = properties.bufferSize || 0;
	this.time = properties.time || 0;
	this.autoplay = properties.autoplay || true;
	return this;
}
AudioPlayer.prototype.addEventListener = function () {
};
AudioPlayer.prototype.removeEventListener = function () {
};
AudioPlayer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AudioPlayer.prototype.fireEvent = function () {
};
AudioPlayer.prototype.isPaused = function () {
	return true;
};
AudioPlayer.prototype.isPlaying = function () {
	return true;
};
AudioPlayer.prototype.pause = function () {
};
AudioPlayer.prototype.play = function () {
};
AudioPlayer.prototype.release = function () {
};
AudioPlayer.prototype.start = function () {
};
AudioPlayer.prototype.stateDescription = function () {
	return '';
};
AudioPlayer.prototype.stop = function () {
};
AudioPlayer.prototype.getPaused = function () {
	return true;
};
AudioPlayer.prototype.setPaused = function () {
};
AudioPlayer.prototype.getPlaying = function () {
	return true;
};
AudioPlayer.prototype.getBubbleParent = function () {
	return true;
};
AudioPlayer.prototype.setBubbleParent = function () {
};
AudioPlayer.prototype.getApiName = function () {
	return '';
};
AudioPlayer.prototype.getLifecycleContainer = function () {
	return {};
};
AudioPlayer.prototype.setLifecycleContainer = function () {
};
AudioPlayer.prototype.getAllowBackground = function () {
	return true;
};
AudioPlayer.prototype.setAllowBackground = function () {
};
AudioPlayer.prototype.getBitRate = function () {
	return 0;
};
AudioPlayer.prototype.setBitRate = function () {
};
AudioPlayer.prototype.getDuration = function () {
	return 0;
};
AudioPlayer.prototype.getIdle = function () {
	return true;
};
AudioPlayer.prototype.getPaused = function () {
	return true;
};
AudioPlayer.prototype.setPaused = function () {
};
AudioPlayer.prototype.getPlaying = function () {
	return true;
};
AudioPlayer.prototype.getProgress = function () {
	return 0;
};
AudioPlayer.prototype.getState = function () {
	return 0;
};
AudioPlayer.prototype.getUrl = function () {
	return '';
};
AudioPlayer.prototype.setUrl = function () {
};
AudioPlayer.prototype.getVolume = function () {
	return 0;
};
AudioPlayer.prototype.setVolume = function () {
};
AudioPlayer.prototype.getWaiting = function () {
	return true;
};
AudioPlayer.prototype.getBufferSize = function () {
	return 0;
};
AudioPlayer.prototype.setBufferSize = function () {
};
AudioPlayer.prototype.getTime = function () {
	return 0;
};
AudioPlayer.prototype.setTime = function () {
};
AudioPlayer.prototype.getAutoplay = function () {
	return true;
};
AudioPlayer.prototype.setAutoplay = function () {
};
module.exports = function (properties) {
	return new AudioPlayer(properties);
};