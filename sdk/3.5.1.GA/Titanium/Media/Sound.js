function Sound(properties) {
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
	this.apiName = 'Titanium.Media.Sound';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.duration = properties.duration || undefined;
	this.looping = properties.looping || undefined;
	this.paused = properties.paused || undefined;
	this.playing = properties.playing || undefined;
	this.time = properties.time || undefined;
	this.url = properties.url || undefined;
	this.volume = properties.volume || undefined;

	return this;
}

Sound.prototype.addEventListener = function(){};

Sound.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Sound.prototype.fireEvent = function(){};

Sound.prototype.getApiName = function(){ return this.apiName; };

Sound.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Sound.prototype.getDuration = function(){ return this.duration; };

Sound.prototype.getTime = function(){ return this.time; };

Sound.prototype.getUrl = function(){ return this.url; };

Sound.prototype.getVolume = function(){ return this.volume; };

Sound.prototype.isLooping = function(){ return true; };

Sound.prototype.isPaused = function(){ return true; };

Sound.prototype.isPlaying = function(){ return true; };

Sound.prototype.pause = function(){};

Sound.prototype.play = function(){};

Sound.prototype.release = function(){};

Sound.prototype.removeEventListener = function(){};

Sound.prototype.reset = function(){};

Sound.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Sound.prototype.setLooping = function(property){ this.looping = property; };

Sound.prototype.setPaused = function(property){ this.paused = property; };

Sound.prototype.setTime = function(property){ this.time = property; };

Sound.prototype.setUrl = function(property){ this.url = property; };

Sound.prototype.setVolume = function(property){ this.volume = property; };

Sound.prototype.stop = function(){};

module.exports = function(properties){ return new Sound(properties); };