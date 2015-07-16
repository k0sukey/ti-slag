function SearchView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Android.SearchView';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
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
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.color = properties.color || '';
	this.hintText = properties.hintText || '';
	this.value = properties.value || '';
	this.iconified = properties.iconified || true;
	this.iconifiedByDefault = properties.iconifiedByDefault || true;
	this.submitEnabled = properties.submitEnabled || true;
	return this;
}
SearchView.prototype.addEventListener = function () {
};
SearchView.prototype.removeEventListener = function () {
};
SearchView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SearchView.prototype.fireEvent = function () {
};
SearchView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.finishLayout was deprecated, since 3.0.0');
};
SearchView.prototype.removeAllChildren = function () {
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
SearchView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.animate = function () {
};
SearchView.prototype.hide = function () {
};
SearchView.prototype.remove = function () {
};
SearchView.prototype.show = function () {
};
SearchView.prototype.blur = function () {
};
SearchView.prototype.focus = function () {
};
SearchView.prototype.getBubbleParent = function () {
	return true;
};
SearchView.prototype.setBubbleParent = function () {
};
SearchView.prototype.getApiName = function () {
	return '';
};
SearchView.prototype.getLifecycleContainer = function () {
	return {};
};
SearchView.prototype.setLifecycleContainer = function () {
};
SearchView.prototype.getAccessibilityHidden = function () {
	return true;
};
SearchView.prototype.setAccessibilityHidden = function () {
};
SearchView.prototype.getAccessibilityHint = function () {
	return '';
};
SearchView.prototype.setAccessibilityHint = function () {
};
SearchView.prototype.getAccessibilityLabel = function () {
	return '';
};
SearchView.prototype.setAccessibilityLabel = function () {
};
SearchView.prototype.getAccessibilityValue = function () {
	return '';
};
SearchView.prototype.setAccessibilityValue = function () {
};
SearchView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
SearchView.prototype.setBackgroundDisabledColor = function () {
};
SearchView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
SearchView.prototype.setBackgroundDisabledImage = function () {
};
SearchView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
SearchView.prototype.setBackgroundFocusedColor = function () {
};
SearchView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
SearchView.prototype.setBackgroundFocusedImage = function () {
};
SearchView.prototype.getBackgroundGradient = function () {
	return {};
};
SearchView.prototype.setBackgroundGradient = function () {
};
SearchView.prototype.getBackgroundImage = function () {
	return '';
};
SearchView.prototype.setBackgroundImage = function () {
};
SearchView.prototype.getBackgroundRepeat = function () {
	return true;
};
SearchView.prototype.setBackgroundRepeat = function () {
};
SearchView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
SearchView.prototype.setBackgroundSelectedColor = function () {
};
SearchView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
SearchView.prototype.setBackgroundSelectedImage = function () {
};
SearchView.prototype.getFocusable = function () {
	return true;
};
SearchView.prototype.setFocusable = function () {
};
SearchView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
SearchView.prototype.setOverrideCurrentAnimation = function () {
};
SearchView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
SearchView.prototype.setSoftKeyboardOnFocus = function () {
};
SearchView.prototype.getTransform = function () {
	return {};
};
SearchView.prototype.setTransform = function () {
};
SearchView.prototype.getHorizontalWrap = function () {
	return true;
};
SearchView.prototype.setHorizontalWrap = function () {
};
SearchView.prototype.getZIndex = function () {
	return 0;
};
SearchView.prototype.setZIndex = function () {
};
SearchView.prototype.getKeepScreenOn = function () {
	return true;
};
SearchView.prototype.setKeepScreenOn = function () {
};
SearchView.prototype.getBackgroundColor = function () {
	return '';
};
SearchView.prototype.setBackgroundColor = function () {
};
SearchView.prototype.getBorderColor = function () {
	return '';
};
SearchView.prototype.setBorderColor = function () {
};
SearchView.prototype.getBorderRadius = function () {
	return 0;
};
SearchView.prototype.setBorderRadius = function () {
};
SearchView.prototype.getBorderWidth = function () {
	return 0;
};
SearchView.prototype.setBorderWidth = function () {
};
SearchView.prototype.getBottom = function () {
	return '';
};
SearchView.prototype.setBottom = function () {
};
SearchView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.setCenter = function () {
};
SearchView.prototype.getChildren = function () {
	return [];
};
SearchView.prototype.getHeight = function () {
	return '';
};
SearchView.prototype.setHeight = function () {
};
SearchView.prototype.getLayout = function () {
	return '';
};
SearchView.prototype.setLayout = function () {
};
SearchView.prototype.getLeft = function () {
	return '';
};
SearchView.prototype.setLeft = function () {
};
SearchView.prototype.getOpacity = function () {
	return 0;
};
SearchView.prototype.setOpacity = function () {
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
	return '';
};
SearchView.prototype.setRight = function () {
};
SearchView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SearchView.prototype.getTop = function () {
	return '';
};
SearchView.prototype.setTop = function () {
};
SearchView.prototype.getTouchEnabled = function () {
	return true;
};
SearchView.prototype.setTouchEnabled = function () {
};
SearchView.prototype.getVisible = function () {
	return true;
};
SearchView.prototype.setVisible = function () {
};
SearchView.prototype.getWidth = function () {
	return '';
};
SearchView.prototype.setWidth = function () {
};
SearchView.prototype.getColor = function () {
	return '';
};
SearchView.prototype.setColor = function () {
};
SearchView.prototype.getHintText = function () {
	return '';
};
SearchView.prototype.setHintText = function () {
};
SearchView.prototype.getValue = function () {
	return '';
};
SearchView.prototype.setValue = function () {
};
SearchView.prototype.getIconified = function () {
	return true;
};
SearchView.prototype.setIconified = function () {
};
SearchView.prototype.getIconifiedByDefault = function () {
	return true;
};
SearchView.prototype.setIconifiedByDefault = function () {
};
SearchView.prototype.getSubmitEnabled = function () {
	return true;
};
SearchView.prototype.setSubmitEnabled = function () {
};
module.exports = function (properties) {
	return new SearchView(properties);
};