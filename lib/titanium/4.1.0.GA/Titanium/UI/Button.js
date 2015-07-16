function Button(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Button';
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
	this.disabledColor = properties.disabledColor || '';
	this.enabled = properties.enabled || true;
	this.selectedColor = properties.selectedColor || '';
	this.shadowColor = properties.shadowColor || '';
	this.shadowOffset = properties.shadowOffset || {};
	this.shadowRadius = properties.shadowRadius || 0;
	this.style = properties.style || 0;
	this.systemButton = properties.systemButton || 0;
	this.titleid = properties.titleid || '';
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.image = properties.image || '';
	this.textAlign = properties.textAlign || '';
	this.title = properties.title || '';
	this.verticalAlign = properties.verticalAlign || 0;
	return this;
}
Button.prototype.addEventListener = function () {
};
Button.prototype.removeEventListener = function () {
};
Button.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Button.prototype.fireEvent = function () {
};
Button.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Button.finishLayout was deprecated, since 3.0.0');
};
Button.prototype.removeAllChildren = function () {
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
Button.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.add = function () {
};
Button.prototype.animate = function () {
};
Button.prototype.hide = function () {
};
Button.prototype.remove = function () {
};
Button.prototype.show = function () {
};
Button.prototype.getBubbleParent = function () {
	return true;
};
Button.prototype.setBubbleParent = function () {
};
Button.prototype.getApiName = function () {
	return '';
};
Button.prototype.getLifecycleContainer = function () {
	return {};
};
Button.prototype.setLifecycleContainer = function () {
};
Button.prototype.getAccessibilityHidden = function () {
	return true;
};
Button.prototype.setAccessibilityHidden = function () {
};
Button.prototype.getAccessibilityHint = function () {
	return '';
};
Button.prototype.setAccessibilityHint = function () {
};
Button.prototype.getAccessibilityLabel = function () {
	return '';
};
Button.prototype.setAccessibilityLabel = function () {
};
Button.prototype.getAccessibilityValue = function () {
	return '';
};
Button.prototype.setAccessibilityValue = function () {
};
Button.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.setAnchorPoint = function () {
};
Button.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Button.prototype.setBackgroundDisabledColor = function () {
};
Button.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Button.prototype.setBackgroundDisabledImage = function () {
};
Button.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Button.prototype.setBackgroundFocusedColor = function () {
};
Button.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Button.prototype.setBackgroundFocusedImage = function () {
};
Button.prototype.getBackgroundGradient = function () {
	return {};
};
Button.prototype.setBackgroundGradient = function () {
};
Button.prototype.getBackgroundImage = function () {
	return '';
};
Button.prototype.setBackgroundImage = function () {
};
Button.prototype.getBackgroundRepeat = function () {
	return true;
};
Button.prototype.setBackgroundRepeat = function () {
};
Button.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Button.prototype.setBackgroundLeftCap = function () {
};
Button.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Button.prototype.setBackgroundSelectedColor = function () {
};
Button.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Button.prototype.setBackgroundSelectedImage = function () {
};
Button.prototype.getBackgroundTopCap = function () {
	return 0;
};
Button.prototype.setBackgroundTopCap = function () {
};
Button.prototype.getClipMode = function () {
	return 0;
};
Button.prototype.setClipMode = function () {
};
Button.prototype.getFocusable = function () {
	return true;
};
Button.prototype.setFocusable = function () {
};
Button.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Button.prototype.setOverrideCurrentAnimation = function () {
};
Button.prototype.getPullBackgroundColor = function () {
	return '';
};
Button.prototype.setPullBackgroundColor = function () {
};
Button.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Button.prototype.setSoftKeyboardOnFocus = function () {
};
Button.prototype.getTransform = function () {
	return {};
};
Button.prototype.setTransform = function () {
};
Button.prototype.getViewShadowRadius = function () {
	return 0;
};
Button.prototype.setViewShadowRadius = function () {
};
Button.prototype.getViewShadowColor = function () {
	return '';
};
Button.prototype.setViewShadowColor = function () {
};
Button.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.setViewShadowOffset = function () {
};
Button.prototype.getHorizontalWrap = function () {
	return true;
};
Button.prototype.setHorizontalWrap = function () {
};
Button.prototype.getZIndex = function () {
	return 0;
};
Button.prototype.setZIndex = function () {
};
Button.prototype.getKeepScreenOn = function () {
	return true;
};
Button.prototype.setKeepScreenOn = function () {
};
Button.prototype.getBackgroundColor = function () {
	return '';
};
Button.prototype.setBackgroundColor = function () {
};
Button.prototype.getBorderColor = function () {
	return '';
};
Button.prototype.setBorderColor = function () {
};
Button.prototype.getBorderRadius = function () {
	return 0;
};
Button.prototype.setBorderRadius = function () {
};
Button.prototype.getBorderWidth = function () {
	return 0;
};
Button.prototype.setBorderWidth = function () {
};
Button.prototype.getBottom = function () {
	return '';
};
Button.prototype.setBottom = function () {
};
Button.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.setCenter = function () {
};
Button.prototype.getChildren = function () {
	return [];
};
Button.prototype.getHeight = function () {
	return '';
};
Button.prototype.setHeight = function () {
};
Button.prototype.getLayout = function () {
	return '';
};
Button.prototype.setLayout = function () {
};
Button.prototype.getLeft = function () {
	return '';
};
Button.prototype.setLeft = function () {
};
Button.prototype.getOpacity = function () {
	return 0;
};
Button.prototype.setOpacity = function () {
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
	return '';
};
Button.prototype.setRight = function () {
};
Button.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Button.prototype.getTintColor = function () {
	return '';
};
Button.prototype.setTintColor = function () {
};
Button.prototype.getTop = function () {
	return '';
};
Button.prototype.setTop = function () {
};
Button.prototype.getTouchEnabled = function () {
	return true;
};
Button.prototype.setTouchEnabled = function () {
};
Button.prototype.getVisible = function () {
	return true;
};
Button.prototype.setVisible = function () {
};
Button.prototype.getWidth = function () {
	return '';
};
Button.prototype.setWidth = function () {
};
Button.prototype.getDisabledColor = function () {
	return '';
};
Button.prototype.setDisabledColor = function () {
};
Button.prototype.getEnabled = function () {
	return true;
};
Button.prototype.setEnabled = function () {
};
Button.prototype.getSelectedColor = function () {
	return '';
};
Button.prototype.setSelectedColor = function () {
};
Button.prototype.getShadowColor = function () {
	return '';
};
Button.prototype.setShadowColor = function () {
};
Button.prototype.getShadowOffset = function () {
	return {};
};
Button.prototype.setShadowOffset = function () {
};
Button.prototype.getShadowRadius = function () {
	return 0;
};
Button.prototype.setShadowRadius = function () {
};
Button.prototype.getStyle = function () {
	return 0;
};
Button.prototype.setStyle = function () {
};
Button.prototype.getSystemButton = function () {
	return 0;
};
Button.prototype.setSystemButton = function () {
};
Button.prototype.getTitleid = function () {
	return '';
};
Button.prototype.setTitleid = function () {
};
Button.prototype.getColor = function () {
	return '';
};
Button.prototype.setColor = function () {
};
Button.prototype.getFont = function () {
	return {};
};
Button.prototype.setFont = function () {
};
Button.prototype.getImage = function () {
	return '';
};
Button.prototype.setImage = function () {
};
Button.prototype.getTextAlign = function () {
	return '';
};
Button.prototype.setTextAlign = function () {
};
Button.prototype.getTitle = function () {
	return '';
};
Button.prototype.setTitle = function () {
};
Button.prototype.getVerticalAlign = function () {
	return '';
};
Button.prototype.setVerticalAlign = function () {
};
module.exports = function (properties) {
	return new Button(properties);
};