function LoginButton(properties) {
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
	this.apiName = 'Ti.Facebook.LoginButton';
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
	this.style = properties.style || '';
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