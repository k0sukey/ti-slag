var crypto = require('crypto');
function TextField(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'appearance',
			'attributedHintText',
			'attributedString',
			'autoLink',
			'autocapitalization',
			'autocorrect',
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
			'borderStyle',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clearButtonMode',
			'clearOnEdit',
			'clipMode',
			'color',
			'editable',
			'ellipsize',
			'enableReturnKey',
			'enabled',
			'focusable',
			'font',
			'height',
			'hintText',
			'horizontalWrap',
			'keepScreenOn',
			'keyboardToolbar',
			'keyboardToolbarColor',
			'keyboardToolbarHeight',
			'keyboardType',
			'layout',
			'left',
			'leftButton',
			'leftButtonMode',
			'leftButtonPadding',
			'maxLength',
			'minimumFontSize',
			'opacity',
			'overrideCurrentAnimation',
			'paddingLeft',
			'paddingRight',
			'passwordMask',
			'pullBackgroundColor',
			'rect',
			'returnKeyType',
			'right',
			'rightButton',
			'rightButtonMode',
			'rightButtonPadding',
			'selection',
			'size',
			'softKeyboardOnFocus',
			'suppressReturn',
			'textAlign',
			'tintColor',
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
		throw new Error('Ti.UI.TextField.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TextField.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TextField';
	this.appearance = __SLAG__properties.appearance || 0;
	this.attributedHintText = __SLAG__properties.attributedHintText || '';
	this.attributedString = __SLAG__properties.attributedString || '';
	this.autoLink = __SLAG__properties.autoLink || 0;
	this.autocapitalization = __SLAG__properties.autocapitalization || 0;
	this.autocorrect = __SLAG__properties.autocorrect || true;
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
	this.borderStyle = __SLAG__properties.borderStyle || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.TextField.children is read only property');
	}
	this.children = [];
	this.clearButtonMode = __SLAG__properties.clearButtonMode || 0;
	this.clearOnEdit = __SLAG__properties.clearOnEdit || true;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	this.editable = __SLAG__properties.editable || true;
	this.ellipsize = __SLAG__properties.ellipsize || true;
	this.enableReturnKey = __SLAG__properties.enableReturnKey || true;
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.TextField.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.hintText = __SLAG__properties.hintText || '';
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.keyboardToolbar = __SLAG__properties.keyboardToolbar || [];
	this.keyboardToolbarColor = __SLAG__properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = __SLAG__properties.keyboardToolbarHeight || 0;
	this.keyboardType = __SLAG__properties.keyboardType || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.leftButton = __SLAG__properties.leftButton || {};
	this.leftButtonMode = __SLAG__properties.leftButtonMode || 0;
	this.leftButtonPadding = __SLAG__properties.leftButtonPadding || 0;
	this.maxLength = __SLAG__properties.maxLength || 0;
	this.minimumFontSize = __SLAG__properties.minimumFontSize || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.paddingLeft = __SLAG__properties.paddingLeft || 0;
	this.paddingRight = __SLAG__properties.paddingRight || 0;
	this.passwordMask = __SLAG__properties.passwordMask || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TextField.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.returnKeyType = __SLAG__properties.returnKeyType || 0;
	this.right = __SLAG__properties.right || 0;
	this.rightButton = __SLAG__properties.rightButton || {};
	this.rightButtonMode = __SLAG__properties.rightButtonMode || 0;
	this.rightButtonPadding = __SLAG__properties.rightButtonPadding || 0;
	if (__SLAG__properties.selection) {
		throw new Error('Ti.UI.TextField.selection is read only property');
	}
	this.selection = {};
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TextField.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.suppressReturn = __SLAG__properties.suppressReturn || true;
	this.textAlign = __SLAG__properties.textAlign || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || '';
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
TextField.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TextField.prototype.addEventListener = function () {
};
TextField.prototype.animate = function () {
};
TextField.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TextField.prototype.blur = function () {
};
TextField.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TextField.finishLayout was deprecated, since 3.0.0');
};
TextField.prototype.fireEvent = function () {
};
TextField.prototype.focus = function () {
};
TextField.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TextField.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TextField.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TextField.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TextField.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TextField.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TextField.prototype.getApiName = function () {
	return this.apiName;
};
TextField.prototype.getAppearance = function () {
	return this.appearance;
};
TextField.prototype.getAttributedHintText = function () {
	return this.attributedHintText;
};
TextField.prototype.getAttributedString = function () {
	return this.attributedString;
};
TextField.prototype.getAutoLink = function () {
	return this.autoLink;
};
TextField.prototype.getAutocapitalization = function () {
	return this.autocapitalization;
};
TextField.prototype.getAutocorrect = function () {
	return this.autocorrect;
};
TextField.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TextField.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TextField.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TextField.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TextField.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TextField.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TextField.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TextField.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TextField.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TextField.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
TextField.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
TextField.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TextField.prototype.getBorderColor = function () {
	return this.borderColor;
};
TextField.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TextField.prototype.getBorderStyle = function () {
	return this.borderStyle;
};
TextField.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TextField.prototype.getBottom = function () {
	return this.bottom;
};
TextField.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TextField.prototype.getCenter = function () {
	return this.center;
};
TextField.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TextField.prototype.getChildren = function () {
	return this.children;
};
TextField.prototype.getClearButtonMode = function () {
	return this.clearButtonMode;
};
TextField.prototype.getClearOnEdit = function () {
	return this.clearOnEdit;
};
TextField.prototype.getClipMode = function () {
	return this.clipMode;
};
TextField.prototype.getColor = function () {
	return this.color;
};
TextField.prototype.getEditable = function () {
	return this.editable;
};
TextField.prototype.getEllipsize = function () {
	return this.ellipsize;
};
TextField.prototype.getEnableReturnKey = function () {
	return this.enableReturnKey;
};
TextField.prototype.getEnabled = function () {
	throw new Error('Ti.UI.TextField.getEnabled was deprecated, since 3.3.0');
};
TextField.prototype.getFocusable = function () {
	return this.focusable;
};
TextField.prototype.getFont = function () {
	return this.font;
};
TextField.prototype.getHeight = function () {
	return this.height;
};
TextField.prototype.getHintText = function () {
	return this.hintText;
};
TextField.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TextField.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TextField.prototype.getKeyboardToolbar = function () {
	return this.keyboardToolbar;
};
TextField.prototype.getKeyboardToolbarColor = function () {
	return this.keyboardToolbarColor;
};
TextField.prototype.getKeyboardToolbarHeight = function () {
	return this.keyboardToolbarHeight;
};
TextField.prototype.getKeyboardType = function () {
	return this.keyboardType;
};
TextField.prototype.getLayout = function () {
	return this.layout;
};
TextField.prototype.getLeft = function () {
	return this.left;
};
TextField.prototype.getLeftButton = function () {
	return this.leftButton;
};
TextField.prototype.getLeftButtonMode = function () {
	return this.leftButtonMode;
};
TextField.prototype.getLeftButtonPadding = function () {
	return this.leftButtonPadding;
};
TextField.prototype.getMaxLength = function () {
	return this.maxLength;
};
TextField.prototype.getMinimumFontSize = function () {
	return this.minimumFontSize;
};
TextField.prototype.getOpacity = function () {
	return this.opacity;
};
TextField.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TextField.prototype.getPaddingLeft = function () {
	return this.paddingLeft;
};
TextField.prototype.getPaddingRight = function () {
	return this.paddingRight;
};
TextField.prototype.getPasswordMask = function () {
	return this.passwordMask;
};
TextField.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TextField.prototype.getRect = function () {
	return this.rect;
};
TextField.prototype.getReturnKeyType = function () {
	return this.returnKeyType;
};
TextField.prototype.getRight = function () {
	return this.right;
};
TextField.prototype.getRightButton = function () {
	return this.rightButton;
};
TextField.prototype.getRightButtonMode = function () {
	return this.rightButtonMode;
};
TextField.prototype.getRightButtonPadding = function () {
	return this.rightButtonPadding;
};
TextField.prototype.getSelection = function () {
	return this.selection;
};
TextField.prototype.getSize = function () {
	return this.size;
};
TextField.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TextField.prototype.getSuppressReturn = function () {
	return this.suppressReturn;
};
TextField.prototype.getTextAlign = function () {
	return this.textAlign;
};
TextField.prototype.getTintColor = function () {
	return this.tintColor;
};
TextField.prototype.getTop = function () {
	return this.top;
};
TextField.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TextField.prototype.getTransform = function () {
	return this.transform;
};
TextField.prototype.getValue = function () {
	return this.value;
};
TextField.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
TextField.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TextField.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TextField.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TextField.prototype.getVisible = function () {
	return this.visible;
};
TextField.prototype.getWidth = function () {
	return this.width;
};
TextField.prototype.getZIndex = function () {
	return this.zIndex;
};
TextField.prototype.hasText = function () {
	return true;
};
TextField.prototype.hide = function () {
};
TextField.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
TextField.prototype.removeAllChildren = function () {
};
TextField.prototype.removeEventListener = function () {
};
TextField.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TextField.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TextField.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TextField.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TextField.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TextField.prototype.setAppearance = function (property) {
	this.appearance = property;
};
TextField.prototype.setAttributedHintText = function (property) {
	this.attributedHintText = property;
};
TextField.prototype.setAttributedString = function (property) {
	this.attributedString = property;
};
TextField.prototype.setAutoLink = function (property) {
	this.autoLink = property;
};
TextField.prototype.setAutocapitalization = function (property) {
	this.autocapitalization = property;
};
TextField.prototype.setAutocorrect = function (property) {
	this.autocorrect = property;
};
TextField.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TextField.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TextField.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TextField.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TextField.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TextField.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TextField.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TextField.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TextField.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TextField.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
TextField.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
TextField.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TextField.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TextField.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TextField.prototype.setBorderStyle = function (property) {
	this.borderStyle = property;
};
TextField.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TextField.prototype.setBottom = function (property) {
	this.bottom = property;
};
TextField.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TextField.prototype.setCenter = function (property) {
	this.center = property;
};
TextField.prototype.setClearButtonMode = function (property) {
	this.clearButtonMode = property;
};
TextField.prototype.setClearOnEdit = function (property) {
	this.clearOnEdit = property;
};
TextField.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TextField.prototype.setColor = function (property) {
	this.color = property;
};
TextField.prototype.setEditable = function (property) {
	this.editable = property;
};
TextField.prototype.setEllipsize = function (property) {
	this.ellipsize = property;
};
TextField.prototype.setEnableReturnKey = function (property) {
	this.enableReturnKey = property;
};
TextField.prototype.setEnabled = function () {
	throw new Error('Ti.UI.TextField.setEnabled was deprecated, since 3.3.0');
};
TextField.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TextField.prototype.setFont = function (property) {
	this.font = property;
};
TextField.prototype.setHeight = function (property) {
	this.height = property;
};
TextField.prototype.setHintText = function (property) {
	this.hintText = property;
};
TextField.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TextField.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TextField.prototype.setKeyboardToolbar = function (property) {
	this.keyboardToolbar = property;
};
TextField.prototype.setKeyboardToolbarColor = function (property) {
	this.keyboardToolbarColor = property;
};
TextField.prototype.setKeyboardToolbarHeight = function (property) {
	this.keyboardToolbarHeight = property;
};
TextField.prototype.setKeyboardType = function (property) {
	this.keyboardType = property;
};
TextField.prototype.setLayout = function (property) {
	this.layout = property;
};
TextField.prototype.setLeft = function (property) {
	this.left = property;
};
TextField.prototype.setLeftButton = function (property) {
	this.leftButton = property;
};
TextField.prototype.setLeftButtonMode = function (property) {
	this.leftButtonMode = property;
};
TextField.prototype.setLeftButtonPadding = function (property) {
	this.leftButtonPadding = property;
};
TextField.prototype.setMaxLength = function (property) {
	this.maxLength = property;
};
TextField.prototype.setMinimumFontSize = function (property) {
	this.minimumFontSize = property;
};
TextField.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TextField.prototype.setPaddingLeft = function (property) {
	this.paddingLeft = property;
};
TextField.prototype.setPaddingRight = function (property) {
	this.paddingRight = property;
};
TextField.prototype.setPasswordMask = function (property) {
	this.passwordMask = property;
};
TextField.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TextField.prototype.setReturnKeyType = function (property) {
	this.returnKeyType = property;
};
TextField.prototype.setRight = function (property) {
	this.right = property;
};
TextField.prototype.setRightButton = function (property) {
	this.rightButton = property;
};
TextField.prototype.setRightButtonMode = function (property) {
	this.rightButtonMode = property;
};
TextField.prototype.setRightButtonPadding = function (property) {
	this.rightButtonPadding = property;
};
TextField.prototype.setSelection = function (property) {
	this.selection = property;
};
TextField.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TextField.prototype.setSuppressReturn = function (property) {
	this.suppressReturn = property;
};
TextField.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
TextField.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TextField.prototype.setTop = function (property) {
	this.top = property;
};
TextField.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TextField.prototype.setTransform = function (property) {
	this.transform = property;
};
TextField.prototype.setValue = function (property) {
	this.value = property;
};
TextField.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
TextField.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TextField.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TextField.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TextField.prototype.setVisible = function (property) {
	this.visible = property;
};
TextField.prototype.setWidth = function (property) {
	this.width = property;
};
TextField.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TextField.prototype.show = function () {
};
TextField.prototype.startLayout = function () {
	throw new Error('Ti.UI.TextField.startLayout was deprecated, since 3.0.0');
};
TextField.prototype.toImage = function () {
	return {};
};
TextField.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TextField.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TextField(properties);
};