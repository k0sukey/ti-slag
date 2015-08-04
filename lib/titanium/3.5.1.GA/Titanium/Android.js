var crypto = require('crypto');
function Android(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ACTION_AIRPLANE_MODE_CHANGED',
			'ACTION_ALL_APPS',
			'ACTION_ANSWER',
			'ACTION_ATTACH_DATA',
			'ACTION_BATTERY_CHANGED',
			'ACTION_BATTERY_LOW',
			'ACTION_BATTERY_OKAY',
			'ACTION_BOOT_COMPLETED',
			'ACTION_BUG_REPORT',
			'ACTION_CALL',
			'ACTION_CALL_BUTTON',
			'ACTION_CAMERA_BUTTON',
			'ACTION_CHOOSER',
			'ACTION_CLOSE_SYSTEM_DIALOGS',
			'ACTION_CONFIGURATION_CHANGED',
			'ACTION_CREATE_SHORTCUT',
			'ACTION_DATE_CHANGED',
			'ACTION_DEFAULT',
			'ACTION_DELETE',
			'ACTION_DEVICE_STORAGE_LOW',
			'ACTION_DIAL',
			'ACTION_EDIT',
			'ACTION_GET_CONTENT',
			'ACTION_GTALK_SERVICE_CONNECTED',
			'ACTION_GTALK_SERVICE_DISCONNECTED',
			'ACTION_HEADSET_PLUG',
			'ACTION_INPUT_METHOD_CHANGED',
			'ACTION_INSERT',
			'ACTION_INSERT_OR_EDIT',
			'ACTION_MAIN',
			'ACTION_MANAGE_PACKAGE_STORAGE',
			'ACTION_MEDIA_BAD_REMOVAL',
			'ACTION_MEDIA_BUTTON',
			'ACTION_MEDIA_CHECKING',
			'ACTION_MEDIA_EJECT',
			'ACTION_MEDIA_MOUNTED',
			'ACTION_MEDIA_NOFS',
			'ACTION_MEDIA_REMOVED',
			'ACTION_MEDIA_SCANNER_FINISHED',
			'ACTION_MEDIA_SCANNER_SCAN_FILE',
			'ACTION_MEDIA_SCANNER_STARTED',
			'ACTION_MEDIA_SHARED',
			'ACTION_MEDIA_UNMOUNTABLE',
			'ACTION_MEDIA_UNMOUNTED',
			'ACTION_NEW_OUTGOING_CALL',
			'ACTION_PACKAGE_ADDED',
			'ACTION_PACKAGE_CHANGED',
			'ACTION_PACKAGE_DATA_CLEARED',
			'ACTION_PACKAGE_INSTALL',
			'ACTION_PACKAGE_REMOVED',
			'ACTION_PACKAGE_REPLACED',
			'ACTION_PACKAGE_RESTARTED',
			'ACTION_PICK',
			'ACTION_PICK_ACTIVITY',
			'ACTION_POWER_CONNECTED',
			'ACTION_POWER_DISCONNECTED',
			'ACTION_POWER_USAGE_SUMMARY',
			'ACTION_PROVIDER_CHANGED',
			'ACTION_REBOOT',
			'ACTION_RUN',
			'ACTION_SCREEN_OFF',
			'ACTION_SCREEN_ON',
			'ACTION_SEARCH',
			'ACTION_SEARCH_LONG_PRESS',
			'ACTION_SEND',
			'ACTION_SENDTO',
			'ACTION_SEND_MULTIPLE',
			'ACTION_SET_WALLPAPER',
			'ACTION_SHUTDOWN',
			'ACTION_SYNC',
			'ACTION_SYSTEM_TUTORIAL',
			'ACTION_TIME_CHANGED',
			'ACTION_TIME_TICK',
			'ACTION_UID_REMOVED',
			'ACTION_UMS_CONNECTED',
			'ACTION_UMS_DISCONNECTED',
			'ACTION_USER_PRESENT',
			'ACTION_VIEW',
			'ACTION_VOICE_COMMAND',
			'ACTION_WALLPAPER_CHANGED',
			'ACTION_WEB_SEARCH',
			'CATEGORY_ALTERNATIVE',
			'CATEGORY_BROWSABLE',
			'CATEGORY_DEFAULT',
			'CATEGORY_DEVELOPMENT_PREFERENCE',
			'CATEGORY_EMBED',
			'CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST',
			'CATEGORY_HOME',
			'CATEGORY_INFO',
			'CATEGORY_LAUNCHER',
			'CATEGORY_MONKEY',
			'CATEGORY_OPENABLE',
			'CATEGORY_PREFERENCE',
			'CATEGORY_SAMPLE_CODE',
			'CATEGORY_SELECTED_ALTERNATIVE',
			'CATEGORY_TAB',
			'CATEGORY_TEST',
			'CATEGORY_UNIT_TEST',
			'DEFAULT_ALL',
			'DEFAULT_LIGHTS',
			'DEFAULT_SOUND',
			'DEFAULT_VIBRATE',
			'EXTRA_ALARM_COUNT',
			'EXTRA_BCC',
			'EXTRA_CC',
			'EXTRA_DATA_REMOVED',
			'EXTRA_DONT_KILL_APP',
			'EXTRA_EMAIL',
			'EXTRA_INTENT',
			'EXTRA_KEY_EVENT',
			'EXTRA_PHONE_NUMBER',
			'EXTRA_REPLACING',
			'EXTRA_SHORTCUT_ICON',
			'EXTRA_SHORTCUT_ICON_RESOURCE',
			'EXTRA_SHORTCUT_INTENT',
			'EXTRA_SHORTCUT_NAME',
			'EXTRA_STREAM',
			'EXTRA_SUBJECT',
			'EXTRA_TEMPLATE',
			'EXTRA_TEXT',
			'EXTRA_TITLE',
			'EXTRA_UID',
			'FILL_IN_ACTION',
			'FILL_IN_CATEGORIES',
			'FILL_IN_COMPONENT',
			'FILL_IN_DATA',
			'FILL_IN_PACKAGE',
			'FLAG_ACTIVITY_BROUGHT_TO_FRONT',
			'FLAG_ACTIVITY_CLEAR_TOP',
			'FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET',
			'FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS',
			'FLAG_ACTIVITY_FORWARD_RESULT',
			'FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY',
			'FLAG_ACTIVITY_MULTIPLE_TASK',
			'FLAG_ACTIVITY_NEW_TASK',
			'FLAG_ACTIVITY_NO_ANIMATION',
			'FLAG_ACTIVITY_NO_HISTORY',
			'FLAG_ACTIVITY_NO_USER_ACTION',
			'FLAG_ACTIVITY_PREVIOUS_IS_TOP',
			'FLAG_ACTIVITY_REORDER_TO_FRONT',
			'FLAG_ACTIVITY_RESET_TASK_IF_NEEDED',
			'FLAG_ACTIVITY_SINGLE_TOP',
			'FLAG_AUTO_CANCEL',
			'FLAG_CANCEL_CURRENT',
			'FLAG_DEBUG_LOG_RESOLUTION',
			'FLAG_FROM_BACKGROUND',
			'FLAG_GRANT_READ_URI_PERMISSION',
			'FLAG_GRANT_WRITE_URI_PERMISSION',
			'FLAG_INSISTENT',
			'FLAG_NO_CLEAR',
			'FLAG_NO_CREATE',
			'FLAG_ONE_SHOT',
			'FLAG_ONGOING_EVENT',
			'FLAG_ONLY_ALERT_ONCE',
			'FLAG_RECEIVER_REGISTERED_ONLY',
			'FLAG_SHOW_LIGHTS',
			'FLAG_UPDATE_CURRENT',
			'NAVIGATION_MODE_STANDARD',
			'NAVIGATION_MODE_TABS',
			'PENDING_INTENT_FOR_ACTIVITY',
			'PENDING_INTENT_FOR_BROADCAST',
			'PENDING_INTENT_FOR_SERVICE',
			'PENDING_INTENT_MAX_VALUE',
			'R',
			'RESULT_CANCELED',
			'RESULT_FIRST_USER',
			'RESULT_OK',
			'SCREEN_ORIENTATION_BEHIND',
			'SCREEN_ORIENTATION_LANDSCAPE',
			'SCREEN_ORIENTATION_NOSENSOR',
			'SCREEN_ORIENTATION_PORTRAIT',
			'SCREEN_ORIENTATION_SENSOR',
			'SCREEN_ORIENTATION_UNSPECIFIED',
			'SCREEN_ORIENTATION_USER',
			'SHOW_AS_ACTION_ALWAYS',
			'SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW',
			'SHOW_AS_ACTION_IF_ROOM',
			'SHOW_AS_ACTION_NEVER',
			'SHOW_AS_ACTION_WITH_TEXT',
			'START_NOT_STICKY',
			'START_REDELIVER_INTENT',
			'STREAM_ALARM',
			'STREAM_DEFAULT',
			'STREAM_MUSIC',
			'STREAM_NOTIFICATION',
			'STREAM_RING',
			'STREAM_SYSTEM',
			'STREAM_VOICE_CALL',
			'URI_INTENT_SCHEME',
			'apiName',
			'bubbleParent',
			'currentActivity',
			'currentService',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.ACTION_AIRPLANE_MODE_CHANGED) {
		throw new Error('Ti.Android.ACTION_AIRPLANE_MODE_CHANGED is read only property');
	}
	this.ACTION_AIRPLANE_MODE_CHANGED = '';
	if (__SLAG__properties.ACTION_ALL_APPS) {
		throw new Error('Ti.Android.ACTION_ALL_APPS is read only property');
	}
	this.ACTION_ALL_APPS = '';
	if (__SLAG__properties.ACTION_ANSWER) {
		throw new Error('Ti.Android.ACTION_ANSWER is read only property');
	}
	this.ACTION_ANSWER = '';
	if (__SLAG__properties.ACTION_ATTACH_DATA) {
		throw new Error('Ti.Android.ACTION_ATTACH_DATA is read only property');
	}
	this.ACTION_ATTACH_DATA = '';
	if (__SLAG__properties.ACTION_BATTERY_CHANGED) {
		throw new Error('Ti.Android.ACTION_BATTERY_CHANGED is read only property');
	}
	this.ACTION_BATTERY_CHANGED = '';
	if (__SLAG__properties.ACTION_BATTERY_LOW) {
		throw new Error('Ti.Android.ACTION_BATTERY_LOW is read only property');
	}
	this.ACTION_BATTERY_LOW = '';
	if (__SLAG__properties.ACTION_BATTERY_OKAY) {
		throw new Error('Ti.Android.ACTION_BATTERY_OKAY is read only property');
	}
	this.ACTION_BATTERY_OKAY = '';
	if (__SLAG__properties.ACTION_BOOT_COMPLETED) {
		throw new Error('Ti.Android.ACTION_BOOT_COMPLETED is read only property');
	}
	this.ACTION_BOOT_COMPLETED = '';
	if (__SLAG__properties.ACTION_BUG_REPORT) {
		throw new Error('Ti.Android.ACTION_BUG_REPORT is read only property');
	}
	this.ACTION_BUG_REPORT = '';
	if (__SLAG__properties.ACTION_CALL) {
		throw new Error('Ti.Android.ACTION_CALL is read only property');
	}
	this.ACTION_CALL = '';
	if (__SLAG__properties.ACTION_CALL_BUTTON) {
		throw new Error('Ti.Android.ACTION_CALL_BUTTON is read only property');
	}
	this.ACTION_CALL_BUTTON = '';
	if (__SLAG__properties.ACTION_CAMERA_BUTTON) {
		throw new Error('Ti.Android.ACTION_CAMERA_BUTTON is read only property');
	}
	this.ACTION_CAMERA_BUTTON = '';
	if (__SLAG__properties.ACTION_CHOOSER) {
		throw new Error('Ti.Android.ACTION_CHOOSER is read only property');
	}
	this.ACTION_CHOOSER = '';
	if (__SLAG__properties.ACTION_CLOSE_SYSTEM_DIALOGS) {
		throw new Error('Ti.Android.ACTION_CLOSE_SYSTEM_DIALOGS is read only property');
	}
	this.ACTION_CLOSE_SYSTEM_DIALOGS = '';
	if (__SLAG__properties.ACTION_CONFIGURATION_CHANGED) {
		throw new Error('Ti.Android.ACTION_CONFIGURATION_CHANGED is read only property');
	}
	this.ACTION_CONFIGURATION_CHANGED = '';
	if (__SLAG__properties.ACTION_CREATE_SHORTCUT) {
		throw new Error('Ti.Android.ACTION_CREATE_SHORTCUT is read only property');
	}
	this.ACTION_CREATE_SHORTCUT = '';
	if (__SLAG__properties.ACTION_DATE_CHANGED) {
		throw new Error('Ti.Android.ACTION_DATE_CHANGED is read only property');
	}
	this.ACTION_DATE_CHANGED = '';
	if (__SLAG__properties.ACTION_DEFAULT) {
		throw new Error('Ti.Android.ACTION_DEFAULT is read only property');
	}
	this.ACTION_DEFAULT = '';
	if (__SLAG__properties.ACTION_DELETE) {
		throw new Error('Ti.Android.ACTION_DELETE is read only property');
	}
	this.ACTION_DELETE = '';
	if (__SLAG__properties.ACTION_DEVICE_STORAGE_LOW) {
		throw new Error('Ti.Android.ACTION_DEVICE_STORAGE_LOW is read only property');
	}
	this.ACTION_DEVICE_STORAGE_LOW = '';
	if (__SLAG__properties.ACTION_DIAL) {
		throw new Error('Ti.Android.ACTION_DIAL is read only property');
	}
	this.ACTION_DIAL = '';
	if (__SLAG__properties.ACTION_EDIT) {
		throw new Error('Ti.Android.ACTION_EDIT is read only property');
	}
	this.ACTION_EDIT = '';
	if (__SLAG__properties.ACTION_GET_CONTENT) {
		throw new Error('Ti.Android.ACTION_GET_CONTENT is read only property');
	}
	this.ACTION_GET_CONTENT = '';
	if (__SLAG__properties.ACTION_GTALK_SERVICE_CONNECTED) {
		throw new Error('Ti.Android.ACTION_GTALK_SERVICE_CONNECTED is read only property');
	}
	this.ACTION_GTALK_SERVICE_CONNECTED = '';
	if (__SLAG__properties.ACTION_GTALK_SERVICE_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_GTALK_SERVICE_DISCONNECTED is read only property');
	}
	this.ACTION_GTALK_SERVICE_DISCONNECTED = '';
	if (__SLAG__properties.ACTION_HEADSET_PLUG) {
		throw new Error('Ti.Android.ACTION_HEADSET_PLUG is read only property');
	}
	this.ACTION_HEADSET_PLUG = '';
	if (__SLAG__properties.ACTION_INPUT_METHOD_CHANGED) {
		throw new Error('Ti.Android.ACTION_INPUT_METHOD_CHANGED is read only property');
	}
	this.ACTION_INPUT_METHOD_CHANGED = '';
	if (__SLAG__properties.ACTION_INSERT) {
		throw new Error('Ti.Android.ACTION_INSERT is read only property');
	}
	this.ACTION_INSERT = '';
	if (__SLAG__properties.ACTION_INSERT_OR_EDIT) {
		throw new Error('Ti.Android.ACTION_INSERT_OR_EDIT is read only property');
	}
	this.ACTION_INSERT_OR_EDIT = '';
	if (__SLAG__properties.ACTION_MAIN) {
		throw new Error('Ti.Android.ACTION_MAIN is read only property');
	}
	this.ACTION_MAIN = '';
	if (__SLAG__properties.ACTION_MANAGE_PACKAGE_STORAGE) {
		throw new Error('Ti.Android.ACTION_MANAGE_PACKAGE_STORAGE is read only property');
	}
	this.ACTION_MANAGE_PACKAGE_STORAGE = '';
	if (__SLAG__properties.ACTION_MEDIA_BAD_REMOVAL) {
		throw new Error('Ti.Android.ACTION_MEDIA_BAD_REMOVAL is read only property');
	}
	this.ACTION_MEDIA_BAD_REMOVAL = '';
	if (__SLAG__properties.ACTION_MEDIA_BUTTON) {
		throw new Error('Ti.Android.ACTION_MEDIA_BUTTON is read only property');
	}
	this.ACTION_MEDIA_BUTTON = '';
	if (__SLAG__properties.ACTION_MEDIA_CHECKING) {
		throw new Error('Ti.Android.ACTION_MEDIA_CHECKING is read only property');
	}
	this.ACTION_MEDIA_CHECKING = '';
	if (__SLAG__properties.ACTION_MEDIA_EJECT) {
		throw new Error('Ti.Android.ACTION_MEDIA_EJECT is read only property');
	}
	this.ACTION_MEDIA_EJECT = '';
	if (__SLAG__properties.ACTION_MEDIA_MOUNTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_MOUNTED is read only property');
	}
	this.ACTION_MEDIA_MOUNTED = '';
	if (__SLAG__properties.ACTION_MEDIA_NOFS) {
		throw new Error('Ti.Android.ACTION_MEDIA_NOFS is read only property');
	}
	this.ACTION_MEDIA_NOFS = '';
	if (__SLAG__properties.ACTION_MEDIA_REMOVED) {
		throw new Error('Ti.Android.ACTION_MEDIA_REMOVED is read only property');
	}
	this.ACTION_MEDIA_REMOVED = '';
	if (__SLAG__properties.ACTION_MEDIA_SCANNER_FINISHED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_FINISHED is read only property');
	}
	this.ACTION_MEDIA_SCANNER_FINISHED = '';
	if (__SLAG__properties.ACTION_MEDIA_SCANNER_SCAN_FILE) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_SCAN_FILE is read only property');
	}
	this.ACTION_MEDIA_SCANNER_SCAN_FILE = '';
	if (__SLAG__properties.ACTION_MEDIA_SCANNER_STARTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_STARTED is read only property');
	}
	this.ACTION_MEDIA_SCANNER_STARTED = '';
	if (__SLAG__properties.ACTION_MEDIA_SHARED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SHARED is read only property');
	}
	this.ACTION_MEDIA_SHARED = '';
	if (__SLAG__properties.ACTION_MEDIA_UNMOUNTABLE) {
		throw new Error('Ti.Android.ACTION_MEDIA_UNMOUNTABLE is read only property');
	}
	this.ACTION_MEDIA_UNMOUNTABLE = '';
	if (__SLAG__properties.ACTION_MEDIA_UNMOUNTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_UNMOUNTED is read only property');
	}
	this.ACTION_MEDIA_UNMOUNTED = '';
	if (__SLAG__properties.ACTION_NEW_OUTGOING_CALL) {
		throw new Error('Ti.Android.ACTION_NEW_OUTGOING_CALL is read only property');
	}
	this.ACTION_NEW_OUTGOING_CALL = '';
	if (__SLAG__properties.ACTION_PACKAGE_ADDED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_ADDED is read only property');
	}
	this.ACTION_PACKAGE_ADDED = '';
	if (__SLAG__properties.ACTION_PACKAGE_CHANGED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_CHANGED is read only property');
	}
	this.ACTION_PACKAGE_CHANGED = '';
	if (__SLAG__properties.ACTION_PACKAGE_DATA_CLEARED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_DATA_CLEARED is read only property');
	}
	this.ACTION_PACKAGE_DATA_CLEARED = '';
	if (__SLAG__properties.ACTION_PACKAGE_INSTALL) {
		throw new Error('Ti.Android.ACTION_PACKAGE_INSTALL is read only property');
	}
	this.ACTION_PACKAGE_INSTALL = '';
	if (__SLAG__properties.ACTION_PACKAGE_REMOVED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_REMOVED is read only property');
	}
	this.ACTION_PACKAGE_REMOVED = '';
	if (__SLAG__properties.ACTION_PACKAGE_REPLACED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_REPLACED is read only property');
	}
	this.ACTION_PACKAGE_REPLACED = '';
	if (__SLAG__properties.ACTION_PACKAGE_RESTARTED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_RESTARTED is read only property');
	}
	this.ACTION_PACKAGE_RESTARTED = '';
	if (__SLAG__properties.ACTION_PICK) {
		throw new Error('Ti.Android.ACTION_PICK is read only property');
	}
	this.ACTION_PICK = '';
	if (__SLAG__properties.ACTION_PICK_ACTIVITY) {
		throw new Error('Ti.Android.ACTION_PICK_ACTIVITY is read only property');
	}
	this.ACTION_PICK_ACTIVITY = '';
	if (__SLAG__properties.ACTION_POWER_CONNECTED) {
		throw new Error('Ti.Android.ACTION_POWER_CONNECTED is read only property');
	}
	this.ACTION_POWER_CONNECTED = '';
	if (__SLAG__properties.ACTION_POWER_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_POWER_DISCONNECTED is read only property');
	}
	this.ACTION_POWER_DISCONNECTED = '';
	if (__SLAG__properties.ACTION_POWER_USAGE_SUMMARY) {
		throw new Error('Ti.Android.ACTION_POWER_USAGE_SUMMARY is read only property');
	}
	this.ACTION_POWER_USAGE_SUMMARY = '';
	if (__SLAG__properties.ACTION_PROVIDER_CHANGED) {
		throw new Error('Ti.Android.ACTION_PROVIDER_CHANGED is read only property');
	}
	this.ACTION_PROVIDER_CHANGED = '';
	if (__SLAG__properties.ACTION_REBOOT) {
		throw new Error('Ti.Android.ACTION_REBOOT is read only property');
	}
	this.ACTION_REBOOT = '';
	if (__SLAG__properties.ACTION_RUN) {
		throw new Error('Ti.Android.ACTION_RUN is read only property');
	}
	this.ACTION_RUN = '';
	if (__SLAG__properties.ACTION_SCREEN_OFF) {
		throw new Error('Ti.Android.ACTION_SCREEN_OFF is read only property');
	}
	this.ACTION_SCREEN_OFF = '';
	if (__SLAG__properties.ACTION_SCREEN_ON) {
		throw new Error('Ti.Android.ACTION_SCREEN_ON is read only property');
	}
	this.ACTION_SCREEN_ON = '';
	if (__SLAG__properties.ACTION_SEARCH) {
		throw new Error('Ti.Android.ACTION_SEARCH is read only property');
	}
	this.ACTION_SEARCH = '';
	if (__SLAG__properties.ACTION_SEARCH_LONG_PRESS) {
		throw new Error('Ti.Android.ACTION_SEARCH_LONG_PRESS is read only property');
	}
	this.ACTION_SEARCH_LONG_PRESS = '';
	if (__SLAG__properties.ACTION_SEND) {
		throw new Error('Ti.Android.ACTION_SEND is read only property');
	}
	this.ACTION_SEND = '';
	if (__SLAG__properties.ACTION_SENDTO) {
		throw new Error('Ti.Android.ACTION_SENDTO is read only property');
	}
	this.ACTION_SENDTO = '';
	if (__SLAG__properties.ACTION_SEND_MULTIPLE) {
		throw new Error('Ti.Android.ACTION_SEND_MULTIPLE is read only property');
	}
	this.ACTION_SEND_MULTIPLE = '';
	if (__SLAG__properties.ACTION_SET_WALLPAPER) {
		throw new Error('Ti.Android.ACTION_SET_WALLPAPER is read only property');
	}
	this.ACTION_SET_WALLPAPER = '';
	if (__SLAG__properties.ACTION_SHUTDOWN) {
		throw new Error('Ti.Android.ACTION_SHUTDOWN is read only property');
	}
	this.ACTION_SHUTDOWN = '';
	if (__SLAG__properties.ACTION_SYNC) {
		throw new Error('Ti.Android.ACTION_SYNC is read only property');
	}
	this.ACTION_SYNC = '';
	if (__SLAG__properties.ACTION_SYSTEM_TUTORIAL) {
		throw new Error('Ti.Android.ACTION_SYSTEM_TUTORIAL is read only property');
	}
	this.ACTION_SYSTEM_TUTORIAL = '';
	if (__SLAG__properties.ACTION_TIME_CHANGED) {
		throw new Error('Ti.Android.ACTION_TIME_CHANGED is read only property');
	}
	this.ACTION_TIME_CHANGED = '';
	if (__SLAG__properties.ACTION_TIME_TICK) {
		throw new Error('Ti.Android.ACTION_TIME_TICK is read only property');
	}
	this.ACTION_TIME_TICK = '';
	if (__SLAG__properties.ACTION_UID_REMOVED) {
		throw new Error('Ti.Android.ACTION_UID_REMOVED is read only property');
	}
	this.ACTION_UID_REMOVED = '';
	if (__SLAG__properties.ACTION_UMS_CONNECTED) {
		throw new Error('Ti.Android.ACTION_UMS_CONNECTED is read only property');
	}
	this.ACTION_UMS_CONNECTED = '';
	if (__SLAG__properties.ACTION_UMS_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_UMS_DISCONNECTED is read only property');
	}
	this.ACTION_UMS_DISCONNECTED = '';
	if (__SLAG__properties.ACTION_USER_PRESENT) {
		throw new Error('Ti.Android.ACTION_USER_PRESENT is read only property');
	}
	this.ACTION_USER_PRESENT = '';
	if (__SLAG__properties.ACTION_VIEW) {
		throw new Error('Ti.Android.ACTION_VIEW is read only property');
	}
	this.ACTION_VIEW = '';
	if (__SLAG__properties.ACTION_VOICE_COMMAND) {
		throw new Error('Ti.Android.ACTION_VOICE_COMMAND is read only property');
	}
	this.ACTION_VOICE_COMMAND = '';
	if (__SLAG__properties.ACTION_WALLPAPER_CHANGED) {
		throw new Error('Ti.Android.ACTION_WALLPAPER_CHANGED is read only property');
	}
	this.ACTION_WALLPAPER_CHANGED = '';
	if (__SLAG__properties.ACTION_WEB_SEARCH) {
		throw new Error('Ti.Android.ACTION_WEB_SEARCH is read only property');
	}
	this.ACTION_WEB_SEARCH = '';
	if (__SLAG__properties.CATEGORY_ALTERNATIVE) {
		throw new Error('Ti.Android.CATEGORY_ALTERNATIVE is read only property');
	}
	this.CATEGORY_ALTERNATIVE = '';
	if (__SLAG__properties.CATEGORY_BROWSABLE) {
		throw new Error('Ti.Android.CATEGORY_BROWSABLE is read only property');
	}
	this.CATEGORY_BROWSABLE = '';
	if (__SLAG__properties.CATEGORY_DEFAULT) {
		throw new Error('Ti.Android.CATEGORY_DEFAULT is read only property');
	}
	this.CATEGORY_DEFAULT = '';
	if (__SLAG__properties.CATEGORY_DEVELOPMENT_PREFERENCE) {
		throw new Error('Ti.Android.CATEGORY_DEVELOPMENT_PREFERENCE is read only property');
	}
	this.CATEGORY_DEVELOPMENT_PREFERENCE = '';
	if (__SLAG__properties.CATEGORY_EMBED) {
		throw new Error('Ti.Android.CATEGORY_EMBED is read only property');
	}
	this.CATEGORY_EMBED = '';
	if (__SLAG__properties.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST) {
		throw new Error('Ti.Android.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST is read only property');
	}
	this.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = '';
	if (__SLAG__properties.CATEGORY_HOME) {
		throw new Error('Ti.Android.CATEGORY_HOME is read only property');
	}
	this.CATEGORY_HOME = '';
	if (__SLAG__properties.CATEGORY_INFO) {
		throw new Error('Ti.Android.CATEGORY_INFO is read only property');
	}
	this.CATEGORY_INFO = '';
	if (__SLAG__properties.CATEGORY_LAUNCHER) {
		throw new Error('Ti.Android.CATEGORY_LAUNCHER is read only property');
	}
	this.CATEGORY_LAUNCHER = '';
	if (__SLAG__properties.CATEGORY_MONKEY) {
		throw new Error('Ti.Android.CATEGORY_MONKEY is read only property');
	}
	this.CATEGORY_MONKEY = '';
	if (__SLAG__properties.CATEGORY_OPENABLE) {
		throw new Error('Ti.Android.CATEGORY_OPENABLE is read only property');
	}
	this.CATEGORY_OPENABLE = '';
	if (__SLAG__properties.CATEGORY_PREFERENCE) {
		throw new Error('Ti.Android.CATEGORY_PREFERENCE is read only property');
	}
	this.CATEGORY_PREFERENCE = '';
	if (__SLAG__properties.CATEGORY_SAMPLE_CODE) {
		throw new Error('Ti.Android.CATEGORY_SAMPLE_CODE is read only property');
	}
	this.CATEGORY_SAMPLE_CODE = '';
	if (__SLAG__properties.CATEGORY_SELECTED_ALTERNATIVE) {
		throw new Error('Ti.Android.CATEGORY_SELECTED_ALTERNATIVE is read only property');
	}
	this.CATEGORY_SELECTED_ALTERNATIVE = '';
	if (__SLAG__properties.CATEGORY_TAB) {
		throw new Error('Ti.Android.CATEGORY_TAB is read only property');
	}
	this.CATEGORY_TAB = '';
	if (__SLAG__properties.CATEGORY_TEST) {
		throw new Error('Ti.Android.CATEGORY_TEST is read only property');
	}
	this.CATEGORY_TEST = '';
	if (__SLAG__properties.CATEGORY_UNIT_TEST) {
		throw new Error('Ti.Android.CATEGORY_UNIT_TEST is read only property');
	}
	this.CATEGORY_UNIT_TEST = '';
	if (__SLAG__properties.DEFAULT_ALL) {
		throw new Error('Ti.Android.DEFAULT_ALL is read only property');
	}
	this.DEFAULT_ALL = 0;
	if (__SLAG__properties.DEFAULT_LIGHTS) {
		throw new Error('Ti.Android.DEFAULT_LIGHTS is read only property');
	}
	this.DEFAULT_LIGHTS = 0;
	if (__SLAG__properties.DEFAULT_SOUND) {
		throw new Error('Ti.Android.DEFAULT_SOUND is read only property');
	}
	this.DEFAULT_SOUND = 0;
	if (__SLAG__properties.DEFAULT_VIBRATE) {
		throw new Error('Ti.Android.DEFAULT_VIBRATE is read only property');
	}
	this.DEFAULT_VIBRATE = 0;
	if (__SLAG__properties.EXTRA_ALARM_COUNT) {
		throw new Error('Ti.Android.EXTRA_ALARM_COUNT is read only property');
	}
	this.EXTRA_ALARM_COUNT = '';
	if (__SLAG__properties.EXTRA_BCC) {
		throw new Error('Ti.Android.EXTRA_BCC is read only property');
	}
	this.EXTRA_BCC = '';
	if (__SLAG__properties.EXTRA_CC) {
		throw new Error('Ti.Android.EXTRA_CC is read only property');
	}
	this.EXTRA_CC = '';
	if (__SLAG__properties.EXTRA_DATA_REMOVED) {
		throw new Error('Ti.Android.EXTRA_DATA_REMOVED is read only property');
	}
	this.EXTRA_DATA_REMOVED = '';
	if (__SLAG__properties.EXTRA_DONT_KILL_APP) {
		throw new Error('Ti.Android.EXTRA_DONT_KILL_APP is read only property');
	}
	this.EXTRA_DONT_KILL_APP = '';
	if (__SLAG__properties.EXTRA_EMAIL) {
		throw new Error('Ti.Android.EXTRA_EMAIL is read only property');
	}
	this.EXTRA_EMAIL = '';
	if (__SLAG__properties.EXTRA_INTENT) {
		throw new Error('Ti.Android.EXTRA_INTENT is read only property');
	}
	this.EXTRA_INTENT = '';
	if (__SLAG__properties.EXTRA_KEY_EVENT) {
		throw new Error('Ti.Android.EXTRA_KEY_EVENT is read only property');
	}
	this.EXTRA_KEY_EVENT = '';
	if (__SLAG__properties.EXTRA_PHONE_NUMBER) {
		throw new Error('Ti.Android.EXTRA_PHONE_NUMBER is read only property');
	}
	this.EXTRA_PHONE_NUMBER = '';
	if (__SLAG__properties.EXTRA_REPLACING) {
		throw new Error('Ti.Android.EXTRA_REPLACING is read only property');
	}
	this.EXTRA_REPLACING = '';
	if (__SLAG__properties.EXTRA_SHORTCUT_ICON) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_ICON is read only property');
	}
	this.EXTRA_SHORTCUT_ICON = '';
	if (__SLAG__properties.EXTRA_SHORTCUT_ICON_RESOURCE) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_ICON_RESOURCE is read only property');
	}
	this.EXTRA_SHORTCUT_ICON_RESOURCE = '';
	if (__SLAG__properties.EXTRA_SHORTCUT_INTENT) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_INTENT is read only property');
	}
	this.EXTRA_SHORTCUT_INTENT = '';
	if (__SLAG__properties.EXTRA_SHORTCUT_NAME) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_NAME is read only property');
	}
	this.EXTRA_SHORTCUT_NAME = '';
	if (__SLAG__properties.EXTRA_STREAM) {
		throw new Error('Ti.Android.EXTRA_STREAM is read only property');
	}
	this.EXTRA_STREAM = '';
	if (__SLAG__properties.EXTRA_SUBJECT) {
		throw new Error('Ti.Android.EXTRA_SUBJECT is read only property');
	}
	this.EXTRA_SUBJECT = '';
	if (__SLAG__properties.EXTRA_TEMPLATE) {
		throw new Error('Ti.Android.EXTRA_TEMPLATE is read only property');
	}
	this.EXTRA_TEMPLATE = '';
	if (__SLAG__properties.EXTRA_TEXT) {
		throw new Error('Ti.Android.EXTRA_TEXT is read only property');
	}
	this.EXTRA_TEXT = '';
	if (__SLAG__properties.EXTRA_TITLE) {
		throw new Error('Ti.Android.EXTRA_TITLE is read only property');
	}
	this.EXTRA_TITLE = '';
	if (__SLAG__properties.EXTRA_UID) {
		throw new Error('Ti.Android.EXTRA_UID is read only property');
	}
	this.EXTRA_UID = '';
	if (__SLAG__properties.FILL_IN_ACTION) {
		throw new Error('Ti.Android.FILL_IN_ACTION is read only property');
	}
	this.FILL_IN_ACTION = 0;
	if (__SLAG__properties.FILL_IN_CATEGORIES) {
		throw new Error('Ti.Android.FILL_IN_CATEGORIES is read only property');
	}
	this.FILL_IN_CATEGORIES = 0;
	if (__SLAG__properties.FILL_IN_COMPONENT) {
		throw new Error('Ti.Android.FILL_IN_COMPONENT is read only property');
	}
	this.FILL_IN_COMPONENT = 0;
	if (__SLAG__properties.FILL_IN_DATA) {
		throw new Error('Ti.Android.FILL_IN_DATA is read only property');
	}
	this.FILL_IN_DATA = 0;
	if (__SLAG__properties.FILL_IN_PACKAGE) {
		throw new Error('Ti.Android.FILL_IN_PACKAGE is read only property');
	}
	this.FILL_IN_PACKAGE = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_BROUGHT_TO_FRONT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_BROUGHT_TO_FRONT is read only property');
	}
	this.FLAG_ACTIVITY_BROUGHT_TO_FRONT = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_CLEAR_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_CLEAR_TOP is read only property');
	}
	this.FLAG_ACTIVITY_CLEAR_TOP = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET is read only property');
	}
	this.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS is read only property');
	}
	this.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_FORWARD_RESULT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_FORWARD_RESULT is read only property');
	}
	this.FLAG_ACTIVITY_FORWARD_RESULT = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY is read only property');
	}
	this.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_MULTIPLE_TASK) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_MULTIPLE_TASK is read only property');
	}
	this.FLAG_ACTIVITY_MULTIPLE_TASK = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_NEW_TASK) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NEW_TASK is read only property');
	}
	this.FLAG_ACTIVITY_NEW_TASK = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_NO_ANIMATION) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_ANIMATION is read only property');
	}
	this.FLAG_ACTIVITY_NO_ANIMATION = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_NO_HISTORY) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_HISTORY is read only property');
	}
	this.FLAG_ACTIVITY_NO_HISTORY = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_NO_USER_ACTION) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_USER_ACTION is read only property');
	}
	this.FLAG_ACTIVITY_NO_USER_ACTION = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_PREVIOUS_IS_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_PREVIOUS_IS_TOP is read only property');
	}
	this.FLAG_ACTIVITY_PREVIOUS_IS_TOP = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_REORDER_TO_FRONT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_REORDER_TO_FRONT is read only property');
	}
	this.FLAG_ACTIVITY_REORDER_TO_FRONT = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED is read only property');
	}
	this.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = 0;
	if (__SLAG__properties.FLAG_ACTIVITY_SINGLE_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_SINGLE_TOP is read only property');
	}
	this.FLAG_ACTIVITY_SINGLE_TOP = 0;
	if (__SLAG__properties.FLAG_AUTO_CANCEL) {
		throw new Error('Ti.Android.FLAG_AUTO_CANCEL is read only property');
	}
	this.FLAG_AUTO_CANCEL = 0;
	if (__SLAG__properties.FLAG_CANCEL_CURRENT) {
		throw new Error('Ti.Android.FLAG_CANCEL_CURRENT is read only property');
	}
	this.FLAG_CANCEL_CURRENT = 0;
	if (__SLAG__properties.FLAG_DEBUG_LOG_RESOLUTION) {
		throw new Error('Ti.Android.FLAG_DEBUG_LOG_RESOLUTION is read only property');
	}
	this.FLAG_DEBUG_LOG_RESOLUTION = 0;
	if (__SLAG__properties.FLAG_FROM_BACKGROUND) {
		throw new Error('Ti.Android.FLAG_FROM_BACKGROUND is read only property');
	}
	this.FLAG_FROM_BACKGROUND = 0;
	if (__SLAG__properties.FLAG_GRANT_READ_URI_PERMISSION) {
		throw new Error('Ti.Android.FLAG_GRANT_READ_URI_PERMISSION is read only property');
	}
	this.FLAG_GRANT_READ_URI_PERMISSION = 0;
	if (__SLAG__properties.FLAG_GRANT_WRITE_URI_PERMISSION) {
		throw new Error('Ti.Android.FLAG_GRANT_WRITE_URI_PERMISSION is read only property');
	}
	this.FLAG_GRANT_WRITE_URI_PERMISSION = 0;
	if (__SLAG__properties.FLAG_INSISTENT) {
		throw new Error('Ti.Android.FLAG_INSISTENT is read only property');
	}
	this.FLAG_INSISTENT = 0;
	if (__SLAG__properties.FLAG_NO_CLEAR) {
		throw new Error('Ti.Android.FLAG_NO_CLEAR is read only property');
	}
	this.FLAG_NO_CLEAR = 0;
	if (__SLAG__properties.FLAG_NO_CREATE) {
		throw new Error('Ti.Android.FLAG_NO_CREATE is read only property');
	}
	this.FLAG_NO_CREATE = 0;
	if (__SLAG__properties.FLAG_ONE_SHOT) {
		throw new Error('Ti.Android.FLAG_ONE_SHOT is read only property');
	}
	this.FLAG_ONE_SHOT = 0;
	if (__SLAG__properties.FLAG_ONGOING_EVENT) {
		throw new Error('Ti.Android.FLAG_ONGOING_EVENT is read only property');
	}
	this.FLAG_ONGOING_EVENT = 0;
	if (__SLAG__properties.FLAG_ONLY_ALERT_ONCE) {
		throw new Error('Ti.Android.FLAG_ONLY_ALERT_ONCE is read only property');
	}
	this.FLAG_ONLY_ALERT_ONCE = 0;
	if (__SLAG__properties.FLAG_RECEIVER_REGISTERED_ONLY) {
		throw new Error('Ti.Android.FLAG_RECEIVER_REGISTERED_ONLY is read only property');
	}
	this.FLAG_RECEIVER_REGISTERED_ONLY = 0;
	if (__SLAG__properties.FLAG_SHOW_LIGHTS) {
		throw new Error('Ti.Android.FLAG_SHOW_LIGHTS is read only property');
	}
	this.FLAG_SHOW_LIGHTS = 0;
	if (__SLAG__properties.FLAG_UPDATE_CURRENT) {
		throw new Error('Ti.Android.FLAG_UPDATE_CURRENT is read only property');
	}
	this.FLAG_UPDATE_CURRENT = 0;
	if (__SLAG__properties.NAVIGATION_MODE_STANDARD) {
		throw new Error('Ti.Android.NAVIGATION_MODE_STANDARD is read only property');
	}
	this.NAVIGATION_MODE_STANDARD = 0;
	if (__SLAG__properties.NAVIGATION_MODE_TABS) {
		throw new Error('Ti.Android.NAVIGATION_MODE_TABS is read only property');
	}
	this.NAVIGATION_MODE_TABS = 0;
	if (__SLAG__properties.PENDING_INTENT_FOR_ACTIVITY) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_ACTIVITY was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.PENDING_INTENT_FOR_BROADCAST) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_BROADCAST was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.PENDING_INTENT_FOR_SERVICE) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_SERVICE was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.PENDING_INTENT_MAX_VALUE) {
		throw new Error('Ti.Android.PENDING_INTENT_MAX_VALUE was deprecated, since 2.0.0');
	}
	if (__SLAG__properties.R) {
		throw new Error('Ti.Android.R is read only property');
	}
	this.R = {};
	if (__SLAG__properties.RESULT_CANCELED) {
		throw new Error('Ti.Android.RESULT_CANCELED is read only property');
	}
	this.RESULT_CANCELED = 0;
	if (__SLAG__properties.RESULT_FIRST_USER) {
		throw new Error('Ti.Android.RESULT_FIRST_USER is read only property');
	}
	this.RESULT_FIRST_USER = 0;
	if (__SLAG__properties.RESULT_OK) {
		throw new Error('Ti.Android.RESULT_OK is read only property');
	}
	this.RESULT_OK = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_BEHIND) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_BEHIND is read only property');
	}
	this.SCREEN_ORIENTATION_BEHIND = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_LANDSCAPE) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_LANDSCAPE is read only property');
	}
	this.SCREEN_ORIENTATION_LANDSCAPE = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_NOSENSOR) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_NOSENSOR is read only property');
	}
	this.SCREEN_ORIENTATION_NOSENSOR = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_PORTRAIT) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_PORTRAIT is read only property');
	}
	this.SCREEN_ORIENTATION_PORTRAIT = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_SENSOR) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_SENSOR is read only property');
	}
	this.SCREEN_ORIENTATION_SENSOR = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_UNSPECIFIED) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_UNSPECIFIED is read only property');
	}
	this.SCREEN_ORIENTATION_UNSPECIFIED = 0;
	if (__SLAG__properties.SCREEN_ORIENTATION_USER) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_USER is read only property');
	}
	this.SCREEN_ORIENTATION_USER = 0;
	if (__SLAG__properties.SHOW_AS_ACTION_ALWAYS) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_ALWAYS is read only property');
	}
	this.SHOW_AS_ACTION_ALWAYS = 0;
	if (__SLAG__properties.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW is read only property');
	}
	this.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = 0;
	if (__SLAG__properties.SHOW_AS_ACTION_IF_ROOM) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_IF_ROOM is read only property');
	}
	this.SHOW_AS_ACTION_IF_ROOM = 0;
	if (__SLAG__properties.SHOW_AS_ACTION_NEVER) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_NEVER is read only property');
	}
	this.SHOW_AS_ACTION_NEVER = 0;
	if (__SLAG__properties.SHOW_AS_ACTION_WITH_TEXT) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_WITH_TEXT is read only property');
	}
	this.SHOW_AS_ACTION_WITH_TEXT = 0;
	if (__SLAG__properties.START_NOT_STICKY) {
		throw new Error('Ti.Android.START_NOT_STICKY is read only property');
	}
	this.START_NOT_STICKY = 0;
	if (__SLAG__properties.START_REDELIVER_INTENT) {
		throw new Error('Ti.Android.START_REDELIVER_INTENT is read only property');
	}
	this.START_REDELIVER_INTENT = 0;
	if (__SLAG__properties.STREAM_ALARM) {
		throw new Error('Ti.Android.STREAM_ALARM is read only property');
	}
	this.STREAM_ALARM = 0;
	if (__SLAG__properties.STREAM_DEFAULT) {
		throw new Error('Ti.Android.STREAM_DEFAULT is read only property');
	}
	this.STREAM_DEFAULT = 0;
	if (__SLAG__properties.STREAM_MUSIC) {
		throw new Error('Ti.Android.STREAM_MUSIC is read only property');
	}
	this.STREAM_MUSIC = 0;
	if (__SLAG__properties.STREAM_NOTIFICATION) {
		throw new Error('Ti.Android.STREAM_NOTIFICATION is read only property');
	}
	this.STREAM_NOTIFICATION = 0;
	if (__SLAG__properties.STREAM_RING) {
		throw new Error('Ti.Android.STREAM_RING is read only property');
	}
	this.STREAM_RING = 0;
	if (__SLAG__properties.STREAM_SYSTEM) {
		throw new Error('Ti.Android.STREAM_SYSTEM is read only property');
	}
	this.STREAM_SYSTEM = 0;
	if (__SLAG__properties.STREAM_VOICE_CALL) {
		throw new Error('Ti.Android.STREAM_VOICE_CALL is read only property');
	}
	this.STREAM_VOICE_CALL = 0;
	if (__SLAG__properties.URI_INTENT_SCHEME) {
		throw new Error('Ti.Android.URI_INTENT_SCHEME is read only property');
	}
	this.URI_INTENT_SCHEME = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Android';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.currentActivity) {
		throw new Error('Ti.Android.currentActivity is read only property');
	}
	this.currentActivity = {};
	if (__SLAG__properties.currentService) {
		throw new Error('Ti.Android.currentService is read only property');
	}
	this.currentService = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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