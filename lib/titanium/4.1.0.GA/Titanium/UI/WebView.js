function WebView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.WebView';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.disableBounce = properties.disableBounce || true;
	this.enableJavascriptInterface = properties.enableJavascriptInterface || true;
	this.handlePlatformUrl = properties.handlePlatformUrl || true;
	this.hideLoadIndicator = properties.hideLoadIndicator || true;
	this.ignoreSslError = properties.ignoreSslError || true;
	this.onCreateWindow = properties.onCreateWindow || {};
	this.overScrollMode = properties.overScrollMode || 0;
	this.cacheMode = properties.cacheMode || 0;
	this.pluginState = properties.pluginState || 0;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.showScrollbars = properties.showScrollbars || true;
	this.enableZoomControls = properties.enableZoomControls || true;
	this.userAgent = properties.userAgent || '';
	this.willHandleTouches = properties.willHandleTouches || true;
	this.lightTouchEnabled = properties.lightTouchEnabled || true;
	this.data = properties.data || {};
	this.html = properties.html || '';
	this.loading = properties.loading || true;
	this.scalesPageToFit = properties.scalesPageToFit || true;
	this.url = properties.url || '';
	return this;
}
WebView.prototype.addEventListener = function () {
};
WebView.prototype.removeEventListener = function () {
};
WebView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
WebView.prototype.fireEvent = function () {
};
WebView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.WebView.finishLayout was deprecated, since 3.0.0');
};
WebView.prototype.startLayout = function () {
	throw new Error('Ti.UI.WebView.startLayout was deprecated, since 3.0.0');
};
WebView.prototype.toImage = function () {
	return {};
};
WebView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.WebView.updateLayout was deprecated, since 3.0.0');
};
WebView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.animate = function () {
};
WebView.prototype.hide = function () {
};
WebView.prototype.remove = function () {
};
WebView.prototype.show = function () {
};
WebView.prototype.pause = function () {
};
WebView.prototype.repaint = function () {
};
WebView.prototype.release = function () {
};
WebView.prototype.resume = function () {
};
WebView.prototype.canGoBack = function () {
	return true;
};
WebView.prototype.canGoForward = function () {
	return true;
};
WebView.prototype.evalJS = function () {
	return '';
};
WebView.prototype.goBack = function () {
};
WebView.prototype.goForward = function () {
};
WebView.prototype.reload = function () {
};
WebView.prototype.setBasicAuthentication = function () {
};
WebView.prototype.stopLoading = function () {
};
WebView.prototype.setHtml = function () {
};
WebView.prototype.getBubbleParent = function () {
	return true;
};
WebView.prototype.setBubbleParent = function () {
};
WebView.prototype.getApiName = function () {
	return '';
};
WebView.prototype.getLifecycleContainer = function () {
	return {};
};
WebView.prototype.setLifecycleContainer = function () {
};
WebView.prototype.getAccessibilityHidden = function () {
	return true;
};
WebView.prototype.setAccessibilityHidden = function () {
};
WebView.prototype.getAccessibilityHint = function () {
	return '';
};
WebView.prototype.setAccessibilityHint = function () {
};
WebView.prototype.getAccessibilityLabel = function () {
	return '';
};
WebView.prototype.setAccessibilityLabel = function () {
};
WebView.prototype.getAccessibilityValue = function () {
	return '';
};
WebView.prototype.setAccessibilityValue = function () {
};
WebView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.setAnchorPoint = function () {
};
WebView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
WebView.prototype.setBackgroundDisabledColor = function () {
};
WebView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
WebView.prototype.setBackgroundDisabledImage = function () {
};
WebView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
WebView.prototype.setBackgroundFocusedColor = function () {
};
WebView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
WebView.prototype.setBackgroundFocusedImage = function () {
};
WebView.prototype.getBackgroundGradient = function () {
	return {};
};
WebView.prototype.setBackgroundGradient = function () {
};
WebView.prototype.getBackgroundImage = function () {
	return '';
};
WebView.prototype.setBackgroundImage = function () {
};
WebView.prototype.getBackgroundRepeat = function () {
	return true;
};
WebView.prototype.setBackgroundRepeat = function () {
};
WebView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
WebView.prototype.setBackgroundLeftCap = function () {
};
WebView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
WebView.prototype.setBackgroundSelectedColor = function () {
};
WebView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
WebView.prototype.setBackgroundSelectedImage = function () {
};
WebView.prototype.getBackgroundTopCap = function () {
	return 0;
};
WebView.prototype.setBackgroundTopCap = function () {
};
WebView.prototype.getClipMode = function () {
	return 0;
};
WebView.prototype.setClipMode = function () {
};
WebView.prototype.getFocusable = function () {
	return true;
};
WebView.prototype.setFocusable = function () {
};
WebView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
WebView.prototype.setOverrideCurrentAnimation = function () {
};
WebView.prototype.getPullBackgroundColor = function () {
	return '';
};
WebView.prototype.setPullBackgroundColor = function () {
};
WebView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
WebView.prototype.setSoftKeyboardOnFocus = function () {
};
WebView.prototype.getTransform = function () {
	return {};
};
WebView.prototype.setTransform = function () {
};
WebView.prototype.getViewShadowRadius = function () {
	return 0;
};
WebView.prototype.setViewShadowRadius = function () {
};
WebView.prototype.getViewShadowColor = function () {
	return '';
};
WebView.prototype.setViewShadowColor = function () {
};
WebView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.setViewShadowOffset = function () {
};
WebView.prototype.getHorizontalWrap = function () {
	return true;
};
WebView.prototype.setHorizontalWrap = function () {
};
WebView.prototype.getZIndex = function () {
	return 0;
};
WebView.prototype.setZIndex = function () {
};
WebView.prototype.getKeepScreenOn = function () {
	return true;
};
WebView.prototype.setKeepScreenOn = function () {
};
WebView.prototype.getBackgroundColor = function () {
	return '';
};
WebView.prototype.setBackgroundColor = function () {
};
WebView.prototype.getBorderColor = function () {
	return '';
};
WebView.prototype.setBorderColor = function () {
};
WebView.prototype.getBorderRadius = function () {
	return 0;
};
WebView.prototype.setBorderRadius = function () {
};
WebView.prototype.getBorderWidth = function () {
	return 0;
};
WebView.prototype.setBorderWidth = function () {
};
WebView.prototype.getBottom = function () {
	return '';
};
WebView.prototype.setBottom = function () {
};
WebView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.setCenter = function () {
};
WebView.prototype.getChildren = function () {
	return [];
};
WebView.prototype.getHeight = function () {
	return '';
};
WebView.prototype.setHeight = function () {
};
WebView.prototype.getLayout = function () {
	return '';
};
WebView.prototype.setLayout = function () {
};
WebView.prototype.getLeft = function () {
	return '';
};
WebView.prototype.setLeft = function () {
};
WebView.prototype.getOpacity = function () {
	return 0;
};
WebView.prototype.setOpacity = function () {
};
WebView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
WebView.prototype.getRight = function () {
	return '';
};
WebView.prototype.setRight = function () {
};
WebView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
WebView.prototype.getTintColor = function () {
	return '';
};
WebView.prototype.setTintColor = function () {
};
WebView.prototype.getTop = function () {
	return '';
};
WebView.prototype.setTop = function () {
};
WebView.prototype.getTouchEnabled = function () {
	return true;
};
WebView.prototype.setTouchEnabled = function () {
};
WebView.prototype.getVisible = function () {
	return true;
};
WebView.prototype.setVisible = function () {
};
WebView.prototype.getWidth = function () {
	return '';
};
WebView.prototype.setWidth = function () {
};
WebView.prototype.getDisableBounce = function () {
	return true;
};
WebView.prototype.setDisableBounce = function () {
};
WebView.prototype.getEnableJavascriptInterface = function () {
	return true;
};
WebView.prototype.setEnableJavascriptInterface = function () {
};
WebView.prototype.getHandlePlatformUrl = function () {
	return true;
};
WebView.prototype.setHandlePlatformUrl = function () {
};
WebView.prototype.getHideLoadIndicator = function () {
	return true;
};
WebView.prototype.setHideLoadIndicator = function () {
};
WebView.prototype.getIgnoreSslError = function () {
	return true;
};
WebView.prototype.setIgnoreSslError = function () {
};
WebView.prototype.getOnCreateWindow = function () {
	return {};
};
WebView.prototype.setOnCreateWindow = function () {
};
WebView.prototype.getOverScrollMode = function () {
	return 0;
};
WebView.prototype.setOverScrollMode = function () {
};
WebView.prototype.getCacheMode = function () {
	return 0;
};
WebView.prototype.setCacheMode = function () {
};
WebView.prototype.getPluginState = function () {
	return 0;
};
WebView.prototype.setPluginState = function () {
};
WebView.prototype.getScrollsToTop = function () {
	return true;
};
WebView.prototype.setScrollsToTop = function () {
};
WebView.prototype.getShowScrollbars = function () {
	return true;
};
WebView.prototype.setShowScrollbars = function () {
};
WebView.prototype.getEnableZoomControls = function () {
	return true;
};
WebView.prototype.setEnableZoomControls = function () {
};
WebView.prototype.getUserAgent = function () {
	return '';
};
WebView.prototype.setUserAgent = function () {
};
WebView.prototype.getWillHandleTouches = function () {
	return true;
};
WebView.prototype.setWillHandleTouches = function () {
};
WebView.prototype.getLightTouchEnabled = function () {
	return true;
};
WebView.prototype.setLightTouchEnabled = function () {
};
WebView.prototype.getData = function () {
	return {};
};
WebView.prototype.setData = function () {
};
WebView.prototype.getHtml = function () {
	return '';
};
WebView.prototype.setHtml = function () {
};
WebView.prototype.getLoading = function () {
	return true;
};
WebView.prototype.setLoading = function () {
};
WebView.prototype.getScalesPageToFit = function () {
	return true;
};
WebView.prototype.setScalesPageToFit = function () {
};
WebView.prototype.getUrl = function () {
	return '';
};
WebView.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new WebView(properties);
};