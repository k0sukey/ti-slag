function TextField(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.TextField';
	this.appearance = properties.appearance || 0;
	this.attributedHintText = properties.attributedHintText || '';
	this.attributedString = properties.attributedString || '';
	this.autoLink = properties.autoLink || 0;
	this.autocapitalization = properties.autocapitalization || 0;
	this.autocorrect = properties.autocorrect || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderStyle = properties.borderStyle || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clearButtonMode = properties.clearButtonMode || 0;
	this.clearOnEdit = properties.clearOnEdit || true;
	this.clipMode = properties.clipMode || 0;
	this.color = properties.color || '';
	this.editable = properties.editable || true;
	this.ellipsize = properties.ellipsize || true;
	this.enableReturnKey = properties.enableReturnKey || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.hintText = properties.hintText || '';
	this.hintTextColor = properties.hintTextColor || '';
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.keyboardToolbar = properties.keyboardToolbar || [];
	this.keyboardToolbarColor = properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || 0;
	this.keyboardType = properties.keyboardType || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.leftButton = properties.leftButton || {};
	this.leftButtonMode = properties.leftButtonMode || 0;
	this.leftButtonPadding = properties.leftButtonPadding || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.maxLength = properties.maxLength || 0;
	this.minimumFontSize = properties.minimumFontSize || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.paddingLeft = properties.paddingLeft || 0;
	this.paddingRight = properties.paddingRight || 0;
	this.passwordMask = properties.passwordMask || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.returnKeyType = properties.returnKeyType || 0;
	this.right = properties.right || 0;
	this.rightButton = properties.rightButton || {};
	this.rightButtonMode = properties.rightButtonMode || 0;
	this.rightButtonPadding = properties.rightButtonPadding || 0;
	this.selection = properties.selection || {};
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.suppressReturn = properties.suppressReturn || true;
	this.textAlign = properties.textAlign || '';
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || '';
	this.verticalAlign = properties.verticalAlign || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
TextField.prototype.add = function () {
};
TextField.prototype.addEventListener = function () {
};
TextField.prototype.animate = function () {
};
TextField.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
TextField.prototype.getAccessibilityHint = function () {
	return '';
};
TextField.prototype.getAccessibilityLabel = function () {
	return '';
};
TextField.prototype.getAccessibilityValue = function () {
	return '';
};
TextField.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.getApiName = function () {
	return '';
};
TextField.prototype.getAppearance = function () {
	return 0;
};
TextField.prototype.getAttributedHintText = function () {
	return '';
};
TextField.prototype.getAttributedString = function () {
	return '';
};
TextField.prototype.getAutoLink = function () {
	return 0;
};
TextField.prototype.getAutocapitalization = function () {
	return 0;
};
TextField.prototype.getAutocorrect = function () {
	return true;
};
TextField.prototype.getBackgroundColor = function () {
	return '';
};
TextField.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TextField.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TextField.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TextField.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TextField.prototype.getBackgroundGradient = function () {
	return {};
};
TextField.prototype.getBackgroundImage = function () {
	return '';
};
TextField.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TextField.prototype.getBackgroundRepeat = function () {
	return true;
};
TextField.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TextField.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TextField.prototype.getBackgroundTopCap = function () {
	return 0;
};
TextField.prototype.getBorderColor = function () {
	return '';
};
TextField.prototype.getBorderRadius = function () {
	return 0;
};
TextField.prototype.getBorderStyle = function () {
	return 0;
};
TextField.prototype.getBorderWidth = function () {
	return 0;
};
TextField.prototype.getBottom = function () {
	return 0;
};
TextField.prototype.getBubbleParent = function () {
	return true;
};
TextField.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.getChildren = function () {
	return [];
};
TextField.prototype.getClearButtonMode = function () {
	return 0;
};
TextField.prototype.getClearOnEdit = function () {
	return true;
};
TextField.prototype.getClipMode = function () {
	return 0;
};
TextField.prototype.getColor = function () {
	return '';
};
TextField.prototype.getEditable = function () {
	return true;
};
TextField.prototype.getEllipsize = function () {
	return true;
};
TextField.prototype.getEnableReturnKey = function () {
	return true;
};
TextField.prototype.getFocusable = function () {
	return true;
};
TextField.prototype.getFont = function () {
	return {};
};
TextField.prototype.getHeight = function () {
	return 0;
};
TextField.prototype.getHintText = function () {
	return '';
};
TextField.prototype.getHintTextColor = function () {
	return '';
};
TextField.prototype.getHorizontalWrap = function () {
	return true;
};
TextField.prototype.getKeepScreenOn = function () {
	return true;
};
TextField.prototype.getKeyboardToolbar = function () {
	return [];
};
TextField.prototype.getKeyboardToolbarColor = function () {
	return '';
};
TextField.prototype.getKeyboardToolbarHeight = function () {
	return 0;
};
TextField.prototype.getKeyboardType = function () {
	return 0;
};
TextField.prototype.getLayout = function () {
	return '';
};
TextField.prototype.getLeft = function () {
	return 0;
};
TextField.prototype.getLeftButton = function () {
	return {};
};
TextField.prototype.getLeftButtonMode = function () {
	return 0;
};
TextField.prototype.getLeftButtonPadding = function () {
	return 0;
};
TextField.prototype.getLifecycleContainer = function () {
	return {};
};
TextField.prototype.getMaxLength = function () {
	return 0;
};
TextField.prototype.getMinimumFontSize = function () {
	return 0;
};
TextField.prototype.getOpacity = function () {
	return 0;
};
TextField.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TextField.prototype.getPaddingLeft = function () {
	return 0;
};
TextField.prototype.getPaddingRight = function () {
	return 0;
};
TextField.prototype.getPasswordMask = function () {
	return true;
};
TextField.prototype.getPullBackgroundColor = function () {
	return '';
};
TextField.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextField.prototype.getReturnKeyType = function () {
	return 0;
};
TextField.prototype.getRight = function () {
	return 0;
};
TextField.prototype.getRightButton = function () {
	return {};
};
TextField.prototype.getRightButtonMode = function () {
	return 0;
};
TextField.prototype.getRightButtonPadding = function () {
	return 0;
};
TextField.prototype.getSelection = function () {
	return {};
};
TextField.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextField.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TextField.prototype.getSuppressReturn = function () {
	return true;
};
TextField.prototype.getTextAlign = function () {
	return '';
};
TextField.prototype.getTintColor = function () {
	return '';
};
TextField.prototype.getTop = function () {
	return 0;
};
TextField.prototype.getTouchEnabled = function () {
	return true;
};
TextField.prototype.getTransform = function () {
	return {};
};
TextField.prototype.getValue = function () {
	return '';
};
TextField.prototype.getVerticalAlign = function () {
	return 0;
};
TextField.prototype.getViewShadowColor = function () {
	return '';
};
TextField.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.getViewShadowRadius = function () {
	return 0;
};
TextField.prototype.getVisible = function () {
	return true;
};
TextField.prototype.getWidth = function () {
	return 0;
};
TextField.prototype.getZIndex = function () {
	return 0;
};
TextField.prototype.hasText = function () {
	return true;
};
TextField.prototype.hide = function () {
};
TextField.prototype.remove = function () {
};
TextField.prototype.removeAllChildren = function () {
};
TextField.prototype.removeEventListener = function () {
};
TextField.prototype.setAccessibilityHidden = function () {
};
TextField.prototype.setAccessibilityHint = function () {
};
TextField.prototype.setAccessibilityLabel = function () {
};
TextField.prototype.setAccessibilityValue = function () {
};
TextField.prototype.setAnchorPoint = function () {
};
TextField.prototype.setAppearance = function () {
};
TextField.prototype.setAttributedHintText = function () {
};
TextField.prototype.setAttributedString = function () {
};
TextField.prototype.setAutoLink = function () {
};
TextField.prototype.setAutocapitalization = function () {
};
TextField.prototype.setAutocorrect = function () {
};
TextField.prototype.setBackgroundColor = function () {
};
TextField.prototype.setBackgroundDisabledColor = function () {
};
TextField.prototype.setBackgroundDisabledImage = function () {
};
TextField.prototype.setBackgroundFocusedColor = function () {
};
TextField.prototype.setBackgroundFocusedImage = function () {
};
TextField.prototype.setBackgroundGradient = function () {
};
TextField.prototype.setBackgroundImage = function () {
};
TextField.prototype.setBackgroundLeftCap = function () {
};
TextField.prototype.setBackgroundRepeat = function () {
};
TextField.prototype.setBackgroundSelectedColor = function () {
};
TextField.prototype.setBackgroundSelectedImage = function () {
};
TextField.prototype.setBackgroundTopCap = function () {
};
TextField.prototype.setBorderColor = function () {
};
TextField.prototype.setBorderRadius = function () {
};
TextField.prototype.setBorderStyle = function () {
};
TextField.prototype.setBorderWidth = function () {
};
TextField.prototype.setBottom = function () {
};
TextField.prototype.setBubbleParent = function () {
};
TextField.prototype.setCenter = function () {
};
TextField.prototype.setClearButtonMode = function () {
};
TextField.prototype.setClearOnEdit = function () {
};
TextField.prototype.setClipMode = function () {
};
TextField.prototype.setColor = function () {
};
TextField.prototype.setEditable = function () {
};
TextField.prototype.setEllipsize = function () {
};
TextField.prototype.setEnableReturnKey = function () {
};
TextField.prototype.setFocusable = function () {
};
TextField.prototype.setFont = function () {
};
TextField.prototype.setHeight = function () {
};
TextField.prototype.setHintText = function () {
};
TextField.prototype.setHintTextColor = function () {
};
TextField.prototype.setHorizontalWrap = function () {
};
TextField.prototype.setKeepScreenOn = function () {
};
TextField.prototype.setKeyboardToolbar = function () {
};
TextField.prototype.setKeyboardToolbarColor = function () {
};
TextField.prototype.setKeyboardToolbarHeight = function () {
};
TextField.prototype.setKeyboardType = function () {
};
TextField.prototype.setLayout = function () {
};
TextField.prototype.setLeft = function () {
};
TextField.prototype.setLeftButton = function () {
};
TextField.prototype.setLeftButtonMode = function () {
};
TextField.prototype.setLeftButtonPadding = function () {
};
TextField.prototype.setLifecycleContainer = function () {
};
TextField.prototype.setMaxLength = function () {
};
TextField.prototype.setMinimumFontSize = function () {
};
TextField.prototype.setOpacity = function () {
};
TextField.prototype.setPaddingLeft = function () {
};
TextField.prototype.setPaddingRight = function () {
};
TextField.prototype.setPasswordMask = function () {
};
TextField.prototype.setPullBackgroundColor = function () {
};
TextField.prototype.setReturnKeyType = function () {
};
TextField.prototype.setRight = function () {
};
TextField.prototype.setRightButton = function () {
};
TextField.prototype.setRightButtonMode = function () {
};
TextField.prototype.setRightButtonPadding = function () {
};
TextField.prototype.setSelection = function () {
};
TextField.prototype.setSoftKeyboardOnFocus = function () {
};
TextField.prototype.setSuppressReturn = function () {
};
TextField.prototype.setTextAlign = function () {
};
TextField.prototype.setTintColor = function () {
};
TextField.prototype.setTop = function () {
};
TextField.prototype.setTouchEnabled = function () {
};
TextField.prototype.setTransform = function () {
};
TextField.prototype.setValue = function () {
};
TextField.prototype.setVerticalAlign = function () {
};
TextField.prototype.setViewShadowColor = function () {
};
TextField.prototype.setViewShadowOffset = function () {
};
TextField.prototype.setViewShadowRadius = function () {
};
TextField.prototype.setVisible = function () {
};
TextField.prototype.setWidth = function () {
};
TextField.prototype.setZIndex = function () {
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