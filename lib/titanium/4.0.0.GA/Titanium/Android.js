function Android(properties) {
	properties = properties || {};
	this.ACTION_AIRPLANE_MODE_CHANGED = properties.ACTION_AIRPLANE_MODE_CHANGED || '';
	this.ACTION_ALL_APPS = properties.ACTION_ALL_APPS || '';
	this.ACTION_ANSWER = properties.ACTION_ANSWER || '';
	this.ACTION_ATTACH_DATA = properties.ACTION_ATTACH_DATA || '';
	this.ACTION_BATTERY_CHANGED = properties.ACTION_BATTERY_CHANGED || '';
	this.ACTION_BATTERY_LOW = properties.ACTION_BATTERY_LOW || '';
	this.ACTION_BATTERY_OKAY = properties.ACTION_BATTERY_OKAY || '';
	this.ACTION_BOOT_COMPLETED = properties.ACTION_BOOT_COMPLETED || '';
	this.ACTION_BUG_REPORT = properties.ACTION_BUG_REPORT || '';
	this.ACTION_CALL = properties.ACTION_CALL || '';
	this.ACTION_CALL_BUTTON = properties.ACTION_CALL_BUTTON || '';
	this.ACTION_CAMERA_BUTTON = properties.ACTION_CAMERA_BUTTON || '';
	this.ACTION_CHOOSER = properties.ACTION_CHOOSER || '';
	this.ACTION_CLOSE_SYSTEM_DIALOGS = properties.ACTION_CLOSE_SYSTEM_DIALOGS || '';
	this.ACTION_CONFIGURATION_CHANGED = properties.ACTION_CONFIGURATION_CHANGED || '';
	this.ACTION_CREATE_SHORTCUT = properties.ACTION_CREATE_SHORTCUT || '';
	this.ACTION_DATE_CHANGED = properties.ACTION_DATE_CHANGED || '';
	this.ACTION_DEFAULT = properties.ACTION_DEFAULT || '';
	this.ACTION_DELETE = properties.ACTION_DELETE || '';
	this.ACTION_DEVICE_STORAGE_LOW = properties.ACTION_DEVICE_STORAGE_LOW || '';
	this.ACTION_DIAL = properties.ACTION_DIAL || '';
	this.ACTION_EDIT = properties.ACTION_EDIT || '';
	this.ACTION_GET_CONTENT = properties.ACTION_GET_CONTENT || '';
	this.ACTION_GTALK_SERVICE_CONNECTED = properties.ACTION_GTALK_SERVICE_CONNECTED || '';
	this.ACTION_GTALK_SERVICE_DISCONNECTED = properties.ACTION_GTALK_SERVICE_DISCONNECTED || '';
	this.ACTION_HEADSET_PLUG = properties.ACTION_HEADSET_PLUG || '';
	this.ACTION_INPUT_METHOD_CHANGED = properties.ACTION_INPUT_METHOD_CHANGED || '';
	this.ACTION_INSERT = properties.ACTION_INSERT || '';
	this.ACTION_INSERT_OR_EDIT = properties.ACTION_INSERT_OR_EDIT || '';
	this.ACTION_MAIN = properties.ACTION_MAIN || '';
	this.ACTION_MANAGE_PACKAGE_STORAGE = properties.ACTION_MANAGE_PACKAGE_STORAGE || '';
	this.ACTION_MEDIA_BAD_REMOVAL = properties.ACTION_MEDIA_BAD_REMOVAL || '';
	this.ACTION_MEDIA_BUTTON = properties.ACTION_MEDIA_BUTTON || '';
	this.ACTION_MEDIA_CHECKING = properties.ACTION_MEDIA_CHECKING || '';
	this.ACTION_MEDIA_EJECT = properties.ACTION_MEDIA_EJECT || '';
	this.ACTION_MEDIA_MOUNTED = properties.ACTION_MEDIA_MOUNTED || '';
	this.ACTION_MEDIA_NOFS = properties.ACTION_MEDIA_NOFS || '';
	this.ACTION_MEDIA_REMOVED = properties.ACTION_MEDIA_REMOVED || '';
	this.ACTION_MEDIA_SCANNER_FINISHED = properties.ACTION_MEDIA_SCANNER_FINISHED || '';
	this.ACTION_MEDIA_SCANNER_SCAN_FILE = properties.ACTION_MEDIA_SCANNER_SCAN_FILE || '';
	this.ACTION_MEDIA_SCANNER_STARTED = properties.ACTION_MEDIA_SCANNER_STARTED || '';
	this.ACTION_MEDIA_SHARED = properties.ACTION_MEDIA_SHARED || '';
	this.ACTION_MEDIA_UNMOUNTABLE = properties.ACTION_MEDIA_UNMOUNTABLE || '';
	this.ACTION_MEDIA_UNMOUNTED = properties.ACTION_MEDIA_UNMOUNTED || '';
	this.ACTION_NEW_OUTGOING_CALL = properties.ACTION_NEW_OUTGOING_CALL || '';
	this.ACTION_PACKAGE_ADDED = properties.ACTION_PACKAGE_ADDED || '';
	this.ACTION_PACKAGE_CHANGED = properties.ACTION_PACKAGE_CHANGED || '';
	this.ACTION_PACKAGE_DATA_CLEARED = properties.ACTION_PACKAGE_DATA_CLEARED || '';
	this.ACTION_PACKAGE_INSTALL = properties.ACTION_PACKAGE_INSTALL || '';
	this.ACTION_PACKAGE_REMOVED = properties.ACTION_PACKAGE_REMOVED || '';
	this.ACTION_PACKAGE_REPLACED = properties.ACTION_PACKAGE_REPLACED || '';
	this.ACTION_PACKAGE_RESTARTED = properties.ACTION_PACKAGE_RESTARTED || '';
	this.ACTION_PICK = properties.ACTION_PICK || '';
	this.ACTION_PICK_ACTIVITY = properties.ACTION_PICK_ACTIVITY || '';
	this.ACTION_POWER_CONNECTED = properties.ACTION_POWER_CONNECTED || '';
	this.ACTION_POWER_DISCONNECTED = properties.ACTION_POWER_DISCONNECTED || '';
	this.ACTION_POWER_USAGE_SUMMARY = properties.ACTION_POWER_USAGE_SUMMARY || '';
	this.ACTION_PROVIDER_CHANGED = properties.ACTION_PROVIDER_CHANGED || '';
	this.ACTION_REBOOT = properties.ACTION_REBOOT || '';
	this.ACTION_RUN = properties.ACTION_RUN || '';
	this.ACTION_SCREEN_OFF = properties.ACTION_SCREEN_OFF || '';
	this.ACTION_SCREEN_ON = properties.ACTION_SCREEN_ON || '';
	this.ACTION_SEARCH = properties.ACTION_SEARCH || '';
	this.ACTION_SEARCH_LONG_PRESS = properties.ACTION_SEARCH_LONG_PRESS || '';
	this.ACTION_SEND = properties.ACTION_SEND || '';
	this.ACTION_SENDTO = properties.ACTION_SENDTO || '';
	this.ACTION_SEND_MULTIPLE = properties.ACTION_SEND_MULTIPLE || '';
	this.ACTION_SET_WALLPAPER = properties.ACTION_SET_WALLPAPER || '';
	this.ACTION_SHUTDOWN = properties.ACTION_SHUTDOWN || '';
	this.ACTION_SYNC = properties.ACTION_SYNC || '';
	this.ACTION_SYSTEM_TUTORIAL = properties.ACTION_SYSTEM_TUTORIAL || '';
	this.ACTION_TIME_CHANGED = properties.ACTION_TIME_CHANGED || '';
	this.ACTION_TIME_TICK = properties.ACTION_TIME_TICK || '';
	this.ACTION_UID_REMOVED = properties.ACTION_UID_REMOVED || '';
	this.ACTION_UMS_CONNECTED = properties.ACTION_UMS_CONNECTED || '';
	this.ACTION_UMS_DISCONNECTED = properties.ACTION_UMS_DISCONNECTED || '';
	this.ACTION_USER_PRESENT = properties.ACTION_USER_PRESENT || '';
	this.ACTION_VIEW = properties.ACTION_VIEW || '';
	this.ACTION_VOICE_COMMAND = properties.ACTION_VOICE_COMMAND || '';
	this.ACTION_WALLPAPER_CHANGED = properties.ACTION_WALLPAPER_CHANGED || '';
	this.ACTION_WEB_SEARCH = properties.ACTION_WEB_SEARCH || '';
	this.CATEGORY_ALARM = properties.CATEGORY_ALARM || '';
	this.CATEGORY_ALTERNATIVE = properties.CATEGORY_ALTERNATIVE || '';
	this.CATEGORY_BROWSABLE = properties.CATEGORY_BROWSABLE || '';
	this.CATEGORY_CALL = properties.CATEGORY_CALL || '';
	this.CATEGORY_DEFAULT = properties.CATEGORY_DEFAULT || '';
	this.CATEGORY_DEVELOPMENT_PREFERENCE = properties.CATEGORY_DEVELOPMENT_PREFERENCE || '';
	this.CATEGORY_EMAIL = properties.CATEGORY_EMAIL || '';
	this.CATEGORY_EMBED = properties.CATEGORY_EMBED || '';
	this.CATEGORY_ERROR = properties.CATEGORY_ERROR || '';
	this.CATEGORY_EVENT = properties.CATEGORY_EVENT || '';
	this.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = properties.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST || '';
	this.CATEGORY_HOME = properties.CATEGORY_HOME || '';
	this.CATEGORY_INFO = properties.CATEGORY_INFO || '';
	this.CATEGORY_LAUNCHER = properties.CATEGORY_LAUNCHER || '';
	this.CATEGORY_MESSAGE = properties.CATEGORY_MESSAGE || '';
	this.CATEGORY_MONKEY = properties.CATEGORY_MONKEY || '';
	this.CATEGORY_OPENABLE = properties.CATEGORY_OPENABLE || '';
	this.CATEGORY_PREFERENCE = properties.CATEGORY_PREFERENCE || '';
	this.CATEGORY_PROGRESS = properties.CATEGORY_PROGRESS || '';
	this.CATEGORY_PROMO = properties.CATEGORY_PROMO || '';
	this.CATEGORY_RECOMMENDATION = properties.CATEGORY_RECOMMENDATION || '';
	this.CATEGORY_SAMPLE_CODE = properties.CATEGORY_SAMPLE_CODE || '';
	this.CATEGORY_SELECTED_ALTERNATIVE = properties.CATEGORY_SELECTED_ALTERNATIVE || '';
	this.CATEGORY_SERVICE = properties.CATEGORY_SERVICE || '';
	this.CATEGORY_SOCIAL = properties.CATEGORY_SOCIAL || '';
	this.CATEGORY_STATUS = properties.CATEGORY_STATUS || '';
	this.CATEGORY_TAB = properties.CATEGORY_TAB || '';
	this.CATEGORY_TEST = properties.CATEGORY_TEST || '';
	this.CATEGORY_TRANSPORT = properties.CATEGORY_TRANSPORT || '';
	this.CATEGORY_UNIT_TEST = properties.CATEGORY_UNIT_TEST || '';
	this.DEFAULT_ALL = properties.DEFAULT_ALL || 0;
	this.DEFAULT_LIGHTS = properties.DEFAULT_LIGHTS || 0;
	this.DEFAULT_SOUND = properties.DEFAULT_SOUND || 0;
	this.DEFAULT_VIBRATE = properties.DEFAULT_VIBRATE || 0;
	this.EXTRA_ALARM_COUNT = properties.EXTRA_ALARM_COUNT || '';
	this.EXTRA_BCC = properties.EXTRA_BCC || '';
	this.EXTRA_CC = properties.EXTRA_CC || '';
	this.EXTRA_DATA_REMOVED = properties.EXTRA_DATA_REMOVED || '';
	this.EXTRA_DONT_KILL_APP = properties.EXTRA_DONT_KILL_APP || '';
	this.EXTRA_EMAIL = properties.EXTRA_EMAIL || '';
	this.EXTRA_INTENT = properties.EXTRA_INTENT || '';
	this.EXTRA_KEY_EVENT = properties.EXTRA_KEY_EVENT || '';
	this.EXTRA_PHONE_NUMBER = properties.EXTRA_PHONE_NUMBER || '';
	this.EXTRA_REPLACING = properties.EXTRA_REPLACING || '';
	this.EXTRA_SHORTCUT_ICON = properties.EXTRA_SHORTCUT_ICON || '';
	this.EXTRA_SHORTCUT_ICON_RESOURCE = properties.EXTRA_SHORTCUT_ICON_RESOURCE || '';
	this.EXTRA_SHORTCUT_INTENT = properties.EXTRA_SHORTCUT_INTENT || '';
	this.EXTRA_SHORTCUT_NAME = properties.EXTRA_SHORTCUT_NAME || '';
	this.EXTRA_STREAM = properties.EXTRA_STREAM || '';
	this.EXTRA_SUBJECT = properties.EXTRA_SUBJECT || '';
	this.EXTRA_TEMPLATE = properties.EXTRA_TEMPLATE || '';
	this.EXTRA_TEXT = properties.EXTRA_TEXT || '';
	this.EXTRA_TITLE = properties.EXTRA_TITLE || '';
	this.EXTRA_UID = properties.EXTRA_UID || '';
	this.FILL_IN_ACTION = properties.FILL_IN_ACTION || 0;
	this.FILL_IN_CATEGORIES = properties.FILL_IN_CATEGORIES || 0;
	this.FILL_IN_COMPONENT = properties.FILL_IN_COMPONENT || 0;
	this.FILL_IN_DATA = properties.FILL_IN_DATA || 0;
	this.FILL_IN_PACKAGE = properties.FILL_IN_PACKAGE || 0;
	this.FLAG_ACTIVITY_BROUGHT_TO_FRONT = properties.FLAG_ACTIVITY_BROUGHT_TO_FRONT || 0;
	this.FLAG_ACTIVITY_CLEAR_TOP = properties.FLAG_ACTIVITY_CLEAR_TOP || 0;
	this.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = properties.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET || 0;
	this.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = properties.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS || 0;
	this.FLAG_ACTIVITY_FORWARD_RESULT = properties.FLAG_ACTIVITY_FORWARD_RESULT || 0;
	this.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = properties.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY || 0;
	this.FLAG_ACTIVITY_MULTIPLE_TASK = properties.FLAG_ACTIVITY_MULTIPLE_TASK || 0;
	this.FLAG_ACTIVITY_NEW_TASK = properties.FLAG_ACTIVITY_NEW_TASK || 0;
	this.FLAG_ACTIVITY_NO_ANIMATION = properties.FLAG_ACTIVITY_NO_ANIMATION || 0;
	this.FLAG_ACTIVITY_NO_HISTORY = properties.FLAG_ACTIVITY_NO_HISTORY || 0;
	this.FLAG_ACTIVITY_NO_USER_ACTION = properties.FLAG_ACTIVITY_NO_USER_ACTION || 0;
	this.FLAG_ACTIVITY_PREVIOUS_IS_TOP = properties.FLAG_ACTIVITY_PREVIOUS_IS_TOP || 0;
	this.FLAG_ACTIVITY_REORDER_TO_FRONT = properties.FLAG_ACTIVITY_REORDER_TO_FRONT || 0;
	this.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = properties.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED || 0;
	this.FLAG_ACTIVITY_SINGLE_TOP = properties.FLAG_ACTIVITY_SINGLE_TOP || 0;
	this.FLAG_AUTO_CANCEL = properties.FLAG_AUTO_CANCEL || 0;
	this.FLAG_CANCEL_CURRENT = properties.FLAG_CANCEL_CURRENT || 0;
	this.FLAG_DEBUG_LOG_RESOLUTION = properties.FLAG_DEBUG_LOG_RESOLUTION || 0;
	this.FLAG_FROM_BACKGROUND = properties.FLAG_FROM_BACKGROUND || 0;
	this.FLAG_GRANT_READ_URI_PERMISSION = properties.FLAG_GRANT_READ_URI_PERMISSION || 0;
	this.FLAG_GRANT_WRITE_URI_PERMISSION = properties.FLAG_GRANT_WRITE_URI_PERMISSION || 0;
	this.FLAG_INSISTENT = properties.FLAG_INSISTENT || 0;
	this.FLAG_NO_CLEAR = properties.FLAG_NO_CLEAR || 0;
	this.FLAG_NO_CREATE = properties.FLAG_NO_CREATE || 0;
	this.FLAG_ONE_SHOT = properties.FLAG_ONE_SHOT || 0;
	this.FLAG_ONGOING_EVENT = properties.FLAG_ONGOING_EVENT || 0;
	this.FLAG_ONLY_ALERT_ONCE = properties.FLAG_ONLY_ALERT_ONCE || 0;
	this.FLAG_RECEIVER_REGISTERED_ONLY = properties.FLAG_RECEIVER_REGISTERED_ONLY || 0;
	this.FLAG_SHOW_LIGHTS = properties.FLAG_SHOW_LIGHTS || 0;
	this.FLAG_UPDATE_CURRENT = properties.FLAG_UPDATE_CURRENT || 0;
	this.NAVIGATION_MODE_STANDARD = properties.NAVIGATION_MODE_STANDARD || 0;
	this.NAVIGATION_MODE_TABS = properties.NAVIGATION_MODE_TABS || 0;
	if (properties.PENDING_INTENT_FOR_ACTIVITY) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_ACTIVITY was deprecated, since 2.0.0');
	}
	if (properties.PENDING_INTENT_FOR_BROADCAST) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_BROADCAST was deprecated, since 2.0.0');
	}
	if (properties.PENDING_INTENT_FOR_SERVICE) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_SERVICE was deprecated, since 2.0.0');
	}
	if (properties.PENDING_INTENT_MAX_VALUE) {
		throw new Error('Ti.Android.PENDING_INTENT_MAX_VALUE was deprecated, since 2.0.0');
	}
	this.PRIORITY_DEFAULT = properties.PRIORITY_DEFAULT || 0;
	this.PRIORITY_HIGH = properties.PRIORITY_HIGH || 0;
	this.PRIORITY_LOW = properties.PRIORITY_LOW || 0;
	this.PRIORITY_MAX = properties.PRIORITY_MAX || 0;
	this.PRIORITY_MIN = properties.PRIORITY_MIN || 0;
	this.R = properties.R || {};
	this.RESULT_CANCELED = properties.RESULT_CANCELED || 0;
	this.RESULT_FIRST_USER = properties.RESULT_FIRST_USER || 0;
	this.RESULT_OK = properties.RESULT_OK || 0;
	this.SCREEN_ORIENTATION_BEHIND = properties.SCREEN_ORIENTATION_BEHIND || 0;
	this.SCREEN_ORIENTATION_LANDSCAPE = properties.SCREEN_ORIENTATION_LANDSCAPE || 0;
	this.SCREEN_ORIENTATION_NOSENSOR = properties.SCREEN_ORIENTATION_NOSENSOR || 0;
	this.SCREEN_ORIENTATION_PORTRAIT = properties.SCREEN_ORIENTATION_PORTRAIT || 0;
	this.SCREEN_ORIENTATION_SENSOR = properties.SCREEN_ORIENTATION_SENSOR || 0;
	this.SCREEN_ORIENTATION_UNSPECIFIED = properties.SCREEN_ORIENTATION_UNSPECIFIED || 0;
	this.SCREEN_ORIENTATION_USER = properties.SCREEN_ORIENTATION_USER || 0;
	this.SHOW_AS_ACTION_ALWAYS = properties.SHOW_AS_ACTION_ALWAYS || 0;
	this.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = properties.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW || 0;
	this.SHOW_AS_ACTION_IF_ROOM = properties.SHOW_AS_ACTION_IF_ROOM || 0;
	this.SHOW_AS_ACTION_NEVER = properties.SHOW_AS_ACTION_NEVER || 0;
	this.SHOW_AS_ACTION_WITH_TEXT = properties.SHOW_AS_ACTION_WITH_TEXT || 0;
	this.START_NOT_STICKY = properties.START_NOT_STICKY || 0;
	this.START_REDELIVER_INTENT = properties.START_REDELIVER_INTENT || 0;
	this.STREAM_ALARM = properties.STREAM_ALARM || 0;
	this.STREAM_DEFAULT = properties.STREAM_DEFAULT || 0;
	this.STREAM_MUSIC = properties.STREAM_MUSIC || 0;
	this.STREAM_NOTIFICATION = properties.STREAM_NOTIFICATION || 0;
	this.STREAM_RING = properties.STREAM_RING || 0;
	this.STREAM_SYSTEM = properties.STREAM_SYSTEM || 0;
	this.STREAM_VOICE_CALL = properties.STREAM_VOICE_CALL || 0;
	this.URI_INTENT_SCHEME = properties.URI_INTENT_SCHEME || 0;
	this.VISIBILITY_PRIVATE = properties.VISIBILITY_PRIVATE || 0;
	this.VISIBILITY_PUBLIC = properties.VISIBILITY_PUBLIC || 0;
	this.VISIBILITY_SECRET = properties.VISIBILITY_SECRET || 0;
	this.apiName = 'Ti.Android';
	this.bubbleParent = properties.bubbleParent || true;
	this.currentActivity = properties.currentActivity || {};
	this.currentService = properties.currentService || {};
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.isServiceRunning = function () {
	return true;
};
Android.prototype.registerBroadcastReceiver = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setLifecycleContainer = function () {
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