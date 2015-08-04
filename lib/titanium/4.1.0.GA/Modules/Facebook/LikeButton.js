var crypto = require('crypto');
function LikeButton(__SLAG__properties) {
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
			'auxiliaryViewPosition',
			'foregroundColor',
			'horizontalAlign',
			'likeViewButton',
			'objectId',
			'objectType',
			'soundEnabled',
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
		throw new Error('Modules.Facebook.LikeButton.apiName is read only property');
	}
	this.apiName = 'Modules.Facebook.LikeButton';
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
		throw new Error('Modules.Facebook.LikeButton.animatedCenter is read only property');
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
		throw new Error('Modules.Facebook.LikeButton.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Modules.Facebook.LikeButton.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Modules.Facebook.LikeButton.size is read only property');
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
	this.auxiliaryViewPosition = __SLAG__properties.auxiliaryViewPosition || '';
	this.foregroundColor = __SLAG__properties.foregroundColor || '';
	this.horizontalAlign = __SLAG__properties.horizontalAlign || '';
	this.likeViewButton = __SLAG__properties.likeViewButton || '';
	this.objectId = __SLAG__properties.objectId || '';
	this.objectType = __SLAG__properties.objectType || '';
	this.soundEnabled = __SLAG__properties.soundEnabled || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
LikeButton.prototype.addEventListener = function () {
};
LikeButton.prototype.removeEventListener = function () {
};
LikeButton.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
LikeButton.prototype.fireEvent = function () {
};
LikeButton.prototype.finishLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.finishLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.removeAllChildren = function () {
};
LikeButton.prototype.startLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.startLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.toImage = function () {
	return {};
};
LikeButton.prototype.updateLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.updateLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
LikeButton.prototype.animate = function () {
};
LikeButton.prototype.hide = function () {
};
LikeButton.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
LikeButton.prototype.show = function () {
};
LikeButton.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LikeButton.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
LikeButton.prototype.getApiName = function () {
	return this.apiName;
};
LikeButton.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
LikeButton.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
LikeButton.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
LikeButton.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
LikeButton.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
LikeButton.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
LikeButton.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
LikeButton.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
LikeButton.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
LikeButton.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
LikeButton.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
LikeButton.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
LikeButton.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
LikeButton.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
LikeButton.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
LikeButton.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
LikeButton.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
LikeButton.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
LikeButton.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
LikeButton.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
LikeButton.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
LikeButton.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
LikeButton.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
LikeButton.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
LikeButton.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
LikeButton.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
LikeButton.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
LikeButton.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
LikeButton.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
LikeButton.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
LikeButton.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
LikeButton.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
LikeButton.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
LikeButton.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
LikeButton.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
LikeButton.prototype.getClipMode = function () {
	return this.clipMode;
};
LikeButton.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
LikeButton.prototype.getFocusable = function () {
	return this.focusable;
};
LikeButton.prototype.setFocusable = function (property) {
	this.focusable = property;
};
LikeButton.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
LikeButton.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
LikeButton.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
LikeButton.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
LikeButton.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
LikeButton.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
LikeButton.prototype.getTransform = function () {
	return this.transform;
};
LikeButton.prototype.setTransform = function (property) {
	this.transform = property;
};
LikeButton.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
LikeButton.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
LikeButton.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
LikeButton.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
LikeButton.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
LikeButton.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
LikeButton.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
LikeButton.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
LikeButton.prototype.getZIndex = function () {
	return this.zIndex;
};
LikeButton.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
LikeButton.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
LikeButton.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
LikeButton.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
LikeButton.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
LikeButton.prototype.getBorderColor = function () {
	return this.borderColor;
};
LikeButton.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
LikeButton.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
LikeButton.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
LikeButton.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
LikeButton.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
LikeButton.prototype.getBottom = function () {
	return this.bottom;
};
LikeButton.prototype.setBottom = function (property) {
	this.bottom = property;
};
LikeButton.prototype.getCenter = function () {
	return this.center;
};
LikeButton.prototype.setCenter = function (property) {
	this.center = property;
};
LikeButton.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
LikeButton.prototype.getChildren = function () {
	return this.children;
};
LikeButton.prototype.getHeight = function () {
	return this.height;
};
LikeButton.prototype.setHeight = function (property) {
	this.height = property;
};
LikeButton.prototype.getLayout = function () {
	return this.layout;
};
LikeButton.prototype.setLayout = function (property) {
	this.layout = property;
};
LikeButton.prototype.getLeft = function () {
	return this.left;
};
LikeButton.prototype.setLeft = function (property) {
	this.left = property;
};
LikeButton.prototype.getOpacity = function () {
	return this.opacity;
};
LikeButton.prototype.setOpacity = function (property) {
	this.opacity = property;
};
LikeButton.prototype.getRect = function () {
	return this.rect;
};
LikeButton.prototype.getRight = function () {
	return this.right;
};
LikeButton.prototype.setRight = function (property) {
	this.right = property;
};
LikeButton.prototype.getSize = function () {
	return this.size;
};
LikeButton.prototype.getTintColor = function () {
	return this.tintColor;
};
LikeButton.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
LikeButton.prototype.getTop = function () {
	return this.top;
};
LikeButton.prototype.setTop = function (property) {
	this.top = property;
};
LikeButton.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
LikeButton.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
LikeButton.prototype.getVisible = function () {
	return this.visible;
};
LikeButton.prototype.setVisible = function (property) {
	this.visible = property;
};
LikeButton.prototype.getWidth = function () {
	return this.width;
};
LikeButton.prototype.setWidth = function (property) {
	this.width = property;
};
LikeButton.prototype.getAuxiliaryViewPosition = function () {
	return this.auxiliaryViewPosition;
};
LikeButton.prototype.setAuxiliaryViewPosition = function (property) {
	this.auxiliaryViewPosition = property;
};
LikeButton.prototype.getForegroundColor = function () {
	return this.foregroundColor;
};
LikeButton.prototype.setForegroundColor = function (property) {
	this.foregroundColor = property;
};
LikeButton.prototype.getHorizontalAlign = function () {
	return this.horizontalAlign;
};
LikeButton.prototype.setHorizontalAlign = function (property) {
	this.horizontalAlign = property;
};
LikeButton.prototype.getLikeViewButton = function () {
	return this.likeViewButton;
};
LikeButton.prototype.setLikeViewButton = function (property) {
	this.likeViewButton = property;
};
LikeButton.prototype.getObjectId = function () {
	return this.objectId;
};
LikeButton.prototype.setObjectId = function (property) {
	this.objectId = property;
};
LikeButton.prototype.getObjectType = function () {
	return this.objectType;
};
LikeButton.prototype.setObjectType = function (property) {
	this.objectType = property;
};
LikeButton.prototype.getSoundEnabled = function () {
	return this.soundEnabled;
};
LikeButton.prototype.setSoundEnabled = function (property) {
	this.soundEnabled = property;
};
module.exports = function (properties) {
	return new LikeButton(properties);
};