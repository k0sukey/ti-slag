function WebView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.WebView';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.cacheMode = properties.cacheMode || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.data = properties.data || undefined;
	this.disableBounce = properties.disableBounce || undefined;
	this.enableZoomControls = properties.enableZoomControls || undefined;
	this.focusable = properties.focusable || undefined;
	this.handlePlatformUrl = properties.handlePlatformUrl || undefined;
	this.height = properties.height || undefined;
	this.hideLoadIndicator = properties.hideLoadIndicator || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.html = properties.html || undefined;
	this.ignoreSslError = properties.ignoreSslError || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lightTouchEnabled = properties.lightTouchEnabled || undefined;
	this.loading = properties.loading || undefined;
	this.onCreateWindow = properties.onCreateWindow || undefined;
	this.opacity = properties.opacity || undefined;
	this.overScrollMode = properties.overScrollMode || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pluginState = properties.pluginState || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.scalesPageToFit = properties.scalesPageToFit || undefined;
	this.scrollsToTop = properties.scrollsToTop || undefined;
	this.showScrollbars = properties.showScrollbars || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.url = properties.url || undefined;
	this.userAgent = properties.userAgent || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.willHandleTouches = properties.willHandleTouches || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

WebView.prototype.addEventListener = function(){};

WebView.prototype.animate = function(){};

WebView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

WebView.prototype.canGoBack = function(){ return true; };

WebView.prototype.canGoForward = function(){ return true; };

WebView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

WebView.prototype.evalJS = function(){ return ''; };

WebView.prototype.finishLayout = function(){};

WebView.prototype.fireEvent = function(){};

WebView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

WebView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

WebView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

WebView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

WebView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

WebView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

WebView.prototype.getApiName = function(){ return this.apiName; };

WebView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

WebView.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

WebView.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

WebView.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

WebView.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

WebView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

WebView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

WebView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

WebView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

WebView.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

WebView.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

WebView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

WebView.prototype.getBorderColor = function(){ return this.borderColor; };

WebView.prototype.getBorderRadius = function(){ return this.borderRadius; };

WebView.prototype.getBorderWidth = function(){ return this.borderWidth; };

WebView.prototype.getBottom = function(){ return this.bottom; };

WebView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

WebView.prototype.getCacheMode = function(){ return this.cacheMode; };

WebView.prototype.getCenter = function(){ return this.center; };

WebView.prototype.getChildren = function(){ return this.children; };

WebView.prototype.getClipMode = function(){ return this.clipMode; };

WebView.prototype.getData = function(){ return this.data; };

WebView.prototype.getDisableBounce = function(){ return this.disableBounce; };

WebView.prototype.getEnableZoomControls = function(){ return this.enableZoomControls; };

WebView.prototype.getFocusable = function(){ return this.focusable; };

WebView.prototype.getHandlePlatformUrl = function(){ return this.handlePlatformUrl; };

WebView.prototype.getHeight = function(){ return this.height; };

WebView.prototype.getHideLoadIndicator = function(){ return this.hideLoadIndicator; };

WebView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

WebView.prototype.getHtml = function(){ return this.html; };

WebView.prototype.getIgnoreSslError = function(){ return this.ignoreSslError; };

WebView.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

WebView.prototype.getLayout = function(){ return this.layout; };

WebView.prototype.getLeft = function(){ return this.left; };

WebView.prototype.getLightTouchEnabled = function(){ return this.lightTouchEnabled; };

WebView.prototype.getLoading = function(){ return this.loading; };

WebView.prototype.getOpacity = function(){ return this.opacity; };

WebView.prototype.getOverScrollMode = function(){ return this.overScrollMode; };

WebView.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

WebView.prototype.getPluginState = function(){ return this.pluginState; };

WebView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

WebView.prototype.getRect = function(){ return this.rect; };

WebView.prototype.getRight = function(){ return this.right; };

WebView.prototype.getScalesPageToFit = function(){ return this.scalesPageToFit; };

WebView.prototype.getScrollsToTop = function(){ return this.scrollsToTop; };

WebView.prototype.getShowScrollbars = function(){ return this.showScrollbars; };

WebView.prototype.getSize = function(){ return this.size; };

WebView.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

WebView.prototype.getTintColor = function(){ return this.tintColor; };

WebView.prototype.getTop = function(){ return this.top; };

