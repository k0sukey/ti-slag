function Calendar(properties) {
	properties = properties || {};
	this.METHOD_ALERT = properties.METHOD_ALERT || undefined;
	this.METHOD_DEFAULT = properties.METHOD_DEFAULT || undefined;
	this.METHOD_EMAIL = properties.METHOD_EMAIL || undefined;
	this.METHOD_SMS = properties.METHOD_SMS || undefined;
	this.STATE_DISMISSED = properties.STATE_DISMISSED || undefined;
	this.STATE_FIRED = properties.STATE_FIRED || undefined;
	this.STATE_SCHEDULED = properties.STATE_SCHEDULED || undefined;
	this.STATUS_CANCELED = properties.STATUS_CANCELED || undefined;
	this.STATUS_CONFIRMED = properties.STATUS_CONFIRMED || undefined;
	this.STATUS_TENTATIVE = properties.STATUS_TENTATIVE || undefined;
	this.VISIBILITY_CONFIDENTIAL = properties.VISIBILITY_CONFIDENTIAL || undefined;
	this.VISIBILITY_DEFAULT = properties.VISIBILITY_DEFAULT || undefined;
	this.VISIBILITY_PRIVATE = properties.VISIBILITY_PRIVATE || undefined;
	this.VISIBILITY_PUBLIC = properties.VISIBILITY_PUBLIC || undefined;
	this.allAlerts = properties.allAlerts || undefined;
	this.allCalendars = properties.allCalendars || undefined;
	this.apiName = 'Ti.Android.Calendar';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
Calendar.prototype.getApiName = function () {
	return '';
};
Calendar.prototype.getBubbleParent = function () {
	return true;
};
Calendar.prototype.getCalendarById = function () {
	return {};
};
Calendar.prototype.getLifecycleContainer = function () {
	return {};
};
Calendar.prototype.getSelectableCalendars = function () {
	return [];
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.setBubbleParent = function () {
};
Calendar.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Calendar(properties);
};