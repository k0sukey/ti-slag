function Notification(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.apiName = 'Ti.UI.Notification';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.duration = properties.duration || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.horizontalMargin = properties.horizontalMargin || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.message = properties.message || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalMargin = properties.verticalMargin || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.xOffset = properties.xOffset || undefined;
	this.yOffset = properties.yOffset || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Notification.prototype.add = function () {
};
Notification.prototype.addEventListener = function () {
};
Notification.prototype.animate = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notification.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Notification.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Notification.finishLayout was deprecated, since 3.0.0');
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.getAccessibilityHidden = function () {
	return true;
};
Notification.prototype.getAccessibilityHint = function () {
	return '';
};
Notification.prototype.getAccessibilityLabel = function () {
	return '';
};
Notification.prototype.getAccessibilityValue = function () {
	return '';
};
Notification.prototype.getApiName = function () {
	return '';
};
Notification.prototype.getBackgroundColor = function () {
	return '';
};
Notification.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Notification.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Notification.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Notification.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Notification.prototype.getBackgroundGradient = function () {
	return {};
};
Notification.prototype.getBackgroundImage = function () {
	return '';
};
Notification.prototype.getBackgroundRepeat = function () {
	return true;
};
Notification.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Notification.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Notification.prototype.getBorderColor = function () {
	return '';
};
Notification.prototype.getBorderRadius = function () {
	return 0;
};
Notification.prototype.getBorderWidth = function () {
	return 0;
};
Notification.prototype.getBottom = function () {
	return 0;
};
Notification.prototype.getBubbleParent = function () {
	return true;
};
Notification.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Notification.prototype.getChildren = function () {
	return [];
};
Notification.prototype.getDuration = function () {
	return 0;
};
Notification.prototype.getFocusable = function () {
	return true;
};
Notification.prototype.getHeight = function () {
	return 0;
};
Notification.prototype.getHorizontalMargin = function () {
	return 0;
};
Notification.prototype.getHorizontalWrap = function () {
	return true;
};
Notification.prototype.getKeepScreenOn = function () {
	return true;
};
Notification.prototype.getLayout = function () {
	return '';
};
Notification.prototype.getLeft = function () {
	return 0;
};
Notification.prototype.getLifecycleContainer = function () {
	return {};
};
Notification.prototype.getMessage = function () {
	return '';
};
Notification.prototype.getOpacity = function () {
	return 0;
};
Notification.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Notification.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Notification.prototype.getRight = function () {
	return 0;
};
Notification.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Notification.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Notification.prototype.getTop = function () {
	return 0;
};
Notification.prototype.getTouchEnabled = function () {
	return true;
};
Notification.prototype.getTransform = function () {
	return {};
};
Notification.prototype.getVerticalMargin = function () {
	return 0;
};
Notification.prototype.getVisible = function () {
	return true;
};
Notification.prototype.getWidth = function () {
	return 0;
};
Notification.prototype.getXOffset = function () {
	return 0;
};
Notification.prototype.getYOffset = function () {
	return 0;
};
Notification.prototype.getZIndex = function () {
	return 0;
};
Notification.prototype.hide = function () {
};
Notification.prototype.remove = function () {
};
Notification.prototype.removeAllChildren = function () {
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.setAccessibilityHidden = function () {
};
Notification.prototype.setAccessibilityHint = function () {
};
Notification.prototype.setAccessibilityLabel = function () {
};
Notification.prototype.setAccessibilityValue = function () {
};
Notification.prototype.setBackgroundColor = function () {
};
Notification.prototype.setBackgroundDisabledColor = function () {
};
Notification.prototype.setBackgroundDisabledImage = function () {
};
Notification.prototype.setBackgroundFocusedColor = function () {
};
Notification.prototype.setBackgroundFocusedImage = function () {
};
Notification.prototype.setBackgroundGradient = function () {
};
Notification.prototype.setBackgroundImage = function () {
};
Notification.prototype.setBackgroundRepeat = function () {
};
Notification.prototype.setBackgroundSelectedColor = function () {
};
Notification.prototype.setBackgroundSelectedImage = function () {
};
Notification.prototype.setBorderColor = function () {
};
Notification.prototype.setBorderRadius = function () {
};
Notification.prototype.setBorderWidth = function () {
};
Notification.prototype.setBottom = function () {
};
Notification.prototype.setBubbleParent = function () {
};
Notification.prototype.setCenter = function () {
};
Notification.prototype.setDuration = function () {
};
Notification.prototype.setFocusable = function () {
};
Notification.prototype.setHeight = function () {
};
Notification.prototype.setHorizontalMargin = function () {
};
Notification.prototype.setHorizontalWrap = function () {
};
Notification.prototype.setKeepScreenOn = function () {
};
Notification.prototype.setLayout = function () {
};
Notification.prototype.setLeft = function () {
};
Notification.prototype.setLifecycleContainer = function () {
};
Notification.prototype.setMessage = function () {
};
Notification.prototype.setOpacity = function () {
};
Notification.prototype.setRight = function () {
};
Notification.prototype.setSoftKeyboardOnFocus = function () {
};
Notification.prototype.setTop = function () {
};
Notification.prototype.setTouchEnabled = function () {
};
Notification.prototype.setTransform = function () {
};
Notification.prototype.setVerticalMargin = function () {
};
Notification.prototype.setVisible = function () {
};
Notification.prototype.setWidth = function () {
};
Notification.prototype.setXOffset = function () {
};
Notification.prototype.setYOffset = function () {
};
Notification.prototype.setZIndex = function () {
};
Notification.prototype.show = function () {
};
Notification.prototype.startLayout = function () {
	throw new Error('Ti.UI.Notification.startLayout was deprecated, since 3.0.0');
};
Notification.prototype.toImage = function () {
	return {};
};
Notification.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Notification.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Notification(properties);
};