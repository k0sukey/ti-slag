function Switch(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Switch';
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
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.onTintColor = properties.onTintColor || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.thumbTintColor = properties.thumbTintColor || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleOff = properties.titleOff || undefined;
	this.titleOn = properties.titleOn || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Switch.prototype.add = function () {
};
Switch.prototype.addEventListener = function () {
};
Switch.prototype.animate = function () {
};
Switch.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Switch.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Switch.finishLayout was deprecated, since 3.0.0');
};
Switch.prototype.fireEvent = function () {
};
Switch.prototype.getAccessibilityHidden = function () {
	return true;
};
Switch.prototype.getAccessibilityHint = function () {
	return '';
};
Switch.prototype.getAccessibilityLabel = function () {
	return '';
};
Switch.prototype.getAccessibilityValue = function () {
	return '';
};
Switch.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.getApiName = function () {
	return '';
};
Switch.prototype.getBackgroundColor = function () {
	return '';
};
Switch.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Switch.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Switch.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Switch.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Switch.prototype.getBackgroundGradient = function () {
	return {};
};
Switch.prototype.getBackgroundImage = function () {
	return '';
};
Switch.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Switch.prototype.getBackgroundRepeat = function () {
	return true;
};
Switch.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Switch.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Switch.prototype.getBackgroundTopCap = function () {
	return 0;
};
Switch.prototype.getBorderColor = function () {
	return '';
};
Switch.prototype.getBorderRadius = function () {
	return 0;
};
Switch.prototype.getBorderWidth = function () {
	return 0;
};
Switch.prototype.getBottom = function () {
	return 0;
};
Switch.prototype.getBubbleParent = function () {
	return true;
};
Switch.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.getChildren = function () {
	return [];
};
Switch.prototype.getClipMode = function () {
	return 0;
};
Switch.prototype.getColor = function () {
	return '';
};
Switch.prototype.getEnabled = function () {
	return true;
};
Switch.prototype.getFocusable = function () {
	return true;
};
Switch.prototype.getFont = function () {
	return {};
};
Switch.prototype.getHeight = function () {
	return 0;
};
Switch.prototype.getHorizontalWrap = function () {
	return true;
};
Switch.prototype.getKeepScreenOn = function () {
	return true;
};
Switch.prototype.getLayout = function () {
	return '';
};
Switch.prototype.getLeft = function () {
	return 0;
};
Switch.prototype.getLifecycleContainer = function () {
	return {};
};
Switch.prototype.getOnTintColor = function () {
	return '';
};
Switch.prototype.getOpacity = function () {
	return 0;
};
Switch.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Switch.prototype.getPullBackgroundColor = function () {
	return '';
};
Switch.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Switch.prototype.getRight = function () {
	return 0;
};
Switch.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Switch.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Switch.prototype.getStyle = function () {
	return 0;
};
Switch.prototype.getTextAlign = function () {
	return '';
};
Switch.prototype.getThumbTintColor = function () {
	return '';
};
Switch.prototype.getTintColor = function () {
	return '';
};
Switch.prototype.getTitle = function () {
	return '';
};
Switch.prototype.getTitleOff = function () {
	return '';
};
Switch.prototype.getTitleOn = function () {
	return '';
};
Switch.prototype.getTop = function () {
	return 0;
};
Switch.prototype.getTouchEnabled = function () {
	return true;
};
Switch.prototype.getTransform = function () {
	return {};
};
Switch.prototype.getValue = function () {
	return true;
};
Switch.prototype.getVerticalAlign = function () {
	return 0;
};
Switch.prototype.getViewShadowColor = function () {
	return '';
};
Switch.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.getViewShadowRadius = function () {
	return 0;
};
Switch.prototype.getVisible = function () {
	return true;
};
Switch.prototype.getWidth = function () {
	return 0;
};
Switch.prototype.getZIndex = function () {
	return 0;
};
Switch.prototype.hide = function () {
};
Switch.prototype.remove = function () {
};
Switch.prototype.removeAllChildren = function () {
};
Switch.prototype.removeEventListener = function () {
};
Switch.prototype.setAccessibilityHidden = function () {
};
Switch.prototype.setAccessibilityHint = function () {
};
Switch.prototype.setAccessibilityLabel = function () {
};
Switch.prototype.setAccessibilityValue = function () {
};
Switch.prototype.setAnchorPoint = function () {
};
Switch.prototype.setBackgroundColor = function () {
};
Switch.prototype.setBackgroundDisabledColor = function () {
};
Switch.prototype.setBackgroundDisabledImage = function () {
};
Switch.prototype.setBackgroundFocusedColor = function () {
};
Switch.prototype.setBackgroundFocusedImage = function () {
};
Switch.prototype.setBackgroundGradient = function () {
};
Switch.prototype.setBackgroundImage = function () {
};
Switch.prototype.setBackgroundLeftCap = function () {
};
Switch.prototype.setBackgroundRepeat = function () {
};
Switch.prototype.setBackgroundSelectedColor = function () {
};
Switch.prototype.setBackgroundSelectedImage = function () {
};
Switch.prototype.setBackgroundTopCap = function () {
};
Switch.prototype.setBorderColor = function () {
};
Switch.prototype.setBorderRadius = function () {
};
Switch.prototype.setBorderWidth = function () {
};
Switch.prototype.setBottom = function () {
};
Switch.prototype.setBubbleParent = function () {
};
Switch.prototype.setCenter = function () {
};
Switch.prototype.setClipMode = function () {
};
Switch.prototype.setColor = function () {
};
Switch.prototype.setEnabled = function () {
};
Switch.prototype.setFocusable = function () {
};
Switch.prototype.setFont = function () {
};
Switch.prototype.setHeight = function () {
};
Switch.prototype.setHorizontalWrap = function () {
};
Switch.prototype.setKeepScreenOn = function () {
};
Switch.prototype.setLayout = function () {
};
Switch.prototype.setLeft = function () {
};
Switch.prototype.setLifecycleContainer = function () {
};
Switch.prototype.setOnTintColor = function () {
};
Switch.prototype.setOpacity = function () {
};
Switch.prototype.setPullBackgroundColor = function () {
};
Switch.prototype.setRight = function () {
};
Switch.prototype.setSoftKeyboardOnFocus = function () {
};
Switch.prototype.setStyle = function () {
};
Switch.prototype.setTextAlign = function () {
};
Switch.prototype.setThumbTintColor = function () {
};
Switch.prototype.setTintColor = function () {
};
Switch.prototype.setTitle = function () {
};
Switch.prototype.setTitleOff = function () {
};
Switch.prototype.setTitleOn = function () {
};
Switch.prototype.setTop = function () {
};
Switch.prototype.setTouchEnabled = function () {
};
Switch.prototype.setTransform = function () {
};
Switch.prototype.setValue = function () {
};
Switch.prototype.setVerticalAlign = function () {
};
Switch.prototype.setViewShadowColor = function () {
};
Switch.prototype.setViewShadowOffset = function () {
};
Switch.prototype.setViewShadowRadius = function () {
};
Switch.prototype.setVisible = function () {
};
Switch.prototype.setWidth = function () {
};
Switch.prototype.setZIndex = function () {
};
Switch.prototype.show = function () {
};
Switch.prototype.startLayout = function () {
	throw new Error('Ti.UI.Switch.startLayout was deprecated, since 3.0.0');
};
Switch.prototype.toImage = function () {
	return {};
};
Switch.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Switch.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Switch(properties);
};