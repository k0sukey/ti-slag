var crypto = require('crypto');
function PickerRow(__SLAG__properties) {
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
			'color',
			'font',
			'title',
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
		throw new Error('Ti.UI.PickerRow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.PickerRow';
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
		throw new Error('Ti.UI.PickerRow.animatedCenter is read only property');
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
		throw new Error('Ti.UI.PickerRow.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
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
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.color = __SLAG__properties.color || '';
	this.font = __SLAG__properties.font || {};
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
PickerRow.prototype.addEventListener = function () {
};
PickerRow.prototype.removeEventListener = function () {
};
PickerRow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
PickerRow.prototype.fireEvent = function () {
};
PickerRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.PickerRow.finishLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.removeAllChildren = function () {
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
PickerRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
PickerRow.prototype.animate = function () {
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
PickerRow.prototype.show = function () {
};
PickerRow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PickerRow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PickerRow.prototype.getApiName = function () {
	return this.apiName;
};
PickerRow.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
PickerRow.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
PickerRow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
PickerRow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
PickerRow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
PickerRow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
PickerRow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
PickerRow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
PickerRow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
PickerRow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
PickerRow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
PickerRow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
PickerRow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
PickerRow.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
PickerRow.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
PickerRow.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
PickerRow.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
PickerRow.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
PickerRow.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
PickerRow.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
PickerRow.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
PickerRow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
PickerRow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
PickerRow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
PickerRow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
PickerRow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
PickerRow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
PickerRow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
PickerRow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
PickerRow.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
PickerRow.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
PickerRow.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
PickerRow.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
PickerRow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
PickerRow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
PickerRow.prototype.getClipMode = function () {
	return this.clipMode;
};
PickerRow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
PickerRow.prototype.getFocusable = function () {
	return this.focusable;
};
PickerRow.prototype.setFocusable = function (property) {
	this.focusable = property;
};
PickerRow.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
PickerRow.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
PickerRow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
PickerRow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
PickerRow.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
PickerRow.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
PickerRow.prototype.getTransform = function () {
	return this.transform;
};
PickerRow.prototype.setTransform = function (property) {
	this.transform = property;
};
PickerRow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
PickerRow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
PickerRow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
PickerRow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
PickerRow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
PickerRow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
PickerRow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
PickerRow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
PickerRow.prototype.getZIndex = function () {
	return this.zIndex;
};
PickerRow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
PickerRow.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
PickerRow.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
PickerRow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
PickerRow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
PickerRow.prototype.getBorderColor = function () {
	return this.borderColor;
};
PickerRow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
PickerRow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
PickerRow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
PickerRow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
PickerRow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
PickerRow.prototype.getBottom = function () {
	return this.bottom;
};
PickerRow.prototype.setBottom = function (property) {
	this.bottom = property;
};
PickerRow.prototype.getCenter = function () {
	return this.center;
};
PickerRow.prototype.setCenter = function (property) {
	this.center = property;
};
PickerRow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
PickerRow.prototype.getChildren = function () {
	return this.children;
};
PickerRow.prototype.getHeight = function () {
	return this.height;
};
PickerRow.prototype.setHeight = function (property) {
	this.height = property;
};
PickerRow.prototype.getLayout = function () {
	return this.layout;
};
PickerRow.prototype.setLayout = function (property) {
	this.layout = property;
};
PickerRow.prototype.getLeft = function () {
	return this.left;
};
PickerRow.prototype.setLeft = function (property) {
	this.left = property;
};
PickerRow.prototype.getOpacity = function () {
	return this.opacity;
};
PickerRow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
PickerRow.prototype.getRect = function () {
	return this.rect;
};
PickerRow.prototype.getRight = function () {
	return this.right;
};
PickerRow.prototype.setRight = function (property) {
	this.right = property;
};
PickerRow.prototype.getSize = function () {
	return this.size;
};
PickerRow.prototype.getTintColor = function () {
	return this.tintColor;
};
PickerRow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
PickerRow.prototype.getTop = function () {
	return this.top;
};
PickerRow.prototype.setTop = function (property) {
	this.top = property;
};
PickerRow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
PickerRow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
PickerRow.prototype.getVisible = function () {
	return this.visible;
};
PickerRow.prototype.setVisible = function (property) {
	this.visible = property;
};
PickerRow.prototype.getWidth = function () {
	return this.width;
};
PickerRow.prototype.setWidth = function (property) {
	this.width = property;
};
PickerRow.prototype.getColor = function () {
	return this.color;
};
PickerRow.prototype.setColor = function (property) {
	this.color = property;
};
PickerRow.prototype.getFont = function () {
	return this.font;
};
PickerRow.prototype.setFont = function (property) {
	this.font = property;
};
PickerRow.prototype.getTitle = function () {
	return this.title;
};
PickerRow.prototype.setTitle = function (property) {
	this.title = property;
};
module.exports = function (properties) {
	return new PickerRow(properties);
};