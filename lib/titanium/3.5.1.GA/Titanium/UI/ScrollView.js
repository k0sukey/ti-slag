function ScrollView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.ScrollView';
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
};
ScrollView.prototype.fireEvent = function () {
};
ScrollView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ScrollView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ScrollView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ScrollView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ScrollView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ScrollView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ScrollView.prototype.getApiName = function () {
	return this.apiName;
};
ScrollView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ScrollView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ScrollView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ScrollView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ScrollView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ScrollView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ScrollView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ScrollView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ScrollView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ScrollView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ScrollView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ScrollView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ScrollView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ScrollView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ScrollView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ScrollView.prototype.getBottom = function () {
	return this.bottom;
};
ScrollView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ScrollView.prototype.getCanCancelEvents = function () {
	return this.canCancelEvents;
};
ScrollView.prototype.getCenter = function () {
	return this.center;
};
ScrollView.prototype.getChildren = function () {
	return this.children;
};
ScrollView.prototype.getClipMode = function () {
	return this.clipMode;
};
ScrollView.prototype.getContentHeight = function () {
	return this.contentHeight;
};
ScrollView.prototype.getContentWidth = function () {
	return this.contentWidth;
};
ScrollView.prototype.getDecelerationRate = function () {
	return this.decelerationRate;
};
ScrollView.prototype.getDisableBounce = function () {
	return this.disableBounce;
};
ScrollView.prototype.getFocusable = function () {
	return this.focusable;
};
ScrollView.prototype.getHeight = function () {
	return this.height;
};
ScrollView.prototype.getHorizontalBounce = function () {
	return this.horizontalBounce;
};
ScrollView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ScrollView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ScrollView.prototype.getLayout = function () {
	return this.layout;
};
ScrollView.prototype.getLeft = function () {
	return this.left;
};
ScrollView.prototype.getMaxZoomScale = function () {
	return this.maxZoomScale;
};
ScrollView.prototype.getMinZoomScale = function () {
	return this.minZoomScale;
};
ScrollView.prototype.getOpacity = function () {
	return this.opacity;
};
ScrollView.prototype.getOverScrollMode = function () {
	return this.overScrollMode;
};
ScrollView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ScrollView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ScrollView.prototype.getRect = function () {
	return this.rect;
};
ScrollView.prototype.getRight = function () {
	return this.right;
};
ScrollView.prototype.getScrollIndicatorStyle = function () {
	return this.scrollIndicatorStyle;
};
ScrollView.prototype.getScrollType = function () {
	return this.scrollType;
};
ScrollView.prototype.getScrollingEnabled = function () {
	return this.scrollingEnabled;
};
ScrollView.prototype.getScrollsToTop = function () {
	return this.scrollsToTop;
};
ScrollView.prototype.getShowHorizontalScrollIndicator = function () {
	return this.showHorizontalScrollIndicator;
};
ScrollView.prototype.getShowVerticalScrollIndicator = function () {
	return this.showVerticalScrollIndicator;
};
ScrollView.prototype.getSize = function () {
	return this.size;
};
ScrollView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ScrollView.prototype.getTintColor = function () {
	return this.tintColor;
};
ScrollView.prototype.getTop = function () {
	return this.top;
};
ScrollView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ScrollView.prototype.getTransform = function () {
	return this.transform;
};
ScrollView.prototype.getVerticalBounce = function () {
	return this.verticalBounce;
};
ScrollView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ScrollView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ScrollView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ScrollView.prototype.getVisible = function () {
	return this.visible;
};
ScrollView.prototype.getWidth = function () {
	return this.width;
};
ScrollView.prototype.getZIndex = function () {
	return this.zIndex;
};
ScrollView.prototype.getZoomScale = function () {
	return this.zoomScale;
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
ScrollView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ScrollView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ScrollView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ScrollView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ScrollView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ScrollView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ScrollView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ScrollView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ScrollView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ScrollView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ScrollView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ScrollView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ScrollView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ScrollView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ScrollView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ScrollView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ScrollView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ScrollView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ScrollView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ScrollView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ScrollView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ScrollView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ScrollView.prototype.setCanCancelEvents = function (property) {
	this.canCancelEvents = property;
};
ScrollView.prototype.setCenter = function (property) {
	this.center = property;
};
ScrollView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ScrollView.prototype.setContentHeight = function (property) {
	this.contentHeight = property;
};
ScrollView.prototype.setContentOffset = function (property) {
	this.contentOffset = property;
};
ScrollView.prototype.setContentWidth = function (property) {
	this.contentWidth = property;
};
ScrollView.prototype.setDecelerationRate = function (property) {
	this.decelerationRate = property;
};
ScrollView.prototype.setDisableBounce = function (property) {
	this.disableBounce = property;
};
ScrollView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ScrollView.prototype.setHeight = function (property) {
	this.height = property;
};
ScrollView.prototype.setHorizontalBounce = function (property) {
	this.horizontalBounce = property;
};
ScrollView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ScrollView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ScrollView.prototype.setLayout = function (property) {
	this.layout = property;
};
ScrollView.prototype.setLeft = function (property) {
	this.left = property;
};
ScrollView.prototype.setMaxZoomScale = function (property) {
	this.maxZoomScale = property;
};
ScrollView.prototype.setMinZoomScale = function (property) {
	this.minZoomScale = property;
};
ScrollView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ScrollView.prototype.setOverScrollMode = function (property) {
	this.overScrollMode = property;
};
ScrollView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ScrollView.prototype.setRight = function (property) {
	this.right = property;
};
ScrollView.prototype.setScrollIndicatorStyle = function (property) {
	this.scrollIndicatorStyle = property;
};
ScrollView.prototype.setScrollingEnabled = function (property) {
	this.scrollingEnabled = property;
};
ScrollView.prototype.setScrollsToTop = function (property) {
	this.scrollsToTop = property;
};
ScrollView.prototype.setShowHorizontalScrollIndicator = function (property) {
	this.showHorizontalScrollIndicator = property;
};
ScrollView.prototype.setShowVerticalScrollIndicator = function (property) {
	this.showVerticalScrollIndicator = property;
};
ScrollView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ScrollView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ScrollView.prototype.setTop = function (property) {
	this.top = property;
};
ScrollView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ScrollView.prototype.setTransform = function (property) {
	this.transform = property;
};
ScrollView.prototype.setVerticalBounce = function (property) {
	this.verticalBounce = property;
};
ScrollView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ScrollView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ScrollView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ScrollView.prototype.setVisible = function (property) {
	this.visible = property;
};
ScrollView.prototype.setWidth = function (property) {
	this.width = property;
};
ScrollView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ScrollView.prototype.setZoomScale = function (property) {
	this.zoomScale = property;
};
ScrollView.prototype.show = function () {
};
ScrollView.prototype.startLayout = function () {
};
ScrollView.prototype.toImage = function () {
	return {};
};
ScrollView.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new ScrollView(properties);
};