function Calendar(properties) {
	properties = properties || {};
	this.METHOD_ALERT = properties.METHOD_ALERT || 0;
	this.METHOD_DEFAULT = properties.METHOD_DEFAULT || 0;
	this.METHOD_EMAIL = properties.METHOD_EMAIL || 0;
	this.METHOD_SMS = properties.METHOD_SMS || 0;
	this.STATE_DISMISSED = properties.STATE_DISMISSED || 0;
	this.STATE_FIRED = properties.STATE_FIRED || 0;
	this.STATE_SCHEDULED = properties.STATE_SCHEDULED || 0;
	this.STATUS_CANCELED = properties.STATUS_CANCELED || 0;
	this.STATUS_CONFIRMED = properties.STATUS_CONFIRMED || 0;
	this.STATUS_TENTATIVE = properties.STATUS_TENTATIVE || 0;
	this.VISIBILITY_CONFIDENTIAL = properties.VISIBILITY_CONFIDENTIAL || 0;
	this.VISIBILITY_DEFAULT = properties.VISIBILITY_DEFAULT || 0;
	this.VISIBILITY_PRIVATE = properties.VISIBILITY_PRIVATE || 0;
	this.VISIBILITY_PUBLIC = properties.VISIBILITY_PUBLIC || 0;
	this.allAlerts = properties.allAlerts || [];
	this.allCalendars = properties.allCalendars || [];
	this.apiName = 'Ti.Android.Calendar';
	this.bubbleParent = properties.bubbleParent || true;
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