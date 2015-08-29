var crypto = require('crypto');
function iOS(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'AD_SIZE_LANDSCAPE',
			'AD_SIZE_PORTRAIT',
			'ANIMATION_CURVE_EASE_IN',
			'ANIMATION_CURVE_EASE_IN_OUT',
			'ANIMATION_CURVE_EASE_OUT',
			'ANIMATION_CURVE_LINEAR',
			'ATTRIBUTE_BACKGROUND_COLOR',
			'ATTRIBUTE_BASELINE_OFFSET',
			'ATTRIBUTE_EXPANSION',
			'ATTRIBUTE_FONT',
			'ATTRIBUTE_FOREGROUND_COLOR',
			'ATTRIBUTE_KERN',
			'ATTRIBUTE_LETTERPRESS_STYLE',
			'ATTRIBUTE_LIGATURE',
			'ATTRIBUTE_LINK',
			'ATTRIBUTE_OBLIQUENESS',
			'ATTRIBUTE_SHADOW',
			'ATTRIBUTE_STRIKETHROUGH_COLOR',
			'ATTRIBUTE_STRIKETHROUGH_STYLE',
			'ATTRIBUTE_STROKE_COLOR',
			'ATTRIBUTE_STROKE_WIDTH',
			'ATTRIBUTE_TEXT_EFFECT',
			'ATTRIBUTE_UNDERLINES_STYLE',
			'ATTRIBUTE_UNDERLINE_BY_WORD',
			'ATTRIBUTE_UNDERLINE_COLOR',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT',
			'ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT',
			'ATTRIBUTE_UNDERLINE_PATTERN_DOT',
			'ATTRIBUTE_UNDERLINE_PATTERN_SOLID',
			'ATTRIBUTE_UNDERLINE_STYLE_DOUBLE',
			'ATTRIBUTE_UNDERLINE_STYLE_NONE',
			'ATTRIBUTE_UNDERLINE_STYLE_SINGLE',
			'ATTRIBUTE_UNDERLINE_STYLE_THICK',
			'ATTRIBUTE_WRITING_DIRECTION',
			'ATTRIBUTE_WRITING_DIRECTION_EMBEDDING',
			'ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT',
			'ATTRIBUTE_WRITING_DIRECTION_NATURAL',
			'ATTRIBUTE_WRITING_DIRECTION_OVERRIDE',
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
			'CLIP_MODE_DEFAULT',
			'CLIP_MODE_DISABLED',
			'CLIP_MODE_ENABLED',
			'COLLISION_MODE_ALL',
			'COLLISION_MODE_BOUNDARY',
			'COLLISION_MODE_ITEM',
			'COLOR_GROUP_TABLEVIEW_BACKGROUND',
			'COLOR_SCROLLVIEW_BACKGROUND',
			'COLOR_UNDER_PAGE_BACKGROUND',
			'COLOR_VIEW_FLIPSIDE_BACKGROUND',
			'PUSH_MODE_CONTINUOUS',
			'PUSH_MODE_INSTANTANEOUS',
			'SCROLL_DECELERATION_RATE_FAST',
			'SCROLL_DECELERATION_RATE_NORMAL',
			'WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD',
			'WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED',
			'WEBVIEW_NAVIGATIONTYPE_OTHER',
			'WEBVIEW_NAVIGATIONTYPE_RELOAD',
			'apiName',
			'bubbleParent',
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
	if (__SLAG_PROPERTIES.AD_SIZE_LANDSCAPE) {
		throw new Error('Ti.UI.iOS.AD_SIZE_LANDSCAPE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AD_SIZE_LANDSCAPE = undefined;
	} else {
		this.AD_SIZE_LANDSCAPE = '';
	}
	if (__SLAG_PROPERTIES.AD_SIZE_PORTRAIT) {
		throw new Error('Ti.UI.iOS.AD_SIZE_PORTRAIT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AD_SIZE_PORTRAIT = undefined;
	} else {
		this.AD_SIZE_PORTRAIT = '';
	}
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
	if (__SLAG_PROPERTIES.ATTRIBUTE_BACKGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BACKGROUND_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_BACKGROUND_COLOR = undefined;
	} else {
		this.ATTRIBUTE_BACKGROUND_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_BASELINE_OFFSET) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BASELINE_OFFSET is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_BASELINE_OFFSET = undefined;
	} else {
		this.ATTRIBUTE_BASELINE_OFFSET = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_EXPANSION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_EXPANSION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_EXPANSION = undefined;
	} else {
		this.ATTRIBUTE_EXPANSION = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FONT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FONT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_FONT = undefined;
	} else {
		this.ATTRIBUTE_FONT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_FOREGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_FOREGROUND_COLOR = undefined;
	} else {
		this.ATTRIBUTE_FOREGROUND_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_KERN) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_KERN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_KERN = undefined;
	} else {
		this.ATTRIBUTE_KERN = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LETTERPRESS_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LETTERPRESS_STYLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LETTERPRESS_STYLE = undefined;
	} else {
		this.ATTRIBUTE_LETTERPRESS_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LIGATURE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LIGATURE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LIGATURE = undefined;
	} else {
		this.ATTRIBUTE_LIGATURE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_LINK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LINK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_LINK = undefined;
	} else {
		this.ATTRIBUTE_LINK = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_OBLIQUENESS) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_OBLIQUENESS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_OBLIQUENESS = undefined;
	} else {
		this.ATTRIBUTE_OBLIQUENESS = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_SHADOW) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_SHADOW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_SHADOW = undefined;
	} else {
		this.ATTRIBUTE_SHADOW = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STRIKETHROUGH_COLOR = undefined;
	} else {
		this.ATTRIBUTE_STRIKETHROUGH_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STRIKETHROUGH_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_STYLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STRIKETHROUGH_STYLE = undefined;
	} else {
		this.ATTRIBUTE_STRIKETHROUGH_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STROKE_COLOR = undefined;
	} else {
		this.ATTRIBUTE_STROKE_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_STROKE_WIDTH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_WIDTH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_STROKE_WIDTH = undefined;
	} else {
		this.ATTRIBUTE_STROKE_WIDTH = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_TEXT_EFFECT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_TEXT_EFFECT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_TEXT_EFFECT = undefined;
	} else {
		this.ATTRIBUTE_TEXT_EFFECT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINES_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINES_STYLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINES_STYLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_BY_WORD) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_BY_WORD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_BY_WORD = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_BY_WORD = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_COLOR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_COLOR = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_COLOR = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DOT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_PATTERN_SOLID) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_SOLID is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_NONE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_NONE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_SINGLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_UNDERLINE_STYLE_THICK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_THICK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_UNDERLINE_STYLE_THICK = undefined;
	} else {
		this.ATTRIBUTE_UNDERLINE_STYLE_THICK = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_NATURAL) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_NATURAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = 0;
	}
	if (__SLAG_PROPERTIES.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = undefined;
	} else {
		this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = 0;
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
	if (__SLAG_PROPERTIES.COLOR_UNDER_PAGE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.COLOR_VIEW_FLIPSIDE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND was deprecated, since 3.4.2');
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
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_OTHER) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_OTHER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_OTHER = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_OTHER = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_NAVIGATIONTYPE_RELOAD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_RELOAD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_NAVIGATIONTYPE_RELOAD = undefined;
	} else {
		this.WEBVIEW_NAVIGATIONTYPE_RELOAD = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iOS.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
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
iOS.prototype.createAttributedString = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AttributedString = require('./iOS/AttributedString');
	return AttributedString(__SLAG_PROPERTY);
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
iOS.prototype.createGravityBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var GravityBehavior = require('./iOS/GravityBehavior');
	return GravityBehavior(__SLAG_PROPERTY);
};
iOS.prototype.createNavigationWindow = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NavigationWindow = require('./iOS/NavigationWindow');
	return NavigationWindow(__SLAG_PROPERTY);
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
iOS.prototype.createTransitionAnimation = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TransitionAnimation = require('./iOS/TransitionAnimation');
	return TransitionAnimation(__SLAG_PROPERTY);
};
iOS.prototype.createViewAttachmentBehavior = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ViewAttachmentBehavior = require('./iOS/ViewAttachmentBehavior');
	return ViewAttachmentBehavior(__SLAG_PROPERTY);
};
iOS.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
iOS.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iOS.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iOS.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new iOS(properties);
};