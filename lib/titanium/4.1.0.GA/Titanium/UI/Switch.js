function Switch(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Switch';
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
	this.height = properties.height || 0;
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
	this.color = properties.color || '';
	this.enabled = properties.enabled || true;
	this.font = properties.font || {};
	this.style = properties.style || 0;
	this.textAlign = properties.textAlign || '';
	this.title = properties.title || '';
	this.titleOff = properties.titleOff || '';
	this.titleOn = properties.titleOn || '';
	this.onTintColor = properties.onTintColor || '';
	this.thumbTintColor = properties.thumbTintColor || '';
	this.verticalAlign = properties.verticalAlign || 0;
	this.value = properties.value || true;
	return this;
}
Switch.prototype.addEventListener = function () {
};
Switch.prototype.removeEventListener = function () {
};
Switch.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Switch.prototype.fireEvent = function () {
};
Switch.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Switch.finishLayout was deprecated, since 3.0.0');
};
Switch.prototype.removeAllChildren = function () {
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
Switch.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.add = function () {
};
Switch.prototype.animate = function () {
};
Switch.prototype.hide = function () {
};
Switch.prototype.remove = function () {
};
Switch.prototype.show = function () {
};
Switch.prototype.getBubbleParent = function () {
	return true;
};
Switch.prototype.setBubbleParent = function () {
};
Switch.prototype.getApiName = function () {
	return '';
};
Switch.prototype.getLifecycleContainer = function () {
	return {};
};
Switch.prototype.setLifecycleContainer = function () {
};
Switch.prototype.getAccessibilityHidden = function () {
	return true;
};
Switch.prototype.setAccessibilityHidden = function () {
};
Switch.prototype.getAccessibilityHint = function () {
	return '';
};
Switch.prototype.setAccessibilityHint = function () {
};
Switch.prototype.getAccessibilityLabel = function () {
	return '';
};
Switch.prototype.setAccessibilityLabel = function () {
};
Switch.prototype.getAccessibilityValue = function () {
	return '';
};
Switch.prototype.setAccessibilityValue = function () {
};
Switch.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.setAnchorPoint = function () {
};
Switch.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Switch.prototype.setBackgroundDisabledColor = function () {
};
Switch.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Switch.prototype.setBackgroundDisabledImage = function () {
};
Switch.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Switch.prototype.setBackgroundFocusedColor = function () {
};
Switch.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Switch.prototype.setBackgroundFocusedImage = function () {
};
Switch.prototype.getBackgroundGradient = function () {
	return {};
};
Switch.prototype.setBackgroundGradient = function () {
};
Switch.prototype.getBackgroundImage = function () {
	return '';
};
Switch.prototype.setBackgroundImage = function () {
};
Switch.prototype.getBackgroundRepeat = function () {
	return true;
};
Switch.prototype.setBackgroundRepeat = function () {
};
Switch.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Switch.prototype.setBackgroundLeftCap = function () {
};
Switch.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Switch.prototype.setBackgroundSelectedColor = function () {
};
Switch.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Switch.prototype.setBackgroundSelectedImage = function () {
};
Switch.prototype.getBackgroundTopCap = function () {
	return 0;
};
Switch.prototype.setBackgroundTopCap = function () {
};
Switch.prototype.getClipMode = function () {
	return 0;
};
Switch.prototype.setClipMode = function () {
};
Switch.prototype.getFocusable = function () {
	return true;
};
Switch.prototype.setFocusable = function () {
};
Switch.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Switch.prototype.setOverrideCurrentAnimation = function () {
};
Switch.prototype.getPullBackgroundColor = function () {
	return '';
};
Switch.prototype.setPullBackgroundColor = function () {
};
Switch.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Switch.prototype.setSoftKeyboardOnFocus = function () {
};
Switch.prototype.getTransform = function () {
	return {};
};
Switch.prototype.setTransform = function () {
};
Switch.prototype.getViewShadowRadius = function () {
	return 0;
};
Switch.prototype.setViewShadowRadius = function () {
};
Switch.prototype.getViewShadowColor = function () {
	return '';
};
Switch.prototype.setViewShadowColor = function () {
};
Switch.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.setViewShadowOffset = function () {
};
Switch.prototype.getHorizontalWrap = function () {
	return true;
};
Switch.prototype.setHorizontalWrap = function () {
};
Switch.prototype.getZIndex = function () {
	return 0;
};
Switch.prototype.setZIndex = function () {
};
Switch.prototype.getKeepScreenOn = function () {
	return true;
};
Switch.prototype.setKeepScreenOn = function () {
};
Switch.prototype.getBackgroundColor = function () {
	return '';
};
Switch.prototype.setBackgroundColor = function () {
};
Switch.prototype.getBorderColor = function () {
	return '';
};
Switch.prototype.setBorderColor = function () {
};
Switch.prototype.getBorderRadius = function () {
	return 0;
};
Switch.prototype.setBorderRadius = function () {
};
Switch.prototype.getBorderWidth = function () {
	return 0;
};
Switch.prototype.setBorderWidth = function () {
};
Switch.prototype.getBottom = function () {
	return '';
};
Switch.prototype.setBottom = function () {
};
Switch.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.setCenter = function () {
};
Switch.prototype.getChildren = function () {
	return [];
};
Switch.prototype.getHeight = function () {
	return '';
};
Switch.prototype.setHeight = function () {
};
Switch.prototype.getLayout = function () {
	return '';
};
Switch.prototype.setLayout = function () {
};
Switch.prototype.getLeft = function () {
	return '';
};
Switch.prototype.setLeft = function () {
};
Switch.prototype.getOpacity = function () {
	return 0;
};
Switch.prototype.setOpacity = function () {
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
	return '';
};
Switch.prototype.setRight = function () {
};
Switch.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Switch.prototype.getTintColor = function () {
	return '';
};
Switch.prototype.setTintColor = function () {
};
Switch.prototype.getTop = function () {
	return '';
};
Switch.prototype.setTop = function () {
};
Switch.prototype.getTouchEnabled = function () {
	return true;
};
Switch.prototype.setTouchEnabled = function () {
};
Switch.prototype.getVisible = function () {
	return true;
};
Switch.prototype.setVisible = function () {
};
Switch.prototype.getWidth = function () {
	return '';
};
Switch.prototype.setWidth = function () {
};
Switch.prototype.getColor = function () {
	return '';
};
Switch.prototype.setColor = function () {
};
Switch.prototype.getEnabled = function () {
	return true;
};
Switch.prototype.setEnabled = function () {
};
Switch.prototype.getFont = function () {
	return {};
};
Switch.prototype.setFont = function () {
};
Switch.prototype.getStyle = function () {
	return 0;
};
Switch.prototype.setStyle = function () {
};
Switch.prototype.getTextAlign = function () {
	return '';
};
Switch.prototype.setTextAlign = function () {
};
Switch.prototype.getTitle = function () {
	return '';
};
Switch.prototype.setTitle = function () {
};
Switch.prototype.getTitleOff = function () {
	return '';
};
Switch.prototype.setTitleOff = function () {
};
Switch.prototype.getTitleOn = function () {
	return '';
};
Switch.prototype.setTitleOn = function () {
};
Switch.prototype.getOnTintColor = function () {
	return '';
};
Switch.prototype.setOnTintColor = function () {
};
Switch.prototype.getThumbTintColor = function () {
	return '';
};
Switch.prototype.setThumbTintColor = function () {
};
Switch.prototype.getVerticalAlign = function () {
	return '';
};
Switch.prototype.setVerticalAlign = function () {
};
Switch.prototype.getValue = function () {
	return true;
};
Switch.prototype.setValue = function () {
};
module.exports = function (properties) {
	return new Switch(properties);
};