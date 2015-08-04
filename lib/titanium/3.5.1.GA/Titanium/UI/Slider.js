var crypto = require('crypto');
function Slider(__SLAG__properties) {
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
			'disabledLeftTrackImage',
			'disabledRightTrackImage',
			'disabledThumbImage',
			'enabled',
			'focusable',
			'height',
			'highlightedLeftTrackImage',
			'highlightedRightTrackImage',
			'highlightedThumbImage',
			'horizontalWrap',
			'keepScreenOn',
			'layout',
			'left',
			'leftTrackImage',
			'leftTrackLeftCap',
			'leftTrackTopCap',
			'max',
			'maxRange',
			'min',
			'minRange',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'rightTrackImage',
			'rightTrackLeftCap',
			'rightTrackTopCap',
			'selectedLeftTrackImage',
			'selectedRightTrackImage',
			'selectedThumbImage',
			'size',
			'softKeyboardOnFocus',
			'thumbImage',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'value',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.Slider.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Slider.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Slider';
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
		throw new Error('Ti.UI.Slider.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.disabledLeftTrackImage = __SLAG__properties.disabledLeftTrackImage || '';
	this.disabledRightTrackImage = __SLAG__properties.disabledRightTrackImage || '';
	this.disabledThumbImage = __SLAG__properties.disabledThumbImage || '';
	if (__SLAG__properties.enabled) {
		throw new Error('Ti.UI.Slider.enabled was deprecated, since 3.3.0');
	}
	this.focusable = __SLAG__properties.focusable || true;
	this.height = __SLAG__properties.height || 0;
	this.highlightedLeftTrackImage = __SLAG__properties.highlightedLeftTrackImage || '';
	this.highlightedRightTrackImage = __SLAG__properties.highlightedRightTrackImage || '';
	this.highlightedThumbImage = __SLAG__properties.highlightedThumbImage || '';
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.leftTrackImage = __SLAG__properties.leftTrackImage || '';
	this.leftTrackLeftCap = __SLAG__properties.leftTrackLeftCap || 0;
	this.leftTrackTopCap = __SLAG__properties.leftTrackTopCap || 0;
	this.max = __SLAG__properties.max || 0;
	this.maxRange = __SLAG__properties.maxRange || 0;
	this.min = __SLAG__properties.min || 0;
	this.minRange = __SLAG__properties.minRange || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Slider.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.rightTrackImage = __SLAG__properties.rightTrackImage || '';
	this.rightTrackLeftCap = __SLAG__properties.rightTrackLeftCap || 0;
	this.rightTrackTopCap = __SLAG__properties.rightTrackTopCap || 0;
	this.selectedLeftTrackImage = __SLAG__properties.selectedLeftTrackImage || '';
	this.selectedRightTrackImage = __SLAG__properties.selectedRightTrackImage || '';
	this.selectedThumbImage = __SLAG__properties.selectedThumbImage || '';
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Slider.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.thumbImage = __SLAG__properties.thumbImage || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || '';
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
Slider.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Slider.prototype.addEventListener = function () {
};
Slider.prototype.animate = function () {
};
Slider.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Slider.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Slider.finishLayout was deprecated, since 3.0.0');
};
Slider.prototype.fireEvent = function () {
};
Slider.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Slider.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Slider.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Slider.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Slider.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Slider.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Slider.prototype.getApiName = function () {
	return this.apiName;
};
Slider.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Slider.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Slider.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Slider.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Slider.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Slider.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Slider.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Slider.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Slider.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Slider.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Slider.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Slider.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Slider.prototype.getBorderColor = function () {
	return this.borderColor;
};
Slider.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Slider.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Slider.prototype.getBottom = function () {
	return this.bottom;
};
Slider.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Slider.prototype.getCenter = function () {
	return this.center;
};
Slider.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Slider.prototype.getChildren = function () {
	return this.children;
};
Slider.prototype.getClipMode = function () {
	return this.clipMode;
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	return this.disabledLeftTrackImage;
};
Slider.prototype.getDisabledRightTrackImage = function () {
	return this.disabledRightTrackImage;
};
Slider.prototype.getDisabledThumbImage = function () {
	return this.disabledThumbImage;
};
Slider.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Slider.getEnabled was deprecated, since 3.3.0');
};
Slider.prototype.getFocusable = function () {
	return this.focusable;
};
Slider.prototype.getHeight = function () {
	return this.height;
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	return this.highlightedLeftTrackImage;
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	return this.highlightedRightTrackImage;
};
Slider.prototype.getHighlightedThumbImage = function () {
	return this.highlightedThumbImage;
};
Slider.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Slider.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Slider.prototype.getLayout = function () {
	return this.layout;
};
Slider.prototype.getLeft = function () {
	return this.left;
};
Slider.prototype.getLeftTrackImage = function () {
	return this.leftTrackImage;
};
Slider.prototype.getLeftTrackLeftCap = function () {
	return this.leftTrackLeftCap;
};
Slider.prototype.getLeftTrackTopCap = function () {
	return this.leftTrackTopCap;
};
Slider.prototype.getMax = function () {
	return this.max;
};
Slider.prototype.getMaxRange = function () {
	return this.maxRange;
};
Slider.prototype.getMin = function () {
	return this.min;
};
Slider.prototype.getMinRange = function () {
	return this.minRange;
};
Slider.prototype.getOpacity = function () {
	return this.opacity;
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Slider.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Slider.prototype.getRect = function () {
	return this.rect;
};
Slider.prototype.getRight = function () {
	return this.right;
};
Slider.prototype.getRightTrackImage = function () {
	return this.rightTrackImage;
};
Slider.prototype.getRightTrackLeftCap = function () {
	return this.rightTrackLeftCap;
};
Slider.prototype.getRightTrackTopCap = function () {
	return this.rightTrackTopCap;
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	return this.selectedLeftTrackImage;
};
Slider.prototype.getSelectedRightTrackImage = function () {
	return this.selectedRightTrackImage;
};
Slider.prototype.getSelectedThumbImage = function () {
	return this.selectedThumbImage;
};
Slider.prototype.getSize = function () {
	return this.size;
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Slider.prototype.getThumbImage = function () {
	return this.thumbImage;
};
Slider.prototype.getTintColor = function () {
	return this.tintColor;
};
Slider.prototype.getTop = function () {
	return this.top;
};
Slider.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Slider.prototype.getTransform = function () {
	return this.transform;
};
Slider.prototype.getValue = function () {
	return this.value;
};
Slider.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Slider.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Slider.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Slider.prototype.getVisible = function () {
	return this.visible;
};
Slider.prototype.getWidth = function () {
	return this.width;
};
Slider.prototype.getZIndex = function () {
	return this.zIndex;
};
Slider.prototype.hide = function () {
};
Slider.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Slider.prototype.removeAllChildren = function () {
};
Slider.prototype.removeEventListener = function () {
};
Slider.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Slider.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Slider.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Slider.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Slider.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Slider.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Slider.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Slider.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Slider.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Slider.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Slider.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Slider.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Slider.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Slider.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Slider.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Slider.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Slider.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Slider.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Slider.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Slider.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Slider.prototype.setBottom = function (property) {
	this.bottom = property;
};
Slider.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Slider.prototype.setCenter = function (property) {
	this.center = property;
};
Slider.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Slider.prototype.setDisabledLeftTrackImage = function (property) {
	this.disabledLeftTrackImage = property;
};
Slider.prototype.setDisabledRightTrackImage = function (property) {
	this.disabledRightTrackImage = property;
};
Slider.prototype.setDisabledThumbImage = function (property) {
	this.disabledThumbImage = property;
};
Slider.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Slider.setEnabled was deprecated, since 3.3.0');
};
Slider.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Slider.prototype.setHeight = function (property) {
	this.height = property;
};
Slider.prototype.setHighlightedLeftTrackImage = function (property) {
	this.highlightedLeftTrackImage = property;
};
Slider.prototype.setHighlightedRightTrackImage = function (property) {
	this.highlightedRightTrackImage = property;
};
Slider.prototype.setHighlightedThumbImage = function (property) {
	this.highlightedThumbImage = property;
};
Slider.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Slider.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Slider.prototype.setLayout = function (property) {
	this.layout = property;
};
Slider.prototype.setLeft = function (property) {
	this.left = property;
};
Slider.prototype.setLeftTrackImage = function (property) {
	this.leftTrackImage = property;
};
Slider.prototype.setLeftTrackLeftCap = function (property) {
	this.leftTrackLeftCap = property;
};
Slider.prototype.setLeftTrackTopCap = function (property) {
	this.leftTrackTopCap = property;
};
Slider.prototype.setMax = function (property) {
	this.max = property;
};
Slider.prototype.setMaxRange = function (property) {
	this.maxRange = property;
};
Slider.prototype.setMin = function (property) {
	this.min = property;
};
Slider.prototype.setMinRange = function (property) {
	this.minRange = property;
};
Slider.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Slider.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Slider.prototype.setRight = function (property) {
	this.right = property;
};
Slider.prototype.setRightTrackImage = function (property) {
	this.rightTrackImage = property;
};
Slider.prototype.setRightTrackLeftCap = function (property) {
	this.rightTrackLeftCap = property;
};
Slider.prototype.setRightTrackTopCap = function (property) {
	this.rightTrackTopCap = property;
};
Slider.prototype.setSelectedLeftTrackImage = function (property) {
	this.selectedLeftTrackImage = property;
};
Slider.prototype.setSelectedRightTrackImage = function (property) {
	this.selectedRightTrackImage = property;
};
Slider.prototype.setSelectedThumbImage = function (property) {
	this.selectedThumbImage = property;
};
Slider.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Slider.prototype.setThumbImage = function (property) {
	this.thumbImage = property;
};
Slider.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Slider.prototype.setTop = function (property) {
	this.top = property;
};
Slider.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Slider.prototype.setTransform = function (property) {
	this.transform = property;
};
Slider.prototype.setValue = function (property) {
	this.value = property;
};
Slider.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Slider.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Slider.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Slider.prototype.setVisible = function (property) {
	this.visible = property;
};
Slider.prototype.setWidth = function (property) {
	this.width = property;
};
Slider.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Slider.prototype.show = function () {
};
Slider.prototype.startLayout = function () {
	throw new Error('Ti.UI.Slider.startLayout was deprecated, since 3.0.0');
};
Slider.prototype.toImage = function () {
	return {};
};
Slider.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Slider.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Slider(properties);
};