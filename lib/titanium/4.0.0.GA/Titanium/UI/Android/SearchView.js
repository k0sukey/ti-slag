function SearchView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.apiName = 'Titanium.UI.Android.SearchView';
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
};
SearchView.prototype.fireEvent = function () {
};
SearchView.prototype.focus = function () {
};
SearchView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SearchView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SearchView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SearchView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SearchView.prototype.getApiName = function () {
	return this.apiName;
};
SearchView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SearchView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
SearchView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
SearchView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
SearchView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
SearchView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SearchView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SearchView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SearchView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
SearchView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
SearchView.prototype.getBorderColor = function () {
	return this.borderColor;
};
SearchView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SearchView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SearchView.prototype.getBottom = function () {
	return this.bottom;
};
SearchView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SearchView.prototype.getCenter = function () {
	return this.center;
};
SearchView.prototype.getChildren = function () {
	return this.children;
};
SearchView.prototype.getColor = function () {
	return this.color;
};
SearchView.prototype.getFocusable = function () {
	return this.focusable;
};
SearchView.prototype.getHeight = function () {
	return this.height;
};
SearchView.prototype.getHintText = function () {
	return this.hintText;
};
SearchView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SearchView.prototype.getIconified = function () {
	return this.iconified;
};
SearchView.prototype.getIconifiedByDefault = function () {
	return this.iconifiedByDefault;
};
SearchView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
SearchView.prototype.getLayout = function () {
	return this.layout;
};
SearchView.prototype.getLeft = function () {
	return this.left;
};
SearchView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
SearchView.prototype.getOpacity = function () {
	return this.opacity;
};
SearchView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
SearchView.prototype.getRect = function () {
	return this.rect;
};
SearchView.prototype.getRight = function () {
	return this.right;
};
SearchView.prototype.getSize = function () {
	return this.size;
};
SearchView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
SearchView.prototype.getSubmitEnabled = function () {
	return this.submitEnabled;
};
SearchView.prototype.getTop = function () {
	return this.top;
};
SearchView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SearchView.prototype.getTransform = function () {
	return this.transform;
};
SearchView.prototype.getValue = function () {
	return this.value;
};
SearchView.prototype.getVisible = function () {
	return this.visible;
};
SearchView.prototype.getWidth = function () {
	return this.width;
};
SearchView.prototype.getZIndex = function () {
	return this.zIndex;
};
SearchView.prototype.hide = function () {
};
SearchView.prototype.remove = function () {
};
SearchView.prototype.removeAllChildren = function () {
};
SearchView.prototype.removeEventListener = function () {
};
SearchView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SearchView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SearchView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SearchView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SearchView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SearchView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
SearchView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
SearchView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
SearchView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
SearchView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SearchView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SearchView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SearchView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
SearchView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
SearchView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SearchView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SearchView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SearchView.prototype.setBottom = function (property) {
	this.bottom = property;
};
SearchView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SearchView.prototype.setCenter = function (property) {
	this.center = property;
};
SearchView.prototype.setColor = function (property) {
	this.color = property;
};
SearchView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
SearchView.prototype.setHeight = function (property) {
	this.height = property;
};
SearchView.prototype.setHintText = function (property) {
	this.hintText = property;
};
SearchView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SearchView.prototype.setIconified = function (property) {
	this.iconified = property;
};
SearchView.prototype.setIconifiedByDefault = function (property) {
	this.iconifiedByDefault = property;
};
SearchView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
SearchView.prototype.setLayout = function (property) {
	this.layout = property;
};
SearchView.prototype.setLeft = function (property) {
	this.left = property;
};
SearchView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
SearchView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SearchView.prototype.setRight = function (property) {
	this.right = property;
};
SearchView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
SearchView.prototype.setSubmitEnabled = function (property) {
	this.submitEnabled = property;
};
SearchView.prototype.setTop = function (property) {
	this.top = property;
};
SearchView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SearchView.prototype.setTransform = function (property) {
	this.transform = property;
};
SearchView.prototype.setValue = function (property) {
	this.value = property;
};
SearchView.prototype.setVisible = function (property) {
	this.visible = property;
};
SearchView.prototype.setWidth = function (property) {
	this.width = property;
};
SearchView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SearchView.prototype.show = function () {
};
SearchView.prototype.startLayout = function () {
};
SearchView.prototype.toImage = function () {
	return {};
};
SearchView.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new SearchView(properties);
};