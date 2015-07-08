function Sound(properties) {
	properties = properties || {};
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
	this.apiName = 'Ti.Media.Sound';
	this.bubbleParent = properties.bubbleParent || true;
	this.duration = properties.duration || 0;
	this.looping = properties.looping || true;
	this.paused = properties.paused || true;
	this.playing = properties.playing || true;
	this.time = properties.time || 0;
	this.url = properties.url || '';
	this.volume = properties.volume || 0;
	return this;
}
Sound.prototype.addEventListener = function () {
};
Sound.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Sound.prototype.fireEvent = function () {
};
Sound.prototype.getApiName = function () {
	return '';
};
Sound.prototype.getBubbleParent = function () {
	return true;
};
Sound.prototype.getDuration = function () {
	return 0;
};
Sound.prototype.getTime = function () {
	return 0;
};
Sound.prototype.getUrl = function () {
	return '';
};
Sound.prototype.getVolume = function () {
	return 0;
};
Sound.prototype.isLooping = function () {
	return true;
};
Sound.prototype.isPaused = function () {
	return true;
};
Sound.prototype.isPlaying = function () {
	return true;
};
Sound.prototype.pause = function () {
};
Sound.prototype.play = function () {
};
Sound.prototype.release = function () {
};
Sound.prototype.removeEventListener = function () {
};
Sound.prototype.reset = function () {
};
Sound.prototype.setBubbleParent = function () {
};
Sound.prototype.setLooping = function () {
};
Sound.prototype.setPaused = function () {
};
Sound.prototype.setTime = function () {
};
Sound.prototype.setUrl = function () {
};
Sound.prototype.setVolume = function () {
};
Sound.prototype.stop = function () {
};
module.exports = function (properties) {
	return new Sound(properties);
};