function Android(properties) {
	properties = properties || {};
	this.LINKIFY_ALL = properties.LINKIFY_ALL || undefined;
	this.LINKIFY_EMAIL_ADDRESSES = properties.LINKIFY_EMAIL_ADDRESSES || undefined;
	this.LINKIFY_MAP_ADDRESSES = properties.LINKIFY_MAP_ADDRESSES || undefined;
	this.LINKIFY_PHONE_NUMBERS = properties.LINKIFY_PHONE_NUMBERS || undefined;
	this.LINKIFY_WEB_URLS = properties.LINKIFY_WEB_URLS || undefined;
	this.OVER_SCROLL_ALWAYS = properties.OVER_SCROLL_ALWAYS || undefined;
	this.OVER_SCROLL_IF_CONTENT_SCROLLS = properties.OVER_SCROLL_IF_CONTENT_SCROLLS || undefined;
	this.OVER_SCROLL_NEVER = properties.OVER_SCROLL_NEVER || undefined;
	this.PIXEL_FORMAT_A_8 = properties.PIXEL_FORMAT_A_8 || undefined;
	this.PIXEL_FORMAT_LA_88 = properties.PIXEL_FORMAT_LA_88 || undefined;
	this.PIXEL_FORMAT_L_8 = properties.PIXEL_FORMAT_L_8 || undefined;
	this.PIXEL_FORMAT_OPAQUE = properties.PIXEL_FORMAT_OPAQUE || undefined;
	this.PIXEL_FORMAT_RGBA_4444 = properties.PIXEL_FORMAT_RGBA_4444 || undefined;
	this.PIXEL_FORMAT_RGBA_5551 = properties.PIXEL_FORMAT_RGBA_5551 || undefined;
	this.PIXEL_FORMAT_RGBA_8888 = properties.PIXEL_FORMAT_RGBA_8888 || undefined;
	this.PIXEL_FORMAT_RGBX_8888 = properties.PIXEL_FORMAT_RGBX_8888 || undefined;
	this.PIXEL_FORMAT_RGB_332 = properties.PIXEL_FORMAT_RGB_332 || undefined;
	this.PIXEL_FORMAT_RGB_565 = properties.PIXEL_FORMAT_RGB_565 || undefined;
	this.PIXEL_FORMAT_RGB_888 = properties.PIXEL_FORMAT_RGB_888 || undefined;
	this.PIXEL_FORMAT_TRANSLUCENT = properties.PIXEL_FORMAT_TRANSLUCENT || undefined;
	this.PIXEL_FORMAT_TRANSPARENT = properties.PIXEL_FORMAT_TRANSPARENT || undefined;
	this.PIXEL_FORMAT_UNKNOWN = properties.PIXEL_FORMAT_UNKNOWN || undefined;
	this.PROGRESS_INDICATOR_DETERMINANT = properties.PROGRESS_INDICATOR_DETERMINANT || undefined;
	this.PROGRESS_INDICATOR_DIALOG = properties.PROGRESS_INDICATOR_DIALOG || undefined;
	this.PROGRESS_INDICATOR_INDETERMINANT = properties.PROGRESS_INDICATOR_INDETERMINANT || undefined;
	this.PROGRESS_INDICATOR_STATUS_BAR = properties.PROGRESS_INDICATOR_STATUS_BAR || undefined;
	this.SOFT_INPUT_ADJUST_PAN = properties.SOFT_INPUT_ADJUST_PAN || undefined;
	this.SOFT_INPUT_ADJUST_RESIZE = properties.SOFT_INPUT_ADJUST_RESIZE || undefined;
	this.SOFT_INPUT_ADJUST_UNSPECIFIED = properties.SOFT_INPUT_ADJUST_UNSPECIFIED || undefined;
	this.SOFT_INPUT_STATE_ALWAYS_HIDDEN = properties.SOFT_INPUT_STATE_ALWAYS_HIDDEN || undefined;
	this.SOFT_INPUT_STATE_ALWAYS_VISIBLE = properties.SOFT_INPUT_STATE_ALWAYS_VISIBLE || undefined;
	this.SOFT_INPUT_STATE_HIDDEN = properties.SOFT_INPUT_STATE_HIDDEN || undefined;
	this.SOFT_INPUT_STATE_UNSPECIFIED = properties.SOFT_INPUT_STATE_UNSPECIFIED || undefined;
	this.SOFT_INPUT_STATE_VISIBLE = properties.SOFT_INPUT_STATE_VISIBLE || undefined;
	this.SOFT_KEYBOARD_DEFAULT_ON_FOCUS = properties.SOFT_KEYBOARD_DEFAULT_ON_FOCUS || undefined;
	this.SOFT_KEYBOARD_HIDE_ON_FOCUS = properties.SOFT_KEYBOARD_HIDE_ON_FOCUS || undefined;
	this.SOFT_KEYBOARD_SHOW_ON_FOCUS = properties.SOFT_KEYBOARD_SHOW_ON_FOCUS || undefined;
	this.SWITCH_STYLE_CHECKBOX = properties.SWITCH_STYLE_CHECKBOX || undefined;
	this.SWITCH_STYLE_SWITCH = properties.SWITCH_STYLE_SWITCH || undefined;
	this.SWITCH_STYLE_TOGGLEBUTTON = properties.SWITCH_STYLE_TOGGLEBUTTON || undefined;
	this.WEBVIEW_LOAD_CACHE_ELSE_NETWORK = properties.WEBVIEW_LOAD_CACHE_ELSE_NETWORK || undefined;
	this.WEBVIEW_LOAD_CACHE_ONLY = properties.WEBVIEW_LOAD_CACHE_ONLY || undefined;
	this.WEBVIEW_LOAD_DEFAULT = properties.WEBVIEW_LOAD_DEFAULT || undefined;
	this.WEBVIEW_LOAD_NO_CACHE = properties.WEBVIEW_LOAD_NO_CACHE || undefined;
	this.WEBVIEW_PLUGINS_OFF = properties.WEBVIEW_PLUGINS_OFF || undefined;
	this.WEBVIEW_PLUGINS_ON = properties.WEBVIEW_PLUGINS_ON || undefined;
	this.WEBVIEW_PLUGINS_ON_DEMAND = properties.WEBVIEW_PLUGINS_ON_DEMAND || undefined;
	this.apiName = 'Titanium.UI.Android';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.createProgressIndicator = function (params) {
	var ProgressIndicator = require('./Android/ProgressIndicator');
	return ProgressIndicator(params);
};
Android.prototype.createSearchView = function (params) {
	var SearchView = require('./Android/SearchView');
	return SearchView(params);
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Android.prototype.hideSoftKeyboard = function () {
};
Android.prototype.openPreferences = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Android.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Android(properties);
};