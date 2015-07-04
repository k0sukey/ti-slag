function TextArea(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.TextArea';
	this.appearance = properties.appearance || undefined;
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
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clearOnEdit = properties.clearOnEdit || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.editable = properties.editable || undefined;
	this.ellipsize = properties.ellipsize || undefined;
	this.enableReturnKey = properties.enableReturnKey || undefined;
	if (properties.enabled) {
		throw new Error('Ti.UI.TextArea.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.handleLinks = properties.handleLinks || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keyboardToolbar = properties.keyboardToolbar || undefined;
	this.keyboardToolbarColor = properties.keyboardToolbarColor || undefined;
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || undefined;
	this.keyboardType = properties.keyboardType || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.maxLength = properties.maxLength || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.returnKeyType = properties.returnKeyType || undefined;
	this.right = properties.right || undefined;
	this.scrollable = properties.scrollable || undefined;
	this.scrollsToTop = properties.scrollsToTop || undefined;
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
TextArea.prototype.add = function () {
};
TextArea.prototype.addEventListener = function () {
};
TextArea.prototype.animate = function () {
};
TextArea.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
TextArea.prototype.getAccessibilityHint = function () {
	return '';
};
TextArea.prototype.getAccessibilityLabel = function () {
	return '';
};
TextArea.prototype.getAccessibilityValue = function () {
	return '';
};
TextArea.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.getApiName = function () {
	return '';
};
TextArea.prototype.getAppearance = function () {
	return 0;
};
TextArea.prototype.getAttributedString = function () {
	return '';
};
TextArea.prototype.getAutoLink = function () {
	return 0;
};
TextArea.prototype.getAutocapitalization = function () {
	return 0;
};
TextArea.prototype.getAutocorrect = function () {
	return true;
};
TextArea.prototype.getBackgroundColor = function () {
	return '';
};
TextArea.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TextArea.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TextArea.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TextArea.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TextArea.prototype.getBackgroundGradient = function () {
	return {};
};
TextArea.prototype.getBackgroundImage = function () {
	return '';
};
TextArea.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TextArea.prototype.getBackgroundRepeat = function () {
	return true;
};
TextArea.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TextArea.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TextArea.prototype.getBackgroundTopCap = function () {
	return 0;
};
TextArea.prototype.getBorderColor = function () {
	return '';
};
TextArea.prototype.getBorderRadius = function () {
	return 0;
};
TextArea.prototype.getBorderWidth = function () {
	return 0;
};
TextArea.prototype.getBottom = function () {
	return 0;
};
TextArea.prototype.getBubbleParent = function () {
	return true;
};
TextArea.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.getChildren = function () {
	return [];
};
TextArea.prototype.getClearOnEdit = function () {
	return true;
};
TextArea.prototype.getClipMode = function () {
	return 0;
};
TextArea.prototype.getColor = function () {
	return '';
};
TextArea.prototype.getEditable = function () {
	return true;
};
TextArea.prototype.getEllipsize = function () {
	return true;
};
TextArea.prototype.getEnableReturnKey = function () {
	return true;
};
TextArea.prototype.getEnabled = function () {
	throw new Error('Ti.UI.TextArea.getEnabled was deprecated, since 3.3.0');
};
TextArea.prototype.getFocusable = function () {
	return true;
};
TextArea.prototype.getHandleLinks = function () {
	return true;
};
TextArea.prototype.getHeight = function () {
	return 0;
};
TextArea.prototype.getHintText = function () {
	return '';
};
TextArea.prototype.getHorizontalWrap = function () {
	return true;
};
TextArea.prototype.getKeepScreenOn = function () {
	return true;
};
TextArea.prototype.getKeyboardToolbar = function () {
	return [];
};
TextArea.prototype.getKeyboardToolbarColor = function () {
	return '';
};
TextArea.prototype.getKeyboardToolbarHeight = function () {
	return 0;
};
TextArea.prototype.getKeyboardType = function () {
	return 0;
};
TextArea.prototype.getLayout = function () {
	return '';
};
TextArea.prototype.getLeft = function () {
	return 0;
};
TextArea.prototype.getMaxLength = function () {
	return 0;
};
TextArea.prototype.getOpacity = function () {
	return 0;
};
TextArea.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TextArea.prototype.getPullBackgroundColor = function () {
	return '';
};
TextArea.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextArea.prototype.getReturnKeyType = function () {
	return 0;
};
TextArea.prototype.getRight = function () {
	return 0;
};
TextArea.prototype.getScrollable = function () {
	return true;
};
TextArea.prototype.getScrollsToTop = function () {
	return true;
};
TextArea.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextArea.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TextArea.prototype.getSuppressReturn = function () {
	return true;
};
TextArea.prototype.getTextAlign = function () {
	return '';
};
TextArea.prototype.getTintColor = function () {
	return '';
};
TextArea.prototype.getTop = function () {
	return 0;
};
TextArea.prototype.getTouchEnabled = function () {
	return true;
};
TextArea.prototype.getTransform = function () {
	return {};
};
TextArea.prototype.getValue = function () {
	return '';
};
TextArea.prototype.getVerticalAlign = function () {
	return 0;
};
TextArea.prototype.getViewShadowColor = function () {
	return '';
};
TextArea.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.getViewShadowRadius = function () {
	return 0;
};
TextArea.prototype.getVisible = function () {
	return true;
};
TextArea.prototype.getWidth = function () {
	return 0;
};
TextArea.prototype.getZIndex = function () {
	return 0;
};
TextArea.prototype.hasText = function () {
	return true;
};
TextArea.prototype.hide = function () {
};
TextArea.prototype.remove = function () {
};
TextArea.prototype.removeAllChildren = function () {
};
TextArea.prototype.removeEventListener = function () {
};
TextArea.prototype.setAccessibilityHidden = function () {
};
TextArea.prototype.setAccessibilityHint = function () {
};
TextArea.prototype.setAccessibilityLabel = function () {
};
TextArea.prototype.setAccessibilityValue = function () {
};
TextArea.prototype.setAnchorPoint = function () {
};
TextArea.prototype.setAppearance = function () {
};
TextArea.prototype.setAttributedString = function () {
};
TextArea.prototype.setAutoLink = function () {
};
TextArea.prototype.setAutocapitalization = function () {
};
TextArea.prototype.setAutocorrect = function () {
};
TextArea.prototype.setBackgroundColor = function () {
};
TextArea.prototype.setBackgroundDisabledColor = function () {
};
TextArea.prototype.setBackgroundDisabledImage = function () {
};
TextArea.prototype.setBackgroundFocusedColor = function () {
};
TextArea.prototype.setBackgroundFocusedImage = function () {
};
TextArea.prototype.setBackgroundGradient = function () {
};
TextArea.prototype.setBackgroundImage = function () {
};
TextArea.prototype.setBackgroundLeftCap = function () {
};
TextArea.prototype.setBackgroundRepeat = function () {
};
TextArea.prototype.setBackgroundSelectedColor = function () {
};
TextArea.prototype.setBackgroundSelectedImage = function () {
};
TextArea.prototype.setBackgroundTopCap = function () {
};
TextArea.prototype.setBorderColor = function () {
};
TextArea.prototype.setBorderRadius = function () {
};
TextArea.prototype.setBorderWidth = function () {
};
TextArea.prototype.setBottom = function () {
};
TextArea.prototype.setBubbleParent = function () {
};
TextArea.prototype.setCenter = function () {
};
TextArea.prototype.setClearOnEdit = function () {
};
TextArea.prototype.setClipMode = function () {
};
TextArea.prototype.setColor = function () {
};
TextArea.prototype.setEditable = function () {
};
TextArea.prototype.setEllipsize = function () {
};
TextArea.prototype.setEnableReturnKey = function () {
};
TextArea.prototype.setEnabled = function () {
	throw new Error('Ti.UI.TextArea.setEnabled was deprecated, since 3.3.0');
};
TextArea.prototype.setFocusable = function () {
};
TextArea.prototype.setFont = function () {
};
TextArea.prototype.setHandleLinks = function () {
};
TextArea.prototype.setHeight = function () {
};
TextArea.prototype.setHintText = function () {
};
TextArea.prototype.setHorizontalWrap = function () {
};
TextArea.prototype.setKeepScreenOn = function () {
};
TextArea.prototype.setKeyboardToolbar = function () {
};
TextArea.prototype.setKeyboardToolbarColor = function () {
};
TextArea.prototype.setKeyboardToolbarHeight = function () {
};
TextArea.prototype.setKeyboardType = function () {
};
TextArea.prototype.setLayout = function () {
};
TextArea.prototype.setLeft = function () {
};
TextArea.prototype.setMaxLength = function () {
};
TextArea.prototype.setOpacity = function () {
};
TextArea.prototype.setPullBackgroundColor = function () {
};
TextArea.prototype.setReturnKeyType = function () {
};
TextArea.prototype.setRight = function () {
};
TextArea.prototype.setScrollable = function () {
};
TextArea.prototype.setScrollsToTop = function () {
};
TextArea.prototype.setSelection = function () {
};
TextArea.prototype.setSoftKeyboardOnFocus = function () {
};
TextArea.prototype.setSuppressReturn = function () {
};
TextArea.prototype.setTextAlign = function () {
};
TextArea.prototype.setTintColor = function () {
};
TextArea.prototype.setTop = function () {
};
TextArea.prototype.setTouchEnabled = function () {
};
TextArea.prototype.setTransform = function () {
};
TextArea.prototype.setValue = function () {
};
TextArea.prototype.setVerticalAlign = function () {
};
TextArea.prototype.setViewShadowColor = function () {
};
TextArea.prototype.setViewShadowOffset = function () {
};
TextArea.prototype.setViewShadowRadius = function () {
};
TextArea.prototype.setVisible = function () {
};
TextArea.prototype.setWidth = function () {
};
TextArea.prototype.setZIndex = function () {
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