var crypto = require('crypto');
function iOS(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
			'PUSH_MODE_CONTINUOUS',
			'PUSH_MODE_INSTANTANEOUS',
			'ROW_ACTION_STYLE_DEFAULT',
			'ROW_ACTION_STYLE_DESTRUCTIVE',
			'ROW_ACTION_STYLE_NORMAL',
			'SCROLL_DECELERATION_RATE_FAST',
			'SCROLL_DECELERATION_RATE_NORMAL',
			'WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED',
			'WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD',
			'WEBVIEW_NAVIGATIONTYPE_RELOAD',
			'WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED',
			'WEBVIEW_NAVIGATIONTYPE_OTHER',
			'TABLEVIEW_INDEX_SEARCH',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS';
	if (__SLAG__properties.ANIMATION_CURVE_EASE_IN) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN was deprecated, since 2.1.0');
	}
	if (__SLAG__properties.ANIMATION_CURVE_EASE_IN_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT was deprecated, since 2.1.0');
	}
	if (__SLAG__properties.ANIMATION_CURVE_EASE_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT was deprecated, since 2.1.0');
	}
	if (__SLAG__properties.ANIMATION_CURVE_LINEAR) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_LINEAR was deprecated, since 2.1.0');
	}
	if (__SLAG__properties.ATTRIBUTE_FONT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FONT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_FOREGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_BACKGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BACKGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_LIGATURE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LIGATURE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_LETTERPRESS_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LETTERPRESS_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_KERN) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_KERN was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_STRIKETHROUGH_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINES_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_STROKE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_STROKE_WIDTH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_WIDTH was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_SHADOW) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_SHADOW was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_TEXT_EFFECT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_TEXT_EFFECT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_LINK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LINK was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_BASELINE_OFFSET) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BASELINE_OFFSET was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_STRIKETHROUGH_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_COLOR was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_OBLIQUENESS) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_OBLIQUENESS was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_EXPANSION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_EXPANSION was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_STYLE_NONE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_NONE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_STYLE_SINGLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_STYLE_THICK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_THICK was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_PATTERN_SOLID) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_SOLID was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_PATTERN_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_UNDERLINE_BY_WORD) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_BY_WORD was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION_NATURAL) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_NATURAL was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT was deprecated, since 3.6.0');
	}
	if (__SLAG__properties.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ADDRESS was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.AUTODETECT_ALL) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ALL was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.iOS.AUTODETECT_CALENDAR was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.AUTODETECT_LINK) {
		throw new Error('Ti.UI.iOS.AUTODETECT_LINK was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.AUTODETECT_NONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_NONE was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_PHONE was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_CLEAR is read only property');
	}
	this.BLEND_MODE_CLEAR = 0;
	if (__SLAG__properties.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR is read only property');
	}
	this.BLEND_MODE_COLOR = 0;
	if (__SLAG__properties.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR_BURN is read only property');
	}
	this.BLEND_MODE_COLOR_BURN = 0;
	if (__SLAG__properties.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COLOR_DODGE is read only property');
	}
	this.BLEND_MODE_COLOR_DODGE = 0;
	if (__SLAG__properties.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_COPY is read only property');
	}
	this.BLEND_MODE_COPY = 0;
	if (__SLAG__properties.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DARKEN is read only property');
	}
	this.BLEND_MODE_DARKEN = 0;
	if (__SLAG__properties.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_ATOP is read only property');
	}
	this.BLEND_MODE_DESTINATION_ATOP = 0;
	if (__SLAG__properties.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_IN is read only property');
	}
	this.BLEND_MODE_DESTINATION_IN = 0;
	if (__SLAG__properties.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_OUT is read only property');
	}
	this.BLEND_MODE_DESTINATION_OUT = 0;
	if (__SLAG__properties.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DESTINATION_OVER is read only property');
	}
	this.BLEND_MODE_DESTINATION_OVER = 0;
	if (__SLAG__properties.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_DIFFERENCE is read only property');
	}
	this.BLEND_MODE_DIFFERENCE = 0;
	if (__SLAG__properties.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_EXCLUSION is read only property');
	}
	this.BLEND_MODE_EXCLUSION = 0;
	if (__SLAG__properties.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_HARD_LIGHT is read only property');
	}
	this.BLEND_MODE_HARD_LIGHT = 0;
	if (__SLAG__properties.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_HUE is read only property');
	}
	this.BLEND_MODE_HUE = 0;
	if (__SLAG__properties.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_LIGHTEN is read only property');
	}
	this.BLEND_MODE_LIGHTEN = 0;
	if (__SLAG__properties.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_LUMINOSITY is read only property');
	}
	this.BLEND_MODE_LUMINOSITY = 0;
	if (__SLAG__properties.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_MULTIPLY is read only property');
	}
	this.BLEND_MODE_MULTIPLY = 0;
	if (__SLAG__properties.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_NORMAL is read only property');
	}
	this.BLEND_MODE_NORMAL = 0;
	if (__SLAG__properties.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_OVERLAY is read only property');
	}
	this.BLEND_MODE_OVERLAY = 0;
	if (__SLAG__properties.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_PLUS_DARKER is read only property');
	}
	this.BLEND_MODE_PLUS_DARKER = 0;
	if (__SLAG__properties.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_PLUS_LIGHTER is read only property');
	}
	this.BLEND_MODE_PLUS_LIGHTER = 0;
	if (__SLAG__properties.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SATURATION is read only property');
	}
	this.BLEND_MODE_SATURATION = 0;
	if (__SLAG__properties.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SCREEN is read only property');
	}
	this.BLEND_MODE_SCREEN = 0;
	if (__SLAG__properties.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOFT_LIGHT is read only property');
	}
	this.BLEND_MODE_SOFT_LIGHT = 0;
	if (__SLAG__properties.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_ATOP is read only property');
	}
	this.BLEND_MODE_SOURCE_ATOP = 0;
	if (__SLAG__properties.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_IN is read only property');
	}
	this.BLEND_MODE_SOURCE_IN = 0;
	if (__SLAG__properties.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_SOURCE_OUT is read only property');
	}
	this.BLEND_MODE_SOURCE_OUT = 0;
	if (__SLAG__properties.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.iOS.BLEND_MODE_XOR is read only property');
	}
	this.BLEND_MODE_XOR = 0;
	if (__SLAG__properties.AD_SIZE_PORTRAIT) {
		throw new Error('Ti.UI.iOS.AD_SIZE_PORTRAIT is read only property');
	}
	this.AD_SIZE_PORTRAIT = '';
	if (__SLAG__properties.AD_SIZE_LANDSCAPE) {
		throw new Error('Ti.UI.iOS.AD_SIZE_LANDSCAPE is read only property');
	}
	this.AD_SIZE_LANDSCAPE = '';
	if (__SLAG__properties.CLIP_MODE_DEFAULT) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_DEFAULT is read only property');
	}
	this.CLIP_MODE_DEFAULT = 0;
	if (__SLAG__properties.CLIP_MODE_DISABLED) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_DISABLED is read only property');
	}
	this.CLIP_MODE_DISABLED = 0;
	if (__SLAG__properties.CLIP_MODE_ENABLED) {
		throw new Error('Ti.UI.iOS.CLIP_MODE_ENABLED is read only property');
	}
	this.CLIP_MODE_ENABLED = 0;
	if (__SLAG__properties.COLLISION_MODE_ALL) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_ALL is read only property');
	}
	this.COLLISION_MODE_ALL = 0;
	if (__SLAG__properties.COLLISION_MODE_BOUNDARY) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_BOUNDARY is read only property');
	}
	this.COLLISION_MODE_BOUNDARY = 0;
	if (__SLAG__properties.COLLISION_MODE_ITEM) {
		throw new Error('Ti.UI.iOS.COLLISION_MODE_ITEM is read only property');
	}
	this.COLLISION_MODE_ITEM = 0;
	if (__SLAG__properties.COLOR_GROUP_TABLEVIEW_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_GROUP_TABLEVIEW_BACKGROUND is read only property');
	}
	this.COLOR_GROUP_TABLEVIEW_BACKGROUND = '';
	if (__SLAG__properties.COLOR_SCROLLVIEW_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_SCROLLVIEW_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.COLOR_VIEW_FLIPSIDE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.COLOR_UNDER_PAGE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.PUSH_MODE_CONTINUOUS) {
		throw new Error('Ti.UI.iOS.PUSH_MODE_CONTINUOUS is read only property');
	}
	this.PUSH_MODE_CONTINUOUS = 0;
	if (__SLAG__properties.PUSH_MODE_INSTANTANEOUS) {
		throw new Error('Ti.UI.iOS.PUSH_MODE_INSTANTANEOUS is read only property');
	}
	this.PUSH_MODE_INSTANTANEOUS = 0;
	if (__SLAG__properties.ROW_ACTION_STYLE_DEFAULT) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_DEFAULT is read only property');
	}
	this.ROW_ACTION_STYLE_DEFAULT = 0;
	if (__SLAG__properties.ROW_ACTION_STYLE_DESTRUCTIVE) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_DESTRUCTIVE is read only property');
	}
	this.ROW_ACTION_STYLE_DESTRUCTIVE = 0;
	if (__SLAG__properties.ROW_ACTION_STYLE_NORMAL) {
		throw new Error('Ti.UI.iOS.ROW_ACTION_STYLE_NORMAL is read only property');
	}
	this.ROW_ACTION_STYLE_NORMAL = 0;
	if (__SLAG__properties.SCROLL_DECELERATION_RATE_FAST) {
		throw new Error('Ti.UI.iOS.SCROLL_DECELERATION_RATE_FAST is read only property');
	}
	this.SCROLL_DECELERATION_RATE_FAST = 0;
	if (__SLAG__properties.SCROLL_DECELERATION_RATE_NORMAL) {
		throw new Error('Ti.UI.iOS.SCROLL_DECELERATION_RATE_NORMAL is read only property');
	}
	this.SCROLL_DECELERATION_RATE_NORMAL = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_RELOAD) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_RELOAD is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_RELOAD = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = 0;
	if (__SLAG__properties.WEBVIEW_NAVIGATIONTYPE_OTHER) {
		throw new Error('Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_OTHER is read only property');
	}
	this.WEBVIEW_NAVIGATIONTYPE_OTHER = 0;
	if (__SLAG__properties.TABLEVIEW_INDEX_SEARCH) {
		throw new Error('Ti.UI.iOS.TABLEVIEW_INDEX_SEARCH is read only property');
	}
	this.TABLEVIEW_INDEX_SEARCH = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
