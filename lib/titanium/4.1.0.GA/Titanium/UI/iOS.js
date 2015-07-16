function iOS(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS';
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
	if (properties.ATTRIBUTE_FONT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FONT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_FOREGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_BACKGROUND_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BACKGROUND_COLOR was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_LIGATURE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LIGATURE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_LETTERPRESS_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LETTERPRESS_STYLE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_KERN) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_KERN was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_STRIKETHROUGH_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_STYLE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINES_STYLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_STROKE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_COLOR was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_STROKE_WIDTH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STROKE_WIDTH was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_SHADOW) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_SHADOW was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_TEXT_EFFECT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_TEXT_EFFECT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_LINK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_LINK was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_BASELINE_OFFSET) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_BASELINE_OFFSET was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_COLOR was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_STRIKETHROUGH_COLOR) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_STRIKETHROUGH_COLOR was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_OBLIQUENESS) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_OBLIQUENESS was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_EXPANSION) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_EXPANSION was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_STYLE_NONE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_NONE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_STYLE_SINGLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_STYLE_THICK) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_THICK was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_PATTERN_SOLID) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_SOLID was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_PATTERN_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DOT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_UNDERLINE_BY_WORD) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_UNDERLINE_BY_WORD was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION_NATURAL) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_NATURAL was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT was deprecated, since 3.6.0');
	}
	if (properties.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT) {
		throw new Error('Ti.UI.iOS.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT was deprecated, since 3.6.0');
	}
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
	this.AD_SIZE_PORTRAIT = properties.AD_SIZE_PORTRAIT || '';
	this.AD_SIZE_LANDSCAPE = properties.AD_SIZE_LANDSCAPE || '';
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
	if (properties.COLOR_VIEW_FLIPSIDE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_VIEW_FLIPSIDE_BACKGROUND was deprecated, since 3.4.2');
	}
	if (properties.COLOR_UNDER_PAGE_BACKGROUND) {
		throw new Error('Ti.UI.iOS.COLOR_UNDER_PAGE_BACKGROUND was deprecated, since 3.4.2');
	}
	this.PUSH_MODE_CONTINUOUS = properties.PUSH_MODE_CONTINUOUS || 0;
	this.PUSH_MODE_INSTANTANEOUS = properties.PUSH_MODE_INSTANTANEOUS || 0;
	this.ROW_ACTION_STYLE_DEFAULT = properties.ROW_ACTION_STYLE_DEFAULT || 0;
	this.ROW_ACTION_STYLE_DESTRUCTIVE = properties.ROW_ACTION_STYLE_DESTRUCTIVE || 0;
	this.ROW_ACTION_STYLE_NORMAL = properties.ROW_ACTION_STYLE_NORMAL || 0;
	this.SCROLL_DECELERATION_RATE_FAST = properties.SCROLL_DECELERATION_RATE_FAST || 0;
	this.SCROLL_DECELERATION_RATE_NORMAL = properties.SCROLL_DECELERATION_RATE_NORMAL || 0;
	this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = properties.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = properties.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD || 0;
	this.WEBVIEW_NAVIGATIONTYPE_RELOAD = properties.WEBVIEW_NAVIGATIONTYPE_RELOAD || 0;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED || 0;
	this.WEBVIEW_NAVIGATIONTYPE_OTHER = properties.WEBVIEW_NAVIGATIONTYPE_OTHER || 0;
	this.TABLEVIEW_INDEX_SEARCH = properties.TABLEVIEW_INDEX_SEARCH || '';
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
iOS.prototype.setBubbleParent = function () {
};
iOS.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new iOS(properties);
};