function PickerColumn(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.PickerColumn';
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
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rowCount = properties.rowCount || undefined;
	this.rows = properties.rows || undefined;
	this.selectedRow = properties.selectedRow || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
PickerColumn.prototype.add = function () {
};
PickerColumn.prototype.addEventListener = function () {
};
PickerColumn.prototype.addRow = function () {
};
PickerColumn.prototype.animate = function () {
};
PickerColumn.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PickerColumn.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.finishLayout = function () {
};
PickerColumn.prototype.fireEvent = function () {
};
PickerColumn.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
PickerColumn.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
PickerColumn.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
PickerColumn.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
PickerColumn.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
PickerColumn.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
PickerColumn.prototype.getApiName = function () {
	return this.apiName;
};
PickerColumn.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
PickerColumn.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
PickerColumn.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
PickerColumn.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
PickerColumn.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
PickerColumn.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
PickerColumn.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
PickerColumn.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
PickerColumn.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
PickerColumn.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
PickerColumn.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
PickerColumn.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
PickerColumn.prototype.getBorderColor = function () {
	return this.borderColor;
};
PickerColumn.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
PickerColumn.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
PickerColumn.prototype.getBottom = function () {
	return this.bottom;
};
PickerColumn.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PickerColumn.prototype.getCenter = function () {
	return this.center;
};
PickerColumn.prototype.getChildren = function () {
	return this.children;
};
PickerColumn.prototype.getClipMode = function () {
	return this.clipMode;
};
PickerColumn.prototype.getFocusable = function () {
	return this.focusable;
};
PickerColumn.prototype.getHeight = function () {
	return this.height;
};
PickerColumn.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
PickerColumn.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
PickerColumn.prototype.getLayout = function () {
	return this.layout;
};
PickerColumn.prototype.getLeft = function () {
	return this.left;
};
PickerColumn.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
PickerColumn.prototype.getOpacity = function () {
	return this.opacity;
};
PickerColumn.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
PickerColumn.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
PickerColumn.prototype.getRect = function () {
	return this.rect;
};
PickerColumn.prototype.getRight = function () {
	return this.right;
};
PickerColumn.prototype.getRowCount = function () {
	return this.rowCount;
};
PickerColumn.prototype.getRows = function () {
	return this.rows;
};
PickerColumn.prototype.getSelectedRow = function () {
	return this.selectedRow;
};
PickerColumn.prototype.getSize = function () {
	return this.size;
};
PickerColumn.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
PickerColumn.prototype.getTintColor = function () {
	return this.tintColor;
};
PickerColumn.prototype.getTop = function () {
	return this.top;
};
PickerColumn.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
PickerColumn.prototype.getTransform = function () {
	return this.transform;
};
PickerColumn.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
PickerColumn.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
PickerColumn.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
PickerColumn.prototype.getVisible = function () {
	return this.visible;
};
PickerColumn.prototype.getWidth = function () {
	return this.width;
};
PickerColumn.prototype.getZIndex = function () {
	return this.zIndex;
};
PickerColumn.prototype.hide = function () {
};
PickerColumn.prototype.remove = function () {
};
PickerColumn.prototype.removeAllChildren = function () {
};
PickerColumn.prototype.removeEventListener = function () {
};
PickerColumn.prototype.removeRow = function () {
};
PickerColumn.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
PickerColumn.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
PickerColumn.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
PickerColumn.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
PickerColumn.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
PickerColumn.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
PickerColumn.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
PickerColumn.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
PickerColumn.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
PickerColumn.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
PickerColumn.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
PickerColumn.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
PickerColumn.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
PickerColumn.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
PickerColumn.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
PickerColumn.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
PickerColumn.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
PickerColumn.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
PickerColumn.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
PickerColumn.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
PickerColumn.prototype.setBottom = function (property) {
	this.bottom = property;
};
PickerColumn.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PickerColumn.prototype.setCenter = function (property) {
	this.center = property;
};
PickerColumn.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
PickerColumn.prototype.setFocusable = function (property) {
	this.focusable = property;
};
PickerColumn.prototype.setFont = function (property) {
	this.font = property;
};
PickerColumn.prototype.setHeight = function (property) {
	this.height = property;
};
PickerColumn.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
PickerColumn.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
PickerColumn.prototype.setLayout = function (property) {
	this.layout = property;
};
PickerColumn.prototype.setLeft = function (property) {
	this.left = property;
};
PickerColumn.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
PickerColumn.prototype.setOpacity = function (property) {
	this.opacity = property;
};
PickerColumn.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
PickerColumn.prototype.setRight = function (property) {
	this.right = property;
};
PickerColumn.prototype.setSelectedRow = function (property) {
	this.selectedRow = property;
};
PickerColumn.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
PickerColumn.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
PickerColumn.prototype.setTop = function (property) {
	this.top = property;
};
PickerColumn.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
PickerColumn.prototype.setTransform = function (property) {
	this.transform = property;
};
PickerColumn.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
PickerColumn.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
PickerColumn.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
PickerColumn.prototype.setVisible = function (property) {
	this.visible = property;
};
PickerColumn.prototype.setWidth = function (property) {
	this.width = property;
};
PickerColumn.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
PickerColumn.prototype.show = function () {
};
PickerColumn.prototype.startLayout = function () {
};
PickerColumn.prototype.toImage = function () {
	return {};
};
PickerColumn.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new PickerColumn(properties);
};