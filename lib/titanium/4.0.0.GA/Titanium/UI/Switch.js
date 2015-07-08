function Switch(properties) {
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
	this.apiName = 'Ti.UI.Switch';
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
	this.color = properties.color || '';
	this.enabled = properties.enabled || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.onTintColor = properties.onTintColor || '';
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
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.style = properties.style || 0;
	this.textAlign = properties.textAlign || '';
	this.thumbTintColor = properties.thumbTintColor || '';
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.titleOff = properties.titleOff || '';
	this.titleOn = properties.titleOn || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || true;
	this.verticalAlign = properties.verticalAlign || 0;
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