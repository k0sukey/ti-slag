function iOS(properties) {
	properties = properties || {};

	this.BACKGROUNDFETCHINTERVAL_MIN = properties.BACKGROUNDFETCHINTERVAL_MIN || undefined;
	this.BACKGROUNDFETCHINTERVAL_NEVER = properties.BACKGROUNDFETCHINTERVAL_NEVER || undefined;
	this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = properties.EVENT_ACCESSIBILITY_LAYOUT_CHANGED || undefined;
	this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = properties.EVENT_ACCESSIBILITY_SCREEN_CHANGED || undefined;
	this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND || undefined;
	this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND || undefined;
	this.USER_NOTIFICATION_TYPE_ALERT = properties.USER_NOTIFICATION_TYPE_ALERT || undefined;
	this.USER_NOTIFICATION_TYPE_BADGE = properties.USER_NOTIFICATION_TYPE_BADGE || undefined;
	this.USER_NOTIFICATION_TYPE_NONE = properties.USER_NOTIFICATION_TYPE_NONE || undefined;
	this.USER_NOTIFICATION_TYPE_SOUND = properties.USER_NOTIFICATION_TYPE_SOUND || undefined;
	this.apiName = 'Titanium.App.iOS';
	this.applicationOpenSettingsURL = properties.applicationOpenSettingsURL || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentUserNotificationSettings = properties.currentUserNotificationSettings || undefined;

	return this;
}

iOS.prototype.addEventListener = function(){};

iOS.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

iOS.prototype.cancelAllLocalNotifications = function(){};

iOS.prototype.cancelLocalNotification = function(){};

iOS.prototype.createUserDefaults = function(params){ var UserDefaults = require('./iOS/UserDefaults'); return UserDefaults(params); };

iOS.prototype.createUserNotificationAction = function(params){ var UserNotificationAction = require('./iOS/UserNotificationAction'); return UserNotificationAction(params); };

iOS.prototype.createUserNotificationCategory = function(params){ var UserNotificationCategory = require('./iOS/UserNotificationCategory'); return UserNotificationCategory(params); };

iOS.prototype.endBackgroundHandler = function(){};

iOS.prototype.fireEvent = function(){};

iOS.prototype.getApiName = function(){ return this.apiName; };

iOS.prototype.getApplicationOpenSettingsURL = function(){ return this.applicationOpenSettingsURL; };

iOS.prototype.getBubbleParent = function(){ return this.bubbleParent; };

iOS.prototype.registerBackgroundService = function(){ return {}; };

iOS.prototype.registerUserNotificationSettings = function(){};

iOS.prototype.removeEventListener = function(){};

iOS.prototype.scheduleLocalNotification = function(){ return {}; };

iOS.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

iOS.prototype.setMinimumBackgroundFetchInterval = function(){};

module.exports = function(properties){ return new iOS(properties); };