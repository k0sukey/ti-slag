function Slider(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Slider';
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
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	throw new Error('Ti.UI.Slider.finishLayout was deprecated, since 3.0.0');
};
Slider.prototype.fireEvent = function () {
};
Slider.prototype.getAccessibilityHidden = function () {
	return true;
};
Slider.prototype.getAccessibilityHint = function () {
	return '';
};
Slider.prototype.getAccessibilityLabel = function () {
	return '';
};
Slider.prototype.getAccessibilityValue = function () {
	return '';
};
Slider.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.getApiName = function () {
	return '';
};
Slider.prototype.getBackgroundColor = function () {
	return '';
};
Slider.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Slider.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Slider.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Slider.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Slider.prototype.getBackgroundGradient = function () {
	return {};
};
Slider.prototype.getBackgroundImage = function () {
	return '';
};
Slider.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Slider.prototype.getBackgroundRepeat = function () {
	return true;
};
Slider.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Slider.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Slider.prototype.getBackgroundTopCap = function () {
	return 0;
};
Slider.prototype.getBorderColor = function () {
	return '';
};
Slider.prototype.getBorderRadius = function () {
	return 0;
};
Slider.prototype.getBorderWidth = function () {
	return 0;
};
Slider.prototype.getBottom = function () {
	return 0;
};
Slider.prototype.getBubbleParent = function () {
	return true;
};
Slider.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.getChildren = function () {
	return [];
};
Slider.prototype.getClipMode = function () {
	return 0;
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	return '';
};
Slider.prototype.getDisabledRightTrackImage = function () {
	return '';
};
Slider.prototype.getDisabledThumbImage = function () {
	return '';
};
Slider.prototype.getEnabled = function () {
	return true;
};
Slider.prototype.getFocusable = function () {
	return true;
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	return '';
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	return '';
};
Slider.prototype.getHighlightedThumbImage = function () {
	return '';
};
Slider.prototype.getHorizontalWrap = function () {
	return true;
};
Slider.prototype.getKeepScreenOn = function () {
	return true;
};
Slider.prototype.getLayout = function () {
	return '';
};
Slider.prototype.getLeft = function () {
	return 0;
};
Slider.prototype.getLeftTrackImage = function () {
	return '';
};
Slider.prototype.getLeftTrackLeftCap = function () {
	return 0;
};
Slider.prototype.getLeftTrackTopCap = function () {
	return 0;
};
Slider.prototype.getLifecycleContainer = function () {
	return {};
};
Slider.prototype.getMax = function () {
	return 0;
};
Slider.prototype.getMaxRange = function () {
	return 0;
};
Slider.prototype.getMin = function () {
	return 0;
};
Slider.prototype.getMinRange = function () {
	return 0;
};
Slider.prototype.getOpacity = function () {
	return 0;
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Slider.prototype.getPullBackgroundColor = function () {
	return '';
};
Slider.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Slider.prototype.getRight = function () {
	return 0;
};
Slider.prototype.getRightTrackImage = function () {
	return '';
};
Slider.prototype.getRightTrackLeftCap = function () {
	return 0;
};
Slider.prototype.getRightTrackTopCap = function () {
	return 0;
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	return '';
};
Slider.prototype.getSelectedRightTrackImage = function () {
	return '';
};
Slider.prototype.getSelectedThumbImage = function () {
	return '';
};
Slider.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Slider.prototype.getThumbImage = function () {
	return '';
};
Slider.prototype.getTintColor = function () {
	return '';
};
Slider.prototype.getTop = function () {
	return 0;
};
Slider.prototype.getTouchEnabled = function () {
	return true;
};
Slider.prototype.getTransform = function () {
	return {};
};
Slider.prototype.getValue = function () {
	return '';
};
Slider.prototype.getViewShadowColor = function () {
	return '';
};
Slider.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.getViewShadowRadius = function () {
	return 0;
};
Slider.prototype.getVisible = function () {
	return true;
};
Slider.prototype.getWidth = function () {
	return 0;
};
Slider.prototype.getZIndex = function () {
	return 0;
};
Slider.prototype.hide = function () {
};
Slider.prototype.remove = function () {
};
Slider.prototype.removeAllChildren = function () {
};
Slider.prototype.removeEventListener = function () {
};
Slider.prototype.setAccessibilityHidden = function () {
};
Slider.prototype.setAccessibilityHint = function () {
};
Slider.prototype.setAccessibilityLabel = function () {
};
Slider.prototype.setAccessibilityValue = function () {
};
Slider.prototype.setAnchorPoint = function () {
};
Slider.prototype.setBackgroundColor = function () {
};
Slider.prototype.setBackgroundDisabledColor = function () {
};
Slider.prototype.setBackgroundDisabledImage = function () {
};
Slider.prototype.setBackgroundFocusedColor = function () {
};
Slider.prototype.setBackgroundFocusedImage = function () {
};
Slider.prototype.setBackgroundGradient = function () {
};
Slider.prototype.setBackgroundImage = function () {
};
Slider.prototype.setBackgroundLeftCap = function () {
};
Slider.prototype.setBackgroundRepeat = function () {
};
Slider.prototype.setBackgroundSelectedColor = function () {
};
Slider.prototype.setBackgroundSelectedImage = function () {
};
Slider.prototype.setBackgroundTopCap = function () {
};
Slider.prototype.setBorderColor = function () {
};
Slider.prototype.setBorderRadius = function () {
};
Slider.prototype.setBorderWidth = function () {
};
Slider.prototype.setBottom = function () {
};
Slider.prototype.setBubbleParent = function () {
};
Slider.prototype.setCenter = function () {
};
Slider.prototype.setClipMode = function () {
};
Slider.prototype.setDisabledLeftTrackImage = function () {
};
Slider.prototype.setDisabledRightTrackImage = function () {
};
Slider.prototype.setDisabledThumbImage = function () {
};
Slider.prototype.setEnabled = function () {
};
Slider.prototype.setFocusable = function () {
};
Slider.prototype.setHighlightedLeftTrackImage = function () {
};
Slider.prototype.setHighlightedRightTrackImage = function () {
};
Slider.prototype.setHighlightedThumbImage = function () {
};
Slider.prototype.setHorizontalWrap = function () {
};
Slider.prototype.setKeepScreenOn = function () {
};
Slider.prototype.setLayout = function () {
};
Slider.prototype.setLeft = function () {
};
Slider.prototype.setLeftTrackImage = function () {
};
Slider.prototype.setLeftTrackLeftCap = function () {
};
Slider.prototype.setLeftTrackTopCap = function () {
};
Slider.prototype.setLifecycleContainer = function () {
};
Slider.prototype.setMax = function () {
};
Slider.prototype.setMaxRange = function () {
};
Slider.prototype.setMin = function () {
};
Slider.prototype.setMinRange = function () {
};
Slider.prototype.setOpacity = function () {
};
Slider.prototype.setPullBackgroundColor = function () {
};
Slider.prototype.setRight = function () {
};
Slider.prototype.setRightTrackImage = function () {
};
Slider.prototype.setRightTrackLeftCap = function () {
};
Slider.prototype.setRightTrackTopCap = function () {
};
Slider.prototype.setSelectedLeftTrackImage = function () {
};
Slider.prototype.setSelectedRightTrackImage = function () {
};
Slider.prototype.setSelectedThumbImage = function () {
};
Slider.prototype.setSoftKeyboardOnFocus = function () {
};
Slider.prototype.setThumbImage = function () {
};
Slider.prototype.setTintColor = function () {
};
Slider.prototype.setTop = function () {
};
Slider.prototype.setTouchEnabled = function () {
};
Slider.prototype.setTransform = function () {
};
Slider.prototype.setValue = function () {
};
Slider.prototype.setViewShadowColor = function () {
};
Slider.prototype.setViewShadowOffset = function () {
};
Slider.prototype.setViewShadowRadius = function () {
};
Slider.prototype.setVisible = function () {
};
Slider.prototype.setWidth = function () {
};
Slider.prototype.setZIndex = function () {
};
Slider.prototype.show = function () {
};
Slider.prototype.startLayout = function () {
	throw new Error('Ti.UI.Slider.startLayout was deprecated, since 3.0.0');
};
Slider.prototype.toImage = function () {
	return {};
};
Slider.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Slider.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Slider(properties);
};