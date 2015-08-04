var crypto = require('crypto');
function Event(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'alerts',
			'allDay',
			'begin',
			'notes',
			'description',
			'end',
			'extendedProperties',
			'hasAlarm',
			'id',
			'location',
			'reminders',
			'status',
			'availability',
			'isDetached',
			'title',
			'recurenceRule',
			'recurenceRules',
			'visibility',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Calendar.Event.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.Event';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.alerts = __SLAG__properties.alerts || [];
	this.allDay = __SLAG__properties.allDay || true;
	this.begin = __SLAG__properties.begin || new Date();
	this.notes = __SLAG__properties.notes || '';
	if (__SLAG__properties.description) {
		throw new Error('Ti.Calendar.Event.description is read only property');
	}
	this.description = '';
	this.end = __SLAG__properties.end || new Date();
	if (__SLAG__properties.extendedProperties) {
		throw new Error('Ti.Calendar.Event.extendedProperties is read only property');
	}
	this.extendedProperties = {};
	if (__SLAG__properties.hasAlarm) {
		throw new Error('Ti.Calendar.Event.hasAlarm is read only property');
	}
	this.hasAlarm = true;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Calendar.Event.id is read only property');
	}
	this.id = '';
	this.location = __SLAG__properties.location || '';
	if (__SLAG__properties.reminders) {
		throw new Error('Ti.Calendar.Event.reminders is read only property');
	}
	this.reminders = [];
	if (__SLAG__properties.status) {
		throw new Error('Ti.Calendar.Event.status is read only property');
	}
	this.status = 0;
	if (__SLAG__properties.availability) {
		throw new Error('Ti.Calendar.Event.availability is read only property');
	}
	this.availability = 0;
	if (__SLAG__properties.isDetached) {
		throw new Error('Ti.Calendar.Event.isDetached is read only property');
	}
	this.isDetached = true;
	this.title = __SLAG__properties.title || '';
	if (__SLAG__properties.recurenceRule) {
		throw new Error('Ti.Calendar.Event.recurenceRule was deprecated, since 3.1.3');
	}
	this.recurenceRules = __SLAG__properties.recurenceRules || [];
	if (__SLAG__properties.visibility) {
		throw new Error('Ti.Calendar.Event.visibility is read only property');
	}
	this.visibility = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Event.prototype.addEventListener = function () {
};
Event.prototype.removeEventListener = function () {
};
Event.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
	return this.bubbleParent;
};
Event.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Event.prototype.getApiName = function () {
	return this.apiName;
};
Event.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Event.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Event.prototype.getAlerts = function () {
	return this.alerts;
};
Event.prototype.setAlerts = function (property) {
	this.alerts = property;
};
Event.prototype.getAllDay = function () {
	return this.allDay;
};
Event.prototype.setAllDay = function (property) {
	this.allDay = property;
};
Event.prototype.getBegin = function () {
	return this.begin;
};
Event.prototype.setBegin = function (property) {
	this.begin = property;
};
Event.prototype.getNotes = function () {
	return this.notes;
};
Event.prototype.setNotes = function (property) {
	this.notes = property;
};
Event.prototype.getDescription = function () {
	return this.description;
};
Event.prototype.getEnd = function () {
	return this.end;
};
Event.prototype.setEnd = function (property) {
	this.end = property;
};
Event.prototype.getExtendedProperties = function () {
	return this.extendedProperties;
};
Event.prototype.getHasAlarm = function () {
	return this.hasAlarm;
};
Event.prototype.getId = function () {
	return this.id;
};
Event.prototype.getLocation = function () {
	return this.location;
};
Event.prototype.setLocation = function (property) {
	this.location = property;
};
Event.prototype.getReminders = function () {
	return this.reminders;
};
Event.prototype.getStatus = function () {
	return this.status;
};
Event.prototype.getAvailability = function () {
	return this.availability;
};
Event.prototype.getIsDetached = function () {
	return this.isDetached;
};
Event.prototype.getTitle = function () {
	return this.title;
};
Event.prototype.setTitle = function (property) {
	this.title = property;
};
Event.prototype.getRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.getRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.setRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.setRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.getRecurenceRules = function () {
	return this.recurenceRules;
};
Event.prototype.setRecurenceRules = function (property) {
	this.recurenceRules = property;
};
Event.prototype.getVisibility = function () {
	return this.visibility;
};
module.exports = function (properties) {
	return new Event(properties);
};