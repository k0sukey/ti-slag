var crypto = require('crypto');
function Alert(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'alarmTime',
			'begin',
			'end',
			'eventId',
			'id',
			'minutes',
			'state',
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
		throw new Error('Ti.Android.Calendar.Alert.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar.Alert';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.alarmTime) {
		throw new Error('Ti.Android.Calendar.Alert.alarmTime is read only property');
	}
	this.alarmTime = new Date();
	if (__SLAG__properties.begin) {
		throw new Error('Ti.Android.Calendar.Alert.begin is read only property');
	}
	this.begin = new Date();
	if (__SLAG__properties.end) {
		throw new Error('Ti.Android.Calendar.Alert.end is read only property');
	}
	this.end = new Date();
	if (__SLAG__properties.eventId) {
		throw new Error('Ti.Android.Calendar.Alert.eventId is read only property');
	}
	this.eventId = 0;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Android.Calendar.Alert.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.minutes) {
		throw new Error('Ti.Android.Calendar.Alert.minutes is read only property');
	}
	this.minutes = 0;
	if (__SLAG__properties.state) {
		throw new Error('Ti.Android.Calendar.Alert.state is read only property');
	}
	this.state = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Alert.prototype.addEventListener = function () {
};
Alert.prototype.removeEventListener = function () {
};
Alert.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Alert.prototype.fireEvent = function () {
};
Alert.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Alert.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Alert.prototype.getApiName = function () {
	return this.apiName;
};
Alert.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Alert.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Alert.prototype.getAlarmTime = function () {
	return this.alarmTime;
};
Alert.prototype.getBegin = function () {
	return this.begin;
};
Alert.prototype.getEnd = function () {
	return this.end;
};
Alert.prototype.getEventId = function () {
	return this.eventId;
};
Alert.prototype.getId = function () {
	return this.id;
};
Alert.prototype.getMinutes = function () {
	return this.minutes;
};
Alert.prototype.getState = function () {
	return this.state;
};
module.exports = function (properties) {
	return new Alert(properties);
};