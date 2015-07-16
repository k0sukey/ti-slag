function Label(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Label';
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
	this.attributedString = properties.attributedString || '';
	this.autoLink = properties.autoLink || 0;
	this.backgroundPaddingBottom = properties.backgroundPaddingBottom || 0;
	this.backgroundPaddingLeft = properties.backgroundPaddingLeft || 0;
	this.backgroundPaddingRight = properties.backgroundPaddingRight || 0;
	this.backgroundPaddingTop = properties.backgroundPaddingTop || 0;
	this.highlightedColor = properties.highlightedColor || '';
	this.html = properties.html || '';
	this.includeFontPadding = properties.includeFontPadding || true;
	this.lines = properties.lines || 0;
	this.maxLines = properties.maxLines || 0;
	this.minimumFontSize = properties.minimumFontSize || 0;
	this.shadowColor = properties.shadowColor || '';
	this.shadowOffset = properties.shadowOffset || {};
	this.shadowRadius = properties.shadowRadius || 0;
	this.textid = properties.textid || '';
	this.color = properties.color || '';
	this.ellipsize = properties.ellipsize || 0;
	this.font = properties.font || {};
	this.text = properties.text || '';
	this.textAlign = properties.textAlign || '';
	this.verticalAlign = properties.verticalAlign || 0;
	this.wordWrap = properties.wordWrap || true;
	return this;
}
Label.prototype.addEventListener = function () {
};
Label.prototype.removeEventListener = function () {
};
Label.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Label.prototype.fireEvent = function () {
};
Label.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Label.finishLayout was deprecated, since 3.0.0');
};
Label.prototype.removeAllChildren = function () {
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
Label.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.add = function () {
};
Label.prototype.animate = function () {
};
Label.prototype.hide = function () {
};
Label.prototype.remove = function () {
};
Label.prototype.show = function () {
};
Label.prototype.getBubbleParent = function () {
	return true;
};
Label.prototype.setBubbleParent = function () {
};
Label.prototype.getApiName = function () {
	return '';
};
Label.prototype.getLifecycleContainer = function () {
	return {};
};
Label.prototype.setLifecycleContainer = function () {
};
Label.prototype.getAccessibilityHidden = function () {
	return true;
};
Label.prototype.setAccessibilityHidden = function () {
};
Label.prototype.getAccessibilityHint = function () {
	return '';
};
Label.prototype.setAccessibilityHint = function () {
};
Label.prototype.getAccessibilityLabel = function () {
	return '';
};
Label.prototype.setAccessibilityLabel = function () {
};
Label.prototype.getAccessibilityValue = function () {
	return '';
};
Label.prototype.setAccessibilityValue = function () {
};
Label.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.setAnchorPoint = function () {
};
Label.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Label.prototype.setBackgroundDisabledColor = function () {
};
Label.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Label.prototype.setBackgroundDisabledImage = function () {
};
Label.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Label.prototype.setBackgroundFocusedColor = function () {
};
Label.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Label.prototype.setBackgroundFocusedImage = function () {
};
Label.prototype.getBackgroundGradient = function () {
	return {};
};
Label.prototype.setBackgroundGradient = function () {
};
Label.prototype.getBackgroundImage = function () {
	return '';
};
Label.prototype.setBackgroundImage = function () {
};
Label.prototype.getBackgroundRepeat = function () {
	return true;
};
Label.prototype.setBackgroundRepeat = function () {
};
Label.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Label.prototype.setBackgroundLeftCap = function () {
};
Label.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Label.prototype.setBackgroundSelectedColor = function () {
};
Label.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Label.prototype.setBackgroundSelectedImage = function () {
};
Label.prototype.getBackgroundTopCap = function () {
	return 0;
};
Label.prototype.setBackgroundTopCap = function () {
};
Label.prototype.getClipMode = function () {
	return 0;
};
Label.prototype.setClipMode = function () {
};
Label.prototype.getFocusable = function () {
	return true;
};
Label.prototype.setFocusable = function () {
};
Label.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Label.prototype.setOverrideCurrentAnimation = function () {
};
Label.prototype.getPullBackgroundColor = function () {
	return '';
};
Label.prototype.setPullBackgroundColor = function () {
};
Label.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Label.prototype.setSoftKeyboardOnFocus = function () {
};
Label.prototype.getTransform = function () {
	return {};
};
Label.prototype.setTransform = function () {
};
Label.prototype.getViewShadowRadius = function () {
	return 0;
};
Label.prototype.setViewShadowRadius = function () {
};
Label.prototype.getViewShadowColor = function () {
	return '';
};
Label.prototype.setViewShadowColor = function () {
};
Label.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.setViewShadowOffset = function () {
};
Label.prototype.getHorizontalWrap = function () {
	return true;
};
Label.prototype.setHorizontalWrap = function () {
};
Label.prototype.getZIndex = function () {
	return 0;
};
Label.prototype.setZIndex = function () {
};
Label.prototype.getKeepScreenOn = function () {
	return true;
};
Label.prototype.setKeepScreenOn = function () {
};
Label.prototype.getBackgroundColor = function () {
	return '';
};
Label.prototype.setBackgroundColor = function () {
};
Label.prototype.getBorderColor = function () {
	return '';
};
Label.prototype.setBorderColor = function () {
};
Label.prototype.getBorderRadius = function () {
	return 0;
};
Label.prototype.setBorderRadius = function () {
};
Label.prototype.getBorderWidth = function () {
	return 0;
};
Label.prototype.setBorderWidth = function () {
};
Label.prototype.getBottom = function () {
	return '';
};
Label.prototype.setBottom = function () {
};
Label.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.setCenter = function () {
};
Label.prototype.getChildren = function () {
	return [];
};
Label.prototype.getHeight = function () {
	return '';
};
Label.prototype.setHeight = function () {
};
Label.prototype.getLayout = function () {
	return '';
};
Label.prototype.setLayout = function () {
};
Label.prototype.getLeft = function () {
	return '';
};
Label.prototype.setLeft = function () {
};
Label.prototype.getOpacity = function () {
	return 0;
};
Label.prototype.setOpacity = function () {
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
	return '';
};
Label.prototype.setRight = function () {
};
Label.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Label.prototype.getTintColor = function () {
	return '';
};
Label.prototype.setTintColor = function () {
};
Label.prototype.getTop = function () {
	return '';
};
Label.prototype.setTop = function () {
};
Label.prototype.getTouchEnabled = function () {
	return true;
};
Label.prototype.setTouchEnabled = function () {
};
Label.prototype.getVisible = function () {
	return true;
};
Label.prototype.setVisible = function () {
};
Label.prototype.getWidth = function () {
	return '';
};
Label.prototype.setWidth = function () {
};
Label.prototype.getAttributedString = function () {
	return '';
};
Label.prototype.setAttributedString = function () {
};
Label.prototype.getAutoLink = function () {
	return 0;
};
Label.prototype.setAutoLink = function () {
};
Label.prototype.getBackgroundPaddingBottom = function () {
	return 0;
};
Label.prototype.setBackgroundPaddingBottom = function () {
};
Label.prototype.getBackgroundPaddingLeft = function () {
	return 0;
};
Label.prototype.setBackgroundPaddingLeft = function () {
};
Label.prototype.getBackgroundPaddingRight = function () {
	return 0;
};
Label.prototype.setBackgroundPaddingRight = function () {
};
Label.prototype.getBackgroundPaddingTop = function () {
	return 0;
};
Label.prototype.setBackgroundPaddingTop = function () {
};
Label.prototype.getHighlightedColor = function () {
	return '';
};
Label.prototype.setHighlightedColor = function () {
};
Label.prototype.getHtml = function () {
	return '';
};
Label.prototype.setHtml = function () {
};
Label.prototype.getIncludeFontPadding = function () {
	return true;
};
Label.prototype.setIncludeFontPadding = function () {
};
Label.prototype.getLines = function () {
	return 0;
};
Label.prototype.setLines = function () {
};
Label.prototype.getMaxLines = function () {
	return 0;
};
Label.prototype.setMaxLines = function () {
};
Label.prototype.getMinimumFontSize = function () {
	return 0;
};
Label.prototype.setMinimumFontSize = function () {
};
Label.prototype.getShadowColor = function () {
	return '';
};
Label.prototype.setShadowColor = function () {
};
Label.prototype.getShadowOffset = function () {
	return {};
};
Label.prototype.setShadowOffset = function () {
};
Label.prototype.getShadowRadius = function () {
	return 0;
};
Label.prototype.setShadowRadius = function () {
};
Label.prototype.getTextid = function () {
	return '';
};
Label.prototype.setTextid = function () {
};
Label.prototype.getColor = function () {
	return '';
};
Label.prototype.setColor = function () {
};
Label.prototype.getEllipsize = function () {
	return true;
};
Label.prototype.setEllipsize = function () {
};
Label.prototype.getFont = function () {
	return {};
};
Label.prototype.setFont = function () {
};
Label.prototype.getText = function () {
	return '';
};
Label.prototype.setText = function () {
};
Label.prototype.getTextAlign = function () {
	return '';
};
Label.prototype.setTextAlign = function () {
};
Label.prototype.getVerticalAlign = function () {
	return '';
};
Label.prototype.setVerticalAlign = function () {
};
Label.prototype.getWordWrap = function () {
	return true;
};
Label.prototype.setWordWrap = function () {
};
module.exports = function (properties) {
	return new Label(properties);
};