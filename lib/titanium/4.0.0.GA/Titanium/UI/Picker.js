function Picker(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Picker';
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
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
};
Picker.prototype.fireEvent = function () {
};
Picker.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Picker.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Picker.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Picker.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Picker.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Picker.prototype.getApiName = function () {
	return this.apiName;
};
Picker.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Picker.prototype.getBorderColor = function () {
	return this.borderColor;
};
Picker.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Picker.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Picker.prototype.getBottom = function () {
	return this.bottom;
};
Picker.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Picker.prototype.getCalendarViewShown = function () {
	return this.calendarViewShown;
};
Picker.prototype.getChildren = function () {
	return this.children;
};
Picker.prototype.getClipMode = function () {
	return this.clipMode;
};
Picker.prototype.getColumns = function () {
	return this.columns;
};
Picker.prototype.getCountDownDuration = function () {
	return this.countDownDuration;
};
Picker.prototype.getFocusable = function () {
	return this.focusable;
};
Picker.prototype.getFormat24 = function () {
	return this.format24;
};
Picker.prototype.getHeight = function () {
	return this.height;
};
Picker.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Picker.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Picker.prototype.getLeft = function () {
	return this.left;
};
Picker.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Picker.prototype.getLocale = function () {
	return this.locale;
};
Picker.prototype.getMinuteInterval = function () {
	return this.minuteInterval;
};
Picker.prototype.getOpacity = function () {
	return this.opacity;
};
Picker.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Picker.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Picker.prototype.getRect = function () {
	return this.rect;
};
Picker.prototype.getRight = function () {
	return this.right;
};
Picker.prototype.getSelectedRow = function () {
	return {};
};
Picker.prototype.getSelectionIndicator = function () {
	return this.selectionIndicator;
};
Picker.prototype.getSize = function () {
	return this.size;
};
Picker.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Picker.prototype.getTop = function () {
	return this.top;
};
Picker.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Picker.prototype.getTransform = function () {
	return this.transform;
};
Picker.prototype.getType = function () {
	return this.type;
};
Picker.prototype.getUseSpinner = function () {
	return this.useSpinner;
};
Picker.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Picker.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Picker.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Picker.prototype.getVisible = function () {
	return this.visible;
};
Picker.prototype.getVisibleItems = function () {
	return this.visibleItems;
};
Picker.prototype.getWidth = function () {
	return this.width;
};
Picker.prototype.hide = function () {
};
Picker.prototype.reloadColumn = function () {
};
Picker.prototype.removeEventListener = function () {
};
Picker.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Picker.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Picker.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Picker.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Picker.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Picker.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Picker.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Picker.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Picker.prototype.setBottom = function (property) {
	this.bottom = property;
};
Picker.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Picker.prototype.setCalendarViewShown = function (property) {
	this.calendarViewShown = property;
};
Picker.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Picker.prototype.setColumns = function (property) {
	this.columns = property;
};
Picker.prototype.setCountDownDuration = function (property) {
	this.countDownDuration = property;
};
Picker.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Picker.prototype.setFont = function (property) {
	this.font = property;
};
Picker.prototype.setFormat24 = function (property) {
	this.format24 = property;
};
Picker.prototype.setHeight = function (property) {
	this.height = property;
};
Picker.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Picker.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Picker.prototype.setLeft = function (property) {
	this.left = property;
};
Picker.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Picker.prototype.setLocale = function (property) {
	this.locale = property;
};
Picker.prototype.setMaxDate = function (property) {
	this.maxDate = property;
};
Picker.prototype.setMinDate = function (property) {
	this.minDate = property;
};
Picker.prototype.setMinuteInterval = function (property) {
	this.minuteInterval = property;
};
Picker.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Picker.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Picker.prototype.setRight = function (property) {
	this.right = property;
};
Picker.prototype.setSelectedRow = function () {
};
Picker.prototype.setSelectionIndicator = function (property) {
	this.selectionIndicator = property;
};
Picker.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Picker.prototype.setTop = function (property) {
	this.top = property;
};
Picker.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Picker.prototype.setTransform = function (property) {
	this.transform = property;
};
Picker.prototype.setType = function (property) {
	this.type = property;
};
Picker.prototype.setUseSpinner = function (property) {
	this.useSpinner = property;
};
Picker.prototype.setValue = function (property) {
	this.value = property;
};
Picker.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Picker.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Picker.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Picker.prototype.setVisible = function (property) {
	this.visible = property;
};
Picker.prototype.setVisibleItems = function (property) {
	this.visibleItems = property;
};
Picker.prototype.setWidth = function (property) {
	this.width = property;
};
Picker.prototype.show = function () {
};
Picker.prototype.showDatePickerDialog = function () {
};
Picker.prototype.showTimePickerDialog = function () {
};
Picker.prototype.startLayout = function () {
};
Picker.prototype.toImage = function () {
	return {};
};
Picker.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new Picker(properties);
};