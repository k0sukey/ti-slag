var crypto = require('crypto');
function PickerRow(__SLAG__properties) {
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
			'focusable',
			'font',
			'fontSize',
			'height',
			'horizontalWrap',
			'keepScreenOn',
			'layout',
			'left',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'title',
			'top',
			'touchEnabled',
			'transform',
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
		throw new Error('Ti.UI.PickerRow.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.PickerRow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.PickerRow';
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
		throw new Error('Ti.UI.PickerRow.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.fontSize = __SLAG__properties.fontSize || 0;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.PickerRow.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.PickerRow.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
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
PickerRow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
PickerRow.prototype.addEventListener = function () {
};
PickerRow.prototype.animate = function () {
};
PickerRow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
PickerRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.PickerRow.finishLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.fireEvent = function () {
};
PickerRow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
PickerRow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
PickerRow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
PickerRow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
PickerRow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
PickerRow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
PickerRow.prototype.getApiName = function () {
	return this.apiName;
};
PickerRow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
PickerRow.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
PickerRow.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
PickerRow.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
PickerRow.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
PickerRow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
PickerRow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
PickerRow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
PickerRow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
PickerRow.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
PickerRow.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
PickerRow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
PickerRow.prototype.getBorderColor = function () {
	return this.borderColor;
};
PickerRow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
PickerRow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
PickerRow.prototype.getBottom = function () {
	return this.bottom;
};
PickerRow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PickerRow.prototype.getCenter = function () {
	return this.center;
};
PickerRow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
PickerRow.prototype.getChildren = function () {
	return this.children;
};
PickerRow.prototype.getClipMode = function () {
	return this.clipMode;
};
PickerRow.prototype.getColor = function () {
	return this.color;
};
PickerRow.prototype.getFocusable = function () {
	return this.focusable;
};
PickerRow.prototype.getFont = function () {
	return this.font;
};
PickerRow.prototype.getFontSize = function () {
	return this.fontSize;
};
PickerRow.prototype.getHeight = function () {
	return this.height;
};
PickerRow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
PickerRow.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
PickerRow.prototype.getLayout = function () {
	return this.layout;
};
PickerRow.prototype.getLeft = function () {
	return this.left;
};
PickerRow.prototype.getOpacity = function () {
	return this.opacity;
};
PickerRow.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
PickerRow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
PickerRow.prototype.getRect = function () {
	return this.rect;
};
PickerRow.prototype.getRight = function () {
	return this.right;
};
PickerRow.prototype.getSize = function () {
	return this.size;
};
PickerRow.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
PickerRow.prototype.getTintColor = function () {
	return this.tintColor;
};
PickerRow.prototype.getTitle = function () {
	return this.title;
};
PickerRow.prototype.getTop = function () {
	return this.top;
};
PickerRow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
PickerRow.prototype.getTransform = function () {
	return this.transform;
};
PickerRow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
PickerRow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
PickerRow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
PickerRow.prototype.getVisible = function () {
	return this.visible;
};
PickerRow.prototype.getWidth = function () {
	return this.width;
};
PickerRow.prototype.getZIndex = function () {
	return this.zIndex;
};
PickerRow.prototype.hide = function () {
};
PickerRow.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
PickerRow.prototype.removeAllChildren = function () {
};
PickerRow.prototype.removeEventListener = function () {
};
PickerRow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
PickerRow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
PickerRow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
PickerRow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
PickerRow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
PickerRow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
PickerRow.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
PickerRow.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
PickerRow.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
PickerRow.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
PickerRow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
PickerRow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
PickerRow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
PickerRow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
PickerRow.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
PickerRow.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
PickerRow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
PickerRow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
PickerRow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
PickerRow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
PickerRow.prototype.setBottom = function (property) {
	this.bottom = property;
};
PickerRow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PickerRow.prototype.setCenter = function (property) {
	this.center = property;
};
PickerRow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
PickerRow.prototype.setColor = function (property) {
	this.color = property;
};
PickerRow.prototype.setFocusable = function (property) {
	this.focusable = property;
};
PickerRow.prototype.setFont = function (property) {
	this.font = property;
};
PickerRow.prototype.setFontSize = function (property) {
	this.fontSize = property;
};
PickerRow.prototype.setHeight = function (property) {
	this.height = property;
};
PickerRow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
PickerRow.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
PickerRow.prototype.setLayout = function (property) {
	this.layout = property;
};
PickerRow.prototype.setLeft = function (property) {
	this.left = property;
};
PickerRow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
PickerRow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
PickerRow.prototype.setRight = function (property) {
	this.right = property;
};
PickerRow.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
PickerRow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
PickerRow.prototype.setTitle = function (property) {
	this.title = property;
};
PickerRow.prototype.setTop = function (property) {
	this.top = property;
};
PickerRow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
PickerRow.prototype.setTransform = function (property) {
	this.transform = property;
};
PickerRow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
PickerRow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
PickerRow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
PickerRow.prototype.setVisible = function (property) {
	this.visible = property;
};
PickerRow.prototype.setWidth = function (property) {
	this.width = property;
};
PickerRow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
PickerRow.prototype.show = function () {
};
PickerRow.prototype.startLayout = function () {
	throw new Error('Ti.UI.PickerRow.startLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.toImage = function () {
	return {};
};
PickerRow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.PickerRow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new PickerRow(properties);
};