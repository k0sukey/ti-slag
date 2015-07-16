function Slider(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Slider';
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
	this.disabledLeftTrackImage = properties.disabledLeftTrackImage || '';
	this.disabledRightTrackImage = properties.disabledRightTrackImage || '';
	this.disabledThumbImage = properties.disabledThumbImage || '';
	this.enabled = properties.enabled || true;
	this.highlightedLeftTrackImage = properties.highlightedLeftTrackImage || '';
	this.highlightedRightTrackImage = properties.highlightedRightTrackImage || '';
	this.highlightedThumbImage = properties.highlightedThumbImage || '';
	this.leftTrackImage = properties.leftTrackImage || '';
	this.leftTrackLeftCap = properties.leftTrackLeftCap || 0;
	this.leftTrackTopCap = properties.leftTrackTopCap || 0;
	this.maxRange = properties.maxRange || 0;
	this.minRange = properties.minRange || 0;
	this.rightTrackImage = properties.rightTrackImage || '';
	this.rightTrackLeftCap = properties.rightTrackLeftCap || 0;
	this.rightTrackTopCap = properties.rightTrackTopCap || 0;
	this.selectedLeftTrackImage = properties.selectedLeftTrackImage || '';
	this.selectedRightTrackImage = properties.selectedRightTrackImage || '';
	this.selectedThumbImage = properties.selectedThumbImage || '';
	this.thumbImage = properties.thumbImage || '';
	this.max = properties.max || 0;
	this.min = properties.min || 0;
	this.value = properties.value || '';
	return this;
}
Slider.prototype.addEventListener = function () {
};
Slider.prototype.removeEventListener = function () {
};
Slider.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Slider.prototype.fireEvent = function () {
};
Slider.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Slider.finishLayout was deprecated, since 3.0.0');
};
Slider.prototype.removeAllChildren = function () {
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
Slider.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.add = function () {
};
Slider.prototype.animate = function () {
};
Slider.prototype.hide = function () {
};
Slider.prototype.remove = function () {
};
Slider.prototype.show = function () {
};
Slider.prototype.setValue = function () {
};
Slider.prototype.getBubbleParent = function () {
	return true;
};
Slider.prototype.setBubbleParent = function () {
};
Slider.prototype.getApiName = function () {
	return '';
};
Slider.prototype.getLifecycleContainer = function () {
	return {};
};
Slider.prototype.setLifecycleContainer = function () {
};
Slider.prototype.getAccessibilityHidden = function () {
	return true;
};
Slider.prototype.setAccessibilityHidden = function () {
};
Slider.prototype.getAccessibilityHint = function () {
	return '';
};
Slider.prototype.setAccessibilityHint = function () {
};
Slider.prototype.getAccessibilityLabel = function () {
	return '';
};
Slider.prototype.setAccessibilityLabel = function () {
};
Slider.prototype.getAccessibilityValue = function () {
	return '';
};
Slider.prototype.setAccessibilityValue = function () {
};
Slider.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.setAnchorPoint = function () {
};
Slider.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Slider.prototype.setBackgroundDisabledColor = function () {
};
Slider.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Slider.prototype.setBackgroundDisabledImage = function () {
};
Slider.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Slider.prototype.setBackgroundFocusedColor = function () {
};
Slider.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Slider.prototype.setBackgroundFocusedImage = function () {
};
Slider.prototype.getBackgroundGradient = function () {
	return {};
};
Slider.prototype.setBackgroundGradient = function () {
};
Slider.prototype.getBackgroundImage = function () {
	return '';
};
Slider.prototype.setBackgroundImage = function () {
};
Slider.prototype.getBackgroundRepeat = function () {
	return true;
};
Slider.prototype.setBackgroundRepeat = function () {
};
Slider.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Slider.prototype.setBackgroundLeftCap = function () {
};
Slider.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Slider.prototype.setBackgroundSelectedColor = function () {
};
Slider.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Slider.prototype.setBackgroundSelectedImage = function () {
};
Slider.prototype.getBackgroundTopCap = function () {
	return 0;
};
Slider.prototype.setBackgroundTopCap = function () {
};
Slider.prototype.getClipMode = function () {
	return 0;
};
Slider.prototype.setClipMode = function () {
};
Slider.prototype.getFocusable = function () {
	return true;
};
Slider.prototype.setFocusable = function () {
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Slider.prototype.setOverrideCurrentAnimation = function () {
};
Slider.prototype.getPullBackgroundColor = function () {
	return '';
};
Slider.prototype.setPullBackgroundColor = function () {
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Slider.prototype.setSoftKeyboardOnFocus = function () {
};
Slider.prototype.getTransform = function () {
	return {};
};
Slider.prototype.setTransform = function () {
};
Slider.prototype.getViewShadowRadius = function () {
	return 0;
};
Slider.prototype.setViewShadowRadius = function () {
};
Slider.prototype.getViewShadowColor = function () {
	return '';
};
Slider.prototype.setViewShadowColor = function () {
};
Slider.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.setViewShadowOffset = function () {
};
Slider.prototype.getHorizontalWrap = function () {
	return true;
};
Slider.prototype.setHorizontalWrap = function () {
};
Slider.prototype.getZIndex = function () {
	return 0;
};
Slider.prototype.setZIndex = function () {
};
Slider.prototype.getKeepScreenOn = function () {
	return true;
};
Slider.prototype.setKeepScreenOn = function () {
};
Slider.prototype.getBackgroundColor = function () {
	return '';
};
Slider.prototype.setBackgroundColor = function () {
};
Slider.prototype.getBorderColor = function () {
	return '';
};
Slider.prototype.setBorderColor = function () {
};
Slider.prototype.getBorderRadius = function () {
	return 0;
};
Slider.prototype.setBorderRadius = function () {
};
Slider.prototype.getBorderWidth = function () {
	return 0;
};
Slider.prototype.setBorderWidth = function () {
};
Slider.prototype.getBottom = function () {
	return '';
};
Slider.prototype.setBottom = function () {
};
Slider.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.setCenter = function () {
};
Slider.prototype.getChildren = function () {
	return [];
};
Slider.prototype.getLayout = function () {
	return '';
};
Slider.prototype.setLayout = function () {
};
Slider.prototype.getLeft = function () {
	return '';
};
Slider.prototype.setLeft = function () {
};
Slider.prototype.getOpacity = function () {
	return 0;
};
Slider.prototype.setOpacity = function () {
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
	return '';
};
Slider.prototype.setRight = function () {
};
Slider.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Slider.prototype.getTintColor = function () {
	return '';
};
Slider.prototype.setTintColor = function () {
};
Slider.prototype.getTop = function () {
	return '';
};
Slider.prototype.setTop = function () {
};
Slider.prototype.getTouchEnabled = function () {
	return true;
};
Slider.prototype.setTouchEnabled = function () {
};
Slider.prototype.getVisible = function () {
	return true;
};
Slider.prototype.setVisible = function () {
};
Slider.prototype.getWidth = function () {
	return '';
};
Slider.prototype.setWidth = function () {
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	return '';
};
Slider.prototype.setDisabledLeftTrackImage = function () {
};
Slider.prototype.getDisabledRightTrackImage = function () {
	return '';
};
Slider.prototype.setDisabledRightTrackImage = function () {
};
Slider.prototype.getDisabledThumbImage = function () {
	return '';
};
Slider.prototype.setDisabledThumbImage = function () {
};
Slider.prototype.getEnabled = function () {
	return true;
};
Slider.prototype.setEnabled = function () {
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	return '';
};
Slider.prototype.setHighlightedLeftTrackImage = function () {
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	return '';
};
Slider.prototype.setHighlightedRightTrackImage = function () {
};
Slider.prototype.getHighlightedThumbImage = function () {
	return '';
};
Slider.prototype.setHighlightedThumbImage = function () {
};
Slider.prototype.getLeftTrackImage = function () {
	return '';
};
Slider.prototype.setLeftTrackImage = function () {
};
Slider.prototype.getLeftTrackLeftCap = function () {
	return 0;
};
Slider.prototype.setLeftTrackLeftCap = function () {
};
Slider.prototype.getLeftTrackTopCap = function () {
	return 0;
};
Slider.prototype.setLeftTrackTopCap = function () {
};
Slider.prototype.getMaxRange = function () {
	return 0;
};
Slider.prototype.setMaxRange = function () {
};
Slider.prototype.getMinRange = function () {
	return 0;
};
Slider.prototype.setMinRange = function () {
};
Slider.prototype.getRightTrackImage = function () {
	return '';
};
Slider.prototype.setRightTrackImage = function () {
};
Slider.prototype.getRightTrackLeftCap = function () {
	return 0;
};
Slider.prototype.setRightTrackLeftCap = function () {
};
Slider.prototype.getRightTrackTopCap = function () {
	return 0;
};
Slider.prototype.setRightTrackTopCap = function () {
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	return '';
};
Slider.prototype.setSelectedLeftTrackImage = function () {
};
Slider.prototype.getSelectedRightTrackImage = function () {
	return '';
};
Slider.prototype.setSelectedRightTrackImage = function () {
};
Slider.prototype.getSelectedThumbImage = function () {
	return '';
};
Slider.prototype.setSelectedThumbImage = function () {
};
Slider.prototype.getThumbImage = function () {
	return '';
};
Slider.prototype.setThumbImage = function () {
};
Slider.prototype.getMax = function () {
	return 0;
};
Slider.prototype.setMax = function () {
};
Slider.prototype.getMin = function () {
	return 0;
};
Slider.prototype.setMin = function () {
};
Slider.prototype.getValue = function () {
	return '';
};
module.exports = function (properties) {
	return new Slider(properties);
};