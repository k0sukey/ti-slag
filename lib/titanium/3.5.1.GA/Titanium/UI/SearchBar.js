function SearchBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.SearchBar';
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
	this.barColor = properties.barColor || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	if (properties.enabled) {
		throw new Error('Ti.UI.SearchBar.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.hinttextid = properties.hinttextid || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keyboardType = properties.keyboardType || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.prompt = properties.prompt || undefined;
	this.promptid = properties.promptid || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.showBookmark = properties.showBookmark || undefined;
	this.showCancel = properties.showCancel || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
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