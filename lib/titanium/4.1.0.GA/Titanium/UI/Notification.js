function Notification(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Notification';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
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
	this.message = properties.message || '';
	this.duration = properties.duration || 0;
	this.xOffset = properties.xOffset || 0;
	this.yOffset = properties.yOffset || 0;
	this.horizontalMargin = properties.horizontalMargin || 0;
	this.verticalMargin = properties.verticalMargin || 0;
	return this;
}
Notification.prototype.addEventListener = function () {
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Notification.finishLayout was deprecated, since 3.0.0');
};
Notification.prototype.removeAllChildren = function () {
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
Notification.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Notification.prototype.add = function () {
};
Notification.prototype.animate = function () {
};
Notification.prototype.hide = function () {
};
Notification.prototype.remove = function () {
};
Notification.prototype.show = function () {
};
Notification.prototype.getBubbleParent = function () {
	return true;
};
Notification.prototype.setBubbleParent = function () {
};
Notification.prototype.getApiName = function () {
	return '';
};
Notification.prototype.getLifecycleContainer = function () {
	return {};
};
Notification.prototype.setLifecycleContainer = function () {
};
Notification.prototype.getAccessibilityHidden = function () {
	return true;
};
Notification.prototype.setAccessibilityHidden = function () {
};
Notification.prototype.getAccessibilityHint = function () {
	return '';
};
Notification.prototype.setAccessibilityHint = function () {
};
Notification.prototype.getAccessibilityLabel = function () {
	return '';
};
Notification.prototype.setAccessibilityLabel = function () {
};
Notification.prototype.getAccessibilityValue = function () {
	return '';
};
Notification.prototype.setAccessibilityValue = function () {
};
Notification.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Notification.prototype.setBackgroundDisabledColor = function () {
};
Notification.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Notification.prototype.setBackgroundDisabledImage = function () {
};
Notification.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Notification.prototype.setBackgroundFocusedColor = function () {
};
Notification.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Notification.prototype.setBackgroundFocusedImage = function () {
};
Notification.prototype.getBackgroundGradient = function () {
	return {};
};
Notification.prototype.setBackgroundGradient = function () {
};
Notification.prototype.getBackgroundImage = function () {
	return '';
};
Notification.prototype.setBackgroundImage = function () {
};
Notification.prototype.getBackgroundRepeat = function () {
	return true;
};
Notification.prototype.setBackgroundRepeat = function () {
};
Notification.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Notification.prototype.setBackgroundSelectedColor = function () {
};
Notification.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Notification.prototype.setBackgroundSelectedImage = function () {
};
Notification.prototype.getFocusable = function () {
	return true;
};
Notification.prototype.setFocusable = function () {
};
Notification.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Notification.prototype.setOverrideCurrentAnimation = function () {
};
Notification.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Notification.prototype.setSoftKeyboardOnFocus = function () {
};
Notification.prototype.getTransform = function () {
	return {};
};
Notification.prototype.setTransform = function () {
};
Notification.prototype.getHorizontalWrap = function () {
	return true;
};
Notification.prototype.setHorizontalWrap = function () {
};
Notification.prototype.getZIndex = function () {
	return 0;
};
Notification.prototype.setZIndex = function () {
};
Notification.prototype.getKeepScreenOn = function () {
	return true;
};
Notification.prototype.setKeepScreenOn = function () {
};
Notification.prototype.getBackgroundColor = function () {
	return '';
};
Notification.prototype.setBackgroundColor = function () {
};
Notification.prototype.getBorderColor = function () {
	return '';
};
Notification.prototype.setBorderColor = function () {
};
Notification.prototype.getBorderRadius = function () {
	return 0;
};
Notification.prototype.setBorderRadius = function () {
};
Notification.prototype.getBorderWidth = function () {
	return 0;
};
Notification.prototype.setBorderWidth = function () {
};
Notification.prototype.getBottom = function () {
	return '';
};
Notification.prototype.setBottom = function () {
};
Notification.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Notification.prototype.setCenter = function () {
};
Notification.prototype.getChildren = function () {
	return [];
};
Notification.prototype.getHeight = function () {
	return '';
};
Notification.prototype.setHeight = function () {
};
Notification.prototype.getLayout = function () {
	return '';
};
Notification.prototype.setLayout = function () {
};
Notification.prototype.getLeft = function () {
	return '';
};
Notification.prototype.setLeft = function () {
};
Notification.prototype.getOpacity = function () {
	return 0;
};
Notification.prototype.setOpacity = function () {
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
	return '';
};
Notification.prototype.setRight = function () {
};
Notification.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Notification.prototype.getTintColor = function () {
	return '';
};
Notification.prototype.setTintColor = function () {
};
Notification.prototype.getTop = function () {
	return '';
};
Notification.prototype.setTop = function () {
};
Notification.prototype.getTouchEnabled = function () {
	return true;
};
Notification.prototype.setTouchEnabled = function () {
};
Notification.prototype.getVisible = function () {
	return true;
};
Notification.prototype.setVisible = function () {
};
Notification.prototype.getWidth = function () {
	return '';
};
Notification.prototype.setWidth = function () {
};
Notification.prototype.getMessage = function () {
	return '';
};
Notification.prototype.setMessage = function () {
};
Notification.prototype.getDuration = function () {
	return 0;
};
Notification.prototype.setDuration = function () {
};
Notification.prototype.getXOffset = function () {
	return 0;
};
Notification.prototype.setXOffset = function () {
};
Notification.prototype.getYOffset = function () {
	return 0;
};
Notification.prototype.setYOffset = function () {
};
Notification.prototype.getHorizontalMargin = function () {
	return 0;
};
Notification.prototype.setHorizontalMargin = function () {
};
Notification.prototype.getVerticalMargin = function () {
	return 0;
};
Notification.prototype.setVerticalMargin = function () {
};
module.exports = function (properties) {
	return new Notification(properties);
};