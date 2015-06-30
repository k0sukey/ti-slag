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
	this.apiName = 'Titanium.Media.AudioPlayer';
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
	return this.allowBackground;
};
AudioPlayer.prototype.getApiName = function () {
	return this.apiName;
};
AudioPlayer.prototype.getBitRate = function () {
	return this.bitRate;
};
AudioPlayer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AudioPlayer.prototype.getBufferSize = function () {
	return this.bufferSize;
};
AudioPlayer.prototype.getDuration = function () {
	return this.duration;
};
AudioPlayer.prototype.getIdle = function () {
	return this.idle;
};
AudioPlayer.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
AudioPlayer.prototype.getPaused = function () {
	return this.paused;
};
AudioPlayer.prototype.getPlaying = function () {
	return this.playing;
};
AudioPlayer.prototype.getProgress = function () {
	return this.progress;
};
AudioPlayer.prototype.getState = function () {
	return this.state;
};
AudioPlayer.prototype.getTime = function () {
	return this.time;
};
AudioPlayer.prototype.getUrl = function () {
	return this.url;
};
AudioPlayer.prototype.getVolume = function () {
	return this.volume;
};
AudioPlayer.prototype.getWaiting = function () {
	return this.waiting;
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
AudioPlayer.prototype.setBitRate = function (property) {
	this.bitRate = property;
};
AudioPlayer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AudioPlayer.prototype.setBufferSize = function (property) {
	this.bufferSize = property;
};
AudioPlayer.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
AudioPlayer.prototype.setPaused = function (property) {
	this.paused = property;
};
AudioPlayer.prototype.setTime = function (property) {
	this.time = property;
};
AudioPlayer.prototype.setUrl = function (property) {
	this.url = property;
};
AudioPlayer.prototype.setVolume = function (property) {
	this.volume = property;
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