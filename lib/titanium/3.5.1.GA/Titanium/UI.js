var crypto = require('crypto');
function UI(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ANIMATION_CURVE_EASE_IN',
			'ANIMATION_CURVE_EASE_IN_OUT',
			'ANIMATION_CURVE_EASE_OUT',
			'ANIMATION_CURVE_LINEAR',
			'AUTODETECT_ADDRESS',
			'AUTODETECT_ALL',
			'AUTODETECT_CALENDAR',
			'AUTODETECT_LINK',
			'AUTODETECT_NONE',
			'AUTODETECT_PHONE',
			'AUTOLINK_ALL',
			'AUTOLINK_CALENDAR',
			'AUTOLINK_EMAIL_ADDRESSES',
			'AUTOLINK_MAP_ADDRESSES',
			'AUTOLINK_NONE',
			'AUTOLINK_PHONE_NUMBERS',
			'AUTOLINK_URLS',
			'BLEND_MODE_CLEAR',
			'BLEND_MODE_COLOR',
			'BLEND_MODE_COLOR_BURN',
			'BLEND_MODE_COLOR_DODGE',
			'BLEND_MODE_COPY',
			'BLEND_MODE_DARKEN',
			'BLEND_MODE_DESTINATION_ATOP',
			'BLEND_MODE_DESTINATION_IN',
			'BLEND_MODE_DESTINATION_OUT',
			'BLEND_MODE_DESTINATION_OVER',
			'BLEND_MODE_DIFFERENCE',
			'BLEND_MODE_EXCLUSION',
			'BLEND_MODE_HARD_LIGHT',
			'BLEND_MODE_HUE',
			'BLEND_MODE_LIGHTEN',
			'BLEND_MODE_LUMINOSITY',
			'BLEND_MODE_MULTIPLY',
			'BLEND_MODE_NORMAL',
			'BLEND_MODE_OVERLAY',
			'BLEND_MODE_PLUS_DARKER',
			'BLEND_MODE_PLUS_LIGHTER',
			'BLEND_MODE_SATURATION',
			'BLEND_MODE_SCREEN',
			'BLEND_MODE_SOFT_LIGHT',
			'BLEND_MODE_SOURCE_ATOP',
			'BLEND_MODE_SOURCE_IN',
			'BLEND_MODE_SOURCE_OUT',
			'BLEND_MODE_XOR',
			'EXTEND_EDGE_ALL',
			'EXTEND_EDGE_BOTTOM',
			'EXTEND_EDGE_LEFT',
			'EXTEND_EDGE_NONE',
			'EXTEND_EDGE_RIGHT',
			'EXTEND_EDGE_TOP',
			'FACE_DOWN',
			'FACE_UP',
			'FILL',
			'INHERIT',
			'INPUT_BORDERSTYLE_BEZEL',
			'INPUT_BORDERSTYLE_LINE',
			'INPUT_BORDERSTYLE_NONE',
			'INPUT_BORDERSTYLE_ROUNDED',
			'INPUT_BUTTONMODE_ALWAYS',
			'INPUT_BUTTONMODE_NEVER',
			'INPUT_BUTTONMODE_ONBLUR',
			'INPUT_BUTTONMODE_ONFOCUS',
			'KEYBOARD_APPEARANCE_ALERT',
			'KEYBOARD_APPEARANCE_DEFAULT',
			'KEYBOARD_ASCII',
			'KEYBOARD_DECIMAL_PAD',
			'KEYBOARD_DEFAULT',
			'KEYBOARD_EMAIL',
			'KEYBOARD_NAMEPHONE_PAD',
			'KEYBOARD_NUMBERS_PUNCTUATION',
			'KEYBOARD_NUMBER_PAD',
			'KEYBOARD_PHONE_PAD',
			'KEYBOARD_URL',
			'LANDSCAPE_LEFT',
			'LANDSCAPE_RIGHT',
			'LIST_ACCESSORY_TYPE_CHECKMARK',
			'LIST_ACCESSORY_TYPE_DETAIL',
			'LIST_ACCESSORY_TYPE_DISCLOSURE',
			'LIST_ACCESSORY_TYPE_NONE',
			'LIST_ITEM_TEMPLATE_CONTACTS',
			'LIST_ITEM_TEMPLATE_DEFAULT',
			'LIST_ITEM_TEMPLATE_SETTINGS',
			'LIST_ITEM_TEMPLATE_SUBTITLE',
			'NOTIFICATION_DURATION_LONG',
			'NOTIFICATION_DURATION_SHORT',
			'PICKER_TYPE_COUNT_DOWN_TIMER',
			'PICKER_TYPE_DATE',
			'PICKER_TYPE_DATE_AND_TIME',
			'PICKER_TYPE_PLAIN',
			'PICKER_TYPE_TIME',
			'PORTRAIT',
			'RETURNKEY_DEFAULT',
			'RETURNKEY_DONE',
			'RETURNKEY_EMERGENCY_CALL',
			'RETURNKEY_GO',
			'RETURNKEY_GOOGLE',
			'RETURNKEY_JOIN',
			'RETURNKEY_NEXT',
			'RETURNKEY_ROUTE',
			'RETURNKEY_SEARCH',
			'RETURNKEY_SEND',
			'RETURNKEY_YAHOO',
			'SIZE',
			'TEXT_ALIGNMENT_CENTER',
			'TEXT_ALIGNMENT_LEFT',
			'TEXT_ALIGNMENT_RIGHT',
			'TEXT_AUTOCAPITALIZATION_ALL',
			'TEXT_AUTOCAPITALIZATION_NONE',
			'TEXT_AUTOCAPITALIZATION_SENTENCES',
			'TEXT_AUTOCAPITALIZATION_WORDS',
			'TEXT_STYLE_BODY',
			'TEXT_STYLE_CAPTION1',
			'TEXT_STYLE_CAPTION2',
			'TEXT_STYLE_FOOTNOTE',
			'TEXT_STYLE_HEADLINE',
			'TEXT_STYLE_SUBHEADLINE',
			'TEXT_VERTICAL_ALIGNMENT_BOTTOM',
			'TEXT_VERTICAL_ALIGNMENT_CENTER',
			'TEXT_VERTICAL_ALIGNMENT_TOP',
			'UNIT_CM',
			'UNIT_DIP',
			'UNIT_IN',
			'UNIT_MM',
			'UNIT_PX',
			'UNKNOWN',
			'UPSIDE_PORTRAIT',
			'URL_ERROR_AUTHENTICATION',
			'URL_ERROR_BAD_URL',
			'URL_ERROR_CONNECT',
			'URL_ERROR_FILE',
			'URL_ERROR_FILE_NOT_FOUND',
			'URL_ERROR_HOST_LOOKUP',
			'URL_ERROR_REDIRECT_LOOP',
			'URL_ERROR_SSL_FAILED',
			'URL_ERROR_TIMEOUT',
			'URL_ERROR_UNKNOWN',
			'URL_ERROR_UNSUPPORTED_SCHEME',
			'apiName',
			'backgroundColor',
			'backgroundImage',
			'bubbleParent',
			'currentTab',
			'currentWindow',
			'orientation',
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
	if (__SLAG__properties.ANIMATION_CURVE_EASE_IN) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_IN is read only property');
	}
	this.ANIMATION_CURVE_EASE_IN = 0;
	if (__SLAG__properties.ANIMATION_CURVE_EASE_IN_OUT) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_IN_OUT is read only property');
	}
	this.ANIMATION_CURVE_EASE_IN_OUT = 0;
	if (__SLAG__properties.ANIMATION_CURVE_EASE_OUT) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_OUT is read only property');
	}
	this.ANIMATION_CURVE_EASE_OUT = 0;
	if (__SLAG__properties.ANIMATION_CURVE_LINEAR) {
		throw new Error('Ti.UI.ANIMATION_CURVE_LINEAR is read only property');
	}
	this.ANIMATION_CURVE_LINEAR = 0;
	if (__SLAG__properties.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.AUTODETECT_ADDRESS was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTODETECT_ALL) {
		throw new Error('Ti.UI.AUTODETECT_ALL was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.AUTODETECT_CALENDAR was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTODETECT_LINK) {
		throw new Error('Ti.UI.AUTODETECT_LINK was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTODETECT_NONE) {
		throw new Error('Ti.UI.AUTODETECT_NONE was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.AUTODETECT_PHONE was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.AUTOLINK_ALL) {
		throw new Error('Ti.UI.AUTOLINK_ALL is read only property');
	}
	this.AUTOLINK_ALL = 0;
	if (__SLAG__properties.AUTOLINK_CALENDAR) {
		throw new Error('Ti.UI.AUTOLINK_CALENDAR is read only property');
	}
	this.AUTOLINK_CALENDAR = 0;
	if (__SLAG__properties.AUTOLINK_EMAIL_ADDRESSES) {
		throw new Error('Ti.UI.AUTOLINK_EMAIL_ADDRESSES is read only property');
	}
	this.AUTOLINK_EMAIL_ADDRESSES = 0;
	if (__SLAG__properties.AUTOLINK_MAP_ADDRESSES) {
		throw new Error('Ti.UI.AUTOLINK_MAP_ADDRESSES is read only property');
	}
	this.AUTOLINK_MAP_ADDRESSES = 0;
	if (__SLAG__properties.AUTOLINK_NONE) {
		throw new Error('Ti.UI.AUTOLINK_NONE is read only property');
	}
	this.AUTOLINK_NONE = 0;
	if (__SLAG__properties.AUTOLINK_PHONE_NUMBERS) {
		throw new Error('Ti.UI.AUTOLINK_PHONE_NUMBERS is read only property');
	}
	this.AUTOLINK_PHONE_NUMBERS = 0;
	if (__SLAG__properties.AUTOLINK_URLS) {
		throw new Error('Ti.UI.AUTOLINK_URLS is read only property');
	}
	this.AUTOLINK_URLS = 0;
	if (__SLAG__properties.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.BLEND_MODE_CLEAR was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_BURN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_DODGE was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.BLEND_MODE_COPY was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.BLEND_MODE_DARKEN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_ATOP was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_IN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OUT was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OVER was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.BLEND_MODE_DIFFERENCE was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.BLEND_MODE_EXCLUSION was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_HARD_LIGHT was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.BLEND_MODE_HUE was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.BLEND_MODE_LIGHTEN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.BLEND_MODE_LUMINOSITY was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.BLEND_MODE_MULTIPLY was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.BLEND_MODE_NORMAL was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.BLEND_MODE_OVERLAY was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_DARKER was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_LIGHTER was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.BLEND_MODE_SATURATION was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.BLEND_MODE_SCREEN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_SOFT_LIGHT was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_ATOP was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_IN was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_OUT was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.BLEND_MODE_XOR was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.EXTEND_EDGE_ALL) {
		throw new Error('Ti.UI.EXTEND_EDGE_ALL is read only property');
	}
	this.EXTEND_EDGE_ALL = 0;
	if (__SLAG__properties.EXTEND_EDGE_BOTTOM) {
		throw new Error('Ti.UI.EXTEND_EDGE_BOTTOM is read only property');
	}
	this.EXTEND_EDGE_BOTTOM = 0;
	if (__SLAG__properties.EXTEND_EDGE_LEFT) {
		throw new Error('Ti.UI.EXTEND_EDGE_LEFT is read only property');
	}
	this.EXTEND_EDGE_LEFT = 0;
	if (__SLAG__properties.EXTEND_EDGE_NONE) {
		throw new Error('Ti.UI.EXTEND_EDGE_NONE is read only property');
	}
	this.EXTEND_EDGE_NONE = 0;
	if (__SLAG__properties.EXTEND_EDGE_RIGHT) {
		throw new Error('Ti.UI.EXTEND_EDGE_RIGHT is read only property');
	}
	this.EXTEND_EDGE_RIGHT = 0;
	if (__SLAG__properties.EXTEND_EDGE_TOP) {
		throw new Error('Ti.UI.EXTEND_EDGE_TOP is read only property');
	}
	this.EXTEND_EDGE_TOP = 0;
	if (__SLAG__properties.FACE_DOWN) {
		throw new Error('Ti.UI.FACE_DOWN is read only property');
	}
	this.FACE_DOWN = 0;
	if (__SLAG__properties.FACE_UP) {
		throw new Error('Ti.UI.FACE_UP is read only property');
	}
	this.FACE_UP = 0;
	if (__SLAG__properties.FILL) {
		throw new Error('Ti.UI.FILL is read only property');
	}
	this.FILL = '';
	if (__SLAG__properties.INHERIT) {
		throw new Error('Ti.UI.INHERIT is read only property');
	}
	this.INHERIT = '';
	if (__SLAG__properties.INPUT_BORDERSTYLE_BEZEL) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_BEZEL is read only property');
	}
	this.INPUT_BORDERSTYLE_BEZEL = 0;
	if (__SLAG__properties.INPUT_BORDERSTYLE_LINE) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_LINE is read only property');
	}
	this.INPUT_BORDERSTYLE_LINE = 0;
	if (__SLAG__properties.INPUT_BORDERSTYLE_NONE) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_NONE is read only property');
	}
	this.INPUT_BORDERSTYLE_NONE = 0;
	if (__SLAG__properties.INPUT_BORDERSTYLE_ROUNDED) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_ROUNDED is read only property');
	}
	this.INPUT_BORDERSTYLE_ROUNDED = 0;
	if (__SLAG__properties.INPUT_BUTTONMODE_ALWAYS) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ALWAYS is read only property');
	}
	this.INPUT_BUTTONMODE_ALWAYS = 0;
	if (__SLAG__properties.INPUT_BUTTONMODE_NEVER) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_NEVER is read only property');
	}
	this.INPUT_BUTTONMODE_NEVER = 0;
	if (__SLAG__properties.INPUT_BUTTONMODE_ONBLUR) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ONBLUR is read only property');
	}
	this.INPUT_BUTTONMODE_ONBLUR = 0;
	if (__SLAG__properties.INPUT_BUTTONMODE_ONFOCUS) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ONFOCUS is read only property');
	}
	this.INPUT_BUTTONMODE_ONFOCUS = 0;
	if (__SLAG__properties.KEYBOARD_APPEARANCE_ALERT) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_ALERT is read only property');
	}
	this.KEYBOARD_APPEARANCE_ALERT = 0;
	if (__SLAG__properties.KEYBOARD_APPEARANCE_DEFAULT) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_DEFAULT is read only property');
	}
	this.KEYBOARD_APPEARANCE_DEFAULT = 0;
	if (__SLAG__properties.KEYBOARD_ASCII) {
		throw new Error('Ti.UI.KEYBOARD_ASCII is read only property');
	}
	this.KEYBOARD_ASCII = 0;
	if (__SLAG__properties.KEYBOARD_DECIMAL_PAD) {
		throw new Error('Ti.UI.KEYBOARD_DECIMAL_PAD is read only property');
	}
	this.KEYBOARD_DECIMAL_PAD = 0;
	if (__SLAG__properties.KEYBOARD_DEFAULT) {
		throw new Error('Ti.UI.KEYBOARD_DEFAULT is read only property');
	}
	this.KEYBOARD_DEFAULT = 0;
	if (__SLAG__properties.KEYBOARD_EMAIL) {
		throw new Error('Ti.UI.KEYBOARD_EMAIL is read only property');
	}
	this.KEYBOARD_EMAIL = 0;
	if (__SLAG__properties.KEYBOARD_NAMEPHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_NAMEPHONE_PAD is read only property');
	}
	this.KEYBOARD_NAMEPHONE_PAD = 0;
	if (__SLAG__properties.KEYBOARD_NUMBERS_PUNCTUATION) {
		throw new Error('Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION is read only property');
	}
	this.KEYBOARD_NUMBERS_PUNCTUATION = 0;
	if (__SLAG__properties.KEYBOARD_NUMBER_PAD) {
		throw new Error('Ti.UI.KEYBOARD_NUMBER_PAD is read only property');
	}
	this.KEYBOARD_NUMBER_PAD = 0;
	if (__SLAG__properties.KEYBOARD_PHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_PHONE_PAD is read only property');
	}
	this.KEYBOARD_PHONE_PAD = 0;
	if (__SLAG__properties.KEYBOARD_URL) {
		throw new Error('Ti.UI.KEYBOARD_URL is read only property');
	}
	this.KEYBOARD_URL = 0;
	if (__SLAG__properties.LANDSCAPE_LEFT) {
		throw new Error('Ti.UI.LANDSCAPE_LEFT is read only property');
	}
	this.LANDSCAPE_LEFT = 0;
	if (__SLAG__properties.LANDSCAPE_RIGHT) {
		throw new Error('Ti.UI.LANDSCAPE_RIGHT is read only property');
	}
	this.LANDSCAPE_RIGHT = 0;
	if (__SLAG__properties.LIST_ACCESSORY_TYPE_CHECKMARK) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK is read only property');
	}
	this.LIST_ACCESSORY_TYPE_CHECKMARK = 0;
	if (__SLAG__properties.LIST_ACCESSORY_TYPE_DETAIL) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_DETAIL is read only property');
	}
	this.LIST_ACCESSORY_TYPE_DETAIL = 0;
	if (__SLAG__properties.LIST_ACCESSORY_TYPE_DISCLOSURE) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE is read only property');
	}
	this.LIST_ACCESSORY_TYPE_DISCLOSURE = 0;
	if (__SLAG__properties.LIST_ACCESSORY_TYPE_NONE) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_NONE is read only property');
	}
	this.LIST_ACCESSORY_TYPE_NONE = 0;
	if (__SLAG__properties.LIST_ITEM_TEMPLATE_CONTACTS) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS is read only property');
	}
	this.LIST_ITEM_TEMPLATE_CONTACTS = 0;
	if (__SLAG__properties.LIST_ITEM_TEMPLATE_DEFAULT) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT is read only property');
	}
	this.LIST_ITEM_TEMPLATE_DEFAULT = 0;
	if (__SLAG__properties.LIST_ITEM_TEMPLATE_SETTINGS) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS is read only property');
	}
	this.LIST_ITEM_TEMPLATE_SETTINGS = 0;
	if (__SLAG__properties.LIST_ITEM_TEMPLATE_SUBTITLE) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE is read only property');
	}
	this.LIST_ITEM_TEMPLATE_SUBTITLE = 0;
	if (__SLAG__properties.NOTIFICATION_DURATION_LONG) {
		throw new Error('Ti.UI.NOTIFICATION_DURATION_LONG is read only property');
	}
	this.NOTIFICATION_DURATION_LONG = 0;
	if (__SLAG__properties.NOTIFICATION_DURATION_SHORT) {
		throw new Error('Ti.UI.NOTIFICATION_DURATION_SHORT is read only property');
	}
	this.NOTIFICATION_DURATION_SHORT = 0;
	if (__SLAG__properties.PICKER_TYPE_COUNT_DOWN_TIMER) {
		throw new Error('Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER is read only property');
	}
	this.PICKER_TYPE_COUNT_DOWN_TIMER = 0;
	if (__SLAG__properties.PICKER_TYPE_DATE) {
		throw new Error('Ti.UI.PICKER_TYPE_DATE is read only property');
	}
	this.PICKER_TYPE_DATE = 0;
	if (__SLAG__properties.PICKER_TYPE_DATE_AND_TIME) {
		throw new Error('Ti.UI.PICKER_TYPE_DATE_AND_TIME is read only property');
	}
	this.PICKER_TYPE_DATE_AND_TIME = 0;
	if (__SLAG__properties.PICKER_TYPE_PLAIN) {
		throw new Error('Ti.UI.PICKER_TYPE_PLAIN is read only property');
	}
	this.PICKER_TYPE_PLAIN = 0;
	if (__SLAG__properties.PICKER_TYPE_TIME) {
		throw new Error('Ti.UI.PICKER_TYPE_TIME is read only property');
	}
	this.PICKER_TYPE_TIME = 0;
	if (__SLAG__properties.PORTRAIT) {
		throw new Error('Ti.UI.PORTRAIT is read only property');
	}
	this.PORTRAIT = 0;
	if (__SLAG__properties.RETURNKEY_DEFAULT) {
		throw new Error('Ti.UI.RETURNKEY_DEFAULT is read only property');
	}
	this.RETURNKEY_DEFAULT = 0;
	if (__SLAG__properties.RETURNKEY_DONE) {
		throw new Error('Ti.UI.RETURNKEY_DONE is read only property');
	}
	this.RETURNKEY_DONE = 0;
	if (__SLAG__properties.RETURNKEY_EMERGENCY_CALL) {
		throw new Error('Ti.UI.RETURNKEY_EMERGENCY_CALL is read only property');
	}
	this.RETURNKEY_EMERGENCY_CALL = 0;
	if (__SLAG__properties.RETURNKEY_GO) {
		throw new Error('Ti.UI.RETURNKEY_GO is read only property');
	}
	this.RETURNKEY_GO = 0;
	if (__SLAG__properties.RETURNKEY_GOOGLE) {
		throw new Error('Ti.UI.RETURNKEY_GOOGLE is read only property');
	}
	this.RETURNKEY_GOOGLE = 0;
	if (__SLAG__properties.RETURNKEY_JOIN) {
		throw new Error('Ti.UI.RETURNKEY_JOIN is read only property');
	}
	this.RETURNKEY_JOIN = 0;
	if (__SLAG__properties.RETURNKEY_NEXT) {
		throw new Error('Ti.UI.RETURNKEY_NEXT is read only property');
	}
	this.RETURNKEY_NEXT = 0;
	if (__SLAG__properties.RETURNKEY_ROUTE) {
		throw new Error('Ti.UI.RETURNKEY_ROUTE is read only property');
	}
	this.RETURNKEY_ROUTE = 0;
	if (__SLAG__properties.RETURNKEY_SEARCH) {
		throw new Error('Ti.UI.RETURNKEY_SEARCH is read only property');
	}
	this.RETURNKEY_SEARCH = 0;
	if (__SLAG__properties.RETURNKEY_SEND) {
		throw new Error('Ti.UI.RETURNKEY_SEND is read only property');
	}
	this.RETURNKEY_SEND = 0;
	if (__SLAG__properties.RETURNKEY_YAHOO) {
		throw new Error('Ti.UI.RETURNKEY_YAHOO is read only property');
	}
	this.RETURNKEY_YAHOO = 0;
	if (__SLAG__properties.SIZE) {
		throw new Error('Ti.UI.SIZE is read only property');
	}
	this.SIZE = '';
	if (__SLAG__properties.TEXT_ALIGNMENT_CENTER) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_CENTER is read only property');
	}
	this.TEXT_ALIGNMENT_CENTER = 0;
	if (__SLAG__properties.TEXT_ALIGNMENT_LEFT) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_LEFT is read only property');
	}
	this.TEXT_ALIGNMENT_LEFT = 0;
	if (__SLAG__properties.TEXT_ALIGNMENT_RIGHT) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_RIGHT is read only property');
	}
	this.TEXT_ALIGNMENT_RIGHT = 0;
	if (__SLAG__properties.TEXT_AUTOCAPITALIZATION_ALL) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_ALL is read only property');
	}
	this.TEXT_AUTOCAPITALIZATION_ALL = 0;
	if (__SLAG__properties.TEXT_AUTOCAPITALIZATION_NONE) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_NONE is read only property');
	}
	this.TEXT_AUTOCAPITALIZATION_NONE = 0;
	if (__SLAG__properties.TEXT_AUTOCAPITALIZATION_SENTENCES) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES is read only property');
	}
	this.TEXT_AUTOCAPITALIZATION_SENTENCES = 0;
	if (__SLAG__properties.TEXT_AUTOCAPITALIZATION_WORDS) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS is read only property');
	}
	this.TEXT_AUTOCAPITALIZATION_WORDS = 0;
	if (__SLAG__properties.TEXT_STYLE_BODY) {
		throw new Error('Ti.UI.TEXT_STYLE_BODY is read only property');
	}
	this.TEXT_STYLE_BODY = '';
	if (__SLAG__properties.TEXT_STYLE_CAPTION1) {
		throw new Error('Ti.UI.TEXT_STYLE_CAPTION1 is read only property');
	}
	this.TEXT_STYLE_CAPTION1 = '';
	if (__SLAG__properties.TEXT_STYLE_CAPTION2) {
		throw new Error('Ti.UI.TEXT_STYLE_CAPTION2 is read only property');
	}
	this.TEXT_STYLE_CAPTION2 = '';
	if (__SLAG__properties.TEXT_STYLE_FOOTNOTE) {
		throw new Error('Ti.UI.TEXT_STYLE_FOOTNOTE is read only property');
	}
	this.TEXT_STYLE_FOOTNOTE = '';
	if (__SLAG__properties.TEXT_STYLE_HEADLINE) {
		throw new Error('Ti.UI.TEXT_STYLE_HEADLINE is read only property');
	}
	this.TEXT_STYLE_HEADLINE = '';
	if (__SLAG__properties.TEXT_STYLE_SUBHEADLINE) {
		throw new Error('Ti.UI.TEXT_STYLE_SUBHEADLINE is read only property');
	}
	this.TEXT_STYLE_SUBHEADLINE = '';
	if (__SLAG__properties.TEXT_VERTICAL_ALIGNMENT_BOTTOM) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM is read only property');
	}
	this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = 0;
	if (__SLAG__properties.TEXT_VERTICAL_ALIGNMENT_CENTER) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER is read only property');
	}
	this.TEXT_VERTICAL_ALIGNMENT_CENTER = 0;
	if (__SLAG__properties.TEXT_VERTICAL_ALIGNMENT_TOP) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP is read only property');
	}
	this.TEXT_VERTICAL_ALIGNMENT_TOP = 0;
	if (__SLAG__properties.UNIT_CM) {
		throw new Error('Ti.UI.UNIT_CM is read only property');
	}
	this.UNIT_CM = '';
	if (__SLAG__properties.UNIT_DIP) {
		throw new Error('Ti.UI.UNIT_DIP is read only property');
	}
	this.UNIT_DIP = '';
	if (__SLAG__properties.UNIT_IN) {
		throw new Error('Ti.UI.UNIT_IN is read only property');
	}
	this.UNIT_IN = '';
	if (__SLAG__properties.UNIT_MM) {
		throw new Error('Ti.UI.UNIT_MM is read only property');
	}
	this.UNIT_MM = '';
	if (__SLAG__properties.UNIT_PX) {
		throw new Error('Ti.UI.UNIT_PX is read only property');
	}
	this.UNIT_PX = '';
	if (__SLAG__properties.UNKNOWN) {
		throw new Error('Ti.UI.UNKNOWN is read only property');
	}
	this.UNKNOWN = 0;
	if (__SLAG__properties.UPSIDE_PORTRAIT) {
		throw new Error('Ti.UI.UPSIDE_PORTRAIT is read only property');
	}
	this.UPSIDE_PORTRAIT = 0;
	if (__SLAG__properties.URL_ERROR_AUTHENTICATION) {
		throw new Error('Ti.UI.URL_ERROR_AUTHENTICATION is read only property');
	}
	this.URL_ERROR_AUTHENTICATION = 0;
	if (__SLAG__properties.URL_ERROR_BAD_URL) {
		throw new Error('Ti.UI.URL_ERROR_BAD_URL is read only property');
	}
	this.URL_ERROR_BAD_URL = 0;
	if (__SLAG__properties.URL_ERROR_CONNECT) {
		throw new Error('Ti.UI.URL_ERROR_CONNECT is read only property');
	}
	this.URL_ERROR_CONNECT = 0;
	if (__SLAG__properties.URL_ERROR_FILE) {
		throw new Error('Ti.UI.URL_ERROR_FILE is read only property');
	}
	this.URL_ERROR_FILE = 0;
	if (__SLAG__properties.URL_ERROR_FILE_NOT_FOUND) {
		throw new Error('Ti.UI.URL_ERROR_FILE_NOT_FOUND is read only property');
	}
	this.URL_ERROR_FILE_NOT_FOUND = 0;
	if (__SLAG__properties.URL_ERROR_HOST_LOOKUP) {
		throw new Error('Ti.UI.URL_ERROR_HOST_LOOKUP is read only property');
	}
	this.URL_ERROR_HOST_LOOKUP = 0;
	if (__SLAG__properties.URL_ERROR_REDIRECT_LOOP) {
		throw new Error('Ti.UI.URL_ERROR_REDIRECT_LOOP is read only property');
	}
	this.URL_ERROR_REDIRECT_LOOP = 0;
	if (__SLAG__properties.URL_ERROR_SSL_FAILED) {
		throw new Error('Ti.UI.URL_ERROR_SSL_FAILED is read only property');
	}
	this.URL_ERROR_SSL_FAILED = 0;
	if (__SLAG__properties.URL_ERROR_TIMEOUT) {
		throw new Error('Ti.UI.URL_ERROR_TIMEOUT is read only property');
	}
	this.URL_ERROR_TIMEOUT = 0;
	if (__SLAG__properties.URL_ERROR_UNKNOWN) {
		throw new Error('Ti.UI.URL_ERROR_UNKNOWN is read only property');
	}
	this.URL_ERROR_UNKNOWN = 0;
	if (__SLAG__properties.URL_ERROR_UNSUPPORTED_SCHEME) {
		throw new Error('Ti.UI.URL_ERROR_UNSUPPORTED_SCHEME is read only property');
	}
	this.URL_ERROR_UNSUPPORTED_SCHEME = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.apiName is read only property');
	}
	this.apiName = 'Ti.UI';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.currentTab = __SLAG__properties.currentTab || {};
	if (__SLAG__properties.currentWindow) {
		throw new Error('Ti.UI.currentWindow is read only property');
	}
	this.currentWindow = {};
	if (__SLAG__properties.orientation) {
		throw new Error('Ti.UI.orientation was deprecated, since 1.7.2');
	}
	this.id = __SLAG__properties.id || '';
	return this;
}
UI.prototype.addEventListener = function () {
};
UI.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
UI.prototype.convertUnits = function () {
	return 0;
};
UI.prototype.create2DMatrix = function (params) {
	var TwoDMatrix = require('./UI/2DMatrix');
	return TwoDMatrix(params);
};
UI.prototype.create3DMatrix = function (params) {
	var ThreeDMatrix = require('./UI/3DMatrix');
	return ThreeDMatrix(params);
};
UI.prototype.createActivityIndicator = function (params) {
	var ActivityIndicator = require('./UI/ActivityIndicator');
	return ActivityIndicator(params);
};
UI.prototype.createAlertDialog = function (params) {
	var AlertDialog = require('./UI/AlertDialog');
	return AlertDialog(params);
};
UI.prototype.createAnimation = function (params) {
	var Animation = require('./UI/Animation');
	return Animation(params);
};
UI.prototype.createButton = function (params) {
	var Button = require('./UI/Button');
	return Button(params);
};
UI.prototype.createButtonBar = function (params) {
	var ButtonBar = require('./UI/ButtonBar');
	return ButtonBar(params);
};
UI.prototype.createCoverFlowView = function () {
	throw new Error('Ti.UI.createCoverFlowView was deprecated, since 1.8.0');
};
UI.prototype.createDashboardItem = function (params) {
	var DashboardItem = require('./UI/DashboardItem');
	return DashboardItem(params);
};
UI.prototype.createDashboardView = function (params) {
	var DashboardView = require('./UI/DashboardView');
	return DashboardView(params);
};
UI.prototype.createEmailDialog = function (params) {
	var EmailDialog = require('./UI/EmailDialog');
	return EmailDialog(params);
};
UI.prototype.createImageView = function (params) {
	var ImageView = require('./UI/ImageView');
	return ImageView(params);
};
UI.prototype.createLabel = function (params) {
	var Label = require('./UI/Label');
	return Label(params);
};
UI.prototype.createListSection = function (params) {
	var ListSection = require('./UI/ListSection');
	return ListSection(params);
};
UI.prototype.createListView = function (params) {
	var ListView = require('./UI/ListView');
	return ListView(params);
};
UI.prototype.createMaskedImage = function (params) {
	var MaskedImage = require('./UI/MaskedImage');
	return MaskedImage(params);
};
UI.prototype.createNotification = function (params) {
	var Notification = require('./UI/Notification');
	return Notification(params);
};
UI.prototype.createOptionDialog = function (params) {
	var OptionDialog = require('./UI/OptionDialog');
	return OptionDialog(params);
};
UI.prototype.createPicker = function (params) {
	var Picker = require('./UI/Picker');
	return Picker(params);
};
UI.prototype.createPickerColumn = function (params) {
	var PickerColumn = require('./UI/PickerColumn');
	return PickerColumn(params);
};
UI.prototype.createPickerRow = function (params) {
	var PickerRow = require('./UI/PickerRow');
	return PickerRow(params);
};
UI.prototype.createProgressBar = function (params) {
	var ProgressBar = require('./UI/ProgressBar');
	return ProgressBar(params);
};
UI.prototype.createRefreshControl = function (params) {
	var RefreshControl = require('./UI/RefreshControl');
	return RefreshControl(params);
};
UI.prototype.createSMSDialog = function (params) {
	var SMSDialog = require('./UI/SMSDialog');
	return SMSDialog(params);
};
UI.prototype.createScrollView = function (params) {
	var ScrollView = require('./UI/ScrollView');
	return ScrollView(params);
};
UI.prototype.createScrollableView = function (params) {
	var ScrollableView = require('./UI/ScrollableView');
	return ScrollableView(params);
};
UI.prototype.createSearchBar = function (params) {
	var SearchBar = require('./UI/SearchBar');
	return SearchBar(params);
};
UI.prototype.createSlider = function (params) {
	var Slider = require('./UI/Slider');
	return Slider(params);
};
UI.prototype.createSwitch = function (params) {
	var Switch = require('./UI/Switch');
	return Switch(params);
};
UI.prototype.createTab = function (params) {
	var Tab = require('./UI/Tab');
	return Tab(params);
};
UI.prototype.createTabGroup = function (params) {
	var TabGroup = require('./UI/TabGroup');
	return TabGroup(params);
};
UI.prototype.createTabbedBar = function () {
	throw new Error('Ti.UI.createTabbedBar was deprecated, since 1.8.0');
};
UI.prototype.createTableView = function (params) {
	var TableView = require('./UI/TableView');
	return TableView(params);
};
UI.prototype.createTableViewRow = function (params) {
	var TableViewRow = require('./UI/TableViewRow');
	return TableViewRow(params);
};
UI.prototype.createTableViewSection = function (params) {
	var TableViewSection = require('./UI/TableViewSection');
	return TableViewSection(params);
};
UI.prototype.createTextArea = function (params) {
	var TextArea = require('./UI/TextArea');
	return TextArea(params);
};
UI.prototype.createTextField = function (params) {
	var TextField = require('./UI/TextField');
	return TextField(params);
};
UI.prototype.createToolbar = function () {
	throw new Error('Ti.UI.createToolbar was deprecated, since 1.8.0');
};
UI.prototype.createView = function (params) {
	var View = require('./UI/View');
	return View(params);
};
UI.prototype.createWebView = function (params) {
	var WebView = require('./UI/WebView');
	return WebView(params);
};
UI.prototype.createWindow = function (params) {
	var Window = require('./UI/Window');
	return Window(params);
};
UI.prototype.fireEvent = function () {
};
UI.prototype.getApiName = function () {
	return this.apiName;
};
UI.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
UI.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
UI.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
UI.prototype.getCurrentTab = function () {
	return this.currentTab;
};
UI.prototype.getCurrentWindow = function () {
	return this.currentWindow;
};
UI.prototype.getOrientation = function () {
	throw new Error('Ti.UI.getOrientation was deprecated, since 1.7.2');
};
UI.prototype.removeEventListener = function () {
};
UI.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
UI.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
UI.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
UI.prototype.setCurrentTab = function (property) {
	this.currentTab = property;
};
UI.prototype.setOrientation = function () {
	throw new Error('Ti.UI.setOrientation was deprecated, since 1.7.2');
};
module.exports = function (properties) {
	return new UI(properties);
};