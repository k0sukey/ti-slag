function Label(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Label';
	this.attributedString = properties.attributedString || undefined;
	this.autoLink = properties.autoLink || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundPaddingBottom = properties.backgroundPaddingBottom || undefined;
	this.backgroundPaddingLeft = properties.backgroundPaddingLeft || undefined;
	this.backgroundPaddingRight = properties.backgroundPaddingRight || undefined;
	this.backgroundPaddingTop = properties.backgroundPaddingTop || undefined;
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
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.ellipsize = properties.ellipsize || undefined;
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.highlightedColor = properties.highlightedColor || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.html = properties.html || undefined;
	this.includeFontPadding = properties.includeFontPadding || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.minimumFontSize = properties.minimumFontSize || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.shadowColor = properties.shadowColor || undefined;
	this.shadowOffset = properties.shadowOffset || undefined;
	this.shadowRadius = properties.shadowRadius || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.text = properties.text || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.textid = properties.textid || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.wordWrap = properties.wordWrap || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Label.prototype.add = function () {
};
Label.prototype.addEventListener = function () {
};
Label.prototype.animate = function () {
};
Label.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Label.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.finishLayout = function () {
};
Label.prototype.fireEvent = function () {
};
Label.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Label.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Label.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Label.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Label.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Label.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Label.prototype.getApiName = function () {
	return this.apiName;
};
Label.prototype.getAttributedString = function () {
	return this.attributedString;
};
Label.prototype.getAutoLink = function () {
	return this.autoLink;
};
Label.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Label.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Label.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Label.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Label.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Label.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Label.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Label.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Label.prototype.getBackgroundPaddingBottom = function () {
	return this.backgroundPaddingBottom;
};
Label.prototype.getBackgroundPaddingLeft = function () {
	return this.backgroundPaddingLeft;
};
Label.prototype.getBackgroundPaddingRight = function () {
	return this.backgroundPaddingRight;
};
Label.prototype.getBackgroundPaddingTop = function () {
	return this.backgroundPaddingTop;
};
Label.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Label.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Label.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Label.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Label.prototype.getBorderColor = function () {
	return this.borderColor;
};
Label.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Label.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Label.prototype.getBottom = function () {
	return this.bottom;
};
Label.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Label.prototype.getCenter = function () {
	return this.center;
};
Label.prototype.getChildren = function () {
	return this.children;
};
Label.prototype.getClipMode = function () {
	return this.clipMode;
};
Label.prototype.getColor = function () {
	return this.color;
};
Label.prototype.getEllipsize = function () {
	return this.ellipsize;
};
Label.prototype.getEnabled = function () {
	return this.enabled;
};
Label.prototype.getFocusable = function () {
	return this.focusable;
};
Label.prototype.getHeight = function () {
	return this.height;
};
Label.prototype.getHighlightedColor = function () {
	return this.highlightedColor;
};
Label.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Label.prototype.getHtml = function () {
	return this.html;
};
Label.prototype.getIncludeFontPadding = function () {
	return this.includeFontPadding;
};
Label.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Label.prototype.getLayout = function () {
	return this.layout;
};
Label.prototype.getLeft = function () {
	return this.left;
};
Label.prototype.getMinimumFontSize = function () {
	return this.minimumFontSize;
};
Label.prototype.getOpacity = function () {
	return this.opacity;
};
Label.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Label.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Label.prototype.getRect = function () {
	return this.rect;
};
Label.prototype.getRight = function () {
	return this.right;
};
Label.prototype.getShadowColor = function () {
	return this.shadowColor;
};
Label.prototype.getShadowRadius = function () {
	return this.shadowRadius;
};
Label.prototype.getSize = function () {
	return this.size;
};
Label.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Label.prototype.getText = function () {
	return this.text;
};
Label.prototype.getTextAlign = function () {
	return this.textAlign;
};
Label.prototype.getTextid = function () {
	return this.textid;
};
Label.prototype.getTintColor = function () {
	return this.tintColor;
};
Label.prototype.getTop = function () {
	return this.top;
};
Label.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Label.prototype.getTransform = function () {
	return this.transform;
};
Label.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
Label.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Label.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Label.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Label.prototype.getVisible = function () {
	return this.visible;
};
Label.prototype.getWidth = function () {
	return this.width;
};
Label.prototype.getWordWrap = function () {
	return this.wordWrap;
};
Label.prototype.getZIndex = function () {
	return this.zIndex;
};
Label.prototype.hide = function () {
};
Label.prototype.remove = function () {
};
Label.prototype.removeAllChildren = function () {
};
Label.prototype.removeEventListener = function () {
};
Label.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Label.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Label.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Label.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Label.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Label.prototype.setAttributedString = function (property) {
	this.attributedString = property;
};
Label.prototype.setAutoLink = function (property) {
	this.autoLink = property;
};
Label.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Label.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Label.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Label.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Label.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Label.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Label.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Label.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Label.prototype.setBackgroundPaddingBottom = function (property) {
	this.backgroundPaddingBottom = property;
};
Label.prototype.setBackgroundPaddingLeft = function (property) {
	this.backgroundPaddingLeft = property;
};
Label.prototype.setBackgroundPaddingRight = function (property) {
	this.backgroundPaddingRight = property;
};
Label.prototype.setBackgroundPaddingTop = function (property) {
	this.backgroundPaddingTop = property;
};
Label.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Label.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Label.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Label.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Label.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Label.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Label.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Label.prototype.setBottom = function (property) {
	this.bottom = property;
};
Label.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Label.prototype.setCenter = function (property) {
	this.center = property;
};
Label.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Label.prototype.setColor = function (property) {
	this.color = property;
};
Label.prototype.setEllipsize = function (property) {
	this.ellipsize = property;
};
Label.prototype.setEnabled = function (property) {
	this.enabled = property;
};
Label.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Label.prototype.setFont = function (property) {
	this.font = property;
};
Label.prototype.setHeight = function (property) {
	this.height = property;
};
Label.prototype.setHighlightedColor = function (property) {
	this.highlightedColor = property;
};
Label.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Label.prototype.setHtml = function (property) {
	this.html = property;
};
Label.prototype.setIncludeFontPadding = function (property) {
	this.includeFontPadding = property;
};
Label.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Label.prototype.setLayout = function (property) {
	this.layout = property;
};
Label.prototype.setLeft = function (property) {
	this.left = property;
};
Label.prototype.setMinimumFontSize = function (property) {
	this.minimumFontSize = property;
};
Label.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Label.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Label.prototype.setRight = function (property) {
	this.right = property;
};
Label.prototype.setShadowColor = function (property) {
	this.shadowColor = property;
};
Label.prototype.setShadowOffset = function (property) {
	this.shadowOffset = property;
};
Label.prototype.setShadowRadius = function (property) {
	this.shadowRadius = property;
};
Label.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Label.prototype.setText = function (property) {
	this.text = property;
};
Label.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
Label.prototype.setTextid = function (property) {
	this.textid = property;
};
Label.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Label.prototype.setTop = function (property) {
	this.top = property;
};
Label.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Label.prototype.setTransform = function (property) {
	this.transform = property;
};
Label.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
Label.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Label.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Label.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Label.prototype.setVisible = function (property) {
	this.visible = property;
};
Label.prototype.setWidth = function (property) {
	this.width = property;
};
Label.prototype.setWordWrap = function (property) {
	this.wordWrap = property;
};
Label.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Label.prototype.show = function () {
};
Label.prototype.startLayout = function () {
};
Label.prototype.toImage = function () {
	return {};
};
Label.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new Label(properties);
};