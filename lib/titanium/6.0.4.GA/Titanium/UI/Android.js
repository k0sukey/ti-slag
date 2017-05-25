var crypto = require('crypto');
function Android(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'GRAVITY_AXIS_CLIP',
			'GRAVITY_AXIS_PULL_AFTER',
			'GRAVITY_AXIS_PULL_BEFORE',
			'GRAVITY_AXIS_SPECIFIED',
			'GRAVITY_AXIS_X_SHIFT',
			'GRAVITY_AXIS_Y_SHIFT',
			'GRAVITY_BOTTOM',
			'GRAVITY_CENTER',
			'GRAVITY_CENTER_HORIZONTAL',
			'GRAVITY_CENTER_VERTICAL',
			'GRAVITY_CLIP_HORIZONTAL',
			'GRAVITY_CLIP_VERTICAL',
			'GRAVITY_DISPLAY_CLIP_HORIZONTAL',
			'GRAVITY_DISPLAY_CLIP_VERTICAL',
			'GRAVITY_END',
			'GRAVITY_FILL',
			'GRAVITY_FILL_HORIZONTAL',
			'GRAVITY_FILL_VERTICAL',
			'GRAVITY_HORIZONTAL_GRAVITY_MASK',
			'GRAVITY_LEFT',
			'GRAVITY_NO_GRAVITY',
			'GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK',
			'GRAVITY_RELATIVE_LAYOUT_DIRECTION',
			'GRAVITY_RIGHT',
			'GRAVITY_START',
			'GRAVITY_TOP',
			'GRAVITY_VERTICAL_GRAVITY_MASK',
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
			'PROGRESS_INDICATOR_DIALOG',
			'PROGRESS_INDICATOR_STATUS_BAR',
			'PROGRESS_INDICATOR_INDETERMINANT',
			'PROGRESS_INDICATOR_DETERMINANT',
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
			'SWITCH_STYLE_SWITCH',
			'WEBVIEW_PLUGINS_OFF',
			'WEBVIEW_PLUGINS_ON',
			'WEBVIEW_PLUGINS_ON_DEMAND',
			'WEBVIEW_LOAD_DEFAULT',
			'WEBVIEW_LOAD_NO_CACHE',
			'WEBVIEW_LOAD_CACHE_ONLY',
			'WEBVIEW_LOAD_CACHE_ELSE_NETWORK',
			'TRANSITION_EXPLODE',
			'TRANSITION_FADE_IN',
			'TRANSITION_FADE_OUT',
			'TRANSITION_SLIDE_TOP',
			'TRANSITION_SLIDE_RIGHT',
			'TRANSITION_SLIDE_BOTTOM',
			'TRANSITION_SLIDE_LEFT',
			'TRANSITION_CHANGE_BOUNDS',
			'TRANSITION_CHANGE_CLIP_BOUNDS',
			'TRANSITION_CHANGE_TRANSFORM',
			'TRANSITION_CHANGE_IMAGE_TRANSFORM',
			'TRANSITION_NONE',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.Android.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_CLIP) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_CLIP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_CLIP = undefined;
	} else {
		this.GRAVITY_AXIS_CLIP = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_PULL_AFTER) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_PULL_AFTER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_PULL_AFTER = undefined;
	} else {
		this.GRAVITY_AXIS_PULL_AFTER = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_PULL_BEFORE) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_PULL_BEFORE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_PULL_BEFORE = undefined;
	} else {
		this.GRAVITY_AXIS_PULL_BEFORE = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_SPECIFIED) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_SPECIFIED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_SPECIFIED = undefined;
	} else {
		this.GRAVITY_AXIS_SPECIFIED = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_X_SHIFT) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_X_SHIFT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_X_SHIFT = undefined;
	} else {
		this.GRAVITY_AXIS_X_SHIFT = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_AXIS_Y_SHIFT) {
		throw new Error('Ti.UI.Android.GRAVITY_AXIS_Y_SHIFT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_AXIS_Y_SHIFT = undefined;
	} else {
		this.GRAVITY_AXIS_Y_SHIFT = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_BOTTOM) {
		throw new Error('Ti.UI.Android.GRAVITY_BOTTOM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_BOTTOM = undefined;
	} else {
		this.GRAVITY_BOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_CENTER) {
		throw new Error('Ti.UI.Android.GRAVITY_CENTER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_CENTER = undefined;
	} else {
		this.GRAVITY_CENTER = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_CENTER_HORIZONTAL) {
		throw new Error('Ti.UI.Android.GRAVITY_CENTER_HORIZONTAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_CENTER_HORIZONTAL = undefined;
	} else {
		this.GRAVITY_CENTER_HORIZONTAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_CENTER_VERTICAL) {
		throw new Error('Ti.UI.Android.GRAVITY_CENTER_VERTICAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_CENTER_VERTICAL = undefined;
	} else {
		this.GRAVITY_CENTER_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_CLIP_HORIZONTAL) {
		throw new Error('Ti.UI.Android.GRAVITY_CLIP_HORIZONTAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_CLIP_HORIZONTAL = undefined;
	} else {
		this.GRAVITY_CLIP_HORIZONTAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_CLIP_VERTICAL) {
		throw new Error('Ti.UI.Android.GRAVITY_CLIP_VERTICAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_CLIP_VERTICAL = undefined;
	} else {
		this.GRAVITY_CLIP_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_DISPLAY_CLIP_HORIZONTAL) {
		throw new Error('Ti.UI.Android.GRAVITY_DISPLAY_CLIP_HORIZONTAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_DISPLAY_CLIP_HORIZONTAL = undefined;
	} else {
		this.GRAVITY_DISPLAY_CLIP_HORIZONTAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_DISPLAY_CLIP_VERTICAL) {
		throw new Error('Ti.UI.Android.GRAVITY_DISPLAY_CLIP_VERTICAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_DISPLAY_CLIP_VERTICAL = undefined;
	} else {
		this.GRAVITY_DISPLAY_CLIP_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_END) {
		throw new Error('Ti.UI.Android.GRAVITY_END is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_END = undefined;
	} else {
		this.GRAVITY_END = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_FILL) {
		throw new Error('Ti.UI.Android.GRAVITY_FILL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_FILL = undefined;
	} else {
		this.GRAVITY_FILL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_FILL_HORIZONTAL) {
		throw new Error('Ti.UI.Android.GRAVITY_FILL_HORIZONTAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_FILL_HORIZONTAL = undefined;
	} else {
		this.GRAVITY_FILL_HORIZONTAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_FILL_VERTICAL) {
		throw new Error('Ti.UI.Android.GRAVITY_FILL_VERTICAL is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_FILL_VERTICAL = undefined;
	} else {
		this.GRAVITY_FILL_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_HORIZONTAL_GRAVITY_MASK) {
		throw new Error('Ti.UI.Android.GRAVITY_HORIZONTAL_GRAVITY_MASK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_HORIZONTAL_GRAVITY_MASK = undefined;
	} else {
		this.GRAVITY_HORIZONTAL_GRAVITY_MASK = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_LEFT) {
		throw new Error('Ti.UI.Android.GRAVITY_LEFT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_LEFT = undefined;
	} else {
		this.GRAVITY_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_NO_GRAVITY) {
		throw new Error('Ti.UI.Android.GRAVITY_NO_GRAVITY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_NO_GRAVITY = undefined;
	} else {
		this.GRAVITY_NO_GRAVITY = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK) {
		throw new Error('Ti.UI.Android.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK = undefined;
	} else {
		this.GRAVITY_RELATIVE_HORIZONTAL_GRAVITY_MASK = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_RELATIVE_LAYOUT_DIRECTION) {
		throw new Error('Ti.UI.Android.GRAVITY_RELATIVE_LAYOUT_DIRECTION is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_RELATIVE_LAYOUT_DIRECTION = undefined;
	} else {
		this.GRAVITY_RELATIVE_LAYOUT_DIRECTION = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_RIGHT) {
		throw new Error('Ti.UI.Android.GRAVITY_RIGHT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_RIGHT = undefined;
	} else {
		this.GRAVITY_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_START) {
		throw new Error('Ti.UI.Android.GRAVITY_START is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_START = undefined;
	} else {
		this.GRAVITY_START = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_TOP) {
		throw new Error('Ti.UI.Android.GRAVITY_TOP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_TOP = undefined;
	} else {
		this.GRAVITY_TOP = 0;
	}
	if (__SLAG_PROPERTIES.GRAVITY_VERTICAL_GRAVITY_MASK) {
		throw new Error('Ti.UI.Android.GRAVITY_VERTICAL_GRAVITY_MASK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.GRAVITY_VERTICAL_GRAVITY_MASK = undefined;
	} else {
		this.GRAVITY_VERTICAL_GRAVITY_MASK = 0;
	}
	if (__SLAG_PROPERTIES.LINKIFY_ALL) {
		throw new Error('Ti.UI.Android.LINKIFY_ALL was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.LINKIFY_EMAIL_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_EMAIL_ADDRESSES was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.LINKIFY_MAP_ADDRESSES) {
		throw new Error('Ti.UI.Android.LINKIFY_MAP_ADDRESSES was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.LINKIFY_PHONE_NUMBERS) {
		throw new Error('Ti.UI.Android.LINKIFY_PHONE_NUMBERS was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.LINKIFY_WEB_URLS) {
		throw new Error('Ti.UI.Android.LINKIFY_WEB_URLS was deprecated, since 3.0.0');
	}
	if (__SLAG_PROPERTIES.OVER_SCROLL_ALWAYS) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_ALWAYS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OVER_SCROLL_ALWAYS = undefined;
	} else {
		this.OVER_SCROLL_ALWAYS = 0;
	}
	if (__SLAG_PROPERTIES.OVER_SCROLL_IF_CONTENT_SCROLLS) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_IF_CONTENT_SCROLLS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OVER_SCROLL_IF_CONTENT_SCROLLS = undefined;
	} else {
		this.OVER_SCROLL_IF_CONTENT_SCROLLS = 0;
	}
	if (__SLAG_PROPERTIES.OVER_SCROLL_NEVER) {
		throw new Error('Ti.UI.Android.OVER_SCROLL_NEVER is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OVER_SCROLL_NEVER = undefined;
	} else {
		this.OVER_SCROLL_NEVER = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_A_8) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_A_8 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_A_8 = undefined;
	} else {
		this.PIXEL_FORMAT_A_8 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_LA_88) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_LA_88 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_LA_88 = undefined;
	} else {
		this.PIXEL_FORMAT_LA_88 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_L_8) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_L_8 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_L_8 = undefined;
	} else {
		this.PIXEL_FORMAT_L_8 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_OPAQUE) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_OPAQUE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_OPAQUE = undefined;
	} else {
		this.PIXEL_FORMAT_OPAQUE = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGBA_4444) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_4444 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGBA_4444 = undefined;
	} else {
		this.PIXEL_FORMAT_RGBA_4444 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGBA_5551) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_5551 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGBA_5551 = undefined;
	} else {
		this.PIXEL_FORMAT_RGBA_5551 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGBA_8888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBA_8888 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGBA_8888 = undefined;
	} else {
		this.PIXEL_FORMAT_RGBA_8888 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGBX_8888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGBX_8888 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGBX_8888 = undefined;
	} else {
		this.PIXEL_FORMAT_RGBX_8888 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGB_332) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_332 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGB_332 = undefined;
	} else {
		this.PIXEL_FORMAT_RGB_332 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGB_565) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_565 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGB_565 = undefined;
	} else {
		this.PIXEL_FORMAT_RGB_565 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_RGB_888) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_RGB_888 is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_RGB_888 = undefined;
	} else {
		this.PIXEL_FORMAT_RGB_888 = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_TRANSLUCENT) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_TRANSLUCENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_TRANSLUCENT = undefined;
	} else {
		this.PIXEL_FORMAT_TRANSLUCENT = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_TRANSPARENT) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_TRANSPARENT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_TRANSPARENT = undefined;
	} else {
		this.PIXEL_FORMAT_TRANSPARENT = 0;
	}
	if (__SLAG_PROPERTIES.PIXEL_FORMAT_UNKNOWN) {
		throw new Error('Ti.UI.Android.PIXEL_FORMAT_UNKNOWN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PIXEL_FORMAT_UNKNOWN = undefined;
	} else {
		this.PIXEL_FORMAT_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.PROGRESS_INDICATOR_DIALOG) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_DIALOG is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROGRESS_INDICATOR_DIALOG = undefined;
	} else {
		this.PROGRESS_INDICATOR_DIALOG = 0;
	}
	if (__SLAG_PROPERTIES.PROGRESS_INDICATOR_STATUS_BAR) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_STATUS_BAR is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROGRESS_INDICATOR_STATUS_BAR = undefined;
	} else {
		this.PROGRESS_INDICATOR_STATUS_BAR = 0;
	}
	if (__SLAG_PROPERTIES.PROGRESS_INDICATOR_INDETERMINANT) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROGRESS_INDICATOR_INDETERMINANT = undefined;
	} else {
		this.PROGRESS_INDICATOR_INDETERMINANT = 0;
	}
	if (__SLAG_PROPERTIES.PROGRESS_INDICATOR_DETERMINANT) {
		throw new Error('Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROGRESS_INDICATOR_DETERMINANT = undefined;
	} else {
		this.PROGRESS_INDICATOR_DETERMINANT = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_ADJUST_PAN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_PAN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_ADJUST_PAN = undefined;
	} else {
		this.SOFT_INPUT_ADJUST_PAN = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_ADJUST_RESIZE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_ADJUST_RESIZE = undefined;
	} else {
		this.SOFT_INPUT_ADJUST_RESIZE = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_ADJUST_UNSPECIFIED) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_ADJUST_UNSPECIFIED = undefined;
	} else {
		this.SOFT_INPUT_ADJUST_UNSPECIFIED = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_STATE_ALWAYS_HIDDEN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_STATE_ALWAYS_HIDDEN = undefined;
	} else {
		this.SOFT_INPUT_STATE_ALWAYS_HIDDEN = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_STATE_ALWAYS_VISIBLE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_VISIBLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_STATE_ALWAYS_VISIBLE = undefined;
	} else {
		this.SOFT_INPUT_STATE_ALWAYS_VISIBLE = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_STATE_HIDDEN) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_STATE_HIDDEN = undefined;
	} else {
		this.SOFT_INPUT_STATE_HIDDEN = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_STATE_UNSPECIFIED) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_UNSPECIFIED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_STATE_UNSPECIFIED = undefined;
	} else {
		this.SOFT_INPUT_STATE_UNSPECIFIED = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_INPUT_STATE_VISIBLE) {
		throw new Error('Ti.UI.Android.SOFT_INPUT_STATE_VISIBLE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_INPUT_STATE_VISIBLE = undefined;
	} else {
		this.SOFT_INPUT_STATE_VISIBLE = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_KEYBOARD_DEFAULT_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_KEYBOARD_DEFAULT_ON_FOCUS = undefined;
	} else {
		this.SOFT_KEYBOARD_DEFAULT_ON_FOCUS = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_KEYBOARD_HIDE_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_KEYBOARD_HIDE_ON_FOCUS = undefined;
	} else {
		this.SOFT_KEYBOARD_HIDE_ON_FOCUS = 0;
	}
	if (__SLAG_PROPERTIES.SOFT_KEYBOARD_SHOW_ON_FOCUS) {
		throw new Error('Ti.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SOFT_KEYBOARD_SHOW_ON_FOCUS = undefined;
	} else {
		this.SOFT_KEYBOARD_SHOW_ON_FOCUS = 0;
	}
	if (__SLAG_PROPERTIES.SWITCH_STYLE_CHECKBOX) {
		throw new Error('Ti.UI.Android.SWITCH_STYLE_CHECKBOX is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SWITCH_STYLE_CHECKBOX = undefined;
	} else {
		this.SWITCH_STYLE_CHECKBOX = 0;
	}
	if (__SLAG_PROPERTIES.SWITCH_STYLE_TOGGLEBUTTON) {
		throw new Error('Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SWITCH_STYLE_TOGGLEBUTTON = undefined;
	} else {
		this.SWITCH_STYLE_TOGGLEBUTTON = 0;
	}
	if (__SLAG_PROPERTIES.SWITCH_STYLE_SWITCH) {
		throw new Error('Ti.UI.Android.SWITCH_STYLE_SWITCH is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SWITCH_STYLE_SWITCH = undefined;
	} else {
		this.SWITCH_STYLE_SWITCH = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_PLUGINS_OFF) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_OFF is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_PLUGINS_OFF = undefined;
	} else {
		this.WEBVIEW_PLUGINS_OFF = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_PLUGINS_ON) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_ON is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_PLUGINS_ON = undefined;
	} else {
		this.WEBVIEW_PLUGINS_ON = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_PLUGINS_ON_DEMAND) {
		throw new Error('Ti.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_PLUGINS_ON_DEMAND = undefined;
	} else {
		this.WEBVIEW_PLUGINS_ON_DEMAND = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_LOAD_DEFAULT) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_DEFAULT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_LOAD_DEFAULT = undefined;
	} else {
		this.WEBVIEW_LOAD_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_LOAD_NO_CACHE) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_NO_CACHE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_LOAD_NO_CACHE = undefined;
	} else {
		this.WEBVIEW_LOAD_NO_CACHE = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_LOAD_CACHE_ONLY) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_CACHE_ONLY is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_LOAD_CACHE_ONLY = undefined;
	} else {
		this.WEBVIEW_LOAD_CACHE_ONLY = 0;
	}
	if (__SLAG_PROPERTIES.WEBVIEW_LOAD_CACHE_ELSE_NETWORK) {
		throw new Error('Ti.UI.Android.WEBVIEW_LOAD_CACHE_ELSE_NETWORK is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.WEBVIEW_LOAD_CACHE_ELSE_NETWORK = undefined;
	} else {
		this.WEBVIEW_LOAD_CACHE_ELSE_NETWORK = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_EXPLODE) {
		throw new Error('Ti.UI.Android.TRANSITION_EXPLODE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_EXPLODE = undefined;
	} else {
		this.TRANSITION_EXPLODE = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_FADE_IN) {
		throw new Error('Ti.UI.Android.TRANSITION_FADE_IN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_FADE_IN = undefined;
	} else {
		this.TRANSITION_FADE_IN = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_FADE_OUT) {
		throw new Error('Ti.UI.Android.TRANSITION_FADE_OUT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_FADE_OUT = undefined;
	} else {
		this.TRANSITION_FADE_OUT = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_SLIDE_TOP) {
		throw new Error('Ti.UI.Android.TRANSITION_SLIDE_TOP is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_SLIDE_TOP = undefined;
	} else {
		this.TRANSITION_SLIDE_TOP = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_SLIDE_RIGHT) {
		throw new Error('Ti.UI.Android.TRANSITION_SLIDE_RIGHT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_SLIDE_RIGHT = undefined;
	} else {
		this.TRANSITION_SLIDE_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_SLIDE_BOTTOM) {
		throw new Error('Ti.UI.Android.TRANSITION_SLIDE_BOTTOM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_SLIDE_BOTTOM = undefined;
	} else {
		this.TRANSITION_SLIDE_BOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_SLIDE_LEFT) {
		throw new Error('Ti.UI.Android.TRANSITION_SLIDE_LEFT is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_SLIDE_LEFT = undefined;
	} else {
		this.TRANSITION_SLIDE_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_CHANGE_BOUNDS) {
		throw new Error('Ti.UI.Android.TRANSITION_CHANGE_BOUNDS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_CHANGE_BOUNDS = undefined;
	} else {
		this.TRANSITION_CHANGE_BOUNDS = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_CHANGE_CLIP_BOUNDS) {
		throw new Error('Ti.UI.Android.TRANSITION_CHANGE_CLIP_BOUNDS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_CHANGE_CLIP_BOUNDS = undefined;
	} else {
		this.TRANSITION_CHANGE_CLIP_BOUNDS = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_CHANGE_TRANSFORM) {
		throw new Error('Ti.UI.Android.TRANSITION_CHANGE_TRANSFORM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_CHANGE_TRANSFORM = undefined;
	} else {
		this.TRANSITION_CHANGE_TRANSFORM = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_CHANGE_IMAGE_TRANSFORM) {
		throw new Error('Ti.UI.Android.TRANSITION_CHANGE_IMAGE_TRANSFORM is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_CHANGE_IMAGE_TRANSFORM = undefined;
	} else {
		this.TRANSITION_CHANGE_IMAGE_TRANSFORM = 0;
	}
	if (__SLAG_PROPERTIES.TRANSITION_NONE) {
		throw new Error('Ti.UI.Android.TRANSITION_NONE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRANSITION_NONE = undefined;
	} else {
		this.TRANSITION_NONE = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Android.prototype.hideSoftKeyboard = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.openPreferences = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Android.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Android.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Android.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Android.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Android.prototype.createCardView = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var CardView = require('./Android/CardView');
	return CardView(__SLAG_PROPERTY);
};
Android.prototype.createProgressIndicator = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var ProgressIndicator = require('./Android/ProgressIndicator');
	return ProgressIndicator(__SLAG_PROPERTY);
};
Android.prototype.createSearchView = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var SearchView = require('./Android/SearchView');
	return SearchView(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Android(properties);
};