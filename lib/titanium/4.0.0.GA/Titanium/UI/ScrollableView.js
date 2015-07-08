function ScrollableView(properties) {
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
	this.apiName = 'Ti.UI.ScrollableView';
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
	this.cacheSize = properties.cacheSize || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.clipViews = properties.clipViews || true;
	this.currentPage = properties.currentPage || 0;
	this.disableBounce = properties.disableBounce || true;
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.hitRect = properties.hitRect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.opacity = properties.opacity || 0;
	this.overScrollMode = properties.overScrollMode || 0;
	this.overlayEnabled = properties.overlayEnabled || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pagingControlAlpha = properties.pagingControlAlpha || 0;
	this.pagingControlColor = properties.pagingControlColor || '';
	this.pagingControlHeight = properties.pagingControlHeight || 0;
	this.pagingControlOnTop = properties.pagingControlOnTop || true;
	this.pagingControlTimeout = properties.pagingControlTimeout || 0;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.scrollingEnabled = properties.scrollingEnabled || true;
	this.showPagingControl = properties.showPagingControl || true;
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
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.views = properties.views || [];
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
ScrollableView.prototype.add = function () {
};
ScrollableView.prototype.addEventListener = function () {
};
ScrollableView.prototype.addView = function () {
};
ScrollableView.prototype.animate = function () {
};
ScrollableView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollableView.finishLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.fireEvent = function () {
};
ScrollableView.prototype.getAccessibilityHidden = function () {
	return true;
};
ScrollableView.prototype.getAccessibilityHint = function () {
	return '';
};
ScrollableView.prototype.getAccessibilityLabel = function () {
	return '';
};
ScrollableView.prototype.getAccessibilityValue = function () {
	return '';
};
ScrollableView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.getApiName = function () {
	return '';
};
ScrollableView.prototype.getBackgroundColor = function () {
	return '';
};
ScrollableView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ScrollableView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ScrollableView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ScrollableView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ScrollableView.prototype.getBackgroundGradient = function () {
	return {};
};
ScrollableView.prototype.getBackgroundImage = function () {
	return '';
};
ScrollableView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ScrollableView.prototype.getBackgroundRepeat = function () {
	return true;
};
ScrollableView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ScrollableView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ScrollableView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ScrollableView.prototype.getBorderColor = function () {
	return '';
};
ScrollableView.prototype.getBorderRadius = function () {
	return 0;
};
ScrollableView.prototype.getBorderWidth = function () {
	return 0;
};
ScrollableView.prototype.getBottom = function () {
	return 0;
};
ScrollableView.prototype.getBubbleParent = function () {
	return true;
};
ScrollableView.prototype.getCacheSize = function () {
	return 0;
};
ScrollableView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.getChildren = function () {
	return [];
};
ScrollableView.prototype.getClipMode = function () {
	return 0;
};
ScrollableView.prototype.getClipViews = function () {
	return true;
};
ScrollableView.prototype.getCurrentPage = function () {
	return 0;
};
ScrollableView.prototype.getDisableBounce = function () {
	return true;
};
ScrollableView.prototype.getFocusable = function () {
	return true;
};
ScrollableView.prototype.getHeight = function () {
	return 0;
};
ScrollableView.prototype.getHitRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollableView.prototype.getHorizontalWrap = function () {
	return true;
};
ScrollableView.prototype.getKeepScreenOn = function () {
	return true;
};
ScrollableView.prototype.getLayout = function () {
	return '';
};
ScrollableView.prototype.getLeft = function () {
	return 0;
};
ScrollableView.prototype.getLifecycleContainer = function () {
	return {};
};
ScrollableView.prototype.getOpacity = function () {
	return 0;
};
ScrollableView.prototype.getOverScrollMode = function () {
	return 0;
};
ScrollableView.prototype.getOverlayEnabled = function () {
	return true;
};
ScrollableView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ScrollableView.prototype.getPagingControlAlpha = function () {
	return 0;
};
ScrollableView.prototype.getPagingControlColor = function () {
	return '';
};
ScrollableView.prototype.getPagingControlHeight = function () {
	return 0;
};
ScrollableView.prototype.getPagingControlOnTop = function () {
	return true;
};
ScrollableView.prototype.getPagingControlTimeout = function () {
	return 0;
};
ScrollableView.prototype.getPullBackgroundColor = function () {
	return '';
};
ScrollableView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollableView.prototype.getRight = function () {
	return 0;
};
ScrollableView.prototype.getScrollingEnabled = function () {
	return true;
};
ScrollableView.prototype.getShowPagingControl = function () {
	return true;
};
ScrollableView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollableView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ScrollableView.prototype.getTintColor = function () {
	return '';
};
ScrollableView.prototype.getTop = function () {
	return 0;
};
ScrollableView.prototype.getTouchEnabled = function () {
	return true;
};
ScrollableView.prototype.getTransform = function () {
	return {};
};
ScrollableView.prototype.getViewShadowColor = function () {
	return '';
};
ScrollableView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.getViewShadowRadius = function () {
	return 0;
};
ScrollableView.prototype.getViews = function () {
	return [];
};
ScrollableView.prototype.getVisible = function () {
	return true;
};
ScrollableView.prototype.getWidth = function () {
	return 0;
};
ScrollableView.prototype.getZIndex = function () {
	return 0;
};
ScrollableView.prototype.hide = function () {
};
ScrollableView.prototype.moveNext = function () {
};
ScrollableView.prototype.movePrevious = function () {
};
ScrollableView.prototype.remove = function () {
};
ScrollableView.prototype.removeAllChildren = function () {
};
ScrollableView.prototype.removeEventListener = function () {
};
ScrollableView.prototype.removeView = function () {
};
ScrollableView.prototype.scrollToView = function () {
};
ScrollableView.prototype.setAccessibilityHidden = function () {
};
ScrollableView.prototype.setAccessibilityHint = function () {
};
ScrollableView.prototype.setAccessibilityLabel = function () {
};
ScrollableView.prototype.setAccessibilityValue = function () {
};
ScrollableView.prototype.setAnchorPoint = function () {
};
ScrollableView.prototype.setBackgroundColor = function () {
};
ScrollableView.prototype.setBackgroundDisabledColor = function () {
};
ScrollableView.prototype.setBackgroundDisabledImage = function () {
};
ScrollableView.prototype.setBackgroundFocusedColor = function () {
};
ScrollableView.prototype.setBackgroundFocusedImage = function () {
};
ScrollableView.prototype.setBackgroundGradient = function () {
};
ScrollableView.prototype.setBackgroundImage = function () {
};
ScrollableView.prototype.setBackgroundLeftCap = function () {
};
ScrollableView.prototype.setBackgroundRepeat = function () {
};
ScrollableView.prototype.setBackgroundSelectedColor = function () {
};
ScrollableView.prototype.setBackgroundSelectedImage = function () {
};
ScrollableView.prototype.setBackgroundTopCap = function () {
};
ScrollableView.prototype.setBorderColor = function () {
};
ScrollableView.prototype.setBorderRadius = function () {
};
ScrollableView.prototype.setBorderWidth = function () {
};
ScrollableView.prototype.setBottom = function () {
};
ScrollableView.prototype.setBubbleParent = function () {
};
ScrollableView.prototype.setCacheSize = function () {
};
ScrollableView.prototype.setCenter = function () {
};
ScrollableView.prototype.setClipMode = function () {
};
ScrollableView.prototype.setCurrentPage = function () {
};
ScrollableView.prototype.setDisableBounce = function () {
};
ScrollableView.prototype.setFocusable = function () {
};
ScrollableView.prototype.setHeight = function () {
};
ScrollableView.prototype.setHitRect = function () {
};
ScrollableView.prototype.setHorizontalWrap = function () {
};
ScrollableView.prototype.setKeepScreenOn = function () {
};
ScrollableView.prototype.setLayout = function () {
};
ScrollableView.prototype.setLeft = function () {
};
ScrollableView.prototype.setLifecycleContainer = function () {
};
ScrollableView.prototype.setOpacity = function () {
};
ScrollableView.prototype.setOverScrollMode = function () {
};
ScrollableView.prototype.setOverlayEnabled = function () {
};
ScrollableView.prototype.setPagingControlAlpha = function () {
};
ScrollableView.prototype.setPagingControlColor = function () {
};
ScrollableView.prototype.setPagingControlHeight = function () {
};
ScrollableView.prototype.setPagingControlOnTop = function () {
};
ScrollableView.prototype.setPullBackgroundColor = function () {
};
ScrollableView.prototype.setRight = function () {
};
ScrollableView.prototype.setScrollingEnabled = function () {
};
ScrollableView.prototype.setShowPagingControl = function () {
};
ScrollableView.prototype.setSoftKeyboardOnFocus = function () {
};
ScrollableView.prototype.setTintColor = function () {
};
ScrollableView.prototype.setTop = function () {
};
ScrollableView.prototype.setTouchEnabled = function () {
};
ScrollableView.prototype.setTransform = function () {
};
ScrollableView.prototype.setViewShadowColor = function () {
};
ScrollableView.prototype.setViewShadowOffset = function () {
};
ScrollableView.prototype.setViewShadowRadius = function () {
};
ScrollableView.prototype.setViews = function () {
};
ScrollableView.prototype.setVisible = function () {
};
ScrollableView.prototype.setWidth = function () {
};
ScrollableView.prototype.setZIndex = function () {
};
ScrollableView.prototype.show = function () {
};
ScrollableView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ScrollableView.startLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.toImage = function () {
	return {};
};
ScrollableView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ScrollableView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ScrollableView(properties);
};