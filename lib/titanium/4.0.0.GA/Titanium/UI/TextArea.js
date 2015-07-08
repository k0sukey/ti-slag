function TextArea(properties) {
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
	this.apiName = 'Ti.UI.TextArea';
	this.appearance = properties.appearance || 0;
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
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clearOnEdit = properties.clearOnEdit || true;
	this.clipMode = properties.clipMode || 0;
	this.color = properties.color || '';
	this.editable = properties.editable || true;
	this.ellipsize = properties.ellipsize || true;
	this.enableReturnKey = properties.enableReturnKey || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.handleLinks = properties.handleLinks || true;
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
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.maxLength = properties.maxLength || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.returnKeyType = properties.returnKeyType || 0;
	this.right = properties.right || 0;
	this.scrollable = properties.scrollable || true;
	this.scrollsToTop = properties.scrollsToTop || true;
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
TextArea.prototype.getFocusable = function () {
	return true;
};
TextArea.prototype.getFont = function () {
	return {};
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
TextArea.prototype.getHintTextColor = function () {
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
TextArea.prototype.getLifecycleContainer = function () {
	return {};
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
TextArea.prototype.getSelection = function () {
	return {};
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
TextArea.prototype.setHintTextColor = function () {
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
TextArea.prototype.setLifecycleContainer = function () {
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