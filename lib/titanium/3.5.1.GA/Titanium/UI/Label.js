function Label(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Label';
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
	if (properties.enabled) {
		throw new Error('Ti.UI.Label.enabled was deprecated, since 3.3.0');
	}
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
	throw new Error('Ti.UI.Label.finishLayout was deprecated, since 3.0.0');
};
Label.prototype.fireEvent = function () {
};
Label.prototype.getAccessibilityHidden = function () {
	return true;
};
Label.prototype.getAccessibilityHint = function () {
	return '';
};
Label.prototype.getAccessibilityLabel = function () {
	return '';
};
Label.prototype.getAccessibilityValue = function () {
	return '';
};
Label.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.getApiName = function () {
	return '';
};
Label.prototype.getAttributedString = function () {
	return '';
};
Label.prototype.getAutoLink = function () {
	return 0;
};
Label.prototype.getBackgroundColor = function () {
	return '';
};
Label.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Label.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Label.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Label.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Label.prototype.getBackgroundGradient = function () {
	return {};
};
Label.prototype.getBackgroundImage = function () {
	return '';
};
Label.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Label.prototype.getBackgroundPaddingBottom = function () {
	return 0;
};
Label.prototype.getBackgroundPaddingLeft = function () {
	return 0;
};
Label.prototype.getBackgroundPaddingRight = function () {
	return 0;
};
Label.prototype.getBackgroundPaddingTop = function () {
	return 0;
};
Label.prototype.getBackgroundRepeat = function () {
	return true;
};
Label.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Label.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Label.prototype.getBackgroundTopCap = function () {
	return 0;
};
Label.prototype.getBorderColor = function () {
	return '';
};
Label.prototype.getBorderRadius = function () {
	return 0;
};
Label.prototype.getBorderWidth = function () {
	return 0;
};
Label.prototype.getBottom = function () {
	return 0;
};
Label.prototype.getBubbleParent = function () {
	return true;
};
Label.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.getChildren = function () {
	return [];
};
Label.prototype.getClipMode = function () {
	return 0;
};
Label.prototype.getColor = function () {
	return '';
};
Label.prototype.getEllipsize = function () {
	return true;
};
Label.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Label.getEnabled was deprecated, since 3.3.0');
};
Label.prototype.getFocusable = function () {
	return true;
};
Label.prototype.getHeight = function () {
	return 0;
};
Label.prototype.getHighlightedColor = function () {
	return '';
};
Label.prototype.getHorizontalWrap = function () {
	return true;
};
Label.prototype.getHtml = function () {
	return '';
};
Label.prototype.getIncludeFontPadding = function () {
	return true;
};
Label.prototype.getKeepScreenOn = function () {
	return true;
};
Label.prototype.getLayout = function () {
	return '';
};
Label.prototype.getLeft = function () {
	return 0;
};
Label.prototype.getMinimumFontSize = function () {
	return 0;
};
Label.prototype.getOpacity = function () {
	return 0;
};
Label.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Label.prototype.getPullBackgroundColor = function () {
	return '';
};
Label.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Label.prototype.getRight = function () {
	return 0;
};
Label.prototype.getShadowColor = function () {
	return '';
};
Label.prototype.getShadowRadius = function () {
	return 0;
};
Label.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Label.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Label.prototype.getText = function () {
	return '';
};
Label.prototype.getTextAlign = function () {
	return '';
};
Label.prototype.getTextid = function () {
	return '';
};
Label.prototype.getTintColor = function () {
	return '';
};
Label.prototype.getTop = function () {
	return 0;
};
Label.prototype.getTouchEnabled = function () {
	return true;
};
Label.prototype.getTransform = function () {
	return {};
};
Label.prototype.getVerticalAlign = function () {
	return 0;
};
Label.prototype.getViewShadowColor = function () {
	return '';
};
Label.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.getViewShadowRadius = function () {
	return 0;
};
Label.prototype.getVisible = function () {
	return true;
};
Label.prototype.getWidth = function () {
	return 0;
};
Label.prototype.getWordWrap = function () {
	return true;
};
Label.prototype.getZIndex = function () {
	return 0;
};
Label.prototype.hide = function () {
};
Label.prototype.remove = function () {
};
Label.prototype.removeAllChildren = function () {
};
Label.prototype.removeEventListener = function () {
};
Label.prototype.setAccessibilityHidden = function () {
};
Label.prototype.setAccessibilityHint = function () {
};
Label.prototype.setAccessibilityLabel = function () {
};
Label.prototype.setAccessibilityValue = function () {
};
Label.prototype.setAnchorPoint = function () {
};
Label.prototype.setAttributedString = function () {
};
Label.prototype.setAutoLink = function () {
};
Label.prototype.setBackgroundColor = function () {
};
Label.prototype.setBackgroundDisabledColor = function () {
};
Label.prototype.setBackgroundDisabledImage = function () {
};
Label.prototype.setBackgroundFocusedColor = function () {
};
Label.prototype.setBackgroundFocusedImage = function () {
};
Label.prototype.setBackgroundGradient = function () {
};
Label.prototype.setBackgroundImage = function () {
};
Label.prototype.setBackgroundLeftCap = function () {
};
Label.prototype.setBackgroundPaddingBottom = function () {
};
Label.prototype.setBackgroundPaddingLeft = function () {
};
Label.prototype.setBackgroundPaddingRight = function () {
};
Label.prototype.setBackgroundPaddingTop = function () {
};
Label.prototype.setBackgroundRepeat = function () {
};
Label.prototype.setBackgroundSelectedColor = function () {
};
Label.prototype.setBackgroundSelectedImage = function () {
};
Label.prototype.setBackgroundTopCap = function () {
};
Label.prototype.setBorderColor = function () {
};
Label.prototype.setBorderRadius = function () {
};
Label.prototype.setBorderWidth = function () {
};
Label.prototype.setBottom = function () {
};
Label.prototype.setBubbleParent = function () {
};
Label.prototype.setCenter = function () {
};
Label.prototype.setClipMode = function () {
};
Label.prototype.setColor = function () {
};
Label.prototype.setEllipsize = function () {
};
Label.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Label.setEnabled was deprecated, since 3.3.0');
};
Label.prototype.setFocusable = function () {
};
Label.prototype.setFont = function () {
};
Label.prototype.setHeight = function () {
};
Label.prototype.setHighlightedColor = function () {
};
Label.prototype.setHorizontalWrap = function () {
};
Label.prototype.setHtml = function () {
};
Label.prototype.setIncludeFontPadding = function () {
};
Label.prototype.setKeepScreenOn = function () {
};
Label.prototype.setLayout = function () {
};
Label.prototype.setLeft = function () {
};
Label.prototype.setMinimumFontSize = function () {
};
Label.prototype.setOpacity = function () {
};
Label.prototype.setPullBackgroundColor = function () {
};
Label.prototype.setRight = function () {
};
Label.prototype.setShadowColor = function () {
};
Label.prototype.setShadowOffset = function () {
};
Label.prototype.setShadowRadius = function () {
};
Label.prototype.setSoftKeyboardOnFocus = function () {
};
Label.prototype.setText = function () {
};
Label.prototype.setTextAlign = function () {
};
Label.prototype.setTextid = function () {
};
Label.prototype.setTintColor = function () {
};
Label.prototype.setTop = function () {
};
Label.prototype.setTouchEnabled = function () {
};
Label.prototype.setTransform = function () {
};
Label.prototype.setVerticalAlign = function () {
};
Label.prototype.setViewShadowColor = function () {
};
Label.prototype.setViewShadowOffset = function () {
};
Label.prototype.setViewShadowRadius = function () {
};
Label.prototype.setVisible = function () {
};
Label.prototype.setWidth = function () {
};
Label.prototype.setWordWrap = function () {
};
Label.prototype.setZIndex = function () {
};
Label.prototype.show = function () {
};
Label.prototype.startLayout = function () {
	throw new Error('Ti.UI.Label.startLayout was deprecated, since 3.0.0');
};
Label.prototype.toImage = function () {
	return {};
};
Label.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Label.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Label(properties);
};