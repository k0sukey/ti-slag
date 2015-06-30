function iOS(properties) {
	properties = properties || {};
	this.AD_SIZE_LANDSCAPE = properties.AD_SIZE_LANDSCAPE || undefined;
	this.AD_SIZE_PORTRAIT = properties.AD_SIZE_PORTRAIT || undefined;
	this.ANIMATION_CURVE_EASE_IN = properties.ANIMATION_CURVE_EASE_IN || undefined;
	this.ANIMATION_CURVE_EASE_IN_OUT = properties.ANIMATION_CURVE_EASE_IN_OUT || undefined;
	this.ANIMATION_CURVE_EASE_OUT = properties.ANIMATION_CURVE_EASE_OUT || undefined;
	this.ANIMATION_CURVE_LINEAR = properties.ANIMATION_CURVE_LINEAR || undefined;
	this.ATTRIBUTE_BACKGROUND_COLOR = properties.ATTRIBUTE_BACKGROUND_COLOR || undefined;
	this.ATTRIBUTE_BASELINE_OFFSET = properties.ATTRIBUTE_BASELINE_OFFSET || undefined;
	this.ATTRIBUTE_EXPANSION = properties.ATTRIBUTE_EXPANSION || undefined;
	this.ATTRIBUTE_FONT = properties.ATTRIBUTE_FONT || undefined;
	this.ATTRIBUTE_FOREGROUND_COLOR = properties.ATTRIBUTE_FOREGROUND_COLOR || undefined;
	this.ATTRIBUTE_KERN = properties.ATTRIBUTE_KERN || undefined;
	this.ATTRIBUTE_LETTERPRESS_STYLE = properties.ATTRIBUTE_LETTERPRESS_STYLE || undefined;
	this.ATTRIBUTE_LIGATURE = properties.ATTRIBUTE_LIGATURE || undefined;
	this.ATTRIBUTE_LINK = properties.ATTRIBUTE_LINK || undefined;
	this.ATTRIBUTE_OBLIQUENESS = properties.ATTRIBUTE_OBLIQUENESS || undefined;
	this.ATTRIBUTE_SHADOW = properties.ATTRIBUTE_SHADOW || undefined;
	this.ATTRIBUTE_STRIKETHROUGH_COLOR = properties.ATTRIBUTE_STRIKETHROUGH_COLOR || undefined;
	this.ATTRIBUTE_STRIKETHROUGH_STYLE = properties.ATTRIBUTE_STRIKETHROUGH_STYLE || undefined;
	this.ATTRIBUTE_STROKE_COLOR = properties.ATTRIBUTE_STROKE_COLOR || undefined;
	this.ATTRIBUTE_STROKE_WIDTH = properties.ATTRIBUTE_STROKE_WIDTH || undefined;
	this.ATTRIBUTE_TEXT_EFFECT = properties.ATTRIBUTE_TEXT_EFFECT || undefined;
	this.ATTRIBUTE_UNDERLINES_STYLE = properties.ATTRIBUTE_UNDERLINES_STYLE || undefined;
	this.ATTRIBUTE_UNDERLINE_BY_WORD = properties.ATTRIBUTE_UNDERLINE_BY_WORD || undefined;
	this.ATTRIBUTE_UNDERLINE_COLOR = properties.ATTRIBUTE_UNDERLINE_COLOR || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = properties.ATTRIBUTE_UNDERLINE_PATTERN_SOLID || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = properties.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_NONE = properties.ATTRIBUTE_UNDERLINE_STYLE_NONE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = properties.ATTRIBUTE_UNDERLINE_STYLE_SINGLE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_THICK = properties.ATTRIBUTE_UNDERLINE_STYLE_THICK || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION = properties.ATTRIBUTE_WRITING_DIRECTION || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = properties.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = properties.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = properties.ATTRIBUTE_WRITING_DIRECTION_NATURAL || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = properties.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = properties.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT || undefined;
	this.AUTODETECT_ADDRESS = properties.AUTODETECT_ADDRESS || undefined;
	this.AUTODETECT_ALL = properties.AUTODETECT_ALL || undefined;
	this.AUTODETECT_CALENDAR = properties.AUTODETECT_CALENDAR || undefined;
	this.AUTODETECT_LINK = properties.AUTODETECT_LINK || undefined;
	this.AUTODETECT_NONE = properties.AUTODETECT_NONE || undefined;
	this.AUTODETECT_PHONE = properties.AUTODETECT_PHONE || undefined;
	this.BLEND_MODE_CLEAR = properties.BLEND_MODE_CLEAR || undefined;
	this.BLEND_MODE_COLOR = properties.BLEND_MODE_COLOR || undefined;
	this.BLEND_MODE_COLOR_BURN = properties.BLEND_MODE_COLOR_BURN || undefined;
	this.BLEND_MODE_COLOR_DODGE = properties.BLEND_MODE_COLOR_DODGE || undefined;
	this.BLEND_MODE_COPY = properties.BLEND_MODE_COPY || undefined;
	this.BLEND_MODE_DARKEN = properties.BLEND_MODE_DARKEN || undefined;
	this.BLEND_MODE_DESTINATION_ATOP = properties.BLEND_MODE_DESTINATION_ATOP || undefined;
	this.BLEND_MODE_DESTINATION_IN = properties.BLEND_MODE_DESTINATION_IN || undefined;
	this.BLEND_MODE_DESTINATION_OUT = properties.BLEND_MODE_DESTINATION_OUT || undefined;
	this.BLEND_MODE_DESTINATION_OVER = properties.BLEND_MODE_DESTINATION_OVER || undefined;
	this.BLEND_MODE_DIFFERENCE = properties.BLEND_MODE_DIFFERENCE || undefined;
	this.BLEND_MODE_EXCLUSION = properties.BLEND_MODE_EXCLUSION || undefined;
	this.BLEND_MODE_HARD_LIGHT = properties.BLEND_MODE_HARD_LIGHT || undefined;
	this.BLEND_MODE_HUE = properties.BLEND_MODE_HUE || undefined;
	this.BLEND_MODE_LIGHTEN = properties.BLEND_MODE_LIGHTEN || undefined;
	this.BLEND_MODE_LUMINOSITY = properties.BLEND_MODE_LUMINOSITY || undefined;
	this.BLEND_MODE_MULTIPLY = properties.BLEND_MODE_MULTIPLY || undefined;
	this.BLEND_MODE_NORMAL = properties.BLEND_MODE_NORMAL || undefined;
	this.BLEND_MODE_OVERLAY = properties.BLEND_MODE_OVERLAY || undefined;
	this.BLEND_MODE_PLUS_DARKER = properties.BLEND_MODE_PLUS_DARKER || undefined;
	this.BLEND_MODE_PLUS_LIGHTER = properties.BLEND_MODE_PLUS_LIGHTER || undefined;
	this.BLEND_MODE_SATURATION = properties.BLEND_MODE_SATURATION || undefined;
	this.BLEND_MODE_SCREEN = properties.BLEND_MODE_SCREEN || undefined;
	this.BLEND_MODE_SOFT_LIGHT = properties.BLEND_MODE_SOFT_LIGHT || undefined;
	this.BLEND_MODE_SOURCE_ATOP = properties.BLEND_MODE_SOURCE_ATOP || undefined;
	this.BLEND_MODE_SOURCE_IN = properties.BLEND_MODE_SOURCE_IN || undefined;
	this.BLEND_MODE_SOURCE_OUT = properties.BLEND_MODE_SOURCE_OUT || undefined;
	this.BLEND_MODE_XOR = properties.BLEND_MODE_XOR || undefined;
	this.CLIP_MODE_DEFAULT = properties.CLIP_MODE_DEFAULT || undefined;
	this.CLIP_MODE_DISABLED = properties.CLIP_MODE_DISABLED || undefined;
	this.CLIP_MODE_ENABLED = properties.CLIP_MODE_ENABLED || undefined;
	this.COLLISION_MODE_ALL = properties.COLLISION_MODE_ALL || undefined;
	this.COLLISION_MODE_BOUNDARY = properties.COLLISION_MODE_BOUNDARY || undefined;
	this.COLLISION_MODE_ITEM = properties.COLLISION_MODE_ITEM || undefined;
	this.COLOR_GROUP_TABLEVIEW_BACKGROUND = properties.COLOR_GROUP_TABLEVIEW_BACKGROUND || undefined;
	this.COLOR_SCROLLVIEW_BACKGROUND = properties.COLOR_SCROLLVIEW_BACKGROUND || undefined;
	this.COLOR_UNDER_PAGE_BACKGROUND = properties.COLOR_UNDER_PAGE_BACKGROUND || undefined;
	this.COLOR_VIEW_FLIPSIDE_BACKGROUND = properties.COLOR_VIEW_FLIPSIDE_BACKGROUND || undefined;
	this.PUSH_MODE_CONTINUOUS = properties.PUSH_MODE_CONTINUOUS || undefined;
	this.PUSH_MODE_INSTANTANEOUS = properties.PUSH_MODE_INSTANTANEOUS || undefined;
	this.SCROLL_DECELERATION_RATE_FAST = properties.SCROLL_DECELERATION_RATE_FAST || undefined;
	this.SCROLL_DECELERATION_RATE_NORMAL = properties.SCROLL_DECELERATION_RATE_NORMAL || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD = properties.WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED = properties.WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED = properties.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_OTHER = properties.WEBVIEW_NAVIGATIONTYPE_OTHER || undefined;
	this.WEBVIEW_NAVIGATIONTYPE_RELOAD = properties.WEBVIEW_NAVIGATIONTYPE_RELOAD || undefined;
	this.apiName = 'Titanium.UI.iOS';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
iOS.prototype.addEventListener = function () {
};
iOS.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
iOS.prototype.create3DMatrix = function (params) {
	var ThreeDMatrix = require('./iOS/3DMatrix');
	return ThreeDMatrix(params);
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
iOS.prototype.createAttribute = function (params) {
	var Attribute = require('./iOS/Attribute');
	return Attribute(params);
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
	return this.apiName;
};
iOS.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
iOS.prototype.removeEventListener = function () {
};
iOS.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new iOS(properties);
};