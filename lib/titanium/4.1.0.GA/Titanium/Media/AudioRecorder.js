function AudioRecorder(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Media.AudioRecorder';
	this.compression = properties.compression || 0;
	this.format = properties.format || 0;
	this.paused = properties.paused || true;
	this.recording = properties.recording || true;
	this.stopped = properties.stopped || true;
	return this;
}
AudioRecorder.prototype.addEventListener = function () {
};
AudioRecorder.prototype.removeEventListener = function () {
};
AudioRecorder.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AudioRecorder.prototype.fireEvent = function () {
};
AudioRecorder.prototype.pause = function () {
};
AudioRecorder.prototype.resume = function () {
};
AudioRecorder.prototype.start = function () {
};
AudioRecorder.prototype.stop = function () {
	return {};
};
AudioRecorder.prototype.getBubbleParent = function () {
	return true;
};
AudioRecorder.prototype.setBubbleParent = function () {
};
AudioRecorder.prototype.getApiName = function () {
	return '';
};
AudioRecorder.prototype.getCompression = function () {
	return 0;
};
AudioRecorder.prototype.setCompression = function () {
};
AudioRecorder.prototype.getFormat = function () {
	return 0;
};
AudioRecorder.prototype.setFormat = function () {
};
AudioRecorder.prototype.getPaused = function () {
	return true;
};
AudioRecorder.prototype.getRecording = function () {
	return true;
};
AudioRecorder.prototype.getStopped = function () {
	return true;
};
module.exports = function (properties) {
	return new AudioRecorder(properties);
};