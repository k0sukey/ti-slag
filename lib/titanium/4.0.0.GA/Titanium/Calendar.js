function Calendar(properties) {
	properties = properties || {};
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || 0;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || 0;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || 0;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || 0;
	this.AVAILABILITY_BUSY = properties.AVAILABILITY_BUSY || 0;
	this.AVAILABILITY_FREE = properties.AVAILABILITY_FREE || 0;
	this.AVAILABILITY_NOTSUPPORTED = properties.AVAILABILITY_NOTSUPPORTED || 0;
	this.AVAILABILITY_TENTATIVE = properties.AVAILABILITY_TENTATIVE || 0;
	this.AVAILABILITY_UNAVAILABLE = properties.AVAILABILITY_UNAVAILABLE || 0;
	this.METHOD_ALERT = properties.METHOD_ALERT || 0;
	this.METHOD_DEFAULT = properties.METHOD_DEFAULT || 0;
	this.METHOD_EMAIL = properties.METHOD_EMAIL || 0;
	this.METHOD_SMS = properties.METHOD_SMS || 0;
	this.RECURRENCEFREQUENCY_DAILY = properties.RECURRENCEFREQUENCY_DAILY || 0;
	this.RECURRENCEFREQUENCY_MONTHLY = properties.RECURRENCEFREQUENCY_MONTHLY || 0;
	this.RECURRENCEFREQUENCY_WEEKLY = properties.RECURRENCEFREQUENCY_WEEKLY || 0;
	this.RECURRENCEFREQUENCY_YEARLY = properties.RECURRENCEFREQUENCY_YEARLY || 0;
	this.SPAN_FUTUREEVENTS = properties.SPAN_FUTUREEVENTS || 0;
	this.SPAN_THISEVENT = properties.SPAN_THISEVENT || 0;
	this.STATE_DISMISSED = properties.STATE_DISMISSED || 0;
	this.STATE_FIRED = properties.STATE_FIRED || 0;
	this.STATE_SCHEDULED = properties.STATE_SCHEDULED || 0;
	this.STATUS_CANCELED = properties.STATUS_CANCELED || 0;
	this.STATUS_CONFIRMED = properties.STATUS_CONFIRMED || 0;
	this.STATUS_NONE = properties.STATUS_NONE || 0;
	this.STATUS_TENTATIVE = properties.STATUS_TENTATIVE || 0;
	this.VISIBILITY_CONFIDENTIAL = properties.VISIBILITY_CONFIDENTIAL || 0;
	this.VISIBILITY_DEFAULT = properties.VISIBILITY_DEFAULT || 0;
	this.VISIBILITY_PRIVATE = properties.VISIBILITY_PRIVATE || 0;
	this.VISIBILITY_PUBLIC = properties.VISIBILITY_PUBLIC || 0;
	this.allAlerts = properties.allAlerts || [];
	this.allCalendars = properties.allCalendars || [];
	this.allEditableCalendars = properties.allEditableCalendars || [];
	this.apiName = 'Ti.Calendar';
	this.bubbleParent = properties.bubbleParent || true;
	this.defaultCalendar = properties.defaultCalendar || {};
	this.eventsAuthorization = properties.eventsAuthorization || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.selectableCalendars = properties.selectableCalendars || [];
	return this;
}
Calendar.prototype.addEventListener = function () {
};
Calendar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Calendar.prototype.fireEvent = function () {
};
Calendar.prototype.getAllAlerts = function () {
	return [];
};
Calendar.prototype.getAllCalendars = function () {
	return [];
};
Calendar.prototype.getAllEditableCalendars = function () {
	return [];
};
Calendar.prototype.getApiName = function () {
	return '';
};
Calendar.prototype.getBubbleParent = function () {
	return true;
};
Calendar.prototype.getCalendarById = function () {
	return {};
};
Calendar.prototype.getDefaultCalendar = function () {
	return {};
};
Calendar.prototype.getEventsAuthorization = function () {
	return 0;
};
Calendar.prototype.getLifecycleContainer = function () {
	return {};
};
Calendar.prototype.getSelectableCalendars = function () {
	return [];
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.requestEventsAuthorization = function () {
};
Calendar.prototype.setBubbleParent = function () {
};
Calendar.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Calendar(properties);
};