var crypto = require('crypto');
function Alert(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.Calendar.Alert.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Calendar.Alert';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.alarmTime) {
		throw new Error('Ti.Android.Calendar.Alert.alarmTime is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.alarmTime = undefined;
	} else {
		this.alarmTime = new Date();
	}
	if (__SLAG_PROPERTIES.begin) {
		throw new Error('Ti.Android.Calendar.Alert.begin is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.begin = undefined;
	} else {
		this.begin = new Date();
	}
	if (__SLAG_PROPERTIES.end) {
		throw new Error('Ti.Android.Calendar.Alert.end is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.end = undefined;
	} else {
		this.end = new Date();
	}
	if (__SLAG_PROPERTIES.eventId) {
		throw new Error('Ti.Android.Calendar.Alert.eventId is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.eventId = undefined;
	} else {
		this.eventId = 0;
	}
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Android.Calendar.Alert.id is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.id = undefined;
	} else {
		this.id = '';
	}
	if (__SLAG_PROPERTIES.minutes) {
		throw new Error('Ti.Android.Calendar.Alert.minutes is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.minutes = undefined;
	} else {
		this.minutes = 0;
	}
	if (__SLAG_PROPERTIES.state) {
		throw new Error('Ti.Android.Calendar.Alert.state is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.state = undefined;
	} else {
		this.state = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Alert.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Alert.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Alert.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Alert.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Alert.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Alert.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Alert.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Alert.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Alert.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Alert.prototype.getAlarmTime = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.alarmTime;
};
Alert.prototype.getBegin = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.begin;
};
Alert.prototype.getEnd = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.end;
};
Alert.prototype.getEventId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.eventId;
};
Alert.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Alert.prototype.getMinutes = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.minutes;
};
Alert.prototype.getState = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.state;
};
module.exports = function (properties) {
	return new Alert(properties);
};