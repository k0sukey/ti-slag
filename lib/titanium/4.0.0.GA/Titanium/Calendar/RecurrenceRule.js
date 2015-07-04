function RecurrenceRule(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Calendar.RecurrenceRule';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.calendarID = properties.calendarID || undefined;
	this.daysOfTheMonth = properties.daysOfTheMonth || undefined;
	this.daysOfTheWeek = properties.daysOfTheWeek || undefined;
	this.daysOfTheYear = properties.daysOfTheYear || undefined;
	this.end = properties.end || undefined;
	this.frequency = properties.frequency || undefined;
	this.interval = properties.interval || undefined;
	this.monthsOfTheYear = properties.monthsOfTheYear || undefined;
	this.setPositions = properties.setPositions || undefined;
	this.weeksOfTheYear = properties.weeksOfTheYear || undefined;
	return this;
}
RecurrenceRule.prototype.addEventListener = function () {
};
RecurrenceRule.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RecurrenceRule.prototype.fireEvent = function () {
};
RecurrenceRule.prototype.getApiName = function () {
	return '';
};
RecurrenceRule.prototype.getBubbleParent = function () {
	return true;
};
RecurrenceRule.prototype.getCalendarID = function () {
	return '';
};
RecurrenceRule.prototype.getDaysOfTheMonth = function () {
	return 0;
};
RecurrenceRule.prototype.getDaysOfTheYear = function () {
	return 0;
};
RecurrenceRule.prototype.getFrequency = function () {
	return 0;
};
RecurrenceRule.prototype.getInterval = function () {
	return 0;
};
RecurrenceRule.prototype.getMonthsOfTheYear = function () {
	return 0;
};
RecurrenceRule.prototype.getSetPositions = function () {
	return 0;
};
RecurrenceRule.prototype.getWeeksOfTheYear = function () {
	return 0;
};
RecurrenceRule.prototype.removeEventListener = function () {
};
RecurrenceRule.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new RecurrenceRule(properties);
};