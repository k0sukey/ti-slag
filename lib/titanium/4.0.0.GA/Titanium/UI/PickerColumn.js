function PickerColumn(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.PickerColumn';
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
	throw new Error('Ti.UI.PickerColumn.finishLayout was deprecated, since 3.0.0');
};
PickerColumn.prototype.fireEvent = function () {
};
PickerColumn.prototype.getAccessibilityHidden = function () {
	return true;
};
PickerColumn.prototype.getAccessibilityHint = function () {
	return '';
};
PickerColumn.prototype.getAccessibilityLabel = function () {
	return '';
};
PickerColumn.prototype.getAccessibilityValue = function () {
	return '';
};
PickerColumn.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.getApiName = function () {
	return '';
};
PickerColumn.prototype.getBackgroundColor = function () {
	return '';
};
PickerColumn.prototype.getBackgroundDisabledColor = function () {
	return '';
};
PickerColumn.prototype.getBackgroundDisabledImage = function () {
	return '';
};
PickerColumn.prototype.getBackgroundFocusedColor = function () {
	return '';
};
PickerColumn.prototype.getBackgroundFocusedImage = function () {
	return '';
};
PickerColumn.prototype.getBackgroundGradient = function () {
	return {};
};
PickerColumn.prototype.getBackgroundImage = function () {
	return '';
};
PickerColumn.prototype.getBackgroundLeftCap = function () {
	return 0;
};
PickerColumn.prototype.getBackgroundRepeat = function () {
	return true;
};
PickerColumn.prototype.getBackgroundSelectedColor = function () {
	return '';
};
PickerColumn.prototype.getBackgroundSelectedImage = function () {
	return '';
};
PickerColumn.prototype.getBackgroundTopCap = function () {
	return 0;
};
PickerColumn.prototype.getBorderColor = function () {
	return '';
};
PickerColumn.prototype.getBorderRadius = function () {
	return 0;
};
PickerColumn.prototype.getBorderWidth = function () {
	return 0;
};
PickerColumn.prototype.getBottom = function () {
	return 0;
};
PickerColumn.prototype.getBubbleParent = function () {
	return true;
};
PickerColumn.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.getChildren = function () {
	return [];
};
PickerColumn.prototype.getClipMode = function () {
	return 0;
};
PickerColumn.prototype.getFocusable = function () {
	return true;
};
PickerColumn.prototype.getHeight = function () {
	return 0;
};
PickerColumn.prototype.getHorizontalWrap = function () {
	return true;
};
PickerColumn.prototype.getKeepScreenOn = function () {
	return true;
};
PickerColumn.prototype.getLayout = function () {
	return '';
};
PickerColumn.prototype.getLeft = function () {
	return 0;
};
PickerColumn.prototype.getLifecycleContainer = function () {
	return {};
};
PickerColumn.prototype.getOpacity = function () {
	return 0;
};
PickerColumn.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
PickerColumn.prototype.getPullBackgroundColor = function () {
	return '';
};
PickerColumn.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerColumn.prototype.getRight = function () {
	return 0;
};
PickerColumn.prototype.getRowCount = function () {
	return 0;
};
PickerColumn.prototype.getRows = function () {
	return [];
};
PickerColumn.prototype.getSelectedRow = function () {
	return {};
};
PickerColumn.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerColumn.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
PickerColumn.prototype.getTintColor = function () {
	return '';
};
PickerColumn.prototype.getTop = function () {
	return 0;
};
PickerColumn.prototype.getTouchEnabled = function () {
	return true;
};
PickerColumn.prototype.getTransform = function () {
	return {};
};
PickerColumn.prototype.getViewShadowColor = function () {
	return '';
};
PickerColumn.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.getViewShadowRadius = function () {
	return 0;
};
PickerColumn.prototype.getVisible = function () {
	return true;
};
PickerColumn.prototype.getWidth = function () {
	return 0;
};
PickerColumn.prototype.getZIndex = function () {
	return 0;
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
PickerColumn.prototype.setAccessibilityHidden = function () {
};
PickerColumn.prototype.setAccessibilityHint = function () {
};
PickerColumn.prototype.setAccessibilityLabel = function () {
};
PickerColumn.prototype.setAccessibilityValue = function () {
};
PickerColumn.prototype.setAnchorPoint = function () {
};
PickerColumn.prototype.setBackgroundColor = function () {
};
PickerColumn.prototype.setBackgroundDisabledColor = function () {
};
PickerColumn.prototype.setBackgroundDisabledImage = function () {
};
PickerColumn.prototype.setBackgroundFocusedColor = function () {
};
PickerColumn.prototype.setBackgroundFocusedImage = function () {
};
PickerColumn.prototype.setBackgroundGradient = function () {
};
PickerColumn.prototype.setBackgroundImage = function () {
};
PickerColumn.prototype.setBackgroundLeftCap = function () {
};
PickerColumn.prototype.setBackgroundRepeat = function () {
};
PickerColumn.prototype.setBackgroundSelectedColor = function () {
};
PickerColumn.prototype.setBackgroundSelectedImage = function () {
};
PickerColumn.prototype.setBackgroundTopCap = function () {
};
PickerColumn.prototype.setBorderColor = function () {
};
PickerColumn.prototype.setBorderRadius = function () {
};
PickerColumn.prototype.setBorderWidth = function () {
};
PickerColumn.prototype.setBottom = function () {
};
PickerColumn.prototype.setBubbleParent = function () {
};
PickerColumn.prototype.setCenter = function () {
};
PickerColumn.prototype.setClipMode = function () {
};
PickerColumn.prototype.setFocusable = function () {
};
PickerColumn.prototype.setFont = function () {
};
PickerColumn.prototype.setHeight = function () {
};
PickerColumn.prototype.setHorizontalWrap = function () {
};
PickerColumn.prototype.setKeepScreenOn = function () {
};
PickerColumn.prototype.setLayout = function () {
};
PickerColumn.prototype.setLeft = function () {
};
PickerColumn.prototype.setLifecycleContainer = function () {
};
PickerColumn.prototype.setOpacity = function () {
};
PickerColumn.prototype.setPullBackgroundColor = function () {
};
PickerColumn.prototype.setRight = function () {
};
PickerColumn.prototype.setSelectedRow = function () {
};
PickerColumn.prototype.setSoftKeyboardOnFocus = function () {
};
PickerColumn.prototype.setTintColor = function () {
};
PickerColumn.prototype.setTop = function () {
};
PickerColumn.prototype.setTouchEnabled = function () {
};
PickerColumn.prototype.setTransform = function () {
};
PickerColumn.prototype.setViewShadowColor = function () {
};
PickerColumn.prototype.setViewShadowOffset = function () {
};
PickerColumn.prototype.setViewShadowRadius = function () {
};
PickerColumn.prototype.setVisible = function () {
};
PickerColumn.prototype.setWidth = function () {
};
PickerColumn.prototype.setZIndex = function () {
};
PickerColumn.prototype.show = function () {
};
PickerColumn.prototype.startLayout = function () {
	throw new Error('Ti.UI.PickerColumn.startLayout was deprecated, since 3.0.0');
};
PickerColumn.prototype.toImage = function () {
	return {};
};
PickerColumn.prototype.updateLayout = function () {
	throw new Error('Ti.UI.PickerColumn.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new PickerColumn(properties);
};