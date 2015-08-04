var crypto = require('crypto');
function Android(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'LINKIFY_ALL',
			'LINKIFY_EMAIL_ADDRESSES',
			'LINKIFY_MAP_ADDRESSES',
			'LINKIFY_PHONE_NUMBERS',
			'LINKIFY_WEB_URLS',
			'OVER_SCROLL_ALWAYS',
			'OVER_SCROLL_IF_CONTENT_SCROLLS',
			'OVER_SCROLL_NEVER',
			'PIXEL_FORMAT_A_8',
			'PIXEL_FORMAT_LA_88',
			'PIXEL_FORMAT_L_8',
			'PIXEL_FORMAT_OPAQUE',
			'PIXEL_FORMAT_RGBA_4444',
			'PIXEL_FORMAT_RGBA_5551',
			'PIXEL_FORMAT_RGBA_8888',
			'PIXEL_FORMAT_RGBX_8888',
			'PIXEL_FORMAT_RGB_332',
			'PIXEL_FORMAT_RGB_565',
			'PIXEL_FORMAT_RGB_888',
			'PIXEL_FORMAT_TRANSLUCENT',
			'PIXEL_FORMAT_TRANSPARENT',
			'PIXEL_FORMAT_UNKNOWN',
			'PROGRESS_INDICATOR_DETERMINANT',
			'PROGRESS_INDICATOR_DIALOG',
			'PROGRESS_INDICATOR_INDETERMINANT',
			'PROGRESS_INDICATOR_STATUS_BAR',
			'SOFT_INPUT_ADJUST_PAN',
			'SOFT_INPUT_ADJUST_RESIZE',
			'SOFT_INPUT_ADJUST_UNSPECIFIED',
			'SOFT_INPUT_STATE_ALWAYS_HIDDEN',
			'SOFT_INPUT_STATE_ALWAYS_VISIBLE',
			'SOFT_INPUT_STATE_HIDDEN',
			'SOFT_INPUT_STATE_UNSPECIFIED',
			'SOFT_INPUT_STATE_VISIBLE',
			'SOFT_KEYBOARD_DEFAULT_ON_FOCUS',
			'SOFT_KEYBOARD_HIDE_ON_FOCUS',
			'SOFT_KEYBOARD_SHOW_ON_FOCUS',
			'SWITCH_STYLE_CHECKBOX',
			'SWITCH_STYLE_TOGGLEBUTTON',
			'WEBVIEW_LOAD_CACHE_ELSE_NETWORK',
			'WEBVIEW_LOAD_CACHE_ONLY',
			'WEBVIEW_LOAD_DEFAULT',
			'WEBVIEW_LOAD_NO_CACHE',
			'WEBVIEW_PLUGINS_OFF',
			'WEBVIEW_PLUGINS_ON',
			'WEBVIEW_PLUGINS_ON_DEMAND',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.LINKIFY_ALL) {
		throw new Error('Ti.UI.Android.LINKIFY_ALL was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.LINKIFY_EMAIL_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_EMAIL_ADDRESSES was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.LINKIFY_MAP_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_MAP_ADDRESSES was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.LINKIFY_PHONE_NUMBERS) {
		throw new Error('Ti.UI.Android.LINKIFY_PHONE_NUMBERS was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.LINKIFY_WEB_URLS) {
		throw new Error('Ti.UI.Android.LINKIFY_WEB_URLS was deprecated, since 3.0.0');
	}
	if (__SLAG__properties.OVER_SCROLL_ALWAYS) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_ALWAYS is read only property');
	}
	this.OVER_SCROLL_ALWAYS = 0;
	if (__SLAG__properties.OVER_SCROLL_IF_CONTENT_SCROLLS) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS is read only property');
	}
	this.OVER_SCROLL_IF_CONTENT_SCROLLS = 0;
	if (__SLAG__properties.OVER_SCROLL_NEVER) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_NEVER is read only property');
	}
	this.OVER_SCROLL_NEVER = 0;
	if (__SLAG__properties.PIXEL_FORMAT_A_8) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_A_8 is read only property');
	}
	this.PIXEL_FORMAT_A_8 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_LA_88) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_LA_88 is read only property');
	}
	this.PIXEL_FORMAT_LA_88 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_L_8) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_L_8 is read only property');
	}
	this.PIXEL_FORMAT_L_8 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_OPAQUE) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_OPAQUE is read only property');
	}
	this.PIXEL_FORMAT_OPAQUE = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGBA_4444) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_4444 is read only property');
	}
	this.PIXEL_FORMAT_RGBA_4444 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGBA_5551) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_5551 is read only property');
	}
	this.PIXEL_FORMAT_RGBA_5551 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGBA_8888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_8888 is read only property');
	}
	this.PIXEL_FORMAT_RGBA_8888 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGBX_8888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBX_8888 is read only property');
	}
	this.PIXEL_FORMAT_RGBX_8888 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGB_332) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_332 is read only property');
	}
	this.PIXEL_FORMAT_RGB_332 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGB_565) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_565 is read only property');
	}
	this.PIXEL_FORMAT_RGB_565 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_RGB_888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_888 is read only property');
	}
	this.PIXEL_FORMAT_RGB_888 = 0;
	if (__SLAG__properties.PIXEL_FORMAT_TRANSLUCENT) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_TRANSLUCENT is read only property');
	}
	this.PIXEL_FORMAT_TRANSLUCENT = 0;
	if (__SLAG__properties.PIXEL_FORMAT_TRANSPARENT) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_TRANSPARENT is read only property');
	}
	this.PIXEL_FORMAT_TRANSPARENT = 0;
	if (__SLAG__properties.PIXEL_FORMAT_UNKNOWN) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_UNKNOWN is read only property');
	}
	this.PIXEL_FORMAT_UNKNOWN = 0;
	if (__SLAG__properties.PROGRESS_INDICATOR_DETERMINANT) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT is read only property');
	}
	this.PROGRESS_INDICATOR_DETERMINANT = 0;
	if (__SLAG__properties.PROGRESS_INDICATOR_DIALOG) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_DIALOG is read only property');
	}
	this.PROGRESS_INDICATOR_DIALOG = 0;
	if (__SLAG__properties.PROGRESS_INDICATOR_INDETERMINANT) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT is read only property');
	}
	this.PROGRESS_INDICATOR_INDETERMINANT = 0;
	if (__SLAG__properties.PROGRESS_INDICATOR_STATUS_BAR) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_STATUS_BAR is read only property');
	}
	this.PROGRESS_INDICATOR_STATUS_BAR = 0;
	if (__SLAG__properties.SOFT_INPUT_ADJUST_PAN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_PAN is read only property');
	}
	this.SOFT_INPUT_ADJUST_PAN = 0;
	if (__SLAG__properties.SOFT_INPUT_ADJUST_RESIZE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE is read only property');
	}
	this.SOFT_INPUT_ADJUST_RESIZE = 0;
	if (__SLAG__properties.SOFT_INPUT_ADJUST_UNSPECIFIED) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED is read only property');
	}
	this.SOFT_INPUT_ADJUST_UNSPECIFIED = 0;
	if (__SLAG__properties.SOFT_INPUT_STATE_ALWAYS_HIDDEN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN is read only property');
	}
	this.SOFT_INPUT_STATE_ALWAYS_HIDDEN = 0;
	if (__SLAG__properties.SOFT_INPUT_STATE_ALWAYS_VISIBLE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE is read only property');
	}
	this.SOFT_INPUT_STATE_ALWAYS_VISIBLE = 0;
	if (__SLAG__properties.SOFT_INPUT_STATE_HIDDEN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN is read only property');
	}
	this.SOFT_INPUT_STATE_HIDDEN = 0;
	if (__SLAG__properties.SOFT_INPUT_STATE_UNSPECIFIED) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_UNSPECIFIED is read only property');
	}
	this.SOFT_INPUT_STATE_UNSPECIFIED = 0;
	if (__SLAG__properties.SOFT_INPUT_STATE_VISIBLE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_VISIBLE is read only property');
	}
	this.SOFT_INPUT_STATE_VISIBLE = 0;
	if (__SLAG__properties.SOFT_KEYBOARD_DEFAULT_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS is read only property');
	}
	this.SOFT_KEYBOARD_DEFAULT_ON_FOCUS = 0;
	if (__SLAG__properties.SOFT_KEYBOARD_HIDE_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS is read only property');
	}
	this.SOFT_KEYBOARD_HIDE_ON_FOCUS = 0;
	if (__SLAG__properties.SOFT_KEYBOARD_SHOW_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS is read only property');
	}
	this.SOFT_KEYBOARD_SHOW_ON_FOCUS = 0;
	if (__SLAG__properties.SWITCH_STYLE_CHECKBOX) {
		throw new Error('Ti.UI.Android.SWITCH_STYLE_CHECKBOX is read only property');
	}
	this.SWITCH_STYLE_CHECKBOX = 0;
	if (__SLAG__properties.SWITCH_STYLE_TOGGLEBUTTON) {
		throw new Error('Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON is read only property');
	}
	this.SWITCH_STYLE_TOGGLEBUTTON = 0;
	if (__SLAG__properties.WEBVIEW_LOAD_CACHE_ELSE_NETWORK) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK is read only property');
	}
	this.WEBVIEW_LOAD_CACHE_ELSE_NETWORK = 0;
	if (__SLAG__properties.WEBVIEW_LOAD_CACHE_ONLY) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_CACHE_ONLY is read only property');
	}
	this.WEBVIEW_LOAD_CACHE_ONLY = 0;
	if (__SLAG__properties.WEBVIEW_LOAD_DEFAULT) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_DEFAULT is read only property');
	}
	this.WEBVIEW_LOAD_DEFAULT = 0;
	if (__SLAG__properties.WEBVIEW_LOAD_NO_CACHE) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_NO_CACHE is read only property');
	}
	this.WEBVIEW_LOAD_NO_CACHE = 0;
	if (__SLAG__properties.WEBVIEW_PLUGINS_OFF) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_OFF is read only property');
	}
	this.WEBVIEW_PLUGINS_OFF = 0;
	if (__SLAG__properties.WEBVIEW_PLUGINS_ON) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_ON is read only property');
	}
	this.WEBVIEW_PLUGINS_ON = 0;
	if (__SLAG__properties.WEBVIEW_PLUGINS_ON_DEMAND) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND is read only property');
	}
	this.WEBVIEW_PLUGINS_ON_DEMAND = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Android.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
Android.prototype.hideSoftKeyboard = function () {
};
Android.prototype.openPreferences = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Android(properties);
};