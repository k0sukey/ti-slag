var crypto = require('crypto');
function Event(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.alerts) {
		throw new Error('Ti.Android.Calendar.Event.alerts is read only property');
	}
	this.alerts = [];
	if (__SLAG_PROPERTIES.allDay) {
		throw new Error('Ti.Android.Calendar.Event.allDay is read only property');
	}
	this.allDay = true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.Calendar.Event.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar.Event';
	if (__SLAG_PROPERTIES.begin) {
		throw new Error('Ti.Android.Calendar.Event.begin is read only property');
	}
	this.begin = new Date();
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.description) {
		throw new Error('Ti.Android.Calendar.Event.description is read only property');
	}
	this.description = '';
	if (__SLAG_PROPERTIES.end) {
		throw new Error('Ti.Android.Calendar.Event.end is read only property');
	}
	this.end = new Date();
	if (__SLAG_PROPERTIES.extendedProperties) {
		throw new Error('Ti.Android.Calendar.Event.extendedProperties is read only property');
	}
	this.extendedProperties = {};
	if (__SLAG_PROPERTIES.hasAlarm) {
		throw new Error('Ti.Android.Calendar.Event.hasAlarm is read only property');
	}
	this.hasAlarm = true;
	if (__SLAG_PROPERTIES.hasExtendedProperties) {
		throw new Error('Ti.Android.Calendar.Event.hasExtendedProperties is read only property');
	}
	this.hasExtendedProperties = true;
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Android.Calendar.Event.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.location) {
		throw new Error('Ti.Android.Calendar.Event.location is read only property');
	}
	this.location = '';
	if (__SLAG_PROPERTIES.reminders) {
		throw new Error('Ti.Android.Calendar.Event.reminders is read only property');
	}
	this.reminders = [];
	if (__SLAG_PROPERTIES.status) {
		throw new Error('Ti.Android.Calendar.Event.status is read only property');
	}
	this.status = 0;
	if (__SLAG_PROPERTIES.title) {
		throw new Error('Ti.Android.Calendar.Event.title is read only property');
	}
	this.title = '';
	if (__SLAG_PROPERTIES.visibility) {
		throw new Error('Ti.Android.Calendar.Event.visibility is read only property');
	}
	this.visibility = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Event.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Event.prototype.createAlert = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Alert = require('./Event/Alert');
	return Alert(__SLAG_PROPERTY);
};
Event.prototype.createReminder = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Reminder = require('./Event/Reminder');
	return Reminder(__SLAG_PROPERTY);
};
Event.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.getAlerts = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.alerts;
};
Event.prototype.getAllDay = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allDay;
};
Event.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Event.prototype.getBegin = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.begin;
};
Event.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasAlarm;
};
Event.prototype.getHasExtendedProperties = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasExtendedProperties;
};
Event.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Event.prototype.getLocation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.location;
};
Event.prototype.getReminders = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.reminders;
};
Event.prototype.getStatus = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.status;
};
Event.prototype.getTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
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
Event.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Event.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Event.prototype.setExtendedProperty = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new Event(properties);
};