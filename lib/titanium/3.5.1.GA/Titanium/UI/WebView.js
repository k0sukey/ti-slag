var crypto = require('crypto');
function WebView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'cacheMode',
			'center',
			'children',
			'clipMode',
			'data',
			'disableBounce',
			'enableZoomControls',
			'focusable',
			'handlePlatformUrl',
			'height',
			'hideLoadIndicator',
			'horizontalWrap',
			'html',
			'ignoreSslError',
			'keepScreenOn',
			'layout',
			'left',
			'lightTouchEnabled',
			'loading',
			'onCreateWindow',
			'opacity',
			'overScrollMode',
			'overrideCurrentAnimation',
			'pluginState',
			'pullBackgroundColor',
			'rect',
			'right',
			'scalesPageToFit',
			'scrollsToTop',
			'showScrollbars',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'url',
			'userAgent',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'willHandleTouches',
			'zIndex',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.WebView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.WebView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.WebView';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.cacheMode = __SLAG__properties.cacheMode || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.WebView.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.data = __SLAG__properties.data || {};
	this.disableBounce = __SLAG__properties.disableBounce || true;
	this.enableZoomControls = __SLAG__properties.enableZoomControls || true;
	this.focusable = __SLAG__properties.focusable || true;
	this.handlePlatformUrl = __SLAG__properties.handlePlatformUrl || true;
	this.height = __SLAG__properties.height || 0;
	this.hideLoadIndicator = __SLAG__properties.hideLoadIndicator || true;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.html = __SLAG__properties.html || '';
	this.ignoreSslError = __SLAG__properties.ignoreSslError || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lightTouchEnabled = __SLAG__properties.lightTouchEnabled || true;
	this.loading = __SLAG__properties.loading || true;
	this.onCreateWindow = __SLAG__properties.onCreateWindow || {};
	this.opacity = __SLAG__properties.opacity || 0;
	this.overScrollMode = __SLAG__properties.overScrollMode || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pluginState = __SLAG__properties.pluginState || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.WebView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.scalesPageToFit = __SLAG__properties.scalesPageToFit || true;
	this.scrollsToTop = __SLAG__properties.scrollsToTop || true;
	this.showScrollbars = __SLAG__properties.showScrollbars || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.WebView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.url = __SLAG__properties.url || '';
	this.userAgent = __SLAG__properties.userAgent || '';
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.willHandleTouches = __SLAG__properties.willHandleTouches || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
WebView.prototype.addEventListener = function () {
};
WebView.prototype.animate = function () {
};
WebView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
WebView.prototype.canGoBack = function () {
	return true;
};
WebView.prototype.canGoForward = function () {
	return true;
};
WebView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.evalJS = function () {
	return '';
};
WebView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.WebView.finishLayout was deprecated, since 3.0.0');
};
WebView.prototype.fireEvent = function () {
};
WebView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
WebView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
WebView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
WebView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
WebView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
WebView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
WebView.prototype.getApiName = function () {
	return this.apiName;
};
WebView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
WebView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
WebView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
WebView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
WebView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
WebView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
WebView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
WebView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
WebView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
WebView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
WebView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
WebView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
WebView.prototype.getBorderColor = function () {
	return this.borderColor;
};
WebView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
WebView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
WebView.prototype.getBottom = function () {
	return this.bottom;
};
WebView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
WebView.prototype.getCacheMode = function () {
	return this.cacheMode;
};
WebView.prototype.getCenter = function () {
	return this.center;
};
WebView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
WebView.prototype.getChildren = function () {
	return this.children;
};
WebView.prototype.getClipMode = function () {
	return this.clipMode;
};
WebView.prototype.getData = function () {
	return this.data;
};
WebView.prototype.getDisableBounce = function () {
	return this.disableBounce;
};
WebView.prototype.getEnableZoomControls = function () {
	return this.enableZoomControls;
};
WebView.prototype.getFocusable = function () {
	return this.focusable;
};
WebView.prototype.getHandlePlatformUrl = function () {
	return this.handlePlatformUrl;
};
WebView.prototype.getHeight = function () {
	return this.height;
};
WebView.prototype.getHideLoadIndicator = function () {
	return this.hideLoadIndicator;
};
WebView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
WebView.prototype.getHtml = function () {
	return this.html;
};
WebView.prototype.getIgnoreSslError = function () {
	return this.ignoreSslError;
};
WebView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
WebView.prototype.getLayout = function () {
	return this.layout;
};
WebView.prototype.getLeft = function () {
	return this.left;
};
WebView.prototype.getLightTouchEnabled = function () {
	return this.lightTouchEnabled;
};
WebView.prototype.getLoading = function () {
	return this.loading;
};
WebView.prototype.getOnCreateWindow = function () {
	return this.onCreateWindow;
};
WebView.prototype.getOpacity = function () {
	return this.opacity;
};
WebView.prototype.getOverScrollMode = function () {
	return this.overScrollMode;
};
WebView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
WebView.prototype.getPluginState = function () {
	return this.pluginState;
};
WebView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
WebView.prototype.getRect = function () {
	return this.rect;
};
WebView.prototype.getRight = function () {
	return this.right;
};
WebView.prototype.getScalesPageToFit = function () {
	return this.scalesPageToFit;
};
WebView.prototype.getScrollsToTop = function () {
	return this.scrollsToTop;
};
WebView.prototype.getShowScrollbars = function () {
	return this.showScrollbars;
};
WebView.prototype.getSize = function () {
	return this.size;
};
WebView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
WebView.prototype.getTintColor = function () {
	return this.tintColor;
};
WebView.prototype.getTop = function () {
	return this.top;
};
WebView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
WebView.prototype.getTransform = function () {
	return this.transform;
};
WebView.prototype.getUrl = function () {
	return this.url;
};
WebView.prototype.getUserAgent = function () {
	return this.userAgent;
};
WebView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
WebView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
WebView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
WebView.prototype.getVisible = function () {
	return this.visible;
};
WebView.prototype.getWidth = function () {
	return this.width;
};
WebView.prototype.getWillHandleTouches = function () {
	return this.willHandleTouches;
};
WebView.prototype.getZIndex = function () {
	return this.zIndex;
};
WebView.prototype.goBack = function () {
};
WebView.prototype.goForward = function () {
};
WebView.prototype.hide = function () {
};
WebView.prototype.pause = function () {
};
WebView.prototype.release = function () {
};
WebView.prototype.reload = function () {
};
WebView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
WebView.prototype.removeEventListener = function () {
};
WebView.prototype.repaint = function () {
};
WebView.prototype.resume = function () {
};
WebView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
WebView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
WebView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
WebView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
WebView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
WebView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
WebView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
WebView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
WebView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
WebView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
WebView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
WebView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
WebView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
WebView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
WebView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
WebView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
WebView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
WebView.prototype.setBasicAuthentication = function () {
};
WebView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
WebView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
WebView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
WebView.prototype.setBottom = function (property) {
	this.bottom = property;
};
WebView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
WebView.prototype.setCacheMode = function (property) {
	this.cacheMode = property;
};
WebView.prototype.setCenter = function (property) {
	this.center = property;
};
WebView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
WebView.prototype.setData = function (property) {
	this.data = property;
};
WebView.prototype.setDisableBounce = function (property) {
	this.disableBounce = property;
};
WebView.prototype.setEnableZoomControls = function (property) {
	this.enableZoomControls = property;
};
WebView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
WebView.prototype.setHandlePlatformUrl = function (property) {
	this.handlePlatformUrl = property;
};
WebView.prototype.setHeight = function (property) {
	this.height = property;
};
WebView.prototype.setHideLoadIndicator = function (property) {
	this.hideLoadIndicator = property;
};
WebView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
WebView.prototype.setHtml = function (property) {
	this.html = property;
};
WebView.prototype.setIgnoreSslError = function (property) {
	this.ignoreSslError = property;
};
WebView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
WebView.prototype.setLayout = function (property) {
	this.layout = property;
};
WebView.prototype.setLeft = function (property) {
	this.left = property;
};
WebView.prototype.setLightTouchEnabled = function (property) {
	this.lightTouchEnabled = property;
};
WebView.prototype.setLoading = function (property) {
	this.loading = property;
};
WebView.prototype.setOnCreateWindow = function (property) {
	this.onCreateWindow = property;
};
WebView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
WebView.prototype.setOverScrollMode = function (property) {
	this.overScrollMode = property;
};
WebView.prototype.setPluginState = function (property) {
	this.pluginState = property;
};
WebView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
WebView.prototype.setRight = function (property) {
	this.right = property;
};
WebView.prototype.setScalesPageToFit = function (property) {
	this.scalesPageToFit = property;
};
WebView.prototype.setScrollsToTop = function (property) {
	this.scrollsToTop = property;
};
WebView.prototype.setShowScrollbars = function (property) {
	this.showScrollbars = property;
};
WebView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
WebView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
WebView.prototype.setTop = function (property) {
	this.top = property;
};
WebView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
WebView.prototype.setTransform = function (property) {
	this.transform = property;
};
WebView.prototype.setUrl = function (property) {
	this.url = property;
};
WebView.prototype.setUserAgent = function (property) {
	this.userAgent = property;
};
WebView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
WebView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
WebView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
WebView.prototype.setVisible = function (property) {
	this.visible = property;
};
WebView.prototype.setWidth = function (property) {
	this.width = property;
};
WebView.prototype.setWillHandleTouches = function (property) {
	this.willHandleTouches = property;
};
WebView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
WebView.prototype.show = function () {
};
WebView.prototype.startLayout = function () {
	throw new Error('Ti.UI.WebView.startLayout was deprecated, since 3.0.0');
};
WebView.prototype.stopLoading = function () {
};
WebView.prototype.toImage = function () {
	return {};
};
WebView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.WebView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new WebView(properties);
};