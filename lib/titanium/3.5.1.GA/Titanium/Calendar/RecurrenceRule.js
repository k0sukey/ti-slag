function RecurrenceRule(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Calendar.RecurrenceRule';
	this.bubbleParent = properties.bubbleParent || true;
	this.calendarID = properties.calendarID || '';
	this.daysOfTheMonth = properties.daysOfTheMonth || 0;
	this.daysOfTheWeek = properties.daysOfTheWeek || {};
	this.daysOfTheYear = properties.daysOfTheYear || 0;
	this.end = properties.end || {};
	this.frequency = properties.frequency || 0;
	this.interval = properties.interval || 0;
	this.monthsOfTheYear = properties.monthsOfTheYear || 0;
	this.setPositions = properties.setPositions || 0;
	this.weeksOfTheYear = properties.weeksOfTheYear || 0;
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
RecurrenceRule.prototype.getDaysOfTheWeek = function () {
	return {};
};
RecurrenceRule.prototype.getDaysOfTheYear = function () {
	return 0;
};
RecurrenceRule.prototype.getEnd = function () {
	return {};
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