var crypto = require('crypto');
function Notification(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'duration',
			'enabled',
			'focusable',
			'height',
			'horizontalMargin',
			'horizontalWrap',
			'keepScreenOn',
			'layout',
			'left',
			'message',
			'opacity',
			'overrideCurrentAnimation',
			'rect',
			'right',
			'size',
			'softKeyboardOnFocus',
			'top',
			'touchEnabled',
			'transform',
			'verticalMargin',
			'visible',
			'width',
			'xOffset',
			'yOffset',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Notification.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Notification';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
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
		throw new Error('Ti.UI.Notification.children is read only property');
	}
	this.children = [];
	this.duration = __SLAG__properties.duration || 0;
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.Notification.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.height = __SLAG__properties.height || 0;
	this.horizontalMargin = __SLAG__properties.horizontalMargin || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.message = __SLAG__properties.message || '';
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Notification.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Notification.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.verticalMargin = __SLAG__properties.verticalMargin || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.xOffset = __SLAG__properties.xOffset || 0;
	this.yOffset = __SLAG__properties.yOffset || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Notification.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Notification.prototype.addEventListener = function () {
};
Notification.prototype.animate = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Notification.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Notification.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Notification.finishLayout was deprecated, since 3.0.0');
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Notification.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Notification.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Notification.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Notification.prototype.getApiName = function () {
	return this.apiName;
};
Notification.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Notification.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Notification.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Notification.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Notification.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Notification.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Notification.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Notification.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Notification.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Notification.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Notification.prototype.getBorderColor = function () {
	return this.borderColor;
};
Notification.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Notification.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Notification.prototype.getBottom = function () {
	return this.bottom;
};
Notification.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Notification.prototype.getCenter = function () {
	return this.center;
};
Notification.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Notification.prototype.getChildren = function () {
	return this.children;
};
Notification.prototype.getDuration = function () {
	return this.duration;
};
Notification.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Notification.getEnabled was deprecated, since 3.3.0');
};
Notification.prototype.getFocusable = function () {
	return this.focusable;
};
Notification.prototype.getHeight = function () {
	return this.height;
};
Notification.prototype.getHorizontalMargin = function () {
	return this.horizontalMargin;
};
Notification.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Notification.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Notification.prototype.getLayout = function () {
	return this.layout;
};
Notification.prototype.getLeft = function () {
	return this.left;
};
Notification.prototype.getMessage = function () {
	return this.message;
};
Notification.prototype.getOpacity = function () {
	return this.opacity;
};
Notification.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Notification.prototype.getRect = function () {
	return this.rect;
};
Notification.prototype.getRight = function () {
	return this.right;
};
Notification.prototype.getSize = function () {
	return this.size;
};
Notification.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Notification.prototype.getTop = function () {
	return this.top;
};
Notification.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Notification.prototype.getTransform = function () {
	return this.transform;
};
Notification.prototype.getVerticalMargin = function () {
	return this.verticalMargin;
};
Notification.prototype.getVisible = function () {
	return this.visible;
};
Notification.prototype.getWidth = function () {
	return this.width;
};
Notification.prototype.getXOffset = function () {
	return this.xOffset;
};
Notification.prototype.getYOffset = function () {
	return this.yOffset;
};
Notification.prototype.getZIndex = function () {
	return this.zIndex;
};
Notification.prototype.hide = function () {
};
Notification.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Notification.prototype.removeAllChildren = function () {
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Notification.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Notification.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Notification.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Notification.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Notification.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Notification.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Notification.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Notification.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Notification.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Notification.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Notification.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Notification.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Notification.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Notification.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Notification.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Notification.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Notification.prototype.setBottom = function (property) {
	this.bottom = property;
};
Notification.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Notification.prototype.setCenter = function (property) {
	this.center = property;
};
Notification.prototype.setDuration = function (property) {
	this.duration = property;
};
Notification.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Notification.setEnabled was deprecated, since 3.3.0');
};
Notification.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Notification.prototype.setHeight = function (property) {
	this.height = property;
};
Notification.prototype.setHorizontalMargin = function (property) {
	this.horizontalMargin = property;
};
Notification.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Notification.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Notification.prototype.setLayout = function (property) {
	this.layout = property;
};
Notification.prototype.setLeft = function (property) {
	this.left = property;
};
Notification.prototype.setMessage = function (property) {
	this.message = property;
};
Notification.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Notification.prototype.setRight = function (property) {
	this.right = property;
};
Notification.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Notification.prototype.setTop = function (property) {
	this.top = property;
};
Notification.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Notification.prototype.setTransform = function (property) {
	this.transform = property;
};
Notification.prototype.setVerticalMargin = function (property) {
	this.verticalMargin = property;
};
Notification.prototype.setVisible = function (property) {
	this.visible = property;
};
Notification.prototype.setWidth = function (property) {
	this.width = property;
};
Notification.prototype.setXOffset = function (property) {
	this.xOffset = property;
};
Notification.prototype.setYOffset = function (property) {
	this.yOffset = property;
};
Notification.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Notification.prototype.show = function () {
};
Notification.prototype.startLayout = function () {
	throw new Error('Ti.UI.Notification.startLayout was deprecated, since 3.0.0');
};
Notification.prototype.toImage = function () {
	return {};
};
Notification.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Notification.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Notification(properties);
};