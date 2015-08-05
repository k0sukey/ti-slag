var crypto = require('crypto');
function Calendar(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'METHOD_ALERT',
			'METHOD_DEFAULT',
			'METHOD_EMAIL',
			'METHOD_SMS',
			'STATE_DISMISSED',
			'STATE_FIRED',
			'STATE_SCHEDULED',
			'STATUS_CANCELED',
			'STATUS_CONFIRMED',
			'STATUS_TENTATIVE',
			'VISIBILITY_CONFIDENTIAL',
			'VISIBILITY_DEFAULT',
			'VISIBILITY_PRIVATE',
			'VISIBILITY_PUBLIC',
			'allAlerts',
			'allCalendars',
			'apiName',
			'bubbleParent',
			'selectableCalendars',
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
	if (__SLAG_PROPERTIES.METHOD_ALERT) {
		throw new Error('Ti.Android.Calendar.METHOD_ALERT is read only property');
	}
	this.METHOD_ALERT = 0;
	if (__SLAG_PROPERTIES.METHOD_DEFAULT) {
		throw new Error('Ti.Android.Calendar.METHOD_DEFAULT is read only property');
	}
	this.METHOD_DEFAULT = 0;
	if (__SLAG_PROPERTIES.METHOD_EMAIL) {
		throw new Error('Ti.Android.Calendar.METHOD_EMAIL is read only property');
	}
	this.METHOD_EMAIL = 0;
	if (__SLAG_PROPERTIES.METHOD_SMS) {
		throw new Error('Ti.Android.Calendar.METHOD_SMS is read only property');
	}
	this.METHOD_SMS = 0;
	if (__SLAG_PROPERTIES.STATE_DISMISSED) {
		throw new Error('Ti.Android.Calendar.STATE_DISMISSED is read only property');
	}
	this.STATE_DISMISSED = 0;
	if (__SLAG_PROPERTIES.STATE_FIRED) {
		throw new Error('Ti.Android.Calendar.STATE_FIRED is read only property');
	}
	this.STATE_FIRED = 0;
	if (__SLAG_PROPERTIES.STATE_SCHEDULED) {
		throw new Error('Ti.Android.Calendar.STATE_SCHEDULED is read only property');
	}
	this.STATE_SCHEDULED = 0;
	if (__SLAG_PROPERTIES.STATUS_CANCELED) {
		throw new Error('Ti.Android.Calendar.STATUS_CANCELED is read only property');
	}
	this.STATUS_CANCELED = 0;
	if (__SLAG_PROPERTIES.STATUS_CONFIRMED) {
		throw new Error('Ti.Android.Calendar.STATUS_CONFIRMED is read only property');
	}
	this.STATUS_CONFIRMED = 0;
	if (__SLAG_PROPERTIES.STATUS_TENTATIVE) {
		throw new Error('Ti.Android.Calendar.STATUS_TENTATIVE is read only property');
	}
	this.STATUS_TENTATIVE = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_CONFIDENTIAL) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_CONFIDENTIAL is read only property');
	}
	this.VISIBILITY_CONFIDENTIAL = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_DEFAULT) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_DEFAULT is read only property');
	}
	this.VISIBILITY_DEFAULT = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_PRIVATE is read only property');
	}
	this.VISIBILITY_PRIVATE = 0;
	if (__SLAG_PROPERTIES.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_PUBLIC is read only property');
	}
	this.VISIBILITY_PUBLIC = 0;
	if (__SLAG_PROPERTIES.allAlerts) {
		throw new Error('Ti.Android.Calendar.allAlerts is read only property');
	}
	this.allAlerts = [];
	if (__SLAG_PROPERTIES.allCalendars) {
		throw new Error('Ti.Android.Calendar.allCalendars is read only property');
	}
	this.allCalendars = [];
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.selectableCalendars) {
		throw new Error('Ti.Android.Calendar.selectableCalendars is read only property');
	}
	this.selectableCalendars = [];
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Calendar.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Calendar.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.getAllAlerts = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allAlerts;
};
Calendar.prototype.getAllCalendars = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allCalendars;
};
Calendar.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Calendar.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Calendar.prototype.getCalendarById = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Calendar.prototype.getSelectableCalendars = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectableCalendars;
};
Calendar.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Calendar.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Calendar(properties);
};