function ScrollableView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.ScrollableView';
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
	this.cacheSize = properties.cacheSize || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.clipViews = properties.clipViews || undefined;
	this.currentPage = properties.currentPage || undefined;
	this.disableBounce = properties.disableBounce || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hitRect = properties.hitRect || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overScrollMode = properties.overScrollMode || undefined;
	this.overlayEnabled = properties.overlayEnabled || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pagingControlAlpha = properties.pagingControlAlpha || undefined;
	this.pagingControlColor = properties.pagingControlColor || undefined;
	this.pagingControlHeight = properties.pagingControlHeight || undefined;
	this.pagingControlOnTop = properties.pagingControlOnTop || undefined;
	this.pagingControlTimeout = properties.pagingControlTimeout || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.scrollingEnabled = properties.scrollingEnabled || undefined;
	this.showPagingControl = properties.showPagingControl || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.views = properties.views || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

ScrollableView.prototype.add = function(){};

ScrollableView.prototype.addEventListener = function(){};

ScrollableView.prototype.addView = function(){};

ScrollableView.prototype.animate = function(){};

ScrollableView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ScrollableView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

ScrollableView.prototype.finishLayout = function(){};

ScrollableView.prototype.fireEvent = function(){};

ScrollableView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

ScrollableView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

ScrollableView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

ScrollableView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

ScrollableView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

ScrollableView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

ScrollableView.prototype.getApiName = function(){ return this.apiName; };

ScrollableView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

ScrollableView.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

ScrollableView.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

ScrollableView.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

ScrollableView.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

ScrollableView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

ScrollableView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

ScrollableView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

ScrollableView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

ScrollableView.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

ScrollableView.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

ScrollableView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

ScrollableView.prototype.getBorderColor = function(){ return this.borderColor; };

ScrollableView.prototype.getBorderRadius = function(){ return this.borderRadius; };

ScrollableView.prototype.getBorderWidth = function(){ return this.borderWidth; };

ScrollableView.prototype.getBottom = function(){ return this.bottom; };

ScrollableView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ScrollableView.prototype.getCacheSize = function(){ return this.cacheSize; };

ScrollableView.prototype.getCenter = function(){ return this.center; };

ScrollableView.prototype.getChildren = function(){ return this.children; };

ScrollableView.prototype.getClipMode = function(){ return this.clipMode; };

ScrollableView.prototype.getClipViews = function(){ return this.clipViews; };

ScrollableView.prototype.getCurrentPage = function(){ return this.currentPage; };

ScrollableView.prototype.getDisableBounce = function(){ return this.disableBounce; };

ScrollableView.prototype.getFocusable = function(){ return this.focusable; };

ScrollableView.prototype.getHeight = function(){ return this.height; };

ScrollableView.prototype.getHitRect = function(){ return this.hitRect; };

ScrollableView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

ScrollableView.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

ScrollableView.prototype.getLayout = function(){ return this.layout; };

ScrollableView.prototype.getLeft = function(){ return this.left; };

ScrollableView.prototype.getOpacity = function(){ return this.opacity; };

ScrollableView.prototype.getOverScrollMode = function(){ return this.overScrollMode; };

ScrollableView.prototype.getOverlayEnabled = function(){ return this.overlayEnabled; };

ScrollableView.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

ScrollableView.prototype.getPagingControlAlpha = function(){ return this.pagingControlAlpha; };

ScrollableView.prototype.getPagingControlColor = function(){ return this.pagingControlColor; };

ScrollableView.prototype.getPagingControlHeight = function(){ return this.pagingControlHeight; };

ScrollableView.prototype.getPagingControlOnTop = function(){ return this.pagingControlOnTop; };

ScrollableView.prototype.getPagingControlTimeout = function(){ return this.pagingControlTimeout; };

ScrollableView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

ScrollableView.prototype.getRect = function(){ return this.rect; };

ScrollableView.prototype.getRight = function(){ return this.right; };

ScrollableView.prototype.getScrollingEnabled = function(){ return this.scrollingEnabled; };

ScrollableView.prototype.getShowPagingControl = function(){ return this.showPagingControl; };

ScrollableView.prototype.getSize = function(){ return this.size; };

ScrollableView.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

