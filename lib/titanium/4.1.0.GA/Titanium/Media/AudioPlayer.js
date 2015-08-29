var crypto = require('crypto');
function AudioPlayer(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
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
			'bitRate',
			'duration',
			'idle',
			'paused',
			'playing',
			'progress',
			'state',
			'url',
			'volume',
			'waiting',
			'bufferSize',
			'time',
			'autoplay',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Media.AudioPlayer.apiName is read only property');
	}
	this.apiName = 'Ti.Media.AudioPlayer';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.STATE_BUFFERING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_BUFFERING is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_BUFFERING = undefined;
	} else {
		this.STATE_BUFFERING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_INITIALIZED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_INITIALIZED is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_INITIALIZED = undefined;
	} else {
		this.STATE_INITIALIZED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_PAUSED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PAUSED is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_PAUSED = undefined;
	} else {
		this.STATE_PAUSED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_PLAYING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PLAYING is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_PLAYING = undefined;
	} else {
		this.STATE_PLAYING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STARTING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STARTING is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STARTING = undefined;
	} else {
		this.STATE_STARTING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STOPPED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPED is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STOPPED = undefined;
	} else {
		this.STATE_STOPPED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STOPPING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPING is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STOPPING = undefined;
	} else {
		this.STATE_STOPPING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_DATA) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_DATA is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_WAITING_FOR_DATA = undefined;
	} else {
		this.STATE_WAITING_FOR_DATA = 0;
	}
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_QUEUE) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_QUEUE is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_WAITING_FOR_QUEUE = undefined;
	} else {
		this.STATE_WAITING_FOR_QUEUE = 0;
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowBackground = undefined;
	} else {
		this.allowBackground = __SLAG_PROPERTIES.allowBackground || true;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bitRate = undefined;
	} else {
		this.bitRate = __SLAG_PROPERTIES.bitRate || 0;
	}
	if (__SLAG_PROPERTIES.duration) {
		throw new Error('Ti.Media.AudioPlayer.duration is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.duration = undefined;
	} else {
		this.duration = 0;
	}
	if (__SLAG_PROPERTIES.idle) {
		throw new Error('Ti.Media.AudioPlayer.idle is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.idle = undefined;
	} else {
		this.idle = true;
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.paused = undefined;
	} else {
		this.paused = __SLAG_PROPERTIES.paused || true;
	}
	if (__SLAG_PROPERTIES.playing) {
		throw new Error('Ti.Media.AudioPlayer.playing is read only property');
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.playing = undefined;
	} else {
		this.playing = true;
	}
	if (__SLAG_PROPERTIES.progress) {
		throw new Error('Ti.Media.AudioPlayer.progress is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.progress = undefined;
	} else {
		this.progress = 0;
	}
	if (__SLAG_PROPERTIES.state) {
		throw new Error('Ti.Media.AudioPlayer.state is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.state = undefined;
	} else {
		this.state = 0;
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.url = undefined;
	} else {
		this.url = __SLAG_PROPERTIES.url || '';
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.volume = undefined;
	} else {
		this.volume = __SLAG_PROPERTIES.volume || 0;
	}
	if (__SLAG_PROPERTIES.waiting) {
		throw new Error('Ti.Media.AudioPlayer.waiting is read only property');
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.waiting = undefined;
	} else {
		this.waiting = true;
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bufferSize = undefined;
	} else {
		this.bufferSize = __SLAG_PROPERTIES.bufferSize || 0;
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.time = undefined;
	} else {
		this.time = __SLAG_PROPERTIES.time || 0;
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autoplay = undefined;
	} else {
		this.autoplay = __SLAG_PROPERTIES.autoplay || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AudioPlayer.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AudioPlayer.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.isPaused = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
AudioPlayer.prototype.isPlaying = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
AudioPlayer.prototype.pause = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.play = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.release = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.start = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.stateDescription = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
AudioPlayer.prototype.stop = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.getPaused = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.paused;
};
AudioPlayer.prototype.setPaused = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paused = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getPlaying = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playing;
};
AudioPlayer.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
AudioPlayer.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
AudioPlayer.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
AudioPlayer.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getAllowBackground = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allowBackground;
};
AudioPlayer.prototype.setAllowBackground = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.allowBackground = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getBitRate = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bitRate;
};
AudioPlayer.prototype.setBitRate = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bitRate = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getDuration = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.duration;
};
AudioPlayer.prototype.getIdle = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.idle;
};
AudioPlayer.prototype.getPaused = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.paused;
};
AudioPlayer.prototype.setPaused = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paused = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getPlaying = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playing;
};
AudioPlayer.prototype.getProgress = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.progress;
};
AudioPlayer.prototype.getState = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.state;
};
AudioPlayer.prototype.getUrl = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
AudioPlayer.prototype.setUrl = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.url = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getVolume = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.volume;
};
AudioPlayer.prototype.setVolume = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.volume = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getWaiting = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.waiting;
};
AudioPlayer.prototype.getBufferSize = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bufferSize;
};
AudioPlayer.prototype.setBufferSize = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bufferSize = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getTime = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.time;
};
AudioPlayer.prototype.setTime = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.time = __SLAG__PROPERTY;
};
AudioPlayer.prototype.getAutoplay = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autoplay;
};
AudioPlayer.prototype.setAutoplay = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autoplay = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new AudioPlayer(properties);
};