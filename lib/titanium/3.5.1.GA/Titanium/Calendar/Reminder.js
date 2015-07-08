function Reminder(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Calendar.Reminder';
	this.bubbleParent = properties.bubbleParent || true;
	this.id = properties.id || '';
	this.method = properties.method || 0;
	this.minutes = properties.minutes || 0;
	return this;
}
Reminder.prototype.addEventListener = function () {
};
Reminder.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Reminder.prototype.fireEvent = function () {
};
Reminder.prototype.getApiName = function () {
	return '';
};
Reminder.prototype.getBubbleParent = function () {
	return true;
};
Reminder.prototype.getId = function () {
	return '';
};
Reminder.prototype.getMethod = function () {
	return 0;
};
Reminder.prototype.getMinutes = function () {
	return 0;
};
Reminder.prototype.removeEventListener = function () {
};
Reminder.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Reminder(properties);
};