function ProgressBar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ProgressBar';
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
	this.font = properties.font || {};
	this.max = properties.max || 0;
	this.message = properties.message || '';
	this.min = properties.min || 0;
	this.style = properties.style || 0;
	this.value = properties.value || 0;
	return this;
}
ProgressBar.prototype.addEventListener = function () {
};
ProgressBar.prototype.removeEventListener = function () {
};
ProgressBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressBar.prototype.fireEvent = function () {
};
ProgressBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ProgressBar.finishLayout was deprecated, since 3.0.0');
};
ProgressBar.prototype.removeAllChildren = function () {
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
ProgressBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.add = function () {
};
ProgressBar.prototype.animate = function () {
};
ProgressBar.prototype.hide = function () {
};
ProgressBar.prototype.remove = function () {
};
ProgressBar.prototype.show = function () {
};
ProgressBar.prototype.getBubbleParent = function () {
	return true;
};
ProgressBar.prototype.setBubbleParent = function () {
};
ProgressBar.prototype.getApiName = function () {
	return '';
};
ProgressBar.prototype.getLifecycleContainer = function () {
	return {};
};
ProgressBar.prototype.setLifecycleContainer = function () {
};
ProgressBar.prototype.getAccessibilityHidden = function () {
	return true;
};
ProgressBar.prototype.setAccessibilityHidden = function () {
};
ProgressBar.prototype.getAccessibilityHint = function () {
	return '';
};
ProgressBar.prototype.setAccessibilityHint = function () {
};
ProgressBar.prototype.getAccessibilityLabel = function () {
	return '';
};
ProgressBar.prototype.setAccessibilityLabel = function () {
};
ProgressBar.prototype.getAccessibilityValue = function () {
	return '';
};
ProgressBar.prototype.setAccessibilityValue = function () {
};
ProgressBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.setAnchorPoint = function () {
};
ProgressBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ProgressBar.prototype.setBackgroundDisabledColor = function () {
};
ProgressBar.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ProgressBar.prototype.setBackgroundDisabledImage = function () {
};
ProgressBar.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ProgressBar.prototype.setBackgroundFocusedColor = function () {
};
ProgressBar.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ProgressBar.prototype.setBackgroundFocusedImage = function () {
};
ProgressBar.prototype.getBackgroundGradient = function () {
	return {};
};
ProgressBar.prototype.setBackgroundGradient = function () {
};
ProgressBar.prototype.getBackgroundImage = function () {
	return '';
};
ProgressBar.prototype.setBackgroundImage = function () {
};
ProgressBar.prototype.getBackgroundRepeat = function () {
	return true;
};
ProgressBar.prototype.setBackgroundRepeat = function () {
};
ProgressBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ProgressBar.prototype.setBackgroundLeftCap = function () {
};
ProgressBar.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ProgressBar.prototype.setBackgroundSelectedColor = function () {
};
ProgressBar.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ProgressBar.prototype.setBackgroundSelectedImage = function () {
};
ProgressBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
ProgressBar.prototype.setBackgroundTopCap = function () {
};
ProgressBar.prototype.getClipMode = function () {
	return 0;
};
ProgressBar.prototype.setClipMode = function () {
};
ProgressBar.prototype.getFocusable = function () {
	return true;
};
ProgressBar.prototype.setFocusable = function () {
};
ProgressBar.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ProgressBar.prototype.setOverrideCurrentAnimation = function () {
};
ProgressBar.prototype.getPullBackgroundColor = function () {
	return '';
};
ProgressBar.prototype.setPullBackgroundColor = function () {
};
ProgressBar.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ProgressBar.prototype.setSoftKeyboardOnFocus = function () {
};
ProgressBar.prototype.getTransform = function () {
	return {};
};
ProgressBar.prototype.setTransform = function () {
};
ProgressBar.prototype.getViewShadowRadius = function () {
	return 0;
};
ProgressBar.prototype.setViewShadowRadius = function () {
};
ProgressBar.prototype.getViewShadowColor = function () {
	return '';
};
ProgressBar.prototype.setViewShadowColor = function () {
};
ProgressBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.setViewShadowOffset = function () {
};
ProgressBar.prototype.getHorizontalWrap = function () {
	return true;
};
ProgressBar.prototype.setHorizontalWrap = function () {
};
ProgressBar.prototype.getZIndex = function () {
	return 0;
};
ProgressBar.prototype.setZIndex = function () {
};
ProgressBar.prototype.getKeepScreenOn = function () {
	return true;
};
ProgressBar.prototype.setKeepScreenOn = function () {
};
ProgressBar.prototype.getBackgroundColor = function () {
	return '';
};
ProgressBar.prototype.setBackgroundColor = function () {
};
ProgressBar.prototype.getBorderColor = function () {
	return '';
};
ProgressBar.prototype.setBorderColor = function () {
};
ProgressBar.prototype.getBorderRadius = function () {
	return 0;
};
ProgressBar.prototype.setBorderRadius = function () {
};
ProgressBar.prototype.getBorderWidth = function () {
	return 0;
};
ProgressBar.prototype.setBorderWidth = function () {
};
ProgressBar.prototype.getBottom = function () {
	return '';
};
ProgressBar.prototype.setBottom = function () {
};
ProgressBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.setCenter = function () {
};
ProgressBar.prototype.getChildren = function () {
	return [];
};
ProgressBar.prototype.getHeight = function () {
	return '';
};
ProgressBar.prototype.setHeight = function () {
};
ProgressBar.prototype.getLayout = function () {
	return '';
};
ProgressBar.prototype.setLayout = function () {
};
ProgressBar.prototype.getLeft = function () {
	return '';
};
ProgressBar.prototype.setLeft = function () {
};
ProgressBar.prototype.getOpacity = function () {
	return 0;
};
ProgressBar.prototype.setOpacity = function () {
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
	return '';
};
ProgressBar.prototype.setRight = function () {
};
ProgressBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ProgressBar.prototype.getTintColor = function () {
	return '';
};
ProgressBar.prototype.setTintColor = function () {
};
ProgressBar.prototype.getTop = function () {
	return '';
};
ProgressBar.prototype.setTop = function () {
};
ProgressBar.prototype.getTouchEnabled = function () {
	return true;
};
ProgressBar.prototype.setTouchEnabled = function () {
};
ProgressBar.prototype.getVisible = function () {
	return true;
};
ProgressBar.prototype.setVisible = function () {
};
ProgressBar.prototype.getWidth = function () {
	return '';
};
ProgressBar.prototype.setWidth = function () {
};
ProgressBar.prototype.getColor = function () {
	return '';
};
ProgressBar.prototype.setColor = function () {
};
ProgressBar.prototype.getFont = function () {
	return {};
};
ProgressBar.prototype.setFont = function () {
};
ProgressBar.prototype.getMax = function () {
	return 0;
};
ProgressBar.prototype.setMax = function () {
};
ProgressBar.prototype.getMessage = function () {
	return '';
};
ProgressBar.prototype.setMessage = function () {
};
ProgressBar.prototype.getMin = function () {
	return 0;
};
ProgressBar.prototype.setMin = function () {
};
ProgressBar.prototype.getStyle = function () {
	return 0;
};
ProgressBar.prototype.setStyle = function () {
};
ProgressBar.prototype.getValue = function () {
	return 0;
};
ProgressBar.prototype.setValue = function () {
};
module.exports = function (properties) {
	return new ProgressBar(properties);
};