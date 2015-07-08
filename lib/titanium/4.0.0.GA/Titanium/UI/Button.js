function Button(properties) {
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
	this.apiName = 'Ti.UI.Button';
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
	this.disabledColor = properties.disabledColor || '';
	this.enabled = properties.enabled || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.image = properties.image || '';
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	this.selectedColor = properties.selectedColor || '';
	this.shadowColor = properties.shadowColor || '';
	this.shadowOffset = properties.shadowOffset || {};
	this.shadowRadius = properties.shadowRadius || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.style = properties.style || 0;
	this.systemButton = properties.systemButton || 0;
	this.textAlign = properties.textAlign || '';
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
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
	return true;
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
Button.prototype.getLifecycleContainer = function () {
	return {};
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
Button.prototype.setLifecycleContainer = function () {
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