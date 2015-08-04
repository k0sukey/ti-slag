var crypto = require('crypto');
function Event(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'alerts',
			'allDay',
			'apiName',
			'begin',
			'bubbleParent',
			'description',
			'end',
			'extendedProperties',
			'hasAlarm',
			'hasExtendedProperties',
			'id',
			'location',
			'reminders',
			'status',
			'title',
			'visibility',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.alerts) {
		throw new Error('Ti.Android.Calendar.Event.alerts is read only property');
	}
	this.alerts = [];
	if (__SLAG__properties.allDay) {
		throw new Error('Ti.Android.Calendar.Event.allDay is read only property');
	}
	this.allDay = true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Calendar.Event.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar.Event';
	if (__SLAG__properties.begin) {
		throw new Error('Ti.Android.Calendar.Event.begin is read only property');
	}
	this.begin = new Date();
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.description) {
		throw new Error('Ti.Android.Calendar.Event.description is read only property');
	}
	this.description = '';
	if (__SLAG__properties.end) {
		throw new Error('Ti.Android.Calendar.Event.end is read only property');
	}
	this.end = new Date();
	if (__SLAG__properties.extendedProperties) {
		throw new Error('Ti.Android.Calendar.Event.extendedProperties is read only property');
	}
	this.extendedProperties = {};
	if (__SLAG__properties.hasAlarm) {
		throw new Error('Ti.Android.Calendar.Event.hasAlarm is read only property');
	}
	this.hasAlarm = true;
	if (__SLAG__properties.hasExtendedProperties) {
		throw new Error('Ti.Android.Calendar.Event.hasExtendedProperties is read only property');
	}
	this.hasExtendedProperties = true;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Android.Calendar.Event.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.location) {
		throw new Error('Ti.Android.Calendar.Event.location is read only property');
	}
	this.location = '';
	if (__SLAG__properties.reminders) {
		throw new Error('Ti.Android.Calendar.Event.reminders is read only property');
	}
	this.reminders = [];
	if (__SLAG__properties.status) {
		throw new Error('Ti.Android.Calendar.Event.status is read only property');
	}
	this.status = 0;
	if (__SLAG__properties.title) {
		throw new Error('Ti.Android.Calendar.Event.title is read only property');
	}
	this.title = '';
	if (__SLAG__properties.visibility) {
		throw new Error('Ti.Android.Calendar.Event.visibility is read only property');
	}
	this.visibility = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Event.prototype.addEventListener = function () {
};
Event.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Event.prototype.createAlert = function (params) {
	var Alert = require('./Event/Alert');
	return Alert(params);
};
Event.prototype.createReminder = function (params) {
	var Reminder = require('./Event/Reminder');
	return Reminder(params);
};
Event.prototype.fireEvent = function () {
};
Event.prototype.getAlerts = function () {
	return this.alerts;
};
Event.prototype.getAllDay = function () {
	return this.allDay;
};
Event.prototype.getApiName = function () {
	return this.apiName;
};
Event.prototype.getBegin = function () {
	return this.begin;
};
Event.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Event.prototype.getDescription = function () {
	return this.description;
};
Event.prototype.getEnd = function () {
	return this.end;
};
Event.prototype.getExtendedProperties = function () {
	return this.extendedProperties;
};
Event.prototype.getExtendedProperty = function () {
	return '';
};
Event.prototype.getHasAlarm = function () {
	return this.hasAlarm;
};
Event.prototype.getHasExtendedProperties = function () {
	return this.hasExtendedProperties;
};
Event.prototype.getId = function () {
	return this.id;
};
Event.prototype.getLocation = function () {
	return this.location;
};
Event.prototype.getReminders = function () {
	return this.reminders;
};
Event.prototype.getStatus = function () {
	return this.status;
};
Event.prototype.getTitle = function () {
	return this.title;
};
Event.prototype.getVisibility = function () {
	return this.visibility;
};
Event.prototype.removeEventListener = function () {
};
Event.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Event.prototype.setExtendedProperty = function () {
};
module.exports = function (properties) {
	return new Event(properties);
};