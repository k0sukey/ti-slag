var crypto = require('crypto');
function Sound(__SLAG_PROPERTIES) {
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
			'duration',
			'looping',
			'paused',
			'playing',
			'time',
			'url',
			'volume',
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
		throw new Error('Ti.Media.Sound.apiName is read only property');
	}
	this.apiName = 'Ti.Media.Sound';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.STATE_BUFFERING) {
		throw new Error('Ti.Media.Sound.STATE_BUFFERING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_BUFFERING = undefined;
	} else {
		this.STATE_BUFFERING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_INITIALIZED) {
		throw new Error('Ti.Media.Sound.STATE_INITIALIZED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_INITIALIZED = undefined;
	} else {
		this.STATE_INITIALIZED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_PAUSED) {
		throw new Error('Ti.Media.Sound.STATE_PAUSED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_PAUSED = undefined;
	} else {
		this.STATE_PAUSED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_PLAYING) {
		throw new Error('Ti.Media.Sound.STATE_PLAYING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_PLAYING = undefined;
	} else {
		this.STATE_PLAYING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STARTING) {
		throw new Error('Ti.Media.Sound.STATE_STARTING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STARTING = undefined;
	} else {
		this.STATE_STARTING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STOPPED) {
		throw new Error('Ti.Media.Sound.STATE_STOPPED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STOPPED = undefined;
	} else {
		this.STATE_STOPPED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_STOPPING) {
		throw new Error('Ti.Media.Sound.STATE_STOPPING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_STOPPING = undefined;
	} else {
		this.STATE_STOPPING = 0;
	}
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_DATA) {
		throw new Error('Ti.Media.Sound.STATE_WAITING_FOR_DATA is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_WAITING_FOR_DATA = undefined;
	} else {
		this.STATE_WAITING_FOR_DATA = 0;
	}
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_QUEUE) {
		throw new Error('Ti.Media.Sound.STATE_WAITING_FOR_QUEUE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_WAITING_FOR_QUEUE = undefined;
	} else {
		this.STATE_WAITING_FOR_QUEUE = 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowBackground = undefined;
	} else {
		this.allowBackground = __SLAG_PROPERTIES.allowBackground || true;
	}
	if (__SLAG_PROPERTIES.duration) {
		throw new Error('Ti.Media.Sound.duration is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.duration = undefined;
	} else {
		this.duration = 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.looping = undefined;
	} else {
		this.looping = __SLAG_PROPERTIES.looping || true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.paused = undefined;
	} else {
		this.paused = __SLAG_PROPERTIES.paused || true;
	}
	if (__SLAG_PROPERTIES.playing) {
		throw new Error('Ti.Media.Sound.playing is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.playing = undefined;
	} else {
		this.playing = true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.time = undefined;
	} else {
		this.time = __SLAG_PROPERTIES.time || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.url = undefined;
	} else {
		this.url = __SLAG_PROPERTIES.url || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.volume = undefined;
	} else {
		this.volume = __SLAG_PROPERTIES.volume || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Sound.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Sound.prototype.isLooping = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Sound.prototype.isPaused = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Sound.prototype.isPlaying = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Sound.prototype.pause = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.play = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.release = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.reset = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.setLooping = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.looping = __SLAG__PROPERTY;
};
Sound.prototype.setPaused = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paused = __SLAG__PROPERTY;
};
Sound.prototype.stop = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Sound.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Sound.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Sound.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Sound.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Sound.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Sound.prototype.getDuration = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.duration;
};
Sound.prototype.getTime = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.time;
};
Sound.prototype.setTime = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.time = __SLAG__PROPERTY;
};
Sound.prototype.getUrl = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
Sound.prototype.setUrl = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.url = __SLAG__PROPERTY;
};
Sound.prototype.getVolume = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.volume;
};
Sound.prototype.setVolume = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.volume = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Sound(properties);
};