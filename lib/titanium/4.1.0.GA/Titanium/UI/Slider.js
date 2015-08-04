var crypto = require('crypto');
function Slider(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
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
			'zIndex',
			'keepScreenOn',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'disabledLeftTrackImage',
			'disabledRightTrackImage',
			'disabledThumbImage',
			'enabled',
			'highlightedLeftTrackImage',
			'highlightedRightTrackImage',
			'highlightedThumbImage',
			'leftTrackImage',
			'leftTrackLeftCap',
			'leftTrackTopCap',
			'maxRange',
			'minRange',
			'rightTrackImage',
			'rightTrackLeftCap',
			'rightTrackTopCap',
			'selectedLeftTrackImage',
			'selectedRightTrackImage',
			'selectedThumbImage',
			'thumbImage',
			'max',
			'min',
			'value',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Slider.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Slider';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
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
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
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
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.Slider.children is read only property');
	}
	this.children = [];
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
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
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Slider.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.disabledLeftTrackImage = __SLAG__properties.disabledLeftTrackImage || '';
	this.disabledRightTrackImage = __SLAG__properties.disabledRightTrackImage || '';
	this.disabledThumbImage = __SLAG__properties.disabledThumbImage || '';
	this.enabled = __SLAG__properties.enabled || true;
	this.highlightedLeftTrackImage = __SLAG__properties.highlightedLeftTrackImage || '';
	this.highlightedRightTrackImage = __SLAG__properties.highlightedRightTrackImage || '';
	this.highlightedThumbImage = __SLAG__properties.highlightedThumbImage || '';
	this.leftTrackImage = __SLAG__properties.leftTrackImage || '';
	this.leftTrackLeftCap = __SLAG__properties.leftTrackLeftCap || 0;
	this.leftTrackTopCap = __SLAG__properties.leftTrackTopCap || 0;
	this.maxRange = __SLAG__properties.maxRange || 0;
	this.minRange = __SLAG__properties.minRange || 0;
	this.rightTrackImage = __SLAG__properties.rightTrackImage || '';
	this.rightTrackLeftCap = __SLAG__properties.rightTrackLeftCap || 0;
	this.rightTrackTopCap = __SLAG__properties.rightTrackTopCap || 0;
	this.selectedLeftTrackImage = __SLAG__properties.selectedLeftTrackImage || '';
	this.selectedRightTrackImage = __SLAG__properties.selectedRightTrackImage || '';
	this.selectedThumbImage = __SLAG__properties.selectedThumbImage || '';
	this.thumbImage = __SLAG__properties.thumbImage || '';
	this.max = __SLAG__properties.max || 0;
	this.min = __SLAG__properties.min || 0;
	this.value = __SLAG__properties.value || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Slider.prototype.addEventListener = function () {
};
Slider.prototype.removeEventListener = function () {
};
Slider.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Slider.prototype.fireEvent = function () {
};
Slider.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Slider.finishLayout was deprecated, since 3.0.0');
};
Slider.prototype.removeAllChildren = function () {
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
Slider.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Slider.prototype.animate = function () {
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
Slider.prototype.show = function () {
};
Slider.prototype.setValue = function (property) {
	this.value = property;
};
Slider.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Slider.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Slider.prototype.getApiName = function () {
	return this.apiName;
};
Slider.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Slider.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Slider.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Slider.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Slider.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Slider.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Slider.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Slider.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Slider.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Slider.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Slider.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Slider.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Slider.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Slider.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Slider.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Slider.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Slider.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Slider.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Slider.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Slider.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Slider.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Slider.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Slider.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Slider.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Slider.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Slider.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Slider.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Slider.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Slider.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Slider.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Slider.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Slider.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Slider.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Slider.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Slider.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Slider.prototype.getClipMode = function () {
	return this.clipMode;
};
Slider.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Slider.prototype.getFocusable = function () {
	return this.focusable;
};
Slider.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Slider.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
Slider.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Slider.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Slider.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Slider.prototype.getTransform = function () {
	return this.transform;
};
Slider.prototype.setTransform = function (property) {
	this.transform = property;
};
Slider.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Slider.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Slider.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Slider.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Slider.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Slider.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Slider.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Slider.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Slider.prototype.getZIndex = function () {
	return this.zIndex;
};
Slider.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Slider.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Slider.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Slider.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Slider.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Slider.prototype.getBorderColor = function () {
	return this.borderColor;
};
Slider.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Slider.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Slider.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Slider.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Slider.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Slider.prototype.getBottom = function () {
	return this.bottom;
};
Slider.prototype.setBottom = function (property) {
	this.bottom = property;
};
Slider.prototype.getCenter = function () {
	return this.center;
};
Slider.prototype.setCenter = function (property) {
	this.center = property;
};
Slider.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Slider.prototype.getChildren = function () {
	return this.children;
};
Slider.prototype.getLayout = function () {
	return this.layout;
};
Slider.prototype.setLayout = function (property) {
	this.layout = property;
};
Slider.prototype.getLeft = function () {
	return this.left;
};
Slider.prototype.setLeft = function (property) {
	this.left = property;
};
Slider.prototype.getOpacity = function () {
	return this.opacity;
};
Slider.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Slider.prototype.getRect = function () {
	return this.rect;
};
Slider.prototype.getRight = function () {
	return this.right;
};
Slider.prototype.setRight = function (property) {
	this.right = property;
};
Slider.prototype.getSize = function () {
	return this.size;
};
Slider.prototype.getTintColor = function () {
	return this.tintColor;
};
Slider.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Slider.prototype.getTop = function () {
	return this.top;
};
Slider.prototype.setTop = function (property) {
	this.top = property;
};
Slider.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Slider.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Slider.prototype.getVisible = function () {
	return this.visible;
};
Slider.prototype.setVisible = function (property) {
	this.visible = property;
};
Slider.prototype.getWidth = function () {
	return this.width;
};
Slider.prototype.setWidth = function (property) {
	this.width = property;
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	return this.disabledLeftTrackImage;
};
Slider.prototype.setDisabledLeftTrackImage = function (property) {
	this.disabledLeftTrackImage = property;
};
Slider.prototype.getDisabledRightTrackImage = function () {
	return this.disabledRightTrackImage;
};
Slider.prototype.setDisabledRightTrackImage = function (property) {
	this.disabledRightTrackImage = property;
};
Slider.prototype.getDisabledThumbImage = function () {
	return this.disabledThumbImage;
};
Slider.prototype.setDisabledThumbImage = function (property) {
	this.disabledThumbImage = property;
};
Slider.prototype.getEnabled = function () {
	return this.enabled;
};
Slider.prototype.setEnabled = function (property) {
	this.enabled = property;
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	return this.highlightedLeftTrackImage;
};
Slider.prototype.setHighlightedLeftTrackImage = function (property) {
	this.highlightedLeftTrackImage = property;
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	return this.highlightedRightTrackImage;
};
Slider.prototype.setHighlightedRightTrackImage = function (property) {
	this.highlightedRightTrackImage = property;
};
Slider.prototype.getHighlightedThumbImage = function () {
	return this.highlightedThumbImage;
};
Slider.prototype.setHighlightedThumbImage = function (property) {
	this.highlightedThumbImage = property;
};
Slider.prototype.getLeftTrackImage = function () {
	return this.leftTrackImage;
};
Slider.prototype.setLeftTrackImage = function (property) {
	this.leftTrackImage = property;
};
Slider.prototype.getLeftTrackLeftCap = function () {
	return this.leftTrackLeftCap;
};
Slider.prototype.setLeftTrackLeftCap = function (property) {
	this.leftTrackLeftCap = property;
};
Slider.prototype.getLeftTrackTopCap = function () {
	return this.leftTrackTopCap;
};
Slider.prototype.setLeftTrackTopCap = function (property) {
	this.leftTrackTopCap = property;
};
Slider.prototype.getMaxRange = function () {
	return this.maxRange;
};
Slider.prototype.setMaxRange = function (property) {
	this.maxRange = property;
};
Slider.prototype.getMinRange = function () {
	return this.minRange;
};
Slider.prototype.setMinRange = function (property) {
	this.minRange = property;
};
Slider.prototype.getRightTrackImage = function () {
	return this.rightTrackImage;
};
Slider.prototype.setRightTrackImage = function (property) {
	this.rightTrackImage = property;
};
Slider.prototype.getRightTrackLeftCap = function () {
	return this.rightTrackLeftCap;
};
Slider.prototype.setRightTrackLeftCap = function (property) {
	this.rightTrackLeftCap = property;
};
Slider.prototype.getRightTrackTopCap = function () {
	return this.rightTrackTopCap;
};
Slider.prototype.setRightTrackTopCap = function (property) {
	this.rightTrackTopCap = property;
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	return this.selectedLeftTrackImage;
};
Slider.prototype.setSelectedLeftTrackImage = function (property) {
	this.selectedLeftTrackImage = property;
};
Slider.prototype.getSelectedRightTrackImage = function () {
	return this.selectedRightTrackImage;
};
Slider.prototype.setSelectedRightTrackImage = function (property) {
	this.selectedRightTrackImage = property;
};
Slider.prototype.getSelectedThumbImage = function () {
	return this.selectedThumbImage;
};
Slider.prototype.setSelectedThumbImage = function (property) {
	this.selectedThumbImage = property;
};
Slider.prototype.getThumbImage = function () {
	return this.thumbImage;
};
Slider.prototype.setThumbImage = function (property) {
	this.thumbImage = property;
};
Slider.prototype.getMax = function () {
	return this.max;
};
Slider.prototype.setMax = function (property) {
	this.max = property;
};
Slider.prototype.getMin = function () {
	return this.min;
};
Slider.prototype.setMin = function (property) {
	this.min = property;
};
Slider.prototype.getValue = function () {
	return this.value;
};
module.exports = function (properties) {
	return new Slider(properties);
};