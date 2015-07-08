function Label(properties) {
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
	this.apiName = 'Ti.UI.Label';
	this.attributedString = properties.attributedString || '';
	this.autoLink = properties.autoLink || 0;
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundPaddingBottom = properties.backgroundPaddingBottom || 0;
	this.backgroundPaddingLeft = properties.backgroundPaddingLeft || 0;
	this.backgroundPaddingRight = properties.backgroundPaddingRight || 0;
	this.backgroundPaddingTop = properties.backgroundPaddingTop || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.color = properties.color || '';
	this.ellipsize = properties.ellipsize || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.highlightedColor = properties.highlightedColor || '';
	this.horizontalWrap = properties.horizontalWrap || true;
	this.html = properties.html || '';
	this.includeFontPadding = properties.includeFontPadding || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.minimumFontSize = properties.minimumFontSize || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.shadowColor = properties.shadowColor || '';
	this.shadowOffset = properties.shadowOffset || {};
	this.shadowRadius = properties.shadowRadius || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.text = properties.text || '';
	this.textAlign = properties.textAlign || '';
	this.textid = properties.textid || '';
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.verticalAlign = properties.verticalAlign || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.wordWrap = properties.wordWrap || true;
	this.zIndex = properties.zIndex || 0;
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
Label.prototype.getFocusable = function () {
	return true;
};
Label.prototype.getFont = function () {
	return {};
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
Label.prototype.getLifecycleContainer = function () {
	return {};
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
Label.prototype.getShadowOffset = function () {
	return {};
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
Label.prototype.setLifecycleContainer = function () {
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