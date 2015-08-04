var crypto = require('crypto');
function Switch(__SLAG__properties) {
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
			'onTintColor',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'size',
			'softKeyboardOnFocus',
			'style',
			'textAlign',
			'thumbTintColor',
			'tintColor',
			'title',
			'titleOff',
			'titleOn',
			'top',
			'touchEnabled',
			'transform',
			'value',
			'verticalAlign',
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
		throw new Error('Ti.UI.Switch.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Switch.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Switch';
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
		throw new Error('Ti.UI.Switch.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.Switch.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.onTintColor = __SLAG__properties.onTintColor || '';
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Switch.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Switch.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.style = __SLAG__properties.style || 0;
	this.textAlign = __SLAG__properties.textAlign || '';
	this.thumbTintColor = __SLAG__properties.thumbTintColor || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
	this.titleOff = __SLAG__properties.titleOff || '';
	this.titleOn = __SLAG__properties.titleOn || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || true;
	this.verticalAlign = __SLAG__properties.verticalAlign || 0;
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
Switch.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Switch.prototype.addEventListener = function () {
};
Switch.prototype.animate = function () {
};
Switch.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Switch.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Switch.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Switch.finishLayout was deprecated, since 3.0.0');
};
Switch.prototype.fireEvent = function () {
};
Switch.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Switch.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Switch.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Switch.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Switch.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Switch.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Switch.prototype.getApiName = function () {
	return this.apiName;
};
Switch.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Switch.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Switch.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Switch.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Switch.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Switch.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Switch.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Switch.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Switch.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Switch.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Switch.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Switch.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Switch.prototype.getBorderColor = function () {
	return this.borderColor;
};
Switch.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Switch.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Switch.prototype.getBottom = function () {
	return this.bottom;
};
Switch.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Switch.prototype.getCenter = function () {
	return this.center;
};
Switch.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Switch.prototype.getChildren = function () {
	return this.children;
};
Switch.prototype.getClipMode = function () {
	return this.clipMode;
};
Switch.prototype.getColor = function () {
	return this.color;
};
Switch.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Switch.getEnabled was deprecated, since 3.3.0');
};
Switch.prototype.getFocusable = function () {
	return this.focusable;
};
Switch.prototype.getFont = function () {
	return this.font;
};
Switch.prototype.getHeight = function () {
	return this.height;
};
Switch.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Switch.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Switch.prototype.getLayout = function () {
	return this.layout;
};
Switch.prototype.getLeft = function () {
	return this.left;
};
Switch.prototype.getOnTintColor = function () {
	return this.onTintColor;
};
Switch.prototype.getOpacity = function () {
	return this.opacity;
};
Switch.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Switch.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Switch.prototype.getRect = function () {
	return this.rect;
};
Switch.prototype.getRight = function () {
	return this.right;
};
Switch.prototype.getSize = function () {
	return this.size;
};
Switch.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Switch.prototype.getStyle = function () {
	return this.style;
};
Switch.prototype.getTextAlign = function () {
	return this.textAlign;
};
Switch.prototype.getThumbTintColor = function () {
	return this.thumbTintColor;
};
Switch.prototype.getTintColor = function () {
	return this.tintColor;
};
Switch.prototype.getTitle = function () {
	return this.title;
};
Switch.prototype.getTitleOff = function () {
	return this.titleOff;
};
Switch.prototype.getTitleOn = function () {
	return this.titleOn;
};
Switch.prototype.getTop = function () {
	return this.top;
};
Switch.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Switch.prototype.getTransform = function () {
	return this.transform;
};
Switch.prototype.getValue = function () {
	return this.value;
};
Switch.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
Switch.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Switch.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Switch.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Switch.prototype.getVisible = function () {
	return this.visible;
};
Switch.prototype.getWidth = function () {
	return this.width;
};
Switch.prototype.getZIndex = function () {
	return this.zIndex;
};
Switch.prototype.hide = function () {
};
Switch.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Switch.prototype.removeAllChildren = function () {
};
Switch.prototype.removeEventListener = function () {
};
Switch.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Switch.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Switch.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Switch.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Switch.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Switch.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Switch.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Switch.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Switch.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Switch.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Switch.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Switch.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Switch.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Switch.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Switch.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Switch.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Switch.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Switch.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Switch.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Switch.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Switch.prototype.setBottom = function (property) {
	this.bottom = property;
};
Switch.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Switch.prototype.setCenter = function (property) {
	this.center = property;
};
Switch.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Switch.prototype.setColor = function (property) {
	this.color = property;
};
Switch.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Switch.setEnabled was deprecated, since 3.3.0');
};
Switch.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Switch.prototype.setFont = function (property) {
	this.font = property;
};
Switch.prototype.setHeight = function (property) {
	this.height = property;
};
Switch.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Switch.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Switch.prototype.setLayout = function (property) {
	this.layout = property;
};
Switch.prototype.setLeft = function (property) {
	this.left = property;
};
Switch.prototype.setOnTintColor = function (property) {
	this.onTintColor = property;
};
Switch.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Switch.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Switch.prototype.setRight = function (property) {
	this.right = property;
};
Switch.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Switch.prototype.setStyle = function (property) {
	this.style = property;
};
Switch.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
Switch.prototype.setThumbTintColor = function (property) {
	this.thumbTintColor = property;
};
Switch.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Switch.prototype.setTitle = function (property) {
	this.title = property;
};
Switch.prototype.setTitleOff = function (property) {
	this.titleOff = property;
};
Switch.prototype.setTitleOn = function (property) {
	this.titleOn = property;
};
Switch.prototype.setTop = function (property) {
	this.top = property;
};
Switch.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Switch.prototype.setTransform = function (property) {
	this.transform = property;
};
Switch.prototype.setValue = function (property) {
	this.value = property;
};
Switch.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
Switch.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Switch.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Switch.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Switch.prototype.setVisible = function (property) {
	this.visible = property;
};
Switch.prototype.setWidth = function (property) {
	this.width = property;
};
Switch.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Switch.prototype.show = function () {
};
Switch.prototype.startLayout = function () {
	throw new Error('Ti.UI.Switch.startLayout was deprecated, since 3.0.0');
};
Switch.prototype.toImage = function () {
	return {};
};
Switch.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Switch.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Switch(properties);
};