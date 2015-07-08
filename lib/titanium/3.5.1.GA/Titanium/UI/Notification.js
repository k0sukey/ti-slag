function Notification(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.apiName = 'Ti.UI.Notification';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
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
	this.duration = properties.duration || 0;
	if (properties.enabled) {
		throw new Error('Ti.UI.Notification.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.horizontalMargin = properties.horizontalMargin || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.message = properties.message || '';
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
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
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.verticalMargin = properties.verticalMargin || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.xOffset = properties.xOffset || 0;
	this.yOffset = properties.yOffset || 0;
	this.zIndex = properties.zIndex || 0;
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
Notification.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Notification.getEnabled was deprecated, since 3.3.0');
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
Notification.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Notification.setEnabled was deprecated, since 3.3.0');
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