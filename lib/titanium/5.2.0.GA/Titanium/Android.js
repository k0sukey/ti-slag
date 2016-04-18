var crypto = require('crypto');
function Android(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
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
			'FLAG_DEBUG_LOG_RESOLUTION',
			'FLAG_FROM_BACKGROUND',
			'FLAG_GRANT_READ_URI_PERMISSION',
			'FLAG_GRANT_WRITE_URI_PERMISSION',
			'FLAG_RECEIVER_REGISTERED_ONLY',
			'FLAG_CANCEL_CURRENT',
			'FLAG_NO_CREATE',
			'FLAG_ONE_SHOT',
			'FLAG_UPDATE_CURRENT',
			'CATEGORY_ALARM',
			'CATEGORY_CALL',
			'CATEGORY_EMAIL',
			'CATEGORY_ERROR',
			'CATEGORY_EVENT',
			'CATEGORY_MESSAGE',
			'CATEGORY_PROGRESS',
			'CATEGORY_PROMO',
			'CATEGORY_RECOMMENDATION',
			'CATEGORY_SERVICE',
			'CATEGORY_SOCIAL',
			'CATEGORY_STATUS',
			'CATEGORY_TRANSPORT',
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
			'PRIORITY_MAX',
			'PRIORITY_HIGH',
			'PRIORITY_DEFAULT',
			'PRIORITY_LOW',
			'PRIORITY_MIN',
			'VISIBILITY_PRIVATE',
			'VISIBILITY_PUBLIC',
			'VISIBILITY_SECRET',
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
			'NAVIGATION_MODE_STANDARD',
			'NAVIGATION_MODE_TABS',
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
			'currentActivity',
			'currentService',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Android';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.ACTION_AIRPLANE_MODE_CHANGED) {
		throw new Error('Ti.Android.ACTION_AIRPLANE_MODE_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_AIRPLANE_MODE_CHANGED = undefined;
	} else {
		this.ACTION_AIRPLANE_MODE_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_ALL_APPS) {
		throw new Error('Ti.Android.ACTION_ALL_APPS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_ALL_APPS = undefined;
	} else {
		this.ACTION_ALL_APPS = '';
	}
	if (__SLAG_PROPERTIES.ACTION_ANSWER) {
		throw new Error('Ti.Android.ACTION_ANSWER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_ANSWER = undefined;
	} else {
		this.ACTION_ANSWER = '';
	}
	if (__SLAG_PROPERTIES.ACTION_ATTACH_DATA) {
		throw new Error('Ti.Android.ACTION_ATTACH_DATA is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_ATTACH_DATA = undefined;
	} else {
		this.ACTION_ATTACH_DATA = '';
	}
	if (__SLAG_PROPERTIES.ACTION_BATTERY_CHANGED) {
		throw new Error('Ti.Android.ACTION_BATTERY_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_BATTERY_CHANGED = undefined;
	} else {
		this.ACTION_BATTERY_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_BATTERY_LOW) {
		throw new Error('Ti.Android.ACTION_BATTERY_LOW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_BATTERY_LOW = undefined;
	} else {
		this.ACTION_BATTERY_LOW = '';
	}
	if (__SLAG_PROPERTIES.ACTION_BATTERY_OKAY) {
		throw new Error('Ti.Android.ACTION_BATTERY_OKAY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_BATTERY_OKAY = undefined;
	} else {
		this.ACTION_BATTERY_OKAY = '';
	}
	if (__SLAG_PROPERTIES.ACTION_BOOT_COMPLETED) {
		throw new Error('Ti.Android.ACTION_BOOT_COMPLETED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_BOOT_COMPLETED = undefined;
	} else {
		this.ACTION_BOOT_COMPLETED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_BUG_REPORT) {
		throw new Error('Ti.Android.ACTION_BUG_REPORT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_BUG_REPORT = undefined;
	} else {
		this.ACTION_BUG_REPORT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CALL) {
		throw new Error('Ti.Android.ACTION_CALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CALL = undefined;
	} else {
		this.ACTION_CALL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CALL_BUTTON) {
		throw new Error('Ti.Android.ACTION_CALL_BUTTON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CALL_BUTTON = undefined;
	} else {
		this.ACTION_CALL_BUTTON = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CAMERA_BUTTON) {
		throw new Error('Ti.Android.ACTION_CAMERA_BUTTON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CAMERA_BUTTON = undefined;
	} else {
		this.ACTION_CAMERA_BUTTON = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CHOOSER) {
		throw new Error('Ti.Android.ACTION_CHOOSER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CHOOSER = undefined;
	} else {
		this.ACTION_CHOOSER = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CLOSE_SYSTEM_DIALOGS) {
		throw new Error('Ti.Android.ACTION_CLOSE_SYSTEM_DIALOGS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CLOSE_SYSTEM_DIALOGS = undefined;
	} else {
		this.ACTION_CLOSE_SYSTEM_DIALOGS = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CONFIGURATION_CHANGED) {
		throw new Error('Ti.Android.ACTION_CONFIGURATION_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CONFIGURATION_CHANGED = undefined;
	} else {
		this.ACTION_CONFIGURATION_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_CREATE_SHORTCUT) {
		throw new Error('Ti.Android.ACTION_CREATE_SHORTCUT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_CREATE_SHORTCUT = undefined;
	} else {
		this.ACTION_CREATE_SHORTCUT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_DATE_CHANGED) {
		throw new Error('Ti.Android.ACTION_DATE_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_DATE_CHANGED = undefined;
	} else {
		this.ACTION_DATE_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_DEFAULT) {
		throw new Error('Ti.Android.ACTION_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_DEFAULT = undefined;
	} else {
		this.ACTION_DEFAULT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_DELETE) {
		throw new Error('Ti.Android.ACTION_DELETE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_DELETE = undefined;
	} else {
		this.ACTION_DELETE = '';
	}
	if (__SLAG_PROPERTIES.ACTION_DEVICE_STORAGE_LOW) {
		throw new Error('Ti.Android.ACTION_DEVICE_STORAGE_LOW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_DEVICE_STORAGE_LOW = undefined;
	} else {
		this.ACTION_DEVICE_STORAGE_LOW = '';
	}
	if (__SLAG_PROPERTIES.ACTION_DIAL) {
		throw new Error('Ti.Android.ACTION_DIAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_DIAL = undefined;
	} else {
		this.ACTION_DIAL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_EDIT) {
		throw new Error('Ti.Android.ACTION_EDIT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_EDIT = undefined;
	} else {
		this.ACTION_EDIT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_GET_CONTENT) {
		throw new Error('Ti.Android.ACTION_GET_CONTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_GET_CONTENT = undefined;
	} else {
		this.ACTION_GET_CONTENT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_GTALK_SERVICE_CONNECTED) {
		throw new Error('Ti.Android.ACTION_GTALK_SERVICE_CONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_GTALK_SERVICE_CONNECTED = undefined;
	} else {
		this.ACTION_GTALK_SERVICE_CONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_GTALK_SERVICE_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_GTALK_SERVICE_DISCONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_GTALK_SERVICE_DISCONNECTED = undefined;
	} else {
		this.ACTION_GTALK_SERVICE_DISCONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_HEADSET_PLUG) {
		throw new Error('Ti.Android.ACTION_HEADSET_PLUG is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_HEADSET_PLUG = undefined;
	} else {
		this.ACTION_HEADSET_PLUG = '';
	}
	if (__SLAG_PROPERTIES.ACTION_INPUT_METHOD_CHANGED) {
		throw new Error('Ti.Android.ACTION_INPUT_METHOD_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_INPUT_METHOD_CHANGED = undefined;
	} else {
		this.ACTION_INPUT_METHOD_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_INSERT) {
		throw new Error('Ti.Android.ACTION_INSERT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_INSERT = undefined;
	} else {
		this.ACTION_INSERT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_INSERT_OR_EDIT) {
		throw new Error('Ti.Android.ACTION_INSERT_OR_EDIT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_INSERT_OR_EDIT = undefined;
	} else {
		this.ACTION_INSERT_OR_EDIT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MAIN) {
		throw new Error('Ti.Android.ACTION_MAIN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MAIN = undefined;
	} else {
		this.ACTION_MAIN = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MANAGE_PACKAGE_STORAGE) {
		throw new Error('Ti.Android.ACTION_MANAGE_PACKAGE_STORAGE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MANAGE_PACKAGE_STORAGE = undefined;
	} else {
		this.ACTION_MANAGE_PACKAGE_STORAGE = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_BAD_REMOVAL) {
		throw new Error('Ti.Android.ACTION_MEDIA_BAD_REMOVAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_BAD_REMOVAL = undefined;
	} else {
		this.ACTION_MEDIA_BAD_REMOVAL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_BUTTON) {
		throw new Error('Ti.Android.ACTION_MEDIA_BUTTON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_BUTTON = undefined;
	} else {
		this.ACTION_MEDIA_BUTTON = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_CHECKING) {
		throw new Error('Ti.Android.ACTION_MEDIA_CHECKING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_CHECKING = undefined;
	} else {
		this.ACTION_MEDIA_CHECKING = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_EJECT) {
		throw new Error('Ti.Android.ACTION_MEDIA_EJECT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_EJECT = undefined;
	} else {
		this.ACTION_MEDIA_EJECT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_MOUNTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_MOUNTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_MOUNTED = undefined;
	} else {
		this.ACTION_MEDIA_MOUNTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_NOFS) {
		throw new Error('Ti.Android.ACTION_MEDIA_NOFS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_NOFS = undefined;
	} else {
		this.ACTION_MEDIA_NOFS = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_REMOVED) {
		throw new Error('Ti.Android.ACTION_MEDIA_REMOVED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_REMOVED = undefined;
	} else {
		this.ACTION_MEDIA_REMOVED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_SCANNER_FINISHED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_FINISHED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_SCANNER_FINISHED = undefined;
	} else {
		this.ACTION_MEDIA_SCANNER_FINISHED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_SCANNER_SCAN_FILE) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_SCAN_FILE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_SCANNER_SCAN_FILE = undefined;
	} else {
		this.ACTION_MEDIA_SCANNER_SCAN_FILE = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_SCANNER_STARTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SCANNER_STARTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_SCANNER_STARTED = undefined;
	} else {
		this.ACTION_MEDIA_SCANNER_STARTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_SHARED) {
		throw new Error('Ti.Android.ACTION_MEDIA_SHARED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_SHARED = undefined;
	} else {
		this.ACTION_MEDIA_SHARED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_UNMOUNTABLE) {
		throw new Error('Ti.Android.ACTION_MEDIA_UNMOUNTABLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_UNMOUNTABLE = undefined;
	} else {
		this.ACTION_MEDIA_UNMOUNTABLE = '';
	}
	if (__SLAG_PROPERTIES.ACTION_MEDIA_UNMOUNTED) {
		throw new Error('Ti.Android.ACTION_MEDIA_UNMOUNTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_MEDIA_UNMOUNTED = undefined;
	} else {
		this.ACTION_MEDIA_UNMOUNTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_NEW_OUTGOING_CALL) {
		throw new Error('Ti.Android.ACTION_NEW_OUTGOING_CALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_NEW_OUTGOING_CALL = undefined;
	} else {
		this.ACTION_NEW_OUTGOING_CALL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_ADDED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_ADDED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_ADDED = undefined;
	} else {
		this.ACTION_PACKAGE_ADDED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_CHANGED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_CHANGED = undefined;
	} else {
		this.ACTION_PACKAGE_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_DATA_CLEARED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_DATA_CLEARED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_DATA_CLEARED = undefined;
	} else {
		this.ACTION_PACKAGE_DATA_CLEARED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_INSTALL) {
		throw new Error('Ti.Android.ACTION_PACKAGE_INSTALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_INSTALL = undefined;
	} else {
		this.ACTION_PACKAGE_INSTALL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_REMOVED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_REMOVED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_REMOVED = undefined;
	} else {
		this.ACTION_PACKAGE_REMOVED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_REPLACED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_REPLACED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_REPLACED = undefined;
	} else {
		this.ACTION_PACKAGE_REPLACED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PACKAGE_RESTARTED) {
		throw new Error('Ti.Android.ACTION_PACKAGE_RESTARTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PACKAGE_RESTARTED = undefined;
	} else {
		this.ACTION_PACKAGE_RESTARTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PICK) {
		throw new Error('Ti.Android.ACTION_PICK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PICK = undefined;
	} else {
		this.ACTION_PICK = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PICK_ACTIVITY) {
		throw new Error('Ti.Android.ACTION_PICK_ACTIVITY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PICK_ACTIVITY = undefined;
	} else {
		this.ACTION_PICK_ACTIVITY = '';
	}
	if (__SLAG_PROPERTIES.ACTION_POWER_CONNECTED) {
		throw new Error('Ti.Android.ACTION_POWER_CONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_POWER_CONNECTED = undefined;
	} else {
		this.ACTION_POWER_CONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_POWER_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_POWER_DISCONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_POWER_DISCONNECTED = undefined;
	} else {
		this.ACTION_POWER_DISCONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_POWER_USAGE_SUMMARY) {
		throw new Error('Ti.Android.ACTION_POWER_USAGE_SUMMARY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_POWER_USAGE_SUMMARY = undefined;
	} else {
		this.ACTION_POWER_USAGE_SUMMARY = '';
	}
	if (__SLAG_PROPERTIES.ACTION_PROVIDER_CHANGED) {
		throw new Error('Ti.Android.ACTION_PROVIDER_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_PROVIDER_CHANGED = undefined;
	} else {
		this.ACTION_PROVIDER_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_REBOOT) {
		throw new Error('Ti.Android.ACTION_REBOOT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_REBOOT = undefined;
	} else {
		this.ACTION_REBOOT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_RUN) {
		throw new Error('Ti.Android.ACTION_RUN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_RUN = undefined;
	} else {
		this.ACTION_RUN = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SCREEN_OFF) {
		throw new Error('Ti.Android.ACTION_SCREEN_OFF is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SCREEN_OFF = undefined;
	} else {
		this.ACTION_SCREEN_OFF = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SCREEN_ON) {
		throw new Error('Ti.Android.ACTION_SCREEN_ON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SCREEN_ON = undefined;
	} else {
		this.ACTION_SCREEN_ON = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SEARCH) {
		throw new Error('Ti.Android.ACTION_SEARCH is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SEARCH = undefined;
	} else {
		this.ACTION_SEARCH = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SEARCH_LONG_PRESS) {
		throw new Error('Ti.Android.ACTION_SEARCH_LONG_PRESS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SEARCH_LONG_PRESS = undefined;
	} else {
		this.ACTION_SEARCH_LONG_PRESS = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SEND) {
		throw new Error('Ti.Android.ACTION_SEND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SEND = undefined;
	} else {
		this.ACTION_SEND = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SENDTO) {
		throw new Error('Ti.Android.ACTION_SENDTO is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SENDTO = undefined;
	} else {
		this.ACTION_SENDTO = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SEND_MULTIPLE) {
		throw new Error('Ti.Android.ACTION_SEND_MULTIPLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SEND_MULTIPLE = undefined;
	} else {
		this.ACTION_SEND_MULTIPLE = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SET_WALLPAPER) {
		throw new Error('Ti.Android.ACTION_SET_WALLPAPER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SET_WALLPAPER = undefined;
	} else {
		this.ACTION_SET_WALLPAPER = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SHUTDOWN) {
		throw new Error('Ti.Android.ACTION_SHUTDOWN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SHUTDOWN = undefined;
	} else {
		this.ACTION_SHUTDOWN = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SYNC) {
		throw new Error('Ti.Android.ACTION_SYNC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SYNC = undefined;
	} else {
		this.ACTION_SYNC = '';
	}
	if (__SLAG_PROPERTIES.ACTION_SYSTEM_TUTORIAL) {
		throw new Error('Ti.Android.ACTION_SYSTEM_TUTORIAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_SYSTEM_TUTORIAL = undefined;
	} else {
		this.ACTION_SYSTEM_TUTORIAL = '';
	}
	if (__SLAG_PROPERTIES.ACTION_TIME_CHANGED) {
		throw new Error('Ti.Android.ACTION_TIME_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_TIME_CHANGED = undefined;
	} else {
		this.ACTION_TIME_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_TIME_TICK) {
		throw new Error('Ti.Android.ACTION_TIME_TICK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_TIME_TICK = undefined;
	} else {
		this.ACTION_TIME_TICK = '';
	}
	if (__SLAG_PROPERTIES.ACTION_UID_REMOVED) {
		throw new Error('Ti.Android.ACTION_UID_REMOVED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_UID_REMOVED = undefined;
	} else {
		this.ACTION_UID_REMOVED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_UMS_CONNECTED) {
		throw new Error('Ti.Android.ACTION_UMS_CONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_UMS_CONNECTED = undefined;
	} else {
		this.ACTION_UMS_CONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_UMS_DISCONNECTED) {
		throw new Error('Ti.Android.ACTION_UMS_DISCONNECTED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_UMS_DISCONNECTED = undefined;
	} else {
		this.ACTION_UMS_DISCONNECTED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_USER_PRESENT) {
		throw new Error('Ti.Android.ACTION_USER_PRESENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_USER_PRESENT = undefined;
	} else {
		this.ACTION_USER_PRESENT = '';
	}
	if (__SLAG_PROPERTIES.ACTION_VIEW) {
		throw new Error('Ti.Android.ACTION_VIEW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_VIEW = undefined;
	} else {
		this.ACTION_VIEW = '';
	}
	if (__SLAG_PROPERTIES.ACTION_VOICE_COMMAND) {
		throw new Error('Ti.Android.ACTION_VOICE_COMMAND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_VOICE_COMMAND = undefined;
	} else {
		this.ACTION_VOICE_COMMAND = '';
	}
	if (__SLAG_PROPERTIES.ACTION_WALLPAPER_CHANGED) {
		throw new Error('Ti.Android.ACTION_WALLPAPER_CHANGED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_WALLPAPER_CHANGED = undefined;
	} else {
		this.ACTION_WALLPAPER_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.ACTION_WEB_SEARCH) {
		throw new Error('Ti.Android.ACTION_WEB_SEARCH is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION_WEB_SEARCH = undefined;
	} else {
		this.ACTION_WEB_SEARCH = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_ALTERNATIVE) {
		throw new Error('Ti.Android.CATEGORY_ALTERNATIVE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_ALTERNATIVE = undefined;
	} else {
		this.CATEGORY_ALTERNATIVE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_BROWSABLE) {
		throw new Error('Ti.Android.CATEGORY_BROWSABLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_BROWSABLE = undefined;
	} else {
		this.CATEGORY_BROWSABLE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_DEFAULT) {
		throw new Error('Ti.Android.CATEGORY_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_DEFAULT = undefined;
	} else {
		this.CATEGORY_DEFAULT = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_DEVELOPMENT_PREFERENCE) {
		throw new Error('Ti.Android.CATEGORY_DEVELOPMENT_PREFERENCE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_DEVELOPMENT_PREFERENCE = undefined;
	} else {
		this.CATEGORY_DEVELOPMENT_PREFERENCE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_EMBED) {
		throw new Error('Ti.Android.CATEGORY_EMBED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_EMBED = undefined;
	} else {
		this.CATEGORY_EMBED = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST) {
		throw new Error('Ti.Android.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = undefined;
	} else {
		this.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_HOME) {
		throw new Error('Ti.Android.CATEGORY_HOME is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_HOME = undefined;
	} else {
		this.CATEGORY_HOME = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_INFO) {
		throw new Error('Ti.Android.CATEGORY_INFO is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_INFO = undefined;
	} else {
		this.CATEGORY_INFO = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_LAUNCHER) {
		throw new Error('Ti.Android.CATEGORY_LAUNCHER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_LAUNCHER = undefined;
	} else {
		this.CATEGORY_LAUNCHER = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_MONKEY) {
		throw new Error('Ti.Android.CATEGORY_MONKEY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_MONKEY = undefined;
	} else {
		this.CATEGORY_MONKEY = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_OPENABLE) {
		throw new Error('Ti.Android.CATEGORY_OPENABLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_OPENABLE = undefined;
	} else {
		this.CATEGORY_OPENABLE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_PREFERENCE) {
		throw new Error('Ti.Android.CATEGORY_PREFERENCE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_PREFERENCE = undefined;
	} else {
		this.CATEGORY_PREFERENCE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_SAMPLE_CODE) {
		throw new Error('Ti.Android.CATEGORY_SAMPLE_CODE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_SAMPLE_CODE = undefined;
	} else {
		this.CATEGORY_SAMPLE_CODE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_SELECTED_ALTERNATIVE) {
		throw new Error('Ti.Android.CATEGORY_SELECTED_ALTERNATIVE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_SELECTED_ALTERNATIVE = undefined;
	} else {
		this.CATEGORY_SELECTED_ALTERNATIVE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_TAB) {
		throw new Error('Ti.Android.CATEGORY_TAB is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_TAB = undefined;
	} else {
		this.CATEGORY_TAB = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_TEST) {
		throw new Error('Ti.Android.CATEGORY_TEST is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_TEST = undefined;
	} else {
		this.CATEGORY_TEST = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_UNIT_TEST) {
		throw new Error('Ti.Android.CATEGORY_UNIT_TEST is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_UNIT_TEST = undefined;
	} else {
		this.CATEGORY_UNIT_TEST = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_ALARM_COUNT) {
		throw new Error('Ti.Android.EXTRA_ALARM_COUNT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_ALARM_COUNT = undefined;
	} else {
		this.EXTRA_ALARM_COUNT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_BCC) {
		throw new Error('Ti.Android.EXTRA_BCC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_BCC = undefined;
	} else {
		this.EXTRA_BCC = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_CC) {
		throw new Error('Ti.Android.EXTRA_CC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_CC = undefined;
	} else {
		this.EXTRA_CC = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_DATA_REMOVED) {
		throw new Error('Ti.Android.EXTRA_DATA_REMOVED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_DATA_REMOVED = undefined;
	} else {
		this.EXTRA_DATA_REMOVED = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_DONT_KILL_APP) {
		throw new Error('Ti.Android.EXTRA_DONT_KILL_APP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_DONT_KILL_APP = undefined;
	} else {
		this.EXTRA_DONT_KILL_APP = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_EMAIL) {
		throw new Error('Ti.Android.EXTRA_EMAIL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_EMAIL = undefined;
	} else {
		this.EXTRA_EMAIL = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_INTENT) {
		throw new Error('Ti.Android.EXTRA_INTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_INTENT = undefined;
	} else {
		this.EXTRA_INTENT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_KEY_EVENT) {
		throw new Error('Ti.Android.EXTRA_KEY_EVENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_KEY_EVENT = undefined;
	} else {
		this.EXTRA_KEY_EVENT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_PHONE_NUMBER) {
		throw new Error('Ti.Android.EXTRA_PHONE_NUMBER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_PHONE_NUMBER = undefined;
	} else {
		this.EXTRA_PHONE_NUMBER = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_REPLACING) {
		throw new Error('Ti.Android.EXTRA_REPLACING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_REPLACING = undefined;
	} else {
		this.EXTRA_REPLACING = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_SHORTCUT_ICON) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_ICON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_SHORTCUT_ICON = undefined;
	} else {
		this.EXTRA_SHORTCUT_ICON = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_SHORTCUT_ICON_RESOURCE) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_ICON_RESOURCE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_SHORTCUT_ICON_RESOURCE = undefined;
	} else {
		this.EXTRA_SHORTCUT_ICON_RESOURCE = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_SHORTCUT_INTENT) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_INTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_SHORTCUT_INTENT = undefined;
	} else {
		this.EXTRA_SHORTCUT_INTENT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_SHORTCUT_NAME) {
		throw new Error('Ti.Android.EXTRA_SHORTCUT_NAME is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_SHORTCUT_NAME = undefined;
	} else {
		this.EXTRA_SHORTCUT_NAME = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_STREAM) {
		throw new Error('Ti.Android.EXTRA_STREAM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_STREAM = undefined;
	} else {
		this.EXTRA_STREAM = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_SUBJECT) {
		throw new Error('Ti.Android.EXTRA_SUBJECT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_SUBJECT = undefined;
	} else {
		this.EXTRA_SUBJECT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_TEMPLATE) {
		throw new Error('Ti.Android.EXTRA_TEMPLATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_TEMPLATE = undefined;
	} else {
		this.EXTRA_TEMPLATE = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_TEXT) {
		throw new Error('Ti.Android.EXTRA_TEXT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_TEXT = undefined;
	} else {
		this.EXTRA_TEXT = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_TITLE) {
		throw new Error('Ti.Android.EXTRA_TITLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_TITLE = undefined;
	} else {
		this.EXTRA_TITLE = '';
	}
	if (__SLAG_PROPERTIES.EXTRA_UID) {
		throw new Error('Ti.Android.EXTRA_UID is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTRA_UID = undefined;
	} else {
		this.EXTRA_UID = '';
	}
	if (__SLAG_PROPERTIES.FILL_IN_ACTION) {
		throw new Error('Ti.Android.FILL_IN_ACTION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL_IN_ACTION = undefined;
	} else {
		this.FILL_IN_ACTION = 0;
	}
	if (__SLAG_PROPERTIES.FILL_IN_CATEGORIES) {
		throw new Error('Ti.Android.FILL_IN_CATEGORIES is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL_IN_CATEGORIES = undefined;
	} else {
		this.FILL_IN_CATEGORIES = 0;
	}
	if (__SLAG_PROPERTIES.FILL_IN_COMPONENT) {
		throw new Error('Ti.Android.FILL_IN_COMPONENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL_IN_COMPONENT = undefined;
	} else {
		this.FILL_IN_COMPONENT = 0;
	}
	if (__SLAG_PROPERTIES.FILL_IN_DATA) {
		throw new Error('Ti.Android.FILL_IN_DATA is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL_IN_DATA = undefined;
	} else {
		this.FILL_IN_DATA = 0;
	}
	if (__SLAG_PROPERTIES.FILL_IN_PACKAGE) {
		throw new Error('Ti.Android.FILL_IN_PACKAGE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL_IN_PACKAGE = undefined;
	} else {
		this.FILL_IN_PACKAGE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_BROUGHT_TO_FRONT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_BROUGHT_TO_FRONT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_BROUGHT_TO_FRONT = undefined;
	} else {
		this.FLAG_ACTIVITY_BROUGHT_TO_FRONT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_CLEAR_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_CLEAR_TOP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_CLEAR_TOP = undefined;
	} else {
		this.FLAG_ACTIVITY_CLEAR_TOP = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = undefined;
	} else {
		this.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = undefined;
	} else {
		this.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_FORWARD_RESULT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_FORWARD_RESULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_FORWARD_RESULT = undefined;
	} else {
		this.FLAG_ACTIVITY_FORWARD_RESULT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = undefined;
	} else {
		this.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_MULTIPLE_TASK) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_MULTIPLE_TASK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_MULTIPLE_TASK = undefined;
	} else {
		this.FLAG_ACTIVITY_MULTIPLE_TASK = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_NEW_TASK) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NEW_TASK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_NEW_TASK = undefined;
	} else {
		this.FLAG_ACTIVITY_NEW_TASK = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_NO_ANIMATION) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_ANIMATION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_NO_ANIMATION = undefined;
	} else {
		this.FLAG_ACTIVITY_NO_ANIMATION = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_NO_HISTORY) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_HISTORY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_NO_HISTORY = undefined;
	} else {
		this.FLAG_ACTIVITY_NO_HISTORY = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_NO_USER_ACTION) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_NO_USER_ACTION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_NO_USER_ACTION = undefined;
	} else {
		this.FLAG_ACTIVITY_NO_USER_ACTION = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_PREVIOUS_IS_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_PREVIOUS_IS_TOP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_PREVIOUS_IS_TOP = undefined;
	} else {
		this.FLAG_ACTIVITY_PREVIOUS_IS_TOP = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_REORDER_TO_FRONT) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_REORDER_TO_FRONT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_REORDER_TO_FRONT = undefined;
	} else {
		this.FLAG_ACTIVITY_REORDER_TO_FRONT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = undefined;
	} else {
		this.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ACTIVITY_SINGLE_TOP) {
		throw new Error('Ti.Android.FLAG_ACTIVITY_SINGLE_TOP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ACTIVITY_SINGLE_TOP = undefined;
	} else {
		this.FLAG_ACTIVITY_SINGLE_TOP = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_DEBUG_LOG_RESOLUTION) {
		throw new Error('Ti.Android.FLAG_DEBUG_LOG_RESOLUTION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_DEBUG_LOG_RESOLUTION = undefined;
	} else {
		this.FLAG_DEBUG_LOG_RESOLUTION = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_FROM_BACKGROUND) {
		throw new Error('Ti.Android.FLAG_FROM_BACKGROUND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_FROM_BACKGROUND = undefined;
	} else {
		this.FLAG_FROM_BACKGROUND = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_GRANT_READ_URI_PERMISSION) {
		throw new Error('Ti.Android.FLAG_GRANT_READ_URI_PERMISSION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_GRANT_READ_URI_PERMISSION = undefined;
	} else {
		this.FLAG_GRANT_READ_URI_PERMISSION = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_GRANT_WRITE_URI_PERMISSION) {
		throw new Error('Ti.Android.FLAG_GRANT_WRITE_URI_PERMISSION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_GRANT_WRITE_URI_PERMISSION = undefined;
	} else {
		this.FLAG_GRANT_WRITE_URI_PERMISSION = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_RECEIVER_REGISTERED_ONLY) {
		throw new Error('Ti.Android.FLAG_RECEIVER_REGISTERED_ONLY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_RECEIVER_REGISTERED_ONLY = undefined;
	} else {
		this.FLAG_RECEIVER_REGISTERED_ONLY = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_CANCEL_CURRENT) {
		throw new Error('Ti.Android.FLAG_CANCEL_CURRENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_CANCEL_CURRENT = undefined;
	} else {
		this.FLAG_CANCEL_CURRENT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_NO_CREATE) {
		throw new Error('Ti.Android.FLAG_NO_CREATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_NO_CREATE = undefined;
	} else {
		this.FLAG_NO_CREATE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ONE_SHOT) {
		throw new Error('Ti.Android.FLAG_ONE_SHOT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ONE_SHOT = undefined;
	} else {
		this.FLAG_ONE_SHOT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_UPDATE_CURRENT) {
		throw new Error('Ti.Android.FLAG_UPDATE_CURRENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_UPDATE_CURRENT = undefined;
	} else {
		this.FLAG_UPDATE_CURRENT = 0;
	}
	if (__SLAG_PROPERTIES.CATEGORY_ALARM) {
		throw new Error('Ti.Android.CATEGORY_ALARM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_ALARM = undefined;
	} else {
		this.CATEGORY_ALARM = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_CALL) {
		throw new Error('Ti.Android.CATEGORY_CALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_CALL = undefined;
	} else {
		this.CATEGORY_CALL = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_EMAIL) {
		throw new Error('Ti.Android.CATEGORY_EMAIL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_EMAIL = undefined;
	} else {
		this.CATEGORY_EMAIL = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_ERROR) {
		throw new Error('Ti.Android.CATEGORY_ERROR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_ERROR = undefined;
	} else {
		this.CATEGORY_ERROR = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_EVENT) {
		throw new Error('Ti.Android.CATEGORY_EVENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_EVENT = undefined;
	} else {
		this.CATEGORY_EVENT = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_MESSAGE) {
		throw new Error('Ti.Android.CATEGORY_MESSAGE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_MESSAGE = undefined;
	} else {
		this.CATEGORY_MESSAGE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_PROGRESS) {
		throw new Error('Ti.Android.CATEGORY_PROGRESS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_PROGRESS = undefined;
	} else {
		this.CATEGORY_PROGRESS = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_PROMO) {
		throw new Error('Ti.Android.CATEGORY_PROMO is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_PROMO = undefined;
	} else {
		this.CATEGORY_PROMO = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_RECOMMENDATION) {
		throw new Error('Ti.Android.CATEGORY_RECOMMENDATION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_RECOMMENDATION = undefined;
	} else {
		this.CATEGORY_RECOMMENDATION = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_SERVICE) {
		throw new Error('Ti.Android.CATEGORY_SERVICE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_SERVICE = undefined;
	} else {
		this.CATEGORY_SERVICE = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_SOCIAL) {
		throw new Error('Ti.Android.CATEGORY_SOCIAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_SOCIAL = undefined;
	} else {
		this.CATEGORY_SOCIAL = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_STATUS) {
		throw new Error('Ti.Android.CATEGORY_STATUS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_STATUS = undefined;
	} else {
		this.CATEGORY_STATUS = '';
	}
	if (__SLAG_PROPERTIES.CATEGORY_TRANSPORT) {
		throw new Error('Ti.Android.CATEGORY_TRANSPORT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CATEGORY_TRANSPORT = undefined;
	} else {
		this.CATEGORY_TRANSPORT = '';
	}
	if (__SLAG_PROPERTIES.DEFAULT_ALL) {
		throw new Error('Ti.Android.DEFAULT_ALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_ALL = undefined;
	} else {
		this.DEFAULT_ALL = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_LIGHTS) {
		throw new Error('Ti.Android.DEFAULT_LIGHTS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_LIGHTS = undefined;
	} else {
		this.DEFAULT_LIGHTS = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_SOUND) {
		throw new Error('Ti.Android.DEFAULT_SOUND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_SOUND = undefined;
	} else {
		this.DEFAULT_SOUND = 0;
	}
	if (__SLAG_PROPERTIES.DEFAULT_VIBRATE) {
		throw new Error('Ti.Android.DEFAULT_VIBRATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT_VIBRATE = undefined;
	} else {
		this.DEFAULT_VIBRATE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_AUTO_CANCEL) {
		throw new Error('Ti.Android.FLAG_AUTO_CANCEL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_AUTO_CANCEL = undefined;
	} else {
		this.FLAG_AUTO_CANCEL = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_INSISTENT) {
		throw new Error('Ti.Android.FLAG_INSISTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_INSISTENT = undefined;
	} else {
		this.FLAG_INSISTENT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_NO_CLEAR) {
		throw new Error('Ti.Android.FLAG_NO_CLEAR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_NO_CLEAR = undefined;
	} else {
		this.FLAG_NO_CLEAR = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ONGOING_EVENT) {
		throw new Error('Ti.Android.FLAG_ONGOING_EVENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ONGOING_EVENT = undefined;
	} else {
		this.FLAG_ONGOING_EVENT = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_ONLY_ALERT_ONCE) {
		throw new Error('Ti.Android.FLAG_ONLY_ALERT_ONCE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_ONLY_ALERT_ONCE = undefined;
	} else {
		this.FLAG_ONLY_ALERT_ONCE = 0;
	}
	if (__SLAG_PROPERTIES.FLAG_SHOW_LIGHTS) {
		throw new Error('Ti.Android.FLAG_SHOW_LIGHTS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLAG_SHOW_LIGHTS = undefined;
	} else {
		this.FLAG_SHOW_LIGHTS = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY_MAX) {
		throw new Error('Ti.Android.PRIORITY_MAX is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY_MAX = undefined;
	} else {
		this.PRIORITY_MAX = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY_HIGH) {
		throw new Error('Ti.Android.PRIORITY_HIGH is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY_HIGH = undefined;
	} else {
		this.PRIORITY_HIGH = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY_DEFAULT) {
		throw new Error('Ti.Android.PRIORITY_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY_DEFAULT = undefined;
	} else {
		this.PRIORITY_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY_LOW) {
		throw new Error('Ti.Android.PRIORITY_LOW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY_LOW = undefined;
	} else {
		this.PRIORITY_LOW = 0;
	}
	if (__SLAG_PROPERTIES.PRIORITY_MIN) {
		throw new Error('Ti.Android.PRIORITY_MIN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PRIORITY_MIN = undefined;
	} else {
		this.PRIORITY_MIN = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_PRIVATE) {
		throw new Error('Ti.Android.VISIBILITY_PRIVATE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_PRIVATE = undefined;
	} else {
		this.VISIBILITY_PRIVATE = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_PUBLIC) {
		throw new Error('Ti.Android.VISIBILITY_PUBLIC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_PUBLIC = undefined;
	} else {
		this.VISIBILITY_PUBLIC = 0;
	}
	if (__SLAG_PROPERTIES.VISIBILITY_SECRET) {
		throw new Error('Ti.Android.VISIBILITY_SECRET is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VISIBILITY_SECRET = undefined;
	} else {
		this.VISIBILITY_SECRET = 0;
	}
	if (__SLAG_PROPERTIES.PENDING_INTENT_FOR_ACTIVITY) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_ACTIVITY was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.PENDING_INTENT_FOR_BROADCAST) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_BROADCAST was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.PENDING_INTENT_FOR_SERVICE) {
		throw new Error('Ti.Android.PENDING_INTENT_FOR_SERVICE was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.PENDING_INTENT_MAX_VALUE) {
		throw new Error('Ti.Android.PENDING_INTENT_MAX_VALUE was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.R) {
		throw new Error('Ti.Android.R is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.R = undefined;
	} else {
		this.R = {};
	}
	if (__SLAG_PROPERTIES.RESULT_CANCELED) {
		throw new Error('Ti.Android.RESULT_CANCELED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RESULT_CANCELED = undefined;
	} else {
		this.RESULT_CANCELED = 0;
	}
	if (__SLAG_PROPERTIES.RESULT_FIRST_USER) {
		throw new Error('Ti.Android.RESULT_FIRST_USER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RESULT_FIRST_USER = undefined;
	} else {
		this.RESULT_FIRST_USER = 0;
	}
	if (__SLAG_PROPERTIES.RESULT_OK) {
		throw new Error('Ti.Android.RESULT_OK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RESULT_OK = undefined;
	} else {
		this.RESULT_OK = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_BEHIND) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_BEHIND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_BEHIND = undefined;
	} else {
		this.SCREEN_ORIENTATION_BEHIND = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_LANDSCAPE) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_LANDSCAPE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_LANDSCAPE = undefined;
	} else {
		this.SCREEN_ORIENTATION_LANDSCAPE = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_NOSENSOR) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_NOSENSOR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_NOSENSOR = undefined;
	} else {
		this.SCREEN_ORIENTATION_NOSENSOR = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_PORTRAIT) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_PORTRAIT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_PORTRAIT = undefined;
	} else {
		this.SCREEN_ORIENTATION_PORTRAIT = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_SENSOR) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_SENSOR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_SENSOR = undefined;
	} else {
		this.SCREEN_ORIENTATION_SENSOR = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_UNSPECIFIED) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_UNSPECIFIED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_UNSPECIFIED = undefined;
	} else {
		this.SCREEN_ORIENTATION_UNSPECIFIED = 0;
	}
	if (__SLAG_PROPERTIES.SCREEN_ORIENTATION_USER) {
		throw new Error('Ti.Android.SCREEN_ORIENTATION_USER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCREEN_ORIENTATION_USER = undefined;
	} else {
		this.SCREEN_ORIENTATION_USER = 0;
	}
	if (__SLAG_PROPERTIES.SHOW_AS_ACTION_ALWAYS) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_ALWAYS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOW_AS_ACTION_ALWAYS = undefined;
	} else {
		this.SHOW_AS_ACTION_ALWAYS = 0;
	}
	if (__SLAG_PROPERTIES.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = undefined;
	} else {
		this.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW = 0;
	}
	if (__SLAG_PROPERTIES.SHOW_AS_ACTION_IF_ROOM) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_IF_ROOM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOW_AS_ACTION_IF_ROOM = undefined;
	} else {
		this.SHOW_AS_ACTION_IF_ROOM = 0;
	}
	if (__SLAG_PROPERTIES.SHOW_AS_ACTION_NEVER) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_NEVER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOW_AS_ACTION_NEVER = undefined;
	} else {
		this.SHOW_AS_ACTION_NEVER = 0;
	}
	if (__SLAG_PROPERTIES.SHOW_AS_ACTION_WITH_TEXT) {
		throw new Error('Ti.Android.SHOW_AS_ACTION_WITH_TEXT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHOW_AS_ACTION_WITH_TEXT = undefined;
	} else {
		this.SHOW_AS_ACTION_WITH_TEXT = 0;
	}
	if (__SLAG_PROPERTIES.NAVIGATION_MODE_STANDARD) {
		throw new Error('Ti.Android.NAVIGATION_MODE_STANDARD is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NAVIGATION_MODE_STANDARD = undefined;
	} else {
		this.NAVIGATION_MODE_STANDARD = 0;
	}
	if (__SLAG_PROPERTIES.NAVIGATION_MODE_TABS) {
		throw new Error('Ti.Android.NAVIGATION_MODE_TABS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NAVIGATION_MODE_TABS = undefined;
	} else {
		this.NAVIGATION_MODE_TABS = 0;
	}
	if (__SLAG_PROPERTIES.START_NOT_STICKY) {
		throw new Error('Ti.Android.START_NOT_STICKY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.START_NOT_STICKY = undefined;
	} else {
		this.START_NOT_STICKY = 0;
	}
	if (__SLAG_PROPERTIES.START_REDELIVER_INTENT) {
		throw new Error('Ti.Android.START_REDELIVER_INTENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.START_REDELIVER_INTENT = undefined;
	} else {
		this.START_REDELIVER_INTENT = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_ALARM) {
		throw new Error('Ti.Android.STREAM_ALARM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_ALARM = undefined;
	} else {
		this.STREAM_ALARM = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_DEFAULT) {
		throw new Error('Ti.Android.STREAM_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_DEFAULT = undefined;
	} else {
		this.STREAM_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_MUSIC) {
		throw new Error('Ti.Android.STREAM_MUSIC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_MUSIC = undefined;
	} else {
		this.STREAM_MUSIC = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_NOTIFICATION) {
		throw new Error('Ti.Android.STREAM_NOTIFICATION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_NOTIFICATION = undefined;
	} else {
		this.STREAM_NOTIFICATION = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_RING) {
		throw new Error('Ti.Android.STREAM_RING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_RING = undefined;
	} else {
		this.STREAM_RING = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_SYSTEM) {
		throw new Error('Ti.Android.STREAM_SYSTEM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_SYSTEM = undefined;
	} else {
		this.STREAM_SYSTEM = 0;
	}
	if (__SLAG_PROPERTIES.STREAM_VOICE_CALL) {
		throw new Error('Ti.Android.STREAM_VOICE_CALL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STREAM_VOICE_CALL = undefined;
	} else {
		this.STREAM_VOICE_CALL = 0;
	}
	if (__SLAG_PROPERTIES.URI_INTENT_SCHEME) {
		throw new Error('Ti.Android.URI_INTENT_SCHEME is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URI_INTENT_SCHEME = undefined;
	} else {
		this.URI_INTENT_SCHEME = 0;
	}
	if (__SLAG_PROPERTIES.currentActivity) {
		throw new Error('Ti.Android.currentActivity is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentActivity = undefined;
	} else {
		this.currentActivity = {};
	}
	if (__SLAG_PROPERTIES.currentService) {
		throw new Error('Ti.Android.currentService is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentService = undefined;
	} else {
		this.currentService = {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Android.prototype.createIntentChooser = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Intent = require('./Android/Intent');
	return Intent(__SLAG_PROPERTY);
};
Android.prototype.createPendingIntent = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PendingIntent = require('./Android/PendingIntent');
	return PendingIntent(__SLAG_PROPERTY);
};
Android.prototype.createService = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Service = require('./Android/Service');
	return Service(__SLAG_PROPERTY);
};
Android.prototype.createServiceIntent = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Intent = require('./Android/Intent');
	return Intent(__SLAG_PROPERTY);
};
Android.prototype.isServiceRunning = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Android.prototype.registerBroadcastReceiver = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.unregisterBroadcastReceiver = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.startService = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.stopService = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.createBroadcastIntent = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Intent = require('./Android/Intent');
	return Intent(__SLAG_PROPERTY);
};
Android.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Android.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Android.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Android.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Android.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Android.prototype.createBroadcastReceiver = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var BroadcastReceiver = require('./Android/BroadcastReceiver');
	return BroadcastReceiver(__SLAG_PROPERTY);
};
Android.prototype.createIntent = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Intent = require('./Android/Intent');
	return Intent(__SLAG_PROPERTY);
};
Android.prototype.createNotification = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Notification = require('./Android/Notification');
	return Notification(__SLAG_PROPERTY);
};
Android.prototype.createRemoteViews = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var RemoteViews = require('./Android/RemoteViews');
	return RemoteViews(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Android(properties);
};