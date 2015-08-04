var crypto = require('crypto');
function LoginButton(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'clipMode',
			'focusable',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'softKeyboardOnFocus',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'zIndex',
			'keepScreenOn',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'height',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'audience',
			'readPermissions',
			'publishPermissions',
			'sessionLoginBehavior',
			'style',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Facebook.LoginButton.apiName is read only property');
	}
	this.apiName = 'Modules.Facebook.LoginButton';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Modules.Facebook.LoginButton.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Modules.Facebook.LoginButton.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Modules.Facebook.LoginButton.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Modules.Facebook.LoginButton.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.audience = __SLAG__properties.audience || 0;
	this.readPermissions = __SLAG__properties.readPermissions || '';
	this.publishPermissions = __SLAG__properties.publishPermissions || '';
	this.sessionLoginBehavior = __SLAG__properties.sessionLoginBehavior || 0;
	if (__SLAG__properties.style) {
		throw new Error('Modules.Facebook.LoginButton.style was deprecated, since 4.0.0');
	}
	this.id = __SLAG__properties.id || '';
	return this;
}
LoginButton.prototype.addEventListener = function () {
};
LoginButton.prototype.removeEventListener = function () {
};
LoginButton.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
LoginButton.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
LoginButton.prototype.animate = function () {
};
LoginButton.prototype.hide = function () {
};
LoginButton.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
LoginButton.prototype.show = function () {
};
LoginButton.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LoginButton.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LoginButton.prototype.getApiName = function () {
	return this.apiName;
};
LoginButton.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
LoginButton.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
LoginButton.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
LoginButton.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
LoginButton.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
LoginButton.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
LoginButton.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
LoginButton.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
LoginButton.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
LoginButton.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
LoginButton.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
LoginButton.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
LoginButton.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
LoginButton.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
LoginButton.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
LoginButton.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
LoginButton.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
LoginButton.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
LoginButton.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
LoginButton.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
LoginButton.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
LoginButton.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
LoginButton.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
LoginButton.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
LoginButton.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
LoginButton.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
LoginButton.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
LoginButton.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
LoginButton.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
LoginButton.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
LoginButton.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
LoginButton.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
LoginButton.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
LoginButton.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
LoginButton.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
LoginButton.prototype.getClipMode = function () {
	return this.clipMode;
};
LoginButton.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
LoginButton.prototype.getFocusable = function () {
	return this.focusable;
};
LoginButton.prototype.setFocusable = function (property) {
	this.focusable = property;
};
LoginButton.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
LoginButton.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
LoginButton.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
LoginButton.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
LoginButton.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
LoginButton.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
LoginButton.prototype.getTransform = function () {
	return this.transform;
};
LoginButton.prototype.setTransform = function (property) {
	this.transform = property;
};
LoginButton.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
LoginButton.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
LoginButton.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
LoginButton.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
LoginButton.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
LoginButton.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
LoginButton.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
LoginButton.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
LoginButton.prototype.getZIndex = function () {
	return this.zIndex;
};
LoginButton.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
LoginButton.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
LoginButton.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
LoginButton.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
LoginButton.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
LoginButton.prototype.getBorderColor = function () {
	return this.borderColor;
};
LoginButton.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
LoginButton.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
LoginButton.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
LoginButton.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
LoginButton.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
LoginButton.prototype.getBottom = function () {
	return this.bottom;
};
LoginButton.prototype.setBottom = function (property) {
	this.bottom = property;
};
LoginButton.prototype.getCenter = function () {
	return this.center;
};
LoginButton.prototype.setCenter = function (property) {
	this.center = property;
};
LoginButton.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
LoginButton.prototype.getChildren = function () {
	return this.children;
};
LoginButton.prototype.getHeight = function () {
	return this.height;
};
LoginButton.prototype.setHeight = function (property) {
	this.height = property;
};
LoginButton.prototype.getLayout = function () {
	return this.layout;
};
LoginButton.prototype.setLayout = function (property) {
	this.layout = property;
};
LoginButton.prototype.getLeft = function () {
	return this.left;
};
LoginButton.prototype.setLeft = function (property) {
	this.left = property;
};
LoginButton.prototype.getOpacity = function () {
	return this.opacity;
};
LoginButton.prototype.setOpacity = function (property) {
	this.opacity = property;
};
LoginButton.prototype.getRect = function () {
	return this.rect;
};
LoginButton.prototype.getRight = function () {
	return this.right;
};
LoginButton.prototype.setRight = function (property) {
	this.right = property;
};
LoginButton.prototype.getSize = function () {
	return this.size;
};
LoginButton.prototype.getTintColor = function () {
	return this.tintColor;
};
LoginButton.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
LoginButton.prototype.getTop = function () {
	return this.top;
};
LoginButton.prototype.setTop = function (property) {
	this.top = property;
};
LoginButton.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
LoginButton.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
LoginButton.prototype.getVisible = function () {
	return this.visible;
};
LoginButton.prototype.setVisible = function (property) {
	this.visible = property;
};
LoginButton.prototype.getWidth = function () {
	return this.width;
};
LoginButton.prototype.setWidth = function (property) {
	this.width = property;
};
LoginButton.prototype.getAudience = function () {
	return this.audience;
};
LoginButton.prototype.setAudience = function (property) {
	this.audience = property;
};
LoginButton.prototype.getReadPermissions = function () {
	return this.readPermissions;
};
LoginButton.prototype.setReadPermissions = function (property) {
	this.readPermissions = property;
};
LoginButton.prototype.getPublishPermissions = function () {
	return this.publishPermissions;
};
LoginButton.prototype.setPublishPermissions = function (property) {
	this.publishPermissions = property;
};
LoginButton.prototype.getSessionLoginBehavior = function () {
	return this.sessionLoginBehavior;
};
LoginButton.prototype.setSessionLoginBehavior = function (property) {
	this.sessionLoginBehavior = property;
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