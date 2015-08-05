var crypto = require('crypto');
function TextField(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'appearance',
			'attributedString',
			'attributedHintText',
			'autocorrect',
			'autoLink',
			'clearOnEdit',
			'font',
			'hintTextColor',
			'keyboardToolbar',
			'keyboardToolbarColor',
			'keyboardToolbarHeight',
			'leftButton',
			'leftButtonPadding',
			'minimumFontSize',
			'paddingLeft',
			'paddingRight',
			'rightButton',
			'rightButtonPadding',
			'selection',
			'autocapitalization',
			'borderStyle',
			'clearButtonMode',
			'color',
			'editable',
			'ellipsize',
			'enableReturnKey',
			'hintText',
			'keyboardType',
			'leftButtonMode',
			'maxLength',
			'passwordMask',
			'returnKeyType',
			'rightButtonMode',
			'suppressReturn',
			'textAlign',
			'value',
			'verticalAlign',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.TextField.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TextField';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG_PROPERTIES.accessibilityHidden || true;
	this.accessibilityHint = __SLAG_PROPERTIES.accessibilityHint || '';
	this.accessibilityLabel = __SLAG_PROPERTIES.accessibilityLabel || '';
	this.accessibilityValue = __SLAG_PROPERTIES.accessibilityValue || '';
	this.anchorPoint = __SLAG_PROPERTIES.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.animatedCenter) {
		throw new Error('Ti.UI.TextField.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = __SLAG_PROPERTIES.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG_PROPERTIES.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG_PROPERTIES.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG_PROPERTIES.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	this.backgroundRepeat = __SLAG_PROPERTIES.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG_PROPERTIES.backgroundLeftCap || 0;
	this.backgroundSelectedColor = __SLAG_PROPERTIES.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG_PROPERTIES.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG_PROPERTIES.backgroundTopCap || 0;
	this.clipMode = __SLAG_PROPERTIES.clipMode || 0;
	this.focusable = __SLAG_PROPERTIES.focusable || true;
	this.overrideCurrentAnimation = __SLAG_PROPERTIES.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG_PROPERTIES.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG_PROPERTIES.softKeyboardOnFocus || 0;
	this.transform = __SLAG_PROPERTIES.transform || {};
	this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG_PROPERTIES.viewShadowColor || '';
	this.viewShadowOffset = __SLAG_PROPERTIES.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG_PROPERTIES.horizontalWrap || true;
	this.zIndex = __SLAG_PROPERTIES.zIndex || 0;
	this.keepScreenOn = __SLAG_PROPERTIES.keepScreenOn || true;
	this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	this.borderColor = __SLAG_PROPERTIES.borderColor || '';
	this.borderRadius = __SLAG_PROPERTIES.borderRadius || 0;
	this.borderWidth = __SLAG_PROPERTIES.borderWidth || 0;
	this.bottom = __SLAG_PROPERTIES.bottom || 0;
	this.center = __SLAG_PROPERTIES.center || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.children) {
		throw new Error('Ti.UI.TextField.children is read only property');
	}
	this.children = [];
	this.height = __SLAG_PROPERTIES.height || 0;
	this.layout = __SLAG_PROPERTIES.layout || '';
	this.left = __SLAG_PROPERTIES.left || 0;
	this.opacity = __SLAG_PROPERTIES.opacity || 0;
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.TextField.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG_PROPERTIES.right || 0;
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.TextField.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	this.top = __SLAG_PROPERTIES.top || 0;
	this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	this.visible = __SLAG_PROPERTIES.visible || true;
	this.width = __SLAG_PROPERTIES.width || 0;
	this.appearance = __SLAG_PROPERTIES.appearance || 0;
	this.attributedString = __SLAG_PROPERTIES.attributedString || '';
	this.attributedHintText = __SLAG_PROPERTIES.attributedHintText || '';
	this.autocorrect = __SLAG_PROPERTIES.autocorrect || true;
	this.autoLink = __SLAG_PROPERTIES.autoLink || 0;
	this.clearOnEdit = __SLAG_PROPERTIES.clearOnEdit || true;
	this.font = __SLAG_PROPERTIES.font || {};
	this.hintTextColor = __SLAG_PROPERTIES.hintTextColor || '';
	this.keyboardToolbar = __SLAG_PROPERTIES.keyboardToolbar || [];
	this.keyboardToolbarColor = __SLAG_PROPERTIES.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = __SLAG_PROPERTIES.keyboardToolbarHeight || 0;
	this.leftButton = __SLAG_PROPERTIES.leftButton || {};
	this.leftButtonPadding = __SLAG_PROPERTIES.leftButtonPadding || 0;
	this.minimumFontSize = __SLAG_PROPERTIES.minimumFontSize || 0;
	this.paddingLeft = __SLAG_PROPERTIES.paddingLeft || 0;
	this.paddingRight = __SLAG_PROPERTIES.paddingRight || 0;
	this.rightButton = __SLAG_PROPERTIES.rightButton || {};
	this.rightButtonPadding = __SLAG_PROPERTIES.rightButtonPadding || 0;
	if (__SLAG_PROPERTIES.selection) {
		throw new Error('Ti.UI.TextField.selection is read only property');
	}
	this.selection = {};
	this.autocapitalization = __SLAG_PROPERTIES.autocapitalization || 0;
	this.borderStyle = __SLAG_PROPERTIES.borderStyle || 0;
	this.clearButtonMode = __SLAG_PROPERTIES.clearButtonMode || 0;
	this.color = __SLAG_PROPERTIES.color || '';
	this.editable = __SLAG_PROPERTIES.editable || true;
	this.ellipsize = __SLAG_PROPERTIES.ellipsize || true;
	this.enableReturnKey = __SLAG_PROPERTIES.enableReturnKey || true;
	this.hintText = __SLAG_PROPERTIES.hintText || '';
	this.keyboardType = __SLAG_PROPERTIES.keyboardType || 0;
	this.leftButtonMode = __SLAG_PROPERTIES.leftButtonMode || 0;
	this.maxLength = __SLAG_PROPERTIES.maxLength || 0;
	this.passwordMask = __SLAG_PROPERTIES.passwordMask || true;
	this.returnKeyType = __SLAG_PROPERTIES.returnKeyType || 0;
	this.rightButtonMode = __SLAG_PROPERTIES.rightButtonMode || 0;
	this.suppressReturn = __SLAG_PROPERTIES.suppressReturn || true;
	this.textAlign = __SLAG_PROPERTIES.textAlign || '';
	this.value = __SLAG_PROPERTIES.value || '';
	this.verticalAlign = __SLAG_PROPERTIES.verticalAlign || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TextField.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
TextField.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TextField.finishLayout was deprecated, since 3.0.0');
};
TextField.prototype.removeAllChildren = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.startLayout = function () {
	throw new Error('Ti.UI.TextField.startLayout was deprecated, since 3.0.0');
};
TextField.prototype.toImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
TextField.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TextField.updateLayout was deprecated, since 3.0.0');
};
TextField.prototype.convertPointToView = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.add = function (__SLAG_PARAMETER) {
	this.children.push(__SLAG_PARAMETER);
	__SLAG_PARAMETER.__SLAG_PARENT = this;
};
TextField.prototype.animate = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.hide = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.remove = function (__SLAG_PARAMETER) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === __SLAG_PARAMETER.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	__SLAG_PARAMETER.__SLAG_PARENT = undefined;
};
TextField.prototype.show = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.setSelection = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selection = __SLAG__PROPERTY;
};
TextField.prototype.blur = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.focus = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TextField.prototype.hasText = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
TextField.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
TextField.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
TextField.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
TextField.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
TextField.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
TextField.prototype.getAccessibilityHidden = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHidden;
};
TextField.prototype.setAccessibilityHidden = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHidden = __SLAG__PROPERTY;
};
TextField.prototype.getAccessibilityHint = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHint;
};
TextField.prototype.setAccessibilityHint = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHint = __SLAG__PROPERTY;
};
TextField.prototype.getAccessibilityLabel = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityLabel;
};
TextField.prototype.setAccessibilityLabel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityLabel = __SLAG__PROPERTY;
};
TextField.prototype.getAccessibilityValue = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityValue;
};
TextField.prototype.setAccessibilityValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityValue = __SLAG__PROPERTY;
};
TextField.prototype.getAnchorPoint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.anchorPoint;
};
TextField.prototype.setAnchorPoint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.anchorPoint = __SLAG__PROPERTY;
};
TextField.prototype.getAnimatedCenter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.animatedCenter;
};
TextField.prototype.getBackgroundDisabledColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledColor;
};
TextField.prototype.setBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledColor = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundDisabledImage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledImage;
};
TextField.prototype.setBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledImage = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundFocusedColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedColor;
};
TextField.prototype.setBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedColor = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundFocusedImage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedImage;
};
TextField.prototype.setBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedImage = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundGradient = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundGradient;
};
TextField.prototype.setBackgroundGradient = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundGradient = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundImage = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundImage;
};
TextField.prototype.setBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundImage = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundRepeat = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundRepeat;
};
TextField.prototype.setBackgroundRepeat = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundRepeat = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundLeftCap;
};
TextField.prototype.setBackgroundLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundLeftCap = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundSelectedColor = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedColor;
};
TextField.prototype.setBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedColor = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundSelectedImage = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedImage;
};
TextField.prototype.setBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedImage = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundTopCap;
};
TextField.prototype.setBackgroundTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundTopCap = __SLAG__PROPERTY;
};
TextField.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
TextField.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
TextField.prototype.getFocusable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.focusable;
};
TextField.prototype.setFocusable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.focusable = __SLAG__PROPERTY;
};
TextField.prototype.getOverrideCurrentAnimation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.overrideCurrentAnimation;
};
TextField.prototype.setOverrideCurrentAnimation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.overrideCurrentAnimation = __SLAG__PROPERTY;
};
TextField.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
TextField.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
TextField.prototype.getSoftKeyboardOnFocus = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.softKeyboardOnFocus;
};
TextField.prototype.setSoftKeyboardOnFocus = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.softKeyboardOnFocus = __SLAG__PROPERTY;
};
TextField.prototype.getTransform = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transform;
};
TextField.prototype.setTransform = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transform = __SLAG__PROPERTY;
};
TextField.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
TextField.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
TextField.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
TextField.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
TextField.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
TextField.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
TextField.prototype.getHorizontalWrap = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.horizontalWrap;
};
TextField.prototype.setHorizontalWrap = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.horizontalWrap = __SLAG__PROPERTY;
};
TextField.prototype.getZIndex = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.zIndex;
};
TextField.prototype.setZIndex = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.zIndex = __SLAG__PROPERTY;
};
TextField.prototype.getKeepScreenOn = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keepScreenOn;
};
TextField.prototype.setKeepScreenOn = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keepScreenOn = __SLAG__PROPERTY;
};
TextField.prototype.getBackgroundColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundColor;
};
TextField.prototype.setBackgroundColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundColor = __SLAG__PROPERTY;
};
TextField.prototype.getBorderColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderColor;
};
TextField.prototype.setBorderColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderColor = __SLAG__PROPERTY;
};
TextField.prototype.getBorderRadius = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderRadius;
};
TextField.prototype.setBorderRadius = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderRadius = __SLAG__PROPERTY;
};
TextField.prototype.getBorderWidth = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderWidth;
};
TextField.prototype.setBorderWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderWidth = __SLAG__PROPERTY;
};
TextField.prototype.getBottom = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bottom;
};
TextField.prototype.setBottom = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bottom = __SLAG__PROPERTY;
};
TextField.prototype.getCenter = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
TextField.prototype.setCenter = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
TextField.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TextField.prototype.getChildren = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.children;
};
TextField.prototype.getHeight = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.height;
};
TextField.prototype.setHeight = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.height = __SLAG__PROPERTY;
};
TextField.prototype.getLayout = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.layout;
};
TextField.prototype.setLayout = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.layout = __SLAG__PROPERTY;
};
TextField.prototype.getLeft = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.left;
};
TextField.prototype.setLeft = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.left = __SLAG__PROPERTY;
};
TextField.prototype.getOpacity = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opacity;
};
TextField.prototype.setOpacity = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opacity = __SLAG__PROPERTY;
};
TextField.prototype.getRect = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
TextField.prototype.getRight = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.right;
};
TextField.prototype.setRight = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.right = __SLAG__PROPERTY;
};
TextField.prototype.getSize = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
TextField.prototype.getTintColor = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
TextField.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
TextField.prototype.getTop = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.top;
};
TextField.prototype.setTop = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.top = __SLAG__PROPERTY;
};
TextField.prototype.getTouchEnabled = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
TextField.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
TextField.prototype.getVisible = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
TextField.prototype.setVisible = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
TextField.prototype.getWidth = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.width;
};
TextField.prototype.setWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.width = __SLAG__PROPERTY;
};
TextField.prototype.getAppearance = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appearance;
};
TextField.prototype.setAppearance = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.appearance = __SLAG__PROPERTY;
};
TextField.prototype.getAttributedString = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributedString;
};
TextField.prototype.setAttributedString = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.attributedString = __SLAG__PROPERTY;
};
TextField.prototype.getAttributedHintText = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributedHintText;
};
TextField.prototype.setAttributedHintText = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.attributedHintText = __SLAG__PROPERTY;
};
TextField.prototype.getAutocorrect = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autocorrect;
};
TextField.prototype.setAutocorrect = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autocorrect = __SLAG__PROPERTY;
};
TextField.prototype.getAutoLink = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autoLink;
};
TextField.prototype.setAutoLink = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autoLink = __SLAG__PROPERTY;
};
TextField.prototype.getClearOnEdit = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clearOnEdit;
};
TextField.prototype.setClearOnEdit = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clearOnEdit = __SLAG__PROPERTY;
};
TextField.prototype.getFont = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.font;
};
TextField.prototype.setFont = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.font = __SLAG__PROPERTY;
};
TextField.prototype.getHintTextColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hintTextColor;
};
TextField.prototype.setHintTextColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.hintTextColor = __SLAG__PROPERTY;
};
TextField.prototype.getKeyboardToolbar = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardToolbar;
};
TextField.prototype.setKeyboardToolbar = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardToolbar = __SLAG__PROPERTY;
};
TextField.prototype.getKeyboardToolbarColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardToolbarColor;
};
TextField.prototype.setKeyboardToolbarColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardToolbarColor = __SLAG__PROPERTY;
};
TextField.prototype.getKeyboardToolbarHeight = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardToolbarHeight;
};
TextField.prototype.setKeyboardToolbarHeight = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardToolbarHeight = __SLAG__PROPERTY;
};
TextField.prototype.getLeftButton = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftButton;
};
TextField.prototype.setLeftButton = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftButton = __SLAG__PROPERTY;
};
TextField.prototype.getLeftButtonPadding = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftButtonPadding;
};
TextField.prototype.setLeftButtonPadding = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftButtonPadding = __SLAG__PROPERTY;
};
TextField.prototype.getMinimumFontSize = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.minimumFontSize;
};
TextField.prototype.setMinimumFontSize = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.minimumFontSize = __SLAG__PROPERTY;
};
TextField.prototype.getPaddingLeft = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.paddingLeft;
};
TextField.prototype.setPaddingLeft = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paddingLeft = __SLAG__PROPERTY;
};
TextField.prototype.getPaddingRight = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.paddingRight;
};
TextField.prototype.setPaddingRight = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paddingRight = __SLAG__PROPERTY;
};
TextField.prototype.getRightButton = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightButton;
};
TextField.prototype.setRightButton = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightButton = __SLAG__PROPERTY;
};
TextField.prototype.getRightButtonPadding = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightButtonPadding;
};
TextField.prototype.setRightButtonPadding = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightButtonPadding = __SLAG__PROPERTY;
};
TextField.prototype.getSelection = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selection;
};
TextField.prototype.getAutocapitalization = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.autocapitalization;
};
TextField.prototype.setAutocapitalization = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.autocapitalization = __SLAG__PROPERTY;
};
TextField.prototype.getBorderStyle = function () {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderStyle;
};
TextField.prototype.setBorderStyle = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderStyle = __SLAG__PROPERTY;
};
TextField.prototype.getClearButtonMode = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clearButtonMode;
};
TextField.prototype.setClearButtonMode = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clearButtonMode = __SLAG__PROPERTY;
};
TextField.prototype.getColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.color;
};
TextField.prototype.setColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.color = __SLAG__PROPERTY;
};
TextField.prototype.getEditable = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.editable;
};
TextField.prototype.setEditable = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.editable = __SLAG__PROPERTY;
};
TextField.prototype.getEllipsize = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ellipsize;
};
TextField.prototype.setEllipsize = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ellipsize = __SLAG__PROPERTY;
};
TextField.prototype.getEnableReturnKey = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.enableReturnKey;
};
TextField.prototype.setEnableReturnKey = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.enableReturnKey = __SLAG__PROPERTY;
};
TextField.prototype.getHintText = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hintText;
};
TextField.prototype.setHintText = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.hintText = __SLAG__PROPERTY;
};
TextField.prototype.getKeyboardType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardType;
};
TextField.prototype.setKeyboardType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardType = __SLAG__PROPERTY;
};
TextField.prototype.getLeftButtonMode = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftButtonMode;
};
TextField.prototype.setLeftButtonMode = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftButtonMode = __SLAG__PROPERTY;
};
TextField.prototype.getMaxLength = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.maxLength;
};
TextField.prototype.setMaxLength = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.maxLength = __SLAG__PROPERTY;
};
TextField.prototype.getPasswordMask = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.passwordMask;
};
TextField.prototype.setPasswordMask = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.passwordMask = __SLAG__PROPERTY;
};
TextField.prototype.getReturnKeyType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.returnKeyType;
};
TextField.prototype.setReturnKeyType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.returnKeyType = __SLAG__PROPERTY;
};
TextField.prototype.getRightButtonMode = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightButtonMode;
};
TextField.prototype.setRightButtonMode = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightButtonMode = __SLAG__PROPERTY;
};
TextField.prototype.getSuppressReturn = function () {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.suppressReturn;
};
TextField.prototype.setSuppressReturn = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.suppressReturn = __SLAG__PROPERTY;
};
TextField.prototype.getTextAlign = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textAlign;
};
TextField.prototype.setTextAlign = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.textAlign = __SLAG__PROPERTY;
};
TextField.prototype.getValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.value;
};
TextField.prototype.setValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.value = __SLAG__PROPERTY;
};
TextField.prototype.getVerticalAlign = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.verticalAlign;
};
TextField.prototype.setVerticalAlign = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.verticalAlign = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new TextField(properties);
};