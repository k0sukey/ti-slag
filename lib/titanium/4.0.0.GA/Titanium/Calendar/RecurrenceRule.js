var crypto = require('crypto');
function RecurrenceRule(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'bubbleParent',
			'calendarID',
			'daysOfTheMonth',
			'daysOfTheWeek',
			'daysOfTheYear',
			'end',
			'frequency',
			'interval',
			'monthsOfTheYear',
			'setPositions',
			'weeksOfTheYear',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Calendar.RecurrenceRule.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.RecurrenceRule';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.calendarID) {
		throw new Error('Ti.Calendar.RecurrenceRule.calendarID is read only property');
	}
	this.calendarID = '';
	if (__SLAG_PROPERTIES.daysOfTheMonth) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheMonth is read only property');
	}
	this.daysOfTheMonth = 0;
	if (__SLAG_PROPERTIES.daysOfTheWeek) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheWeek is read only property');
	}
	this.daysOfTheWeek = {};
	if (__SLAG_PROPERTIES.daysOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.daysOfTheYear is read only property');
	}
	this.daysOfTheYear = 0;
	if (__SLAG_PROPERTIES.end) {
		throw new Error('Ti.Calendar.RecurrenceRule.end is read only property');
	}
	this.end = {};
	if (__SLAG_PROPERTIES.frequency) {
		throw new Error('Ti.Calendar.RecurrenceRule.frequency is read only property');
	}
	this.frequency = 0;
	if (__SLAG_PROPERTIES.interval) {
		throw new Error('Ti.Calendar.RecurrenceRule.interval is read only property');
	}
	this.interval = 0;
	if (__SLAG_PROPERTIES.monthsOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.monthsOfTheYear is read only property');
	}
	this.monthsOfTheYear = 0;
	if (__SLAG_PROPERTIES.setPositions) {
		throw new Error('Ti.Calendar.RecurrenceRule.setPositions is read only property');
	}
	this.setPositions = 0;
	if (__SLAG_PROPERTIES.weeksOfTheYear) {
		throw new Error('Ti.Calendar.RecurrenceRule.weeksOfTheYear is read only property');
	}
	this.weeksOfTheYear = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
RecurrenceRule.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RecurrenceRule.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
RecurrenceRule.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RecurrenceRule.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
RecurrenceRule.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
RecurrenceRule.prototype.getCalendarID = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.calendarID;
};
RecurrenceRule.prototype.getDaysOfTheMonth = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.daysOfTheMonth;
};
RecurrenceRule.prototype.getDaysOfTheWeek = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.daysOfTheWeek;
};
RecurrenceRule.prototype.getDaysOfTheYear = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.daysOfTheYear;
};
RecurrenceRule.prototype.getEnd = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.end;
};
RecurrenceRule.prototype.getFrequency = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.frequency;
};
RecurrenceRule.prototype.getInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.interval;
};
RecurrenceRule.prototype.getMonthsOfTheYear = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.monthsOfTheYear;
};
RecurrenceRule.prototype.getSetPositions = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.setPositions;
};
RecurrenceRule.prototype.getWeeksOfTheYear = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.weeksOfTheYear;
};
RecurrenceRule.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RecurrenceRule.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new RecurrenceRule(properties);
};