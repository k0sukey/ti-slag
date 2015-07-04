function Calendar(properties) {
	properties = properties || {};
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || undefined;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || undefined;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || undefined;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || undefined;
	this.AVAILABILITY_BUSY = properties.AVAILABILITY_BUSY || undefined;
	this.AVAILABILITY_FREE = properties.AVAILABILITY_FREE || undefined;
	this.AVAILABILITY_NOTSUPPORTED = properties.AVAILABILITY_NOTSUPPORTED || undefined;
	this.AVAILABILITY_TENTATIVE = properties.AVAILABILITY_TENTATIVE || undefined;
	this.AVAILABILITY_UNAVAILABLE = properties.AVAILABILITY_UNAVAILABLE || undefined;
	this.METHOD_ALERT = properties.METHOD_ALERT || undefined;
	this.METHOD_DEFAULT = properties.METHOD_DEFAULT || undefined;
	this.METHOD_EMAIL = properties.METHOD_EMAIL || undefined;
	this.METHOD_SMS = properties.METHOD_SMS || undefined;
	this.RECURRENCEFREQUENCY_DAILY = properties.RECURRENCEFREQUENCY_DAILY || undefined;
	this.RECURRENCEFREQUENCY_MONTHLY = properties.RECURRENCEFREQUENCY_MONTHLY || undefined;
	this.RECURRENCEFREQUENCY_WEEKLY = properties.RECURRENCEFREQUENCY_WEEKLY || undefined;
	this.RECURRENCEFREQUENCY_YEARLY = properties.RECURRENCEFREQUENCY_YEARLY || undefined;
	this.SPAN_FUTUREEVENTS = properties.SPAN_FUTUREEVENTS || undefined;
	this.SPAN_THISEVENT = properties.SPAN_THISEVENT || undefined;
	this.STATE_DISMISSED = properties.STATE_DISMISSED || undefined;
	this.STATE_FIRED = properties.STATE_FIRED || undefined;
	this.STATE_SCHEDULED = properties.STATE_SCHEDULED || undefined;
	this.STATUS_CANCELED = properties.STATUS_CANCELED || undefined;
	this.STATUS_CONFIRMED = properties.STATUS_CONFIRMED || undefined;
	this.STATUS_NONE = properties.STATUS_NONE || undefined;
	this.STATUS_TENTATIVE = properties.STATUS_TENTATIVE || undefined;
	this.VISIBILITY_CONFIDENTIAL = properties.VISIBILITY_CONFIDENTIAL || undefined;
	this.VISIBILITY_DEFAULT = properties.VISIBILITY_DEFAULT || undefined;
	this.VISIBILITY_PRIVATE = properties.VISIBILITY_PRIVATE || undefined;
	this.VISIBILITY_PUBLIC = properties.VISIBILITY_PUBLIC || undefined;
	this.allAlerts = properties.allAlerts || undefined;
	this.allCalendars = properties.allCalendars || undefined;
	this.allEditableCalendars = properties.allEditableCalendars || undefined;
	this.apiName = 'Ti.Calendar';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.defaultCalendar = properties.defaultCalendar || undefined;
	this.eventsAuthorization = properties.eventsAuthorization || undefined;
	this.selectableCalendars = properties.selectableCalendars || undefined;
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
Calendar.prototype.getSelectableCalendars = function () {
	return [];
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.requestEventsAuthorization = function () {
};
Calendar.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Calendar(properties);
};