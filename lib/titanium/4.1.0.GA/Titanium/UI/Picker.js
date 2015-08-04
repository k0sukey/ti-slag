var crypto = require('crypto');
function Picker(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'animatedCenter',
			'clipMode',
			'focusable',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'softKeyboardOnFocus',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'keepScreenOn',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'children',
			'height',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'columns',
			'countDownDuration',
			'format24',
			'locale',
			'maxDate',
			'minDate',
			'minuteInterval',
			'selectionIndicator',
			'type',
			'useSpinner',
			'value',
			'visibleItems',
			'calendarViewShown',
			'font',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Picker.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Picker';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
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
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.Picker.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
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
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Picker.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.columns = __SLAG__properties.columns || [];
	this.countDownDuration = __SLAG__properties.countDownDuration || 0;
	this.format24 = __SLAG__properties.format24 || true;
	this.locale = __SLAG__properties.locale || '';
	this.maxDate = __SLAG__properties.maxDate || new Date();
	this.minDate = __SLAG__properties.minDate || new Date();
	this.minuteInterval = __SLAG__properties.minuteInterval || 0;
	this.selectionIndicator = __SLAG__properties.selectionIndicator || true;
	this.type = __SLAG__properties.type || 0;
	this.useSpinner = __SLAG__properties.useSpinner || true;
	this.value = __SLAG__properties.value || new Date();
	this.visibleItems = __SLAG__properties.visibleItems || 0;
	this.calendarViewShown = __SLAG__properties.calendarViewShown || true;
	this.font = __SLAG__properties.font || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Picker.prototype.addEventListener = function () {
};
Picker.prototype.removeEventListener = function () {
};
Picker.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Picker.prototype.fireEvent = function () {
};
Picker.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Picker.finishLayout was deprecated, since 3.0.0');
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
Picker.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Picker.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Picker.prototype.animate = function () {
};
Picker.prototype.hide = function () {
};
Picker.prototype.show = function () {
};
Picker.prototype.getSelectedRow = function () {
	return {};
};
Picker.prototype.reloadColumn = function () {
};
Picker.prototype.setSelectedRow = function () {
};
Picker.prototype.setValue = function (property) {
	this.value = property;
};
Picker.prototype.showDatePickerDialog = function () {
};
Picker.prototype.showTimePickerDialog = function () {
};
Picker.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Picker.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Picker.prototype.getApiName = function () {
	return this.apiName;
};
Picker.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Picker.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Picker.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Picker.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Picker.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Picker.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Picker.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Picker.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Picker.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Picker.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Picker.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Picker.prototype.getClipMode = function () {
	return this.clipMode;
};
Picker.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Picker.prototype.getFocusable = function () {
	return this.focusable;
};
Picker.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Picker.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Picker.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
Picker.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Picker.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Picker.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Picker.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Picker.prototype.getTransform = function () {
	return this.transform;
};
Picker.prototype.setTransform = function (property) {
	this.transform = property;
};
Picker.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Picker.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Picker.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Picker.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Picker.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Picker.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Picker.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Picker.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Picker.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Picker.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Picker.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Picker.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Picker.prototype.getBorderColor = function () {
	return this.borderColor;
};
Picker.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Picker.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Picker.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Picker.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Picker.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Picker.prototype.getBottom = function () {
	return this.bottom;
};
Picker.prototype.setBottom = function (property) {
	this.bottom = property;
};
Picker.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Picker.prototype.getChildren = function () {
	return this.children;
};
Picker.prototype.getHeight = function () {
	return this.height;
};
Picker.prototype.setHeight = function (property) {
	this.height = property;
};
Picker.prototype.getLeft = function () {
	return this.left;
};
Picker.prototype.setLeft = function (property) {
	this.left = property;
};
Picker.prototype.getOpacity = function () {
	return this.opacity;
};
Picker.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Picker.prototype.getRect = function () {
	return this.rect;
};
Picker.prototype.getRight = function () {
	return this.right;
};
Picker.prototype.setRight = function (property) {
	this.right = property;
};
Picker.prototype.getSize = function () {
	return this.size;
};
Picker.prototype.getTop = function () {
	return this.top;
};
Picker.prototype.setTop = function (property) {
	this.top = property;
};
Picker.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Picker.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Picker.prototype.getVisible = function () {
	return this.visible;
};
Picker.prototype.setVisible = function (property) {
	this.visible = property;
};
Picker.prototype.getWidth = function () {
	return this.width;
};
Picker.prototype.setWidth = function (property) {
	this.width = property;
};
Picker.prototype.getColumns = function () {
	return this.columns;
};
Picker.prototype.setColumns = function (property) {
	this.columns = property;
};
Picker.prototype.getCountDownDuration = function () {
	return this.countDownDuration;
};
Picker.prototype.setCountDownDuration = function (property) {
	this.countDownDuration = property;
};
Picker.prototype.getFormat24 = function () {
	return this.format24;
};
Picker.prototype.setFormat24 = function (property) {
	this.format24 = property;
};
Picker.prototype.getLocale = function () {
	return this.locale;
};
Picker.prototype.setLocale = function (property) {
	this.locale = property;
};
Picker.prototype.getMaxDate = function () {
	return this.maxDate;
};
Picker.prototype.setMaxDate = function (property) {
	this.maxDate = property;
};
Picker.prototype.getMinDate = function () {
	return this.minDate;
};
Picker.prototype.setMinDate = function (property) {
	this.minDate = property;
};
Picker.prototype.getMinuteInterval = function () {
	return this.minuteInterval;
};
Picker.prototype.setMinuteInterval = function (property) {
	this.minuteInterval = property;
};
Picker.prototype.getSelectionIndicator = function () {
	return this.selectionIndicator;
};
Picker.prototype.setSelectionIndicator = function (property) {
	this.selectionIndicator = property;
};
Picker.prototype.getType = function () {
	return this.type;
};
Picker.prototype.setType = function (property) {
	this.type = property;
};
Picker.prototype.getUseSpinner = function () {
	return this.useSpinner;
};
Picker.prototype.setUseSpinner = function (property) {
	this.useSpinner = property;
};
Picker.prototype.getValue = function () {
	return this.value;
};
Picker.prototype.setValue = function (property) {
	this.value = property;
};
Picker.prototype.getVisibleItems = function () {
	return this.visibleItems;
};
Picker.prototype.setVisibleItems = function (property) {
	this.visibleItems = property;
};
Picker.prototype.getCalendarViewShown = function () {
	return this.calendarViewShown;
};
Picker.prototype.setCalendarViewShown = function (property) {
	this.calendarViewShown = property;
};
Picker.prototype.getFont = function () {
	return this.font;
};
Picker.prototype.setFont = function (property) {
	this.font = property;
};
module.exports = function (properties) {
	return new Picker(properties);
};