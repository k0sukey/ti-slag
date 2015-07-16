function iOS(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App.iOS';
	this.EVENT_ACCESSIBILITY_LAYOUT_CHANGED = properties.EVENT_ACCESSIBILITY_LAYOUT_CHANGED || '';
	this.EVENT_ACCESSIBILITY_SCREEN_CHANGED = properties.EVENT_ACCESSIBILITY_SCREEN_CHANGED || '';
	this.BACKGROUNDFETCHINTERVAL_MIN = properties.BACKGROUNDFETCHINTERVAL_MIN || 0;
	this.BACKGROUNDFETCHINTERVAL_NEVER = properties.BACKGROUNDFETCHINTERVAL_NEVER || 0;
	this.USER_NOTIFICATION_TYPE_NONE = properties.USER_NOTIFICATION_TYPE_NONE || 0;
	this.USER_NOTIFICATION_TYPE_BADGE = properties.USER_NOTIFICATION_TYPE_BADGE || 0;
	this.USER_NOTIFICATION_TYPE_SOUND = properties.USER_NOTIFICATION_TYPE_SOUND || 0;
	this.USER_NOTIFICATION_TYPE_ALERT = properties.USER_NOTIFICATION_TYPE_ALERT || 0;
	this.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND || 0;
	this.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND = properties.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND || 0;
	this.currentUserNotificationSettings = properties.currentUserNotificationSettings || {};
	this.applicationOpenSettingsURL = properties.applicationOpenSettingsURL || '';
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
iOS.prototype.setBubbleParent = function () {
};
iOS.prototype.getApiName = function () {
	return '';
};
iOS.prototype.getCurrentUserNotificationSettings = function () {
	return {};
};
iOS.prototype.getApplicationOpenSettingsURL = function () {
	return '';
};
module.exports = function (properties) {
	return new iOS(properties);
};