iOS.prototype.fireEvent = function () {
};
iOS.prototype.createTransitionAnimation = function (params) {
	var TransitionAnimation = require('./iOS/TransitionAnimation');
	return TransitionAnimation(params);
};
iOS.prototype.create3DMatrix = function () {
	throw new Error('Ti.UI.iOS.create3DMatrix was deprecated, since 2.1.0');
};
iOS.prototype.createAdView = function (params) {
	var AdView = require('./iOS/AdView');
	return AdView(params);
};
iOS.prototype.createAnchorAttachmentBehavior = function (params) {
	var AnchorAttachmentBehavior = require('./iOS/AnchorAttachmentBehavior');
	return AnchorAttachmentBehavior(params);
};
iOS.prototype.createAnimator = function (params) {
	var Animator = require('./iOS/Animator');
	return Animator(params);
};
iOS.prototype.createAttribute = function () {
	throw new Error('Ti.UI.iOS.createAttribute was deprecated, since 3.6.0');
};
iOS.prototype.createAttributedString = function () {
	throw new Error('Ti.UI.iOS.createAttributedString was deprecated, since 3.6.0');
};
iOS.prototype.createCollisionBehavior = function (params) {
	var CollisionBehavior = require('./iOS/CollisionBehavior');
	return CollisionBehavior(params);
};
iOS.prototype.createCoverFlowView = function (params) {
	var CoverFlowView = require('./iOS/CoverFlowView');
	return CoverFlowView(params);
};
iOS.prototype.createDocumentViewer = function (params) {
	var DocumentViewer = require('./iOS/DocumentViewer');
	return DocumentViewer(params);
};
iOS.prototype.createDynamicItemBehavior = function (params) {
	var DynamicItemBehavior = require('./iOS/DynamicItemBehavior');
	return DynamicItemBehavior(params);
};
iOS.prototype.createGravityBehavior = function (params) {
	var GravityBehavior = require('./iOS/GravityBehavior');
	return GravityBehavior(params);
};
iOS.prototype.createNavigationWindow = function (params) {
	var NavigationWindow = require('./iOS/NavigationWindow');
	return NavigationWindow(params);
};
iOS.prototype.createPushBehavior = function (params) {
	var PushBehavior = require('./iOS/PushBehavior');
	return PushBehavior(params);
};
iOS.prototype.createSnapBehavior = function (params) {
	var SnapBehavior = require('./iOS/SnapBehavior');
	return SnapBehavior(params);
};
iOS.prototype.createSplitWindow = function (params) {
	var SplitWindow = require('./iOS/SplitWindow');
	return SplitWindow(params);
};
iOS.prototype.createTabbedBar = function (params) {
	var TabbedBar = require('./iOS/TabbedBar');
	return TabbedBar(params);
};
iOS.prototype.createToolbar = function (params) {
	var Toolbar = require('./iOS/Toolbar');
	return Toolbar(params);
};
iOS.prototype.createViewAttachmentBehavior = function (params) {
	var ViewAttachmentBehavior = require('./iOS/ViewAttachmentBehavior');
	return ViewAttachmentBehavior(params);
};
iOS.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
iOS.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
iOS.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new iOS(properties);
};