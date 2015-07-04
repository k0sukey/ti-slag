function LoginButton(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.Facebook.LoginButton';
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
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.tintColor = properties.tintColor || undefined;
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
LoginButton.prototype.add = function () {
};
LoginButton.prototype.addEventListener = function () {
};
LoginButton.prototype.animate = function () {
};
LoginButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LoginButton.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.finishLayout = function () {
	throw new Error('Ti.Facebook.LoginButton.finishLayout was deprecated, since 3.0.0');
};
LoginButton.prototype.fireEvent = function () {
};
LoginButton.prototype.getAccessibilityHidden = function () {
	return true;
};
LoginButton.prototype.getAccessibilityHint = function () {
	return '';
};
LoginButton.prototype.getAccessibilityLabel = function () {
	return '';
};
LoginButton.prototype.getAccessibilityValue = function () {
	return '';
};
LoginButton.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.getApiName = function () {
	return '';
};
LoginButton.prototype.getBackgroundColor = function () {
	return '';
};
LoginButton.prototype.getBackgroundDisabledColor = function () {
	return '';
};
LoginButton.prototype.getBackgroundDisabledImage = function () {
	return '';
};
LoginButton.prototype.getBackgroundFocusedColor = function () {
	return '';
};
LoginButton.prototype.getBackgroundFocusedImage = function () {
	return '';
};
LoginButton.prototype.getBackgroundGradient = function () {
	return {};
};
LoginButton.prototype.getBackgroundImage = function () {
	return '';
};
LoginButton.prototype.getBackgroundLeftCap = function () {
	return 0;
};
LoginButton.prototype.getBackgroundRepeat = function () {
	return true;
};
LoginButton.prototype.getBackgroundSelectedColor = function () {
	return '';
};
LoginButton.prototype.getBackgroundSelectedImage = function () {
	return '';
};
LoginButton.prototype.getBackgroundTopCap = function () {
	return 0;
};
LoginButton.prototype.getBorderColor = function () {
	return '';
};
LoginButton.prototype.getBorderRadius = function () {
	return 0;
};
LoginButton.prototype.getBorderWidth = function () {
	return 0;
};
LoginButton.prototype.getBottom = function () {
	return 0;
};
LoginButton.prototype.getBubbleParent = function () {
	return true;
};
LoginButton.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.getChildren = function () {
	return [];
};
LoginButton.prototype.getClipMode = function () {
	return 0;
};
LoginButton.prototype.getFocusable = function () {
	return true;
};
LoginButton.prototype.getHeight = function () {
	return 0;
};
LoginButton.prototype.getHorizontalWrap = function () {
	return true;
};
LoginButton.prototype.getKeepScreenOn = function () {
	return true;
};
LoginButton.prototype.getLayout = function () {
	return '';
};
LoginButton.prototype.getLeft = function () {
	return 0;
};
LoginButton.prototype.getLifecycleContainer = function () {
	return {};
};
LoginButton.prototype.getOpacity = function () {
	return 0;
};
LoginButton.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
LoginButton.prototype.getPullBackgroundColor = function () {
	return '';
};
LoginButton.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
LoginButton.prototype.getRight = function () {
	return 0;
};
LoginButton.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
LoginButton.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
LoginButton.prototype.getStyle = function () {
	return '';
};
LoginButton.prototype.getTintColor = function () {
	return '';
};
LoginButton.prototype.getTop = function () {
	return 0;
};
LoginButton.prototype.getTouchEnabled = function () {
	return true;
};
LoginButton.prototype.getTransform = function () {
	return {};
};
LoginButton.prototype.getViewShadowColor = function () {
	return '';
};
LoginButton.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.getViewShadowRadius = function () {
	return 0;
};
LoginButton.prototype.getVisible = function () {
	return true;
};
LoginButton.prototype.getWidth = function () {
	return 0;
};
LoginButton.prototype.getZIndex = function () {
	return 0;
};
LoginButton.prototype.hide = function () {
};
LoginButton.prototype.remove = function () {
};
LoginButton.prototype.removeAllChildren = function () {
};
LoginButton.prototype.removeEventListener = function () {
};
LoginButton.prototype.setAccessibilityHidden = function () {
};
LoginButton.prototype.setAccessibilityHint = function () {
};
LoginButton.prototype.setAccessibilityLabel = function () {
};
LoginButton.prototype.setAccessibilityValue = function () {
};
LoginButton.prototype.setAnchorPoint = function () {
};
LoginButton.prototype.setBackgroundColor = function () {
};
LoginButton.prototype.setBackgroundDisabledColor = function () {
};
LoginButton.prototype.setBackgroundDisabledImage = function () {
};
LoginButton.prototype.setBackgroundFocusedColor = function () {
};
LoginButton.prototype.setBackgroundFocusedImage = function () {
};
LoginButton.prototype.setBackgroundGradient = function () {
};
LoginButton.prototype.setBackgroundImage = function () {
};
LoginButton.prototype.setBackgroundLeftCap = function () {
};
LoginButton.prototype.setBackgroundRepeat = function () {
};
LoginButton.prototype.setBackgroundSelectedColor = function () {
};
LoginButton.prototype.setBackgroundSelectedImage = function () {
};
LoginButton.prototype.setBackgroundTopCap = function () {
};
LoginButton.prototype.setBorderColor = function () {
};
LoginButton.prototype.setBorderRadius = function () {
};
LoginButton.prototype.setBorderWidth = function () {
};
LoginButton.prototype.setBottom = function () {
};
LoginButton.prototype.setBubbleParent = function () {
};
LoginButton.prototype.setCenter = function () {
};
LoginButton.prototype.setClipMode = function () {
};
LoginButton.prototype.setFocusable = function () {
};
LoginButton.prototype.setHeight = function () {
};
LoginButton.prototype.setHorizontalWrap = function () {
};
LoginButton.prototype.setKeepScreenOn = function () {
};
LoginButton.prototype.setLayout = function () {
};
LoginButton.prototype.setLeft = function () {
};
LoginButton.prototype.setLifecycleContainer = function () {
};
LoginButton.prototype.setOpacity = function () {
};
LoginButton.prototype.setPullBackgroundColor = function () {
};
LoginButton.prototype.setRight = function () {
};
LoginButton.prototype.setSoftKeyboardOnFocus = function () {
};
LoginButton.prototype.setStyle = function () {
};
LoginButton.prototype.setTintColor = function () {
};
LoginButton.prototype.setTop = function () {
};
LoginButton.prototype.setTouchEnabled = function () {
};
LoginButton.prototype.setTransform = function () {
};
LoginButton.prototype.setViewShadowColor = function () {
};
LoginButton.prototype.setViewShadowOffset = function () {
};
LoginButton.prototype.setViewShadowRadius = function () {
};
LoginButton.prototype.setVisible = function () {
};
LoginButton.prototype.setWidth = function () {
};
LoginButton.prototype.setZIndex = function () {
};
LoginButton.prototype.show = function () {
};
LoginButton.prototype.startLayout = function () {
	throw new Error('Ti.Facebook.LoginButton.startLayout was deprecated, since 3.0.0');
};
LoginButton.prototype.toImage = function () {
	return {};
};
LoginButton.prototype.updateLayout = function () {
	throw new Error('Ti.Facebook.LoginButton.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new LoginButton(properties);
};