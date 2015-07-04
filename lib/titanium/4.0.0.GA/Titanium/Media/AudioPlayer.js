function AudioPlayer(properties) {
	properties = properties || {};
	this.STATE_BUFFERING = properties.STATE_BUFFERING || undefined;
	this.STATE_INITIALIZED = properties.STATE_INITIALIZED || undefined;
	this.STATE_PAUSED = properties.STATE_PAUSED || undefined;
	this.STATE_PLAYING = properties.STATE_PLAYING || undefined;
	this.STATE_STARTING = properties.STATE_STARTING || undefined;
	this.STATE_STOPPED = properties.STATE_STOPPED || undefined;
	this.STATE_STOPPING = properties.STATE_STOPPING || undefined;
	this.STATE_WAITING_FOR_DATA = properties.STATE_WAITING_FOR_DATA || undefined;
	this.STATE_WAITING_FOR_QUEUE = properties.STATE_WAITING_FOR_QUEUE || undefined;
	this.allowBackground = properties.allowBackground || undefined;
	this.apiName = 'Ti.Media.AudioPlayer';
	this.bitRate = properties.bitRate || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.bufferSize = properties.bufferSize || undefined;
	this.duration = properties.duration || undefined;
	this.idle = properties.idle || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.paused = properties.paused || undefined;
	this.playing = properties.playing || undefined;
	this.progress = properties.progress || undefined;
	this.state = properties.state || undefined;
	this.time = properties.time || undefined;
	this.url = properties.url || undefined;
	this.volume = properties.volume || undefined;
	this.waiting = properties.waiting || undefined;
	return this;
}
AudioPlayer.prototype.addEventListener = function () {
};
AudioPlayer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AudioPlayer.prototype.fireEvent = function () {
};
AudioPlayer.prototype.getAllowBackground = function () {
	return true;
};
AudioPlayer.prototype.getApiName = function () {
	return '';
};
AudioPlayer.prototype.getBitRate = function () {
	return 0;
};
AudioPlayer.prototype.getBubbleParent = function () {
	return true;
};
AudioPlayer.prototype.getBufferSize = function () {
	return 0;
};
AudioPlayer.prototype.getDuration = function () {
	return 0;
};
AudioPlayer.prototype.getIdle = function () {
	return true;
};
AudioPlayer.prototype.getLifecycleContainer = function () {
	return {};
};
AudioPlayer.prototype.getPaused = function () {
	return true;
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
AudioPlayer.prototype.getTime = function () {
	return 0;
};
AudioPlayer.prototype.getUrl = function () {
	return '';
};
AudioPlayer.prototype.getVolume = function () {
	return 0;
};
AudioPlayer.prototype.getWaiting = function () {
	return true;
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
AudioPlayer.prototype.removeEventListener = function () {
};
AudioPlayer.prototype.setBitRate = function () {
};
AudioPlayer.prototype.setBubbleParent = function () {
};
AudioPlayer.prototype.setBufferSize = function () {
};
AudioPlayer.prototype.setLifecycleContainer = function () {
};
AudioPlayer.prototype.setPaused = function () {
};
AudioPlayer.prototype.setTime = function () {
};
AudioPlayer.prototype.setUrl = function () {
};
AudioPlayer.prototype.setVolume = function () {
};
AudioPlayer.prototype.start = function () {
};
AudioPlayer.prototype.stateDescription = function () {
	return '';
};
AudioPlayer.prototype.stop = function () {
};
module.exports = function (properties) {
	return new AudioPlayer(properties);
};