WebView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

WebView.prototype.getTransform = function(){ return this.transform; };

WebView.prototype.getUrl = function(){ return this.url; };

WebView.prototype.getUserAgent = function(){ return this.userAgent; };

WebView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

WebView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

WebView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

WebView.prototype.getVisible = function(){ return this.visible; };

WebView.prototype.getWidth = function(){ return this.width; };

WebView.prototype.getWillHandleTouches = function(){ return this.willHandleTouches; };

WebView.prototype.getZIndex = function(){ return this.zIndex; };

WebView.prototype.goBack = function(){};

WebView.prototype.goForward = function(){};

WebView.prototype.hide = function(){};

WebView.prototype.pause = function(){};

WebView.prototype.release = function(){};

WebView.prototype.reload = function(){};

WebView.prototype.remove = function(){};

WebView.prototype.removeEventListener = function(){};

WebView.prototype.repaint = function(){};

WebView.prototype.resume = function(){};

WebView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

WebView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

WebView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

WebView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

WebView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

WebView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

WebView.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

WebView.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

WebView.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

WebView.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

WebView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

WebView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

WebView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

WebView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

WebView.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

WebView.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

WebView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

WebView.prototype.setBasicAuthentication = function(){};

WebView.prototype.setBorderColor = function(property){ this.borderColor = property; };

WebView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

WebView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

WebView.prototype.setBottom = function(property){ this.bottom = property; };

WebView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

WebView.prototype.setCacheMode = function(property){ this.cacheMode = property; };

WebView.prototype.setCenter = function(property){ this.center = property; };

WebView.prototype.setClipMode = function(property){ this.clipMode = property; };

WebView.prototype.setData = function(property){ this.data = property; };

WebView.prototype.setDisableBounce = function(property){ this.disableBounce = property; };

WebView.prototype.setEnableZoomControls = function(property){ this.enableZoomControls = property; };

WebView.prototype.setFocusable = function(property){ this.focusable = property; };

WebView.prototype.setHandlePlatformUrl = function(property){ this.handlePlatformUrl = property; };

WebView.prototype.setHeight = function(property){ this.height = property; };

WebView.prototype.setHideLoadIndicator = function(property){ this.hideLoadIndicator = property; };

WebView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

WebView.prototype.setHtml = function(property){ this.html = property; };

WebView.prototype.setIgnoreSslError = function(property){ this.ignoreSslError = property; };

WebView.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

WebView.prototype.setLayout = function(property){ this.layout = property; };

WebView.prototype.setLeft = function(property){ this.left = property; };

WebView.prototype.setLightTouchEnabled = function(property){ this.lightTouchEnabled = property; };

WebView.prototype.setLoading = function(property){ this.loading = property; };

WebView.prototype.setOnCreateWindow = function(property){ this.onCreateWindow = property; };

WebView.prototype.setOpacity = function(property){ this.opacity = property; };

WebView.prototype.setOverScrollMode = function(property){ this.overScrollMode = property; };

WebView.prototype.setPluginState = function(property){ this.pluginState = property; };

WebView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

WebView.prototype.setRight = function(property){ this.right = property; };

WebView.prototype.setScalesPageToFit = function(property){ this.scalesPageToFit = property; };

WebView.prototype.setScrollsToTop = function(property){ this.scrollsToTop = property; };

WebView.prototype.setShowScrollbars = function(property){ this.showScrollbars = property; };

WebView.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

WebView.prototype.setTintColor = function(property){ this.tintColor = property; };

WebView.prototype.setTop = function(property){ this.top = property; };

WebView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

WebView.prototype.setTransform = function(property){ this.transform = property; };

WebView.prototype.setUrl = function(property){ this.url = property; };

WebView.prototype.setUserAgent = function(property){ this.userAgent = property; };

WebView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

WebView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

WebView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

WebView.prototype.setVisible = function(property){ this.visible = property; };

WebView.prototype.setWidth = function(property){ this.width = property; };

WebView.prototype.setWillHandleTouches = function(property){ this.willHandleTouches = property; };

WebView.prototype.setZIndex = function(property){ this.zIndex = property; };

WebView.prototype.show = function(){};

WebView.prototype.startLayout = function(){};

WebView.prototype.stopLoading = function(){};

WebView.prototype.toImage = function(){ return {}; };

WebView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new WebView(properties); };