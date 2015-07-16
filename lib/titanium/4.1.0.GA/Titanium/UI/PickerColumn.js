function PickerColumn(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.PickerColumn';
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
	this.rowCount = properties.rowCount || 0;
	this.rows = properties.rows || [];
	this.selectedRow = properties.selectedRow || {};
	this.font = properties.font || {};
	return this;
}
PickerColumn.prototype.addEventListener = function () {
};
PickerColumn.prototype.removeEventListener = function () {
};
PickerColumn.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PickerColumn.prototype.fireEvent = function () {
};
PickerColumn.prototype.finishLayout = function () {
	throw new Error('Ti.UI.PickerColumn.finishLayout was deprecated, since 3.0.0');
};
PickerColumn.prototype.removeAllChildren = function () {
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
PickerColumn.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.add = function () {
};
PickerColumn.prototype.animate = function () {
};
PickerColumn.prototype.hide = function () {
};
PickerColumn.prototype.remove = function () {
};
PickerColumn.prototype.show = function () {
};
PickerColumn.prototype.addRow = function () {
};
PickerColumn.prototype.removeRow = function () {
};
PickerColumn.prototype.getBubbleParent = function () {
	return true;
};
PickerColumn.prototype.setBubbleParent = function () {
};
PickerColumn.prototype.getApiName = function () {
	return '';
};
PickerColumn.prototype.getLifecycleContainer = function () {
	return {};
};
PickerColumn.prototype.setLifecycleContainer = function () {
};
PickerColumn.prototype.getAccessibilityHidden = function () {
	return true;
};
PickerColumn.prototype.setAccessibilityHidden = function () {
};
PickerColumn.prototype.getAccessibilityHint = function () {
	return '';
};
PickerColumn.prototype.setAccessibilityHint = function () {
};
PickerColumn.prototype.getAccessibilityLabel = function () {
	return '';
};
PickerColumn.prototype.setAccessibilityLabel = function () {
};
PickerColumn.prototype.getAccessibilityValue = function () {
	return '';
};
PickerColumn.prototype.setAccessibilityValue = function () {
};
PickerColumn.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.setAnchorPoint = function () {
};
PickerColumn.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.getBackgroundDisabledColor = function () {
	return '';
};
PickerColumn.prototype.setBackgroundDisabledColor = function () {
};
PickerColumn.prototype.getBackgroundDisabledImage = function () {
	return '';
};
PickerColumn.prototype.setBackgroundDisabledImage = function () {
};
PickerColumn.prototype.getBackgroundFocusedColor = function () {
	return '';
};
PickerColumn.prototype.setBackgroundFocusedColor = function () {
};
PickerColumn.prototype.getBackgroundFocusedImage = function () {
	return '';
};
PickerColumn.prototype.setBackgroundFocusedImage = function () {
};
PickerColumn.prototype.getBackgroundGradient = function () {
	return {};
};
PickerColumn.prototype.setBackgroundGradient = function () {
};
PickerColumn.prototype.getBackgroundImage = function () {
	return '';
};
PickerColumn.prototype.setBackgroundImage = function () {
};
PickerColumn.prototype.getBackgroundRepeat = function () {
	return true;
};
PickerColumn.prototype.setBackgroundRepeat = function () {
};
PickerColumn.prototype.getBackgroundLeftCap = function () {
	return 0;
};
PickerColumn.prototype.setBackgroundLeftCap = function () {
};
PickerColumn.prototype.getBackgroundSelectedColor = function () {
	return '';
};
PickerColumn.prototype.setBackgroundSelectedColor = function () {
};
PickerColumn.prototype.getBackgroundSelectedImage = function () {
	return '';
};
PickerColumn.prototype.setBackgroundSelectedImage = function () {
};
PickerColumn.prototype.getBackgroundTopCap = function () {
	return 0;
};
PickerColumn.prototype.setBackgroundTopCap = function () {
};
PickerColumn.prototype.getClipMode = function () {
	return 0;
};
PickerColumn.prototype.setClipMode = function () {
};
PickerColumn.prototype.getFocusable = function () {
	return true;
};
PickerColumn.prototype.setFocusable = function () {
};
PickerColumn.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
PickerColumn.prototype.setOverrideCurrentAnimation = function () {
};
PickerColumn.prototype.getPullBackgroundColor = function () {
	return '';
};
PickerColumn.prototype.setPullBackgroundColor = function () {
};
PickerColumn.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
PickerColumn.prototype.setSoftKeyboardOnFocus = function () {
};
PickerColumn.prototype.getTransform = function () {
	return {};
};
PickerColumn.prototype.setTransform = function () {
};
PickerColumn.prototype.getViewShadowRadius = function () {
	return 0;
};
PickerColumn.prototype.setViewShadowRadius = function () {
};
PickerColumn.prototype.getViewShadowColor = function () {
	return '';
};
PickerColumn.prototype.setViewShadowColor = function () {
};
PickerColumn.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.setViewShadowOffset = function () {
};
PickerColumn.prototype.getHorizontalWrap = function () {
	return true;
};
PickerColumn.prototype.setHorizontalWrap = function () {
};
PickerColumn.prototype.getZIndex = function () {
	return 0;
};
PickerColumn.prototype.setZIndex = function () {
};
PickerColumn.prototype.getKeepScreenOn = function () {
	return true;
};
PickerColumn.prototype.setKeepScreenOn = function () {
};
PickerColumn.prototype.getBackgroundColor = function () {
	return '';
};
PickerColumn.prototype.setBackgroundColor = function () {
};
PickerColumn.prototype.getBorderColor = function () {
	return '';
};
PickerColumn.prototype.setBorderColor = function () {
};
PickerColumn.prototype.getBorderRadius = function () {
	return 0;
};
PickerColumn.prototype.setBorderRadius = function () {
};
PickerColumn.prototype.getBorderWidth = function () {
	return 0;
};
PickerColumn.prototype.setBorderWidth = function () {
};
PickerColumn.prototype.getBottom = function () {
	return '';
};
PickerColumn.prototype.setBottom = function () {
};
PickerColumn.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
PickerColumn.prototype.setCenter = function () {
};
PickerColumn.prototype.getChildren = function () {
	return [];
};
PickerColumn.prototype.getHeight = function () {
	return '';
};
PickerColumn.prototype.setHeight = function () {
};
PickerColumn.prototype.getLayout = function () {
	return '';
};
PickerColumn.prototype.setLayout = function () {
};
PickerColumn.prototype.getLeft = function () {
	return '';
};
PickerColumn.prototype.setLeft = function () {
};
PickerColumn.prototype.getOpacity = function () {
	return 0;
};
PickerColumn.prototype.setOpacity = function () {
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
	return '';
};
PickerColumn.prototype.setRight = function () {
};
PickerColumn.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
PickerColumn.prototype.getTintColor = function () {
	return '';
};
PickerColumn.prototype.setTintColor = function () {
};
PickerColumn.prototype.getTop = function () {
	return '';
};
PickerColumn.prototype.setTop = function () {
};
PickerColumn.prototype.getTouchEnabled = function () {
	return true;
};
PickerColumn.prototype.setTouchEnabled = function () {
};
PickerColumn.prototype.getVisible = function () {
	return true;
};
PickerColumn.prototype.setVisible = function () {
};
PickerColumn.prototype.getWidth = function () {
	return '';
};
PickerColumn.prototype.setWidth = function () {
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
PickerColumn.prototype.setSelectedRow = function () {
};
PickerColumn.prototype.getFont = function () {
	return {};
};
PickerColumn.prototype.setFont = function () {
};
module.exports = function (properties) {
	return new PickerColumn(properties);
};