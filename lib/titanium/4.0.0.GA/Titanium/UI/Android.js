function Android(properties) {
	properties = properties || {};
	if (properties.LINKIFY_ALL) {
		throw new Error('Ti.UI.Android.LINKIFY_ALL was deprecated, since 3.0.0');
	}
	if (properties.LINKIFY_EMAIL_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_EMAIL_ADDRESSES was deprecated, since 3.0.0');
	}
	if (properties.LINKIFY_MAP_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_MAP_ADDRESSES was deprecated, since 3.0.0');
	}
	if (properties.LINKIFY_PHONE_NUMBERS) {
		throw new Error('Ti.UI.Android.LINKIFY_PHONE_NUMBERS was deprecated, since 3.0.0');
	}
	if (properties.LINKIFY_WEB_URLS) {
		throw new Error('Ti.UI.Android.LINKIFY_WEB_URLS was deprecated, since 3.0.0');
	}
	this.OVER_SCROLL_ALWAYS = properties.OVER_SCROLL_ALWAYS || 0;
	this.OVER_SCROLL_IF_CONTENT_SCROLLS = properties.OVER_SCROLL_IF_CONTENT_SCROLLS || 0;
	this.OVER_SCROLL_NEVER = properties.OVER_SCROLL_NEVER || 0;
	this.PIXEL_FORMAT_A_8 = properties.PIXEL_FORMAT_A_8 || 0;
	this.PIXEL_FORMAT_LA_88 = properties.PIXEL_FORMAT_LA_88 || 0;
	this.PIXEL_FORMAT_L_8 = properties.PIXEL_FORMAT_L_8 || 0;
	this.PIXEL_FORMAT_OPAQUE = properties.PIXEL_FORMAT_OPAQUE || 0;
	this.PIXEL_FORMAT_RGBA_4444 = properties.PIXEL_FORMAT_RGBA_4444 || 0;
	this.PIXEL_FORMAT_RGBA_5551 = properties.PIXEL_FORMAT_RGBA_5551 || 0;
	this.PIXEL_FORMAT_RGBA_8888 = properties.PIXEL_FORMAT_RGBA_8888 || 0;
	this.PIXEL_FORMAT_RGBX_8888 = properties.PIXEL_FORMAT_RGBX_8888 || 0;
	this.PIXEL_FORMAT_RGB_332 = properties.PIXEL_FORMAT_RGB_332 || 0;
	this.PIXEL_FORMAT_RGB_565 = properties.PIXEL_FORMAT_RGB_565 || 0;
	this.PIXEL_FORMAT_RGB_888 = properties.PIXEL_FORMAT_RGB_888 || 0;
	this.PIXEL_FORMAT_TRANSLUCENT = properties.PIXEL_FORMAT_TRANSLUCENT || 0;
	this.PIXEL_FORMAT_TRANSPARENT = properties.PIXEL_FORMAT_TRANSPARENT || 0;
	this.PIXEL_FORMAT_UNKNOWN = properties.PIXEL_FORMAT_UNKNOWN || 0;
	this.PROGRESS_INDICATOR_DETERMINANT = properties.PROGRESS_INDICATOR_DETERMINANT || 0;
	this.PROGRESS_INDICATOR_DIALOG = properties.PROGRESS_INDICATOR_DIALOG || 0;
	this.PROGRESS_INDICATOR_INDETERMINANT = properties.PROGRESS_INDICATOR_INDETERMINANT || 0;
	this.PROGRESS_INDICATOR_STATUS_BAR = properties.PROGRESS_INDICATOR_STATUS_BAR || 0;
	this.SOFT_INPUT_ADJUST_PAN = properties.SOFT_INPUT_ADJUST_PAN || 0;
	this.SOFT_INPUT_ADJUST_RESIZE = properties.SOFT_INPUT_ADJUST_RESIZE || 0;
	this.SOFT_INPUT_ADJUST_UNSPECIFIED = properties.SOFT_INPUT_ADJUST_UNSPECIFIED || 0;
	this.SOFT_INPUT_STATE_ALWAYS_HIDDEN = properties.SOFT_INPUT_STATE_ALWAYS_HIDDEN || 0;
	this.SOFT_INPUT_STATE_ALWAYS_VISIBLE = properties.SOFT_INPUT_STATE_ALWAYS_VISIBLE || 0;
	this.SOFT_INPUT_STATE_HIDDEN = properties.SOFT_INPUT_STATE_HIDDEN || 0;
	this.SOFT_INPUT_STATE_UNSPECIFIED = properties.SOFT_INPUT_STATE_UNSPECIFIED || 0;
	this.SOFT_INPUT_STATE_VISIBLE = properties.SOFT_INPUT_STATE_VISIBLE || 0;
	this.SOFT_KEYBOARD_DEFAULT_ON_FOCUS = properties.SOFT_KEYBOARD_DEFAULT_ON_FOCUS || 0;
	this.SOFT_KEYBOARD_HIDE_ON_FOCUS = properties.SOFT_KEYBOARD_HIDE_ON_FOCUS || 0;
	this.SOFT_KEYBOARD_SHOW_ON_FOCUS = properties.SOFT_KEYBOARD_SHOW_ON_FOCUS || 0;
	this.SWITCH_STYLE_CHECKBOX = properties.SWITCH_STYLE_CHECKBOX || 0;
	this.SWITCH_STYLE_SWITCH = properties.SWITCH_STYLE_SWITCH || 0;
	this.SWITCH_STYLE_TOGGLEBUTTON = properties.SWITCH_STYLE_TOGGLEBUTTON || 0;
	this.WEBVIEW_LOAD_CACHE_ELSE_NETWORK = properties.WEBVIEW_LOAD_CACHE_ELSE_NETWORK || 0;
	this.WEBVIEW_LOAD_CACHE_ONLY = properties.WEBVIEW_LOAD_CACHE_ONLY || 0;
	this.WEBVIEW_LOAD_DEFAULT = properties.WEBVIEW_LOAD_DEFAULT || 0;
	this.WEBVIEW_LOAD_NO_CACHE = properties.WEBVIEW_LOAD_NO_CACHE || 0;
	this.WEBVIEW_PLUGINS_OFF = properties.WEBVIEW_PLUGINS_OFF || 0;
	this.WEBVIEW_PLUGINS_ON = properties.WEBVIEW_PLUGINS_ON || 0;
	this.WEBVIEW_PLUGINS_ON_DEMAND = properties.WEBVIEW_PLUGINS_ON_DEMAND || 0;
	this.apiName = 'Ti.UI.Android';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.hideSoftKeyboard = function () {
};
Android.prototype.openPreferences = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};