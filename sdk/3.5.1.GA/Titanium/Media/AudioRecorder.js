function AudioRecorder(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Media.AudioRecorder';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.compression = properties.compression || undefined;
	this.format = properties.format || undefined;
	this.paused = properties.paused || undefined;
	this.recording = properties.recording || undefined;
	this.stopped = properties.stopped || undefined;
	return this;
}
AudioRecorder.prototype.addEventListener = function () {
};
AudioRecorder.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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