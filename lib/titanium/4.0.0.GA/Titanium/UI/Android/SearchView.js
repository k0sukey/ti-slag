function SearchView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.apiName = 'Ti.UI.Android.SearchView';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
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
	this.color = properties.color || '';
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.hintText = properties.hintText || '';
	this.horizontalWrap = properties.horizontalWrap || true;
	this.iconified = properties.iconified || true;
	this.iconifiedByDefault = properties.iconifiedByDefault || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
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
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.submitEnabled = properties.submitEnabled || true;
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.value = properties.value || '';
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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