var crypto = require('crypto');
function TextArea(__SLAG__properties) {
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
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clearOnEdit',
			'clipMode',
			'color',
			'editable',
			'ellipsize',
			'enableReturnKey',
			'focusable',
			'font',
			'handleLinks',
			'height',
			'hintText',
			'hintTextColor',
			'horizontalWrap',
			'keepScreenOn',
			'keyboardToolbar',
			'keyboardToolbarColor',
			'keyboardToolbarHeight',
			'keyboardType',
			'layout',
			'left',
			'lifecycleContainer',
			'maxLength',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'returnKeyType',
			'right',
			'scrollable',
			'scrollsToTop',
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
		throw new Error('Ti.UI.TextArea.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TextArea.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TextArea';
	this.appearance = __SLAG__properties.appearance || 0;
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
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.TextArea.children is read only property');
	}
	this.children = [];
	this.clearOnEdit = __SLAG__properties.clearOnEdit || true;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	this.editable = __SLAG__properties.editable || true;
	this.ellipsize = __SLAG__properties.ellipsize || true;
	this.enableReturnKey = __SLAG__properties.enableReturnKey || true;
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.handleLinks = __SLAG__properties.handleLinks || true;
	this.height = __SLAG__properties.height || 0;
	this.hintText = __SLAG__properties.hintText || '';
	this.hintTextColor = __SLAG__properties.hintTextColor || '';
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.keyboardToolbar = __SLAG__properties.keyboardToolbar || [];
	this.keyboardToolbarColor = __SLAG__properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = __SLAG__properties.keyboardToolbarHeight || 0;
	this.keyboardType = __SLAG__properties.keyboardType || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.maxLength = __SLAG__properties.maxLength || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TextArea.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.returnKeyType = __SLAG__properties.returnKeyType || 0;
	this.right = __SLAG__properties.right || 0;
	this.scrollable = __SLAG__properties.scrollable || true;
	this.scrollsToTop = __SLAG__properties.scrollsToTop || true;
	if (__SLAG__properties.selection) {
		throw new Error('Ti.UI.TextArea.selection is read only property');
	}
	this.selection = {};
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TextArea.size is read only property');
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
TextArea.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TextArea.prototype.addEventListener = function () {
};
TextArea.prototype.animate = function () {
};
TextArea.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TextArea.prototype.blur = function () {
};
TextArea.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TextArea.finishLayout was deprecated, since 3.0.0');
};
TextArea.prototype.fireEvent = function () {
};
TextArea.prototype.focus = function () {
};
TextArea.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TextArea.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TextArea.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TextArea.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TextArea.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TextArea.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TextArea.prototype.getApiName = function () {
	return this.apiName;
};
TextArea.prototype.getAppearance = function () {
	return this.appearance;
};
TextArea.prototype.getAttributedString = function () {
	return this.attributedString;
};
TextArea.prototype.getAutoLink = function () {
	return this.autoLink;
};
TextArea.prototype.getAutocapitalization = function () {
	return this.autocapitalization;
};
TextArea.prototype.getAutocorrect = function () {
	return this.autocorrect;
};
TextArea.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TextArea.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TextArea.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TextArea.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TextArea.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TextArea.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TextArea.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TextArea.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TextArea.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TextArea.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
TextArea.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
TextArea.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TextArea.prototype.getBorderColor = function () {
	return this.borderColor;
};
TextArea.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TextArea.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TextArea.prototype.getBottom = function () {
	return this.bottom;
};
TextArea.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TextArea.prototype.getCenter = function () {
	return this.center;
};
TextArea.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TextArea.prototype.getChildren = function () {
	return this.children;
};
TextArea.prototype.getClearOnEdit = function () {
	return this.clearOnEdit;
};
TextArea.prototype.getClipMode = function () {
	return this.clipMode;
};
TextArea.prototype.getColor = function () {
	return this.color;
};
TextArea.prototype.getEditable = function () {
	return this.editable;
};
TextArea.prototype.getEllipsize = function () {
	return this.ellipsize;
};
TextArea.prototype.getEnableReturnKey = function () {
	return this.enableReturnKey;
};
TextArea.prototype.getFocusable = function () {
	return this.focusable;
};
TextArea.prototype.getFont = function () {
	return this.font;
};
TextArea.prototype.getHandleLinks = function () {
	return this.handleLinks;
};
TextArea.prototype.getHeight = function () {
	return this.height;
};
TextArea.prototype.getHintText = function () {
	return this.hintText;
};
TextArea.prototype.getHintTextColor = function () {
	return this.hintTextColor;
};
TextArea.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TextArea.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TextArea.prototype.getKeyboardToolbar = function () {
	return this.keyboardToolbar;
};
TextArea.prototype.getKeyboardToolbarColor = function () {
	return this.keyboardToolbarColor;
};
TextArea.prototype.getKeyboardToolbarHeight = function () {
	return this.keyboardToolbarHeight;
};
TextArea.prototype.getKeyboardType = function () {
	return this.keyboardType;
};
TextArea.prototype.getLayout = function () {
	return this.layout;
};
TextArea.prototype.getLeft = function () {
	return this.left;
};
TextArea.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TextArea.prototype.getMaxLength = function () {
	return this.maxLength;
};
TextArea.prototype.getOpacity = function () {
	return this.opacity;
};
TextArea.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TextArea.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TextArea.prototype.getRect = function () {
	return this.rect;
};
TextArea.prototype.getReturnKeyType = function () {
	return this.returnKeyType;
};
TextArea.prototype.getRight = function () {
	return this.right;
};
TextArea.prototype.getScrollable = function () {
	return this.scrollable;
};
TextArea.prototype.getScrollsToTop = function () {
	return this.scrollsToTop;
};
TextArea.prototype.getSelection = function () {
	return this.selection;
};
TextArea.prototype.getSize = function () {
	return this.size;
};
TextArea.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TextArea.prototype.getSuppressReturn = function () {
	return this.suppressReturn;
};
TextArea.prototype.getTextAlign = function () {
	return this.textAlign;
};
TextArea.prototype.getTintColor = function () {
	return this.tintColor;
};
TextArea.prototype.getTop = function () {
	return this.top;
};
TextArea.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TextArea.prototype.getTransform = function () {
	return this.transform;
};
TextArea.prototype.getValue = function () {
	return this.value;
};
TextArea.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
TextArea.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TextArea.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TextArea.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TextArea.prototype.getVisible = function () {
	return this.visible;
};
TextArea.prototype.getWidth = function () {
	return this.width;
};
TextArea.prototype.getZIndex = function () {
	return this.zIndex;
};
TextArea.prototype.hasText = function () {
	return true;
};
TextArea.prototype.hide = function () {
};
TextArea.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
TextArea.prototype.removeAllChildren = function () {
};
TextArea.prototype.removeEventListener = function () {
};
TextArea.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TextArea.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TextArea.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TextArea.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TextArea.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TextArea.prototype.setAppearance = function (property) {
	this.appearance = property;
};
TextArea.prototype.setAttributedString = function (property) {
	this.attributedString = property;
};
TextArea.prototype.setAutoLink = function (property) {
	this.autoLink = property;
};
TextArea.prototype.setAutocapitalization = function (property) {
	this.autocapitalization = property;
};
TextArea.prototype.setAutocorrect = function (property) {
	this.autocorrect = property;
};
TextArea.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TextArea.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TextArea.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TextArea.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TextArea.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TextArea.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TextArea.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TextArea.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TextArea.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TextArea.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
TextArea.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
TextArea.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TextArea.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TextArea.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TextArea.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TextArea.prototype.setBottom = function (property) {
	this.bottom = property;
};
TextArea.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TextArea.prototype.setCenter = function (property) {
	this.center = property;
};
TextArea.prototype.setClearOnEdit = function (property) {
	this.clearOnEdit = property;
};
TextArea.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TextArea.prototype.setColor = function (property) {
	this.color = property;
};
TextArea.prototype.setEditable = function (property) {
	this.editable = property;
};
TextArea.prototype.setEllipsize = function (property) {
	this.ellipsize = property;
};
TextArea.prototype.setEnableReturnKey = function (property) {
	this.enableReturnKey = property;
};
TextArea.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TextArea.prototype.setFont = function (property) {
	this.font = property;
};
TextArea.prototype.setHandleLinks = function (property) {
	this.handleLinks = property;
};
TextArea.prototype.setHeight = function (property) {
	this.height = property;
};
TextArea.prototype.setHintText = function (property) {
	this.hintText = property;
};
TextArea.prototype.setHintTextColor = function (property) {
	this.hintTextColor = property;
};
TextArea.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TextArea.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TextArea.prototype.setKeyboardToolbar = function (property) {
	this.keyboardToolbar = property;
};
TextArea.prototype.setKeyboardToolbarColor = function (property) {
	this.keyboardToolbarColor = property;
};
TextArea.prototype.setKeyboardToolbarHeight = function (property) {
	this.keyboardToolbarHeight = property;
};
TextArea.prototype.setKeyboardType = function (property) {
	this.keyboardType = property;
};
TextArea.prototype.setLayout = function (property) {
	this.layout = property;
};
TextArea.prototype.setLeft = function (property) {
	this.left = property;
};
TextArea.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TextArea.prototype.setMaxLength = function (property) {
	this.maxLength = property;
};
TextArea.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TextArea.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TextArea.prototype.setReturnKeyType = function (property) {
	this.returnKeyType = property;
};
TextArea.prototype.setRight = function (property) {
	this.right = property;
};
TextArea.prototype.setScrollable = function (property) {
	this.scrollable = property;
};
TextArea.prototype.setScrollsToTop = function (property) {
	this.scrollsToTop = property;
};
TextArea.prototype.setSelection = function (property) {
	this.selection = property;
};
TextArea.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TextArea.prototype.setSuppressReturn = function (property) {
	this.suppressReturn = property;
};
TextArea.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
TextArea.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TextArea.prototype.setTop = function (property) {
	this.top = property;
};
TextArea.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TextArea.prototype.setTransform = function (property) {
	this.transform = property;
};
TextArea.prototype.setValue = function (property) {
	this.value = property;
};
TextArea.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
TextArea.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TextArea.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TextArea.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TextArea.prototype.setVisible = function (property) {
	this.visible = property;
};
TextArea.prototype.setWidth = function (property) {
	this.width = property;
};
TextArea.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TextArea.prototype.show = function () {
};
TextArea.prototype.startLayout = function () {
	throw new Error('Ti.UI.TextArea.startLayout was deprecated, since 3.0.0');
};
TextArea.prototype.toImage = function () {
	return {};
};
TextArea.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TextArea.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TextArea(properties);
};