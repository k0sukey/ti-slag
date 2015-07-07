function ProgressBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.ProgressBar';
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
	if (properties.enabled) {
		throw new Error('Ti.UI.ProgressBar.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
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
	throw new Error('Ti.UI.ProgressBar.finishLayout was deprecated, since 3.0.0');
};
ProgressBar.prototype.fireEvent = function () {
};
ProgressBar.prototype.getAccessibilityHidden = function () {
	return true;
};
ProgressBar.prototype.getAccessibilityHint = function () {
	return '';
};
ProgressBar.prototype.getAccessibilityLabel = function () {
	return '';
};
ProgressBar.prototype.getAccessibilityValue = function () {
	return '';
};
ProgressBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.getApiName = function () {
	return '';
};
ProgressBar.prototype.getBackgroundColor = function () {
	return '';
};
ProgressBar.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ProgressBar.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ProgressBar.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ProgressBar.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ProgressBar.prototype.getBackgroundGradient = function () {
	return {};
};
ProgressBar.prototype.getBackgroundImage = function () {
	return '';
};
ProgressBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ProgressBar.prototype.getBackgroundRepeat = function () {
	return true;
};
ProgressBar.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ProgressBar.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ProgressBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
ProgressBar.prototype.getBorderColor = function () {
	return '';
};
ProgressBar.prototype.getBorderRadius = function () {
	return 0;
};
ProgressBar.prototype.getBorderWidth = function () {
	return 0;
};
ProgressBar.prototype.getBottom = function () {
	return 0;
};
ProgressBar.prototype.getBubbleParent = function () {
	return true;
};
ProgressBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.getChildren = function () {
	return [];
};
ProgressBar.prototype.getClipMode = function () {
	return 0;
};
ProgressBar.prototype.getColor = function () {
	return '';
};
ProgressBar.prototype.getEnabled = function () {
	throw new Error('Ti.UI.ProgressBar.getEnabled was deprecated, since 3.3.0');
};
ProgressBar.prototype.getFocusable = function () {
	return true;
};
ProgressBar.prototype.getFont = function () {
	return {};
};
ProgressBar.prototype.getHeight = function () {
	return 0;
};
ProgressBar.prototype.getHorizontalWrap = function () {
	return true;
};
ProgressBar.prototype.getKeepScreenOn = function () {
	return true;
};
ProgressBar.prototype.getLayout = function () {
	return '';
};
ProgressBar.prototype.getLeft = function () {
	return 0;
};
ProgressBar.prototype.getMax = function () {
	return 0;
};
ProgressBar.prototype.getMessage = function () {
	return '';
};
ProgressBar.prototype.getMin = function () {
	return 0;
};
ProgressBar.prototype.getOpacity = function () {
	return 0;
};
ProgressBar.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ProgressBar.prototype.getPullBackgroundColor = function () {
	return '';
};
ProgressBar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ProgressBar.prototype.getRight = function () {
	return 0;
};
ProgressBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ProgressBar.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ProgressBar.prototype.getStyle = function () {
	return 0;
};
ProgressBar.prototype.getTintColor = function () {
	return '';
};
ProgressBar.prototype.getTop = function () {
	return 0;
};
ProgressBar.prototype.getTouchEnabled = function () {
	return true;
};
ProgressBar.prototype.getTransform = function () {
	return {};
};
ProgressBar.prototype.getValue = function () {
	return 0;
};
ProgressBar.prototype.getViewShadowColor = function () {
	return '';
};
ProgressBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.getViewShadowRadius = function () {
	return 0;
};
ProgressBar.prototype.getVisible = function () {
	return true;
};
ProgressBar.prototype.getWidth = function () {
	return 0;
};
ProgressBar.prototype.getZIndex = function () {
	return 0;
};
ProgressBar.prototype.hide = function () {
};
ProgressBar.prototype.remove = function () {
};
ProgressBar.prototype.removeAllChildren = function () {
};
ProgressBar.prototype.removeEventListener = function () {
};
ProgressBar.prototype.setAccessibilityHidden = function () {
};
ProgressBar.prototype.setAccessibilityHint = function () {
};
ProgressBar.prototype.setAccessibilityLabel = function () {
};
ProgressBar.prototype.setAccessibilityValue = function () {
};
ProgressBar.prototype.setAnchorPoint = function () {
};
ProgressBar.prototype.setBackgroundColor = function () {
};
ProgressBar.prototype.setBackgroundDisabledColor = function () {
};
ProgressBar.prototype.setBackgroundDisabledImage = function () {
};
ProgressBar.prototype.setBackgroundFocusedColor = function () {
};
ProgressBar.prototype.setBackgroundFocusedImage = function () {
};
ProgressBar.prototype.setBackgroundGradient = function () {
};
ProgressBar.prototype.setBackgroundImage = function () {
};
ProgressBar.prototype.setBackgroundLeftCap = function () {
};
ProgressBar.prototype.setBackgroundRepeat = function () {
};
ProgressBar.prototype.setBackgroundSelectedColor = function () {
};
ProgressBar.prototype.setBackgroundSelectedImage = function () {
};
ProgressBar.prototype.setBackgroundTopCap = function () {
};
ProgressBar.prototype.setBorderColor = function () {
};
ProgressBar.prototype.setBorderRadius = function () {
};
ProgressBar.prototype.setBorderWidth = function () {
};
ProgressBar.prototype.setBottom = function () {
};
ProgressBar.prototype.setBubbleParent = function () {
};
ProgressBar.prototype.setCenter = function () {
};
ProgressBar.prototype.setClipMode = function () {
};
ProgressBar.prototype.setColor = function () {
};
ProgressBar.prototype.setEnabled = function () {
	throw new Error('Ti.UI.ProgressBar.setEnabled was deprecated, since 3.3.0');
};
ProgressBar.prototype.setFocusable = function () {
};
ProgressBar.prototype.setFont = function () {
};
ProgressBar.prototype.setHeight = function () {
};
ProgressBar.prototype.setHorizontalWrap = function () {
};
ProgressBar.prototype.setKeepScreenOn = function () {
};
ProgressBar.prototype.setLayout = function () {
};
ProgressBar.prototype.setLeft = function () {
};
ProgressBar.prototype.setMax = function () {
};
ProgressBar.prototype.setMessage = function () {
};
ProgressBar.prototype.setMin = function () {
};
ProgressBar.prototype.setOpacity = function () {
};
ProgressBar.prototype.setPullBackgroundColor = function () {
};
ProgressBar.prototype.setRight = function () {
};
ProgressBar.prototype.setSoftKeyboardOnFocus = function () {
};
ProgressBar.prototype.setStyle = function () {
};
ProgressBar.prototype.setTintColor = function () {
};
ProgressBar.prototype.setTop = function () {
};
ProgressBar.prototype.setTouchEnabled = function () {
};
ProgressBar.prototype.setTransform = function () {
};
ProgressBar.prototype.setValue = function () {
};
ProgressBar.prototype.setViewShadowColor = function () {
};
ProgressBar.prototype.setViewShadowOffset = function () {
};
ProgressBar.prototype.setViewShadowRadius = function () {
};
ProgressBar.prototype.setVisible = function () {
};
ProgressBar.prototype.setWidth = function () {
};
ProgressBar.prototype.setZIndex = function () {
};
ProgressBar.prototype.show = function () {
};
ProgressBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.ProgressBar.startLayout was deprecated, since 3.0.0');
};
ProgressBar.prototype.toImage = function () {
	return {};
};
ProgressBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ProgressBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ProgressBar(properties);
};