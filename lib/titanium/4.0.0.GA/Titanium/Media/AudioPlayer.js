var crypto = require('crypto');
function AudioPlayer(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'STATE_BUFFERING',
			'STATE_INITIALIZED',
			'STATE_PAUSED',
			'STATE_PLAYING',
			'STATE_STARTING',
			'STATE_STOPPED',
			'STATE_STOPPING',
			'STATE_WAITING_FOR_DATA',
			'STATE_WAITING_FOR_QUEUE',
			'allowBackground',
			'apiName',
			'bitRate',
			'bubbleParent',
			'bufferSize',
			'duration',
			'idle',
			'lifecycleContainer',
			'paused',
			'playing',
			'progress',
			'state',
			'time',
			'url',
			'volume',
			'waiting',
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
	if (__SLAG__properties.STATE_BUFFERING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_BUFFERING is read only property');
	}
	this.STATE_BUFFERING = 0;
	if (__SLAG__properties.STATE_INITIALIZED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_INITIALIZED is read only property');
	}
	this.STATE_INITIALIZED = 0;
	if (__SLAG__properties.STATE_PAUSED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PAUSED is read only property');
	}
	this.STATE_PAUSED = 0;
	if (__SLAG__properties.STATE_PLAYING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PLAYING is read only property');
	}
	this.STATE_PLAYING = 0;
	if (__SLAG__properties.STATE_STARTING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STARTING is read only property');
	}
	this.STATE_STARTING = 0;
	if (__SLAG__properties.STATE_STOPPED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPED is read only property');
	}
	this.STATE_STOPPED = 0;
	if (__SLAG__properties.STATE_STOPPING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPING is read only property');
	}
	this.STATE_STOPPING = 0;
	if (__SLAG__properties.STATE_WAITING_FOR_DATA) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_DATA is read only property');
	}
	this.STATE_WAITING_FOR_DATA = 0;
	if (__SLAG__properties.STATE_WAITING_FOR_QUEUE) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_QUEUE is read only property');
	}
	this.STATE_WAITING_FOR_QUEUE = 0;
	this.allowBackground = __SLAG__properties.allowBackground || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.AudioPlayer.apiName is read only property');
	}
	this.apiName = 'Ti.Media.AudioPlayer';
	this.bitRate = __SLAG__properties.bitRate || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.bufferSize = __SLAG__properties.bufferSize || 0;
	if (__SLAG__properties.duration) {
		throw new Error('Ti.Media.AudioPlayer.duration is read only property');
	}
	this.duration = 0;
	if (__SLAG__properties.idle) {
		throw new Error('Ti.Media.AudioPlayer.idle is read only property');
	}
	this.idle = true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.paused = __SLAG__properties.paused || true;
	if (__SLAG__properties.playing) {
		throw new Error('Ti.Media.AudioPlayer.playing is read only property');
	}
	this.playing = true;
	if (__SLAG__properties.progress) {
		throw new Error('Ti.Media.AudioPlayer.progress is read only property');
	}
	this.progress = 0;
	if (__SLAG__properties.state) {
		throw new Error('Ti.Media.AudioPlayer.state is read only property');
	}
	this.state = 0;
	this.time = __SLAG__properties.time || 0;
	this.url = __SLAG__properties.url || '';
	this.volume = __SLAG__properties.volume || 0;
	if (__SLAG__properties.waiting) {
		throw new Error('Ti.Media.AudioPlayer.waiting is read only property');
	}
	this.waiting = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
AudioPlayer.prototype.addEventListener = function () {
};
AudioPlayer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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