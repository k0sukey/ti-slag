function PickerRow(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.PickerRow';
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
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.title = properties.title || '';
	return this;
}
PickerRow.prototype.addEventListener = function () {
};
PickerRow.prototype.removeEventListener = function () {
};
PickerRow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PickerRow.prototype.fireEvent = function () {
};
PickerRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.PickerRow.finishLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.removeAllChildren = function () {
};
PickerRow.prototype.startLayout = function () {
	throw new Error('Ti.UI.PickerRow.startLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.toImage = function () {
	return {};
};
PickerRow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.PickerRow.updateLayout was deprecated, since 3.0.0');
};
PickerRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.add = function () {
};
PickerRow.prototype.animate = function () {
};
PickerRow.prototype.hide = function () {
};
PickerRow.prototype.remove = function () {
};
PickerRow.prototype.show = function () {
};
PickerRow.prototype.getBubbleParent = function () {
	return true;
};
PickerRow.prototype.setBubbleParent = function () {
};
PickerRow.prototype.getApiName = function () {
	return '';
};
PickerRow.prototype.getLifecycleContainer = function () {
	return {};
};
PickerRow.prototype.setLifecycleContainer = function () {
};
PickerRow.prototype.getAccessibilityHidden = function () {
	return true;
};
PickerRow.prototype.setAccessibilityHidden = function () {
};
PickerRow.prototype.getAccessibilityHint = function () {
	return '';
};
PickerRow.prototype.setAccessibilityHint = function () {
};
PickerRow.prototype.getAccessibilityLabel = function () {
	return '';
};
PickerRow.prototype.setAccessibilityLabel = function () {
};
PickerRow.prototype.getAccessibilityValue = function () {
	return '';
};
PickerRow.prototype.setAccessibilityValue = function () {
};
PickerRow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.setAnchorPoint = function () {
};
PickerRow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.getBackgroundDisabledColor = function () {
	return '';
};
PickerRow.prototype.setBackgroundDisabledColor = function () {
};
PickerRow.prototype.getBackgroundDisabledImage = function () {
	return '';
};
PickerRow.prototype.setBackgroundDisabledImage = function () {
};
PickerRow.prototype.getBackgroundFocusedColor = function () {
	return '';
};
PickerRow.prototype.setBackgroundFocusedColor = function () {
};
PickerRow.prototype.getBackgroundFocusedImage = function () {
	return '';
};
PickerRow.prototype.setBackgroundFocusedImage = function () {
};
PickerRow.prototype.getBackgroundGradient = function () {
	return {};
};
PickerRow.prototype.setBackgroundGradient = function () {
};
PickerRow.prototype.getBackgroundImage = function () {
	return '';
};
PickerRow.prototype.setBackgroundImage = function () {
};
PickerRow.prototype.getBackgroundRepeat = function () {
	return true;
};
PickerRow.prototype.setBackgroundRepeat = function () {
};
PickerRow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
PickerRow.prototype.setBackgroundLeftCap = function () {
};
PickerRow.prototype.getBackgroundSelectedColor = function () {
	return '';
};
PickerRow.prototype.setBackgroundSelectedColor = function () {
};
PickerRow.prototype.getBackgroundSelectedImage = function () {
	return '';
};
PickerRow.prototype.setBackgroundSelectedImage = function () {
};
PickerRow.prototype.getBackgroundTopCap = function () {
	return 0;
};
PickerRow.prototype.setBackgroundTopCap = function () {
};
PickerRow.prototype.getClipMode = function () {
	return 0;
};
PickerRow.prototype.setClipMode = function () {
};
PickerRow.prototype.getFocusable = function () {
	return true;
};
PickerRow.prototype.setFocusable = function () {
};
PickerRow.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
PickerRow.prototype.setOverrideCurrentAnimation = function () {
};
PickerRow.prototype.getPullBackgroundColor = function () {
	return '';
};
PickerRow.prototype.setPullBackgroundColor = function () {
};
PickerRow.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
PickerRow.prototype.setSoftKeyboardOnFocus = function () {
};
PickerRow.prototype.getTransform = function () {
	return {};
};
PickerRow.prototype.setTransform = function () {
};
PickerRow.prototype.getViewShadowRadius = function () {
	return 0;
};
PickerRow.prototype.setViewShadowRadius = function () {
};
PickerRow.prototype.getViewShadowColor = function () {
	return '';
};
PickerRow.prototype.setViewShadowColor = function () {
};
PickerRow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.setViewShadowOffset = function () {
};
PickerRow.prototype.getHorizontalWrap = function () {
	return true;
};
PickerRow.prototype.setHorizontalWrap = function () {
};
PickerRow.prototype.getZIndex = function () {
	return 0;
};
PickerRow.prototype.setZIndex = function () {
};
PickerRow.prototype.getKeepScreenOn = function () {
	return true;
};
PickerRow.prototype.setKeepScreenOn = function () {
};
PickerRow.prototype.getBackgroundColor = function () {
	return '';
};
PickerRow.prototype.setBackgroundColor = function () {
};
PickerRow.prototype.getBorderColor = function () {
	return '';
};
PickerRow.prototype.setBorderColor = function () {
};
PickerRow.prototype.getBorderRadius = function () {
	return 0;
};
PickerRow.prototype.setBorderRadius = function () {
};
PickerRow.prototype.getBorderWidth = function () {
	return 0;
};
PickerRow.prototype.setBorderWidth = function () {
};
PickerRow.prototype.getBottom = function () {
	return '';
};
PickerRow.prototype.setBottom = function () {
};
PickerRow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerRow.prototype.setCenter = function () {
};
PickerRow.prototype.getChildren = function () {
	return [];
};
PickerRow.prototype.getHeight = function () {
	return '';
};
PickerRow.prototype.setHeight = function () {
};
PickerRow.prototype.getLayout = function () {
	return '';
};
PickerRow.prototype.setLayout = function () {
};
PickerRow.prototype.getLeft = function () {
	return '';
};
PickerRow.prototype.setLeft = function () {
};
PickerRow.prototype.getOpacity = function () {
	return 0;
};
PickerRow.prototype.setOpacity = function () {
};
PickerRow.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerRow.prototype.getRight = function () {
	return '';
};
PickerRow.prototype.setRight = function () {
};
PickerRow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerRow.prototype.getTintColor = function () {
	return '';
};
PickerRow.prototype.setTintColor = function () {
};
PickerRow.prototype.getTop = function () {
	return '';
};
PickerRow.prototype.setTop = function () {
};
PickerRow.prototype.getTouchEnabled = function () {
	return true;
};
PickerRow.prototype.setTouchEnabled = function () {
};
PickerRow.prototype.getVisible = function () {
	return true;
};
PickerRow.prototype.setVisible = function () {
};
PickerRow.prototype.getWidth = function () {
	return '';
};
PickerRow.prototype.setWidth = function () {
};
PickerRow.prototype.getColor = function () {
	return '';
};
PickerRow.prototype.setColor = function () {
};
PickerRow.prototype.getFont = function () {
	return {};
};
PickerRow.prototype.setFont = function () {
};
PickerRow.prototype.getTitle = function () {
	return '';
};
PickerRow.prototype.setTitle = function () {
};
module.exports = function (properties) {
	return new PickerRow(properties);
};