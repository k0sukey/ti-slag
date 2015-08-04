var crypto = require('crypto');
function Sound(__SLAG__properties) {
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
			'bubbleParent',
			'duration',
			'looping',
			'paused',
			'playing',
			'time',
			'url',
			'volume',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.STATE_BUFFERING) {
		throw new Error('Ti.Media.Sound.STATE_BUFFERING is read only property');
	}
	this.STATE_BUFFERING = 0;
	if (__SLAG__properties.STATE_INITIALIZED) {
		throw new Error('Ti.Media.Sound.STATE_INITIALIZED is read only property');
	}
	this.STATE_INITIALIZED = 0;
	if (__SLAG__properties.STATE_PAUSED) {
		throw new Error('Ti.Media.Sound.STATE_PAUSED is read only property');
	}
	this.STATE_PAUSED = 0;
	if (__SLAG__properties.STATE_PLAYING) {
		throw new Error('Ti.Media.Sound.STATE_PLAYING is read only property');
	}
	this.STATE_PLAYING = 0;
	if (__SLAG__properties.STATE_STARTING) {
		throw new Error('Ti.Media.Sound.STATE_STARTING is read only property');
	}
	this.STATE_STARTING = 0;
	if (__SLAG__properties.STATE_STOPPED) {
		throw new Error('Ti.Media.Sound.STATE_STOPPED is read only property');
	}
	this.STATE_STOPPED = 0;
	if (__SLAG__properties.STATE_STOPPING) {
		throw new Error('Ti.Media.Sound.STATE_STOPPING is read only property');
	}
	this.STATE_STOPPING = 0;
	if (__SLAG__properties.STATE_WAITING_FOR_DATA) {
		throw new Error('Ti.Media.Sound.STATE_WAITING_FOR_DATA is read only property');
	}
	this.STATE_WAITING_FOR_DATA = 0;
	if (__SLAG__properties.STATE_WAITING_FOR_QUEUE) {
		throw new Error('Ti.Media.Sound.STATE_WAITING_FOR_QUEUE is read only property');
	}
	this.STATE_WAITING_FOR_QUEUE = 0;
	this.allowBackground = __SLAG__properties.allowBackground || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.Sound.apiName is read only property');
	}
	this.apiName = 'Ti.Media.Sound';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.duration) {
		throw new Error('Ti.Media.Sound.duration is read only property');
	}
	this.duration = 0;
	this.looping = __SLAG__properties.looping || true;
	this.paused = __SLAG__properties.paused || true;
	if (__SLAG__properties.playing) {
		throw new Error('Ti.Media.Sound.playing is read only property');
	}
	this.playing = true;
	this.time = __SLAG__properties.time || 0;
	this.url = __SLAG__properties.url || '';
	this.volume = __SLAG__properties.volume || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Sound.prototype.addEventListener = function () {
};
Sound.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Sound.prototype.fireEvent = function () {
};
Sound.prototype.getApiName = function () {
	return this.apiName;
};
Sound.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Sound.prototype.getDuration = function () {
	return this.duration;
};
Sound.prototype.getTime = function () {
	return this.time;
};
Sound.prototype.getUrl = function () {
	return this.url;
};
Sound.prototype.getVolume = function () {
	return this.volume;
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
Sound.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Sound.prototype.setLooping = function (property) {
	this.looping = property;
};
Sound.prototype.setPaused = function (property) {
	this.paused = property;
};
Sound.prototype.setTime = function (property) {
	this.time = property;
};
Sound.prototype.setUrl = function (property) {
	this.url = property;
};
Sound.prototype.setVolume = function (property) {
	this.volume = property;
};
Sound.prototype.stop = function () {
};
module.exports = function (properties) {
	return new Sound(properties);
};