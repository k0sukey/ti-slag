function Alert(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Calendar.Alert';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.absoluteDate = properties.absoluteDate || new Date();
	this.relativeOffset = properties.relativeOffset || 0;
	this.alarmTime = properties.alarmTime || new Date();
	this.begin = properties.begin || new Date();
	this.end = properties.end || new Date();
	this.eventId = properties.eventId || 0;
	this.id = properties.id || '';
	this.minutes = properties.minutes || 0;
	this.state = properties.state || 0;
	return this;
}
Alert.prototype.addEventListener = function () {
};
Alert.prototype.removeEventListener = function () {
};
Alert.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Alert.prototype.fireEvent = function () {
};
Alert.prototype.getBubbleParent = function () {
	return true;
};
Alert.prototype.setBubbleParent = function () {
};
Alert.prototype.getApiName = function () {
	return '';
};
Alert.prototype.getLifecycleContainer = function () {
	return {};
};
Alert.prototype.setLifecycleContainer = function () {
};
Alert.prototype.getAbsoluteDate = function () {
	return new Date();
};
Alert.prototype.setAbsoluteDate = function () {
};
Alert.prototype.getRelativeOffset = function () {
	return 0;
};
Alert.prototype.setRelativeOffset = function () {
};
Alert.prototype.getAlarmTime = function () {
	return new Date();
};
Alert.prototype.getBegin = function () {
	return new Date();
};
Alert.prototype.getEnd = function () {
	return new Date();
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
Alert.prototype.getState = function () {
	return 0;
};
module.exports = function (properties) {
	return new Alert(properties);
};