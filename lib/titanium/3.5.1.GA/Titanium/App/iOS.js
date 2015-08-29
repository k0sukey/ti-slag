var crypto = require('crypto');
function iOS(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'BACKGROUNDFETCHINTERVAL_MIN',
			'BACKGROUNDFETCHINTERVAL_NEVER',
			'EVENT_ACCESSIBILITY_LAYOUT_CHANGED',
			'EVENT_ACCESSIBILITY_SCREEN_CHANGED',
			'USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND',
			'USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND',
			'USER_NOTIFICATION_TYPE_ALERT',
			'USER_NOTIFICATION_TYPE_BADGE',
			'USER_NOTIFICATION_TYPE_NONE',
			'USER_NOTIFICATION_TYPE_SOUND',
			'apiName',
			'applicationOpenSettingsURL',
			'bubbleParent',
			'currentUserNotificationSettings',
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
	if (__SLAG_PROPERTIES.BACKGROUNDFETCHINTERVAL_MIN) {
		throw new Error('Ti.App.iOS.BACKGROUNDFETCHINTERVAL_MIN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BACKGROUNDFETCHINTERVAL_MIN = undefined;
	} else {
		this.BACKGROUNDFETCHINTERVAL_MIN = 0;
	}
	if (__SLAG_PROPERTIES.BACKGROUNDFETCHINTERVAL_NEVER) {
		throw new Error('Ti.App.iOS.BACKGROUNDFETCHINTERVAL_NEVER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BACKGROUNDFETCHINTERVAL_NEVER = undefined;
	} else {
		this.BACKGROUNDFETCHINTERVAL_NEVER = 0;
	}
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_LAYOUT_CHANGED) {
		throw new Error('Ti.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = undefined;
	} else {
		this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_SCREEN_CHANGED) {
		throw new Error('Ti.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = undefined;
	} else {
		this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = undefined;
	} else {
		this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = undefined;
	} else {
		this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_ALERT) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_ALERT = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_ALERT = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_BADGE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_BADGE = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_BADGE = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_NONE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_NONE = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_SOUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_SOUND = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_SOUND = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS';
	if (__SLAG_PROPERTIES.applicationOpenSettingsURL) {
		throw new Error('Ti.App.iOS.applicationOpenSettingsURL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationOpenSettingsURL = undefined;
	} else {
		this.applicationOpenSettingsURL = '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.currentUserNotificationSettings) {
		throw new Error('Ti.App.iOS.currentUserNotificationSettings is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentUserNotificationSettings = undefined;
	} else {
		this.currentUserNotificationSettings = {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iOS.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
iOS.prototype.cancelAllLocalNotifications = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.cancelLocalNotification = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.createUserNotificationAction = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var UserNotificationAction = require('./iOS/UserNotificationAction');
	return UserNotificationAction(__SLAG_PROPERTY);
};
iOS.prototype.createUserNotificationCategory = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var UserNotificationCategory = require('./iOS/UserNotificationCategory');
	return UserNotificationCategory(__SLAG_PROPERTY);
};
iOS.prototype.endBackgroundHandler = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
iOS.prototype.getApplicationOpenSettingsURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationOpenSettingsURL;
};
iOS.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iOS.prototype.getCurrentUserNotificationSettings = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.currentUserNotificationSettings;
};
iOS.prototype.registerBackgroundService = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
iOS.prototype.registerUserNotificationSettings = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.scheduleLocalNotification = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
iOS.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
iOS.prototype.setMinimumBackgroundFetchInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new iOS(properties);
};