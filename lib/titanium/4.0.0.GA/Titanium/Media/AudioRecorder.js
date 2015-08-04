var crypto = require('crypto');
function AudioRecorder(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'compression',
			'format',
			'paused',
			'recording',
			'stopped',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.AudioRecorder.apiName is read only property');
	}
	this.apiName = 'Ti.Media.AudioRecorder';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.compression = __SLAG__properties.compression || 0;
	this.format = __SLAG__properties.format || 0;
	if (__SLAG__properties.paused) {
		throw new Error('Ti.Media.AudioRecorder.paused is read only property');
	}
	this.paused = true;
	if (__SLAG__properties.recording) {
		throw new Error('Ti.Media.AudioRecorder.recording is read only property');
	}
	this.recording = true;
	if (__SLAG__properties.stopped) {
		throw new Error('Ti.Media.AudioRecorder.stopped is read only property');
	}
	this.stopped = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
AudioRecorder.prototype.addEventListener = function () {
};
AudioRecorder.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AudioRecorder.prototype.fireEvent = function () {
};
AudioRecorder.prototype.getApiName = function () {
	return this.apiName;
};
AudioRecorder.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AudioRecorder.prototype.getCompression = function () {
	return this.compression;
};
AudioRecorder.prototype.getFormat = function () {
	return this.format;
};
AudioRecorder.prototype.getPaused = function () {
	return this.paused;
};
AudioRecorder.prototype.getRecording = function () {
	return this.recording;
};
AudioRecorder.prototype.getStopped = function () {
	return this.stopped;
};
AudioRecorder.prototype.pause = function () {
};
AudioRecorder.prototype.removeEventListener = function () {
};
AudioRecorder.prototype.resume = function () {
};
AudioRecorder.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AudioRecorder.prototype.setCompression = function (property) {
	this.compression = property;
};
AudioRecorder.prototype.setFormat = function (property) {
	this.format = property;
};
AudioRecorder.prototype.start = function () {
};
AudioRecorder.prototype.stop = function () {
	return {};
};
module.exports = function (properties) {
	return new AudioRecorder(properties);
};