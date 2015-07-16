function TextField(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TextField';
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.appearance = properties.appearance || 0;
	this.attributedString = properties.attributedString || '';
	this.attributedHintText = properties.attributedHintText || '';
	this.autocorrect = properties.autocorrect || true;
	this.autoLink = properties.autoLink || 0;
	this.clearOnEdit = properties.clearOnEdit || true;
	this.font = properties.font || {};
	this.hintTextColor = properties.hintTextColor || '';
	this.keyboardToolbar = properties.keyboardToolbar || [];
	this.keyboardToolbarColor = properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || 0;
	this.leftButton = properties.leftButton || {};
	this.leftButtonPadding = properties.leftButtonPadding || 0;
	this.minimumFontSize = properties.minimumFontSize || 0;
	this.paddingLeft = properties.paddingLeft || 0;
	this.paddingRight = properties.paddingRight || 0;
	this.rightButton = properties.rightButton || {};
	this.rightButtonPadding = properties.rightButtonPadding || 0;
	this.selection = properties.selection || {};
	this.autocapitalization = properties.autocapitalization || 0;
	this.borderStyle = properties.borderStyle || 0;
	this.clearButtonMode = properties.clearButtonMode || 0;
	this.color = properties.color || '';
	this.editable = properties.editable || true;
	this.ellipsize = properties.ellipsize || true;
	this.enableReturnKey = properties.enableReturnKey || true;
	this.hintText = properties.hintText || '';
	this.keyboardType = properties.keyboardType || 0;
	this.leftButtonMode = properties.leftButtonMode || 0;
	this.maxLength = properties.maxLength || 0;
	this.passwordMask = properties.passwordMask || true;
	this.returnKeyType = properties.returnKeyType || 0;
	this.rightButtonMode = properties.rightButtonMode || 0;
	this.suppressReturn = properties.suppressReturn || true;
	this.textAlign = properties.textAlign || '';
	this.value = properties.value || '';
	this.verticalAlign = properties.verticalAlign || 0;
	return this;
}
TextField.prototype.addEventListener = function () {
};
TextField.prototype.removeEventListener = function () {
};
TextField.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
TextField.prototype.add = function () {
};
TextField.prototype.animate = function () {
};
TextField.prototype.hide = function () {
};
TextField.prototype.remove = function () {
};
TextField.prototype.show = function () {
};
TextField.prototype.setSelection = function () {
};
TextField.prototype.blur = function () {
};
TextField.prototype.focus = function () {
};
TextField.prototype.hasText = function () {
	return true;
};
TextField.prototype.getBubbleParent = function () {
	return true;
};
TextField.prototype.setBubbleParent = function () {
};
TextField.prototype.getApiName = function () {
	return '';
};
TextField.prototype.getLifecycleContainer = function () {
	return {};
};
TextField.prototype.setLifecycleContainer = function () {
};
TextField.prototype.getAccessibilityHidden = function () {
	return true;
};
TextField.prototype.setAccessibilityHidden = function () {
};
TextField.prototype.getAccessibilityHint = function () {
	return '';
};
TextField.prototype.setAccessibilityHint = function () {
};
TextField.prototype.getAccessibilityLabel = function () {
	return '';
};
TextField.prototype.setAccessibilityLabel = function () {
};
TextField.prototype.getAccessibilityValue = function () {
	return '';
};
TextField.prototype.setAccessibilityValue = function () {
};
TextField.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.setAnchorPoint = function () {
};
TextField.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TextField.prototype.setBackgroundDisabledColor = function () {
};
TextField.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TextField.prototype.setBackgroundDisabledImage = function () {
};
TextField.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TextField.prototype.setBackgroundFocusedColor = function () {
};
TextField.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TextField.prototype.setBackgroundFocusedImage = function () {
};
TextField.prototype.getBackgroundGradient = function () {
	return {};
};
TextField.prototype.setBackgroundGradient = function () {
};
TextField.prototype.getBackgroundImage = function () {
	return '';
};
TextField.prototype.setBackgroundImage = function () {
};
TextField.prototype.getBackgroundRepeat = function () {
	return true;
};
TextField.prototype.setBackgroundRepeat = function () {
};
TextField.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TextField.prototype.setBackgroundLeftCap = function () {
};
TextField.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TextField.prototype.setBackgroundSelectedColor = function () {
};
TextField.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TextField.prototype.setBackgroundSelectedImage = function () {
};
TextField.prototype.getBackgroundTopCap = function () {
	return 0;
};
TextField.prototype.setBackgroundTopCap = function () {
};
TextField.prototype.getClipMode = function () {
	return 0;
};
TextField.prototype.setClipMode = function () {
};
TextField.prototype.getFocusable = function () {
	return true;
};
TextField.prototype.setFocusable = function () {
};
TextField.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TextField.prototype.setOverrideCurrentAnimation = function () {
};
TextField.prototype.getPullBackgroundColor = function () {
	return '';
};
TextField.prototype.setPullBackgroundColor = function () {
};
TextField.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TextField.prototype.setSoftKeyboardOnFocus = function () {
};
TextField.prototype.getTransform = function () {
	return {};
};
TextField.prototype.setTransform = function () {
};
TextField.prototype.getViewShadowRadius = function () {
	return 0;
};
TextField.prototype.setViewShadowRadius = function () {
};
TextField.prototype.getViewShadowColor = function () {
	return '';
};
TextField.prototype.setViewShadowColor = function () {
};
TextField.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.setViewShadowOffset = function () {
};
TextField.prototype.getHorizontalWrap = function () {
	return true;
};
TextField.prototype.setHorizontalWrap = function () {
};
TextField.prototype.getZIndex = function () {
	return 0;
};
TextField.prototype.setZIndex = function () {
};
TextField.prototype.getKeepScreenOn = function () {
	return true;
};
TextField.prototype.setKeepScreenOn = function () {
};
TextField.prototype.getBackgroundColor = function () {
	return '';
};
TextField.prototype.setBackgroundColor = function () {
};
TextField.prototype.getBorderColor = function () {
	return '';
};
TextField.prototype.setBorderColor = function () {
};
TextField.prototype.getBorderRadius = function () {
	return 0;
};
TextField.prototype.setBorderRadius = function () {
};
TextField.prototype.getBorderWidth = function () {
	return 0;
};
TextField.prototype.setBorderWidth = function () {
};
TextField.prototype.getBottom = function () {
	return '';
};
TextField.prototype.setBottom = function () {
};
TextField.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextField.prototype.setCenter = function () {
};
TextField.prototype.getChildren = function () {
	return [];
};
TextField.prototype.getHeight = function () {
	return '';
};
TextField.prototype.setHeight = function () {
};
TextField.prototype.getLayout = function () {
	return '';
};
TextField.prototype.setLayout = function () {
};
TextField.prototype.getLeft = function () {
	return '';
};
TextField.prototype.setLeft = function () {
};
TextField.prototype.getOpacity = function () {
	return 0;
};
TextField.prototype.setOpacity = function () {
};
TextField.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextField.prototype.getRight = function () {
	return '';
};
TextField.prototype.setRight = function () {
};
TextField.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextField.prototype.getTintColor = function () {
	return '';
};
TextField.prototype.setTintColor = function () {
};
TextField.prototype.getTop = function () {
	return '';
};
TextField.prototype.setTop = function () {
};
TextField.prototype.getTouchEnabled = function () {
	return true;
};
TextField.prototype.setTouchEnabled = function () {
};
TextField.prototype.getVisible = function () {
	return true;
};
TextField.prototype.setVisible = function () {
};
TextField.prototype.getWidth = function () {
	return '';
};
TextField.prototype.setWidth = function () {
};
TextField.prototype.getAppearance = function () {
	return 0;
};
TextField.prototype.setAppearance = function () {
};
TextField.prototype.getAttributedString = function () {
	return '';
};
TextField.prototype.setAttributedString = function () {
};
TextField.prototype.getAttributedHintText = function () {
	return '';
};
TextField.prototype.setAttributedHintText = function () {
};
TextField.prototype.getAutocorrect = function () {
	return true;
};
TextField.prototype.setAutocorrect = function () {
};
TextField.prototype.getAutoLink = function () {
	return 0;
};
TextField.prototype.setAutoLink = function () {
};
TextField.prototype.getClearOnEdit = function () {
	return true;
};
TextField.prototype.setClearOnEdit = function () {
};
TextField.prototype.getFont = function () {
	return {};
};
TextField.prototype.setFont = function () {
};
TextField.prototype.getHintTextColor = function () {
	return '';
};
TextField.prototype.setHintTextColor = function () {
};
TextField.prototype.getKeyboardToolbar = function () {
	return [];
};
TextField.prototype.setKeyboardToolbar = function () {
};
TextField.prototype.getKeyboardToolbarColor = function () {
	return '';
};
TextField.prototype.setKeyboardToolbarColor = function () {
};
TextField.prototype.getKeyboardToolbarHeight = function () {
	return 0;
};
TextField.prototype.setKeyboardToolbarHeight = function () {
};
TextField.prototype.getLeftButton = function () {
	return {};
};
TextField.prototype.setLeftButton = function () {
};
TextField.prototype.getLeftButtonPadding = function () {
	return 0;
};
TextField.prototype.setLeftButtonPadding = function () {
};
TextField.prototype.getMinimumFontSize = function () {
	return 0;
};
TextField.prototype.setMinimumFontSize = function () {
};
TextField.prototype.getPaddingLeft = function () {
	return 0;
};
TextField.prototype.setPaddingLeft = function () {
};
TextField.prototype.getPaddingRight = function () {
	return 0;
};
TextField.prototype.setPaddingRight = function () {
};
TextField.prototype.getRightButton = function () {
	return {};
};
TextField.prototype.setRightButton = function () {
};
TextField.prototype.getRightButtonPadding = function () {
	return 0;
};
TextField.prototype.setRightButtonPadding = function () {
};
TextField.prototype.getSelection = function () {
	return {};
};
TextField.prototype.getAutocapitalization = function () {
	return 0;
};
TextField.prototype.setAutocapitalization = function () {
};
TextField.prototype.getBorderStyle = function () {
	return 0;
};
TextField.prototype.setBorderStyle = function () {
};
TextField.prototype.getClearButtonMode = function () {
	return 0;
};
TextField.prototype.setClearButtonMode = function () {
};
TextField.prototype.getColor = function () {
	return '';
};
TextField.prototype.setColor = function () {
};
TextField.prototype.getEditable = function () {
	return true;
};
TextField.prototype.setEditable = function () {
};
TextField.prototype.getEllipsize = function () {
	return true;
};
TextField.prototype.setEllipsize = function () {
};
TextField.prototype.getEnableReturnKey = function () {
	return true;
};
TextField.prototype.setEnableReturnKey = function () {
};
TextField.prototype.getHintText = function () {
	return '';
};
TextField.prototype.setHintText = function () {
};
TextField.prototype.getKeyboardType = function () {
	return 0;
};
TextField.prototype.setKeyboardType = function () {
};
TextField.prototype.getLeftButtonMode = function () {
	return 0;
};
TextField.prototype.setLeftButtonMode = function () {
};
TextField.prototype.getMaxLength = function () {
	return 0;
};
TextField.prototype.setMaxLength = function () {
};
TextField.prototype.getPasswordMask = function () {
	return true;
};
TextField.prototype.setPasswordMask = function () {
};
TextField.prototype.getReturnKeyType = function () {
	return 0;
};
TextField.prototype.setReturnKeyType = function () {
};
TextField.prototype.getRightButtonMode = function () {
	return 0;
};
TextField.prototype.setRightButtonMode = function () {
};
TextField.prototype.getSuppressReturn = function () {
	return true;
};
TextField.prototype.setSuppressReturn = function () {
};
TextField.prototype.getTextAlign = function () {
	return '';
};
TextField.prototype.setTextAlign = function () {
};
TextField.prototype.getValue = function () {
	return '';
};
TextField.prototype.setValue = function () {
};
TextField.prototype.getVerticalAlign = function () {
	return '';
};
TextField.prototype.setVerticalAlign = function () {
};
module.exports = function (properties) {
	return new TextField(properties);
};