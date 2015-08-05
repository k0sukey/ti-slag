var crypto = require('crypto');
function Calendar(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'AUTHORIZATION_AUTHORIZED',
			'AUTHORIZATION_DENIED',
			'AUTHORIZATION_RESTRICTED',
			'AUTHORIZATION_UNKNOWN',
			'AVAILABILITY_BUSY',
			'AVAILABILITY_FREE',
			'AVAILABILITY_NOTSUPPORTED',
			'AVAILABILITY_TENTATIVE',
			'AVAILABILITY_UNAVAILABLE',
			'METHOD_ALERT',
			'METHOD_DEFAULT',
			'METHOD_EMAIL',
			'METHOD_SMS',
			'RECURRENCEFREQUENCY_DAILY',
			'RECURRENCEFREQUENCY_MONTHLY',
			'RECURRENCEFREQUENCY_WEEKLY',
			'RECURRENCEFREQUENCY_YEARLY',
			'SPAN_FUTUREEVENTS',
			'SPAN_THISEVENT',
			'STATE_DISMISSED',
			'STATE_FIRED',
			'STATE_SCHEDULED',
			'STATUS_CANCELED',
			'STATUS_CONFIRMED',
			'STATUS_NONE',
			'STATUS_TENTATIVE',
			'VISIBILITY_CONFIDENTIAL',
			'VISIBILITY_DEFAULT',
			'VISIBILITY_PRIVATE',
			'VISIBILITY_PUBLIC',
			'allAlerts',
			'allCalendars',
			'allEditableCalendars',
			'apiName',
			'bubbleParent',
			'defaultCalendar',
			'eventsAuthorization',
			'lifecycleContainer',
			'selectableCalendars',
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
	if (__SLAG_PROPERTIES.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Calendar.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.AVAILABILITY_BUSY) {
		throw new Error('Ti.Calendar.AVAILABILITY_BUSY is read only property');
	}
	this.AVAILABILITY_BUSY = 0;
	if (__SLAG_PROPERTIES.AVAILABILITY_FREE) {
		throw new Error('Ti.Calendar.AVAILABILITY_FREE is read only property');
	}
	this.AVAILABILITY_FREE = 0;
	if (__SLAG_PROPERTIES.AVAILABILITY_NOTSUPPORTED) {
		throw new Error('Ti.Calendar.AVAILABILITY_NOTSUPPORTED is read only property');
	}
	this.AVAILABILITY_NOTSUPPORTED = 0;
	if (__SLAG_PROPERTIES.AVAILABILITY_TENTATIVE) {
		throw new Error('Ti.Calendar.AVAILABILITY_TENTATIVE is read only property');
	}
	this.AVAILABILITY_TENTATIVE = 0;
	if (__SLAG_PROPERTIES.AVAILABILITY_UNAVAILABLE) {
		throw new Error('Ti.Calendar.AVAILABILITY_UNAVAILABLE is read only property');
	}
	this.AVAILABILITY_UNAVAILABLE = 0;
	if (__SLAG_PROPERTIES.METHOD_ALERT) {
		throw new Error('Ti.Calendar.METHOD_ALERT is read only property');
	}
	this.METHOD_ALERT = 0;
	if (__SLAG_PROPERTIES.METHOD_DEFAULT) {
		throw new Error('Ti.Calendar.METHOD_DEFAULT is read only property');
	}
	this.METHOD_DEFAULT = 0;
	if (__SLAG_PROPERTIES.METHOD_EMAIL) {
		throw new Error('Ti.Calendar.METHOD_EMAIL is read only property');
	}
	this.METHOD_EMAIL = 0;
	if (__SLAG_PROPERTIES.METHOD_SMS) {
		throw new Error('Ti.Calendar.METHOD_SMS is read only property');
	}
	this.METHOD_SMS = 0;
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_DAILY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_DAILY is read only property');
	}
	this.RECURRENCEFREQUENCY_DAILY = 0;
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_MONTHLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY is read only property');
	}
	this.RECURRENCEFREQUENCY_MONTHLY = 0;
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_WEEKLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_WEEKLY is read only property');
	}
	this.RECURRENCEFREQUENCY_WEEKLY = 0;
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_YEARLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_YEARLY is read only property');
	}
	this.RECURRENCEFREQUENCY_YEARLY = 0;
	if (__SLAG_PROPERTIES.SPAN_FUTUREEVENTS) {
		throw new Error('Ti.Calendar.SPAN_FUTUREEVENTS is read only property');
	}
	this.SPAN_FUTUREEVENTS = 0;
	if (__SLAG_PROPERTIES.SPAN_THISEVENT) {
		throw new Error('Ti.Calendar.SPAN_THISEVENT is read only property');
	}
	this.SPAN_THISEVENT = 0;
	if (__SLAG_PROPERTIES.STATE_DISMISSED) {
		throw new Error('Ti.Calendar.STATE_DISMISSED is read only property');
	}
	this.STATE_DISMISSED = 0;
	if (__SLAG_PROPERTIES.STATE_FIRED) {
		throw new Error('Ti.Calendar.STATE_FIRED is read only property');
	}
	this.STATE_FIRED = 0;
	if (__SLAG_PROPERTIES.STATE_SCHEDULED) {
		throw new Error('Ti.Calendar.STATE_SCHEDULED is read only property');
	}
	this.STATE_SCHEDULED = 0;
	if (__SLAG_PROPERTIES.STATUS_CANCELED) {
		throw new Error('Ti.Calendar.STATUS_CANCELED is read only property');
	}
	this.STATUS_CANCELED = 0;
	if (__SLAG_PROPERTIES.STATUS_CONFIRMED) {
		throw new Error('Ti.Calendar.STATUS_CONFIRMED is read only property');
	}
	this.STATUS_CONFIRMED = 0;
	if (__SLAG_PROPERTIES.STATUS_NONE) {
		throw new Error('Ti.Calendar.STATUS_NONE is read only property');
	}
	this.STATUS_NONE = 0;
	if (__SLAG_PROPERTIES.STATUS_TENTATIVE) {
		throw new Error('Ti.Calendar.STATUS_TENTATIVE is read only property');
	}
	this.STATUS_TENTATIVE = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_CONFIDENTIAL) {
		throw new Error('Ti.Calendar.VISIBILITY_CONFIDENTIAL is read only property');
	}
	this.VISIBILITY_CONFIDENTIAL = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_DEFAULT) {
		throw new Error('Ti.Calendar.VISIBILITY_DEFAULT is read only property');
	}
	this.VISIBILITY_DEFAULT = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Calendar.VISIBILITY_PRIVATE is read only property');
	}
	this.VISIBILITY_PRIVATE = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Calendar.VISIBILITY_PUBLIC is read only property');
	}
	this.VISIBILITY_PUBLIC = 0;
	if (__SLAG_PROPERTIES.allAlerts) {
		throw new Error('Ti.Calendar.allAlerts is read only property');
	}
	this.allAlerts = [];
	if (__SLAG_PROPERTIES.allCalendars) {
		throw new Error('Ti.Calendar.allCalendars is read only property');
	}
	this.allCalendars = [];
	if (__SLAG_PROPERTIES.allEditableCalendars) {
		throw new Error('Ti.Calendar.allEditableCalendars is read only property');
	}
	this.allEditableCalendars = [];
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.defaultCalendar) {
		throw new Error('Ti.Calendar.defaultCalendar is read only property');
	}
	this.defaultCalendar = {};
	if (__SLAG_PROPERTIES.eventsAuthorization) {
		throw new Error('Ti.Calendar.eventsAuthorization is read only property');
	}
	this.eventsAuthorization = 0;
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.selectableCalendars) {
		throw new Error('Ti.Calendar.selectableCalendars is read only property');
	}
	this.selectableCalendars = [];
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Calendar.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Calendar.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.getAllAlerts = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allAlerts;
};
Calendar.prototype.getAllCalendars = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allCalendars;
};
Calendar.prototype.getAllEditableCalendars = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allEditableCalendars;
};
Calendar.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Calendar.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Calendar.prototype.getCalendarById = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Calendar.prototype.getDefaultCalendar = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.defaultCalendar;
};
Calendar.prototype.getEventsAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.eventsAuthorization;
};
Calendar.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Calendar.prototype.getSelectableCalendars = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectableCalendars;
};
Calendar.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.requestEventsAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Calendar.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Calendar(properties);
};