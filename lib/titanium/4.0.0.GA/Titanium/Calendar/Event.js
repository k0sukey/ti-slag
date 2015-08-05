var crypto = require('crypto');
function Event(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'alerts',
			'allDay',
			'apiName',
			'availability',
			'begin',
			'bubbleParent',
			'description',
			'end',
			'extendedProperties',
			'hasAlarm',
			'id',
			'isDetached',
			'lifecycleContainer',
			'location',
			'notes',
			'recurenceRule',
			'recurenceRules',
			'reminders',
			'status',
			'title',
			'visibility',
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
	this.alerts = __SLAG_PROPERTIES.alerts || [];
	this.allDay = __SLAG_PROPERTIES.allDay || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Calendar.Event.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.Event';
	if (__SLAG_PROPERTIES.availability) {
		throw new Error('Ti.Calendar.Event.availability is read only property');
	}
	this.availability = 0;
	this.begin = __SLAG_PROPERTIES.begin || new Date();
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.description) {
		throw new Error('Ti.Calendar.Event.description is read only property');
	}
	this.description = '';
	this.end = __SLAG_PROPERTIES.end || new Date();
	if (__SLAG_PROPERTIES.extendedProperties) {
		throw new Error('Ti.Calendar.Event.extendedProperties is read only property');
	}
	this.extendedProperties = {};
	if (__SLAG_PROPERTIES.hasAlarm) {
		throw new Error('Ti.Calendar.Event.hasAlarm is read only property');
	}
	this.hasAlarm = true;
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Calendar.Event.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.isDetached) {
		throw new Error('Ti.Calendar.Event.isDetached is read only property');
	}
	this.isDetached = true;
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.location = __SLAG_PROPERTIES.location || '';
	this.notes = __SLAG_PROPERTIES.notes || '';
	if (__SLAG_PROPERTIES.recurenceRule) {
		throw new Error('Ti.Calendar.Event.recurenceRule was deprecated, since 3.1.3');
	}
	this.recurenceRules = __SLAG_PROPERTIES.recurenceRules || [];
	if (__SLAG_PROPERTIES.reminders) {
		throw new Error('Ti.Calendar.Event.reminders is read only property');
	}
	this.reminders = [];
	if (__SLAG_PROPERTIES.status) {
		throw new Error('Ti.Calendar.Event.status is read only property');
	}
	this.status = 0;
	this.title = __SLAG_PROPERTIES.title || '';
	if (__SLAG_PROPERTIES.visibility) {
		throw new Error('Ti.Calendar.Event.visibility is read only property');
	}
	this.visibility = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Event.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.addRecurrenceRule = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Event.prototype.createAlert = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Alert = require('./Event/Alert');
	return Alert(__SLAG_PROPERTY);
};
Event.prototype.createRecurenceRule = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var RecurenceRule = require('./Event/RecurenceRule');
	return RecurenceRule(__SLAG_PROPERTY);
};
Event.prototype.createReminder = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Reminder = require('./Event/Reminder');
	return Reminder(__SLAG_PROPERTY);
};
Event.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.getAlerts = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.alerts;
};
Event.prototype.getAllDay = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allDay;
};
Event.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Event.prototype.getAvailability = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availability;
};
Event.prototype.getBegin = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.begin;
};
Event.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Event.prototype.getDescription = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.description;
};
Event.prototype.getEnd = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.end;
};
Event.prototype.getExtendedProperties = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.extendedProperties;
};
Event.prototype.getExtendedProperty = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Event.prototype.getHasAlarm = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasAlarm;
};
Event.prototype.getId = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Event.prototype.getIsDetached = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isDetached;
};
Event.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Event.prototype.getLocation = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.location;
};
Event.prototype.getNotes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.notes;
};
Event.prototype.getRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.getRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.getRecurenceRules = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recurenceRules;
};
Event.prototype.getReminders = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.reminders;
};
Event.prototype.getStatus = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.status;
};
Event.prototype.getTitle = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
Event.prototype.getVisibility = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visibility;
};
Event.prototype.refresh = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Event.prototype.remove = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Event.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.removeRecurenceRule = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.save = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Event.prototype.setAlerts = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.alerts = __SLAG__PROPERTY;
};
Event.prototype.setAllDay = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.allDay = __SLAG__PROPERTY;
};
Event.prototype.setBegin = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.begin = __SLAG__PROPERTY;
};
Event.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Event.prototype.setEnd = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.end = __SLAG__PROPERTY;
};
Event.prototype.setExtendedProperty = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Event.prototype.setLocation = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.location = __SLAG__PROPERTY;
};
Event.prototype.setNotes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.notes = __SLAG__PROPERTY;
};
Event.prototype.setRecurenceRule = function () {
	throw new Error('Ti.Calendar.Event.setRecurenceRule was deprecated, since 3.1.3');
};
Event.prototype.setRecurenceRules = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.recurenceRules = __SLAG__PROPERTY;
};
Event.prototype.setTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Event(properties);
};