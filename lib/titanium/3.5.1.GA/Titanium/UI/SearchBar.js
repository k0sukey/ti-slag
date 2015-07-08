function SearchBar(properties) {
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
	this.apiName = 'Ti.UI.SearchBar';
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
	this.barColor = properties.barColor || '';
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
	if (properties.enabled) {
		throw new Error('Ti.UI.SearchBar.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.hintText = properties.hintText || '';
	this.hinttextid = properties.hinttextid || '';
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.keyboardType = properties.keyboardType || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.prompt = properties.prompt || '';
	this.promptid = properties.promptid || '';
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.showBookmark = properties.showBookmark || true;
	this.showCancel = properties.showCancel || true;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || '';
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
SearchBar.prototype.addEventListener = function () {
};
SearchBar.prototype.animate = function () {
};
SearchBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SearchBar.prototype.blur = function () {
};
SearchBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.SearchBar.finishLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.fireEvent = function () {
};
SearchBar.prototype.focus = function () {
};
SearchBar.prototype.getAccessibilityHidden = function () {
	return true;
};
SearchBar.prototype.getAccessibilityHint = function () {
	return '';
};
SearchBar.prototype.getAccessibilityLabel = function () {
	return '';
};
SearchBar.prototype.getAccessibilityValue = function () {
	return '';
};
SearchBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.getApiName = function () {
	return '';
};
SearchBar.prototype.getAutocapitalization = function () {
	return 0;
};
SearchBar.prototype.getAutocorrect = function () {
	return true;
};
SearchBar.prototype.getBackgroundColor = function () {
	return '';
};
SearchBar.prototype.getBackgroundDisabledColor = function () {
	return '';
};
SearchBar.prototype.getBackgroundDisabledImage = function () {
	return '';
};
SearchBar.prototype.getBackgroundFocusedColor = function () {
	return '';
};
SearchBar.prototype.getBackgroundFocusedImage = function () {
	return '';
};
SearchBar.prototype.getBackgroundGradient = function () {
	return {};
};
SearchBar.prototype.getBackgroundImage = function () {
	return '';
};
SearchBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
SearchBar.prototype.getBackgroundRepeat = function () {
	return true;
};
SearchBar.prototype.getBackgroundSelectedColor = function () {
	return '';
};
SearchBar.prototype.getBackgroundSelectedImage = function () {
	return '';
};
SearchBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
SearchBar.prototype.getBarColor = function () {
	return '';
};
SearchBar.prototype.getBorderColor = function () {
	return '';
};
SearchBar.prototype.getBorderRadius = function () {
	return 0;
};
SearchBar.prototype.getBorderWidth = function () {
	return 0;
};
SearchBar.prototype.getBottom = function () {
	return 0;
};
SearchBar.prototype.getBubbleParent = function () {
	return true;
};
SearchBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.getChildren = function () {
	return [];
};
SearchBar.prototype.getClipMode = function () {
	return 0;
};
SearchBar.prototype.getEnabled = function () {
	throw new Error('Ti.UI.SearchBar.getEnabled was deprecated, since 3.3.0');
};
SearchBar.prototype.getFocusable = function () {
	return true;
};
SearchBar.prototype.getHeight = function () {
	return 0;
};
SearchBar.prototype.getHintText = function () {
	return '';
};
SearchBar.prototype.getHinttextid = function () {
	return '';
};
SearchBar.prototype.getHorizontalWrap = function () {
	return true;
};
SearchBar.prototype.getKeepScreenOn = function () {
	return true;
};
SearchBar.prototype.getKeyboardType = function () {
	return 0;
};
SearchBar.prototype.getLayout = function () {
	return '';
};
SearchBar.prototype.getLeft = function () {
	return 0;
};
SearchBar.prototype.getOpacity = function () {
	return 0;
};
SearchBar.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
SearchBar.prototype.getPrompt = function () {
	return '';
};
SearchBar.prototype.getPromptid = function () {
	return '';
};
SearchBar.prototype.getPullBackgroundColor = function () {
	return '';
};
SearchBar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchBar.prototype.getRight = function () {
	return 0;
};
SearchBar.prototype.getShowBookmark = function () {
	return true;
};
SearchBar.prototype.getShowCancel = function () {
	return true;
};
SearchBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchBar.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
SearchBar.prototype.getTintColor = function () {
	return '';
};
SearchBar.prototype.getTop = function () {
	return 0;
};
SearchBar.prototype.getTouchEnabled = function () {
	return true;
};
SearchBar.prototype.getTransform = function () {
	return {};
};
SearchBar.prototype.getValue = function () {
	return '';
};
SearchBar.prototype.getViewShadowColor = function () {
	return '';
};
SearchBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.getViewShadowRadius = function () {
	return 0;
};
SearchBar.prototype.getVisible = function () {
	return true;
};
SearchBar.prototype.getWidth = function () {
	return 0;
};
SearchBar.prototype.getZIndex = function () {
	return 0;
};
SearchBar.prototype.hide = function () {
};
SearchBar.prototype.remove = function () {
};
SearchBar.prototype.removeEventListener = function () {
};
SearchBar.prototype.setAccessibilityHidden = function () {
};
SearchBar.prototype.setAccessibilityHint = function () {
};
SearchBar.prototype.setAccessibilityLabel = function () {
};
SearchBar.prototype.setAccessibilityValue = function () {
};
SearchBar.prototype.setAnchorPoint = function () {
};
SearchBar.prototype.setAutocapitalization = function () {
};
SearchBar.prototype.setAutocorrect = function () {
};
SearchBar.prototype.setBackgroundColor = function () {
};
SearchBar.prototype.setBackgroundDisabledColor = function () {
};
SearchBar.prototype.setBackgroundDisabledImage = function () {
};
SearchBar.prototype.setBackgroundFocusedColor = function () {
};
SearchBar.prototype.setBackgroundFocusedImage = function () {
};
SearchBar.prototype.setBackgroundGradient = function () {
};
SearchBar.prototype.setBackgroundImage = function () {
};
SearchBar.prototype.setBackgroundLeftCap = function () {
};
SearchBar.prototype.setBackgroundRepeat = function () {
};
SearchBar.prototype.setBackgroundSelectedColor = function () {
};
SearchBar.prototype.setBackgroundSelectedImage = function () {
};
SearchBar.prototype.setBackgroundTopCap = function () {
};
SearchBar.prototype.setBarColor = function () {
};
SearchBar.prototype.setBorderColor = function () {
};
SearchBar.prototype.setBorderRadius = function () {
};
SearchBar.prototype.setBorderWidth = function () {
};
SearchBar.prototype.setBottom = function () {
};
SearchBar.prototype.setBubbleParent = function () {
};
SearchBar.prototype.setCenter = function () {
};
SearchBar.prototype.setClipMode = function () {
};
SearchBar.prototype.setEnabled = function () {
	throw new Error('Ti.UI.SearchBar.setEnabled was deprecated, since 3.3.0');
};
SearchBar.prototype.setFocusable = function () {
};
SearchBar.prototype.setHeight = function () {
};
SearchBar.prototype.setHintText = function () {
};
SearchBar.prototype.setHinttextid = function () {
};
SearchBar.prototype.setHorizontalWrap = function () {
};
SearchBar.prototype.setKeepScreenOn = function () {
};
SearchBar.prototype.setKeyboardType = function () {
};
SearchBar.prototype.setLayout = function () {
};
SearchBar.prototype.setLeft = function () {
};
SearchBar.prototype.setOpacity = function () {
};
SearchBar.prototype.setPrompt = function () {
};
SearchBar.prototype.setPromptid = function () {
};
SearchBar.prototype.setPullBackgroundColor = function () {
};
SearchBar.prototype.setRight = function () {
};
SearchBar.prototype.setShowBookmark = function () {
};
SearchBar.prototype.setShowCancel = function () {
};
SearchBar.prototype.setSoftKeyboardOnFocus = function () {
};
SearchBar.prototype.setTintColor = function () {
};
SearchBar.prototype.setTop = function () {
};
SearchBar.prototype.setTouchEnabled = function () {
};
SearchBar.prototype.setTransform = function () {
};
SearchBar.prototype.setValue = function () {
};
SearchBar.prototype.setViewShadowColor = function () {
};
SearchBar.prototype.setViewShadowOffset = function () {
};
SearchBar.prototype.setViewShadowRadius = function () {
};
SearchBar.prototype.setVisible = function () {
};
SearchBar.prototype.setWidth = function () {
};
SearchBar.prototype.setZIndex = function () {
};
SearchBar.prototype.show = function () {
};
SearchBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.SearchBar.startLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.toImage = function () {
	return {};
};
SearchBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.SearchBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new SearchBar(properties);
};