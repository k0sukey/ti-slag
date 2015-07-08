function View(properties) {
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
	this.apiName = 'Ti.UI.View';
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
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
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
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
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
View.prototype.add = function () {
};
View.prototype.addEventListener = function () {
};
View.prototype.animate = function () {
};
View.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
View.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.finishLayout = function () {
	throw new Error('Ti.UI.View.finishLayout was deprecated, since 3.0.0');
};
View.prototype.fireEvent = function () {
};
View.prototype.getAccessibilityHidden = function () {
	return true;
};
View.prototype.getAccessibilityHint = function () {
	return '';
};
View.prototype.getAccessibilityLabel = function () {
	return '';
};
View.prototype.getAccessibilityValue = function () {
	return '';
};
View.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getApiName = function () {
	return '';
};
View.prototype.getBackgroundColor = function () {
	return '';
};
View.prototype.getBackgroundDisabledColor = function () {
	return '';
};
View.prototype.getBackgroundDisabledImage = function () {
	return '';
};
View.prototype.getBackgroundFocusedColor = function () {
	return '';
};
View.prototype.getBackgroundFocusedImage = function () {
	return '';
};
View.prototype.getBackgroundGradient = function () {
	return {};
};
View.prototype.getBackgroundImage = function () {
	return '';
};
View.prototype.getBackgroundLeftCap = function () {
	return 0;
};
View.prototype.getBackgroundRepeat = function () {
	return true;
};
View.prototype.getBackgroundSelectedColor = function () {
	return '';
};
View.prototype.getBackgroundSelectedImage = function () {
	return '';
};
View.prototype.getBackgroundTopCap = function () {
	return 0;
};
View.prototype.getBorderColor = function () {
	return '';
};
View.prototype.getBorderRadius = function () {
	return 0;
};
View.prototype.getBorderWidth = function () {
	return 0;
};
View.prototype.getBottom = function () {
	return 0;
};
View.prototype.getBubbleParent = function () {
	return true;
};
View.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getChildren = function () {
	return [];
};
View.prototype.getClipMode = function () {
	return 0;
};
View.prototype.getFocusable = function () {
	return true;
};
View.prototype.getHeight = function () {
	return 0;
};
View.prototype.getHorizontalWrap = function () {
	return true;
};
View.prototype.getKeepScreenOn = function () {
	return true;
};
View.prototype.getLayout = function () {
	return '';
};
View.prototype.getLeft = function () {
	return 0;
};
View.prototype.getLifecycleContainer = function () {
	return {};
};
View.prototype.getOpacity = function () {
	return 0;
};
View.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
View.prototype.getPullBackgroundColor = function () {
	return '';
};
View.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getRight = function () {
	return 0;
};
View.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
View.prototype.getTintColor = function () {
	return '';
};
View.prototype.getTop = function () {
	return 0;
};
View.prototype.getTouchEnabled = function () {
	return true;
};
View.prototype.getTransform = function () {
	return {};
};
View.prototype.getViewShadowColor = function () {
	return '';
};
View.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getViewShadowRadius = function () {
	return 0;
};
View.prototype.getVisible = function () {
	return true;
};
View.prototype.getWidth = function () {
	return 0;
};
View.prototype.getZIndex = function () {
	return 0;
};
View.prototype.hide = function () {
};
View.prototype.remove = function () {
};
View.prototype.removeAllChildren = function () {
};
View.prototype.removeEventListener = function () {
};
View.prototype.setAccessibilityHidden = function () {
};
View.prototype.setAccessibilityHint = function () {
};
View.prototype.setAccessibilityLabel = function () {
};
View.prototype.setAccessibilityValue = function () {
};
View.prototype.setAnchorPoint = function () {
};
View.prototype.setBackgroundColor = function () {
};
View.prototype.setBackgroundDisabledColor = function () {
};
View.prototype.setBackgroundDisabledImage = function () {
};
View.prototype.setBackgroundFocusedColor = function () {
};
View.prototype.setBackgroundFocusedImage = function () {
};
View.prototype.setBackgroundGradient = function () {
};
View.prototype.setBackgroundImage = function () {
};
View.prototype.setBackgroundLeftCap = function () {
};
View.prototype.setBackgroundRepeat = function () {
};
View.prototype.setBackgroundSelectedColor = function () {
};
View.prototype.setBackgroundSelectedImage = function () {
};
View.prototype.setBackgroundTopCap = function () {
};
View.prototype.setBorderColor = function () {
};
View.prototype.setBorderRadius = function () {
};
View.prototype.setBorderWidth = function () {
};
View.prototype.setBottom = function () {
};
View.prototype.setBubbleParent = function () {
};
View.prototype.setCenter = function () {
};
View.prototype.setClipMode = function () {
};
View.prototype.setFocusable = function () {
};
View.prototype.setHeight = function () {
};
View.prototype.setHorizontalWrap = function () {
};
View.prototype.setKeepScreenOn = function () {
};
View.prototype.setLayout = function () {
};
View.prototype.setLeft = function () {
};
View.prototype.setLifecycleContainer = function () {
};
View.prototype.setOpacity = function () {
};
View.prototype.setPullBackgroundColor = function () {
};
View.prototype.setRight = function () {
};
View.prototype.setSoftKeyboardOnFocus = function () {
};
View.prototype.setTintColor = function () {
};
View.prototype.setTop = function () {
};
View.prototype.setTouchEnabled = function () {
};
View.prototype.setTransform = function () {
};
View.prototype.setViewShadowColor = function () {
};
View.prototype.setViewShadowOffset = function () {
};
View.prototype.setViewShadowRadius = function () {
};
View.prototype.setVisible = function () {
};
View.prototype.setWidth = function () {
};
View.prototype.setZIndex = function () {
};
View.prototype.show = function () {
};
View.prototype.startLayout = function () {
	throw new Error('Ti.UI.View.startLayout was deprecated, since 3.0.0');
};
View.prototype.toImage = function () {
	return {};
};
View.prototype.updateLayout = function () {
	throw new Error('Ti.UI.View.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new View(properties);
};