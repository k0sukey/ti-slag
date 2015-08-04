var crypto = require('crypto');
function Button(__SLAG__properties) {
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
			'disabledColor',
			'enabled',
			'focusable',
			'font',
			'height',
			'horizontalWrap',
			'image',
			'keepScreenOn',
			'layout',
			'left',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'selectedColor',
			'shadowColor',
			'shadowOffset',
			'shadowRadius',
			'size',
			'softKeyboardOnFocus',
			'style',
			'systemButton',
			'textAlign',
			'tintColor',
			'title',
			'titleid',
			'top',
			'touchEnabled',
			'transform',
			'verticalAlign',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
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
		throw new Error('Ti.UI.Button.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Button.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Button';
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
		throw new Error('Ti.UI.Button.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	this.disabledColor = __SLAG__properties.disabledColor || '';
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.Button.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.image = __SLAG__properties.image || '';
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Button.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.selectedColor = __SLAG__properties.selectedColor || '';
	this.shadowColor = __SLAG__properties.shadowColor || '';
	this.shadowOffset = __SLAG__properties.shadowOffset || {};
	this.shadowRadius = __SLAG__properties.shadowRadius || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Button.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.style = __SLAG__properties.style || 0;
	this.systemButton = __SLAG__properties.systemButton || 0;
	this.textAlign = __SLAG__properties.textAlign || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
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
Button.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Button.prototype.addEventListener = function () {
};
Button.prototype.animate = function () {
};
Button.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Button.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Button.finishLayout was deprecated, since 3.0.0');
};
Button.prototype.fireEvent = function () {
};
Button.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Button.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Button.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Button.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Button.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Button.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Button.prototype.getApiName = function () {
	return this.apiName;
};
Button.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Button.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Button.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Button.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Button.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Button.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Button.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Button.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Button.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Button.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Button.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Button.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Button.prototype.getBorderColor = function () {
	return this.borderColor;
};
Button.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Button.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Button.prototype.getBottom = function () {
	return this.bottom;
};
Button.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Button.prototype.getCenter = function () {
	return this.center;
};
Button.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Button.prototype.getChildren = function () {
	return this.children;
};
Button.prototype.getClipMode = function () {
	return this.clipMode;
};
Button.prototype.getColor = function () {
	return this.color;
};
Button.prototype.getDisabledColor = function () {
	return this.disabledColor;
};
Button.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Button.getEnabled was deprecated, since 3.3.0');
};
Button.prototype.getFocusable = function () {
	return this.focusable;
};
Button.prototype.getFont = function () {
	return this.font;
};
Button.prototype.getHeight = function () {
	return this.height;
};
Button.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Button.prototype.getImage = function () {
	return this.image;
};
Button.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Button.prototype.getLayout = function () {
	return this.layout;
};
Button.prototype.getLeft = function () {
	return this.left;
};
Button.prototype.getOpacity = function () {
	return this.opacity;
};
Button.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Button.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Button.prototype.getRect = function () {
	return this.rect;
};
Button.prototype.getRight = function () {
	return this.right;
};
Button.prototype.getSelectedColor = function () {
	return this.selectedColor;
};
Button.prototype.getShadowColor = function () {
	return this.shadowColor;
};
Button.prototype.getShadowOffset = function () {
	return this.shadowOffset;
};
Button.prototype.getShadowRadius = function () {
	return this.shadowRadius;
};
Button.prototype.getSize = function () {
	return this.size;
};
Button.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Button.prototype.getStyle = function () {
	return this.style;
};
Button.prototype.getSystemButton = function () {
	return this.systemButton;
};
Button.prototype.getTextAlign = function () {
	return this.textAlign;
};
Button.prototype.getTintColor = function () {
	return this.tintColor;
};
Button.prototype.getTitle = function () {
	return this.title;
};
Button.prototype.getTitleid = function () {
	return this.titleid;
};
Button.prototype.getTop = function () {
	return this.top;
};
Button.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Button.prototype.getTransform = function () {
	return this.transform;
};
Button.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
Button.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Button.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Button.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Button.prototype.getVisible = function () {
	return this.visible;
};
Button.prototype.getWidth = function () {
	return this.width;
};
Button.prototype.getZIndex = function () {
	return this.zIndex;
};
Button.prototype.hide = function () {
};
Button.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Button.prototype.removeAllChildren = function () {
};
Button.prototype.removeEventListener = function () {
};
Button.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Button.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Button.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Button.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Button.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Button.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Button.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Button.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Button.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Button.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Button.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Button.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Button.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Button.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Button.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Button.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Button.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Button.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Button.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Button.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Button.prototype.setBottom = function (property) {
	this.bottom = property;
};
Button.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Button.prototype.setCenter = function (property) {
	this.center = property;
};
Button.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Button.prototype.setColor = function (property) {
	this.color = property;
};
Button.prototype.setDisabledColor = function (property) {
	this.disabledColor = property;
};
Button.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Button.setEnabled was deprecated, since 3.3.0');
};
Button.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Button.prototype.setFont = function (property) {
	this.font = property;
};
Button.prototype.setHeight = function (property) {
	this.height = property;
};
Button.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Button.prototype.setImage = function (property) {
	this.image = property;
};
Button.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Button.prototype.setLayout = function (property) {
	this.layout = property;
};
Button.prototype.setLeft = function (property) {
	this.left = property;
};
Button.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Button.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Button.prototype.setRight = function (property) {
	this.right = property;
};
Button.prototype.setSelectedColor = function (property) {
	this.selectedColor = property;
};
Button.prototype.setShadowColor = function (property) {
	this.shadowColor = property;
};
Button.prototype.setShadowOffset = function (property) {
	this.shadowOffset = property;
};
Button.prototype.setShadowRadius = function (property) {
	this.shadowRadius = property;
};
Button.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Button.prototype.setStyle = function (property) {
	this.style = property;
};
Button.prototype.setSystemButton = function (property) {
	this.systemButton = property;
};
Button.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
Button.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Button.prototype.setTitle = function (property) {
	this.title = property;
};
Button.prototype.setTitleid = function (property) {
	this.titleid = property;
};
Button.prototype.setTop = function (property) {
	this.top = property;
};
Button.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Button.prototype.setTransform = function (property) {
	this.transform = property;
};
Button.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
Button.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Button.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Button.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Button.prototype.setVisible = function (property) {
	this.visible = property;
};
Button.prototype.setWidth = function (property) {
	this.width = property;
};
Button.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Button.prototype.show = function () {
};
Button.prototype.startLayout = function () {
	throw new Error('Ti.UI.Button.startLayout was deprecated, since 3.0.0');
};
Button.prototype.toImage = function () {
	return {};
};
Button.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Button.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Button(properties);
};