function TextArea(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.TextArea';
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
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.handleLinks = properties.handleLinks || undefined;
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
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
TextArea.prototype.remove = function () {
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
};
TextArea.prototype.toImage = function () {
	return {};
};
TextArea.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new TextArea(properties);
};