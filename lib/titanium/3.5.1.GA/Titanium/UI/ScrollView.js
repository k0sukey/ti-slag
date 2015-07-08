function ScrollView(properties) {
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
	this.apiName = 'Ti.UI.ScrollView';
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
	this.canCancelEvents = properties.canCancelEvents || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.contentHeight = properties.contentHeight || 0;
	this.contentOffset = properties.contentOffset || {};
	this.contentWidth = properties.contentWidth || 0;
	this.decelerationRate = properties.decelerationRate || 0;
	this.disableBounce = properties.disableBounce || true;
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.horizontalBounce = properties.horizontalBounce || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.maxZoomScale = properties.maxZoomScale || 0;
	this.minZoomScale = properties.minZoomScale || 0;
	this.opacity = properties.opacity || 0;
	this.overScrollMode = properties.overScrollMode || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.scrollType = properties.scrollType || '';
	this.scrollingEnabled = properties.scrollingEnabled || true;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.showHorizontalScrollIndicator = properties.showHorizontalScrollIndicator || true;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || true;
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
	this.verticalBounce = properties.verticalBounce || true;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
	this.zoomScale = properties.zoomScale || 0;
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