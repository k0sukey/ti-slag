var crypto = require('crypto');
function iOS(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'EVENT_ACCESSIBILITY_LAYOUT_CHANGED',
			'EVENT_ACCESSIBILITY_SCREEN_CHANGED',
			'BACKGROUNDFETCHINTERVAL_MIN',
			'BACKGROUNDFETCHINTERVAL_NEVER',
			'USER_NOTIFICATION_TYPE_NONE',
			'USER_NOTIFICATION_TYPE_BADGE',
			'USER_NOTIFICATION_TYPE_SOUND',
			'USER_NOTIFICATION_TYPE_ALERT',
			'USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND',
			'USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND',
			'currentUserNotificationSettings',
			'applicationOpenSettingsURL',
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
		throw new Error('Ti.App.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS';
	if (__SLAG__properties.EVENT_ACCESSIBILITY_LAYOUT_CHANGED) {
		throw new Error('Ti.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED is read only property');
	}
	this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = '';
	if (__SLAG__properties.EVENT_ACCESSIBILITY_SCREEN_CHANGED) {
		throw new Error('Ti.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED is read only property');
	}
	this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = '';
	if (__SLAG__properties.BACKGROUNDFETCHINTERVAL_MIN) {
		throw new Error('Ti.App.iOS.BACKGROUNDFETCHINTERVAL_MIN is read only property');
	}
	this.BACKGROUNDFETCHINTERVAL_MIN = 0;
	if (__SLAG__properties.BACKGROUNDFETCHINTERVAL_NEVER) {
		throw new Error('Ti.App.iOS.BACKGROUNDFETCHINTERVAL_NEVER is read only property');
	}
	this.BACKGROUNDFETCHINTERVAL_NEVER = 0;
	if (__SLAG__properties.USER_NOTIFICATION_TYPE_NONE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_NONE is read only property');
	}
	this.USER_NOTIFICATION_TYPE_NONE = 0;
	if (__SLAG__properties.USER_NOTIFICATION_TYPE_BADGE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE is read only property');
	}
	this.USER_NOTIFICATION_TYPE_BADGE = 0;
	if (__SLAG__properties.USER_NOTIFICATION_TYPE_SOUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND is read only property');
	}
	this.USER_NOTIFICATION_TYPE_SOUND = 0;
	if (__SLAG__properties.USER_NOTIFICATION_TYPE_ALERT) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT is read only property');
	}
	this.USER_NOTIFICATION_TYPE_ALERT = 0;
	if (__SLAG__properties.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND is read only property');
	}
	this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = 0;
	if (__SLAG__properties.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND is read only property');
	}
	this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = 0;
	if (__SLAG__properties.currentUserNotificationSettings) {
		throw new Error('Ti.App.iOS.currentUserNotificationSettings is read only property');
	}
	this.currentUserNotificationSettings = {};
	if (__SLAG__properties.applicationOpenSettingsURL) {
		throw new Error('Ti.App.iOS.applicationOpenSettingsURL is read only property');
	}
	this.applicationOpenSettingsURL = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
iOS.prototype.fireEvent = function () {
};
iOS.prototype.createUserDefaults = function (params) {
	var UserDefaults = require('./iOS/UserDefaults');
	return UserDefaults(params);
};
iOS.prototype.cancelAllLocalNotifications = function () {
};
iOS.prototype.cancelLocalNotification = function () {
};
iOS.prototype.registerBackgroundService = function () {
	return {};
};
iOS.prototype.registerUserNotificationSettings = function () {
};
iOS.prototype.scheduleLocalNotification = function () {
	return {};
};
iOS.prototype.setMinimumBackgroundFetchInterval = function () {
};
iOS.prototype.endBackgroundHandler = function () {
};
iOS.prototype.sendWatchExtensionReply = function () {
};
iOS.prototype.createUserNotificationAction = function (params) {
	var UserNotificationAction = require('./iOS/UserNotificationAction');
	return UserNotificationAction(params);
};
iOS.prototype.createUserNotificationCategory = function (params) {
	var UserNotificationCategory = require('./iOS/UserNotificationCategory');
	return UserNotificationCategory(params);
};
iOS.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
iOS.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
iOS.prototype.getApiName = function () {
	return this.apiName;
};
iOS.prototype.getCurrentUserNotificationSettings = function () {
	return this.currentUserNotificationSettings;
};
iOS.prototype.getApplicationOpenSettingsURL = function () {
	return this.applicationOpenSettingsURL;
};
module.exports = function (properties) {
	return new iOS(properties);
};