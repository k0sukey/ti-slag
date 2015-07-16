function ScrollableView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ScrollableView';
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
	this.cacheSize = properties.cacheSize || 0;
	this.currentPage = properties.currentPage || 0;
	this.disableBounce = properties.disableBounce || true;
	this.overScrollMode = properties.overScrollMode || 0;
	this.pagingControlColor = properties.pagingControlColor || '';
	this.pagingControlHeight = properties.pagingControlHeight || 0;
	this.showPagingControl = properties.showPagingControl || true;
	this.pagingControlTimeout = properties.pagingControlTimeout || 0;
	this.pagingControlAlpha = properties.pagingControlAlpha || 0;
	this.pagingControlOnTop = properties.pagingControlOnTop || true;
	this.overlayEnabled = properties.overlayEnabled || true;
	this.scrollingEnabled = properties.scrollingEnabled || true;
	this.views = properties.views || [];
	this.clipViews = properties.clipViews || true;
	this.hitRect = properties.hitRect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	return this;
}
ScrollableView.prototype.addEventListener = function () {
};
ScrollableView.prototype.removeEventListener = function () {
};
ScrollableView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollableView.prototype.fireEvent = function () {
};
ScrollableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollableView.finishLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.removeAllChildren = function () {
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
ScrollableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.add = function () {
};
ScrollableView.prototype.animate = function () {
};
ScrollableView.prototype.hide = function () {
};
ScrollableView.prototype.remove = function () {
};
ScrollableView.prototype.show = function () {
};
ScrollableView.prototype.addView = function () {
};
ScrollableView.prototype.moveNext = function () {
};
ScrollableView.prototype.movePrevious = function () {
};
ScrollableView.prototype.removeView = function () {
};
ScrollableView.prototype.scrollToView = function () {
};
ScrollableView.prototype.getBubbleParent = function () {
	return true;
};
ScrollableView.prototype.setBubbleParent = function () {
};
ScrollableView.prototype.getApiName = function () {
	return '';
};
ScrollableView.prototype.getLifecycleContainer = function () {
	return {};
};
ScrollableView.prototype.setLifecycleContainer = function () {
};
ScrollableView.prototype.getAccessibilityHidden = function () {
	return true;
};
ScrollableView.prototype.setAccessibilityHidden = function () {
};
ScrollableView.prototype.getAccessibilityHint = function () {
	return '';
};
ScrollableView.prototype.setAccessibilityHint = function () {
};
ScrollableView.prototype.getAccessibilityLabel = function () {
	return '';
};
ScrollableView.prototype.setAccessibilityLabel = function () {
};
ScrollableView.prototype.getAccessibilityValue = function () {
	return '';
};
ScrollableView.prototype.setAccessibilityValue = function () {
};
ScrollableView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.setAnchorPoint = function () {
};
ScrollableView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ScrollableView.prototype.setBackgroundDisabledColor = function () {
};
ScrollableView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ScrollableView.prototype.setBackgroundDisabledImage = function () {
};
ScrollableView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ScrollableView.prototype.setBackgroundFocusedColor = function () {
};
ScrollableView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ScrollableView.prototype.setBackgroundFocusedImage = function () {
};
ScrollableView.prototype.getBackgroundGradient = function () {
	return {};
};
ScrollableView.prototype.setBackgroundGradient = function () {
};
ScrollableView.prototype.getBackgroundImage = function () {
	return '';
};
ScrollableView.prototype.setBackgroundImage = function () {
};
ScrollableView.prototype.getBackgroundRepeat = function () {
	return true;
};
ScrollableView.prototype.setBackgroundRepeat = function () {
};
ScrollableView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ScrollableView.prototype.setBackgroundLeftCap = function () {
};
ScrollableView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ScrollableView.prototype.setBackgroundSelectedColor = function () {
};
ScrollableView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ScrollableView.prototype.setBackgroundSelectedImage = function () {
};
ScrollableView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ScrollableView.prototype.setBackgroundTopCap = function () {
};
ScrollableView.prototype.getClipMode = function () {
	return 0;
};
ScrollableView.prototype.setClipMode = function () {
};
ScrollableView.prototype.getFocusable = function () {
	return true;
};
ScrollableView.prototype.setFocusable = function () {
};
ScrollableView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ScrollableView.prototype.setOverrideCurrentAnimation = function () {
};
ScrollableView.prototype.getPullBackgroundColor = function () {
	return '';
};
ScrollableView.prototype.setPullBackgroundColor = function () {
};
ScrollableView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ScrollableView.prototype.setSoftKeyboardOnFocus = function () {
};
ScrollableView.prototype.getTransform = function () {
	return {};
};
ScrollableView.prototype.setTransform = function () {
};
ScrollableView.prototype.getViewShadowRadius = function () {
	return 0;
};
ScrollableView.prototype.setViewShadowRadius = function () {
};
ScrollableView.prototype.getViewShadowColor = function () {
	return '';
};
ScrollableView.prototype.setViewShadowColor = function () {
};
ScrollableView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.setViewShadowOffset = function () {
};
ScrollableView.prototype.getHorizontalWrap = function () {
	return true;
};
ScrollableView.prototype.setHorizontalWrap = function () {
};
ScrollableView.prototype.getZIndex = function () {
	return 0;
};
ScrollableView.prototype.setZIndex = function () {
};
ScrollableView.prototype.getKeepScreenOn = function () {
	return true;
};
ScrollableView.prototype.setKeepScreenOn = function () {
};
ScrollableView.prototype.getBackgroundColor = function () {
	return '';
};
ScrollableView.prototype.setBackgroundColor = function () {
};
ScrollableView.prototype.getBorderColor = function () {
	return '';
};
ScrollableView.prototype.setBorderColor = function () {
};
ScrollableView.prototype.getBorderRadius = function () {
	return 0;
};
ScrollableView.prototype.setBorderRadius = function () {
};
ScrollableView.prototype.getBorderWidth = function () {
	return 0;
};
ScrollableView.prototype.setBorderWidth = function () {
};
ScrollableView.prototype.getBottom = function () {
	return '';
};
ScrollableView.prototype.setBottom = function () {
};
ScrollableView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.setCenter = function () {
};
ScrollableView.prototype.getChildren = function () {
	return [];
};
ScrollableView.prototype.getHeight = function () {
	return '';
};
ScrollableView.prototype.setHeight = function () {
};
ScrollableView.prototype.getLayout = function () {
	return '';
};
ScrollableView.prototype.setLayout = function () {
};
ScrollableView.prototype.getLeft = function () {
	return '';
};
ScrollableView.prototype.setLeft = function () {
};
ScrollableView.prototype.getOpacity = function () {
	return 0;
};
ScrollableView.prototype.setOpacity = function () {
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
	return '';
};
ScrollableView.prototype.setRight = function () {
};
ScrollableView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollableView.prototype.getTintColor = function () {
	return '';
};
ScrollableView.prototype.setTintColor = function () {
};
ScrollableView.prototype.getTop = function () {
	return '';
};
ScrollableView.prototype.setTop = function () {
};
ScrollableView.prototype.getTouchEnabled = function () {
	return true;
};
ScrollableView.prototype.setTouchEnabled = function () {
};
ScrollableView.prototype.getVisible = function () {
	return true;
};
ScrollableView.prototype.setVisible = function () {
};
ScrollableView.prototype.getWidth = function () {
	return '';
};
ScrollableView.prototype.setWidth = function () {
};
ScrollableView.prototype.getCacheSize = function () {
	return 0;
};
ScrollableView.prototype.setCacheSize = function () {
};
ScrollableView.prototype.getCurrentPage = function () {
	return 0;
};
ScrollableView.prototype.setCurrentPage = function () {
};
ScrollableView.prototype.getDisableBounce = function () {
	return true;
};
ScrollableView.prototype.setDisableBounce = function () {
};
ScrollableView.prototype.getOverScrollMode = function () {
	return 0;
};
ScrollableView.prototype.setOverScrollMode = function () {
};
ScrollableView.prototype.getPagingControlColor = function () {
	return '';
};
ScrollableView.prototype.setPagingControlColor = function () {
};
ScrollableView.prototype.getPagingControlHeight = function () {
	return 0;
};
ScrollableView.prototype.setPagingControlHeight = function () {
};
ScrollableView.prototype.getShowPagingControl = function () {
	return true;
};
ScrollableView.prototype.setShowPagingControl = function () {
};
ScrollableView.prototype.getPagingControlTimeout = function () {
	return 0;
};
ScrollableView.prototype.setPagingControlTimeout = function () {
};
ScrollableView.prototype.getPagingControlAlpha = function () {
	return 0;
};
ScrollableView.prototype.setPagingControlAlpha = function () {
};
ScrollableView.prototype.getPagingControlOnTop = function () {
	return true;
};
ScrollableView.prototype.setPagingControlOnTop = function () {
};
ScrollableView.prototype.getOverlayEnabled = function () {
	return true;
};
ScrollableView.prototype.setOverlayEnabled = function () {
};
ScrollableView.prototype.getScrollingEnabled = function () {
	return true;
};
ScrollableView.prototype.setScrollingEnabled = function () {
};
ScrollableView.prototype.getViews = function () {
	return [];
};
ScrollableView.prototype.setViews = function () {
};
ScrollableView.prototype.getClipViews = function () {
	return true;
};
ScrollableView.prototype.setClipViews = function () {
};
ScrollableView.prototype.getHitRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollableView.prototype.setHitRect = function () {
};
module.exports = function (properties) {
	return new ScrollableView(properties);
};