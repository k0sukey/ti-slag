var crypto = require('crypto');
function Button(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accessibilityHidden = __SLAG_PROPERTIES.accessibilityHidden || true;
	this.accessibilityHint = __SLAG_PROPERTIES.accessibilityHint || '';
	this.accessibilityLabel = __SLAG_PROPERTIES.accessibilityLabel || '';
	this.accessibilityValue = __SLAG_PROPERTIES.accessibilityValue || '';
	this.anchorPoint = __SLAG_PROPERTIES.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.animatedCenter) {
		throw new Error('Ti.UI.Button.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.Button.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Button';
	this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG_PROPERTIES.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG_PROPERTIES.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG_PROPERTIES.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG_PROPERTIES.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	this.backgroundLeftCap = __SLAG_PROPERTIES.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG_PROPERTIES.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG_PROPERTIES.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG_PROPERTIES.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG_PROPERTIES.backgroundTopCap || 0;
	this.borderColor = __SLAG_PROPERTIES.borderColor || '';
	this.borderRadius = __SLAG_PROPERTIES.borderRadius || 0;
	this.borderWidth = __SLAG_PROPERTIES.borderWidth || 0;
	this.bottom = __SLAG_PROPERTIES.bottom || 0;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.center = __SLAG_PROPERTIES.center || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.children) {
		throw new Error('Ti.UI.Button.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG_PROPERTIES.clipMode || 0;
	this.color = __SLAG_PROPERTIES.color || '';
	this.disabledColor = __SLAG_PROPERTIES.disabledColor || '';
	if (__SLAG_PROPERTIES.enabled) {
		throw new Error('Ti.UI.Button.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG_PROPERTIES.focusable || true;
	this.font = __SLAG_PROPERTIES.font || {};
	this.height = __SLAG_PROPERTIES.height || 0;
	this.horizontalWrap = __SLAG_PROPERTIES.horizontalWrap || true;
	this.image = __SLAG_PROPERTIES.image || '';
	this.keepScreenOn = __SLAG_PROPERTIES.keepScreenOn || true;
	this.layout = __SLAG_PROPERTIES.layout || '';
	this.left = __SLAG_PROPERTIES.left || 0;
	this.opacity = __SLAG_PROPERTIES.opacity || 0;
	this.overrideCurrentAnimation = __SLAG_PROPERTIES.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG_PROPERTIES.pullBackgroundColor || '';
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.Button.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG_PROPERTIES.right || 0;
	this.selectedColor = __SLAG_PROPERTIES.selectedColor || '';
	this.shadowColor = __SLAG_PROPERTIES.shadowColor || '';
	this.shadowOffset = __SLAG_PROPERTIES.shadowOffset || {};
	this.shadowRadius = __SLAG_PROPERTIES.shadowRadius || 0;
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.Button.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG_PROPERTIES.softKeyboardOnFocus || 0;
	this.style = __SLAG_PROPERTIES.style || 0;
	this.systemButton = __SLAG_PROPERTIES.systemButton || 0;
	this.textAlign = __SLAG_PROPERTIES.textAlign || '';
	this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	this.title = __SLAG_PROPERTIES.title || '';
	this.titleid = __SLAG_PROPERTIES.titleid || '';
	this.top = __SLAG_PROPERTIES.top || 0;
	this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	this.transform = __SLAG_PROPERTIES.transform || {};
	this.verticalAlign = __SLAG_PROPERTIES.verticalAlign || 0;
	this.viewShadowColor = __SLAG_PROPERTIES.viewShadowColor || '';
	this.viewShadowOffset = __SLAG_PROPERTIES.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	this.visible = __SLAG_PROPERTIES.visible || true;
	this.width = __SLAG_PROPERTIES.width || 0;
	this.zIndex = __SLAG_PROPERTIES.zIndex || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Button.prototype.add = function (__SLAG_PARAMETER) {
	this.children.push(__SLAG_PARAMETER);
	__SLAG_PARAMETER.__SLAG_PARENT = this;
};
Button.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.animate = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Button.prototype.convertPointToView = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
Button.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Button.finishLayout was deprecated, since 3.0.0');
};
Button.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.getAccessibilityHidden = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHidden;
};
Button.prototype.getAccessibilityHint = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHint;
};
Button.prototype.getAccessibilityLabel = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityLabel;
};
Button.prototype.getAccessibilityValue = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityValue;
};
Button.prototype.getAnchorPoint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.anchorPoint;
};
Button.prototype.getAnimatedCenter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.animatedCenter;
};
Button.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Button.prototype.getBackgroundColor = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundColor;
};
Button.prototype.getBackgroundDisabledColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledColor;
};
Button.prototype.getBackgroundDisabledImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledImage;
};
Button.prototype.getBackgroundFocusedColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedColor;
};
Button.prototype.getBackgroundFocusedImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedImage;
};
Button.prototype.getBackgroundGradient = function () {
	if ([
			'ios',
			'mobileweb',
			'tizen',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundGradient;
};
Button.prototype.getBackgroundImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundImage;
};
Button.prototype.getBackgroundLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundLeftCap;
};
Button.prototype.getBackgroundRepeat = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundRepeat;
};
Button.prototype.getBackgroundSelectedColor = function () {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedColor;
};
Button.prototype.getBackgroundSelectedImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedImage;
};
Button.prototype.getBackgroundTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundTopCap;
};
Button.prototype.getBorderColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderColor;
};
Button.prototype.getBorderRadius = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderRadius;
};
Button.prototype.getBorderWidth = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderWidth;
};
Button.prototype.getBottom = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bottom;
};
Button.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Button.prototype.getCenter = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
Button.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Button.prototype.getChildren = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.children;
};
Button.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
Button.prototype.getColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.color;
};
Button.prototype.getDisabledColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disabledColor;
};
Button.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Button.getEnabled was deprecated, since 3.3.0');
};
Button.prototype.getFocusable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.focusable;
};
Button.prototype.getFont = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.font;
};
Button.prototype.getHeight = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.height;
};
Button.prototype.getHorizontalWrap = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.horizontalWrap;
};
Button.prototype.getImage = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.image;
};
Button.prototype.getKeepScreenOn = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keepScreenOn;
};
Button.prototype.getLayout = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.layout;
};
Button.prototype.getLeft = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.left;
};
Button.prototype.getOpacity = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opacity;
};
Button.prototype.getOverrideCurrentAnimation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.overrideCurrentAnimation;
};
Button.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
Button.prototype.getRect = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
Button.prototype.getRight = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.right;
};
Button.prototype.getSelectedColor = function () {
	if ([
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedColor;
};
Button.prototype.getShadowColor = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.shadowColor;
};
Button.prototype.getShadowOffset = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.shadowOffset;
};
Button.prototype.getShadowRadius = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.shadowRadius;
};
Button.prototype.getSize = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
Button.prototype.getSoftKeyboardOnFocus = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.softKeyboardOnFocus;
};
Button.prototype.getStyle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.style;
};
Button.prototype.getSystemButton = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.systemButton;
};
Button.prototype.getTextAlign = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textAlign;
};
Button.prototype.getTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
Button.prototype.getTitle = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
Button.prototype.getTitleid = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleid;
};
Button.prototype.getTop = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.top;
};
Button.prototype.getTouchEnabled = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
Button.prototype.getTransform = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transform;
};
Button.prototype.getVerticalAlign = function () {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.verticalAlign;
};
Button.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
Button.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
Button.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
Button.prototype.getVisible = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
Button.prototype.getWidth = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.width;
};
Button.prototype.getZIndex = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.zIndex;
};
Button.prototype.hide = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.remove = function (__SLAG_PARAMETER) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === __SLAG_PARAMETER.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	__SLAG_PARAMETER.__SLAG_PARENT = undefined;
};
Button.prototype.removeAllChildren = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.setAccessibilityHidden = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHidden = __SLAG__PROPERTY;
};
Button.prototype.setAccessibilityHint = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHint = __SLAG__PROPERTY;
};
Button.prototype.setAccessibilityLabel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityLabel = __SLAG__PROPERTY;
};
Button.prototype.setAccessibilityValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityValue = __SLAG__PROPERTY;
};
Button.prototype.setAnchorPoint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.anchorPoint = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundColor = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledColor = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledImage = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedColor = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedImage = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundGradient = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'tizen',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundGradient = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundImage = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundLeftCap = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundRepeat = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundRepeat = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedColor = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedImage = __SLAG__PROPERTY;
};
Button.prototype.setBackgroundTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundTopCap = __SLAG__PROPERTY;
};
Button.prototype.setBorderColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderColor = __SLAG__PROPERTY;
};
Button.prototype.setBorderRadius = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderRadius = __SLAG__PROPERTY;
};
Button.prototype.setBorderWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderWidth = __SLAG__PROPERTY;
};
Button.prototype.setBottom = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bottom = __SLAG__PROPERTY;
};
Button.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Button.prototype.setCenter = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
Button.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
Button.prototype.setColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.color = __SLAG__PROPERTY;
};
Button.prototype.setDisabledColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disabledColor = __SLAG__PROPERTY;
};
Button.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Button.setEnabled was deprecated, since 3.3.0');
};
Button.prototype.setFocusable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.focusable = __SLAG__PROPERTY;
};
Button.prototype.setFont = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.font = __SLAG__PROPERTY;
};
Button.prototype.setHeight = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.height = __SLAG__PROPERTY;
};
Button.prototype.setHorizontalWrap = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.horizontalWrap = __SLAG__PROPERTY;
};
Button.prototype.setImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.image = __SLAG__PROPERTY;
};
Button.prototype.setKeepScreenOn = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keepScreenOn = __SLAG__PROPERTY;
};
Button.prototype.setLayout = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.layout = __SLAG__PROPERTY;
};
Button.prototype.setLeft = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.left = __SLAG__PROPERTY;
};
Button.prototype.setOpacity = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opacity = __SLAG__PROPERTY;
};
Button.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
Button.prototype.setRight = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.right = __SLAG__PROPERTY;
};
Button.prototype.setSelectedColor = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedColor = __SLAG__PROPERTY;
};
Button.prototype.setShadowColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.shadowColor = __SLAG__PROPERTY;
};
Button.prototype.setShadowOffset = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.shadowOffset = __SLAG__PROPERTY;
};
Button.prototype.setShadowRadius = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.shadowRadius = __SLAG__PROPERTY;
};
Button.prototype.setSoftKeyboardOnFocus = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.softKeyboardOnFocus = __SLAG__PROPERTY;
};
Button.prototype.setStyle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.style = __SLAG__PROPERTY;
};
Button.prototype.setSystemButton = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.systemButton = __SLAG__PROPERTY;
};
Button.prototype.setTextAlign = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.textAlign = __SLAG__PROPERTY;
};
Button.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
Button.prototype.setTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
Button.prototype.setTitleid = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleid = __SLAG__PROPERTY;
};
Button.prototype.setTop = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.top = __SLAG__PROPERTY;
};
Button.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
Button.prototype.setTransform = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transform = __SLAG__PROPERTY;
};
Button.prototype.setVerticalAlign = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.verticalAlign = __SLAG__PROPERTY;
};
Button.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
Button.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
Button.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
Button.prototype.setVisible = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
Button.prototype.setWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.width = __SLAG__PROPERTY;
};
Button.prototype.setZIndex = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.zIndex = __SLAG__PROPERTY;
};
Button.prototype.show = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Button.prototype.startLayout = function () {
	throw new Error('Ti.UI.Button.startLayout was deprecated, since 3.0.0');
};
Button.prototype.toImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Button.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Button.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Button(properties);
};