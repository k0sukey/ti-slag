var crypto = require('crypto');
function Reminder(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'id',
			'lifecycleContainer',
			'method',
			'minutes',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Calendar.Reminder.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar.Reminder';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Android.Calendar.Reminder.id is read only property');
	}
	this.id = '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.method) {
		throw new Error('Ti.Android.Calendar.Reminder.method is read only property');
	}
	this.method = 0;
	if (__SLAG__properties.minutes) {
		throw new Error('Ti.Android.Calendar.Reminder.minutes is read only property');
	}
	this.minutes = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Reminder.prototype.addEventListener = function () {
};
Reminder.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Reminder.prototype.fireEvent = function () {
};
Reminder.prototype.getApiName = function () {
	return this.apiName;
};
Reminder.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Reminder.prototype.getId = function () {
	return this.id;
};
Reminder.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Reminder.prototype.getMethod = function () {
	return this.method;
};
Reminder.prototype.getMinutes = function () {
	return this.minutes;
};
Reminder.prototype.removeEventListener = function () {
};
Reminder.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Reminder.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Reminder(properties);
};