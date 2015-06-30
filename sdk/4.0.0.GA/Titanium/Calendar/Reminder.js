function Reminder(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Calendar.Reminder';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.id = properties.id || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.method = properties.method || undefined;
	this.minutes = properties.minutes || undefined;
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
	return this.apiName;
};
Reminder.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Reminder.prototype.getId = function () {
	return this.id;
};
Reminder.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Reminder.prototype.getMethod = function () {
	return this.method;
};
Reminder.prototype.getMinutes = function () {
	return this.minutes;
};
Reminder.prototype.removeEventListener = function () {
};
Reminder.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Reminder.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Reminder(properties);
};