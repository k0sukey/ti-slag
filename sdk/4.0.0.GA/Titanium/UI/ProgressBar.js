function ProgressBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.ProgressBar';
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
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.max = properties.max || undefined;
	this.message = properties.message || undefined;
	this.min = properties.min || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
ProgressBar.prototype.add = function () {
};
ProgressBar.prototype.addEventListener = function () {
};
ProgressBar.prototype.animate = function () {
};
ProgressBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.finishLayout = function () {
};
ProgressBar.prototype.fireEvent = function () {
};
ProgressBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ProgressBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ProgressBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ProgressBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ProgressBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ProgressBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ProgressBar.prototype.getApiName = function () {
	return this.apiName;
};
ProgressBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ProgressBar.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ProgressBar.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ProgressBar.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ProgressBar.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ProgressBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ProgressBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ProgressBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ProgressBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ProgressBar.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ProgressBar.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ProgressBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ProgressBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
ProgressBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ProgressBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ProgressBar.prototype.getBottom = function () {
	return this.bottom;
};
ProgressBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProgressBar.prototype.getCenter = function () {
	return this.center;
};
ProgressBar.prototype.getChildren = function () {
	return this.children;
};
ProgressBar.prototype.getClipMode = function () {
	return this.clipMode;
};
ProgressBar.prototype.getColor = function () {
	return this.color;
};
ProgressBar.prototype.getFocusable = function () {
	return this.focusable;
};
ProgressBar.prototype.getHeight = function () {
	return this.height;
};
ProgressBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ProgressBar.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ProgressBar.prototype.getLayout = function () {
	return this.layout;
};
ProgressBar.prototype.getLeft = function () {
	return this.left;
};
ProgressBar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ProgressBar.prototype.getMax = function () {
	return this.max;
};
ProgressBar.prototype.getMessage = function () {
	return this.message;
};
ProgressBar.prototype.getMin = function () {
	return this.min;
};
ProgressBar.prototype.getOpacity = function () {
	return this.opacity;
};
ProgressBar.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ProgressBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ProgressBar.prototype.getRect = function () {
	return this.rect;
};
ProgressBar.prototype.getRight = function () {
	return this.right;
};
ProgressBar.prototype.getSize = function () {
	return this.size;
};
ProgressBar.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ProgressBar.prototype.getStyle = function () {
	return this.style;
};
ProgressBar.prototype.getTintColor = function () {
	return this.tintColor;
};
ProgressBar.prototype.getTop = function () {
	return this.top;
};
ProgressBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ProgressBar.prototype.getTransform = function () {
	return this.transform;
};
ProgressBar.prototype.getValue = function () {
	return this.value;
};
ProgressBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ProgressBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ProgressBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ProgressBar.prototype.getVisible = function () {
	return this.visible;
};
ProgressBar.prototype.getWidth = function () {
	return this.width;
};
ProgressBar.prototype.getZIndex = function () {
	return this.zIndex;
};
ProgressBar.prototype.hide = function () {
};
ProgressBar.prototype.remove = function () {
};
ProgressBar.prototype.removeAllChildren = function () {
};
ProgressBar.prototype.removeEventListener = function () {
};
ProgressBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ProgressBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ProgressBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ProgressBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ProgressBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ProgressBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ProgressBar.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ProgressBar.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ProgressBar.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ProgressBar.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ProgressBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ProgressBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ProgressBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ProgressBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ProgressBar.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ProgressBar.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ProgressBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ProgressBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ProgressBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ProgressBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ProgressBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
ProgressBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ProgressBar.prototype.setCenter = function (property) {
	this.center = property;
};
ProgressBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ProgressBar.prototype.setColor = function (property) {
	this.color = property;
};
ProgressBar.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ProgressBar.prototype.setFont = function (property) {
	this.font = property;
};
ProgressBar.prototype.setHeight = function (property) {
	this.height = property;
};
ProgressBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ProgressBar.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ProgressBar.prototype.setLayout = function (property) {
	this.layout = property;
};
ProgressBar.prototype.setLeft = function (property) {
	this.left = property;
};
ProgressBar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ProgressBar.prototype.setMax = function (property) {
	this.max = property;
};
ProgressBar.prototype.setMessage = function (property) {
	this.message = property;
};
ProgressBar.prototype.setMin = function (property) {
	this.min = property;
};
ProgressBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ProgressBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ProgressBar.prototype.setRight = function (property) {
	this.right = property;
};
ProgressBar.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ProgressBar.prototype.setStyle = function (property) {
	this.style = property;
};
ProgressBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ProgressBar.prototype.setTop = function (property) {
	this.top = property;
};
ProgressBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ProgressBar.prototype.setTransform = function (property) {
	this.transform = property;
};
ProgressBar.prototype.setValue = function (property) {
	this.value = property;
};
ProgressBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ProgressBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ProgressBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ProgressBar.prototype.setVisible = function (property) {
	this.visible = property;
};
ProgressBar.prototype.setWidth = function (property) {
	this.width = property;
};
ProgressBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ProgressBar.prototype.show = function () {
};
ProgressBar.prototype.startLayout = function () {
};
ProgressBar.prototype.toImage = function () {
	return {};
};
ProgressBar.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new ProgressBar(properties);
};