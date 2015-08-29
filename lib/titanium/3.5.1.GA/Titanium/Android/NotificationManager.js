var crypto = require('crypto');
function NotificationManager(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'DEFAULT_ALL',
			'DEFAULT_LIGHTS',
			'DEFAULT_SOUND',
			'DEFAULT_VIBRATE',
			'FLAG_AUTO_CANCEL',
			'FLAG_INSISTENT',
			'FLAG_NO_CLEAR',
			'FLAG_ONGOING_EVENT',
			'FLAG_ONLY_ALERT_ONCE',
			'FLAG_SHOW_LIGHTS',
			'STREAM_DEFAULT',
			'apiName',
			'bubbleParent',
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
	if (__SLAG_PROPERTIES.DEFAULT_ALL) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_ALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_ALL = undefined;
	} else {
		this.DEFAULT_ALL = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_LIGHTS) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_LIGHTS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_LIGHTS = undefined;
	} else {
		this.DEFAULT_LIGHTS = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_SOUND) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_SOUND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_SOUND = undefined;
	} else {
		this.DEFAULT_SOUND = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_VIBRATE) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_VIBRATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_VIBRATE = undefined;
	} else {
		this.DEFAULT_VIBRATE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_AUTO_CANCEL) {
		throw new Error('Ti.Android.NotificationManager.FLAG_AUTO_CANCEL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_AUTO_CANCEL = undefined;
	} else {
		this.FLAG_AUTO_CANCEL = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_INSISTENT) {
		throw new Error('Ti.Android.NotificationManager.FLAG_INSISTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_INSISTENT = undefined;
	} else {
		this.FLAG_INSISTENT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_NO_CLEAR) {
		throw new Error('Ti.Android.NotificationManager.FLAG_NO_CLEAR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_NO_CLEAR = undefined;
	} else {
		this.FLAG_NO_CLEAR = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ONGOING_EVENT) {
		throw new Error('Ti.Android.NotificationManager.FLAG_ONGOING_EVENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ONGOING_EVENT = undefined;
	} else {
		this.FLAG_ONGOING_EVENT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ONLY_ALERT_ONCE) {
		throw new Error('Ti.Android.NotificationManager.FLAG_ONLY_ALERT_ONCE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ONLY_ALERT_ONCE = undefined;
	} else {
		this.FLAG_ONLY_ALERT_ONCE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_SHOW_LIGHTS) {
		throw new Error('Ti.Android.NotificationManager.FLAG_SHOW_LIGHTS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_SHOW_LIGHTS = undefined;
	} else {
		this.FLAG_SHOW_LIGHTS = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_DEFAULT) {
		throw new Error('Ti.Android.NotificationManager.STREAM_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_DEFAULT = undefined;
	} else {
		this.STREAM_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.NotificationManager.apiName is read only property');
	}
	this.apiName = 'Ti.Android.NotificationManager';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NotificationManager.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
NotificationManager.prototype.cancel = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.cancelAll = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NotificationManager.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
NotificationManager.prototype.notify = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NotificationManager.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NotificationManager(properties);
};