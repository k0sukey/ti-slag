function iOS(properties) {
	properties = properties || {};
	this.BACKGROUNDFETCHINTERVAL_MIN = properties.BACKGROUNDFETCHINTERVAL_MIN || 0;
	this.BACKGROUNDFETCHINTERVAL_NEVER = properties.BACKGROUNDFETCHINTERVAL_NEVER || 0;
	this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = properties.EVENT_ACCESSIBILITY_LAYOUT_CHANGED || '';
	this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = properties.EVENT_ACCESSIBILITY_SCREEN_CHANGED || '';
	this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND || 0;
	this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND || 0;
	this.USER_NOTIFICATION_TYPE_ALERT = properties.USER_NOTIFICATION_TYPE_ALERT || 0;
	this.USER_NOTIFICATION_TYPE_BADGE = properties.USER_NOTIFICATION_TYPE_BADGE || 0;
	this.USER_NOTIFICATION_TYPE_NONE = properties.USER_NOTIFICATION_TYPE_NONE || 0;
	this.USER_NOTIFICATION_TYPE_SOUND = properties.USER_NOTIFICATION_TYPE_SOUND || 0;
	this.apiName = 'Ti.App.iOS';
	this.applicationOpenSettingsURL = properties.applicationOpenSettingsURL || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.currentUserNotificationSettings = properties.currentUserNotificationSettings || {};
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
iOS.prototype.cancelAllLocalNotifications = function () {
};
iOS.prototype.cancelLocalNotification = function () {
};
iOS.prototype.createUserNotificationAction = function (params) {
	var UserNotificationAction = require('./iOS/UserNotificationAction');
	return UserNotificationAction(params);
};
iOS.prototype.createUserNotificationCategory = function (params) {
	var UserNotificationCategory = require('./iOS/UserNotificationCategory');
	return UserNotificationCategory(params);
};
iOS.prototype.endBackgroundHandler = function () {
};
iOS.prototype.fireEvent = function () {
};
iOS.prototype.getApiName = function () {
	return '';
};
iOS.prototype.getApplicationOpenSettingsURL = function () {
	return '';
};
iOS.prototype.getBubbleParent = function () {
	return true;
};
iOS.prototype.getCurrentUserNotificationSettings = function () {
	return {};
};
iOS.prototype.registerBackgroundService = function () {
	return {};
};
iOS.prototype.registerUserNotificationSettings = function () {
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.scheduleLocalNotification = function () {
	return {};
};
iOS.prototype.setBubbleParent = function () {
};
iOS.prototype.setMinimumBackgroundFetchInterval = function () {
};
module.exports = function (properties) {
	return new iOS(properties);
};