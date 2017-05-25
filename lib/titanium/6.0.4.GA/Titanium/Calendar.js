var crypto = require('crypto');
function Calendar(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'METHOD_ALERT',
			'METHOD_DEFAULT',
			'METHOD_EMAIL',
			'METHOD_SMS',
			'STATE_DISMISSED',
			'STATE_FIRED',
			'STATE_SCHEDULED',
			'STATUS_NONE',
			'STATUS_CANCELLED',
			'STATUS_CANCELED',
			'STATUS_CONFIRMED',
			'STATUS_TENTATIVE',
			'AVAILABILITY_NOTSUPPORTED',
			'AVAILABILITY_BUSY',
			'AVAILABILITY_FREE',
			'AVAILABILITY_TENTATIVE',
			'AVAILABILITY_UNAVAILABLE',
			'AUTHORIZATION_AUTHORIZED',
			'AUTHORIZATION_DENIED',
			'AUTHORIZATION_RESTRICTED',
			'AUTHORIZATION_UNKNOWN',
			'SPAN_THISEVENT',
			'SPAN_FUTUREEVENTS',
			'RECURRENCEFREQUENCY_DAILY',
			'RECURRENCEFREQUENCY_WEEKLY',
			'RECURRENCEFREQUENCY_MONTHLY',
			'RECURRENCEFREQUENCY_YEARLY',
			'VISIBILITY_CONFIDENTIAL',
			'VISIBILITY_DEFAULT',
			'VISIBILITY_PRIVATE',
			'VISIBILITY_PUBLIC',
			'ATTENDEE_STATUS_UNKNOWN',
			'ATTENDEE_STATUS_PENDING',
			'ATTENDEE_STATUS_ACCEPTED',
			'ATTENDEE_STATUS_DECLINED',
			'ATTENDEE_STATUS_TENTATIVE',
			'ATTENDEE_STATUS_DELEGATED',
			'ATTENDEE_STATUS_IN_PROCESS',
			'ATTENDEE_ROLE_UNKNOWN',
			'ATTENDEE_ROLE_OPTIONAL',
			'ATTENDEE_ROLE_REQUIRED',
			'ATTENDEE_ROLE_CHAIR',
			'ATTENDEE_ROLE_NON_PARTICIPANT',
			'ATTENDEE_TYPE_UNKNOWN',
			'ATTENDEE_TYPE_PERSON',
			'ATTENDEE_TYPE_ROOM',
			'ATTENDEE_TYPE_RESOURCE',
			'ATTENDEE_TYPE_GROUP',
			'eventsAuthorization',
			'calendarAuthorization',
			'allAlerts',
			'allCalendars',
			'allEditableCalendars',
			'selectableCalendars',
			'defaultCalendar',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.METHOD_ALERT) {
		throw new Error('Ti.Calendar.METHOD_ALERT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.METHOD_ALERT = undefined;
	} else {
		this.METHOD_ALERT = 0;
	}
	if (__SLAG_PROPERTIES.METHOD_DEFAULT) {
		throw new Error('Ti.Calendar.METHOD_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.METHOD_DEFAULT = undefined;
	} else {
		this.METHOD_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.METHOD_EMAIL) {
		throw new Error('Ti.Calendar.METHOD_EMAIL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.METHOD_EMAIL = undefined;
	} else {
		this.METHOD_EMAIL = 0;
	}
	if (__SLAG_PROPERTIES.METHOD_SMS) {
		throw new Error('Ti.Calendar.METHOD_SMS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.METHOD_SMS = undefined;
	} else {
		this.METHOD_SMS = 0;
	}
	if (__SLAG_PROPERTIES.STATE_DISMISSED) {
		throw new Error('Ti.Calendar.STATE_DISMISSED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_DISMISSED = undefined;
	} else {
		this.STATE_DISMISSED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_FIRED) {
		throw new Error('Ti.Calendar.STATE_FIRED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_FIRED = undefined;
	} else {
		this.STATE_FIRED = 0;
	}
	if (__SLAG_PROPERTIES.STATE_SCHEDULED) {
		throw new Error('Ti.Calendar.STATE_SCHEDULED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATE_SCHEDULED = undefined;
	} else {
		this.STATE_SCHEDULED = 0;
	}
	if (__SLAG_PROPERTIES.STATUS_NONE) {
		throw new Error('Ti.Calendar.STATUS_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATUS_NONE = undefined;
	} else {
		this.STATUS_NONE = 0;
	}
	if (__SLAG_PROPERTIES.STATUS_CANCELLED) {
		throw new Error('Ti.Calendar.STATUS_CANCELLED was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.STATUS_CANCELED) {
		throw new Error('Ti.Calendar.STATUS_CANCELED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATUS_CANCELED = undefined;
	} else {
		this.STATUS_CANCELED = 0;
	}
	if (__SLAG_PROPERTIES.STATUS_CONFIRMED) {
		throw new Error('Ti.Calendar.STATUS_CONFIRMED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATUS_CONFIRMED = undefined;
	} else {
		this.STATUS_CONFIRMED = 0;
	}
	if (__SLAG_PROPERTIES.STATUS_TENTATIVE) {
		throw new Error('Ti.Calendar.STATUS_TENTATIVE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STATUS_TENTATIVE = undefined;
	} else {
		this.STATUS_TENTATIVE = 0;
	}
	if (__SLAG_PROPERTIES.AVAILABILITY_NOTSUPPORTED) {
		throw new Error('Ti.Calendar.AVAILABILITY_NOTSUPPORTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AVAILABILITY_NOTSUPPORTED = undefined;
	} else {
		this.AVAILABILITY_NOTSUPPORTED = 0;
	}
	if (__SLAG_PROPERTIES.AVAILABILITY_BUSY) {
		throw new Error('Ti.Calendar.AVAILABILITY_BUSY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AVAILABILITY_BUSY = undefined;
	} else {
		this.AVAILABILITY_BUSY = 0;
	}
	if (__SLAG_PROPERTIES.AVAILABILITY_FREE) {
		throw new Error('Ti.Calendar.AVAILABILITY_FREE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AVAILABILITY_FREE = undefined;
	} else {
		this.AVAILABILITY_FREE = 0;
	}
	if (__SLAG_PROPERTIES.AVAILABILITY_TENTATIVE) {
		throw new Error('Ti.Calendar.AVAILABILITY_TENTATIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AVAILABILITY_TENTATIVE = undefined;
	} else {
		this.AVAILABILITY_TENTATIVE = 0;
	}
	if (__SLAG_PROPERTIES.AVAILABILITY_UNAVAILABLE) {
		throw new Error('Ti.Calendar.AVAILABILITY_UNAVAILABLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AVAILABILITY_UNAVAILABLE = undefined;
	} else {
		this.AVAILABILITY_UNAVAILABLE = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_AUTHORIZED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_AUTHORIZED = undefined;
	} else {
		this.AUTHORIZATION_AUTHORIZED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_DENIED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_DENIED = undefined;
	} else {
		this.AUTHORIZATION_DENIED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_RESTRICTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_RESTRICTED = undefined;
	} else {
		this.AUTHORIZATION_RESTRICTED = 0;
	}
	if (__SLAG_PROPERTIES.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Calendar.AUTHORIZATION_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTHORIZATION_UNKNOWN = undefined;
	} else {
		this.AUTHORIZATION_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.SPAN_THISEVENT) {
		throw new Error('Ti.Calendar.SPAN_THISEVENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SPAN_THISEVENT = undefined;
	} else {
		this.SPAN_THISEVENT = 0;
	}
	if (__SLAG_PROPERTIES.SPAN_FUTUREEVENTS) {
		throw new Error('Ti.Calendar.SPAN_FUTUREEVENTS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SPAN_FUTUREEVENTS = undefined;
	} else {
		this.SPAN_FUTUREEVENTS = 0;
	}
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_DAILY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_DAILY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RECURRENCEFREQUENCY_DAILY = undefined;
	} else {
		this.RECURRENCEFREQUENCY_DAILY = 0;
	}
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_WEEKLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_WEEKLY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RECURRENCEFREQUENCY_WEEKLY = undefined;
	} else {
		this.RECURRENCEFREQUENCY_WEEKLY = 0;
	}
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_MONTHLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RECURRENCEFREQUENCY_MONTHLY = undefined;
	} else {
		this.RECURRENCEFREQUENCY_MONTHLY = 0;
	}
	if (__SLAG_PROPERTIES.RECURRENCEFREQUENCY_YEARLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_YEARLY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RECURRENCEFREQUENCY_YEARLY = undefined;
	} else {
		this.RECURRENCEFREQUENCY_YEARLY = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_CONFIDENTIAL) {
		throw new Error('Ti.Calendar.VISIBILITY_CONFIDENTIAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_CONFIDENTIAL = undefined;
	} else {
		this.VISIBILITY_CONFIDENTIAL = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_DEFAULT) {
		throw new Error('Ti.Calendar.VISIBILITY_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_DEFAULT = undefined;
	} else {
		this.VISIBILITY_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Calendar.VISIBILITY_PRIVATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_PRIVATE = undefined;
	} else {
		this.VISIBILITY_PRIVATE = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Calendar.VISIBILITY_PUBLIC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_PUBLIC = undefined;
	} else {
		this.VISIBILITY_PUBLIC = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_UNKNOWN) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_UNKNOWN = undefined;
	} else {
		this.ATTENDEE_STATUS_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_PENDING) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_PENDING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_PENDING = undefined;
	} else {
		this.ATTENDEE_STATUS_PENDING = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_ACCEPTED) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_ACCEPTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_ACCEPTED = undefined;
	} else {
		this.ATTENDEE_STATUS_ACCEPTED = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_DECLINED) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_DECLINED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_DECLINED = undefined;
	} else {
		this.ATTENDEE_STATUS_DECLINED = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_TENTATIVE) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_TENTATIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_TENTATIVE = undefined;
	} else {
		this.ATTENDEE_STATUS_TENTATIVE = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_DELEGATED) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_DELEGATED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_DELEGATED = undefined;
	} else {
		this.ATTENDEE_STATUS_DELEGATED = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_STATUS_IN_PROCESS) {
		throw new Error('Ti.Calendar.ATTENDEE_STATUS_IN_PROCESS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_STATUS_IN_PROCESS = undefined;
	} else {
		this.ATTENDEE_STATUS_IN_PROCESS = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_ROLE_UNKNOWN) {
		throw new Error('Ti.Calendar.ATTENDEE_ROLE_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_ROLE_UNKNOWN = undefined;
	} else {
		this.ATTENDEE_ROLE_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_ROLE_OPTIONAL) {
		throw new Error('Ti.Calendar.ATTENDEE_ROLE_OPTIONAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_ROLE_OPTIONAL = undefined;
	} else {
		this.ATTENDEE_ROLE_OPTIONAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_ROLE_REQUIRED) {
		throw new Error('Ti.Calendar.ATTENDEE_ROLE_REQUIRED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_ROLE_REQUIRED = undefined;
	} else {
		this.ATTENDEE_ROLE_REQUIRED = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_ROLE_CHAIR) {
		throw new Error('Ti.Calendar.ATTENDEE_ROLE_CHAIR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_ROLE_CHAIR = undefined;
	} else {
		this.ATTENDEE_ROLE_CHAIR = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_ROLE_NON_PARTICIPANT) {
		throw new Error('Ti.Calendar.ATTENDEE_ROLE_NON_PARTICIPANT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_ROLE_NON_PARTICIPANT = undefined;
	} else {
		this.ATTENDEE_ROLE_NON_PARTICIPANT = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_TYPE_UNKNOWN) {
		throw new Error('Ti.Calendar.ATTENDEE_TYPE_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_TYPE_UNKNOWN = undefined;
	} else {
		this.ATTENDEE_TYPE_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_TYPE_PERSON) {
		throw new Error('Ti.Calendar.ATTENDEE_TYPE_PERSON is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_TYPE_PERSON = undefined;
	} else {
		this.ATTENDEE_TYPE_PERSON = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_TYPE_ROOM) {
		throw new Error('Ti.Calendar.ATTENDEE_TYPE_ROOM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_TYPE_ROOM = undefined;
	} else {
		this.ATTENDEE_TYPE_ROOM = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_TYPE_RESOURCE) {
		throw new Error('Ti.Calendar.ATTENDEE_TYPE_RESOURCE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_TYPE_RESOURCE = undefined;
	} else {
		this.ATTENDEE_TYPE_RESOURCE = 0;
	}
	if (__SLAG_PROPERTIES.ATTENDEE_TYPE_GROUP) {
		throw new Error('Ti.Calendar.ATTENDEE_TYPE_GROUP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTENDEE_TYPE_GROUP = undefined;
	} else {
		this.ATTENDEE_TYPE_GROUP = 0;
	}
	if (__SLAG_PROPERTIES.eventsAuthorization) {
		throw new Error('Ti.Calendar.eventsAuthorization was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.calendarAuthorization) {
		throw new Error('Ti.Calendar.calendarAuthorization is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.calendarAuthorization = undefined;
	} else {
		this.calendarAuthorization = 0;
	}
	if (__SLAG_PROPERTIES.allAlerts) {
		throw new Error('Ti.Calendar.allAlerts is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allAlerts = undefined;
	} else {
		this.allAlerts = [];
	}
	if (__SLAG_PROPERTIES.allCalendars) {
		throw new Error('Ti.Calendar.allCalendars is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allCalendars = undefined;
	} else {
		this.allCalendars = [];
	}
	if (__SLAG_PROPERTIES.allEditableCalendars) {
		throw new Error('Ti.Calendar.allEditableCalendars is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allEditableCalendars = undefined;
	} else {
		this.allEditableCalendars = [];
	}
	if (__SLAG_PROPERTIES.selectableCalendars) {
		throw new Error('Ti.Calendar.selectableCalendars is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectableCalendars = undefined;
	} else {
		this.selectableCalendars = [];
	}
	if (__SLAG_PROPERTIES.defaultCalendar) {
		throw new Error('Ti.Calendar.defaultCalendar is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.defaultCalendar = undefined;
	} else {
		this.defaultCalendar = {};
	}
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
Calendar.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
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
Calendar.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
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
Calendar.prototype.hasCalendarPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Calendar.prototype.requestCalendarPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.requestEventsAuthorization = function () {
	throw new Error('Ti.Calendar.requestEventsAuthorization was deprecated, since 5.1.0');
};
Calendar.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Calendar.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
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
Calendar.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Calendar.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Calendar.prototype.getEventsAuthorization = function () {
	throw new Error('Ti.Calendar.getEventsAuthorization was deprecated, since 5.2.0');
};
Calendar.prototype.getCalendarAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.calendarAuthorization;
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
Calendar.prototype.getSelectableCalendars = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectableCalendars;
};
Calendar.prototype.getDefaultCalendar = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.defaultCalendar;
};
module.exports = function (properties) {
	return new Calendar(properties);
};