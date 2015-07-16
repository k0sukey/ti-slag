function TextArea(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TextArea';
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
	this.hintTextColor = properties.hintTextColor || '';
	this.appearance = properties.appearance || 0;
	this.attributedString = properties.attributedString || '';
	this.autocapitalization = properties.autocapitalization || 0;
	this.autocorrect = properties.autocorrect || true;
	this.autoLink = properties.autoLink || 0;
	this.clearOnEdit = properties.clearOnEdit || true;
	this.color = properties.color || '';
	this.editable = properties.editable || true;
	this.ellipsize = properties.ellipsize || true;
	this.enableReturnKey = properties.enableReturnKey || true;
	this.font = properties.font || {};
	this.hintText = properties.hintText || '';
	this.handleLinks = properties.handleLinks || true;
	this.keyboardToolbar = properties.keyboardToolbar || [];
	this.keyboardToolbarColor = properties.keyboardToolbarColor || '';
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || 0;
	this.keyboardType = properties.keyboardType || 0;
	this.maxLength = properties.maxLength || 0;
	this.returnKeyType = properties.returnKeyType || 0;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.suppressReturn = properties.suppressReturn || true;
	this.scrollable = properties.scrollable || true;
	this.selection = properties.selection || {};
	this.textAlign = properties.textAlign || '';
	this.value = properties.value || '';
	this.verticalAlign = properties.verticalAlign || 0;
	return this;
}
TextArea.prototype.addEventListener = function () {
};
TextArea.prototype.removeEventListener = function () {
};
TextArea.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TextArea.prototype.fireEvent = function () {
};
TextArea.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TextArea.finishLayout was deprecated, since 3.0.0');
};
TextArea.prototype.removeAllChildren = function () {
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
TextArea.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.add = function () {
};
TextArea.prototype.animate = function () {
};
TextArea.prototype.hide = function () {
};
TextArea.prototype.remove = function () {
};
TextArea.prototype.show = function () {
};
TextArea.prototype.setSelection = function () {
};
TextArea.prototype.blur = function () {
};
TextArea.prototype.focus = function () {
};
TextArea.prototype.hasText = function () {
	return true;
};
TextArea.prototype.getBubbleParent = function () {
	return true;
};
TextArea.prototype.setBubbleParent = function () {
};
TextArea.prototype.getApiName = function () {
	return '';
};
TextArea.prototype.getLifecycleContainer = function () {
	return {};
};
TextArea.prototype.setLifecycleContainer = function () {
};
TextArea.prototype.getAccessibilityHidden = function () {
	return true;
};
TextArea.prototype.setAccessibilityHidden = function () {
};
TextArea.prototype.getAccessibilityHint = function () {
	return '';
};
TextArea.prototype.setAccessibilityHint = function () {
};
TextArea.prototype.getAccessibilityLabel = function () {
	return '';
};
TextArea.prototype.setAccessibilityLabel = function () {
};
TextArea.prototype.getAccessibilityValue = function () {
	return '';
};
TextArea.prototype.setAccessibilityValue = function () {
};
TextArea.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.setAnchorPoint = function () {
};
TextArea.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TextArea.prototype.setBackgroundDisabledColor = function () {
};
TextArea.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TextArea.prototype.setBackgroundDisabledImage = function () {
};
TextArea.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TextArea.prototype.setBackgroundFocusedColor = function () {
};
TextArea.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TextArea.prototype.setBackgroundFocusedImage = function () {
};
TextArea.prototype.getBackgroundGradient = function () {
	return {};
};
TextArea.prototype.setBackgroundGradient = function () {
};
TextArea.prototype.getBackgroundImage = function () {
	return '';
};
TextArea.prototype.setBackgroundImage = function () {
};
TextArea.prototype.getBackgroundRepeat = function () {
	return true;
};
TextArea.prototype.setBackgroundRepeat = function () {
};
TextArea.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TextArea.prototype.setBackgroundLeftCap = function () {
};
TextArea.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TextArea.prototype.setBackgroundSelectedColor = function () {
};
TextArea.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TextArea.prototype.setBackgroundSelectedImage = function () {
};
TextArea.prototype.getBackgroundTopCap = function () {
	return 0;
};
TextArea.prototype.setBackgroundTopCap = function () {
};
TextArea.prototype.getClipMode = function () {
	return 0;
};
TextArea.prototype.setClipMode = function () {
};
TextArea.prototype.getFocusable = function () {
	return true;
};
TextArea.prototype.setFocusable = function () {
};
TextArea.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TextArea.prototype.setOverrideCurrentAnimation = function () {
};
TextArea.prototype.getPullBackgroundColor = function () {
	return '';
};
TextArea.prototype.setPullBackgroundColor = function () {
};
TextArea.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TextArea.prototype.setSoftKeyboardOnFocus = function () {
};
TextArea.prototype.getTransform = function () {
	return {};
};
TextArea.prototype.setTransform = function () {
};
TextArea.prototype.getViewShadowRadius = function () {
	return 0;
};
TextArea.prototype.setViewShadowRadius = function () {
};
TextArea.prototype.getViewShadowColor = function () {
	return '';
};
TextArea.prototype.setViewShadowColor = function () {
};
TextArea.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.setViewShadowOffset = function () {
};
TextArea.prototype.getHorizontalWrap = function () {
	return true;
};
TextArea.prototype.setHorizontalWrap = function () {
};
TextArea.prototype.getZIndex = function () {
	return 0;
};
TextArea.prototype.setZIndex = function () {
};
TextArea.prototype.getKeepScreenOn = function () {
	return true;
};
TextArea.prototype.setKeepScreenOn = function () {
};
TextArea.prototype.getBackgroundColor = function () {
	return '';
};
TextArea.prototype.setBackgroundColor = function () {
};
TextArea.prototype.getBorderColor = function () {
	return '';
};
TextArea.prototype.setBorderColor = function () {
};
TextArea.prototype.getBorderRadius = function () {
	return 0;
};
TextArea.prototype.setBorderRadius = function () {
};
TextArea.prototype.getBorderWidth = function () {
	return 0;
};
TextArea.prototype.setBorderWidth = function () {
};
TextArea.prototype.getBottom = function () {
	return '';
};
TextArea.prototype.setBottom = function () {
};
TextArea.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TextArea.prototype.setCenter = function () {
};
TextArea.prototype.getChildren = function () {
	return [];
};
TextArea.prototype.getHeight = function () {
	return '';
};
TextArea.prototype.setHeight = function () {
};
TextArea.prototype.getLayout = function () {
	return '';
};
TextArea.prototype.setLayout = function () {
};
TextArea.prototype.getLeft = function () {
	return '';
};
TextArea.prototype.setLeft = function () {
};
TextArea.prototype.getOpacity = function () {
	return 0;
};
TextArea.prototype.setOpacity = function () {
};
TextArea.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextArea.prototype.getRight = function () {
	return '';
};
TextArea.prototype.setRight = function () {
};
TextArea.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TextArea.prototype.getTintColor = function () {
	return '';
};
TextArea.prototype.setTintColor = function () {
};
TextArea.prototype.getTop = function () {
	return '';
};
TextArea.prototype.setTop = function () {
};
TextArea.prototype.getTouchEnabled = function () {
	return true;
};
TextArea.prototype.setTouchEnabled = function () {
};
TextArea.prototype.getVisible = function () {
	return true;
};
TextArea.prototype.setVisible = function () {
};
TextArea.prototype.getWidth = function () {
	return '';
};
TextArea.prototype.setWidth = function () {
};
TextArea.prototype.getHintTextColor = function () {
	return '';
};
TextArea.prototype.setHintTextColor = function () {
};
TextArea.prototype.getAppearance = function () {
	return 0;
};
TextArea.prototype.setAppearance = function () {
};
TextArea.prototype.getAttributedString = function () {
	return '';
};
TextArea.prototype.setAttributedString = function () {
};
TextArea.prototype.getAutocapitalization = function () {
	return 0;
};
TextArea.prototype.setAutocapitalization = function () {
};
TextArea.prototype.getAutocorrect = function () {
	return true;
};
TextArea.prototype.setAutocorrect = function () {
};
TextArea.prototype.getAutoLink = function () {
	return 0;
};
TextArea.prototype.setAutoLink = function () {
};
TextArea.prototype.getClearOnEdit = function () {
	return true;
};
TextArea.prototype.setClearOnEdit = function () {
};
TextArea.prototype.getColor = function () {
	return '';
};
TextArea.prototype.setColor = function () {
};
TextArea.prototype.getEditable = function () {
	return true;
};
TextArea.prototype.setEditable = function () {
};
TextArea.prototype.getEllipsize = function () {
	return true;
};
TextArea.prototype.setEllipsize = function () {
};
TextArea.prototype.getEnableReturnKey = function () {
	return true;
};
TextArea.prototype.setEnableReturnKey = function () {
};
TextArea.prototype.getFont = function () {
	return {};
};
TextArea.prototype.setFont = function () {
};
TextArea.prototype.getHintText = function () {
	return '';
};
TextArea.prototype.setHintText = function () {
};
TextArea.prototype.getHandleLinks = function () {
	return true;
};
TextArea.prototype.setHandleLinks = function () {
};
TextArea.prototype.getKeyboardToolbar = function () {
	return [];
};
TextArea.prototype.setKeyboardToolbar = function () {
};
TextArea.prototype.getKeyboardToolbarColor = function () {
	return '';
};
TextArea.prototype.setKeyboardToolbarColor = function () {
};
TextArea.prototype.getKeyboardToolbarHeight = function () {
	return 0;
};
TextArea.prototype.setKeyboardToolbarHeight = function () {
};
TextArea.prototype.getKeyboardType = function () {
	return 0;
};
TextArea.prototype.setKeyboardType = function () {
};
TextArea.prototype.getMaxLength = function () {
	return 0;
};
TextArea.prototype.setMaxLength = function () {
};
TextArea.prototype.getReturnKeyType = function () {
	return 0;
};
TextArea.prototype.setReturnKeyType = function () {
};
TextArea.prototype.getScrollsToTop = function () {
	return true;
};
TextArea.prototype.setScrollsToTop = function () {
};
TextArea.prototype.getSuppressReturn = function () {
	return true;
};
TextArea.prototype.setSuppressReturn = function () {
};
TextArea.prototype.getScrollable = function () {
	return true;
};
TextArea.prototype.setScrollable = function () {
};
TextArea.prototype.getSelection = function () {
	return {};
};
TextArea.prototype.getTextAlign = function () {
	return '';
};
TextArea.prototype.setTextAlign = function () {
};
TextArea.prototype.getValue = function () {
	return '';
};
TextArea.prototype.setValue = function () {
};
TextArea.prototype.getVerticalAlign = function () {
	return '';
};
TextArea.prototype.setVerticalAlign = function () {
};
module.exports = function (properties) {
	return new TextArea(properties);
};