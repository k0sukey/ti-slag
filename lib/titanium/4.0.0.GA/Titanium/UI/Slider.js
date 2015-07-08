function Slider(properties) {
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
	this.apiName = 'Ti.UI.Slider';
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
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.disabledLeftTrackImage = properties.disabledLeftTrackImage || '';
	this.disabledRightTrackImage = properties.disabledRightTrackImage || '';
	this.disabledThumbImage = properties.disabledThumbImage || '';
	this.enabled = properties.enabled || true;
	this.focusable = properties.focusable || true;
	this.highlightedLeftTrackImage = properties.highlightedLeftTrackImage || '';
	this.highlightedRightTrackImage = properties.highlightedRightTrackImage || '';
	this.highlightedThumbImage = properties.highlightedThumbImage || '';
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.leftTrackImage = properties.leftTrackImage || '';
	this.leftTrackLeftCap = properties.leftTrackLeftCap || 0;
	this.leftTrackTopCap = properties.leftTrackTopCap || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.max = properties.max || 0;
	this.maxRange = properties.maxRange || 0;
	this.min = properties.min || 0;
	this.minRange = properties.minRange || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.rightTrackImage = properties.rightTrackImage || '';
	this.rightTrackLeftCap = properties.rightTrackLeftCap || 0;
	this.rightTrackTopCap = properties.rightTrackTopCap || 0;
	this.selectedLeftTrackImage = properties.selectedLeftTrackImage || '';
	this.selectedRightTrackImage = properties.selectedRightTrackImage || '';
	this.selectedThumbImage = properties.selectedThumbImage || '';
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.thumbImage = properties.thumbImage || '';
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || '';
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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