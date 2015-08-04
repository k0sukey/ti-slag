var crypto = require('crypto');
function NotificationManager(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
			'lifecycleContainer',
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
	if (__SLAG__properties.DEFAULT_ALL) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_ALL is read only property');
	}
	this.DEFAULT_ALL = 0;
	if (__SLAG__properties.DEFAULT_LIGHTS) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_LIGHTS is read only property');
	}
	this.DEFAULT_LIGHTS = 0;
	if (__SLAG__properties.DEFAULT_SOUND) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_SOUND is read only property');
	}
	this.DEFAULT_SOUND = 0;
	if (__SLAG__properties.DEFAULT_VIBRATE) {
		throw new Error('Ti.Android.NotificationManager.DEFAULT_VIBRATE is read only property');
	}
	this.DEFAULT_VIBRATE = 0;
	if (__SLAG__properties.FLAG_AUTO_CANCEL) {
		throw new Error('Ti.Android.NotificationManager.FLAG_AUTO_CANCEL is read only property');
	}
	this.FLAG_AUTO_CANCEL = 0;
	if (__SLAG__properties.FLAG_INSISTENT) {
		throw new Error('Ti.Android.NotificationManager.FLAG_INSISTENT is read only property');
	}
	this.FLAG_INSISTENT = 0;
	if (__SLAG__properties.FLAG_NO_CLEAR) {
		throw new Error('Ti.Android.NotificationManager.FLAG_NO_CLEAR is read only property');
	}
	this.FLAG_NO_CLEAR = 0;
	if (__SLAG__properties.FLAG_ONGOING_EVENT) {
		throw new Error('Ti.Android.NotificationManager.FLAG_ONGOING_EVENT is read only property');
	}
	this.FLAG_ONGOING_EVENT = 0;
	if (__SLAG__properties.FLAG_ONLY_ALERT_ONCE) {
		throw new Error('Ti.Android.NotificationManager.FLAG_ONLY_ALERT_ONCE is read only property');
	}
	this.FLAG_ONLY_ALERT_ONCE = 0;
	if (__SLAG__properties.FLAG_SHOW_LIGHTS) {
		throw new Error('Ti.Android.NotificationManager.FLAG_SHOW_LIGHTS is read only property');
	}
	this.FLAG_SHOW_LIGHTS = 0;
	if (__SLAG__properties.STREAM_DEFAULT) {
		throw new Error('Ti.Android.NotificationManager.STREAM_DEFAULT is read only property');
	}
	this.STREAM_DEFAULT = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.NotificationManager.apiName is read only property');
	}
	this.apiName = 'Ti.Android.NotificationManager';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
NotificationManager.prototype.addEventListener = function () {
};
NotificationManager.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
NotificationManager.prototype.cancel = function () {
};
NotificationManager.prototype.cancelAll = function () {
};
NotificationManager.prototype.fireEvent = function () {
};
NotificationManager.prototype.getApiName = function () {
	return this.apiName;
};
NotificationManager.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NotificationManager.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NotificationManager.prototype.notify = function () {
};
NotificationManager.prototype.removeEventListener = function () {
};
NotificationManager.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NotificationManager.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new NotificationManager(properties);
};