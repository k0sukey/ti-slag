function Button(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Button';
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
	this.disabledColor = properties.disabledColor || undefined;
	if (properties.enabled) {
		throw new Error('Ti.UI.Button.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.image = properties.image || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.selectedColor = properties.selectedColor || undefined;
	this.shadowColor = properties.shadowColor || undefined;
	this.shadowOffset = properties.shadowOffset || undefined;
	this.shadowRadius = properties.shadowRadius || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.systemButton = properties.systemButton || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Button.prototype.add = function () {
};
Button.prototype.addEventListener = function () {
};
Button.prototype.animate = function () {
};
Button.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Button.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Button.finishLayout was deprecated, since 3.0.0');
};
Button.prototype.fireEvent = function () {
};
Button.prototype.getAccessibilityHidden = function () {
	return true;
};
Button.prototype.getAccessibilityHint = function () {
	return '';
};
Button.prototype.getAccessibilityLabel = function () {
	return '';
};
Button.prototype.getAccessibilityValue = function () {
	return '';
};
Button.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.getApiName = function () {
	return '';
};
Button.prototype.getBackgroundColor = function () {
	return '';
};
Button.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Button.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Button.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Button.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Button.prototype.getBackgroundGradient = function () {
	return {};
};
Button.prototype.getBackgroundImage = function () {
	return '';
};
Button.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Button.prototype.getBackgroundRepeat = function () {
	return true;
};
Button.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Button.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Button.prototype.getBackgroundTopCap = function () {
	return 0;
};
Button.prototype.getBorderColor = function () {
	return '';
};
Button.prototype.getBorderRadius = function () {
	return 0;
};
Button.prototype.getBorderWidth = function () {
	return 0;
};
Button.prototype.getBottom = function () {
	return 0;
};
Button.prototype.getBubbleParent = function () {
	return true;
};
Button.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.getChildren = function () {
	return [];
};
Button.prototype.getClipMode = function () {
	return 0;
};
Button.prototype.getColor = function () {
	return '';
};
Button.prototype.getDisabledColor = function () {
	return '';
};
Button.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Button.getEnabled was deprecated, since 3.3.0');
};
Button.prototype.getFocusable = function () {
	return true;
};
Button.prototype.getFont = function () {
	return {};
};
Button.prototype.getHeight = function () {
	return 0;
};
Button.prototype.getHorizontalWrap = function () {
	return true;
};
Button.prototype.getImage = function () {
	return '';
};
Button.prototype.getKeepScreenOn = function () {
	return true;
};
Button.prototype.getLayout = function () {
	return '';
};
Button.prototype.getLeft = function () {
	return 0;
};
Button.prototype.getOpacity = function () {
	return 0;
};
Button.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Button.prototype.getPullBackgroundColor = function () {
	return '';
};
Button.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Button.prototype.getRight = function () {
	return 0;
};
Button.prototype.getSelectedColor = function () {
	return '';
};
Button.prototype.getShadowColor = function () {
	return '';
};
Button.prototype.getShadowOffset = function () {
	return {};
};
Button.prototype.getShadowRadius = function () {
	return 0;
};
Button.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Button.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Button.prototype.getStyle = function () {
	return 0;
};
Button.prototype.getSystemButton = function () {
	return 0;
};
Button.prototype.getTextAlign = function () {
	return '';
};
Button.prototype.getTintColor = function () {
	return '';
};
Button.prototype.getTitle = function () {
	return '';
};
Button.prototype.getTitleid = function () {
	return '';
};
Button.prototype.getTop = function () {
	return 0;
};
Button.prototype.getTouchEnabled = function () {
	return true;
};
Button.prototype.getTransform = function () {
	return {};
};
Button.prototype.getVerticalAlign = function () {
	return 0;
};
Button.prototype.getViewShadowColor = function () {
	return '';
};
Button.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.getViewShadowRadius = function () {
	return 0;
};
Button.prototype.getVisible = function () {
	return true;
};
Button.prototype.getWidth = function () {
	return 0;
};
Button.prototype.getZIndex = function () {
	return 0;
};
Button.prototype.hide = function () {
};
Button.prototype.remove = function () {
};
Button.prototype.removeAllChildren = function () {
};
Button.prototype.removeEventListener = function () {
};
Button.prototype.setAccessibilityHidden = function () {
};
Button.prototype.setAccessibilityHint = function () {
};
Button.prototype.setAccessibilityLabel = function () {
};
Button.prototype.setAccessibilityValue = function () {
};
Button.prototype.setAnchorPoint = function () {
};
Button.prototype.setBackgroundColor = function () {
};
Button.prototype.setBackgroundDisabledColor = function () {
};
Button.prototype.setBackgroundDisabledImage = function () {
};
Button.prototype.setBackgroundFocusedColor = function () {
};
Button.prototype.setBackgroundFocusedImage = function () {
};
Button.prototype.setBackgroundGradient = function () {
};
Button.prototype.setBackgroundImage = function () {
};
Button.prototype.setBackgroundLeftCap = function () {
};
Button.prototype.setBackgroundRepeat = function () {
};
Button.prototype.setBackgroundSelectedColor = function () {
};
Button.prototype.setBackgroundSelectedImage = function () {
};
Button.prototype.setBackgroundTopCap = function () {
};
Button.prototype.setBorderColor = function () {
};
Button.prototype.setBorderRadius = function () {
};
Button.prototype.setBorderWidth = function () {
};
Button.prototype.setBottom = function () {
};
Button.prototype.setBubbleParent = function () {
};
Button.prototype.setCenter = function () {
};
Button.prototype.setClipMode = function () {
};
Button.prototype.setColor = function () {
};
Button.prototype.setDisabledColor = function () {
};
Button.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Button.setEnabled was deprecated, since 3.3.0');
};
Button.prototype.setFocusable = function () {
};
Button.prototype.setFont = function () {
};
Button.prototype.setHeight = function () {
};
Button.prototype.setHorizontalWrap = function () {
};
Button.prototype.setImage = function () {
};
Button.prototype.setKeepScreenOn = function () {
};
Button.prototype.setLayout = function () {
};
Button.prototype.setLeft = function () {
};
Button.prototype.setOpacity = function () {
};
Button.prototype.setPullBackgroundColor = function () {
};
Button.prototype.setRight = function () {
};
Button.prototype.setSelectedColor = function () {
};
Button.prototype.setShadowColor = function () {
};
Button.prototype.setShadowOffset = function () {
};
Button.prototype.setShadowRadius = function () {
};
Button.prototype.setSoftKeyboardOnFocus = function () {
};
Button.prototype.setStyle = function () {
};
Button.prototype.setSystemButton = function () {
};
Button.prototype.setTextAlign = function () {
};
Button.prototype.setTintColor = function () {
};
Button.prototype.setTitle = function () {
};
Button.prototype.setTitleid = function () {
};
Button.prototype.setTop = function () {
};
Button.prototype.setTouchEnabled = function () {
};
Button.prototype.setTransform = function () {
};
Button.prototype.setVerticalAlign = function () {
};
Button.prototype.setViewShadowColor = function () {
};
Button.prototype.setViewShadowOffset = function () {
};
Button.prototype.setViewShadowRadius = function () {
};
Button.prototype.setVisible = function () {
};
Button.prototype.setWidth = function () {
};
Button.prototype.setZIndex = function () {
};
Button.prototype.show = function () {
};
Button.prototype.startLayout = function () {
	throw new Error('Ti.UI.Button.startLayout was deprecated, since 3.0.0');
};
Button.prototype.toImage = function () {
	return {};
};
Button.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Button.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Button(properties);
};