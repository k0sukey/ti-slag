function PickerRow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.PickerRow';
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
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.fontSize = properties.fontSize || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
PickerRow.prototype.add = function () {
};
PickerRow.prototype.addEventListener = function () {
};
PickerRow.prototype.animate = function () {
};
PickerRow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PickerRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.PickerRow.finishLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.fireEvent = function () {
};
PickerRow.prototype.getAccessibilityHidden = function () {
	return true;
};
PickerRow.prototype.getAccessibilityHint = function () {
	return '';
};
PickerRow.prototype.getAccessibilityLabel = function () {
	return '';
};
PickerRow.prototype.getAccessibilityValue = function () {
	return '';
};
PickerRow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.getApiName = function () {
	return '';
};
PickerRow.prototype.getBackgroundColor = function () {
	return '';
};
PickerRow.prototype.getBackgroundDisabledColor = function () {
	return '';
};
PickerRow.prototype.getBackgroundDisabledImage = function () {
	return '';
};
PickerRow.prototype.getBackgroundFocusedColor = function () {
	return '';
};
PickerRow.prototype.getBackgroundFocusedImage = function () {
	return '';
};
PickerRow.prototype.getBackgroundGradient = function () {
	return {};
};
PickerRow.prototype.getBackgroundImage = function () {
	return '';
};
PickerRow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
PickerRow.prototype.getBackgroundRepeat = function () {
	return true;
};
PickerRow.prototype.getBackgroundSelectedColor = function () {
	return '';
};
PickerRow.prototype.getBackgroundSelectedImage = function () {
	return '';
};
PickerRow.prototype.getBackgroundTopCap = function () {
	return 0;
};
PickerRow.prototype.getBorderColor = function () {
	return '';
};
PickerRow.prototype.getBorderRadius = function () {
	return 0;
};
PickerRow.prototype.getBorderWidth = function () {
	return 0;
};
PickerRow.prototype.getBottom = function () {
	return 0;
};
PickerRow.prototype.getBubbleParent = function () {
	return true;
};
PickerRow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.getChildren = function () {
	return [];
};
PickerRow.prototype.getClipMode = function () {
	return 0;
};
PickerRow.prototype.getColor = function () {
	return '';
};
PickerRow.prototype.getFocusable = function () {
	return true;
};
PickerRow.prototype.getFont = function () {
	return {};
};
PickerRow.prototype.getFontSize = function () {
	return 0;
};
PickerRow.prototype.getHeight = function () {
	return 0;
};
PickerRow.prototype.getHorizontalWrap = function () {
	return true;
};
PickerRow.prototype.getKeepScreenOn = function () {
	return true;
};
PickerRow.prototype.getLayout = function () {
	return '';
};
PickerRow.prototype.getLeft = function () {
	return 0;
};
PickerRow.prototype.getOpacity = function () {
	return 0;
};
PickerRow.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
PickerRow.prototype.getPullBackgroundColor = function () {
	return '';
};
PickerRow.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerRow.prototype.getRight = function () {
	return 0;
};
PickerRow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerRow.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
PickerRow.prototype.getTintColor = function () {
	return '';
};
PickerRow.prototype.getTitle = function () {
	return '';
};
PickerRow.prototype.getTop = function () {
	return 0;
};
PickerRow.prototype.getTouchEnabled = function () {
	return true;
};
PickerRow.prototype.getTransform = function () {
	return {};
};
PickerRow.prototype.getViewShadowColor = function () {
	return '';
};
PickerRow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.getViewShadowRadius = function () {
	return 0;
};
PickerRow.prototype.getVisible = function () {
	return true;
};
PickerRow.prototype.getWidth = function () {
	return 0;
};
PickerRow.prototype.getZIndex = function () {
	return 0;
};
PickerRow.prototype.hide = function () {
};
PickerRow.prototype.remove = function () {
};
PickerRow.prototype.removeAllChildren = function () {
};
PickerRow.prototype.removeEventListener = function () {
};
PickerRow.prototype.setAccessibilityHidden = function () {
};
PickerRow.prototype.setAccessibilityHint = function () {
};
PickerRow.prototype.setAccessibilityLabel = function () {
};
PickerRow.prototype.setAccessibilityValue = function () {
};
PickerRow.prototype.setAnchorPoint = function () {
};
PickerRow.prototype.setBackgroundColor = function () {
};
PickerRow.prototype.setBackgroundDisabledColor = function () {
};
PickerRow.prototype.setBackgroundDisabledImage = function () {
};
PickerRow.prototype.setBackgroundFocusedColor = function () {
};
PickerRow.prototype.setBackgroundFocusedImage = function () {
};
PickerRow.prototype.setBackgroundGradient = function () {
};
PickerRow.prototype.setBackgroundImage = function () {
};
PickerRow.prototype.setBackgroundLeftCap = function () {
};
PickerRow.prototype.setBackgroundRepeat = function () {
};
PickerRow.prototype.setBackgroundSelectedColor = function () {
};
PickerRow.prototype.setBackgroundSelectedImage = function () {
};
PickerRow.prototype.setBackgroundTopCap = function () {
};
PickerRow.prototype.setBorderColor = function () {
};
PickerRow.prototype.setBorderRadius = function () {
};
PickerRow.prototype.setBorderWidth = function () {
};
PickerRow.prototype.setBottom = function () {
};
PickerRow.prototype.setBubbleParent = function () {
};
PickerRow.prototype.setCenter = function () {
};
PickerRow.prototype.setClipMode = function () {
};
PickerRow.prototype.setColor = function () {
};
PickerRow.prototype.setFocusable = function () {
};
PickerRow.prototype.setFont = function () {
};
PickerRow.prototype.setFontSize = function () {
};
PickerRow.prototype.setHeight = function () {
};
PickerRow.prototype.setHorizontalWrap = function () {
};
PickerRow.prototype.setKeepScreenOn = function () {
};
PickerRow.prototype.setLayout = function () {
};
PickerRow.prototype.setLeft = function () {
};
PickerRow.prototype.setOpacity = function () {
};
PickerRow.prototype.setPullBackgroundColor = function () {
};
PickerRow.prototype.setRight = function () {
};
PickerRow.prototype.setSoftKeyboardOnFocus = function () {
};
PickerRow.prototype.setTintColor = function () {
};
PickerRow.prototype.setTitle = function () {
};
PickerRow.prototype.setTop = function () {
};
PickerRow.prototype.setTouchEnabled = function () {
};
PickerRow.prototype.setTransform = function () {
};
PickerRow.prototype.setViewShadowColor = function () {
};
PickerRow.prototype.setViewShadowOffset = function () {
};
PickerRow.prototype.setViewShadowRadius = function () {
};
PickerRow.prototype.setVisible = function () {
};
PickerRow.prototype.setWidth = function () {
};
PickerRow.prototype.setZIndex = function () {
};
PickerRow.prototype.show = function () {
};
PickerRow.prototype.startLayout = function () {
	throw new Error('Ti.UI.PickerRow.startLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.toImage = function () {
	return {};
};
PickerRow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.PickerRow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new PickerRow(properties);
};