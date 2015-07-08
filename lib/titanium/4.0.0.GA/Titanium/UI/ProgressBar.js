function ProgressBar(properties) {
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
	this.apiName = 'Ti.UI.ProgressBar';
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
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.max = properties.max || 0;
	this.message = properties.message || '';
	this.min = properties.min || 0;
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
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || 0;
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
ProgressBar.prototype.getLifecycleContainer = function () {
	return {};
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
ProgressBar.prototype.setLifecycleContainer = function () {
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