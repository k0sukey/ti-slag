function SearchBar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.SearchBar';
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
	this.autocapitalization = properties.autocapitalization || 0;
	this.autocorrect = properties.autocorrect || true;
	this.barColor = properties.barColor || '';
	this.hintText = properties.hintText || '';
	this.hinttextid = properties.hinttextid || '';
	this.keyboardType = properties.keyboardType || 0;
	this.prompt = properties.prompt || '';
	this.promptid = properties.promptid || '';
	this.showBookmark = properties.showBookmark || true;
	this.showCancel = properties.showCancel || true;
	this.value = properties.value || '';
	return this;
}
SearchBar.prototype.addEventListener = function () {
};
SearchBar.prototype.removeEventListener = function () {
};
SearchBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SearchBar.prototype.fireEvent = function () {
};
SearchBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.SearchBar.finishLayout was deprecated, since 3.0.0');
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
SearchBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.animate = function () {
};
SearchBar.prototype.hide = function () {
};
SearchBar.prototype.remove = function () {
};
SearchBar.prototype.show = function () {
};
SearchBar.prototype.blur = function () {
};
SearchBar.prototype.focus = function () {
};
SearchBar.prototype.setShowCancel = function () {
};
SearchBar.prototype.getBubbleParent = function () {
	return true;
};
SearchBar.prototype.setBubbleParent = function () {
};
SearchBar.prototype.getApiName = function () {
	return '';
};
SearchBar.prototype.getLifecycleContainer = function () {
	return {};
};
SearchBar.prototype.setLifecycleContainer = function () {
};
SearchBar.prototype.getAccessibilityHidden = function () {
	return true;
};
SearchBar.prototype.setAccessibilityHidden = function () {
};
SearchBar.prototype.getAccessibilityHint = function () {
	return '';
};
SearchBar.prototype.setAccessibilityHint = function () {
};
SearchBar.prototype.getAccessibilityLabel = function () {
	return '';
};
SearchBar.prototype.setAccessibilityLabel = function () {
};
SearchBar.prototype.getAccessibilityValue = function () {
	return '';
};
SearchBar.prototype.setAccessibilityValue = function () {
};
SearchBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.setAnchorPoint = function () {
};
SearchBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.getBackgroundDisabledColor = function () {
	return '';
};
SearchBar.prototype.setBackgroundDisabledColor = function () {
};
SearchBar.prototype.getBackgroundDisabledImage = function () {
	return '';
};
SearchBar.prototype.setBackgroundDisabledImage = function () {
};
SearchBar.prototype.getBackgroundFocusedColor = function () {
	return '';
};
SearchBar.prototype.setBackgroundFocusedColor = function () {
};
SearchBar.prototype.getBackgroundFocusedImage = function () {
	return '';
};
SearchBar.prototype.setBackgroundFocusedImage = function () {
};
SearchBar.prototype.getBackgroundGradient = function () {
	return {};
};
SearchBar.prototype.setBackgroundGradient = function () {
};
SearchBar.prototype.getBackgroundImage = function () {
	return '';
};
SearchBar.prototype.setBackgroundImage = function () {
};
SearchBar.prototype.getBackgroundRepeat = function () {
	return true;
};
SearchBar.prototype.setBackgroundRepeat = function () {
};
SearchBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
SearchBar.prototype.setBackgroundLeftCap = function () {
};
SearchBar.prototype.getBackgroundSelectedColor = function () {
	return '';
};
SearchBar.prototype.setBackgroundSelectedColor = function () {
};
SearchBar.prototype.getBackgroundSelectedImage = function () {
	return '';
};
SearchBar.prototype.setBackgroundSelectedImage = function () {
};
SearchBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
SearchBar.prototype.setBackgroundTopCap = function () {
};
SearchBar.prototype.getClipMode = function () {
	return 0;
};
SearchBar.prototype.setClipMode = function () {
};
SearchBar.prototype.getFocusable = function () {
	return true;
};
SearchBar.prototype.setFocusable = function () {
};
SearchBar.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
SearchBar.prototype.setOverrideCurrentAnimation = function () {
};
SearchBar.prototype.getPullBackgroundColor = function () {
	return '';
};
SearchBar.prototype.setPullBackgroundColor = function () {
};
SearchBar.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
SearchBar.prototype.setSoftKeyboardOnFocus = function () {
};
SearchBar.prototype.getTransform = function () {
	return {};
};
SearchBar.prototype.setTransform = function () {
};
SearchBar.prototype.getViewShadowRadius = function () {
	return 0;
};
SearchBar.prototype.setViewShadowRadius = function () {
};
SearchBar.prototype.getViewShadowColor = function () {
	return '';
};
SearchBar.prototype.setViewShadowColor = function () {
};
SearchBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.setViewShadowOffset = function () {
};
SearchBar.prototype.getHorizontalWrap = function () {
	return true;
};
SearchBar.prototype.setHorizontalWrap = function () {
};
SearchBar.prototype.getZIndex = function () {
	return 0;
};
SearchBar.prototype.setZIndex = function () {
};
SearchBar.prototype.getKeepScreenOn = function () {
	return true;
};
SearchBar.prototype.setKeepScreenOn = function () {
};
SearchBar.prototype.getBackgroundColor = function () {
	return '';
};
SearchBar.prototype.setBackgroundColor = function () {
};
SearchBar.prototype.getBorderColor = function () {
	return '';
};
SearchBar.prototype.setBorderColor = function () {
};
SearchBar.prototype.getBorderRadius = function () {
	return 0;
};
SearchBar.prototype.setBorderRadius = function () {
};
SearchBar.prototype.getBorderWidth = function () {
	return 0;
};
SearchBar.prototype.setBorderWidth = function () {
};
SearchBar.prototype.getBottom = function () {
	return '';
};
SearchBar.prototype.setBottom = function () {
};
SearchBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.setCenter = function () {
};
SearchBar.prototype.getChildren = function () {
	return [];
};
SearchBar.prototype.getHeight = function () {
	return '';
};
SearchBar.prototype.setHeight = function () {
};
SearchBar.prototype.getLayout = function () {
	return '';
};
SearchBar.prototype.setLayout = function () {
};
SearchBar.prototype.getLeft = function () {
	return '';
};
SearchBar.prototype.setLeft = function () {
};
SearchBar.prototype.getOpacity = function () {
	return 0;
};
SearchBar.prototype.setOpacity = function () {
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
	return '';
};
SearchBar.prototype.setRight = function () {
};
SearchBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchBar.prototype.getTintColor = function () {
	return '';
};
SearchBar.prototype.setTintColor = function () {
};
SearchBar.prototype.getTop = function () {
	return '';
};
SearchBar.prototype.setTop = function () {
};
SearchBar.prototype.getTouchEnabled = function () {
	return true;
};
SearchBar.prototype.setTouchEnabled = function () {
};
SearchBar.prototype.getVisible = function () {
	return true;
};
SearchBar.prototype.setVisible = function () {
};
SearchBar.prototype.getWidth = function () {
	return '';
};
SearchBar.prototype.setWidth = function () {
};
SearchBar.prototype.getAutocapitalization = function () {
	return 0;
};
SearchBar.prototype.setAutocapitalization = function () {
};
SearchBar.prototype.getAutocorrect = function () {
	return true;
};
SearchBar.prototype.setAutocorrect = function () {
};
SearchBar.prototype.getBarColor = function () {
	return '';
};
SearchBar.prototype.setBarColor = function () {
};
SearchBar.prototype.getHintText = function () {
	return '';
};
SearchBar.prototype.setHintText = function () {
};
SearchBar.prototype.getHinttextid = function () {
	return '';
};
SearchBar.prototype.setHinttextid = function () {
};
SearchBar.prototype.getKeyboardType = function () {
	return 0;
};
SearchBar.prototype.setKeyboardType = function () {
};
SearchBar.prototype.getPrompt = function () {
	return '';
};
SearchBar.prototype.setPrompt = function () {
};
SearchBar.prototype.getPromptid = function () {
	return '';
};
SearchBar.prototype.setPromptid = function () {
};
SearchBar.prototype.getShowBookmark = function () {
	return true;
};
SearchBar.prototype.setShowBookmark = function () {
};
SearchBar.prototype.getShowCancel = function () {
	return true;
};
SearchBar.prototype.setShowCancel = function () {
};
SearchBar.prototype.getValue = function () {
	return '';
};
SearchBar.prototype.setValue = function () {
};
module.exports = function (properties) {
	return new SearchBar(properties);
};