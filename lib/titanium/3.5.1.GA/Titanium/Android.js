function Android(properties) {
	properties = properties || {};
	this.ACTION_AIRPLANE_MODE_CHANGED = properties.ACTION_AIRPLANE_MODE_CHANGED || undefined;
	this.ACTION_ALL_APPS = properties.ACTION_ALL_APPS || undefined;
	this.ACTION_ANSWER = properties.ACTION_ANSWER || undefined;
	this.ACTION_ATTACH_DATA = properties.ACTION_ATTACH_DATA || undefined;
	this.ACTION_BATTERY_CHANGED = properties.ACTION_BATTERY_CHANGED || undefined;
	this.ACTION_BATTERY_LOW = properties.ACTION_BATTERY_LOW || undefined;
	this.ACTION_BATTERY_OKAY = properties.ACTION_BATTERY_OKAY || undefined;
	this.ACTION_BOOT_COMPLETED = properties.ACTION_BOOT_COMPLETED || undefined;
	this.ACTION_BUG_REPORT = properties.ACTION_BUG_REPORT || undefined;
	this.ACTION_CALL = properties.ACTION_CALL || undefined;
	this.ACTION_CALL_BUTTON = properties.ACTION_CALL_BUTTON || undefined;
	this.ACTION_CAMERA_BUTTON = properties.ACTION_CAMERA_BUTTON || undefined;
	this.ACTION_CHOOSER = properties.ACTION_CHOOSER || undefined;
	this.ACTION_CLOSE_SYSTEM_DIALOGS = properties.ACTION_CLOSE_SYSTEM_DIALOGS || undefined;
	this.ACTION_CONFIGURATION_CHANGED = properties.ACTION_CONFIGURATION_CHANGED || undefined;
	this.ACTION_CREATE_SHORTCUT = properties.ACTION_CREATE_SHORTCUT || undefined;
	this.ACTION_DATE_CHANGED = properties.ACTION_DATE_CHANGED || undefined;
	this.ACTION_DEFAULT = properties.ACTION_DEFAULT || undefined;
	this.ACTION_DELETE = properties.ACTION_DELETE || undefined;
	this.ACTION_DEVICE_STORAGE_LOW = properties.ACTION_DEVICE_STORAGE_LOW || undefined;
	this.ACTION_DIAL = properties.ACTION_DIAL || undefined;
	this.ACTION_EDIT = properties.ACTION_EDIT || undefined;
	this.ACTION_GET_CONTENT = properties.ACTION_GET_CONTENT || undefined;
	this.ACTION_GTALK_SERVICE_CONNECTED = properties.ACTION_GTALK_SERVICE_CONNECTED || undefined;
	this.ACTION_GTALK_SERVICE_DISCONNECTED = properties.ACTION_GTALK_SERVICE_DISCONNECTED || undefined;
	this.ACTION_HEADSET_PLUG = properties.ACTION_HEADSET_PLUG || undefined;
	this.ACTION_INPUT_METHOD_CHANGED = properties.ACTION_INPUT_METHOD_CHANGED || undefined;
	this.ACTION_INSERT = properties.ACTION_INSERT || undefined;
	this.ACTION_INSERT_OR_EDIT = properties.ACTION_INSERT_OR_EDIT || undefined;
	this.ACTION_MAIN = properties.ACTION_MAIN || undefined;
	this.ACTION_MANAGE_PACKAGE_STORAGE = properties.ACTION_MANAGE_PACKAGE_STORAGE || undefined;
	this.ACTION_MEDIA_BAD_REMOVAL = properties.ACTION_MEDIA_BAD_REMOVAL || undefined;
	this.ACTION_MEDIA_BUTTON = properties.ACTION_MEDIA_BUTTON || undefined;
	this.ACTION_MEDIA_CHECKING = properties.ACTION_MEDIA_CHECKING || undefined;
	this.ACTION_MEDIA_EJECT = properties.ACTION_MEDIA_EJECT || undefined;
	this.ACTION_MEDIA_MOUNTED = properties.ACTION_MEDIA_MOUNTED || undefined;
	this.ACTION_MEDIA_NOFS = properties.ACTION_MEDIA_NOFS || undefined;
	this.ACTION_MEDIA_REMOVED = properties.ACTION_MEDIA_REMOVED || undefined;
	this.ACTION_MEDIA_SCANNER_FINISHED = properties.ACTION_MEDIA_SCANNER_FINISHED || undefined;
	this.ACTION_MEDIA_SCANNER_SCAN_FILE = properties.ACTION_MEDIA_SCANNER_SCAN_FILE || undefined;
	this.ACTION_MEDIA_SCANNER_STARTED = properties.ACTION_MEDIA_SCANNER_STARTED || undefined;
	this.ACTION_MEDIA_SHARED = properties.ACTION_MEDIA_SHARED || undefined;
	this.ACTION_MEDIA_UNMOUNTABLE = properties.ACTION_MEDIA_UNMOUNTABLE || undefined;
	this.ACTION_MEDIA_UNMOUNTED = properties.ACTION_MEDIA_UNMOUNTED || undefined;
	this.ACTION_NEW_OUTGOING_CALL = properties.ACTION_NEW_OUTGOING_CALL || undefined;
	this.ACTION_PACKAGE_ADDED = properties.ACTION_PACKAGE_ADDED || undefined;
	this.ACTION_PACKAGE_CHANGED = properties.ACTION_PACKAGE_CHANGED || undefined;
	this.ACTION_PACKAGE_DATA_CLEARED = properties.ACTION_PACKAGE_DATA_CLEARED || undefined;
	this.ACTION_PACKAGE_INSTALL = properties.ACTION_PACKAGE_INSTALL || undefined;
	this.ACTION_PACKAGE_REMOVED = properties.ACTION_PACKAGE_REMOVED || undefined;
	this.ACTION_PACKAGE_REPLACED = properties.ACTION_PACKAGE_REPLACED || undefined;
	this.ACTION_PACKAGE_RESTARTED = properties.ACTION_PACKAGE_RESTARTED || undefined;
	this.ACTION_PICK = properties.ACTION_PICK || undefined;
	this.ACTION_PICK_ACTIVITY = properties.ACTION_PICK_ACTIVITY || undefined;
	this.ACTION_POWER_CONNECTED = properties.ACTION_POWER_CONNECTED || undefined;
	this.ACTION_POWER_DISCONNECTED = properties.ACTION_POWER_DISCONNECTED || undefined;
	this.ACTION_POWER_USAGE_SUMMARY = properties.ACTION_POWER_USAGE_SUMMARY || undefined;
	this.ACTION_PROVIDER_CHANGED = properties.ACTION_PROVIDER_CHANGED || undefined;
	this.ACTION_REBOOT = properties.ACTION_REBOOT || undefined;
	this.ACTION_RUN = properties.ACTION_RUN || undefined;
	this.ACTION_SCREEN_OFF = properties.ACTION_SCREEN_OFF || undefined;
	this.ACTION_SCREEN_ON = properties.ACTION_SCREEN_ON || undefined;
	this.ACTION_SEARCH = properties.ACTION_SEARCH || undefined;
	this.ACTION_SEARCH_LONG_PRESS = properties.ACTION_SEARCH_LONG_PRESS || undefined;
	this.ACTION_SEND = properties.ACTION_SEND || undefined;
	this.ACTION_SENDTO = properties.ACTION_SENDTO || undefined;
	this.ACTION_SEND_MULTIPLE = properties.ACTION_SEND_MULTIPLE || undefined;
	this.ACTION_SET_WALLPAPER = properties.ACTION_SET_WALLPAPER || undefined;
	this.ACTION_SHUTDOWN = properties.ACTION_SHUTDOWN || undefined;
	this.ACTION_SYNC = properties.ACTION_SYNC || undefined;
	this.ACTION_SYSTEM_TUTORIAL = properties.ACTION_SYSTEM_TUTORIAL || undefined;
	this.ACTION_TIME_CHANGED = properties.ACTION_TIME_CHANGED || undefined;
	this.ACTION_TIME_TICK = properties.ACTION_TIME_TICK || undefined;
	this.ACTION_UID_REMOVED = properties.ACTION_UID_REMOVED || undefined;
	this.ACTION_UMS_CONNECTED = properties.ACTION_UMS_CONNECTED || undefined;
	this.ACTION_UMS_DISCONNECTED = properties.ACTION_UMS_DISCONNECTED || undefined;
	this.ACTION_USER_PRESENT = properties.ACTION_USER_PRESENT || undefined;
	this.ACTION_VIEW = properties.ACTION_VIEW || undefined;
	this.ACTION_VOICE_COMMAND = properties.ACTION_VOICE_COMMAND || undefined;
	this.ACTION_WALLPAPER_CHANGED = properties.ACTION_WALLPAPER_CHANGED || undefined;
	this.ACTION_WEB_SEARCH = properties.ACTION_WEB_SEARCH || undefined;
	this.CATEGORY_ALTERNATIVE = properties.CATEGORY_ALTERNATIVE || undefined;
	this.CATEGORY_BROWSABLE = properties.CATEGORY_BROWSABLE || undefined;
	this.CATEGORY_DEFAULT = properties.CATEGORY_DEFAULT || undefined;
	this.CATEGORY_DEVELOPMENT_PREFERENCE = properties.CATEGORY_DEVELOPMENT_PREFERENCE || undefined;
	this.CATEGORY_EMBED = properties.CATEGORY_EMBED || undefined;
	this.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = properties.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST || undefined;
	this.CATEGORY_HOME = properties.CATEGORY_HOME || undefined;
	this.CATEGORY_INFO = properties.CATEGORY_INFO || undefined;
	this.CATEGORY_LAUNCHER = properties.CATEGORY_LAUNCHER || undefined;
	this.CATEGORY_MONKEY = properties.CATEGORY_MONKEY || undefined;
	this.CATEGORY_OPENABLE = properties.CATEGORY_OPENABLE || undefined;
	this.CATEGORY_PREFERENCE = properties.CATEGORY_PREFERENCE || undefined;
	this.CATEGORY_SAMPLE_CODE = properties.CATEGORY_SAMPLE_CODE || undefined;
	this.CATEGORY_SELECTED_ALTERNATIVE = properties.CATEGORY_SELECTED_ALTERNATIVE || undefined;
	this.CATEGORY_TAB = properties.CATEGORY_TAB || undefined;
	this.CATEGORY_TEST = properties.CATEGORY_TEST || undefined;
	this.CATEGORY_UNIT_TEST = properties.CATEGORY_UNIT_TEST || undefined;
	this.DEFAULT_ALL = properties.DEFAULT_ALL || undefined;
	this.DEFAULT_LIGHTS = properties.DEFAULT_LIGHTS || undefined;
	this.DEFAULT_SOUND = properties.DEFAULT_SOUND || undefined;
	this.DEFAULT_VIBRATE = properties.DEFAULT_VIBRATE || undefined;
	this.EXTRA_ALARM_COUNT = properties.EXTRA_ALARM_COUNT || undefined;
	this.EXTRA_BCC = properties.EXTRA_BCC || undefined;
	this.EXTRA_CC = properties.EXTRA_CC || undefined;
	this.EXTRA_DATA_REMOVED = properties.EXTRA_DATA_REMOVED || undefined;
	this.EXTRA_DONT_KILL_APP = properties.EXTRA_DONT_KILL_APP || undefined;
	this.EXTRA_EMAIL = properties.EXTRA_EMAIL || undefined;
	this.EXTRA_INTENT = properties.EXTRA_INTENT || undefined;
	this.EXTRA_KEY_EVENT = properties.EXTRA_KEY_EVENT || undefined;
	this.EXTRA_PHONE_NUMBER = properties.EXTRA_PHONE_NUMBER || undefined;
	this.EXTRA_REPLACING = properties.EXTRA_REPLACING || undefined;
	this.EXTRA_SHORTCUT_ICON = properties.EXTRA_SHORTCUT_ICON || undefined;
	this.EXTRA_SHORTCUT_ICON_RESOURCE = properties.EXTRA_SHORTCUT_ICON_RESOURCE || undefined;
	this.EXTRA_SHORTCUT_INTENT = properties.EXTRA_SHORTCUT_INTENT || undefined;
	this.EXTRA_SHORTCUT_NAME = properties.EXTRA_SHORTCUT_NAME || undefined;
	this.EXTRA_STREAM = properties.EXTRA_STREAM || undefined;
	this.EXTRA_SUBJECT = properties.EXTRA_SUBJECT || undefined;
	this.EXTRA_TEMPLATE = properties.EXTRA_TEMPLATE || undefined;
	this.EXTRA_TEXT = properties.EXTRA_TEXT || undefined;
	this.EXTRA_TITLE = properties.EXTRA_TITLE || undefined;
	this.EXTRA_UID = properties.EXTRA_UID || undefined;
	this.FILL_IN_ACTION = properties.FILL_IN_ACTION || undefined;
	this.FILL_IN_CATEGORIES = properties.FILL_IN_CATEGORIES || undefined;
	this.FILL_IN_COMPONENT = properties.FILL_IN_COMPONENT || undefined;
	this.FILL_IN_DATA = properties.FILL_IN_DATA || undefined;
	this.FILL_IN_PACKAGE = properties.FILL_IN_PACKAGE || undefined;
	this.FLAG_ACTIVITY_BROUGHT_TO_FRONT = properties.FLAG_ACTIVITY_BROUGHT_TO_FRONT || undefined;
	this.FLAG_ACTIVITY_CLEAR_TOP = properties.FLAG_ACTIVITY_CLEAR_TOP || undefined;
	this.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = properties.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET || undefined;
	this.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = properties.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS || undefined;
	this.FLAG_ACTIVITY_FORWARD_RESULT = properties.FLAG_ACTIVITY_FORWARD_RESULT || undefined;
	this.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = properties.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY || undefined;
	this.FLAG_ACTIVITY_MULTIPLE_TASK = properties.FLAG_ACTIVITY_MULTIPLE_TASK || undefined;
	this.FLAG_ACTIVITY_NEW_TASK = properties.FLAG_ACTIVITY_NEW_TASK || undefined;
	this.FLAG_ACTIVITY_NO_ANIMATION = properties.FLAG_ACTIVITY_NO_ANIMATION || undefined;
	this.FLAG_ACTIVITY_NO_HISTORY = properties.FLAG_ACTIVITY_NO_HISTORY || undefined;
	this.FLAG_ACTIVITY_NO_USER_ACTION = properties.FLAG_ACTIVITY_NO_USER_ACTION || undefined;
	this.FLAG_ACTIVITY_PREVIOUS_IS_TOP = properties.FLAG_ACTIVITY_PREVIOUS_IS_TOP || undefined;
	this.FLAG_ACTIVITY_REORDER_TO_FRONT = properties.FLAG_ACTIVITY_REORDER_TO_FRONT || undefined;
	this.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = properties.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED || undefined;
	this.FLAG_ACTIVITY_SINGLE_TOP = properties.FLAG_ACTIVITY_SINGLE_TOP || undefined;
	this.FLAG_AUTO_CANCEL = properties.FLAG_AUTO_CANCEL || undefined;
	this.FLAG_CANCEL_CURRENT = properties.FLAG_CANCEL_CURRENT || undefined;
	this.FLAG_DEBUG_LOG_RESOLUTION = properties.FLAG_DEBUG_LOG_RESOLUTION || undefined;
	this.FLAG_FROM_BACKGROUND = properties.FLAG_FROM_BACKGROUND || undefined;
	this.FLAG_GRANT_READ_URI_PERMISSION = properties.FLAG_GRANT_READ_URI_PERMISSION || undefined;
	this.FLAG_GRANT_WRITE_URI_PERMISSION = properties.FLAG_GRANT_WRITE_URI_PERMISSION || undefined;
	this.FLAG_INSISTENT = properties.FLAG_INSISTENT || undefined;
	this.FLAG_NO_CLEAR = properties.FLAG_NO_CLEAR || undefined;
	this.FLAG_NO_CREATE = properties.FLAG_NO_CREATE || undefined;
	this.FLAG_ONE_SHOT = properties.FLAG_ONE_SHOT || undefined;
	this.FLAG_ONGOING_EVENT = properties.FLAG_ONGOING_EVENT || undefined;
	this.FLAG_ONLY_ALERT_ONCE = properties.FLAG_ONLY_ALERT_ONCE || undefined;
	this.FLAG_RECEIVER_REGISTERED_ONLY = properties.FLAG_RECEIVER_REGISTERED_ONLY || undefined;
	this.FLAG_SHOW_LIGHTS = properties.FLAG_SHOW_LIGHTS || undefined;
	this.FLAG_UPDATE_CURRENT = properties.FLAG_UPDATE_CURRENT || undefined;
	this.NAVIGATION_MODE_STANDARD = properties.NAVIGATION_MODE_STANDARD || undefined;
	this.NAVIGATION_MODE_TABS = properties.NAVIGATION_MODE_TABS || undefined;
	this.PENDING_INTENT_FOR_ACTIVITY = properties.PENDING_INTENT_FOR_ACTIVITY || undefined;
	this.PENDING_INTENT_FOR_BROADCAST = properties.PENDING_INTENT_FOR_BROADCAST || undefined;
	this.PENDING_INTENT_FOR_SERVICE = properties.PENDING_INTENT_FOR_SERVICE || undefined;
	this.PENDING_INTENT_MAX_VALUE = properties.PENDING_INTENT_MAX_VALUE || undefined;
	this.R = properties.R || undefined;
	this.RESULT_CANCELED = properties.RESULT_CANCELED || undefined;
	this.RESULT_FIRST_USER = properties.RESULT_FIRST_USER || undefined;
	this.RESULT_OK = properties.RESULT_OK || undefined;
	this.SCREEN_ORIENTATION_BEHIND = properties.SCREEN_ORIENTATION_BEHIND || undefined;
	this.SCREEN_ORIENTATION_LANDSCAPE = properties.SCREEN_ORIENTATION_LANDSCAPE || undefined;
	this.SCREEN_ORIENTATION_NOSENSOR = properties.SCREEN_ORIENTATION_NOSENSOR || undefined;
	this.SCREEN_ORIENTATION_PORTRAIT = properties.SCREEN_ORIENTATION_PORTRAIT || undefined;
	this.SCREEN_ORIENTATION_SENSOR = properties.SCREEN_ORIENTATION_SENSOR || undefined;
	this.SCREEN_ORIENTATION_UNSPECIFIED = properties.SCREEN_ORIENTATION_UNSPECIFIED || undefined;
	this.SCREEN_ORIENTATION_USER = properties.SCREEN_ORIENTATION_USER || undefined;
	this.SHOW_AS_ACTION_ALWAYS = properties.SHOW_AS_ACTION_ALWAYS || undefined;
	this.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = properties.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW || undefined;
	this.SHOW_AS_ACTION_IF_ROOM = properties.SHOW_AS_ACTION_IF_ROOM || undefined;
	this.SHOW_AS_ACTION_NEVER = properties.SHOW_AS_ACTION_NEVER || undefined;
	this.SHOW_AS_ACTION_WITH_TEXT = properties.SHOW_AS_ACTION_WITH_TEXT || undefined;
	this.START_NOT_STICKY = properties.START_NOT_STICKY || undefined;
	this.START_REDELIVER_INTENT = properties.START_REDELIVER_INTENT || undefined;
	this.STREAM_ALARM = properties.STREAM_ALARM || undefined;
	this.STREAM_DEFAULT = properties.STREAM_DEFAULT || undefined;
	this.STREAM_MUSIC = properties.STREAM_MUSIC || undefined;
	this.STREAM_NOTIFICATION = properties.STREAM_NOTIFICATION || undefined;
	this.STREAM_RING = properties.STREAM_RING || undefined;
	this.STREAM_SYSTEM = properties.STREAM_SYSTEM || undefined;
	this.STREAM_VOICE_CALL = properties.STREAM_VOICE_CALL || undefined;
	this.URI_INTENT_SCHEME = properties.URI_INTENT_SCHEME || undefined;
	this.apiName = 'Titanium.Android';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentActivity = properties.currentActivity || undefined;
	this.currentService = properties.currentService || undefined;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.createBroadcastIntent = function (params) {
	var BroadcastIntent = require('./Android/BroadcastIntent');
	return BroadcastIntent(params);
};
Android.prototype.createBroadcastReceiver = function (params) {
	var BroadcastReceiver = require('./Android/BroadcastReceiver');
	return BroadcastReceiver(params);
};
Android.prototype.createIntent = function (params) {
	var Intent = require('./Android/Intent');
	return Intent(params);
};
Android.prototype.createIntentChooser = function (params) {
	var IntentChooser = require('./Android/IntentChooser');
	return IntentChooser(params);
};
Android.prototype.createNotification = function (params) {
	var Notification = require('./Android/Notification');
	return Notification(params);
};
Android.prototype.createPendingIntent = function (params) {
	var PendingIntent = require('./Android/PendingIntent');
	return PendingIntent(params);
};
Android.prototype.createRemoteViews = function (params) {
	var RemoteViews = require('./Android/RemoteViews');
	return RemoteViews(params);
};
Android.prototype.createService = function (params) {
	var Service = require('./Android/Service');
	return Service(params);
};
Android.prototype.createServiceIntent = function (params) {
	var ServiceIntent = require('./Android/ServiceIntent');
	return ServiceIntent(params);
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getCurrentActivity = function () {
	return this.currentActivity;
};
Android.prototype.getCurrentService = function () {
	return this.currentService;
};
Android.prototype.isServiceRunning = function () {
	return true;
};
Android.prototype.registerBroadcastReceiver = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Android.prototype.startService = function () {
};
Android.prototype.stopService = function () {
};
Android.prototype.unregisterBroadcastReceiver = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};