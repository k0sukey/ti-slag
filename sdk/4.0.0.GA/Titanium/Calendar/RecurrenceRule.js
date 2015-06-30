function RecurrenceRule(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Calendar.RecurrenceRule';
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
	return this.apiName;
};
RecurrenceRule.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
RecurrenceRule.prototype.getCalendarID = function () {
	return this.calendarID;
};
RecurrenceRule.prototype.getDaysOfTheMonth = function () {
	return this.daysOfTheMonth;
};
RecurrenceRule.prototype.getDaysOfTheYear = function () {
	return this.daysOfTheYear;
};
RecurrenceRule.prototype.getFrequency = function () {
	return this.frequency;
};
RecurrenceRule.prototype.getInterval = function () {
	return this.interval;
};
RecurrenceRule.prototype.getMonthsOfTheYear = function () {
	return this.monthsOfTheYear;
};
RecurrenceRule.prototype.getSetPositions = function () {
	return this.setPositions;
};
RecurrenceRule.prototype.getWeeksOfTheYear = function () {
	return this.weeksOfTheYear;
};
RecurrenceRule.prototype.removeEventListener = function () {
};
RecurrenceRule.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new RecurrenceRule(properties);
};