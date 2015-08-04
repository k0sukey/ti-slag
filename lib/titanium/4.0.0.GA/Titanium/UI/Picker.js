var crypto = require('crypto');
function Picker(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'calendarViewShown',
			'children',
			'clipMode',
			'columns',
			'countDownDuration',
			'focusable',
			'font',
			'format24',
			'height',
			'horizontalWrap',
			'keepScreenOn',
			'left',
			'lifecycleContainer',
			'locale',
			'maxDate',
			'minDate',
			'minuteInterval',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'selectionIndicator',
			'size',
			'softKeyboardOnFocus',
			'top',
			'touchEnabled',
			'transform',
			'type',
			'useSpinner',
			'value',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'visibleItems',
			'width',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.Picker.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Picker.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Picker';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.calendarViewShown = __SLAG__properties.calendarViewShown || true;
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.Picker.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.columns = __SLAG__properties.columns || [];
	this.countDownDuration = __SLAG__properties.countDownDuration || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.format24 = __SLAG__properties.format24 || true;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.locale = __SLAG__properties.locale || '';
	this.maxDate = __SLAG__properties.maxDate || new Date();
	this.minDate = __SLAG__properties.minDate || new Date();
	this.minuteInterval = __SLAG__properties.minuteInterval || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Picker.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.selectionIndicator = __SLAG__properties.selectionIndicator || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Picker.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.type = __SLAG__properties.type || 0;
	this.useSpinner = __SLAG__properties.useSpinner || true;
	this.value = __SLAG__properties.value || new Date();
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.visibleItems = __SLAG__properties.visibleItems || 0;
	this.width = __SLAG__properties.width || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Picker.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Picker.prototype.addEventListener = function () {
};
Picker.prototype.animate = function () {
};
Picker.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
Picker.prototype.getParent = function () {
	return this.__SLAG_PARENT;
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
Picker.prototype.getFont = function () {
	return this.font;
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
Picker.prototype.getMaxDate = function () {
	return this.maxDate;
};
Picker.prototype.getMinDate = function () {
	return this.minDate;
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
Picker.prototype.getValue = function () {
	return this.value;
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