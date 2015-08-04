var crypto = require('crypto');
function TextField(__SLAG__properties) {
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
		throw new Error('Ti.UI.TextField.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TextField';
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
		throw new Error('Ti.UI.TextField.animatedCenter is read only property');
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
		throw new Error('Ti.UI.TextField.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TextField.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TextField.size is read only property');
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
	this.appearance = __SLAG__properties.appearance || 0;
	this.attributedString = __SLAG__properties.attributedString || '';
	this.attributedHintText = __SLAG__properties.attributedHintText || '';
	this.autocorrect = __SLAG__properties.autocorrect || true;
	this.autoLink = __SLAG__properties.autoLink || 0;
	this.clearOnEdit = __SLAG__properties.clearOnEdit || true;
	this.font = __SLAG__properties.font || {};
	this.hintTextColor = __SLAG__properties.hintTextColor || '';
	this.keyboardToolbar = __SLAG__properties.keyboardToolbar || [];
	this.keyboardToolbarColor = __SLAG__properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = __SLAG__properties.keyboardToolbarHeight || 0;
	this.leftButton = __SLAG__properties.leftButton || {};
	this.leftButtonPadding = __SLAG__properties.leftButtonPadding || 0;
	this.minimumFontSize = __SLAG__properties.minimumFontSize || 0;
	this.paddingLeft = __SLAG__properties.paddingLeft || 0;
	this.paddingRight = __SLAG__properties.paddingRight || 0;
	this.rightButton = __SLAG__properties.rightButton || {};
	this.rightButtonPadding = __SLAG__properties.rightButtonPadding || 0;
	if (__SLAG__properties.selection) {
		throw new Error('Ti.UI.TextField.selection is read only property');
	}
	this.selection = {};
	this.autocapitalization = __SLAG__properties.autocapitalization || 0;
	this.borderStyle = __SLAG__properties.borderStyle || 0;
	this.clearButtonMode = __SLAG__properties.clearButtonMode || 0;
	this.color = __SLAG__properties.color || '';
	this.editable = __SLAG__properties.editable || true;
	this.ellipsize = __SLAG__properties.ellipsize || true;
	this.enableReturnKey = __SLAG__properties.enableReturnKey || true;
	this.hintText = __SLAG__properties.hintText || '';
	this.keyboardType = __SLAG__properties.keyboardType || 0;
	this.leftButtonMode = __SLAG__properties.leftButtonMode || 0;
	this.maxLength = __SLAG__properties.maxLength || 0;
	this.passwordMask = __SLAG__properties.passwordMask || true;
	this.returnKeyType = __SLAG__properties.returnKeyType || 0;
	this.rightButtonMode = __SLAG__properties.rightButtonMode || 0;
	this.suppressReturn = __SLAG__properties.suppressReturn || true;
	this.textAlign = __SLAG__properties.textAlign || '';
	this.value = __SLAG__properties.value || '';
	this.verticalAlign = __SLAG__properties.verticalAlign || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TextField.prototype.addEventListener = function () {
};
TextField.prototype.removeEventListener = function () {
};
TextField.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TextField.prototype.fireEvent = function () {
};
TextField.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TextField.finishLayout was deprecated, since 3.0.0');
};
TextField.prototype.removeAllChildren = function () {
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
TextField.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TextField.prototype.animate = function () {
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
TextField.prototype.show = function () {
};
TextField.prototype.setSelection = function (property) {
	this.selection = property;
};
TextField.prototype.blur = function () {
};
TextField.prototype.focus = function () {
};
TextField.prototype.hasText = function () {
	return true;
};
TextField.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TextField.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TextField.prototype.getApiName = function () {
	return this.apiName;
};
TextField.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TextField.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TextField.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TextField.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TextField.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TextField.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TextField.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TextField.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TextField.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TextField.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TextField.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TextField.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TextField.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TextField.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TextField.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TextField.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TextField.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TextField.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TextField.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TextField.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TextField.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TextField.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TextField.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TextField.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TextField.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TextField.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TextField.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TextField.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TextField.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TextField.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
TextField.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
TextField.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
TextField.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
TextField.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TextField.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TextField.prototype.getClipMode = function () {
	return this.clipMode;
};
TextField.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TextField.prototype.getFocusable = function () {
	return this.focusable;
};
TextField.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TextField.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TextField.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
TextField.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TextField.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TextField.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TextField.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TextField.prototype.getTransform = function () {
	return this.transform;
};
TextField.prototype.setTransform = function (property) {
	this.transform = property;
};
TextField.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TextField.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TextField.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TextField.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TextField.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TextField.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TextField.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TextField.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TextField.prototype.getZIndex = function () {
	return this.zIndex;
};
TextField.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TextField.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TextField.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TextField.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TextField.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TextField.prototype.getBorderColor = function () {
	return this.borderColor;
};
TextField.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TextField.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TextField.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TextField.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TextField.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TextField.prototype.getBottom = function () {
	return this.bottom;
};
TextField.prototype.setBottom = function (property) {
	this.bottom = property;
};
TextField.prototype.getCenter = function () {
	return this.center;
};
TextField.prototype.setCenter = function (property) {
	this.center = property;
};
TextField.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TextField.prototype.getChildren = function () {
	return this.children;
};
TextField.prototype.getHeight = function () {
	return this.height;
};
TextField.prototype.setHeight = function (property) {
	this.height = property;
};
TextField.prototype.getLayout = function () {
	return this.layout;
};
TextField.prototype.setLayout = function (property) {
	this.layout = property;
};
TextField.prototype.getLeft = function () {
	return this.left;
};
TextField.prototype.setLeft = function (property) {
	this.left = property;
};
TextField.prototype.getOpacity = function () {
	return this.opacity;
};
TextField.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TextField.prototype.getRect = function () {
	return this.rect;
};
TextField.prototype.getRight = function () {
	return this.right;
};
TextField.prototype.setRight = function (property) {
	this.right = property;
};
TextField.prototype.getSize = function () {
	return this.size;
};
TextField.prototype.getTintColor = function () {
	return this.tintColor;
};
TextField.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TextField.prototype.getTop = function () {
	return this.top;
};
TextField.prototype.setTop = function (property) {
	this.top = property;
};
TextField.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TextField.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TextField.prototype.getVisible = function () {
	return this.visible;
};
TextField.prototype.setVisible = function (property) {
	this.visible = property;
};
TextField.prototype.getWidth = function () {
	return this.width;
};
TextField.prototype.setWidth = function (property) {
	this.width = property;
};
TextField.prototype.getAppearance = function () {
	return this.appearance;
};
TextField.prototype.setAppearance = function (property) {
	this.appearance = property;
};
TextField.prototype.getAttributedString = function () {
	return this.attributedString;
};
TextField.prototype.setAttributedString = function (property) {
	this.attributedString = property;
};
TextField.prototype.getAttributedHintText = function () {
	return this.attributedHintText;
};
TextField.prototype.setAttributedHintText = function (property) {
	this.attributedHintText = property;
};
TextField.prototype.getAutocorrect = function () {
	return this.autocorrect;
};
TextField.prototype.setAutocorrect = function (property) {
	this.autocorrect = property;
};
TextField.prototype.getAutoLink = function () {
	return this.autoLink;
};
TextField.prototype.setAutoLink = function (property) {
	this.autoLink = property;
};
TextField.prototype.getClearOnEdit = function () {
	return this.clearOnEdit;
};
TextField.prototype.setClearOnEdit = function (property) {
	this.clearOnEdit = property;
};
TextField.prototype.getFont = function () {
	return this.font;
};
TextField.prototype.setFont = function (property) {
	this.font = property;
};
TextField.prototype.getHintTextColor = function () {
	return this.hintTextColor;
};
TextField.prototype.setHintTextColor = function (property) {
	this.hintTextColor = property;
};
TextField.prototype.getKeyboardToolbar = function () {
	return this.keyboardToolbar;
};
TextField.prototype.setKeyboardToolbar = function (property) {
	this.keyboardToolbar = property;
};
TextField.prototype.getKeyboardToolbarColor = function () {
	return this.keyboardToolbarColor;
};
TextField.prototype.setKeyboardToolbarColor = function (property) {
	this.keyboardToolbarColor = property;
};
TextField.prototype.getKeyboardToolbarHeight = function () {
	return this.keyboardToolbarHeight;
};
TextField.prototype.setKeyboardToolbarHeight = function (property) {
	this.keyboardToolbarHeight = property;
};
TextField.prototype.getLeftButton = function () {
	return this.leftButton;
};
TextField.prototype.setLeftButton = function (property) {
	this.leftButton = property;
};
TextField.prototype.getLeftButtonPadding = function () {
	return this.leftButtonPadding;
};
TextField.prototype.setLeftButtonPadding = function (property) {
	this.leftButtonPadding = property;
};
TextField.prototype.getMinimumFontSize = function () {
	return this.minimumFontSize;
};
TextField.prototype.setMinimumFontSize = function (property) {
	this.minimumFontSize = property;
};
TextField.prototype.getPaddingLeft = function () {
	return this.paddingLeft;
};
TextField.prototype.setPaddingLeft = function (property) {
	this.paddingLeft = property;
};
TextField.prototype.getPaddingRight = function () {
	return this.paddingRight;
};
TextField.prototype.setPaddingRight = function (property) {
	this.paddingRight = property;
};
TextField.prototype.getRightButton = function () {
	return this.rightButton;
};
TextField.prototype.setRightButton = function (property) {
	this.rightButton = property;
};
TextField.prototype.getRightButtonPadding = function () {
	return this.rightButtonPadding;
};
TextField.prototype.setRightButtonPadding = function (property) {
	this.rightButtonPadding = property;
};
TextField.prototype.getSelection = function () {
	return this.selection;
};
TextField.prototype.getAutocapitalization = function () {
	return this.autocapitalization;
};
TextField.prototype.setAutocapitalization = function (property) {
	this.autocapitalization = property;
};
TextField.prototype.getBorderStyle = function () {
	return this.borderStyle;
};
TextField.prototype.setBorderStyle = function (property) {
	this.borderStyle = property;
};
TextField.prototype.getClearButtonMode = function () {
	return this.clearButtonMode;
};
TextField.prototype.setClearButtonMode = function (property) {
	this.clearButtonMode = property;
};
TextField.prototype.getColor = function () {
	return this.color;
};
TextField.prototype.setColor = function (property) {
	this.color = property;
};
TextField.prototype.getEditable = function () {
	return this.editable;
};
TextField.prototype.setEditable = function (property) {
	this.editable = property;
};
TextField.prototype.getEllipsize = function () {
	return this.ellipsize;
};
TextField.prototype.setEllipsize = function (property) {
	this.ellipsize = property;
};
TextField.prototype.getEnableReturnKey = function () {
	return this.enableReturnKey;
};
TextField.prototype.setEnableReturnKey = function (property) {
	this.enableReturnKey = property;
};
TextField.prototype.getHintText = function () {
	return this.hintText;
};
TextField.prototype.setHintText = function (property) {
	this.hintText = property;
};
TextField.prototype.getKeyboardType = function () {
	return this.keyboardType;
};
TextField.prototype.setKeyboardType = function (property) {
	this.keyboardType = property;
};
TextField.prototype.getLeftButtonMode = function () {
	return this.leftButtonMode;
};
TextField.prototype.setLeftButtonMode = function (property) {
	this.leftButtonMode = property;
};
TextField.prototype.getMaxLength = function () {
	return this.maxLength;
};
TextField.prototype.setMaxLength = function (property) {
	this.maxLength = property;
};
TextField.prototype.getPasswordMask = function () {
	return this.passwordMask;
};
TextField.prototype.setPasswordMask = function (property) {
	this.passwordMask = property;
};
TextField.prototype.getReturnKeyType = function () {
	return this.returnKeyType;
};
TextField.prototype.setReturnKeyType = function (property) {
	this.returnKeyType = property;
};
TextField.prototype.getRightButtonMode = function () {
	return this.rightButtonMode;
};
TextField.prototype.setRightButtonMode = function (property) {
	this.rightButtonMode = property;
};
TextField.prototype.getSuppressReturn = function () {
	return this.suppressReturn;
};
TextField.prototype.setSuppressReturn = function (property) {
	this.suppressReturn = property;
};
TextField.prototype.getTextAlign = function () {
	return this.textAlign;
};
TextField.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
TextField.prototype.getValue = function () {
	return this.value;
};
TextField.prototype.setValue = function (property) {
	this.value = property;
};
TextField.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
TextField.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
module.exports = function (properties) {
	return new TextField(properties);
};