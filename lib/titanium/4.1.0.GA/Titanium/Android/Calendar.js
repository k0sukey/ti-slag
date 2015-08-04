var crypto = require('crypto');
function Calendar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
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
			'selectableCalendars',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.METHOD_ALERT) {
		throw new Error('Ti.Android.Calendar.METHOD_ALERT is read only property');
	}
	this.METHOD_ALERT = 0;
	if (__SLAG__properties.METHOD_DEFAULT) {
		throw new Error('Ti.Android.Calendar.METHOD_DEFAULT is read only property');
	}
	this.METHOD_DEFAULT = 0;
	if (__SLAG__properties.METHOD_EMAIL) {
		throw new Error('Ti.Android.Calendar.METHOD_EMAIL is read only property');
	}
	this.METHOD_EMAIL = 0;
	if (__SLAG__properties.METHOD_SMS) {
		throw new Error('Ti.Android.Calendar.METHOD_SMS is read only property');
	}
	this.METHOD_SMS = 0;
	if (__SLAG__properties.STATE_DISMISSED) {
		throw new Error('Ti.Android.Calendar.STATE_DISMISSED is read only property');
	}
	this.STATE_DISMISSED = 0;
	if (__SLAG__properties.STATE_FIRED) {
		throw new Error('Ti.Android.Calendar.STATE_FIRED is read only property');
	}
	this.STATE_FIRED = 0;
	if (__SLAG__properties.STATE_SCHEDULED) {
		throw new Error('Ti.Android.Calendar.STATE_SCHEDULED is read only property');
	}
	this.STATE_SCHEDULED = 0;
	if (__SLAG__properties.STATUS_CANCELED) {
		throw new Error('Ti.Android.Calendar.STATUS_CANCELED is read only property');
	}
	this.STATUS_CANCELED = 0;
	if (__SLAG__properties.STATUS_CONFIRMED) {
		throw new Error('Ti.Android.Calendar.STATUS_CONFIRMED is read only property');
	}
	this.STATUS_CONFIRMED = 0;
	if (__SLAG__properties.STATUS_TENTATIVE) {
		throw new Error('Ti.Android.Calendar.STATUS_TENTATIVE is read only property');
	}
	this.STATUS_TENTATIVE = 0;
	if (__SLAG__properties.VISIBILITY_CONFIDENTIAL) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_CONFIDENTIAL is read only property');
	}
	this.VISIBILITY_CONFIDENTIAL = 0;
	if (__SLAG__properties.VISIBILITY_DEFAULT) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_DEFAULT is read only property');
	}
	this.VISIBILITY_DEFAULT = 0;
	if (__SLAG__properties.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_PRIVATE is read only property');
	}
	this.VISIBILITY_PRIVATE = 0;
	if (__SLAG__properties.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Android.Calendar.VISIBILITY_PUBLIC is read only property');
	}
	this.VISIBILITY_PUBLIC = 0;
	if (__SLAG__properties.allAlerts) {
		throw new Error('Ti.Android.Calendar.allAlerts is read only property');
	}
	this.allAlerts = [];
	if (__SLAG__properties.allCalendars) {
		throw new Error('Ti.Android.Calendar.allCalendars is read only property');
	}
	this.allCalendars = [];
	if (__SLAG__properties.selectableCalendars) {
		throw new Error('Ti.Android.Calendar.selectableCalendars is read only property');
	}
	this.selectableCalendars = [];
	this.id = __SLAG__properties.id || '';
	return this;
}
Calendar.prototype.addEventListener = function () {
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Calendar.prototype.fireEvent = function () {
};
Calendar.prototype.getCalendarById = function () {
	return {};
};
Calendar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Calendar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Calendar.prototype.getApiName = function () {
	return this.apiName;
};
Calendar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Calendar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Calendar.prototype.getAllAlerts = function () {
	return this.allAlerts;
};
Calendar.prototype.getAllCalendars = function () {
	return this.allCalendars;
};
Calendar.prototype.getSelectableCalendars = function () {
	return this.selectableCalendars;
};
module.exports = function (properties) {
	return new Calendar(properties);
};