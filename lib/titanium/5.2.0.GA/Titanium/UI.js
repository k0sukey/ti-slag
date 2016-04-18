var crypto = require('crypto');
function UI(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
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
			'ATTRIBUTE_LINE_BREAK',
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
			'ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING',
			'ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING',
			'ATTRIBUTE_LINE_BREAK_BY_CLIPPING',
			'ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD',
			'ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE',
			'ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL',
			'AUTODETECT_ADDRESS',
			'AUTODETECT_ALL',
			'AUTODETECT_CALENDAR',
			'AUTODETECT_LINK',
			'AUTODETECT_NONE',
			'AUTODETECT_PHONE',
			'AUTOLINK_MAP_ADDRESSES',
			'AUTOLINK_ALL',
			'AUTOLINK_CALENDAR',
			'AUTOLINK_URLS',
			'AUTOLINK_NONE',
			'AUTOLINK_PHONE_NUMBERS',
			'AUTOLINK_EMAIL_ADDRESSES',
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
			'TEXT_ELLIPSIZE_TRUNCATE_START',
			'TEXT_ELLIPSIZE_TRUNCATE_MIDDLE',
			'TEXT_ELLIPSIZE_TRUNCATE_END',
			'TEXT_ELLIPSIZE_TRUNCATE_MARQUEE',
			'EXTEND_EDGE_TOP',
			'EXTEND_EDGE_BOTTOM',
			'EXTEND_EDGE_LEFT',
			'EXTEND_EDGE_RIGHT',
			'EXTEND_EDGE_NONE',
			'EXTEND_EDGE_ALL',
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
			'INPUT_TYPE_CLASS_NUMBER',
			'INPUT_TYPE_CLASS_TEXT',
			'KEYBOARD_APPEARANCE_ALERT',
			'KEYBOARD_APPEARANCE_DEFAULT',
			'KEYBOARD_APPEARANCE_DARK',
			'KEYBOARD_APPEARANCE_LIGHT',
			'KEYBOARD_ASCII',
			'KEYBOARD_DECIMAL_PAD',
			'KEYBOARD_DEFAULT',
			'KEYBOARD_EMAIL',
			'KEYBOARD_NAMEPHONE_PAD',
			'KEYBOARD_NUMBERS_PUNCTUATION',
			'KEYBOARD_NUMBER_PAD',
			'KEYBOARD_PHONE_PAD',
			'KEYBOARD_URL',
			'KEYBOARD_TYPE_DECIMAL_PAD',
			'KEYBOARD_TYPE_ASCII',
			'KEYBOARD_TYPE_DEFAULT',
			'KEYBOARD_TYPE_EMAIL',
			'KEYBOARD_TYPE_NAMEPHONE_PAD',
			'KEYBOARD_TYPE_NUMBERS_PUNCTUATION',
			'KEYBOARD_TYPE_NUMBER_PAD',
			'KEYBOARD_TYPE_PHONE_PAD',
			'KEYBOARD_TYPE_WEBSEARCH',
			'KEYBOARD_TYPE_TWITTER',
			'KEYBOARD_TYPE_URL',
			'LANDSCAPE_LEFT',
			'LANDSCAPE_RIGHT',
			'LIST_ACCESSORY_TYPE_NONE',
			'LIST_ACCESSORY_TYPE_CHECKMARK',
			'LIST_ACCESSORY_TYPE_DETAIL',
			'LIST_ACCESSORY_TYPE_DISCLOSURE',
			'LIST_ITEM_TEMPLATE_DEFAULT',
			'LIST_ITEM_TEMPLATE_SETTINGS',
			'LIST_ITEM_TEMPLATE_CONTACTS',
			'LIST_ITEM_TEMPLATE_SUBTITLE',
			'NOTIFICATION_DURATION_LONG',
			'NOTIFICATION_DURATION_SHORT',
			'PICKER_TYPE_COUNT_DOWN_TIMER',
			'PICKER_TYPE_DATE',
			'PICKER_TYPE_DATE_AND_TIME',
			'PICKER_TYPE_PLAIN',
			'PICKER_TYPE_TIME',
			'PORTRAIT',
			'RETURNKEY_CONTINUE',
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
			'TABLE_VIEW_SEPARATOR_STYLE_NONE',
			'TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE',
			'TEXT_ALIGNMENT_CENTER',
			'TEXT_ALIGNMENT_LEFT',
			'TEXT_ALIGNMENT_RIGHT',
			'TEXT_AUTOCAPITALIZATION_ALL',
			'TEXT_AUTOCAPITALIZATION_NONE',
			'TEXT_AUTOCAPITALIZATION_SENTENCES',
			'TEXT_AUTOCAPITALIZATION_WORDS',
			'TEXT_STYLE_HEADLINE',
			'TEXT_STYLE_SUBHEADLINE',
			'TEXT_STYLE_BODY',
			'TEXT_STYLE_FOOTNOTE',
			'TEXT_STYLE_CAPTION1',
			'TEXT_STYLE_CAPTION2',
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
			'URL_ERROR_SSL_FAILED',
			'URL_ERROR_FILE',
			'URL_ERROR_FILE_NOT_FOUND',
			'URL_ERROR_HOST_LOOKUP',
			'URL_ERROR_REDIRECT_LOOP',
			'URL_ERROR_TIMEOUT',
			'URL_ERROR_UNKNOWN',
			'URL_ERROR_UNSUPPORTED_SCHEME',
			'backgroundColor',
			'backgroundImage',
			'currentTab',
			'currentWindow',
			'orientation',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.apiName is read only property');
	}
	this.apiName = 'Ti.UI';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_IN) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_IN is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANIMATION_CURVE_EASE_IN = undefined;
	} else {
		this.ANIMATION_CURVE_EASE_IN = 0;
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_IN_OUT) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_IN_OUT is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANIMATION_CURVE_EASE_IN_OUT = undefined;
	} else {
		this.ANIMATION_CURVE_EASE_IN_OUT = 0;
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_EASE_OUT) {
		throw new Error('Ti.UI.ANIMATION_CURVE_EASE_OUT is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANIMATION_CURVE_EASE_OUT = undefined;
	} else {
		this.ANIMATION_CURVE_EASE_OUT = 0;
	}
	if (__SLAG_PROPERTIES.ANIMATION_CURVE_LINEAR) {
		throw new Error('Ti.UI.ANIMATION_CURVE_LINEAR is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANIMATION_CURVE_LINEAR = undefined;
	} else {
		this.ANIMATION_CURVE_LINEAR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FONT) {
		throw new Error('Ti.UI.ATTRIBUTE_FONT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_FONT = undefined;
	} else {
		this.ATTRIBUTE_FONT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FOREGROUND_COLOR) {
		throw new Error('Ti.UI.ATTRIBUTE_FOREGROUND_COLOR is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_FOREGROUND_COLOR = undefined;
	} else {
		this.ATTRIBUTE_FOREGROUND_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_BACKGROUND_COLOR) {
		throw new Error('Ti.UI.ATTRIBUTE_BACKGROUND_COLOR is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_BACKGROUND_COLOR = undefined;
	} else {
		this.ATTRIBUTE_BACKGROUND_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LIGATURE) {
		throw new Error('Ti.UI.ATTRIBUTE_LIGATURE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LIGATURE = undefined;
	} else {
		this.ATTRIBUTE_LIGATURE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LETTERPRESS_STYLE) {
		throw new Error('Ti.UI.ATTRIBUTE_LETTERPRESS_STYLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LETTERPRESS_STYLE = undefined;
	} else {
		this.ATTRIBUTE_LETTERPRESS_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_KERN) {
		throw new Error('Ti.UI.ATTRIBUTE_KERN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_KERN = undefined;
	} else {
		this.ATTRIBUTE_KERN = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_STYLE) {
		throw new Error('Ti.UI.ATTRIBUTE_STRIKETHROUGH_STYLE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STRIKETHROUGH_STYLE = undefined;
	} else {
		this.ATTRIBUTE_STRIKETHROUGH_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINES_STYLE) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINES_STYLE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINES_STYLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINES_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_COLOR) {
		throw new Error('Ti.UI.ATTRIBUTE_STROKE_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STROKE_COLOR = undefined;
	} else {
		this.ATTRIBUTE_STROKE_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_WIDTH) {
		throw new Error('Ti.UI.ATTRIBUTE_STROKE_WIDTH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STROKE_WIDTH = undefined;
	} else {
		this.ATTRIBUTE_STROKE_WIDTH = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_SHADOW) {
		throw new Error('Ti.UI.ATTRIBUTE_SHADOW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_SHADOW = undefined;
	} else {
		this.ATTRIBUTE_SHADOW = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_TEXT_EFFECT) {
		throw new Error('Ti.UI.ATTRIBUTE_TEXT_EFFECT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_TEXT_EFFECT = undefined;
	} else {
		this.ATTRIBUTE_TEXT_EFFECT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINK) {
		throw new Error('Ti.UI.ATTRIBUTE_LINK is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINK = undefined;
	} else {
		this.ATTRIBUTE_LINK = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_BASELINE_OFFSET) {
		throw new Error('Ti.UI.ATTRIBUTE_BASELINE_OFFSET is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_BASELINE_OFFSET = undefined;
	} else {
		this.ATTRIBUTE_BASELINE_OFFSET = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_COLOR) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_COLOR = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_COLOR) {
		throw new Error('Ti.UI.ATTRIBUTE_STRIKETHROUGH_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STRIKETHROUGH_COLOR = undefined;
	} else {
		this.ATTRIBUTE_STRIKETHROUGH_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_OBLIQUENESS) {
		throw new Error('Ti.UI.ATTRIBUTE_OBLIQUENESS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_OBLIQUENESS = undefined;
	} else {
		this.ATTRIBUTE_OBLIQUENESS = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_EXPANSION) {
		throw new Error('Ti.UI.ATTRIBUTE_EXPANSION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_EXPANSION = undefined;
	} else {
		this.ATTRIBUTE_EXPANSION = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_NONE) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_NONE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_SINGLE) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_THICK) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_THICK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_THICK = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_THICK = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_SOLID) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_PATTERN_SOLID is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DOT) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_PATTERN_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_BY_WORD) {
		throw new Error('Ti.UI.ATTRIBUTE_UNDERLINE_BY_WORD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_BY_WORD = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_BY_WORD = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_NATURAL) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION_NATURAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT) {
		throw new Error('Ti.UI.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_CLIPPING) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_CLIPPING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_CLIPPING = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_CLIPPING = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL) {
		throw new Error('Ti.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL = undefined;
	} else {
		this.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL = 0;
	}
	if (__SLAG_PROPERTIES.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.AUTODETECT_ADDRESS was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_ALL) {
		throw new Error('Ti.UI.AUTODETECT_ALL was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.AUTODETECT_CALENDAR was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_LINK) {
		throw new Error('Ti.UI.AUTODETECT_LINK was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_NONE) {
		throw new Error('Ti.UI.AUTODETECT_NONE was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.AUTODETECT_PHONE was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.AUTOLINK_MAP_ADDRESSES) {
		throw new Error('Ti.UI.AUTOLINK_MAP_ADDRESSES is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_MAP_ADDRESSES = undefined;
	} else {
		this.AUTOLINK_MAP_ADDRESSES = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_ALL) {
		throw new Error('Ti.UI.AUTOLINK_ALL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_ALL = undefined;
	} else {
		this.AUTOLINK_ALL = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_CALENDAR) {
		throw new Error('Ti.UI.AUTOLINK_CALENDAR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_CALENDAR = undefined;
	} else {
		this.AUTOLINK_CALENDAR = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_URLS) {
		throw new Error('Ti.UI.AUTOLINK_URLS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_URLS = undefined;
	} else {
		this.AUTOLINK_URLS = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_NONE) {
		throw new Error('Ti.UI.AUTOLINK_NONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_NONE = undefined;
	} else {
		this.AUTOLINK_NONE = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_PHONE_NUMBERS) {
		throw new Error('Ti.UI.AUTOLINK_PHONE_NUMBERS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_PHONE_NUMBERS = undefined;
	} else {
		this.AUTOLINK_PHONE_NUMBERS = 0;
	}
	if (__SLAG_PROPERTIES.AUTOLINK_EMAIL_ADDRESSES) {
		throw new Error('Ti.UI.AUTOLINK_EMAIL_ADDRESSES is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUTOLINK_EMAIL_ADDRESSES = undefined;
	} else {
		this.AUTOLINK_EMAIL_ADDRESSES = 0;
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.BLEND_MODE_CLEAR was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_BURN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_DODGE was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.BLEND_MODE_COPY was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.BLEND_MODE_DARKEN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_ATOP was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_IN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OUT was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OVER was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.BLEND_MODE_DIFFERENCE was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.BLEND_MODE_EXCLUSION was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_HARD_LIGHT was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.BLEND_MODE_HUE was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.BLEND_MODE_LIGHTEN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.BLEND_MODE_LUMINOSITY was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.BLEND_MODE_MULTIPLY was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.BLEND_MODE_NORMAL was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.BLEND_MODE_OVERLAY was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_DARKER was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_LIGHTER was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.BLEND_MODE_SATURATION was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.BLEND_MODE_SCREEN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_SOFT_LIGHT was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_ATOP was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_IN was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_OUT was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.BLEND_MODE_XOR was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.TEXT_ELLIPSIZE_TRUNCATE_START) {
		throw new Error('Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_START is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ELLIPSIZE_TRUNCATE_START = undefined;
	} else {
		this.TEXT_ELLIPSIZE_TRUNCATE_START = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE) {
		throw new Error('Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE = undefined;
	} else {
		this.TEXT_ELLIPSIZE_TRUNCATE_MIDDLE = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ELLIPSIZE_TRUNCATE_END) {
		throw new Error('Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ELLIPSIZE_TRUNCATE_END = undefined;
	} else {
		this.TEXT_ELLIPSIZE_TRUNCATE_END = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE) {
		throw new Error('Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE = undefined;
	} else {
		this.TEXT_ELLIPSIZE_TRUNCATE_MARQUEE = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_TOP) {
		throw new Error('Ti.UI.EXTEND_EDGE_TOP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_TOP = undefined;
	} else {
		this.EXTEND_EDGE_TOP = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_BOTTOM) {
		throw new Error('Ti.UI.EXTEND_EDGE_BOTTOM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_BOTTOM = undefined;
	} else {
		this.EXTEND_EDGE_BOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_LEFT) {
		throw new Error('Ti.UI.EXTEND_EDGE_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_LEFT = undefined;
	} else {
		this.EXTEND_EDGE_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_RIGHT) {
		throw new Error('Ti.UI.EXTEND_EDGE_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_RIGHT = undefined;
	} else {
		this.EXTEND_EDGE_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_NONE) {
		throw new Error('Ti.UI.EXTEND_EDGE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_NONE = undefined;
	} else {
		this.EXTEND_EDGE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.EXTEND_EDGE_ALL) {
		throw new Error('Ti.UI.EXTEND_EDGE_ALL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EXTEND_EDGE_ALL = undefined;
	} else {
		this.EXTEND_EDGE_ALL = 0;
	}
	if (__SLAG_PROPERTIES.FACE_DOWN) {
		throw new Error('Ti.UI.FACE_DOWN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FACE_DOWN = undefined;
	} else {
		this.FACE_DOWN = 0;
	}
	if (__SLAG_PROPERTIES.FACE_UP) {
		throw new Error('Ti.UI.FACE_UP is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FACE_UP = undefined;
	} else {
		this.FACE_UP = 0;
	}
	if (__SLAG_PROPERTIES.FILL) {
		throw new Error('Ti.UI.FILL is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FILL = undefined;
	} else {
		this.FILL = '';
	}
	if (__SLAG_PROPERTIES.INHERIT) {
		throw new Error('Ti.UI.INHERIT is read only property');
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INHERIT = undefined;
	} else {
		this.INHERIT = '';
	}
	if (__SLAG_PROPERTIES.INPUT_BORDERSTYLE_BEZEL) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_BEZEL is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BORDERSTYLE_BEZEL = undefined;
	} else {
		this.INPUT_BORDERSTYLE_BEZEL = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BORDERSTYLE_LINE) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_LINE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BORDERSTYLE_LINE = undefined;
	} else {
		this.INPUT_BORDERSTYLE_LINE = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BORDERSTYLE_NONE) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_NONE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BORDERSTYLE_NONE = undefined;
	} else {
		this.INPUT_BORDERSTYLE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BORDERSTYLE_ROUNDED) {
		throw new Error('Ti.UI.INPUT_BORDERSTYLE_ROUNDED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BORDERSTYLE_ROUNDED = undefined;
	} else {
		this.INPUT_BORDERSTYLE_ROUNDED = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BUTTONMODE_ALWAYS) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ALWAYS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BUTTONMODE_ALWAYS = undefined;
	} else {
		this.INPUT_BUTTONMODE_ALWAYS = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BUTTONMODE_NEVER) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_NEVER is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BUTTONMODE_NEVER = undefined;
	} else {
		this.INPUT_BUTTONMODE_NEVER = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BUTTONMODE_ONBLUR) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ONBLUR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BUTTONMODE_ONBLUR = undefined;
	} else {
		this.INPUT_BUTTONMODE_ONBLUR = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_BUTTONMODE_ONFOCUS) {
		throw new Error('Ti.UI.INPUT_BUTTONMODE_ONFOCUS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_BUTTONMODE_ONFOCUS = undefined;
	} else {
		this.INPUT_BUTTONMODE_ONFOCUS = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_TYPE_CLASS_NUMBER) {
		throw new Error('Ti.UI.INPUT_TYPE_CLASS_NUMBER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_TYPE_CLASS_NUMBER = undefined;
	} else {
		this.INPUT_TYPE_CLASS_NUMBER = 0;
	}
	if (__SLAG_PROPERTIES.INPUT_TYPE_CLASS_TEXT) {
		throw new Error('Ti.UI.INPUT_TYPE_CLASS_TEXT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INPUT_TYPE_CLASS_TEXT = undefined;
	} else {
		this.INPUT_TYPE_CLASS_TEXT = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_APPEARANCE_ALERT) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_ALERT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_APPEARANCE_ALERT = undefined;
	} else {
		this.KEYBOARD_APPEARANCE_ALERT = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_APPEARANCE_DEFAULT) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_APPEARANCE_DEFAULT = undefined;
	} else {
		this.KEYBOARD_APPEARANCE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_APPEARANCE_DARK) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_DARK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_APPEARANCE_DARK = undefined;
	} else {
		this.KEYBOARD_APPEARANCE_DARK = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_APPEARANCE_LIGHT) {
		throw new Error('Ti.UI.KEYBOARD_APPEARANCE_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_APPEARANCE_LIGHT = undefined;
	} else {
		this.KEYBOARD_APPEARANCE_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_ASCII) {
		throw new Error('Ti.UI.KEYBOARD_ASCII was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_DECIMAL_PAD) {
		throw new Error('Ti.UI.KEYBOARD_DECIMAL_PAD was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_DEFAULT) {
		throw new Error('Ti.UI.KEYBOARD_DEFAULT was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_EMAIL) {
		throw new Error('Ti.UI.KEYBOARD_EMAIL was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_NAMEPHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_NAMEPHONE_PAD was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_NUMBERS_PUNCTUATION) {
		throw new Error('Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_NUMBER_PAD) {
		throw new Error('Ti.UI.KEYBOARD_NUMBER_PAD was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_PHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_PHONE_PAD was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_URL) {
		throw new Error('Ti.UI.KEYBOARD_URL was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_DECIMAL_PAD) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_DECIMAL_PAD = undefined;
	} else {
		this.KEYBOARD_TYPE_DECIMAL_PAD = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_ASCII) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_ASCII is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_ASCII = undefined;
	} else {
		this.KEYBOARD_TYPE_ASCII = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_DEFAULT) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_DEFAULT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_DEFAULT = undefined;
	} else {
		this.KEYBOARD_TYPE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_EMAIL) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_EMAIL is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_EMAIL = undefined;
	} else {
		this.KEYBOARD_TYPE_EMAIL = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_NAMEPHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_NAMEPHONE_PAD is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_NAMEPHONE_PAD = undefined;
	} else {
		this.KEYBOARD_TYPE_NAMEPHONE_PAD = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_NUMBERS_PUNCTUATION) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_NUMBERS_PUNCTUATION is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_NUMBERS_PUNCTUATION = undefined;
	} else {
		this.KEYBOARD_TYPE_NUMBERS_PUNCTUATION = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_NUMBER_PAD) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_NUMBER_PAD is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_NUMBER_PAD = undefined;
	} else {
		this.KEYBOARD_TYPE_NUMBER_PAD = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_PHONE_PAD) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_PHONE_PAD is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_PHONE_PAD = undefined;
	} else {
		this.KEYBOARD_TYPE_PHONE_PAD = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_WEBSEARCH) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_WEBSEARCH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_WEBSEARCH = undefined;
	} else {
		this.KEYBOARD_TYPE_WEBSEARCH = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_TWITTER) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_TWITTER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_TWITTER = undefined;
	} else {
		this.KEYBOARD_TYPE_TWITTER = 0;
	}
	if (__SLAG_PROPERTIES.KEYBOARD_TYPE_URL) {
		throw new Error('Ti.UI.KEYBOARD_TYPE_URL is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.KEYBOARD_TYPE_URL = undefined;
	} else {
		this.KEYBOARD_TYPE_URL = 0;
	}
	if (__SLAG_PROPERTIES.LANDSCAPE_LEFT) {
		throw new Error('Ti.UI.LANDSCAPE_LEFT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LANDSCAPE_LEFT = undefined;
	} else {
		this.LANDSCAPE_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.LANDSCAPE_RIGHT) {
		throw new Error('Ti.UI.LANDSCAPE_RIGHT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LANDSCAPE_RIGHT = undefined;
	} else {
		this.LANDSCAPE_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ACCESSORY_TYPE_NONE) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_NONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ACCESSORY_TYPE_NONE = undefined;
	} else {
		this.LIST_ACCESSORY_TYPE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ACCESSORY_TYPE_CHECKMARK) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ACCESSORY_TYPE_CHECKMARK = undefined;
	} else {
		this.LIST_ACCESSORY_TYPE_CHECKMARK = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ACCESSORY_TYPE_DETAIL) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_DETAIL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ACCESSORY_TYPE_DETAIL = undefined;
	} else {
		this.LIST_ACCESSORY_TYPE_DETAIL = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ACCESSORY_TYPE_DISCLOSURE) {
		throw new Error('Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ACCESSORY_TYPE_DISCLOSURE = undefined;
	} else {
		this.LIST_ACCESSORY_TYPE_DISCLOSURE = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ITEM_TEMPLATE_DEFAULT) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ITEM_TEMPLATE_DEFAULT = undefined;
	} else {
		this.LIST_ITEM_TEMPLATE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ITEM_TEMPLATE_SETTINGS) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ITEM_TEMPLATE_SETTINGS = undefined;
	} else {
		this.LIST_ITEM_TEMPLATE_SETTINGS = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ITEM_TEMPLATE_CONTACTS) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ITEM_TEMPLATE_CONTACTS = undefined;
	} else {
		this.LIST_ITEM_TEMPLATE_CONTACTS = 0;
	}
	if (__SLAG_PROPERTIES.LIST_ITEM_TEMPLATE_SUBTITLE) {
		throw new Error('Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LIST_ITEM_TEMPLATE_SUBTITLE = undefined;
	} else {
		this.LIST_ITEM_TEMPLATE_SUBTITLE = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_DURATION_LONG) {
		throw new Error('Ti.UI.NOTIFICATION_DURATION_LONG is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_DURATION_LONG = undefined;
	} else {
		this.NOTIFICATION_DURATION_LONG = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_DURATION_SHORT) {
		throw new Error('Ti.UI.NOTIFICATION_DURATION_SHORT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_DURATION_SHORT = undefined;
	} else {
		this.NOTIFICATION_DURATION_SHORT = 0;
	}
	if (__SLAG_PROPERTIES.PICKER_TYPE_COUNT_DOWN_TIMER) {
		throw new Error('Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICKER_TYPE_COUNT_DOWN_TIMER = undefined;
	} else {
		this.PICKER_TYPE_COUNT_DOWN_TIMER = 0;
	}
	if (__SLAG_PROPERTIES.PICKER_TYPE_DATE) {
		throw new Error('Ti.UI.PICKER_TYPE_DATE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICKER_TYPE_DATE = undefined;
	} else {
		this.PICKER_TYPE_DATE = 0;
	}
	if (__SLAG_PROPERTIES.PICKER_TYPE_DATE_AND_TIME) {
		throw new Error('Ti.UI.PICKER_TYPE_DATE_AND_TIME is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICKER_TYPE_DATE_AND_TIME = undefined;
	} else {
		this.PICKER_TYPE_DATE_AND_TIME = 0;
	}
	if (__SLAG_PROPERTIES.PICKER_TYPE_PLAIN) {
		throw new Error('Ti.UI.PICKER_TYPE_PLAIN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICKER_TYPE_PLAIN = undefined;
	} else {
		this.PICKER_TYPE_PLAIN = 0;
	}
	if (__SLAG_PROPERTIES.PICKER_TYPE_TIME) {
		throw new Error('Ti.UI.PICKER_TYPE_TIME is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PICKER_TYPE_TIME = undefined;
	} else {
		this.PICKER_TYPE_TIME = 0;
	}
	if (__SLAG_PROPERTIES.PORTRAIT) {
		throw new Error('Ti.UI.PORTRAIT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PORTRAIT = undefined;
	} else {
		this.PORTRAIT = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_CONTINUE) {
		throw new Error('Ti.UI.RETURNKEY_CONTINUE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_CONTINUE = undefined;
	} else {
		this.RETURNKEY_CONTINUE = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_DEFAULT) {
		throw new Error('Ti.UI.RETURNKEY_DEFAULT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_DEFAULT = undefined;
	} else {
		this.RETURNKEY_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_DONE) {
		throw new Error('Ti.UI.RETURNKEY_DONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_DONE = undefined;
	} else {
		this.RETURNKEY_DONE = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_EMERGENCY_CALL) {
		throw new Error('Ti.UI.RETURNKEY_EMERGENCY_CALL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_EMERGENCY_CALL = undefined;
	} else {
		this.RETURNKEY_EMERGENCY_CALL = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_GO) {
		throw new Error('Ti.UI.RETURNKEY_GO is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_GO = undefined;
	} else {
		this.RETURNKEY_GO = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_GOOGLE) {
		throw new Error('Ti.UI.RETURNKEY_GOOGLE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_GOOGLE = undefined;
	} else {
		this.RETURNKEY_GOOGLE = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_JOIN) {
		throw new Error('Ti.UI.RETURNKEY_JOIN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_JOIN = undefined;
	} else {
		this.RETURNKEY_JOIN = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_NEXT) {
		throw new Error('Ti.UI.RETURNKEY_NEXT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_NEXT = undefined;
	} else {
		this.RETURNKEY_NEXT = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_ROUTE) {
		throw new Error('Ti.UI.RETURNKEY_ROUTE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_ROUTE = undefined;
	} else {
		this.RETURNKEY_ROUTE = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_SEARCH) {
		throw new Error('Ti.UI.RETURNKEY_SEARCH is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_SEARCH = undefined;
	} else {
		this.RETURNKEY_SEARCH = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_SEND) {
		throw new Error('Ti.UI.RETURNKEY_SEND is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_SEND = undefined;
	} else {
		this.RETURNKEY_SEND = 0;
	}
	if (__SLAG_PROPERTIES.RETURNKEY_YAHOO) {
		throw new Error('Ti.UI.RETURNKEY_YAHOO is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RETURNKEY_YAHOO = undefined;
	} else {
		this.RETURNKEY_YAHOO = 0;
	}
	if (__SLAG_PROPERTIES.SIZE) {
		throw new Error('Ti.UI.SIZE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SIZE = undefined;
	} else {
		this.SIZE = '';
	}
	if (__SLAG_PROPERTIES.TABLE_VIEW_SEPARATOR_STYLE_NONE) {
		throw new Error('Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TABLE_VIEW_SEPARATOR_STYLE_NONE = undefined;
	} else {
		this.TABLE_VIEW_SEPARATOR_STYLE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE) {
		throw new Error('Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE = undefined;
	} else {
		this.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ALIGNMENT_CENTER) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_CENTER is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ALIGNMENT_CENTER = undefined;
	} else {
		this.TEXT_ALIGNMENT_CENTER = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ALIGNMENT_LEFT) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_LEFT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ALIGNMENT_LEFT = undefined;
	} else {
		this.TEXT_ALIGNMENT_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_ALIGNMENT_RIGHT) {
		throw new Error('Ti.UI.TEXT_ALIGNMENT_RIGHT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_ALIGNMENT_RIGHT = undefined;
	} else {
		this.TEXT_ALIGNMENT_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_AUTOCAPITALIZATION_ALL) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_ALL is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_AUTOCAPITALIZATION_ALL = undefined;
	} else {
		this.TEXT_AUTOCAPITALIZATION_ALL = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_AUTOCAPITALIZATION_NONE) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_NONE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_AUTOCAPITALIZATION_NONE = undefined;
	} else {
		this.TEXT_AUTOCAPITALIZATION_NONE = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_AUTOCAPITALIZATION_SENTENCES) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_AUTOCAPITALIZATION_SENTENCES = undefined;
	} else {
		this.TEXT_AUTOCAPITALIZATION_SENTENCES = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_AUTOCAPITALIZATION_WORDS) {
		throw new Error('Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_AUTOCAPITALIZATION_WORDS = undefined;
	} else {
		this.TEXT_AUTOCAPITALIZATION_WORDS = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_HEADLINE) {
		throw new Error('Ti.UI.TEXT_STYLE_HEADLINE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_HEADLINE = undefined;
	} else {
		this.TEXT_STYLE_HEADLINE = '';
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_SUBHEADLINE) {
		throw new Error('Ti.UI.TEXT_STYLE_SUBHEADLINE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_SUBHEADLINE = undefined;
	} else {
		this.TEXT_STYLE_SUBHEADLINE = '';
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_BODY) {
		throw new Error('Ti.UI.TEXT_STYLE_BODY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_BODY = undefined;
	} else {
		this.TEXT_STYLE_BODY = '';
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_FOOTNOTE) {
		throw new Error('Ti.UI.TEXT_STYLE_FOOTNOTE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_FOOTNOTE = undefined;
	} else {
		this.TEXT_STYLE_FOOTNOTE = '';
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_CAPTION1) {
		throw new Error('Ti.UI.TEXT_STYLE_CAPTION1 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_CAPTION1 = undefined;
	} else {
		this.TEXT_STYLE_CAPTION1 = '';
	}
	if (__SLAG_PROPERTIES.TEXT_STYLE_CAPTION2) {
		throw new Error('Ti.UI.TEXT_STYLE_CAPTION2 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_STYLE_CAPTION2 = undefined;
	} else {
		this.TEXT_STYLE_CAPTION2 = '';
	}
	if (__SLAG_PROPERTIES.TEXT_VERTICAL_ALIGNMENT_BOTTOM) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = undefined;
	} else {
		this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_VERTICAL_ALIGNMENT_CENTER) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_VERTICAL_ALIGNMENT_CENTER = undefined;
	} else {
		this.TEXT_VERTICAL_ALIGNMENT_CENTER = 0;
	}
	if (__SLAG_PROPERTIES.TEXT_VERTICAL_ALIGNMENT_TOP) {
		throw new Error('Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TEXT_VERTICAL_ALIGNMENT_TOP = undefined;
	} else {
		this.TEXT_VERTICAL_ALIGNMENT_TOP = 0;
	}
	if (__SLAG_PROPERTIES.UNIT_CM) {
		throw new Error('Ti.UI.UNIT_CM is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNIT_CM = undefined;
	} else {
		this.UNIT_CM = '';
	}
	if (__SLAG_PROPERTIES.UNIT_DIP) {
		throw new Error('Ti.UI.UNIT_DIP is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNIT_DIP = undefined;
	} else {
		this.UNIT_DIP = '';
	}
	if (__SLAG_PROPERTIES.UNIT_IN) {
		throw new Error('Ti.UI.UNIT_IN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNIT_IN = undefined;
	} else {
		this.UNIT_IN = '';
	}
	if (__SLAG_PROPERTIES.UNIT_MM) {
		throw new Error('Ti.UI.UNIT_MM is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNIT_MM = undefined;
	} else {
		this.UNIT_MM = '';
	}
	if (__SLAG_PROPERTIES.UNIT_PX) {
		throw new Error('Ti.UI.UNIT_PX is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNIT_PX = undefined;
	} else {
		this.UNIT_PX = '';
	}
	if (__SLAG_PROPERTIES.UNKNOWN) {
		throw new Error('Ti.UI.UNKNOWN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNKNOWN = undefined;
	} else {
		this.UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.UPSIDE_PORTRAIT) {
		throw new Error('Ti.UI.UPSIDE_PORTRAIT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UPSIDE_PORTRAIT = undefined;
	} else {
		this.UPSIDE_PORTRAIT = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_AUTHENTICATION) {
		throw new Error('Ti.UI.URL_ERROR_AUTHENTICATION is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_AUTHENTICATION = undefined;
	} else {
		this.URL_ERROR_AUTHENTICATION = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_BAD_URL) {
		throw new Error('Ti.UI.URL_ERROR_BAD_URL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_BAD_URL = undefined;
	} else {
		this.URL_ERROR_BAD_URL = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_CONNECT) {
		throw new Error('Ti.UI.URL_ERROR_CONNECT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_CONNECT = undefined;
	} else {
		this.URL_ERROR_CONNECT = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_SSL_FAILED) {
		throw new Error('Ti.UI.URL_ERROR_SSL_FAILED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_SSL_FAILED = undefined;
	} else {
		this.URL_ERROR_SSL_FAILED = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_FILE) {
		throw new Error('Ti.UI.URL_ERROR_FILE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_FILE = undefined;
	} else {
		this.URL_ERROR_FILE = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_FILE_NOT_FOUND) {
		throw new Error('Ti.UI.URL_ERROR_FILE_NOT_FOUND is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_FILE_NOT_FOUND = undefined;
	} else {
		this.URL_ERROR_FILE_NOT_FOUND = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_HOST_LOOKUP) {
		throw new Error('Ti.UI.URL_ERROR_HOST_LOOKUP is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_HOST_LOOKUP = undefined;
	} else {
		this.URL_ERROR_HOST_LOOKUP = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_REDIRECT_LOOP) {
		throw new Error('Ti.UI.URL_ERROR_REDIRECT_LOOP is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_REDIRECT_LOOP = undefined;
	} else {
		this.URL_ERROR_REDIRECT_LOOP = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_TIMEOUT) {
		throw new Error('Ti.UI.URL_ERROR_TIMEOUT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_TIMEOUT = undefined;
	} else {
		this.URL_ERROR_TIMEOUT = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_UNKNOWN) {
		throw new Error('Ti.UI.URL_ERROR_UNKNOWN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_UNKNOWN = undefined;
	} else {
		this.URL_ERROR_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.URL_ERROR_UNSUPPORTED_SCHEME) {
		throw new Error('Ti.UI.URL_ERROR_UNSUPPORTED_SCHEME is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.URL_ERROR_UNSUPPORTED_SCHEME = undefined;
	} else {
		this.URL_ERROR_UNSUPPORTED_SCHEME = 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundColor = undefined;
	} else {
		this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundImage = undefined;
	} else {
		this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentTab = undefined;
	} else {
		this.currentTab = __SLAG_PROPERTIES.currentTab || {};
	}
	if (__SLAG_PROPERTIES.currentWindow) {
		throw new Error('Ti.UI.currentWindow is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentWindow = undefined;
	} else {
		this.currentWindow = {};
	}
	if (__SLAG_PROPERTIES.orientation) {
		throw new Error('Ti.UI.orientation was deprecated, since 1.7.2');
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UI.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UI.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UI.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UI.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
UI.prototype.create2DMatrix = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TwoDMatrix = require('./UI/2DMatrix');
	return TwoDMatrix(__SLAG_PROPERTY);
};
UI.prototype.convertUnits = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
UI.prototype.createView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var View = require('./UI/View');
	return View(__SLAG_PROPERTY);
};
UI.prototype.create3DMatrix = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ThreeDMatrix = require('./UI/3DMatrix');
	return ThreeDMatrix(__SLAG_PROPERTY);
};
UI.prototype.createActivityIndicator = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ActivityIndicator = require('./UI/ActivityIndicator');
	return ActivityIndicator(__SLAG_PROPERTY);
};
UI.prototype.createAlertDialog = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AlertDialog = require('./UI/AlertDialog');
	return AlertDialog(__SLAG_PROPERTY);
};
UI.prototype.createAnimation = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Animation = require('./UI/Animation');
	return Animation(__SLAG_PROPERTY);
};
UI.prototype.createAttributedString = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AttributedString = require('./UI/AttributedString');
	return AttributedString(__SLAG_PROPERTY);
};
UI.prototype.createButton = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Button = require('./UI/Button');
	return Button(__SLAG_PROPERTY);
};
UI.prototype.createButtonBar = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ButtonBar = require('./UI/ButtonBar');
	return ButtonBar(__SLAG_PROPERTY);
};
UI.prototype.createCoverFlowView = function () {
	throw new Error('Ti.UI.createCoverFlowView was deprecated, since 1.8.0');
};
UI.prototype.createDashboardItem = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var DashboardItem = require('./UI/DashboardItem');
	return DashboardItem(__SLAG_PROPERTY);
};
UI.prototype.createDashboardView = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var DashboardView = require('./UI/DashboardView');
	return DashboardView(__SLAG_PROPERTY);
};
UI.prototype.createEmailDialog = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var EmailDialog = require('./UI/EmailDialog');
	return EmailDialog(__SLAG_PROPERTY);
};
UI.prototype.createImageView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ImageView = require('./UI/ImageView');
	return ImageView(__SLAG_PROPERTY);
};
UI.prototype.createLabel = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Label = require('./UI/Label');
	return Label(__SLAG_PROPERTY);
};
UI.prototype.createListSection = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ListSection = require('./UI/ListSection');
	return ListSection(__SLAG_PROPERTY);
};
UI.prototype.createListView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ListView = require('./UI/ListView');
	return ListView(__SLAG_PROPERTY);
};
UI.prototype.createMaskedImage = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var MaskedImage = require('./UI/MaskedImage');
	return MaskedImage(__SLAG_PROPERTY);
};
UI.prototype.createNotification = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Notification = require('./UI/Notification');
	return Notification(__SLAG_PROPERTY);
};
UI.prototype.createOptionDialog = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var OptionDialog = require('./UI/OptionDialog');
	return OptionDialog(__SLAG_PROPERTY);
};
UI.prototype.createPicker = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Picker = require('./UI/Picker');
	return Picker(__SLAG_PROPERTY);
};
UI.prototype.createPickerColumn = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PickerColumn = require('./UI/PickerColumn');
	return PickerColumn(__SLAG_PROPERTY);
};
UI.prototype.createPickerRow = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var PickerRow = require('./UI/PickerRow');
	return PickerRow(__SLAG_PROPERTY);
};
UI.prototype.createProgressBar = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ProgressBar = require('./UI/ProgressBar');
	return ProgressBar(__SLAG_PROPERTY);
};
UI.prototype.createRefreshControl = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var RefreshControl = require('./UI/RefreshControl');
	return RefreshControl(__SLAG_PROPERTY);
};
UI.prototype.createScrollView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ScrollView = require('./UI/ScrollView');
	return ScrollView(__SLAG_PROPERTY);
};
UI.prototype.createScrollableView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ScrollableView = require('./UI/ScrollableView');
	return ScrollableView(__SLAG_PROPERTY);
};
UI.prototype.createSearchBar = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SearchBar = require('./UI/SearchBar');
	return SearchBar(__SLAG_PROPERTY);
};
UI.prototype.createSlider = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Slider = require('./UI/Slider');
	return Slider(__SLAG_PROPERTY);
};
UI.prototype.createSwitch = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Switch = require('./UI/Switch');
	return Switch(__SLAG_PROPERTY);
};
UI.prototype.createTab = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Tab = require('./UI/Tab');
	return Tab(__SLAG_PROPERTY);
};
UI.prototype.createTabGroup = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TabGroup = require('./UI/TabGroup');
	return TabGroup(__SLAG_PROPERTY);
};
UI.prototype.createTabbedBar = function () {
	throw new Error('Ti.UI.createTabbedBar was deprecated, since 1.8.0');
};
UI.prototype.createTableView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TableView = require('./UI/TableView');
	return TableView(__SLAG_PROPERTY);
};
UI.prototype.createTableViewRow = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TableViewRow = require('./UI/TableViewRow');
	return TableViewRow(__SLAG_PROPERTY);
};
UI.prototype.createTableViewSection = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TableViewSection = require('./UI/TableViewSection');
	return TableViewSection(__SLAG_PROPERTY);
};
UI.prototype.createTextArea = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TextArea = require('./UI/TextArea');
	return TextArea(__SLAG_PROPERTY);
};
UI.prototype.createTextField = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TextField = require('./UI/TextField');
	return TextField(__SLAG_PROPERTY);
};
UI.prototype.createToolbar = function () {
	throw new Error('Ti.UI.createToolbar was deprecated, since 1.8.0');
};
UI.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
UI.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
UI.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
UI.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
UI.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
UI.prototype.getBackgroundColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundColor;
};
UI.prototype.setBackgroundColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundColor = __SLAG__PROPERTY;
};
UI.prototype.getBackgroundImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundImage;
};
UI.prototype.setBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundImage = __SLAG__PROPERTY;
};
UI.prototype.getCurrentTab = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.currentTab;
};
UI.prototype.setCurrentTab = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.currentTab = __SLAG__PROPERTY;
};
UI.prototype.getCurrentWindow = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.currentWindow;
};
UI.prototype.getOrientation = function () {
	throw new Error('Ti.UI.getOrientation was deprecated, since 1.7.2');
};
UI.prototype.setOrientation = function () {
	throw new Error('Ti.UI.setOrientation was deprecated, since 1.7.2');
};
UI.prototype.createWebView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var WebView = require('./UI/WebView');
	return WebView(__SLAG_PROPERTY);
};
UI.prototype.createWindow = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Window = require('./UI/Window');
	return Window(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new UI(properties);
};