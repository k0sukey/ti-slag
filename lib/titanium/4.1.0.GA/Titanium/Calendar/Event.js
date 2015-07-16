function Event(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Calendar.Event';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.alerts = properties.alerts || [];
	this.allDay = properties.allDay || true;
	this.begin = properties.begin || new Date();
	this.notes = properties.notes || '';
	this.description = properties.description || '';
	this.end = properties.end || new Date();
	this.extendedProperties = properties.extendedProperties || {};
	this.hasAlarm = properties.hasAlarm || true;
	this.id = properties.id || '';
	this.location = properties.location || '';
	this.reminders = properties.reminders || [];
	this.status = properties.status || 0;
	this.availability = properties.availability || 0;
	this.isDetached = properties.isDetached || true;
	this.title = properties.title || '';
	if (properties.recurenceRule) {
		throw new Error('Ti.Calendar.Event.recurenceRule was deprecated, since 3.1.3');
	}
	this.recurenceRules = properties.recurenceRules || [];
	this.visibility = properties.visibility || 0;
	return this;
}
Event.prototype.addEventListener = function () {
};
Event.prototype.removeEventListener = function () {
};
Event.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Event.prototype.fireEvent = function () {
};
Event.prototype.createAlert = function (params) {
	var Alert = require('./Event/Alert');
	return Alert(params);
};
Event.prototype.createReminder = function (params) {
	var Reminder = require('./Event/Reminder');
	return Reminder(params);
};
Event.prototype.getExtendedProperty = function () {
	return '';
};
Event.prototype.setExtendedProperty = function () {
};
Event.prototype.createRecurenceRule = function (params) {
	var RecurenceRule = require('./Event/RecurenceRule');
	return RecurenceRule(params);
};
Event.prototype.save = function () {
	return true;
};
Event.prototype.remove = function () {
	return true;
};
Event.prototype.refresh = function () {
	return true;
};
Event.prototype.addRecurrenceRule = function () {
};
Event.prototype.removeRecurenceRule = function () {
};
Event.prototype.getBubbleParent = function () {
	return true;
};
Event.prototype.setBubbleParent = function () {
};
Event.prototype.getApiName = function () {
	return '';
};
Event.prototype.getLifecycleContainer = function () {
	return {};
};
Event.prototype.setLifecycleContainer = function () {
};
Event.prototype.getAlerts = function () {
	return [];
};
Event.prototype.setAlerts = function () {
};
Event.prototype.getAllDay = function () {
	return true;
};
Event.prototype.setAllDay = function () {
};
Event.prototype.getBegin = function () {
	return new Date();
};
Event.prototype.setBegin = function () {
};
Event.prototype.getNotes = function () {
	return '';
};
Event.prototype.setNotes = function () {
};
Event.prototype.getDescription = function () {
	return '';
};
Event.prototype.getEnd = function () {
	return new Date();
};
Event.prototype.setEnd = function () {
};
Event.prototype.getExtendedProperties = function () {
	return {};
};
Event.prototype.getHasAlarm = function () {
	return true;
};
Event.prototype.getId = function () {
	return '';
};
Event.prototype.getLocation = function () {
	return '';
};
Event.prototype.setLocation = function () {
};
Event.prototype.getReminders = function () {
	return [];
};
Event.prototype.getStatus = function () {
	return 0;
};
Event.prototype.getAvailability = function () {
	return 0;
};
Event.prototype.getIsDetached = function () {
	return true;
};
Event.prototype.getTitle = function () {
	return '';
};
Event.prototype.setTitle = function () {
};
Event.prototype.getRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.getRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.setRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.setRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.getRecurenceRules = function () {
	return [];
};
Event.prototype.setRecurenceRules = function () {
};
Event.prototype.getVisibility = function () {
	return 0;
};
module.exports = function (properties) {
	return new Event(properties);
};