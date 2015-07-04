function TextField(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.TextField';
	this.appearance = properties.appearance || undefined;
	this.attributedHintText = properties.attributedHintText || undefined;
	this.attributedString = properties.attributedString || undefined;
	this.autoLink = properties.autoLink || undefined;
	this.autocapitalization = properties.autocapitalization || undefined;
	this.autocorrect = properties.autocorrect || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderStyle = properties.borderStyle || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clearButtonMode = properties.clearButtonMode || undefined;
	this.clearOnEdit = properties.clearOnEdit || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.editable = properties.editable || undefined;
	this.ellipsize = properties.ellipsize || undefined;
	this.enableReturnKey = properties.enableReturnKey || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.hintTextColor = properties.hintTextColor || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keyboardToolbar = properties.keyboardToolbar || undefined;
	this.keyboardToolbarColor = properties.keyboardToolbarColor || undefined;
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || undefined;
	this.keyboardType = properties.keyboardType || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftButton = properties.leftButton || undefined;
	this.leftButtonMode = properties.leftButtonMode || undefined;
	this.leftButtonPadding = properties.leftButtonPadding || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.maxLength = properties.maxLength || undefined;
	this.minimumFontSize = properties.minimumFontSize || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.paddingLeft = properties.paddingLeft || undefined;
	this.paddingRight = properties.paddingRight || undefined;
	this.passwordMask = properties.passwordMask || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.returnKeyType = properties.returnKeyType || undefined;
	this.right = properties.right || undefined;
	this.rightButton = properties.rightButton || undefined;
	this.rightButtonMode = properties.rightButtonMode || undefined;
	this.rightButtonPadding = properties.rightButtonPadding || undefined;
	this.selection = properties.selection || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.suppressReturn = properties.suppressReturn || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
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
TextField.prototype.getRightButtonMode = function () {
	return 0;
};
TextField.prototype.getRightButtonPadding = function () {
	return 0;
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