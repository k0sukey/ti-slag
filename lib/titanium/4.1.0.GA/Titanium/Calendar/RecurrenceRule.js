var crypto = require('crypto');
function RecurrenceRule(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'calendarID',
			'frequency',
			'interval',
			'daysOfTheWeek',
			'daysOfTheMonth',
			'monthsOfTheYear',
			'weeksOfTheYear',
			'daysOfTheYear',
			'setPositions',
			'end',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Calendar.RecurrenceRule.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.RecurrenceRule';
	if (__SLAG__properties.calendarID) {
		throw new Error('Ti.Calendar.RecurrenceRule.calendarID is read only property');
	}
	this.calendarID = '';
	if (__SLAG__properties.frequency) {
		throw new Error('Ti.Calendar.RecurrenceRule.frequency is read only property');
	}
	this.frequency = 0;
	if (__SLAG__properties.interval) {
		throw new Error('Ti.Calendar.RecurrenceRule.interval is read only property');
	}
	this.interval = 0;
	if (__SLAG__properties.daysOfTheWeek) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheWeek is read only property');
	}
	this.daysOfTheWeek = {};
	if (__SLAG__properties.daysOfTheMonth) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheMonth is read only property');
	}
	this.daysOfTheMonth = 0;
	if (__SLAG__properties.monthsOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.monthsOfTheYear is read only property');
	}
	this.monthsOfTheYear = 0;
	if (__SLAG__properties.weeksOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.weeksOfTheYear is read only property');
	}
	this.weeksOfTheYear = 0;
	if (__SLAG__properties.daysOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheYear is read only property');
	}
	this.daysOfTheYear = 0;
	if (__SLAG__properties.setPositions) {
		throw new Error('Ti.Calendar.RecurrenceRule.setPositions is read only property');
	}
	this.setPositions = 0;
	if (__SLAG__properties.end) {
		throw new Error('Ti.Calendar.RecurrenceRule.end is read only property');
	}
	this.end = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
RecurrenceRule.prototype.addEventListener = function () {
};
RecurrenceRule.prototype.removeEventListener = function () {
};
RecurrenceRule.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
RecurrenceRule.prototype.fireEvent = function () {
};
RecurrenceRule.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
RecurrenceRule.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
RecurrenceRule.prototype.getApiName = function () {
	return this.apiName;
};
RecurrenceRule.prototype.getCalendarID = function () {
	return this.calendarID;
};
RecurrenceRule.prototype.getFrequency = function () {
	return this.frequency;
};
RecurrenceRule.prototype.getInterval = function () {
	return this.interval;
};
RecurrenceRule.prototype.getDaysOfTheWeek = function () {
	return this.daysOfTheWeek;
};
RecurrenceRule.prototype.getDaysOfTheMonth = function () {
	return this.daysOfTheMonth;
};
RecurrenceRule.prototype.getMonthsOfTheYear = function () {
	return this.monthsOfTheYear;
};
RecurrenceRule.prototype.getWeeksOfTheYear = function () {
	return this.weeksOfTheYear;
};
RecurrenceRule.prototype.getDaysOfTheYear = function () {
	return this.daysOfTheYear;
};
RecurrenceRule.prototype.getSetPositions = function () {
	return this.setPositions;
};
RecurrenceRule.prototype.getEnd = function () {
	return this.end;
};
module.exports = function (properties) {
	return new RecurrenceRule(properties);
};