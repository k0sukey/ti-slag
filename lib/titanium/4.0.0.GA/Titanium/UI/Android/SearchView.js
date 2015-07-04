function SearchView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.apiName = 'Ti.UI.Android.SearchView';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.color = properties.color || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.iconified = properties.iconified || undefined;
	this.iconifiedByDefault = properties.iconifiedByDefault || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.submitEnabled = properties.submitEnabled || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
SearchView.prototype.addEventListener = function () {
};
SearchView.prototype.animate = function () {
};
SearchView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SearchView.prototype.blur = function () {
};
SearchView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.finishLayout was deprecated, since 3.0.0');
};
SearchView.prototype.fireEvent = function () {
};
SearchView.prototype.focus = function () {
};
SearchView.prototype.getAccessibilityHidden = function () {
	return true;
};
SearchView.prototype.getAccessibilityHint = function () {
	return '';
};
SearchView.prototype.getAccessibilityLabel = function () {
	return '';
};
SearchView.prototype.getAccessibilityValue = function () {
	return '';
};
SearchView.prototype.getApiName = function () {
	return '';
};
SearchView.prototype.getBackgroundColor = function () {
	return '';
};
SearchView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
SearchView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
SearchView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
SearchView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
SearchView.prototype.getBackgroundGradient = function () {
	return {};
};
SearchView.prototype.getBackgroundImage = function () {
	return '';
};
SearchView.prototype.getBackgroundRepeat = function () {
	return true;
};
SearchView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
SearchView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
SearchView.prototype.getBorderColor = function () {
	return '';
};
SearchView.prototype.getBorderRadius = function () {
	return 0;
};
SearchView.prototype.getBorderWidth = function () {
	return 0;
};
SearchView.prototype.getBottom = function () {
	return 0;
};
SearchView.prototype.getBubbleParent = function () {
	return true;
};
SearchView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.getChildren = function () {
	return [];
};
SearchView.prototype.getColor = function () {
	return '';
};
SearchView.prototype.getFocusable = function () {
	return true;
};
SearchView.prototype.getHeight = function () {
	return 0;
};
SearchView.prototype.getHintText = function () {
	return '';
};
SearchView.prototype.getHorizontalWrap = function () {
	return true;
};
SearchView.prototype.getIconified = function () {
	return true;
};
SearchView.prototype.getIconifiedByDefault = function () {
	return true;
};
SearchView.prototype.getKeepScreenOn = function () {
	return true;
};
SearchView.prototype.getLayout = function () {
	return '';
};
SearchView.prototype.getLeft = function () {
	return 0;
};
SearchView.prototype.getLifecycleContainer = function () {
	return {};
};
SearchView.prototype.getOpacity = function () {
	return 0;
};
SearchView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
SearchView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchView.prototype.getRight = function () {
	return 0;
};
SearchView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
SearchView.prototype.getSubmitEnabled = function () {
	return true;
};
SearchView.prototype.getTop = function () {
	return 0;
};
SearchView.prototype.getTouchEnabled = function () {
	return true;
};
SearchView.prototype.getTransform = function () {
	return {};
};
SearchView.prototype.getValue = function () {
	return '';
};
SearchView.prototype.getVisible = function () {
	return true;
};
SearchView.prototype.getWidth = function () {
	return 0;
};
SearchView.prototype.getZIndex = function () {
	return 0;
};
SearchView.prototype.hide = function () {
};
SearchView.prototype.remove = function () {
};
SearchView.prototype.removeAllChildren = function () {
};
SearchView.prototype.removeEventListener = function () {
};
SearchView.prototype.setAccessibilityHidden = function () {
};
SearchView.prototype.setAccessibilityHint = function () {
};
SearchView.prototype.setAccessibilityLabel = function () {
};
SearchView.prototype.setAccessibilityValue = function () {
};
SearchView.prototype.setBackgroundColor = function () {
};
SearchView.prototype.setBackgroundDisabledColor = function () {
};
SearchView.prototype.setBackgroundDisabledImage = function () {
};
SearchView.prototype.setBackgroundFocusedColor = function () {
};
SearchView.prototype.setBackgroundFocusedImage = function () {
};
SearchView.prototype.setBackgroundGradient = function () {
};
SearchView.prototype.setBackgroundImage = function () {
};
SearchView.prototype.setBackgroundRepeat = function () {
};
SearchView.prototype.setBackgroundSelectedColor = function () {
};
SearchView.prototype.setBackgroundSelectedImage = function () {
};
SearchView.prototype.setBorderColor = function () {
};
SearchView.prototype.setBorderRadius = function () {
};
SearchView.prototype.setBorderWidth = function () {
};
SearchView.prototype.setBottom = function () {
};
SearchView.prototype.setBubbleParent = function () {
};
SearchView.prototype.setCenter = function () {
};
SearchView.prototype.setColor = function () {
};
SearchView.prototype.setFocusable = function () {
};
SearchView.prototype.setHeight = function () {
};
SearchView.prototype.setHintText = function () {
};
SearchView.prototype.setHorizontalWrap = function () {
};
SearchView.prototype.setIconified = function () {
};
SearchView.prototype.setIconifiedByDefault = function () {
};
SearchView.prototype.setKeepScreenOn = function () {
};
SearchView.prototype.setLayout = function () {
};
SearchView.prototype.setLeft = function () {
};
SearchView.prototype.setLifecycleContainer = function () {
};
SearchView.prototype.setOpacity = function () {
};
SearchView.prototype.setRight = function () {
};
SearchView.prototype.setSoftKeyboardOnFocus = function () {
};
SearchView.prototype.setSubmitEnabled = function () {
};
SearchView.prototype.setTop = function () {
};
SearchView.prototype.setTouchEnabled = function () {
};
SearchView.prototype.setTransform = function () {
};
SearchView.prototype.setValue = function () {
};
SearchView.prototype.setVisible = function () {
};
SearchView.prototype.setWidth = function () {
};
SearchView.prototype.setZIndex = function () {
};
SearchView.prototype.show = function () {
};
SearchView.prototype.startLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.startLayout was deprecated, since 3.0.0');
};
SearchView.prototype.toImage = function () {
	return {};
};
SearchView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new SearchView(properties);
};