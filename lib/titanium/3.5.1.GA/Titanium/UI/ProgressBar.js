var crypto = require('crypto');
function ProgressBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'color',
			'enabled',
			'focusable',
			'font',
			'height',
			'horizontalWrap',
			'keepScreenOn',
			'layout',
			'left',
			'max',
			'message',
			'min',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'size',
			'softKeyboardOnFocus',
			'style',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'value',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.ProgressBar.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.ProgressBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ProgressBar';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.ProgressBar.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.ProgressBar.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.max = __SLAG__properties.max || 0;
	this.message = __SLAG__properties.message || '';
	this.min = __SLAG__properties.min || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ProgressBar.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ProgressBar.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.style = __SLAG__properties.style || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ProgressBar.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ProgressBar.prototype.addEventListener = function () {
};
ProgressBar.prototype.animate = function () {
};
ProgressBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ProgressBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ProgressBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ProgressBar.finishLayout was deprecated, since 3.0.0');
};
ProgressBar.prototype.fireEvent = function () {
};
ProgressBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ProgressBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ProgressBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ProgressBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ProgressBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ProgressBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ProgressBar.prototype.getApiName = function () {
	return this.apiName;
};
ProgressBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ProgressBar.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ProgressBar.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ProgressBar.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ProgressBar.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ProgressBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ProgressBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ProgressBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ProgressBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ProgressBar.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ProgressBar.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ProgressBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ProgressBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
ProgressBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ProgressBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ProgressBar.prototype.getBottom = function () {
	return this.bottom;
};
ProgressBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProgressBar.prototype.getCenter = function () {
	return this.center;
};
ProgressBar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ProgressBar.prototype.getChildren = function () {
	return this.children;
};
ProgressBar.prototype.getClipMode = function () {
	return this.clipMode;
};
ProgressBar.prototype.getColor = function () {
	return this.color;
};
ProgressBar.prototype.getEnabled = function () {
	throw new Error('Ti.UI.ProgressBar.getEnabled was deprecated, since 3.3.0');
};
ProgressBar.prototype.getFocusable = function () {
	return this.focusable;
};
ProgressBar.prototype.getFont = function () {
	return this.font;
};
ProgressBar.prototype.getHeight = function () {
	return this.height;
};
ProgressBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ProgressBar.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ProgressBar.prototype.getLayout = function () {
	return this.layout;
};
ProgressBar.prototype.getLeft = function () {
	return this.left;
};
ProgressBar.prototype.getMax = function () {
	return this.max;
};
ProgressBar.prototype.getMessage = function () {
	return this.message;
};
ProgressBar.prototype.getMin = function () {
	return this.min;
};
ProgressBar.prototype.getOpacity = function () {
	return this.opacity;
};
ProgressBar.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ProgressBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ProgressBar.prototype.getRect = function () {
	return this.rect;
};
ProgressBar.prototype.getRight = function () {
	return this.right;
};
ProgressBar.prototype.getSize = function () {
	return this.size;
};
ProgressBar.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ProgressBar.prototype.getStyle = function () {
	return this.style;
};
ProgressBar.prototype.getTintColor = function () {
	return this.tintColor;
};
ProgressBar.prototype.getTop = function () {
	return this.top;
};
ProgressBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ProgressBar.prototype.getTransform = function () {
	return this.transform;
};
ProgressBar.prototype.getValue = function () {
	return this.value;
};
ProgressBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ProgressBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ProgressBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ProgressBar.prototype.getVisible = function () {
	return this.visible;
};
ProgressBar.prototype.getWidth = function () {
	return this.width;
};
ProgressBar.prototype.getZIndex = function () {
	return this.zIndex;
};
ProgressBar.prototype.hide = function () {
};
ProgressBar.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ProgressBar.prototype.removeAllChildren = function () {
};
ProgressBar.prototype.removeEventListener = function () {
};
ProgressBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ProgressBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ProgressBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ProgressBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ProgressBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ProgressBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ProgressBar.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ProgressBar.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ProgressBar.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ProgressBar.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ProgressBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ProgressBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ProgressBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ProgressBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ProgressBar.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ProgressBar.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ProgressBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ProgressBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ProgressBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ProgressBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ProgressBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
ProgressBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ProgressBar.prototype.setCenter = function (property) {
	this.center = property;
};
ProgressBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ProgressBar.prototype.setColor = function (property) {
	this.color = property;
};
ProgressBar.prototype.setEnabled = function () {
	throw new Error('Ti.UI.ProgressBar.setEnabled was deprecated, since 3.3.0');
};
ProgressBar.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ProgressBar.prototype.setFont = function (property) {
	this.font = property;
};
ProgressBar.prototype.setHeight = function (property) {
	this.height = property;
};
ProgressBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ProgressBar.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ProgressBar.prototype.setLayout = function (property) {
	this.layout = property;
};
ProgressBar.prototype.setLeft = function (property) {
	this.left = property;
};
ProgressBar.prototype.setMax = function (property) {
	this.max = property;
};
ProgressBar.prototype.setMessage = function (property) {
	this.message = property;
};
ProgressBar.prototype.setMin = function (property) {
	this.min = property;
};
ProgressBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ProgressBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ProgressBar.prototype.setRight = function (property) {
	this.right = property;
};
ProgressBar.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ProgressBar.prototype.setStyle = function (property) {
	this.style = property;
};
ProgressBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ProgressBar.prototype.setTop = function (property) {
	this.top = property;
};
ProgressBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ProgressBar.prototype.setTransform = function (property) {
	this.transform = property;
};
ProgressBar.prototype.setValue = function (property) {
	this.value = property;
};
ProgressBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ProgressBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ProgressBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ProgressBar.prototype.setVisible = function (property) {
	this.visible = property;
};
ProgressBar.prototype.setWidth = function (property) {
	this.width = property;
};
ProgressBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ProgressBar.prototype.show = function () {
};
ProgressBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.ProgressBar.startLayout was deprecated, since 3.0.0');
};
ProgressBar.prototype.toImage = function () {
	return {};
};
ProgressBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ProgressBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ProgressBar(properties);
};