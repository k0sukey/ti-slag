function LoginButton(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Facebook.LoginButton';
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
	this.audience = properties.audience || 0;
	this.readPermissions = properties.readPermissions || '';
	this.publishPermissions = properties.publishPermissions || '';
	this.sessionLoginBehavior = properties.sessionLoginBehavior || 0;
	if (properties.style) {
		throw new Error('Modules.Facebook.LoginButton.style was deprecated, since 4.0.0');
	}
	return this;
}
LoginButton.prototype.addEventListener = function () {
};
LoginButton.prototype.removeEventListener = function () {
};
LoginButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LoginButton.prototype.fireEvent = function () {
};
LoginButton.prototype.finishLayout = function () {
	throw new Error('Modules.Facebook.LoginButton.finishLayout was deprecated, since 3.0.0');
};
LoginButton.prototype.removeAllChildren = function () {
};
LoginButton.prototype.startLayout = function () {
	throw new Error('Modules.Facebook.LoginButton.startLayout was deprecated, since 3.0.0');
};
LoginButton.prototype.toImage = function () {
	return {};
};
LoginButton.prototype.updateLayout = function () {
	throw new Error('Modules.Facebook.LoginButton.updateLayout was deprecated, since 3.0.0');
};
LoginButton.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.add = function () {
};
LoginButton.prototype.animate = function () {
};
LoginButton.prototype.hide = function () {
};
LoginButton.prototype.remove = function () {
};
LoginButton.prototype.show = function () {
};
LoginButton.prototype.getBubbleParent = function () {
	return true;
};
LoginButton.prototype.setBubbleParent = function () {
};
LoginButton.prototype.getApiName = function () {
	return '';
};
LoginButton.prototype.getLifecycleContainer = function () {
	return {};
};
LoginButton.prototype.setLifecycleContainer = function () {
};
LoginButton.prototype.getAccessibilityHidden = function () {
	return true;
};
LoginButton.prototype.setAccessibilityHidden = function () {
};
LoginButton.prototype.getAccessibilityHint = function () {
	return '';
};
LoginButton.prototype.setAccessibilityHint = function () {
};
LoginButton.prototype.getAccessibilityLabel = function () {
	return '';
};
LoginButton.prototype.setAccessibilityLabel = function () {
};
LoginButton.prototype.getAccessibilityValue = function () {
	return '';
};
LoginButton.prototype.setAccessibilityValue = function () {
};
LoginButton.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.setAnchorPoint = function () {
};
LoginButton.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.getBackgroundDisabledColor = function () {
	return '';
};
LoginButton.prototype.setBackgroundDisabledColor = function () {
};
LoginButton.prototype.getBackgroundDisabledImage = function () {
	return '';
};
LoginButton.prototype.setBackgroundDisabledImage = function () {
};
LoginButton.prototype.getBackgroundFocusedColor = function () {
	return '';
};
LoginButton.prototype.setBackgroundFocusedColor = function () {
};
LoginButton.prototype.getBackgroundFocusedImage = function () {
	return '';
};
LoginButton.prototype.setBackgroundFocusedImage = function () {
};
LoginButton.prototype.getBackgroundGradient = function () {
	return {};
};
LoginButton.prototype.setBackgroundGradient = function () {
};
LoginButton.prototype.getBackgroundImage = function () {
	return '';
};
LoginButton.prototype.setBackgroundImage = function () {
};
LoginButton.prototype.getBackgroundRepeat = function () {
	return true;
};
LoginButton.prototype.setBackgroundRepeat = function () {
};
LoginButton.prototype.getBackgroundLeftCap = function () {
	return 0;
};
LoginButton.prototype.setBackgroundLeftCap = function () {
};
LoginButton.prototype.getBackgroundSelectedColor = function () {
	return '';
};
LoginButton.prototype.setBackgroundSelectedColor = function () {
};
LoginButton.prototype.getBackgroundSelectedImage = function () {
	return '';
};
LoginButton.prototype.setBackgroundSelectedImage = function () {
};
LoginButton.prototype.getBackgroundTopCap = function () {
	return 0;
};
LoginButton.prototype.setBackgroundTopCap = function () {
};
LoginButton.prototype.getClipMode = function () {
	return 0;
};
LoginButton.prototype.setClipMode = function () {
};
LoginButton.prototype.getFocusable = function () {
	return true;
};
LoginButton.prototype.setFocusable = function () {
};
LoginButton.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
LoginButton.prototype.setOverrideCurrentAnimation = function () {
};
LoginButton.prototype.getPullBackgroundColor = function () {
	return '';
};
LoginButton.prototype.setPullBackgroundColor = function () {
};
LoginButton.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
LoginButton.prototype.setSoftKeyboardOnFocus = function () {
};
LoginButton.prototype.getTransform = function () {
	return {};
};
LoginButton.prototype.setTransform = function () {
};
LoginButton.prototype.getViewShadowRadius = function () {
	return 0;
};
LoginButton.prototype.setViewShadowRadius = function () {
};
LoginButton.prototype.getViewShadowColor = function () {
	return '';
};
LoginButton.prototype.setViewShadowColor = function () {
};
LoginButton.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.setViewShadowOffset = function () {
};
LoginButton.prototype.getHorizontalWrap = function () {
	return true;
};
LoginButton.prototype.setHorizontalWrap = function () {
};
LoginButton.prototype.getZIndex = function () {
	return 0;
};
LoginButton.prototype.setZIndex = function () {
};
LoginButton.prototype.getKeepScreenOn = function () {
	return true;
};
LoginButton.prototype.setKeepScreenOn = function () {
};
LoginButton.prototype.getBackgroundColor = function () {
	return '';
};
LoginButton.prototype.setBackgroundColor = function () {
};
LoginButton.prototype.getBorderColor = function () {
	return '';
};
LoginButton.prototype.setBorderColor = function () {
};
LoginButton.prototype.getBorderRadius = function () {
	return 0;
};
LoginButton.prototype.setBorderRadius = function () {
};
LoginButton.prototype.getBorderWidth = function () {
	return 0;
};
LoginButton.prototype.setBorderWidth = function () {
};
LoginButton.prototype.getBottom = function () {
	return '';
};
LoginButton.prototype.setBottom = function () {
};
LoginButton.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LoginButton.prototype.setCenter = function () {
};
LoginButton.prototype.getChildren = function () {
	return [];
};
LoginButton.prototype.getHeight = function () {
	return '';
};
LoginButton.prototype.setHeight = function () {
};
LoginButton.prototype.getLayout = function () {
	return '';
};
LoginButton.prototype.setLayout = function () {
};
LoginButton.prototype.getLeft = function () {
	return '';
};
LoginButton.prototype.setLeft = function () {
};
LoginButton.prototype.getOpacity = function () {
	return 0;
};
LoginButton.prototype.setOpacity = function () {
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
	return '';
};
LoginButton.prototype.setRight = function () {
};
LoginButton.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
LoginButton.prototype.getTintColor = function () {
	return '';
};
LoginButton.prototype.setTintColor = function () {
};
LoginButton.prototype.getTop = function () {
	return '';
};
LoginButton.prototype.setTop = function () {
};
LoginButton.prototype.getTouchEnabled = function () {
	return true;
};
LoginButton.prototype.setTouchEnabled = function () {
};
LoginButton.prototype.getVisible = function () {
	return true;
};
LoginButton.prototype.setVisible = function () {
};
LoginButton.prototype.getWidth = function () {
	return '';
};
LoginButton.prototype.setWidth = function () {
};
LoginButton.prototype.getAudience = function () {
	return 0;
};
LoginButton.prototype.setAudience = function () {
};
LoginButton.prototype.getReadPermissions = function () {
	return '';
};
LoginButton.prototype.setReadPermissions = function () {
};
LoginButton.prototype.getPublishPermissions = function () {
	return '';
};
LoginButton.prototype.setPublishPermissions = function () {
};
LoginButton.prototype.getSessionLoginBehavior = function () {
	return 0;
};
LoginButton.prototype.setSessionLoginBehavior = function () {
};
LoginButton.prototype.getStyle = function () {
	throw new Error('Modules.Facebook.LoginButton.getStyle was deprecated, since 4.0.0');
};
LoginButton.prototype.setStyle = function () {
	throw new Error('Modules.Facebook.LoginButton.setStyle was deprecated, since 4.0.0');
};
module.exports = function (properties) {
	return new LoginButton(properties);
};