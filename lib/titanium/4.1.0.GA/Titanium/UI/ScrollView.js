function ScrollView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ScrollView';
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
	this.canCancelEvents = properties.canCancelEvents || true;
	this.contentOffset = properties.contentOffset || {};
	this.decelerationRate = properties.decelerationRate || 0;
	this.disableBounce = properties.disableBounce || true;
	this.horizontalBounce = properties.horizontalBounce || true;
	this.maxZoomScale = properties.maxZoomScale || 0;
	this.minZoomScale = properties.minZoomScale || 0;
	this.overScrollMode = properties.overScrollMode || 0;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.scrollType = properties.scrollType || '';
	this.verticalBounce = properties.verticalBounce || true;
	this.zoomScale = properties.zoomScale || 0;
	this.contentWidth = properties.contentWidth || 0;
	this.contentHeight = properties.contentHeight || 0;
	this.scrollingEnabled = properties.scrollingEnabled || true;
	this.showHorizontalScrollIndicator = properties.showHorizontalScrollIndicator || true;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || true;
	return this;
}
ScrollView.prototype.addEventListener = function () {
};
ScrollView.prototype.removeEventListener = function () {
};
ScrollView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollView.prototype.fireEvent = function () {
};
ScrollView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollView.finishLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.removeAllChildren = function () {
};
ScrollView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ScrollView.startLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.toImage = function () {
	return {};
};
ScrollView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ScrollView.updateLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.add = function () {
};
ScrollView.prototype.animate = function () {
};
ScrollView.prototype.hide = function () {
};
ScrollView.prototype.remove = function () {
};
ScrollView.prototype.show = function () {
};
ScrollView.prototype.setContentOffset = function () {
};
ScrollView.prototype.setZoomScale = function () {
};
ScrollView.prototype.scrollTo = function () {
};
ScrollView.prototype.scrollToBottom = function () {
};
ScrollView.prototype.getBubbleParent = function () {
	return true;
};
ScrollView.prototype.setBubbleParent = function () {
};
ScrollView.prototype.getApiName = function () {
	return '';
};
ScrollView.prototype.getLifecycleContainer = function () {
	return {};
};
ScrollView.prototype.setLifecycleContainer = function () {
};
ScrollView.prototype.getAccessibilityHidden = function () {
	return true;
};
ScrollView.prototype.setAccessibilityHidden = function () {
};
ScrollView.prototype.getAccessibilityHint = function () {
	return '';
};
ScrollView.prototype.setAccessibilityHint = function () {
};
ScrollView.prototype.getAccessibilityLabel = function () {
	return '';
};
ScrollView.prototype.setAccessibilityLabel = function () {
};
ScrollView.prototype.getAccessibilityValue = function () {
	return '';
};
ScrollView.prototype.setAccessibilityValue = function () {
};
ScrollView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.setAnchorPoint = function () {
};
ScrollView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ScrollView.prototype.setBackgroundDisabledColor = function () {
};
ScrollView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ScrollView.prototype.setBackgroundDisabledImage = function () {
};
ScrollView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ScrollView.prototype.setBackgroundFocusedColor = function () {
};
ScrollView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ScrollView.prototype.setBackgroundFocusedImage = function () {
};
ScrollView.prototype.getBackgroundGradient = function () {
	return {};
};
ScrollView.prototype.setBackgroundGradient = function () {
};
ScrollView.prototype.getBackgroundImage = function () {
	return '';
};
ScrollView.prototype.setBackgroundImage = function () {
};
ScrollView.prototype.getBackgroundRepeat = function () {
	return true;
};
ScrollView.prototype.setBackgroundRepeat = function () {
};
ScrollView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ScrollView.prototype.setBackgroundLeftCap = function () {
};
ScrollView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ScrollView.prototype.setBackgroundSelectedColor = function () {
};
ScrollView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ScrollView.prototype.setBackgroundSelectedImage = function () {
};
ScrollView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ScrollView.prototype.setBackgroundTopCap = function () {
};
ScrollView.prototype.getClipMode = function () {
	return 0;
};
ScrollView.prototype.setClipMode = function () {
};
ScrollView.prototype.getFocusable = function () {
	return true;
};
ScrollView.prototype.setFocusable = function () {
};
ScrollView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ScrollView.prototype.setOverrideCurrentAnimation = function () {
};
ScrollView.prototype.getPullBackgroundColor = function () {
	return '';
};
ScrollView.prototype.setPullBackgroundColor = function () {
};
ScrollView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ScrollView.prototype.setSoftKeyboardOnFocus = function () {
};
ScrollView.prototype.getTransform = function () {
	return {};
};
ScrollView.prototype.setTransform = function () {
};
ScrollView.prototype.getViewShadowRadius = function () {
	return 0;
};
ScrollView.prototype.setViewShadowRadius = function () {
};
ScrollView.prototype.getViewShadowColor = function () {
	return '';
};
ScrollView.prototype.setViewShadowColor = function () {
};
ScrollView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.setViewShadowOffset = function () {
};
ScrollView.prototype.getHorizontalWrap = function () {
	return true;
};
ScrollView.prototype.setHorizontalWrap = function () {
};
ScrollView.prototype.getZIndex = function () {
	return 0;
};
ScrollView.prototype.setZIndex = function () {
};
ScrollView.prototype.getKeepScreenOn = function () {
	return true;
};
ScrollView.prototype.setKeepScreenOn = function () {
};
ScrollView.prototype.getBackgroundColor = function () {
	return '';
};
ScrollView.prototype.setBackgroundColor = function () {
};
ScrollView.prototype.getBorderColor = function () {
	return '';
};
ScrollView.prototype.setBorderColor = function () {
};
ScrollView.prototype.getBorderRadius = function () {
	return 0;
};
ScrollView.prototype.setBorderRadius = function () {
};
ScrollView.prototype.getBorderWidth = function () {
	return 0;
};
ScrollView.prototype.setBorderWidth = function () {
};
ScrollView.prototype.getBottom = function () {
	return '';
};
ScrollView.prototype.setBottom = function () {
};
ScrollView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.setCenter = function () {
};
ScrollView.prototype.getChildren = function () {
	return [];
};
ScrollView.prototype.getHeight = function () {
	return '';
};
ScrollView.prototype.setHeight = function () {
};
ScrollView.prototype.getLayout = function () {
	return '';
};
ScrollView.prototype.setLayout = function () {
};
ScrollView.prototype.getLeft = function () {
	return '';
};
ScrollView.prototype.setLeft = function () {
};
ScrollView.prototype.getOpacity = function () {
	return 0;
};
ScrollView.prototype.setOpacity = function () {
};
ScrollView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollView.prototype.getRight = function () {
	return '';
};
ScrollView.prototype.setRight = function () {
};
ScrollView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollView.prototype.getTintColor = function () {
	return '';
};
ScrollView.prototype.setTintColor = function () {
};
ScrollView.prototype.getTop = function () {
	return '';
};
ScrollView.prototype.setTop = function () {
};
ScrollView.prototype.getTouchEnabled = function () {
	return true;
};
ScrollView.prototype.setTouchEnabled = function () {
};
ScrollView.prototype.getVisible = function () {
	return true;
};
ScrollView.prototype.setVisible = function () {
};
ScrollView.prototype.getWidth = function () {
	return '';
};
ScrollView.prototype.setWidth = function () {
};
ScrollView.prototype.getCanCancelEvents = function () {
	return true;
};
ScrollView.prototype.setCanCancelEvents = function () {
};
ScrollView.prototype.getContentOffset = function () {
	return {};
};
ScrollView.prototype.setContentOffset = function () {
};
ScrollView.prototype.getDecelerationRate = function () {
	return 0;
};
ScrollView.prototype.setDecelerationRate = function () {
};
ScrollView.prototype.getDisableBounce = function () {
	return true;
};
ScrollView.prototype.setDisableBounce = function () {
};
ScrollView.prototype.getHorizontalBounce = function () {
	return true;
};
ScrollView.prototype.setHorizontalBounce = function () {
};
ScrollView.prototype.getMaxZoomScale = function () {
	return 0;
};
ScrollView.prototype.setMaxZoomScale = function () {
};
ScrollView.prototype.getMinZoomScale = function () {
	return 0;
};
ScrollView.prototype.setMinZoomScale = function () {
};
ScrollView.prototype.getOverScrollMode = function () {
	return 0;
};
ScrollView.prototype.setOverScrollMode = function () {
};
ScrollView.prototype.getScrollsToTop = function () {
	return true;
};
ScrollView.prototype.setScrollsToTop = function () {
};
ScrollView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
ScrollView.prototype.setScrollIndicatorStyle = function () {
};
ScrollView.prototype.getScrollType = function () {
	return '';
};
ScrollView.prototype.setScrollType = function () {
};
ScrollView.prototype.getVerticalBounce = function () {
	return true;
};
ScrollView.prototype.setVerticalBounce = function () {
};
ScrollView.prototype.getZoomScale = function () {
	return 0;
};
ScrollView.prototype.setZoomScale = function () {
};
ScrollView.prototype.getContentWidth = function () {
	return '';
};
ScrollView.prototype.setContentWidth = function () {
};
ScrollView.prototype.getContentHeight = function () {
	return '';
};
ScrollView.prototype.setContentHeight = function () {
};
ScrollView.prototype.getScrollingEnabled = function () {
	return true;
};
ScrollView.prototype.setScrollingEnabled = function () {
};
ScrollView.prototype.getShowHorizontalScrollIndicator = function () {
	return true;
};
ScrollView.prototype.setShowHorizontalScrollIndicator = function () {
};
ScrollView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
ScrollView.prototype.setShowVerticalScrollIndicator = function () {
};
module.exports = function (properties) {
	return new ScrollView(properties);
};