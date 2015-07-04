function Alert(properties) {
	properties = properties || {};
	this.absoluteDate = properties.absoluteDate || undefined;
	this.alarmTime = properties.alarmTime || undefined;
	this.apiName = 'Ti.Calendar.Alert';
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.end = properties.end || undefined;
	this.eventId = properties.eventId || undefined;
	this.id = properties.id || undefined;
	this.minutes = properties.minutes || undefined;
	this.relativeOffset = properties.relativeOffset || undefined;
	this.state = properties.state || undefined;
	return this;
}
Alert.prototype.addEventListener = function () {
};
Alert.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Alert.prototype.fireEvent = function () {
};
Alert.prototype.getApiName = function () {
	return '';
};
Alert.prototype.getBubbleParent = function () {
	return true;
};
Alert.prototype.getEventId = function () {
	return 0;
};
Alert.prototype.getId = function () {
	return '';
};
Alert.prototype.getMinutes = function () {
	return 0;
};
Alert.prototype.getRelativeOffset = function () {
	return 0;
};
Alert.prototype.getState = function () {
	return 0;
};
Alert.prototype.removeEventListener = function () {
};
Alert.prototype.setAbsoluteDate = function () {
};
Alert.prototype.setBubbleParent = function () {
};
Alert.prototype.setRelativeOffset = function () {
};
module.exports = function (properties) {
	return new Alert(properties);
};