function Picker(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.Picker';
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.calendarViewShown = properties.calendarViewShown || true;
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.columns = properties.columns || [];
	this.countDownDuration = properties.countDownDuration || 0;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.format24 = properties.format24 || true;
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.locale = properties.locale || '';
	this.maxDate = properties.maxDate || new Date();
	this.minDate = properties.minDate || new Date();
	this.minuteInterval = properties.minuteInterval || 0;
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
	this.selectionIndicator = properties.selectionIndicator || true;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.type = properties.type || 0;
	this.useSpinner = properties.useSpinner || true;
	this.value = properties.value || new Date();
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.visibleItems = properties.visibleItems || 0;
	this.width = properties.width || 0;
	return this;
}
Picker.prototype.add = function () {
};
Picker.prototype.addEventListener = function () {
};
Picker.prototype.animate = function () {
};
Picker.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Picker.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Picker.finishLayout was deprecated, since 3.0.0');
};
Picker.prototype.fireEvent = function () {
};
Picker.prototype.getAccessibilityHidden = function () {
	return true;
};
Picker.prototype.getAccessibilityHint = function () {
	return '';
};
Picker.prototype.getAccessibilityLabel = function () {
	return '';
};
Picker.prototype.getAccessibilityValue = function () {
	return '';
};
Picker.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.getApiName = function () {
	return '';
};
Picker.prototype.getBackgroundColor = function () {
	return '';
};
Picker.prototype.getBorderColor = function () {
	return '';
};
Picker.prototype.getBorderRadius = function () {
	return 0;
};
Picker.prototype.getBorderWidth = function () {
	return 0;
};
Picker.prototype.getBottom = function () {
	return 0;
};
Picker.prototype.getBubbleParent = function () {
	return true;
};
Picker.prototype.getCalendarViewShown = function () {
	return true;
};
Picker.prototype.getChildren = function () {
	return [];
};
Picker.prototype.getClipMode = function () {
	return 0;
};
Picker.prototype.getColumns = function () {
	return [];
};
Picker.prototype.getCountDownDuration = function () {
	return 0;
};
Picker.prototype.getFocusable = function () {
	return true;
};
Picker.prototype.getFont = function () {
	return {};
};
Picker.prototype.getFormat24 = function () {
	return true;
};
Picker.prototype.getHeight = function () {
	return 0;
};
Picker.prototype.getHorizontalWrap = function () {
	return true;
};
Picker.prototype.getKeepScreenOn = function () {
	return true;
};
Picker.prototype.getLeft = function () {
	return 0;
};
Picker.prototype.getLifecycleContainer = function () {
	return {};
};
Picker.prototype.getLocale = function () {
	return '';
};
Picker.prototype.getMaxDate = function () {
	return new Date();
};
Picker.prototype.getMinDate = function () {
	return new Date();
};
Picker.prototype.getMinuteInterval = function () {
	return 0;
};
Picker.prototype.getOpacity = function () {
	return 0;
};
Picker.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Picker.prototype.getPullBackgroundColor = function () {
	return '';
};
Picker.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Picker.prototype.getRight = function () {
	return 0;
};
Picker.prototype.getSelectedRow = function () {
	return {};
};
Picker.prototype.getSelectionIndicator = function () {
	return true;
};
Picker.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Picker.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Picker.prototype.getTop = function () {
	return 0;
};
Picker.prototype.getTouchEnabled = function () {
	return true;
};
Picker.prototype.getTransform = function () {
	return {};
};
Picker.prototype.getType = function () {
	return 0;
};
Picker.prototype.getUseSpinner = function () {
	return true;
};
Picker.prototype.getValue = function () {
	return new Date();
};
Picker.prototype.getViewShadowColor = function () {
	return '';
};
Picker.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.getViewShadowRadius = function () {
	return 0;
};
Picker.prototype.getVisible = function () {
	return true;
};
Picker.prototype.getVisibleItems = function () {
	return 0;
};
Picker.prototype.getWidth = function () {
	return 0;
};
Picker.prototype.hide = function () {
};
Picker.prototype.reloadColumn = function () {
};
Picker.prototype.removeEventListener = function () {
};
Picker.prototype.setAccessibilityHidden = function () {
};
Picker.prototype.setAccessibilityHint = function () {
};
Picker.prototype.setAccessibilityLabel = function () {
};
Picker.prototype.setAccessibilityValue = function () {
};
Picker.prototype.setBackgroundColor = function () {
};
Picker.prototype.setBorderColor = function () {
};
Picker.prototype.setBorderRadius = function () {
};
Picker.prototype.setBorderWidth = function () {
};
Picker.prototype.setBottom = function () {
};
Picker.prototype.setBubbleParent = function () {
};
Picker.prototype.setCalendarViewShown = function () {
};
Picker.prototype.setClipMode = function () {
};
Picker.prototype.setColumns = function () {
};
Picker.prototype.setCountDownDuration = function () {
};
Picker.prototype.setFocusable = function () {
};
Picker.prototype.setFont = function () {
};
Picker.prototype.setFormat24 = function () {
};
Picker.prototype.setHeight = function () {
};
Picker.prototype.setHorizontalWrap = function () {
};
Picker.prototype.setKeepScreenOn = function () {
};
Picker.prototype.setLeft = function () {
};
Picker.prototype.setLifecycleContainer = function () {
};
Picker.prototype.setLocale = function () {
};
Picker.prototype.setMaxDate = function () {
};
Picker.prototype.setMinDate = function () {
};
Picker.prototype.setMinuteInterval = function () {
};
Picker.prototype.setOpacity = function () {
};
Picker.prototype.setPullBackgroundColor = function () {
};
Picker.prototype.setRight = function () {
};
Picker.prototype.setSelectedRow = function () {
};
Picker.prototype.setSelectionIndicator = function () {
};
Picker.prototype.setSoftKeyboardOnFocus = function () {
};
Picker.prototype.setTop = function () {
};
Picker.prototype.setTouchEnabled = function () {
};
Picker.prototype.setTransform = function () {
};
Picker.prototype.setType = function () {
};
Picker.prototype.setUseSpinner = function () {
};
Picker.prototype.setValue = function () {
	return {};
};
Picker.prototype.setViewShadowColor = function () {
};
Picker.prototype.setViewShadowOffset = function () {
};
Picker.prototype.setViewShadowRadius = function () {
};
Picker.prototype.setVisible = function () {
};
Picker.prototype.setVisibleItems = function () {
};
Picker.prototype.setWidth = function () {
};
Picker.prototype.show = function () {
};
Picker.prototype.showDatePickerDialog = function () {
};
Picker.prototype.showTimePickerDialog = function () {
};
Picker.prototype.startLayout = function () {
	throw new Error('Ti.UI.Picker.startLayout was deprecated, since 3.0.0');
};
Picker.prototype.toImage = function () {
	return {};
};
Picker.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Picker.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Picker(properties);
};