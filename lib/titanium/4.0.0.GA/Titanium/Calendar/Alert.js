var crypto = require('crypto');
function Alert(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'absoluteDate',
			'alarmTime',
			'apiName',
			'begin',
			'bubbleParent',
			'end',
			'eventId',
			'id',
			'lifecycleContainer',
			'minutes',
			'relativeOffset',
			'state',
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
	this.absoluteDate = __SLAG__properties.absoluteDate || new Date();
	if (__SLAG__properties.alarmTime) {
		throw new Error('Ti.Calendar.Alert.alarmTime is read only property');
	}
	this.alarmTime = new Date();
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Calendar.Alert.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.Alert';
	if (__SLAG__properties.begin) {
		throw new Error('Ti.Calendar.Alert.begin is read only property');
	}
	this.begin = new Date();
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.end) {
		throw new Error('Ti.Calendar.Alert.end is read only property');
	}
	this.end = new Date();
	if (__SLAG__properties.eventId) {
		throw new Error('Ti.Calendar.Alert.eventId is read only property');
	}
	this.eventId = 0;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Calendar.Alert.id is read only property');
	}
	this.id = '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.minutes) {
		throw new Error('Ti.Calendar.Alert.minutes is read only property');
	}
	this.minutes = 0;
	this.relativeOffset = __SLAG__properties.relativeOffset || 0;
	if (__SLAG__properties.state) {
		throw new Error('Ti.Calendar.Alert.state is read only property');
	}
	this.state = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Alert.prototype.addEventListener = function () {
};
Alert.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Alert.prototype.fireEvent = function () {
};
Alert.prototype.getAbsoluteDate = function () {
	return this.absoluteDate;
};
Alert.prototype.getAlarmTime = function () {
	return this.alarmTime;
};
Alert.prototype.getApiName = function () {
	return this.apiName;
};
Alert.prototype.getBegin = function () {
	return this.begin;
};
Alert.prototype.getBubbleParent = function () {
	return this.bubbleParent;
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
Alert.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Alert.prototype.getMinutes = function () {
	return this.minutes;
};
Alert.prototype.getRelativeOffset = function () {
	return this.relativeOffset;
};
Alert.prototype.getState = function () {
	return this.state;
};
Alert.prototype.removeEventListener = function () {
};
Alert.prototype.setAbsoluteDate = function (property) {
	this.absoluteDate = property;
};
Alert.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Alert.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Alert.prototype.setRelativeOffset = function (property) {
	this.relativeOffset = property;
};
module.exports = function (properties) {
	return new Alert(properties);
};