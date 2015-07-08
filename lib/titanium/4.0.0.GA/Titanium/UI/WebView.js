function WebView(properties) {
	properties = properties || {};
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
	this.apiName = 'Ti.UI.WebView';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.cacheMode = properties.cacheMode || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.data = properties.data || {};
	this.disableBounce = properties.disableBounce || true;
	this.enableJavascriptInterface = properties.enableJavascriptInterface || true;
	this.enableZoomControls = properties.enableZoomControls || true;
	this.focusable = properties.focusable || true;
	this.handlePlatformUrl = properties.handlePlatformUrl || true;
	this.height = properties.height || 0;
	this.hideLoadIndicator = properties.hideLoadIndicator || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.html = properties.html || '';
	this.ignoreSslError = properties.ignoreSslError || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.lightTouchEnabled = properties.lightTouchEnabled || true;
	this.loading = properties.loading || true;
	this.onCreateWindow = properties.onCreateWindow || {};
	this.opacity = properties.opacity || 0;
	this.overScrollMode = properties.overScrollMode || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pluginState = properties.pluginState || 0;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.scalesPageToFit = properties.scalesPageToFit || true;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.showScrollbars = properties.showScrollbars || true;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.url = properties.url || '';
	this.userAgent = properties.userAgent || '';
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.willHandleTouches = properties.willHandleTouches || true;
	this.zIndex = properties.zIndex || 0;
	return this;
}
WebView.prototype.addEventListener = function () {
};
WebView.prototype.animate = function () {
};
WebView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
WebView.prototype.getAccessibilityHint = function () {
	return '';
};
WebView.prototype.getAccessibilityLabel = function () {
	return '';
};
WebView.prototype.getAccessibilityValue = function () {
	return '';
};
WebView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.getApiName = function () {
	return '';
};
WebView.prototype.getBackgroundColor = function () {
	return '';
};
WebView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
WebView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
WebView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
WebView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
WebView.prototype.getBackgroundGradient = function () {
	return {};
};
WebView.prototype.getBackgroundImage = function () {
	return '';
};
WebView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
WebView.prototype.getBackgroundRepeat = function () {
	return true;
};
WebView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
WebView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
WebView.prototype.getBackgroundTopCap = function () {
	return 0;
};
WebView.prototype.getBorderColor = function () {
	return '';
};
WebView.prototype.getBorderRadius = function () {
	return 0;
};
WebView.prototype.getBorderWidth = function () {
	return 0;
};
WebView.prototype.getBottom = function () {
	return 0;
};
WebView.prototype.getBubbleParent = function () {
	return true;
};
WebView.prototype.getCacheMode = function () {
	return 0;
};
WebView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.getChildren = function () {
	return [];
};
WebView.prototype.getClipMode = function () {
	return 0;
};
WebView.prototype.getData = function () {
	return {};
};
WebView.prototype.getDisableBounce = function () {
	return true;
};
WebView.prototype.getEnableJavascriptInterface = function () {
	return true;
};
WebView.prototype.getEnableZoomControls = function () {
	return true;
};
WebView.prototype.getFocusable = function () {
	return true;
};
WebView.prototype.getHandlePlatformUrl = function () {
	return true;
};
WebView.prototype.getHeight = function () {
	return 0;
};
WebView.prototype.getHideLoadIndicator = function () {
	return true;
};
WebView.prototype.getHorizontalWrap = function () {
	return true;
};
WebView.prototype.getHtml = function () {
	return '';
};
WebView.prototype.getIgnoreSslError = function () {
	return true;
};
WebView.prototype.getKeepScreenOn = function () {
	return true;
};
WebView.prototype.getLayout = function () {
	return '';
};
WebView.prototype.getLeft = function () {
	return 0;
};
WebView.prototype.getLifecycleContainer = function () {
	return {};
};
WebView.prototype.getLightTouchEnabled = function () {
	return true;
};
WebView.prototype.getLoading = function () {
	return true;
};
WebView.prototype.getOnCreateWindow = function () {
	return {};
};
WebView.prototype.getOpacity = function () {
	return 0;
};
WebView.prototype.getOverScrollMode = function () {
	return 0;
};
WebView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
WebView.prototype.getPluginState = function () {
	return 0;
};
WebView.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
};
WebView.prototype.getScalesPageToFit = function () {
	return true;
};
WebView.prototype.getScrollsToTop = function () {
	return true;
};
WebView.prototype.getShowScrollbars = function () {
	return true;
};
WebView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
WebView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
WebView.prototype.getTintColor = function () {
	return '';
};
WebView.prototype.getTop = function () {
	return 0;
};
WebView.prototype.getTouchEnabled = function () {
	return true;
};
WebView.prototype.getTransform = function () {
	return {};
};
WebView.prototype.getUrl = function () {
	return '';
};
WebView.prototype.getUserAgent = function () {
	return '';
};
WebView.prototype.getViewShadowColor = function () {
	return '';
};
WebView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
WebView.prototype.getViewShadowRadius = function () {
	return 0;
};
WebView.prototype.getVisible = function () {
	return true;
};
WebView.prototype.getWidth = function () {
	return 0;
};
WebView.prototype.getWillHandleTouches = function () {
	return true;
};
WebView.prototype.getZIndex = function () {
	return 0;
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
WebView.prototype.remove = function () {
};
WebView.prototype.removeEventListener = function () {
};
WebView.prototype.repaint = function () {
};
WebView.prototype.resume = function () {
};
WebView.prototype.setAccessibilityHidden = function () {
};
WebView.prototype.setAccessibilityHint = function () {
};
WebView.prototype.setAccessibilityLabel = function () {
};
WebView.prototype.setAccessibilityValue = function () {
};
WebView.prototype.setAnchorPoint = function () {
};
WebView.prototype.setBackgroundColor = function () {
};
WebView.prototype.setBackgroundDisabledColor = function () {
};
WebView.prototype.setBackgroundDisabledImage = function () {
};
WebView.prototype.setBackgroundFocusedColor = function () {
};
WebView.prototype.setBackgroundFocusedImage = function () {
};
WebView.prototype.setBackgroundGradient = function () {
};
WebView.prototype.setBackgroundImage = function () {
};
WebView.prototype.setBackgroundLeftCap = function () {
};
WebView.prototype.setBackgroundRepeat = function () {
};
WebView.prototype.setBackgroundSelectedColor = function () {
};
WebView.prototype.setBackgroundSelectedImage = function () {
};
WebView.prototype.setBackgroundTopCap = function () {
};
WebView.prototype.setBasicAuthentication = function () {
};
WebView.prototype.setBorderColor = function () {
};
WebView.prototype.setBorderRadius = function () {
};
WebView.prototype.setBorderWidth = function () {
};
WebView.prototype.setBottom = function () {
};
WebView.prototype.setBubbleParent = function () {
};
WebView.prototype.setCacheMode = function () {
};
WebView.prototype.setCenter = function () {
};
WebView.prototype.setClipMode = function () {
};
WebView.prototype.setData = function () {
};
WebView.prototype.setDisableBounce = function () {
};
WebView.prototype.setEnableZoomControls = function () {
};
WebView.prototype.setFocusable = function () {
};
WebView.prototype.setHandlePlatformUrl = function () {
};
WebView.prototype.setHeight = function () {
};
WebView.prototype.setHideLoadIndicator = function () {
};
WebView.prototype.setHorizontalWrap = function () {
};
WebView.prototype.setHtml = function () {
};
WebView.prototype.setIgnoreSslError = function () {
};
WebView.prototype.setKeepScreenOn = function () {
};
WebView.prototype.setLayout = function () {
};
WebView.prototype.setLeft = function () {
};
WebView.prototype.setLifecycleContainer = function () {
};
WebView.prototype.setLightTouchEnabled = function () {
};
WebView.prototype.setLoading = function () {
};
WebView.prototype.setOnCreateWindow = function () {
};
WebView.prototype.setOpacity = function () {
};
WebView.prototype.setOverScrollMode = function () {
};
WebView.prototype.setPluginState = function () {
};
WebView.prototype.setPullBackgroundColor = function () {
};
WebView.prototype.setRight = function () {
};
WebView.prototype.setScalesPageToFit = function () {
};
WebView.prototype.setScrollsToTop = function () {
};
WebView.prototype.setShowScrollbars = function () {
};
WebView.prototype.setSoftKeyboardOnFocus = function () {
};
WebView.prototype.setTintColor = function () {
};
WebView.prototype.setTop = function () {
};
WebView.prototype.setTouchEnabled = function () {
};
WebView.prototype.setTransform = function () {
};
WebView.prototype.setUrl = function () {
};
WebView.prototype.setUserAgent = function () {
};
WebView.prototype.setViewShadowColor = function () {
};
WebView.prototype.setViewShadowOffset = function () {
};
WebView.prototype.setViewShadowRadius = function () {
};
WebView.prototype.setVisible = function () {
};
WebView.prototype.setWidth = function () {
};
WebView.prototype.setWillHandleTouches = function () {
};
WebView.prototype.setZIndex = function () {
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