function ScrollView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.ScrollView';
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
	this.canCancelEvents = properties.canCancelEvents || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.contentHeight = properties.contentHeight || undefined;
	this.contentOffset = properties.contentOffset || undefined;
	this.contentWidth = properties.contentWidth || undefined;
	this.decelerationRate = properties.decelerationRate || undefined;
	this.disableBounce = properties.disableBounce || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.horizontalBounce = properties.horizontalBounce || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.maxZoomScale = properties.maxZoomScale || undefined;
	this.minZoomScale = properties.minZoomScale || undefined;
	this.opacity = properties.opacity || undefined;
	this.overScrollMode = properties.overScrollMode || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || undefined;
	this.scrollType = properties.scrollType || undefined;
	this.scrollingEnabled = properties.scrollingEnabled || undefined;
	this.scrollsToTop = properties.scrollsToTop || undefined;
	this.showHorizontalScrollIndicator = properties.showHorizontalScrollIndicator || undefined;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalBounce = properties.verticalBounce || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	this.zoomScale = properties.zoomScale || undefined;
	return this;
}
ScrollView.prototype.add = function () {
};
ScrollView.prototype.addEventListener = function () {
};
ScrollView.prototype.animate = function () {
};
ScrollView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollView.finishLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.fireEvent = function () {
};
ScrollView.prototype.getAccessibilityHidden = function () {
	return true;
};
ScrollView.prototype.getAccessibilityHint = function () {
	return '';
};
ScrollView.prototype.getAccessibilityLabel = function () {
	return '';
};
ScrollView.prototype.getAccessibilityValue = function () {
	return '';
};
ScrollView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.getApiName = function () {
	return '';
};
ScrollView.prototype.getBackgroundColor = function () {
	return '';
};
ScrollView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ScrollView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ScrollView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ScrollView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ScrollView.prototype.getBackgroundGradient = function () {
	return {};
};
ScrollView.prototype.getBackgroundImage = function () {
	return '';
};
ScrollView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ScrollView.prototype.getBackgroundRepeat = function () {
	return true;
};
ScrollView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ScrollView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ScrollView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ScrollView.prototype.getBorderColor = function () {
	return '';
};
ScrollView.prototype.getBorderRadius = function () {
	return 0;
};
ScrollView.prototype.getBorderWidth = function () {
	return 0;
};
ScrollView.prototype.getBottom = function () {
	return 0;
};
ScrollView.prototype.getBubbleParent = function () {
	return true;
};
ScrollView.prototype.getCanCancelEvents = function () {
	return true;
};
ScrollView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.getChildren = function () {
	return [];
};
ScrollView.prototype.getClipMode = function () {
	return 0;
};
ScrollView.prototype.getContentHeight = function () {
	return 0;
};
ScrollView.prototype.getContentOffset = function () {
	return {};
};
ScrollView.prototype.getContentWidth = function () {
	return 0;
};
ScrollView.prototype.getDecelerationRate = function () {
	return 0;
};
ScrollView.prototype.getDisableBounce = function () {
	return true;
};
ScrollView.prototype.getFocusable = function () {
	return true;
};
ScrollView.prototype.getHeight = function () {
	return 0;
};
ScrollView.prototype.getHorizontalBounce = function () {
	return true;
};
ScrollView.prototype.getHorizontalWrap = function () {
	return true;
};
ScrollView.prototype.getKeepScreenOn = function () {
	return true;
};
ScrollView.prototype.getLayout = function () {
	return '';
};
ScrollView.prototype.getLeft = function () {
	return 0;
};
ScrollView.prototype.getLifecycleContainer = function () {
	return {};
};
ScrollView.prototype.getMaxZoomScale = function () {
	return 0;
};
ScrollView.prototype.getMinZoomScale = function () {
	return 0;
};
ScrollView.prototype.getOpacity = function () {
	return 0;
};
ScrollView.prototype.getOverScrollMode = function () {
	return 0;
};
ScrollView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ScrollView.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
};
ScrollView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
ScrollView.prototype.getScrollType = function () {
	return '';
};
ScrollView.prototype.getScrollingEnabled = function () {
	return true;
};
ScrollView.prototype.getScrollsToTop = function () {
	return true;
};
ScrollView.prototype.getShowHorizontalScrollIndicator = function () {
	return true;
};
ScrollView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
ScrollView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ScrollView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ScrollView.prototype.getTintColor = function () {
	return '';
};
ScrollView.prototype.getTop = function () {
	return 0;
};
ScrollView.prototype.getTouchEnabled = function () {
	return true;
};
ScrollView.prototype.getTransform = function () {
	return {};
};
ScrollView.prototype.getVerticalBounce = function () {
	return true;
};
ScrollView.prototype.getViewShadowColor = function () {
	return '';
};
ScrollView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.getViewShadowRadius = function () {
	return 0;
};
ScrollView.prototype.getVisible = function () {
	return true;
};
ScrollView.prototype.getWidth = function () {
	return 0;
};
ScrollView.prototype.getZIndex = function () {
	return 0;
};
ScrollView.prototype.getZoomScale = function () {
	return 0;
};
ScrollView.prototype.hide = function () {
};
ScrollView.prototype.remove = function () {
};
ScrollView.prototype.removeAllChildren = function () {
};
ScrollView.prototype.removeEventListener = function () {
};
ScrollView.prototype.scrollTo = function () {
};
ScrollView.prototype.scrollToBottom = function () {
};
ScrollView.prototype.setAccessibilityHidden = function () {
};
ScrollView.prototype.setAccessibilityHint = function () {
};
ScrollView.prototype.setAccessibilityLabel = function () {
};
ScrollView.prototype.setAccessibilityValue = function () {
};
ScrollView.prototype.setAnchorPoint = function () {
};
ScrollView.prototype.setBackgroundColor = function () {
};
ScrollView.prototype.setBackgroundDisabledColor = function () {
};
ScrollView.prototype.setBackgroundDisabledImage = function () {
};
ScrollView.prototype.setBackgroundFocusedColor = function () {
};
ScrollView.prototype.setBackgroundFocusedImage = function () {
};
ScrollView.prototype.setBackgroundGradient = function () {
};
ScrollView.prototype.setBackgroundImage = function () {
};
ScrollView.prototype.setBackgroundLeftCap = function () {
};
ScrollView.prototype.setBackgroundRepeat = function () {
};
ScrollView.prototype.setBackgroundSelectedColor = function () {
};
ScrollView.prototype.setBackgroundSelectedImage = function () {
};
ScrollView.prototype.setBackgroundTopCap = function () {
};
ScrollView.prototype.setBorderColor = function () {
};
ScrollView.prototype.setBorderRadius = function () {
};
ScrollView.prototype.setBorderWidth = function () {
};
ScrollView.prototype.setBottom = function () {
};
ScrollView.prototype.setBubbleParent = function () {
};
ScrollView.prototype.setCanCancelEvents = function () {
};
ScrollView.prototype.setCenter = function () {
};
ScrollView.prototype.setClipMode = function () {
};
ScrollView.prototype.setContentHeight = function () {
};
ScrollView.prototype.setContentOffset = function () {
};
ScrollView.prototype.setContentWidth = function () {
};
ScrollView.prototype.setDecelerationRate = function () {
};
ScrollView.prototype.setDisableBounce = function () {
};
ScrollView.prototype.setFocusable = function () {
};
ScrollView.prototype.setHeight = function () {
};
ScrollView.prototype.setHorizontalBounce = function () {
};
ScrollView.prototype.setHorizontalWrap = function () {
};
ScrollView.prototype.setKeepScreenOn = function () {
};
ScrollView.prototype.setLayout = function () {
};
ScrollView.prototype.setLeft = function () {
};
ScrollView.prototype.setLifecycleContainer = function () {
};
ScrollView.prototype.setMaxZoomScale = function () {
};
ScrollView.prototype.setMinZoomScale = function () {
};
ScrollView.prototype.setOpacity = function () {
};
ScrollView.prototype.setOverScrollMode = function () {
};
ScrollView.prototype.setPullBackgroundColor = function () {
};
ScrollView.prototype.setRight = function () {
};
ScrollView.prototype.setScrollIndicatorStyle = function () {
};
ScrollView.prototype.setScrollingEnabled = function () {
};
ScrollView.prototype.setScrollsToTop = function () {
};
ScrollView.prototype.setShowHorizontalScrollIndicator = function () {
};
ScrollView.prototype.setShowVerticalScrollIndicator = function () {
};
ScrollView.prototype.setSoftKeyboardOnFocus = function () {
};
ScrollView.prototype.setTintColor = function () {
};
ScrollView.prototype.setTop = function () {
};
ScrollView.prototype.setTouchEnabled = function () {
};
ScrollView.prototype.setTransform = function () {
};
ScrollView.prototype.setVerticalBounce = function () {
};
ScrollView.prototype.setViewShadowColor = function () {
};
ScrollView.prototype.setViewShadowOffset = function () {
};
ScrollView.prototype.setViewShadowRadius = function () {
};
ScrollView.prototype.setVisible = function () {
};
ScrollView.prototype.setWidth = function () {
};
ScrollView.prototype.setZIndex = function () {
};
ScrollView.prototype.setZoomScale = function () {
};
ScrollView.prototype.show = function () {
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
module.exports = function (properties) {
	return new ScrollView(properties);
};