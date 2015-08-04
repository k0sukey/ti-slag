var crypto = require('crypto');
function PickerColumn(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'focusable',
			'font',
			'height',
			'horizontalWrap',
			'keepScreenOn',
			'layout',
			'left',
			'lifecycleContainer',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'rowCount',
			'rows',
			'selectedRow',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.PickerColumn.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.PickerColumn.apiName is read only property');
	}
	this.apiName = 'Ti.UI.PickerColumn';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.PickerColumn.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.PickerColumn.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.rowCount) {
		throw new Error('Ti.UI.PickerColumn.rowCount is read only property');
	}
	this.rowCount = 0;
	if (__SLAG__properties.rows) {
		throw new Error('Ti.UI.PickerColumn.rows is read only property');
	}
	this.rows = [];
	this.selectedRow = __SLAG__properties.selectedRow || {};
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.PickerColumn.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
PickerColumn.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
PickerColumn.prototype.addEventListener = function () {
};
PickerColumn.prototype.addRow = function () {
};
PickerColumn.prototype.animate = function () {
};
PickerColumn.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
PickerColumn.prototype.getParent = function () {
	return this.__SLAG_PARENT;
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
PickerColumn.prototype.getFont = function () {
	return this.font;
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
PickerColumn.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
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