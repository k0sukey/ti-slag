function Picker(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Picker';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.calendarViewShown = properties.calendarViewShown || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.columns = properties.columns || undefined;
	this.countDownDuration = properties.countDownDuration || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.format24 = properties.format24 || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.left = properties.left || undefined;
	this.locale = properties.locale || undefined;
	this.maxDate = properties.maxDate || undefined;
	this.minDate = properties.minDate || undefined;
	this.minuteInterval = properties.minuteInterval || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.selectionIndicator = properties.selectionIndicator || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.type = properties.type || undefined;
	this.useSpinner = properties.useSpinner || undefined;
	this.value = properties.value || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.visibleItems = properties.visibleItems || undefined;
	this.width = properties.width || undefined;
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