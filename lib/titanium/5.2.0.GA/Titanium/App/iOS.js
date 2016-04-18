var crypto = require('crypto');
function iOS(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'USER_NOTIFICATION_BEHAVIOR_DEFAULT',
			'USER_NOTIFICATION_BEHAVIOR_TEXTINPUT',
			'UTTYPE_TEXT',
			'UTTYPE_PLAIN_TEXT',
			'UTTYPE_UTF8_PLAIN_TEXT',
			'UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT',
			'UTTYPE_UTF16_PLAIN_TEXT',
			'UTTYPE_RTF',
			'UTTYPE_HTML',
			'UTTYPE_XML',
			'UTTYPE_PDF',
			'UTTYPE_RTFD',
			'UTTYPE_FLAT_RTFD',
			'UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA',
			'UTTYPE_WEB_ARCHIVE',
			'UTTYPE_IMAGE',
			'UTTYPE_JPEG',
			'UTTYPE_JPEG2000',
			'UTTYPE_TIFF',
			'UTTYPE_PICT',
			'UTTYPE_GIF',
			'UTTYPE_PNG',
			'UTTYPE_QUICKTIME_IMAGE',
			'UTTYPE_APPLE_ICNS',
			'UTTYPE_BMP',
			'UTTYPE_ICO',
			'UTTYPE_MOVIE',
			'UTTYPE_VIDEO',
			'UTTYPE_AUDIO',
			'UTTYPE_QUICKTIME_MOVIE',
			'UTTYPE_MPEG',
			'UTTYPE_MPEG4',
			'UTTYPE_MP3',
			'UTTYPE_MPEG4_AUDIO',
			'UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO',
			'currentUserNotificationSettings',
			'supportedUserActivityTypes',
			'applicationOpenSettingsURL',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS';
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
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_NONE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_NONE = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_BADGE) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_BADGE = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_BADGE = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_SOUND) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_SOUND = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_SOUND = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_TYPE_ALERT) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_TYPE_ALERT = undefined;
	} else {
		this.USER_NOTIFICATION_TYPE_ALERT = 0;
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
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_BEHAVIOR_DEFAULT) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_BEHAVIOR_DEFAULT = undefined;
	} else {
		this.USER_NOTIFICATION_BEHAVIOR_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT) {
		throw new Error('Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT = undefined;
	} else {
		this.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT = 0;
	}
	if (__SLAG_PROPERTIES.UTTYPE_TEXT) {
		throw new Error('Ti.App.iOS.UTTYPE_TEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_TEXT = undefined;
	} else {
		this.UTTYPE_TEXT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_PLAIN_TEXT) {
		throw new Error('Ti.App.iOS.UTTYPE_PLAIN_TEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_PLAIN_TEXT = undefined;
	} else {
		this.UTTYPE_PLAIN_TEXT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_UTF8_PLAIN_TEXT) {
		throw new Error('Ti.App.iOS.UTTYPE_UTF8_PLAIN_TEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_UTF8_PLAIN_TEXT = undefined;
	} else {
		this.UTTYPE_UTF8_PLAIN_TEXT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT) {
		throw new Error('Ti.App.iOS.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT = undefined;
	} else {
		this.UTTYPE_UTF16_EXTERNAL_PLAIN_TEXT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_UTF16_PLAIN_TEXT) {
		throw new Error('Ti.App.iOS.UTTYPE_UTF16_PLAIN_TEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_UTF16_PLAIN_TEXT = undefined;
	} else {
		this.UTTYPE_UTF16_PLAIN_TEXT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_RTF) {
		throw new Error('Ti.App.iOS.UTTYPE_RTF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_RTF = undefined;
	} else {
		this.UTTYPE_RTF = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_HTML) {
		throw new Error('Ti.App.iOS.UTTYPE_HTML is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_HTML = undefined;
	} else {
		this.UTTYPE_HTML = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_XML) {
		throw new Error('Ti.App.iOS.UTTYPE_XML is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_XML = undefined;
	} else {
		this.UTTYPE_XML = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_PDF) {
		throw new Error('Ti.App.iOS.UTTYPE_PDF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_PDF = undefined;
	} else {
		this.UTTYPE_PDF = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_RTFD) {
		throw new Error('Ti.App.iOS.UTTYPE_RTFD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_RTFD = undefined;
	} else {
		this.UTTYPE_RTFD = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_FLAT_RTFD) {
		throw new Error('Ti.App.iOS.UTTYPE_FLAT_RTFD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_FLAT_RTFD = undefined;
	} else {
		this.UTTYPE_FLAT_RTFD = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA) {
		throw new Error('Ti.App.iOS.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA = undefined;
	} else {
		this.UTTYPE_TXN_TEXT_AND_MULTIMEDIA_DATA = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_WEB_ARCHIVE) {
		throw new Error('Ti.App.iOS.UTTYPE_WEB_ARCHIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_WEB_ARCHIVE = undefined;
	} else {
		this.UTTYPE_WEB_ARCHIVE = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_IMAGE) {
		throw new Error('Ti.App.iOS.UTTYPE_IMAGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_IMAGE = undefined;
	} else {
		this.UTTYPE_IMAGE = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_JPEG) {
		throw new Error('Ti.App.iOS.UTTYPE_JPEG is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_JPEG = undefined;
	} else {
		this.UTTYPE_JPEG = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_JPEG2000) {
		throw new Error('Ti.App.iOS.UTTYPE_JPEG2000 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_JPEG2000 = undefined;
	} else {
		this.UTTYPE_JPEG2000 = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_TIFF) {
		throw new Error('Ti.App.iOS.UTTYPE_TIFF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_TIFF = undefined;
	} else {
		this.UTTYPE_TIFF = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_PICT) {
		throw new Error('Ti.App.iOS.UTTYPE_PICT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_PICT = undefined;
	} else {
		this.UTTYPE_PICT = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_GIF) {
		throw new Error('Ti.App.iOS.UTTYPE_GIF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_GIF = undefined;
	} else {
		this.UTTYPE_GIF = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_PNG) {
		throw new Error('Ti.App.iOS.UTTYPE_PNG is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_PNG = undefined;
	} else {
		this.UTTYPE_PNG = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_QUICKTIME_IMAGE) {
		throw new Error('Ti.App.iOS.UTTYPE_QUICKTIME_IMAGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_QUICKTIME_IMAGE = undefined;
	} else {
		this.UTTYPE_QUICKTIME_IMAGE = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_APPLE_ICNS) {
		throw new Error('Ti.App.iOS.UTTYPE_APPLE_ICNS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_APPLE_ICNS = undefined;
	} else {
		this.UTTYPE_APPLE_ICNS = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_BMP) {
		throw new Error('Ti.App.iOS.UTTYPE_BMP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_BMP = undefined;
	} else {
		this.UTTYPE_BMP = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_ICO) {
		throw new Error('Ti.App.iOS.UTTYPE_ICO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_ICO = undefined;
	} else {
		this.UTTYPE_ICO = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_MOVIE) {
		throw new Error('Ti.App.iOS.UTTYPE_MOVIE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_MOVIE = undefined;
	} else {
		this.UTTYPE_MOVIE = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_VIDEO) {
		throw new Error('Ti.App.iOS.UTTYPE_VIDEO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_VIDEO = undefined;
	} else {
		this.UTTYPE_VIDEO = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_AUDIO) {
		throw new Error('Ti.App.iOS.UTTYPE_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_AUDIO = undefined;
	} else {
		this.UTTYPE_AUDIO = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_QUICKTIME_MOVIE) {
		throw new Error('Ti.App.iOS.UTTYPE_QUICKTIME_MOVIE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_QUICKTIME_MOVIE = undefined;
	} else {
		this.UTTYPE_QUICKTIME_MOVIE = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_MPEG) {
		throw new Error('Ti.App.iOS.UTTYPE_MPEG is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_MPEG = undefined;
	} else {
		this.UTTYPE_MPEG = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_MPEG4) {
		throw new Error('Ti.App.iOS.UTTYPE_MPEG4 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_MPEG4 = undefined;
	} else {
		this.UTTYPE_MPEG4 = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_MP3) {
		throw new Error('Ti.App.iOS.UTTYPE_MP3 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_MP3 = undefined;
	} else {
		this.UTTYPE_MP3 = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_MPEG4_AUDIO) {
		throw new Error('Ti.App.iOS.UTTYPE_MPEG4_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_MPEG4_AUDIO = undefined;
	} else {
		this.UTTYPE_MPEG4_AUDIO = '';
	}
	if (__SLAG_PROPERTIES.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO) {
		throw new Error('Ti.App.iOS.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO = undefined;
	} else {
		this.UTTYPE_APPLE_PROTECTED_MPEG4_AUDIO = '';
	}
	if (__SLAG_PROPERTIES.currentUserNotificationSettings) {
		throw new Error('Ti.App.iOS.currentUserNotificationSettings is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentUserNotificationSettings = undefined;
	} else {
		this.currentUserNotificationSettings = {};
	}
	if (__SLAG_PROPERTIES.supportedUserActivityTypes) {
		throw new Error('Ti.App.iOS.supportedUserActivityTypes is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.supportedUserActivityTypes = undefined;
	} else {
		this.supportedUserActivityTypes = '';
	}
	if (__SLAG_PROPERTIES.applicationOpenSettingsURL) {
		throw new Error('Ti.App.iOS.applicationOpenSettingsURL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationOpenSettingsURL = undefined;
	} else {
		this.applicationOpenSettingsURL = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iOS.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
iOS.prototype.createUserDefaults = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var UserDefaults = require('./iOS/UserDefaults');
	return UserDefaults(__SLAG_PROPERTY);
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
iOS.prototype.scheduleLocalNotification = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
iOS.prototype.setMinimumBackgroundFetchInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.endBackgroundHandler = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.sendWatchExtensionReply = function () {
	throw new Error('Ti.App.iOS.sendWatchExtensionReply was deprecated, since 5.0.0');
};
iOS.prototype.createSearchableIndex = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SearchableIndex = require('./iOS/SearchableIndex');
	return SearchableIndex(__SLAG_PROPERTY);
};
iOS.prototype.createSearchableItem = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SearchableItem = require('./iOS/SearchableItem');
	return SearchableItem(__SLAG_PROPERTY);
};
iOS.prototype.createSearchableItemAttributeSet = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SearchableItemAttributeSet = require('./iOS/SearchableItemAttributeSet');
	return SearchableItemAttributeSet(__SLAG_PROPERTY);
};
iOS.prototype.createUserActivity = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var UserActivity = require('./iOS/UserActivity');
	return UserActivity(__SLAG_PROPERTY);
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
iOS.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iOS.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
iOS.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
iOS.prototype.getCurrentUserNotificationSettings = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.currentUserNotificationSettings;
};
iOS.prototype.getSupportedUserActivityTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.supportedUserActivityTypes;
};
iOS.prototype.getApplicationOpenSettingsURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationOpenSettingsURL;
};
module.exports = function (properties) {
	return new iOS(properties);
};