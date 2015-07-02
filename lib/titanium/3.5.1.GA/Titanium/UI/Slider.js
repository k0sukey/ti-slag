function Slider(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Slider';
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
	this.disabledLeftTrackImage = properties.disabledLeftTrackImage || undefined;
	this.disabledRightTrackImage = properties.disabledRightTrackImage || undefined;
	this.disabledThumbImage = properties.disabledThumbImage || undefined;
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.highlightedLeftTrackImage = properties.highlightedLeftTrackImage || undefined;
	this.highlightedRightTrackImage = properties.highlightedRightTrackImage || undefined;
	this.highlightedThumbImage = properties.highlightedThumbImage || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftTrackImage = properties.leftTrackImage || undefined;
	this.leftTrackLeftCap = properties.leftTrackLeftCap || undefined;
	this.leftTrackTopCap = properties.leftTrackTopCap || undefined;
	this.max = properties.max || undefined;
	this.maxRange = properties.maxRange || undefined;
	this.min = properties.min || undefined;
	this.minRange = properties.minRange || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightTrackImage = properties.rightTrackImage || undefined;
	this.rightTrackLeftCap = properties.rightTrackLeftCap || undefined;
	this.rightTrackTopCap = properties.rightTrackTopCap || undefined;
	this.selectedLeftTrackImage = properties.selectedLeftTrackImage || undefined;
	this.selectedRightTrackImage = properties.selectedRightTrackImage || undefined;
	this.selectedThumbImage = properties.selectedThumbImage || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.thumbImage = properties.thumbImage || undefined;
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
Slider.prototype.add = function () {
};
Slider.prototype.addEventListener = function () {
};
Slider.prototype.animate = function () {
};
Slider.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Slider.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.finishLayout = function () {
};
Slider.prototype.fireEvent = function () {
};
Slider.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Slider.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Slider.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Slider.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Slider.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Slider.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Slider.prototype.getApiName = function () {
	return this.apiName;
};
Slider.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Slider.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Slider.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Slider.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Slider.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Slider.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Slider.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Slider.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Slider.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Slider.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Slider.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Slider.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Slider.prototype.getBorderColor = function () {
	return this.borderColor;
};
Slider.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Slider.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Slider.prototype.getBottom = function () {
	return this.bottom;
};
Slider.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Slider.prototype.getCenter = function () {
	return this.center;
};
Slider.prototype.getChildren = function () {
	return this.children;
};
Slider.prototype.getClipMode = function () {
	return this.clipMode;
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	return this.disabledLeftTrackImage;
};
Slider.prototype.getDisabledRightTrackImage = function () {
	return this.disabledRightTrackImage;
};
Slider.prototype.getDisabledThumbImage = function () {
	return this.disabledThumbImage;
};
Slider.prototype.getEnabled = function () {
	return this.enabled;
};
Slider.prototype.getFocusable = function () {
	return this.focusable;
};
Slider.prototype.getHeight = function () {
	return this.height;
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	return this.highlightedLeftTrackImage;
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	return this.highlightedRightTrackImage;
};
Slider.prototype.getHighlightedThumbImage = function () {
	return this.highlightedThumbImage;
};
Slider.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Slider.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Slider.prototype.getLayout = function () {
	return this.layout;
};
Slider.prototype.getLeft = function () {
	return this.left;
};
Slider.prototype.getLeftTrackImage = function () {
	return this.leftTrackImage;
};
Slider.prototype.getLeftTrackLeftCap = function () {
	return this.leftTrackLeftCap;
};
Slider.prototype.getLeftTrackTopCap = function () {
	return this.leftTrackTopCap;
};
Slider.prototype.getMax = function () {
	return this.max;
};
Slider.prototype.getMaxRange = function () {
	return this.maxRange;
};
Slider.prototype.getMin = function () {
	return this.min;
};
Slider.prototype.getMinRange = function () {
	return this.minRange;
};
Slider.prototype.getOpacity = function () {
	return this.opacity;
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Slider.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Slider.prototype.getRect = function () {
	return this.rect;
};
Slider.prototype.getRight = function () {
	return this.right;
};
Slider.prototype.getRightTrackImage = function () {
	return this.rightTrackImage;
};
Slider.prototype.getRightTrackLeftCap = function () {
	return this.rightTrackLeftCap;
};
Slider.prototype.getRightTrackTopCap = function () {
	return this.rightTrackTopCap;
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	return this.selectedLeftTrackImage;
};
Slider.prototype.getSelectedRightTrackImage = function () {
	return this.selectedRightTrackImage;
};
Slider.prototype.getSelectedThumbImage = function () {
	return this.selectedThumbImage;
};
Slider.prototype.getSize = function () {
	return this.size;
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Slider.prototype.getThumbImage = function () {
	return this.thumbImage;
};
Slider.prototype.getTintColor = function () {
	return this.tintColor;
};
Slider.prototype.getTop = function () {
	return this.top;
};
Slider.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Slider.prototype.getTransform = function () {
	return this.transform;
};
Slider.prototype.getValue = function () {
	return this.value;
};
Slider.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Slider.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Slider.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Slider.prototype.getVisible = function () {
	return this.visible;
};
Slider.prototype.getWidth = function () {
	return this.width;
};
Slider.prototype.getZIndex = function () {
	return this.zIndex;
};
Slider.prototype.hide = function () {
};
Slider.prototype.remove = function () {
};
Slider.prototype.removeAllChildren = function () {
};
Slider.prototype.removeEventListener = function () {
};
Slider.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Slider.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Slider.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Slider.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Slider.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Slider.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Slider.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Slider.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Slider.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Slider.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Slider.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Slider.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Slider.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Slider.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Slider.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Slider.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Slider.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Slider.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Slider.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Slider.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Slider.prototype.setBottom = function (property) {
	this.bottom = property;
};
Slider.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Slider.prototype.setCenter = function (property) {
	this.center = property;
};
Slider.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Slider.prototype.setDisabledLeftTrackImage = function (property) {
	this.disabledLeftTrackImage = property;
};
Slider.prototype.setDisabledRightTrackImage = function (property) {
	this.disabledRightTrackImage = property;
};
Slider.prototype.setDisabledThumbImage = function (property) {
	this.disabledThumbImage = property;
};
Slider.prototype.setEnabled = function (property) {
	this.enabled = property;
};
Slider.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Slider.prototype.setHeight = function (property) {
	this.height = property;
};
Slider.prototype.setHighlightedLeftTrackImage = function (property) {
	this.highlightedLeftTrackImage = property;
};
Slider.prototype.setHighlightedRightTrackImage = function (property) {
	this.highlightedRightTrackImage = property;
};
Slider.prototype.setHighlightedThumbImage = function (property) {
	this.highlightedThumbImage = property;
};
Slider.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Slider.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Slider.prototype.setLayout = function (property) {
	this.layout = property;
};
Slider.prototype.setLeft = function (property) {
	this.left = property;
};
Slider.prototype.setLeftTrackImage = function (property) {
	this.leftTrackImage = property;
};
Slider.prototype.setLeftTrackLeftCap = function (property) {
	this.leftTrackLeftCap = property;
};
Slider.prototype.setLeftTrackTopCap = function (property) {
	this.leftTrackTopCap = property;
};
Slider.prototype.setMax = function (property) {
	this.max = property;
};
Slider.prototype.setMaxRange = function (property) {
	this.maxRange = property;
};
Slider.prototype.setMin = function (property) {
	this.min = property;
};
Slider.prototype.setMinRange = function (property) {
	this.minRange = property;
};
Slider.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Slider.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Slider.prototype.setRight = function (property) {
	this.right = property;
};
Slider.prototype.setRightTrackImage = function (property) {
	this.rightTrackImage = property;
};
Slider.prototype.setRightTrackLeftCap = function (property) {
	this.rightTrackLeftCap = property;
};
Slider.prototype.setRightTrackTopCap = function (property) {
	this.rightTrackTopCap = property;
};
Slider.prototype.setSelectedLeftTrackImage = function (property) {
	this.selectedLeftTrackImage = property;
};
Slider.prototype.setSelectedRightTrackImage = function (property) {
	this.selectedRightTrackImage = property;
};
Slider.prototype.setSelectedThumbImage = function (property) {
	this.selectedThumbImage = property;
};
Slider.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Slider.prototype.setThumbImage = function (property) {
	this.thumbImage = property;
};
Slider.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Slider.prototype.setTop = function (property) {
	this.top = property;
};
Slider.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Slider.prototype.setTransform = function (property) {
	this.transform = property;
};
Slider.prototype.setValue = function (property) {
	this.value = property;
};
Slider.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Slider.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Slider.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Slider.prototype.setVisible = function (property) {
	this.visible = property;
};
Slider.prototype.setWidth = function (property) {
	this.width = property;
};
Slider.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Slider.prototype.show = function () {
};
Slider.prototype.startLayout = function () {
};
Slider.prototype.toImage = function () {
	return {};
};
Slider.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new Slider(properties);
};