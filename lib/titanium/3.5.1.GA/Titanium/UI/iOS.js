function iOS(properties) {
	properties = properties || {};
	this.AD_SIZE_LANDSCAPE = properties.AD_SIZE_LANDSCAPE || '';
	this.AD_SIZE_PORTRAIT = properties.AD_SIZE_PORTRAIT || '';
	if (properties.ANIMATION_CURVE_EASE_IN) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN was deprecated, since 2.1.0');
	}
	if (properties.ANIMATION_CURVE_EASE_IN_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT was deprecated, since 2.1.0');
	}
	if (properties.ANIMATION_CURVE_EASE_OUT) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT was deprecated, since 2.1.0');
	}
	if (properties.ANIMATION_CURVE_LINEAR) {
		throw new Error('Ti.UI.iOS.ANIMATION_CURVE_LINEAR was deprecated, since 2.1.0');
	}
	this.ATTRIBUTE_BACKGROUND_COLOR = properties.ATTRIBUTE_BACKGROUND_COLOR || 0;
	this.ATTRIBUTE_BASELINE_OFFSET = properties.ATTRIBUTE_BASELINE_OFFSET || 0;
	this.ATTRIBUTE_EXPANSION = properties.ATTRIBUTE_EXPANSION || 0;
	this.ATTRIBUTE_FONT = properties.ATTRIBUTE_FONT || 0;
	this.ATTRIBUTE_FOREGROUND_COLOR = properties.ATTRIBUTE_FOREGROUND_COLOR || 0;
	this.ATTRIBUTE_KERN = properties.ATTRIBUTE_KERN || 0;
	this.ATTRIBUTE_LETTERPRESS_STYLE = properties.ATTRIBUTE_LETTERPRESS_STYLE || 0;
	this.ATTRIBUTE_LIGATURE = properties.ATTRIBUTE_LIGATURE || 0;
	this.ATTRIBUTE_LINK = properties.ATTRIBUTE_LINK || 0;
	this.ATTRIBUTE_OBLIQUENESS = properties.ATTRIBUTE_OBLIQUENESS || 0;
	this.ATTRIBUTE_SHADOW = properties.ATTRIBUTE_SHADOW || 0;
	this.ATTRIBUTE_STRIKETHROUGH_COLOR = properties.ATTRIBUTE_STRIKETHROUGH_COLOR || 0;
	this.ATTRIBUTE_STRIKETHROUGH_STYLE = properties.ATTRIBUTE_STRIKETHROUGH_STYLE || 0;
	this.ATTRIBUTE_STROKE_COLOR = properties.ATTRIBUTE_STROKE_COLOR || 0;
	this.ATTRIBUTE_STROKE_WIDTH = properties.ATTRIBUTE_STROKE_WIDTH || 0;
	this.ATTRIBUTE_TEXT_EFFECT = properties.ATTRIBUTE_TEXT_EFFECT || 0;
	this.ATTRIBUTE_UNDERLINES_STYLE = properties.ATTRIBUTE_UNDERLINES_STYLE || 0;
	this.ATTRIBUTE_UNDERLINE_BY_WORD = properties.ATTRIBUTE_UNDERLINE_BY_WORD || 0;
	this.ATTRIBUTE_UNDERLINE_COLOR = properties.ATTRIBUTE_UNDERLINE_COLOR || 0;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH || 0;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT || 0;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT || 0;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DOT || 0;
	this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = properties.ATTRIBUTE_UNDERLINE_PATTERN_SOLID || 0;
	this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = properties.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE || 0;
	this.ATTRIBUTE_UNDERLINE_STYLE_NONE = properties.ATTRIBUTE_UNDERLINE_STYLE_NONE || 0;
	this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = properties.ATTRIBUTE_UNDERLINE_STYLE_SINGLE || 0;
	this.ATTRIBUTE_UNDERLINE_STYLE_THICK = properties.ATTRIBUTE_UNDERLINE_STYLE_THICK || 0;
	this.ATTRIBUTE_WRITING_DIRECTION = properties.ATTRIBUTE_WRITING_DIRECTION || 0;
	this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = properties.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING || 0;
	this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = properties.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT || 0;
	this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = properties.ATTRIBUTE_WRITING_DIRECTION_NATURAL || 0;
	this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = properties.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE || 0;
	this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = properties.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT || 0;
	if (properties.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ADDRESS was deprecated, since 3.0.0');
	}
	if (properties.AUTODETECT_ALL) {
		throw new Error('Ti.UI.iOS.AUTODETECT_ALL was deprecated, since 3.0.0');
	}
	if (properties.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.iOS.AUTODETECT_CALENDAR was deprecated, since 3.0.0');
	}
	if (properties.AUTODETECT_LINK) {
		throw new Error('Ti.UI.iOS.AUTODETECT_LINK was deprecated, since 3.0.0');
	}
	if (properties.AUTODETECT_NONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_NONE was deprecated, since 3.0.0');
	}
	if (properties.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.iOS.AUTODETECT_PHONE was deprecated, since 3.0.0');
	}
	this.BLEND_MODE_CLEAR = properties.BLEND_MODE_CLEAR || 0;
	this.BLEND_MODE_COLOR = properties.BLEND_MODE_COLOR || 0;
	this.BLEND_MODE_COLOR_BURN = properties.BLEND_MODE_COLOR_BURN || 0;
	this.BLEND_MODE_COLOR_DODGE = properties.BLEND_MODE_COLOR_DODGE || 0;
	this.BLEND_MODE_COPY = properties.BLEND_MODE_COPY || 0;
	this.BLEND_MODE_DARKEN = properties.BLEND_MODE_DARKEN || 0;
	this.BLEND_MODE_DESTINATION_ATOP = properties.BLEND_MODE_DESTINATION_ATOP || 0;
	this.BLEND_MODE_DESTINATION_IN = properties.BLEND_MODE_DESTINATION_IN || 0;
	this.BLEND_MODE_DESTINATION_OUT = properties.BLEND_MODE_DESTINATION_OUT || 0;
	this.BLEND_MODE_DESTINATION_OVER = properties.BLEND_MODE_DESTINATION_OVER || 0;
	this.BLEND_MODE_DIFFERENCE = properties.BLEND_MODE_DIFFERENCE || 0;
	this.BLEND_MODE_EXCLUSION = properties.BLEND_MODE_EXCLUSION || 0;
	this.BLEND_MODE_HARD_LIGHT = properties.BLEND_MODE_HARD_LIGHT || 0;
	this.BLEND_MODE_HUE = properties.BLEND_MODE_HUE || 0;
	this.BLEND_MODE_LIGHTEN = properties.BLEND_MODE_LIGHTEN || 0;
	this.BLEND_MODE_LUMINOSITY = properties.BLEND_MODE_LUMINOSITY || 0;
	this.BLEND_MODE_MULTIPLY = properties.BLEND_MODE_MULTIPLY || 0;
	this.BLEND_MODE_NORMAL = properties.BLEND_MODE_NORMAL || 0;
	this.BLEND_MODE_OVERLAY = properties.BLEND_MODE_OVERLAY || 0;
	this.BLEND_MODE_PLUS_DARKER = properties.BLEND_MODE_PLUS_DARKER || 0;
	this.BLEND_MODE_PLUS_LIGHTER = properties.BLEND_MODE_PLUS_LIGHTER || 0;
	this.BLEND_MODE_SATURATION = properties.BLEND_MODE_SATURATION || 0;
	this.BLEND_MODE_SCREEN = properties.BLEND_MODE_SCREEN || 0;
	this.BLEND_MODE_SOFT_LIGHT = properties.BLEND_MODE_SOFT_LIGHT || 0;
	this.BLEND_MODE_SOURCE_ATOP = properties.BLEND_MODE_SOURCE_ATOP || 0;
	this.BLEND_MODE_SOURCE_IN = properties.BLEND_MODE_SOURCE_IN || 0;
	this.BLEND_MODE_SOURCE_OUT = properties.BLEND_MODE_SOURCE_OUT || 0;
	this.BLEND_MODE_XOR = properties.BLEND_MODE_XOR || 0;
	this.CLIP_MODE_DEFAULT = properties.CLIP_MODE_DEFAULT || 0;
	this.CLIP_MODE_DISABLED = properties.CLIP_MODE_DISABLED || 0;
	this.CLIP_MODE_ENABLED = properties.CLIP_MODE_ENABLED || 0;
	this.COLLISION_MODE_ALL = properties.COLLISION_MODE_ALL || 0;
	this.COLLISION_MODE_BOUNDARY = properties.COLLISION_MODE_BOUNDARY || 0;
	this.COLLISION_MODE_ITEM = properties.COLLISION_MODE_ITEM || 0;
	this.COLOR_GROUP_TABLEVIEW_BACKGROUND = properties.COLOR_GROUP_TABLEVIEW_BACKGROUND || '';
	if (properties.COLOR_SCROLLVIEW_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_SCROLLVIEW_BACKGROUND was deprecated, since 3.4.2');
	}
	if (properties.COLOR_UNDER_PAGE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (properties.COLOR_VIEW_FLIPSIDE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND was deprecated, since 3.4.2');
	}
	this.PUSH_MODE_CONTINUOUS = properties.PUSH_MODE_CONTINUOUS || 0;
	this.PUSH_MODE_INSTANTANEOUS = properties.PUSH_MODE_INSTANTANEOUS || 0;
	this.SCROLL_DECELERATION_RATE_FAST = properties.SCROLL_DECELERATION_RATE_FAST || 0;
	this.SCROLL_DECELERATION_RATE_NORMAL = properties.SCROLL_DECELERATION_RATE_NORMAL || 0;
	this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = properties.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD || 0;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = properties.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_OTHER = properties.WEBVIEW_NAVIGATIONTYPE_OTHER || 0;
	this.WEBVIEW_NAVIGATIONTYPE_RELOAD = properties.WEBVIEW_NAVIGATIONTYPE_RELOAD || 0;
	this.apiName = 'Ti.UI.iOS';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
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
iOS.prototype.createAttributedString = function (params) {
	var AttributedString = require('./iOS/AttributedString');
	return AttributedString(params);
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
iOS.prototype.createTabbedBar = function (params) {
	var TabbedBar = require('./iOS/TabbedBar');
	return TabbedBar(params);
};
iOS.prototype.createToolbar = function (params) {
	var Toolbar = require('./iOS/Toolbar');
	return Toolbar(params);
};
iOS.prototype.createTransitionAnimation = function (params) {
	var TransitionAnimation = require('./iOS/TransitionAnimation');
	return TransitionAnimation(params);
};
iOS.prototype.createViewAttachmentBehavior = function (params) {
	var ViewAttachmentBehavior = require('./iOS/ViewAttachmentBehavior');
	return ViewAttachmentBehavior(params);
};
iOS.prototype.fireEvent = function () {
};
iOS.prototype.getApiName = function () {
	return '';
};
iOS.prototype.getBubbleParent = function () {
	return true;
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new iOS(properties);
};