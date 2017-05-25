var crypto = require('crypto');
function iOS(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'ANIMATION_CURVE_EASE_IN',
			'ANIMATION_CURVE_EASE_IN_OUT',
			'ANIMATION_CURVE_EASE_OUT',
			'ANIMATION_CURVE_LINEAR',
			'ATTRIBUTE_FONT',
			'ATTRIBUTE_FOREGROUND_COLOR',
			'ATTRIBUTE_BACKGROUND_COLOR',
			'ATTRIBUTE_LIGATURE',
			'ATTRIBUTE_LETTERPRESS_STYLE',
			'ATTRIBUTE_KERN',
			'ATTRIBUTE_STRIKETHROUGH_STYLE',
			'ATTRIBUTE_UNDERLINES_STYLE',
			'ATTRIBUTE_STROKE_COLOR',
			'ATTRIBUTE_STROKE_WIDTH',
			'ATTRIBUTE_SHADOW',
			'ATTRIBUTE_WRITING_DIRECTION',
			'ATTRIBUTE_TEXT_EFFECT',
			'ATTRIBUTE_LINK',
			'ATTRIBUTE_BASELINE_OFFSET',
			'ATTRIBUTE_UNDERLINE_COLOR',
			'ATTRIBUTE_STRIKETHROUGH_COLOR',
			'ATTRIBUTE_OBLIQUENESS',
			'ATTRIBUTE_EXPANSION',
			'ATTRIBUTE_UNDERLINE_STYLE_NONE',
			'ATTRIBUTE_UNDERLINE_STYLE_SINGLE',
			'ATTRIBUTE_UNDERLINE_STYLE_THICK',
			'ATTRIBUTE_UNDERLINE_STYLE_DOUBLE',
			'ATTRIBUTE_UNDERLINE_PATTERN_SOLID',
			'ATTRIBUTE_UNDERLINE_PATTERN_DOT',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT',
			'ATTRIBUTE_UNDERLINE_BY_WORD',
			'ATTRIBUTE_WRITING_DIRECTION_EMBEDDING',
			'ATTRIBUTE_WRITING_DIRECTION_OVERRIDE',
			'ATTRIBUTE_WRITING_DIRECTION_NATURAL',
			'ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT',
			'ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT',
			'AUTODETECT_ADDRESS',
			'AUTODETECT_ALL',
			'AUTODETECT_CALENDAR',
			'AUTODETECT_LINK',
			'AUTODETECT_NONE',
			'AUTODETECT_PHONE',
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
			'BLUR_EFFECT_STYLE_EXTRA_LIGHT',
			'BLUR_EFFECT_STYLE_LIGHT',
			'BLUR_EFFECT_STYLE_DARK',
			'BLUR_EFFECT_STYLE_REGULAR',
			'BLUR_EFFECT_STYLE_PROMINENT',
			'AD_SIZE_PORTRAIT',
			'AD_SIZE_LANDSCAPE',
			'CLIP_MODE_DEFAULT',
			'CLIP_MODE_DISABLED',
			'CLIP_MODE_ENABLED',
			'COLLISION_MODE_ALL',
			'COLLISION_MODE_BOUNDARY',
			'COLLISION_MODE_ITEM',
			'COLOR_GROUP_TABLEVIEW_BACKGROUND',
			'COLOR_SCROLLVIEW_BACKGROUND',
			'COLOR_VIEW_FLIPSIDE_BACKGROUND',
			'COLOR_UNDER_PAGE_BACKGROUND',
			'forceTouchSupported',
			'FEEDBACK_GENERATOR_TYPE_SELECTION',
			'FEEDBACK_GENERATOR_TYPE_IMPACT',
			'FEEDBACK_GENERATOR_TYPE_NOTIFICATION',
			'FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS',
			'FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING',
			'FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR',
			'FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT',
			'FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM',
			'FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY',
			'LIVEPHOTO_PLAYBACK_STYLE_FULL',
			'LIVEPHOTO_PLAYBACK_STYLE_HINT',
			'MENU_POPUP_ARROW_DIRECTION_UP',
			'MENU_POPUP_ARROW_DIRECTION_DOWN',
			'MENU_POPUP_ARROW_DIRECTION_LEFT',
			'MENU_POPUP_ARROW_DIRECTION_RIGHT',
			'MENU_POPUP_ARROW_DIRECTION_DEFAULT',
			'PUSH_MODE_CONTINUOUS',
			'PUSH_MODE_INSTANTANEOUS',
			'PREVIEW_ACTION_STYLE_DEFAULT',
			'PREVIEW_ACTION_STYLE_SELECTED',
			'PREVIEW_ACTION_STYLE_DESTRUCTIVE',
			'ROW_ACTION_STYLE_DEFAULT',
			'ROW_ACTION_STYLE_DESTRUCTIVE',
			'ROW_ACTION_STYLE_NORMAL',
			'SCROLL_DECELERATION_RATE_FAST',
			'SCROLL_DECELERATION_RATE_NORMAL',
			'KEYBOARD_DISMISS_MODE_NONE',
			'KEYBOARD_DISMISS_MODE_ON_DRAG',
			'KEYBOARD_DISMISS_MODE_INTERACTIVE',
			'SEARCH_BAR_STYLE_PROMINENT',
			'SEARCH_BAR_STYLE_MINIMAL',
			'WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED',
			'WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD',
			'WEBVIEW_NAVIGATIONTYPE_RELOAD',
			'WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_OTHER',
			'TABLEVIEW_INDEX_SEARCH',
			'SHORTCUT_ICON_TYPE_COMPOSE',
			'SHORTCUT_ICON_TYPE_PLAY',
			'SHORTCUT_ICON_TYPE_PAUSE',
			'SHORTCUT_ICON_TYPE_ADD',
			'SHORTCUT_ICON_TYPE_LOCATION',
			'SHORTCUT_ICON_TYPE_SEARCH',
			'SHORTCUT_ICON_TYPE_SHARE',
			'SHORTCUT_ICON_TYPE_PROHIBIT',
			'SHORTCUT_ICON_TYPE_CONTACT',
			'SHORTCUT_ICON_TYPE_HOME',
			'SHORTCUT_ICON_TYPE_MARK_LOCATION',
			'SHORTCUT_ICON_TYPE_FAVORITE',
			'SHORTCUT_ICON_TYPE_LOVE',
			'SHORTCUT_ICON_TYPE_CLOUD',
			'SHORTCUT_ICON_TYPE_INVITATION',
			'SHORTCUT_ICON_TYPE_CONFIRMATION',
			'SHORTCUT_ICON_TYPE_MAIL',
			'SHORTCUT_ICON_TYPE_MESSAGE',
			'SHORTCUT_ICON_TYPE_DATE',
			'SHORTCUT_ICON_TYPE_TIME',
			'SHORTCUT_ICON_TYPE_CAPTURE_PHOTO',
			'SHORTCUT_ICON_TYPE_CAPTURE_VIDEO',
			'SHORTCUT_ICON_TYPE_TASK',
			'SHORTCUT_ICON_TYPE_TASK_COMPLETED',
			'SHORTCUT_ICON_TYPE_ALARM',
			'SHORTCUT_ICON_TYPE_BOOKMARK',
			'SHORTCUT_ICON_TYPE_SHUFFLE',
			'SHORTCUT_ICON_TYPE_AUDIO',
			'SHORTCUT_ICON_TYPE_UPDATE',
			'appBadge',
			'appSupportsShakeToEdit',
			'statusBarBackgroundColor',
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
		throw new Error('Ti.UI.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS';
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_IN) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN was deprecated, since 2.1.0');
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_IN_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT was deprecated, since 2.1.0');
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT was deprecated, since 2.1.0');
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_LINEAR) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_LINEAR was deprecated, since 2.1.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FONT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FONT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FOREGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_BACKGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BACKGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LIGATURE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LIGATURE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LETTERPRESS_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LETTERPRESS_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_KERN) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_KERN was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINES_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_WIDTH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_WIDTH was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_SHADOW) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_SHADOW was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_TEXT_EFFECT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_TEXT_EFFECT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LINK was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_BASELINE_OFFSET) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BASELINE_OFFSET was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_OBLIQUENESS) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_OBLIQUENESS was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_EXPANSION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_EXPANSION was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_NONE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_NONE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_SINGLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_THICK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_THICK was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_SOLID) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_SOLID was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_BY_WORD) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_BY_WORD was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_NATURAL) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_NATURAL was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT was deprecated, since 3.6.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ADDRESS was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_ALL) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ALL was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.iOS.AUTODETECT_CALENDAR was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_LINK) {
		throw new Error('Ti.UI.iOS.AUTODETECT_LINK was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_NONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_NONE was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_PHONE was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_CLEAR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_CLEAR = undefined;
	} else {
		this.BLEND_MODE_CLEAR = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_COLOR = undefined;
	} else {
		this.BLEND_MODE_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR_BURN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_COLOR_BURN = undefined;
	} else {
		this.BLEND_MODE_COLOR_BURN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR_DODGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_COLOR_DODGE = undefined;
	} else {
		this.BLEND_MODE_COLOR_DODGE = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COPY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_COPY = undefined;
	} else {
		this.BLEND_MODE_COPY = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DARKEN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DARKEN = undefined;
	} else {
		this.BLEND_MODE_DARKEN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_ATOP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DESTINATION_ATOP = undefined;
	} else {
		this.BLEND_MODE_DESTINATION_ATOP = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_IN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DESTINATION_IN = undefined;
	} else {
		this.BLEND_MODE_DESTINATION_IN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_OUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DESTINATION_OUT = undefined;
	} else {
		this.BLEND_MODE_DESTINATION_OUT = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_OVER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DESTINATION_OVER = undefined;
	} else {
		this.BLEND_MODE_DESTINATION_OVER = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DIFFERENCE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_DIFFERENCE = undefined;
	} else {
		this.BLEND_MODE_DIFFERENCE = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_EXCLUSION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_EXCLUSION = undefined;
	} else {
		this.BLEND_MODE_EXCLUSION = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_HARD_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_HARD_LIGHT = undefined;
	} else {
		this.BLEND_MODE_HARD_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_HUE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_HUE = undefined;
	} else {
		this.BLEND_MODE_HUE = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_LIGHTEN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_LIGHTEN = undefined;
	} else {
		this.BLEND_MODE_LIGHTEN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_LUMINOSITY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_LUMINOSITY = undefined;
	} else {
		this.BLEND_MODE_LUMINOSITY = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_MULTIPLY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_MULTIPLY = undefined;
	} else {
		this.BLEND_MODE_MULTIPLY = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_NORMAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_NORMAL = undefined;
	} else {
		this.BLEND_MODE_NORMAL = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_OVERLAY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_OVERLAY = undefined;
	} else {
		this.BLEND_MODE_OVERLAY = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_PLUS_DARKER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_PLUS_DARKER = undefined;
	} else {
		this.BLEND_MODE_PLUS_DARKER = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_PLUS_LIGHTER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_PLUS_LIGHTER = undefined;
	} else {
		this.BLEND_MODE_PLUS_LIGHTER = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SATURATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SATURATION = undefined;
	} else {
		this.BLEND_MODE_SATURATION = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SCREEN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SCREEN = undefined;
	} else {
		this.BLEND_MODE_SCREEN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOFT_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SOFT_LIGHT = undefined;
	} else {
		this.BLEND_MODE_SOFT_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_ATOP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SOURCE_ATOP = undefined;
	} else {
		this.BLEND_MODE_SOURCE_ATOP = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_IN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SOURCE_IN = undefined;
	} else {
		this.BLEND_MODE_SOURCE_IN = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_OUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_SOURCE_OUT = undefined;
	} else {
		this.BLEND_MODE_SOURCE_OUT = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_XOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLEND_MODE_XOR = undefined;
	} else {
		this.BLEND_MODE_XOR = 0;
	}
	if (__SLAG_PROPERTIES.BLUR_EFFECT_STYLE_EXTRA_LIGHT) {
		throw new Error('Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLUR_EFFECT_STYLE_EXTRA_LIGHT = undefined;
	} else {
		this.BLUR_EFFECT_STYLE_EXTRA_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.BLUR_EFFECT_STYLE_LIGHT) {
		throw new Error('Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLUR_EFFECT_STYLE_LIGHT = undefined;
	} else {
		this.BLUR_EFFECT_STYLE_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.BLUR_EFFECT_STYLE_DARK) {
		throw new Error('Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLUR_EFFECT_STYLE_DARK = undefined;
	} else {
		this.BLUR_EFFECT_STYLE_DARK = 0;
	}
	if (__SLAG_PROPERTIES.BLUR_EFFECT_STYLE_REGULAR) {
		throw new Error('Ti.UI.iOS.BLUR_EFFECT_STYLE_REGULAR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLUR_EFFECT_STYLE_REGULAR = undefined;
	} else {
		this.BLUR_EFFECT_STYLE_REGULAR = 0;
	}
	if (__SLAG_PROPERTIES.BLUR_EFFECT_STYLE_PROMINENT) {
		throw new Error('Ti.UI.iOS.BLUR_EFFECT_STYLE_PROMINENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BLUR_EFFECT_STYLE_PROMINENT = undefined;
	} else {
		this.BLUR_EFFECT_STYLE_PROMINENT = 0;
	}
	if (__SLAG_PROPERTIES.AD_SIZE_PORTRAIT) {
		throw new Error('Ti.UI.iOS.AD_SIZE_PORTRAIT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AD_SIZE_PORTRAIT = undefined;
	} else {
		this.AD_SIZE_PORTRAIT = '';
	}
	if (__SLAG_PROPERTIES.AD_SIZE_LANDSCAPE) {
		throw new Error('Ti.UI.iOS.AD_SIZE_LANDSCAPE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AD_SIZE_LANDSCAPE = undefined;
	} else {
		this.AD_SIZE_LANDSCAPE = '';
	}
	if (__SLAG_PROPERTIES.CLIP_MODE_DEFAULT) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLIP_MODE_DEFAULT = undefined;
	} else {
		this.CLIP_MODE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.CLIP_MODE_DISABLED) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_DISABLED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLIP_MODE_DISABLED = undefined;
	} else {
		this.CLIP_MODE_DISABLED = 0;
	}
	if (__SLAG_PROPERTIES.CLIP_MODE_ENABLED) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_ENABLED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CLIP_MODE_ENABLED = undefined;
	} else {
		this.CLIP_MODE_ENABLED = 0;
	}
	if (__SLAG_PROPERTIES.COLLISION_MODE_ALL) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_ALL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COLLISION_MODE_ALL = undefined;
	} else {
		this.COLLISION_MODE_ALL = 0;
	}
	if (__SLAG_PROPERTIES.COLLISION_MODE_BOUNDARY) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_BOUNDARY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COLLISION_MODE_BOUNDARY = undefined;
	} else {
		this.COLLISION_MODE_BOUNDARY = 0;
	}
	if (__SLAG_PROPERTIES.COLLISION_MODE_ITEM) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_ITEM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COLLISION_MODE_ITEM = undefined;
	} else {
		this.COLLISION_MODE_ITEM = 0;
	}
	if (__SLAG_PROPERTIES.COLOR_GROUP_TABLEVIEW_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_GROUP_TABLEVIEW_BACKGROUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COLOR_GROUP_TABLEVIEW_BACKGROUND = undefined;
	} else {
		this.COLOR_GROUP_TABLEVIEW_BACKGROUND = '';
	}
	if (__SLAG_PROPERTIES.COLOR_SCROLLVIEW_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_SCROLLVIEW_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.COLOR_VIEW_FLIPSIDE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.COLOR_UNDER_PAGE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.forceTouchSupported) {
		throw new Error('Ti.UI.iOS.forceTouchSupported is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.forceTouchSupported = undefined;
	} else {
		this.forceTouchSupported = true;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_TYPE_SELECTION) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_TYPE_SELECTION = undefined;
	} else {
		this.FEEDBACK_GENERATOR_TYPE_SELECTION = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_TYPE_IMPACT) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_TYPE_IMPACT = undefined;
	} else {
		this.FEEDBACK_GENERATOR_TYPE_IMPACT = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_TYPE_NOTIFICATION) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_TYPE_NOTIFICATION = undefined;
	} else {
		this.FEEDBACK_GENERATOR_TYPE_NOTIFICATION = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS = undefined;
	} else {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_SUCCESS = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING = undefined;
	} else {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_WARNING = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR = undefined;
	} else {
		this.FEEDBACK_GENERATOR_NOTIFICATION_TYPE_ERROR = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT = undefined;
	} else {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM = undefined;
	} else {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM = 0;
	}
	if (__SLAG_PROPERTIES.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY) {
		throw new Error('Ti.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY = undefined;
	} else {
		this.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY = 0;
	}
	if (__SLAG_PROPERTIES.LIVEPHOTO_PLAYBACK_STYLE_FULL) {
		throw new Error('Ti.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_FULL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIVEPHOTO_PLAYBACK_STYLE_FULL = undefined;
	} else {
		this.LIVEPHOTO_PLAYBACK_STYLE_FULL = 0;
	}
	if (__SLAG_PROPERTIES.LIVEPHOTO_PLAYBACK_STYLE_HINT) {
		throw new Error('Ti.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_HINT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIVEPHOTO_PLAYBACK_STYLE_HINT = undefined;
	} else {
		this.LIVEPHOTO_PLAYBACK_STYLE_HINT = 0;
	}
	if (__SLAG_PROPERTIES.MENU_POPUP_ARROW_DIRECTION_UP) {
		throw new Error('Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_UP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MENU_POPUP_ARROW_DIRECTION_UP = undefined;
	} else {
		this.MENU_POPUP_ARROW_DIRECTION_UP = 0;
	}
	if (__SLAG_PROPERTIES.MENU_POPUP_ARROW_DIRECTION_DOWN) {
		throw new Error('Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MENU_POPUP_ARROW_DIRECTION_DOWN = undefined;
	} else {
		this.MENU_POPUP_ARROW_DIRECTION_DOWN = 0;
	}
	if (__SLAG_PROPERTIES.MENU_POPUP_ARROW_DIRECTION_LEFT) {
		throw new Error('Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MENU_POPUP_ARROW_DIRECTION_LEFT = undefined;
	} else {
		this.MENU_POPUP_ARROW_DIRECTION_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.MENU_POPUP_ARROW_DIRECTION_RIGHT) {
		throw new Error('Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MENU_POPUP_ARROW_DIRECTION_RIGHT = undefined;
	} else {
		this.MENU_POPUP_ARROW_DIRECTION_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.MENU_POPUP_ARROW_DIRECTION_DEFAULT) {
		throw new Error('Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MENU_POPUP_ARROW_DIRECTION_DEFAULT = undefined;
	} else {
		this.MENU_POPUP_ARROW_DIRECTION_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.PUSH_MODE_CONTINUOUS) {
		throw new Error('Ti.UI.iOS.PUSH_MODE_CONTINUOUS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PUSH_MODE_CONTINUOUS = undefined;
	} else {
		this.PUSH_MODE_CONTINUOUS = 0;
	}
	if (__SLAG_PROPERTIES.PUSH_MODE_INSTANTANEOUS) {
		throw new Error('Ti.UI.iOS.PUSH_MODE_INSTANTANEOUS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PUSH_MODE_INSTANTANEOUS = undefined;
	} else {
		this.PUSH_MODE_INSTANTANEOUS = 0;
	}
	if (__SLAG_PROPERTIES.PREVIEW_ACTION_STYLE_DEFAULT) {
		throw new Error('Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIEW_ACTION_STYLE_DEFAULT = undefined;
	} else {
		this.PREVIEW_ACTION_STYLE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.PREVIEW_ACTION_STYLE_SELECTED) {
		throw new Error('Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIEW_ACTION_STYLE_SELECTED = undefined;
	} else {
		this.PREVIEW_ACTION_STYLE_SELECTED = 0;
	}
	if (__SLAG_PROPERTIES.PREVIEW_ACTION_STYLE_DESTRUCTIVE) {
		throw new Error('Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PREVIEW_ACTION_STYLE_DESTRUCTIVE = undefined;
	} else {
		this.PREVIEW_ACTION_STYLE_DESTRUCTIVE = 0;
	}
	if (__SLAG_PROPERTIES.ROW_ACTION_STYLE_DEFAULT) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ROW_ACTION_STYLE_DEFAULT = undefined;
	} else {
		this.ROW_ACTION_STYLE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.ROW_ACTION_STYLE_DESTRUCTIVE) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ROW_ACTION_STYLE_DESTRUCTIVE = undefined;
	} else {
		this.ROW_ACTION_STYLE_DESTRUCTIVE = 0;
	}
	if (__SLAG_PROPERTIES.ROW_ACTION_STYLE_NORMAL) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ROW_ACTION_STYLE_NORMAL = undefined;
	} else {
		this.ROW_ACTION_STYLE_NORMAL = 0;
	}
	if (__SLAG_PROPERTIES.SCROLL_DECELERATION_RATE_FAST) {
		throw new Error('Ti.UI.iOS.SCROLL_DECELERATION_RATE_FAST is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCROLL_DECELERATION_RATE_FAST = undefined;
	} else {
		this.SCROLL_DECELERATION_RATE_FAST = 0;
	}
	if (__SLAG_PROPERTIES.SCROLL_DECELERATION_RATE_NORMAL) {
		throw new Error('Ti.UI.iOS.SCROLL_DECELERATION_RATE_NORMAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SCROLL_DECELERATION_RATE_NORMAL = undefined;
	} else {
		this.SCROLL_DECELERATION_RATE_NORMAL = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_DISMISS_MODE_NONE) {
		throw new Error('Ti.UI.iOS.KEYBOARD_DISMISS_MODE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_DISMISS_MODE_NONE = undefined;
	} else {
		this.KEYBOARD_DISMISS_MODE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_DISMISS_MODE_ON_DRAG) {
		throw new Error('Ti.UI.iOS.KEYBOARD_DISMISS_MODE_ON_DRAG is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_DISMISS_MODE_ON_DRAG = undefined;
	} else {
		this.KEYBOARD_DISMISS_MODE_ON_DRAG = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_DISMISS_MODE_INTERACTIVE) {
		throw new Error('Ti.UI.iOS.KEYBOARD_DISMISS_MODE_INTERACTIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_DISMISS_MODE_INTERACTIVE = undefined;
	} else {
		this.KEYBOARD_DISMISS_MODE_INTERACTIVE = 0;
	}
	if (__SLAG_PROPERTIES.SEARCH_BAR_STYLE_PROMINENT) {
		throw new Error('Ti.UI.iOS.SEARCH_BAR_STYLE_PROMINENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SEARCH_BAR_STYLE_PROMINENT = undefined;
	} else {
		this.SEARCH_BAR_STYLE_PROMINENT = 0;
	}
	if (__SLAG_PROPERTIES.SEARCH_BAR_STYLE_MINIMAL) {
		throw new Error('Ti.UI.iOS.SEARCH_BAR_STYLE_MINIMAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SEARCH_BAR_STYLE_MINIMAL = undefined;
	} else {
		this.SEARCH_BAR_STYLE_MINIMAL = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_RELOAD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_RELOAD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_RELOAD = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_RELOAD = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_OTHER) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_OTHER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_OTHER = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_OTHER = 0;
	}
	if (__SLAG_PROPERTIES.TABLEVIEW_INDEX_SEARCH) {
		throw new Error('Ti.UI.iOS.TABLEVIEW_INDEX_SEARCH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TABLEVIEW_INDEX_SEARCH = undefined;
	} else {
		this.TABLEVIEW_INDEX_SEARCH = '';
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_COMPOSE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_COMPOSE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_COMPOSE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_COMPOSE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_PLAY) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_PLAY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_PLAY = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_PLAY = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_PAUSE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_PAUSE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_PAUSE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_PAUSE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_ADD) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_ADD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_ADD = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_ADD = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_LOCATION) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOCATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_LOCATION = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_LOCATION = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_SEARCH) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_SEARCH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_SEARCH = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_SEARCH = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_SHARE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHARE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_SHARE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_SHARE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_PROHIBIT) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_PROHIBIT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_PROHIBIT = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_PROHIBIT = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_CONTACT) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONTACT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_CONTACT = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_CONTACT = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_HOME) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_HOME is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_HOME = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_HOME = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_MARK_LOCATION) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_MARK_LOCATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_MARK_LOCATION = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_MARK_LOCATION = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_FAVORITE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_FAVORITE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_FAVORITE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_FAVORITE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_LOVE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_LOVE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_LOVE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_CLOUD) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_CLOUD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_CLOUD = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_CLOUD = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_INVITATION) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_INVITATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_INVITATION = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_INVITATION = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_CONFIRMATION) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_CONFIRMATION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_CONFIRMATION = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_CONFIRMATION = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_MAIL) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_MAIL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_MAIL = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_MAIL = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_MESSAGE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_MESSAGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_MESSAGE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_MESSAGE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_DATE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_DATE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_DATE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_DATE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_TIME) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_TIME is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_TIME = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_TIME = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_CAPTURE_PHOTO = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_CAPTURE_VIDEO = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_TASK) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_TASK = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_TASK = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_TASK_COMPLETED) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_TASK_COMPLETED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_TASK_COMPLETED = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_TASK_COMPLETED = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_ALARM) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_ALARM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_ALARM = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_ALARM = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_BOOKMARK) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_BOOKMARK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_BOOKMARK = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_BOOKMARK = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_SHUFFLE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_SHUFFLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_SHUFFLE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_SHUFFLE = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_AUDIO) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_AUDIO = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_AUDIO = 0;
	}
	if (__SLAG_PROPERTIES.SHORTCUT_ICON_TYPE_UPDATE) {
		throw new Error('Ti.UI.iOS.SHORTCUT_ICON_TYPE_UPDATE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SHORTCUT_ICON_TYPE_UPDATE = undefined;
	} else {
		this.SHORTCUT_ICON_TYPE_UPDATE = 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.appBadge = undefined;
	} else {
		this.appBadge = __SLAG_PROPERTIES.appBadge || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.appSupportsShakeToEdit = undefined;
	} else {
		this.appSupportsShakeToEdit = __SLAG_PROPERTIES.appSupportsShakeToEdit || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.statusBarBackgroundColor = undefined;
	} else {
		this.statusBarBackgroundColor = __SLAG_PROPERTIES.statusBarBackgroundColor || '';
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
iOS.prototype.createTransitionAnimation = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TransitionAnimation = require('./iOS/TransitionAnimation');
	return TransitionAnimation(__SLAG_PROPERTY);
};
iOS.prototype.create3DMatrix = function () {
	throw new Error('Ti.UI.iOS.create3DMatrix was deprecated, since 2.1.0');
};
iOS.prototype.createAdView = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AdView = require('./iOS/AdView');
	return AdView(__SLAG_PROPERTY);
};
iOS.prototype.createAnchorAttachmentBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AnchorAttachmentBehavior = require('./iOS/AnchorAttachmentBehavior');
	return AnchorAttachmentBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createAnimator = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Animator = require('./iOS/Animator');
	return Animator(__SLAG_PROPERTY);
};
iOS.prototype.createApplicationShortcuts = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ApplicationShortcuts = require('./iOS/ApplicationShortcuts');
	return ApplicationShortcuts(__SLAG_PROPERTY);
};
iOS.prototype.createAttribute = function () {
	throw new Error('Ti.UI.iOS.createAttribute was deprecated, since 3.6.0');
};
iOS.prototype.createAttributedString = function () {
	throw new Error('Ti.UI.iOS.createAttributedString was deprecated, since 3.6.0');
};
iOS.prototype.createBlurView = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var BlurView = require('./iOS/BlurView');
	return BlurView(__SLAG_PROPERTY);
};
iOS.prototype.createCollisionBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var CollisionBehavior = require('./iOS/CollisionBehavior');
	return CollisionBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createCoverFlowView = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var CoverFlowView = require('./iOS/CoverFlowView');
	return CoverFlowView(__SLAG_PROPERTY);
};
iOS.prototype.createDocumentViewer = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var DocumentViewer = require('./iOS/DocumentViewer');
	return DocumentViewer(__SLAG_PROPERTY);
};
iOS.prototype.createDynamicItemBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var DynamicItemBehavior = require('./iOS/DynamicItemBehavior');
	return DynamicItemBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createFeedbackGenerator = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var FeedbackGenerator = require('./iOS/FeedbackGenerator');
	return FeedbackGenerator(__SLAG_PROPERTY);
};
iOS.prototype.createGravityBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var GravityBehavior = require('./iOS/GravityBehavior');
	return GravityBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createLivePhotoView = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var LivePhotoView = require('./iOS/LivePhotoView');
	return LivePhotoView(__SLAG_PROPERTY);
};
iOS.prototype.createNavigationWindow = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NavigationWindow = require('./iOS/NavigationWindow');
	return NavigationWindow(__SLAG_PROPERTY);
};
iOS.prototype.createPreviewAction = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PreviewAction = require('./iOS/PreviewAction');
	return PreviewAction(__SLAG_PROPERTY);
};
iOS.prototype.createPreviewActionGroup = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PreviewActionGroup = require('./iOS/PreviewActionGroup');
	return PreviewActionGroup(__SLAG_PROPERTY);
};
iOS.prototype.createPreviewContext = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PreviewContext = require('./iOS/PreviewContext');
	return PreviewContext(__SLAG_PROPERTY);
};
iOS.prototype.createPushBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PushBehavior = require('./iOS/PushBehavior');
	return PushBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createSnapBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SnapBehavior = require('./iOS/SnapBehavior');
	return SnapBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createSplitWindow = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SplitWindow = require('./iOS/SplitWindow');
	return SplitWindow(__SLAG_PROPERTY);
};
iOS.prototype.createStepper = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Stepper = require('./iOS/Stepper');
	return Stepper(__SLAG_PROPERTY);
};
iOS.prototype.createSystemButton = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SystemButton = require('./iOS/SystemButton');
	return SystemButton(__SLAG_PROPERTY);
};
iOS.prototype.createTabbedBar = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TabbedBar = require('./iOS/TabbedBar');
	return TabbedBar(__SLAG_PROPERTY);
};
iOS.prototype.createToolbar = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Toolbar = require('./iOS/Toolbar');
	return Toolbar(__SLAG_PROPERTY);
};
iOS.prototype.createViewAttachmentBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ViewAttachmentBehavior = require('./iOS/ViewAttachmentBehavior');
	return ViewAttachmentBehavior(__SLAG_PROPERTY);
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
iOS.prototype.getForceTouchSupported = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.forceTouchSupported;
};
iOS.prototype.getAppBadge = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appBadge;
};
iOS.prototype.setAppBadge = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.appBadge = __SLAG__PROPERTY;
};
iOS.prototype.getAppSupportsShakeToEdit = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appSupportsShakeToEdit;
};
iOS.prototype.setAppSupportsShakeToEdit = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.appSupportsShakeToEdit = __SLAG__PROPERTY;
};
iOS.prototype.getStatusBarBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.statusBarBackgroundColor;
};
iOS.prototype.setStatusBarBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.statusBarBackgroundColor = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new iOS(properties);
};