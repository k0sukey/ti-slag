function PickerColumn(properties) {
	properties = properties || {};
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
	this.apiName = 'Ti.UI.PickerColumn';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
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
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.rowCount = properties.rowCount || 0;
	this.rows = properties.rows || [];
	this.selectedRow = properties.selectedRow || {};
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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
PickerColumn.prototype.getFont = function () {
	return {};
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