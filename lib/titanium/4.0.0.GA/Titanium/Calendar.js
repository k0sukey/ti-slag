var crypto = require('crypto');
function Calendar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__properties.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG__properties.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG__properties.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Calendar.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG__properties.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Calendar.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG__properties.AVAILABILITY_BUSY) {
		throw new Error('Ti.Calendar.AVAILABILITY_BUSY is read only property');
	}
	this.AVAILABILITY_BUSY = 0;
	if (__SLAG__properties.AVAILABILITY_FREE) {
		throw new Error('Ti.Calendar.AVAILABILITY_FREE is read only property');
	}
	this.AVAILABILITY_FREE = 0;
	if (__SLAG__properties.AVAILABILITY_NOTSUPPORTED) {
		throw new Error('Ti.Calendar.AVAILABILITY_NOTSUPPORTED is read only property');
	}
	this.AVAILABILITY_NOTSUPPORTED = 0;
	if (__SLAG__properties.AVAILABILITY_TENTATIVE) {
		throw new Error('Ti.Calendar.AVAILABILITY_TENTATIVE is read only property');
	}
	this.AVAILABILITY_TENTATIVE = 0;
	if (__SLAG__properties.AVAILABILITY_UNAVAILABLE) {
		throw new Error('Ti.Calendar.AVAILABILITY_UNAVAILABLE is read only property');
	}
	this.AVAILABILITY_UNAVAILABLE = 0;
	if (__SLAG__properties.METHOD_ALERT) {
		throw new Error('Ti.Calendar.METHOD_ALERT is read only property');
	}
	this.METHOD_ALERT = 0;
	if (__SLAG__properties.METHOD_DEFAULT) {
		throw new Error('Ti.Calendar.METHOD_DEFAULT is read only property');
	}
	this.METHOD_DEFAULT = 0;
	if (__SLAG__properties.METHOD_EMAIL) {
		throw new Error('Ti.Calendar.METHOD_EMAIL is read only property');
	}
	this.METHOD_EMAIL = 0;
	if (__SLAG__properties.METHOD_SMS) {
		throw new Error('Ti.Calendar.METHOD_SMS is read only property');
	}
	this.METHOD_SMS = 0;
	if (__SLAG__properties.RECURRENCEFREQUENCY_DAILY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_DAILY is read only property');
	}
	this.RECURRENCEFREQUENCY_DAILY = 0;
	if (__SLAG__properties.RECURRENCEFREQUENCY_MONTHLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_MONTHLY is read only property');
	}
	this.RECURRENCEFREQUENCY_MONTHLY = 0;
	if (__SLAG__properties.RECURRENCEFREQUENCY_WEEKLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_WEEKLY is read only property');
	}
	this.RECURRENCEFREQUENCY_WEEKLY = 0;
	if (__SLAG__properties.RECURRENCEFREQUENCY_YEARLY) {
		throw new Error('Ti.Calendar.RECURRENCEFREQUENCY_YEARLY is read only property');
	}
	this.RECURRENCEFREQUENCY_YEARLY = 0;
	if (__SLAG__properties.SPAN_FUTUREEVENTS) {
		throw new Error('Ti.Calendar.SPAN_FUTUREEVENTS is read only property');
	}
	this.SPAN_FUTUREEVENTS = 0;
	if (__SLAG__properties.SPAN_THISEVENT) {
		throw new Error('Ti.Calendar.SPAN_THISEVENT is read only property');
	}
	this.SPAN_THISEVENT = 0;
	if (__SLAG__properties.STATE_DISMISSED) {
		throw new Error('Ti.Calendar.STATE_DISMISSED is read only property');
	}
	this.STATE_DISMISSED = 0;
	if (__SLAG__properties.STATE_FIRED) {
		throw new Error('Ti.Calendar.STATE_FIRED is read only property');
	}
	this.STATE_FIRED = 0;
	if (__SLAG__properties.STATE_SCHEDULED) {
		throw new Error('Ti.Calendar.STATE_SCHEDULED is read only property');
	}
	this.STATE_SCHEDULED = 0;
	if (__SLAG__properties.STATUS_CANCELED) {
		throw new Error('Ti.Calendar.STATUS_CANCELED is read only property');
	}
	this.STATUS_CANCELED = 0;
	if (__SLAG__properties.STATUS_CONFIRMED) {
		throw new Error('Ti.Calendar.STATUS_CONFIRMED is read only property');
	}
	this.STATUS_CONFIRMED = 0;
	if (__SLAG__properties.STATUS_NONE) {
		throw new Error('Ti.Calendar.STATUS_NONE is read only property');
	}
	this.STATUS_NONE = 0;
	if (__SLAG__properties.STATUS_TENTATIVE) {
		throw new Error('Ti.Calendar.STATUS_TENTATIVE is read only property');
	}
	this.STATUS_TENTATIVE = 0;
	if (__SLAG__properties.VISIBILITY_CONFIDENTIAL) {
		throw new Error('Ti.Calendar.VISIBILITY_CONFIDENTIAL is read only property');
	}
	this.VISIBILITY_CONFIDENTIAL = 0;
	if (__SLAG__properties.VISIBILITY_DEFAULT) {
		throw new Error('Ti.Calendar.VISIBILITY_DEFAULT is read only property');
	}
	this.VISIBILITY_DEFAULT = 0;
	if (__SLAG__properties.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Calendar.VISIBILITY_PRIVATE is read only property');
	}
	this.VISIBILITY_PRIVATE = 0;
	if (__SLAG__properties.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Calendar.VISIBILITY_PUBLIC is read only property');
	}
	this.VISIBILITY_PUBLIC = 0;
	if (__SLAG__properties.allAlerts) {
		throw new Error('Ti.Calendar.allAlerts is read only property');
	}
	this.allAlerts = [];
	if (__SLAG__properties.allCalendars) {
		throw new Error('Ti.Calendar.allCalendars is read only property');
	}
	this.allCalendars = [];
	if (__SLAG__properties.allEditableCalendars) {
		throw new Error('Ti.Calendar.allEditableCalendars is read only property');
	}
	this.allEditableCalendars = [];
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.defaultCalendar) {
		throw new Error('Ti.Calendar.defaultCalendar is read only property');
	}
	this.defaultCalendar = {};
	if (__SLAG__properties.eventsAuthorization) {
		throw new Error('Ti.Calendar.eventsAuthorization is read only property');
	}
	this.eventsAuthorization = 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.selectableCalendars) {
		throw new Error('Ti.Calendar.selectableCalendars is read only property');
	}
	this.selectableCalendars = [];
	this.id = __SLAG__properties.id || '';
	return this;
}
Calendar.prototype.addEventListener = function () {
};
Calendar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Calendar.prototype.fireEvent = function () {
};
Calendar.prototype.getAllAlerts = function () {
	return this.allAlerts;
};
Calendar.prototype.getAllCalendars = function () {
	return this.allCalendars;
};
Calendar.prototype.getAllEditableCalendars = function () {
	return this.allEditableCalendars;
};
Calendar.prototype.getApiName = function () {
	return this.apiName;
};
Calendar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Calendar.prototype.getCalendarById = function () {
	return {};
};
Calendar.prototype.getDefaultCalendar = function () {
	return this.defaultCalendar;
};
Calendar.prototype.getEventsAuthorization = function () {
	return this.eventsAuthorization;
};
Calendar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Calendar.prototype.getSelectableCalendars = function () {
	return this.selectableCalendars;
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.requestEventsAuthorization = function () {
};
Calendar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Calendar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Calendar(properties);
};