ScrollableView.prototype.getTintColor = function(){ return this.tintColor; };

ScrollableView.prototype.getTop = function(){ return this.top; };

ScrollableView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

ScrollableView.prototype.getTransform = function(){ return this.transform; };

ScrollableView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

ScrollableView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

ScrollableView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

ScrollableView.prototype.getViews = function(){ return this.views; };

ScrollableView.prototype.getVisible = function(){ return this.visible; };

ScrollableView.prototype.getWidth = function(){ return this.width; };

ScrollableView.prototype.getZIndex = function(){ return this.zIndex; };

ScrollableView.prototype.hide = function(){};

ScrollableView.prototype.moveNext = function(){};

ScrollableView.prototype.movePrevious = function(){};

ScrollableView.prototype.remove = function(){};

ScrollableView.prototype.removeAllChildren = function(){};

ScrollableView.prototype.removeEventListener = function(){};

ScrollableView.prototype.removeView = function(){};

ScrollableView.prototype.scrollToView = function(){};

ScrollableView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

ScrollableView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

ScrollableView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

ScrollableView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

ScrollableView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

ScrollableView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

ScrollableView.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

ScrollableView.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

ScrollableView.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

ScrollableView.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

ScrollableView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

ScrollableView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

ScrollableView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

ScrollableView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

ScrollableView.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

ScrollableView.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

ScrollableView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

ScrollableView.prototype.setBorderColor = function(property){ this.borderColor = property; };

ScrollableView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

ScrollableView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

ScrollableView.prototype.setBottom = function(property){ this.bottom = property; };

ScrollableView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ScrollableView.prototype.setCacheSize = function(property){ this.cacheSize = property; };

ScrollableView.prototype.setCenter = function(property){ this.center = property; };

ScrollableView.prototype.setClipMode = function(property){ this.clipMode = property; };

ScrollableView.prototype.setCurrentPage = function(property){ this.currentPage = property; };

ScrollableView.prototype.setDisableBounce = function(property){ this.disableBounce = property; };

ScrollableView.prototype.setFocusable = function(property){ this.focusable = property; };

ScrollableView.prototype.setHeight = function(property){ this.height = property; };

ScrollableView.prototype.setHitRect = function(property){ this.hitRect = property; };

ScrollableView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

ScrollableView.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

ScrollableView.prototype.setLayout = function(property){ this.layout = property; };

ScrollableView.prototype.setLeft = function(property){ this.left = property; };

ScrollableView.prototype.setOpacity = function(property){ this.opacity = property; };

ScrollableView.prototype.setOverScrollMode = function(property){ this.overScrollMode = property; };

ScrollableView.prototype.setOverlayEnabled = function(property){ this.overlayEnabled = property; };

ScrollableView.prototype.setPagingControlAlpha = function(property){ this.pagingControlAlpha = property; };

ScrollableView.prototype.setPagingControlColor = function(property){ this.pagingControlColor = property; };

ScrollableView.prototype.setPagingControlHeight = function(property){ this.pagingControlHeight = property; };

ScrollableView.prototype.setPagingControlOnTop = function(property){ this.pagingControlOnTop = property; };

ScrollableView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

ScrollableView.prototype.setRight = function(property){ this.right = property; };

ScrollableView.prototype.setScrollingEnabled = function(property){ this.scrollingEnabled = property; };

ScrollableView.prototype.setShowPagingControl = function(property){ this.showPagingControl = property; };

ScrollableView.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

ScrollableView.prototype.setTintColor = function(property){ this.tintColor = property; };

ScrollableView.prototype.setTop = function(property){ this.top = property; };

ScrollableView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

ScrollableView.prototype.setTransform = function(property){ this.transform = property; };

ScrollableView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

ScrollableView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

ScrollableView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

ScrollableView.prototype.setViews = function(property){ this.views = property; };

ScrollableView.prototype.setVisible = function(property){ this.visible = property; };

ScrollableView.prototype.setWidth = function(property){ this.width = property; };

ScrollableView.prototype.setZIndex = function(property){ this.zIndex = property; };

ScrollableView.prototype.show = function(){};

ScrollableView.prototype.startLayout = function(){};

ScrollableView.prototype.toImage = function(){ return {}; };

ScrollableView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new ScrollableView(properties); };