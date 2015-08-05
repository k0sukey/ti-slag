var crypto = require('crypto');
function Slider(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'lifecycleContainer',
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accessibilityHidden = __SLAG_PROPERTIES.accessibilityHidden || true;
	this.accessibilityHint = __SLAG_PROPERTIES.accessibilityHint || '';
	this.accessibilityLabel = __SLAG_PROPERTIES.accessibilityLabel || '';
	this.accessibilityValue = __SLAG_PROPERTIES.accessibilityValue || '';
	this.anchorPoint = __SLAG_PROPERTIES.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.animatedCenter) {
		throw new Error('Ti.UI.Slider.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.Slider.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Slider';
	this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG_PROPERTIES.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG_PROPERTIES.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG_PROPERTIES.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG_PROPERTIES.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	this.backgroundLeftCap = __SLAG_PROPERTIES.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG_PROPERTIES.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG_PROPERTIES.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG_PROPERTIES.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG_PROPERTIES.backgroundTopCap || 0;
	this.borderColor = __SLAG_PROPERTIES.borderColor || '';
	this.borderRadius = __SLAG_PROPERTIES.borderRadius || 0;
	this.borderWidth = __SLAG_PROPERTIES.borderWidth || 0;
	this.bottom = __SLAG_PROPERTIES.bottom || 0;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.center = __SLAG_PROPERTIES.center || {
		x: 0,
		y: 0
	};
	if (__SLAG_PROPERTIES.children) {
		throw new Error('Ti.UI.Slider.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG_PROPERTIES.clipMode || 0;
	this.disabledLeftTrackImage = __SLAG_PROPERTIES.disabledLeftTrackImage || '';
	this.disabledRightTrackImage = __SLAG_PROPERTIES.disabledRightTrackImage || '';
	this.disabledThumbImage = __SLAG_PROPERTIES.disabledThumbImage || '';
	this.enabled = __SLAG_PROPERTIES.enabled || true;
	this.focusable = __SLAG_PROPERTIES.focusable || true;
	this.highlightedLeftTrackImage = __SLAG_PROPERTIES.highlightedLeftTrackImage || '';
	this.highlightedRightTrackImage = __SLAG_PROPERTIES.highlightedRightTrackImage || '';
	this.highlightedThumbImage = __SLAG_PROPERTIES.highlightedThumbImage || '';
	this.horizontalWrap = __SLAG_PROPERTIES.horizontalWrap || true;
	this.keepScreenOn = __SLAG_PROPERTIES.keepScreenOn || true;
	this.layout = __SLAG_PROPERTIES.layout || '';
	this.left = __SLAG_PROPERTIES.left || 0;
	this.leftTrackImage = __SLAG_PROPERTIES.leftTrackImage || '';
	this.leftTrackLeftCap = __SLAG_PROPERTIES.leftTrackLeftCap || 0;
	this.leftTrackTopCap = __SLAG_PROPERTIES.leftTrackTopCap || 0;
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.max = __SLAG_PROPERTIES.max || 0;
	this.maxRange = __SLAG_PROPERTIES.maxRange || 0;
	this.min = __SLAG_PROPERTIES.min || 0;
	this.minRange = __SLAG_PROPERTIES.minRange || 0;
	this.opacity = __SLAG_PROPERTIES.opacity || 0;
	this.overrideCurrentAnimation = __SLAG_PROPERTIES.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG_PROPERTIES.pullBackgroundColor || '';
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.Slider.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG_PROPERTIES.right || 0;
	this.rightTrackImage = __SLAG_PROPERTIES.rightTrackImage || '';
	this.rightTrackLeftCap = __SLAG_PROPERTIES.rightTrackLeftCap || 0;
	this.rightTrackTopCap = __SLAG_PROPERTIES.rightTrackTopCap || 0;
	this.selectedLeftTrackImage = __SLAG_PROPERTIES.selectedLeftTrackImage || '';
	this.selectedRightTrackImage = __SLAG_PROPERTIES.selectedRightTrackImage || '';
	this.selectedThumbImage = __SLAG_PROPERTIES.selectedThumbImage || '';
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.Slider.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG_PROPERTIES.softKeyboardOnFocus || 0;
	this.thumbImage = __SLAG_PROPERTIES.thumbImage || '';
	this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	this.top = __SLAG_PROPERTIES.top || 0;
	this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	this.transform = __SLAG_PROPERTIES.transform || {};
	this.value = __SLAG_PROPERTIES.value || '';
	this.viewShadowColor = __SLAG_PROPERTIES.viewShadowColor || '';
	this.viewShadowOffset = __SLAG_PROPERTIES.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	this.visible = __SLAG_PROPERTIES.visible || true;
	this.width = __SLAG_PROPERTIES.width || 0;
	this.zIndex = __SLAG_PROPERTIES.zIndex || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Slider.prototype.add = function (__SLAG_PARAMETER) {
	this.children.push(__SLAG_PARAMETER);
	__SLAG_PARAMETER.__SLAG_PARENT = this;
};
Slider.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.animate = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Slider.prototype.convertPointToView = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
Slider.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Slider.finishLayout was deprecated, since 3.0.0');
};
Slider.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.getAccessibilityHidden = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHidden;
};
Slider.prototype.getAccessibilityHint = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHint;
};
Slider.prototype.getAccessibilityLabel = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityLabel;
};
Slider.prototype.getAccessibilityValue = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityValue;
};
Slider.prototype.getAnchorPoint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.anchorPoint;
};
Slider.prototype.getAnimatedCenter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.animatedCenter;
};
Slider.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Slider.prototype.getBackgroundColor = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundColor;
};
Slider.prototype.getBackgroundDisabledColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledColor;
};
Slider.prototype.getBackgroundDisabledImage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundDisabledImage;
};
Slider.prototype.getBackgroundFocusedColor = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedColor;
};
Slider.prototype.getBackgroundFocusedImage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundFocusedImage;
};
Slider.prototype.getBackgroundGradient = function () {
	if ([
			'ios',
			'mobileweb',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundGradient;
};
Slider.prototype.getBackgroundImage = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundImage;
};
Slider.prototype.getBackgroundLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundLeftCap;
};
Slider.prototype.getBackgroundRepeat = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundRepeat;
};
Slider.prototype.getBackgroundSelectedColor = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedColor;
};
Slider.prototype.getBackgroundSelectedImage = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundSelectedImage;
};
Slider.prototype.getBackgroundTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundTopCap;
};
Slider.prototype.getBorderColor = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderColor;
};
Slider.prototype.getBorderRadius = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderRadius;
};
Slider.prototype.getBorderWidth = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderWidth;
};
Slider.prototype.getBottom = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bottom;
};
Slider.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Slider.prototype.getCenter = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
Slider.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Slider.prototype.getChildren = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.children;
};
Slider.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
Slider.prototype.getDisabledLeftTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disabledLeftTrackImage;
};
Slider.prototype.getDisabledRightTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disabledRightTrackImage;
};
Slider.prototype.getDisabledThumbImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disabledThumbImage;
};
Slider.prototype.getEnabled = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.enabled;
};
Slider.prototype.getFocusable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.focusable;
};
Slider.prototype.getHighlightedLeftTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.highlightedLeftTrackImage;
};
Slider.prototype.getHighlightedRightTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.highlightedRightTrackImage;
};
Slider.prototype.getHighlightedThumbImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.highlightedThumbImage;
};
Slider.prototype.getHorizontalWrap = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.horizontalWrap;
};
Slider.prototype.getKeepScreenOn = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keepScreenOn;
};
Slider.prototype.getLayout = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.layout;
};
Slider.prototype.getLeft = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.left;
};
Slider.prototype.getLeftTrackImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftTrackImage;
};
Slider.prototype.getLeftTrackLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftTrackLeftCap;
};
Slider.prototype.getLeftTrackTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.leftTrackTopCap;
};
Slider.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Slider.prototype.getMax = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.max;
};
Slider.prototype.getMaxRange = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.maxRange;
};
Slider.prototype.getMin = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.min;
};
Slider.prototype.getMinRange = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.minRange;
};
Slider.prototype.getOpacity = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opacity;
};
Slider.prototype.getOverrideCurrentAnimation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.overrideCurrentAnimation;
};
Slider.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
Slider.prototype.getRect = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
Slider.prototype.getRight = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.right;
};
Slider.prototype.getRightTrackImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightTrackImage;
};
Slider.prototype.getRightTrackLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightTrackLeftCap;
};
Slider.prototype.getRightTrackTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rightTrackTopCap;
};
Slider.prototype.getSelectedLeftTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedLeftTrackImage;
};
Slider.prototype.getSelectedRightTrackImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedRightTrackImage;
};
Slider.prototype.getSelectedThumbImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedThumbImage;
};
Slider.prototype.getSize = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
Slider.prototype.getSoftKeyboardOnFocus = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.softKeyboardOnFocus;
};
Slider.prototype.getThumbImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.thumbImage;
};
Slider.prototype.getTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
Slider.prototype.getTop = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.top;
};
Slider.prototype.getTouchEnabled = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
Slider.prototype.getTransform = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transform;
};
Slider.prototype.getValue = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.value;
};
Slider.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
Slider.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
Slider.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
Slider.prototype.getVisible = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
Slider.prototype.getWidth = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.width;
};
Slider.prototype.getZIndex = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.zIndex;
};
Slider.prototype.hide = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.remove = function (__SLAG_PARAMETER) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === __SLAG_PARAMETER.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	__SLAG_PARAMETER.__SLAG_PARENT = undefined;
};
Slider.prototype.removeAllChildren = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.setAccessibilityHidden = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHidden = __SLAG__PROPERTY;
};
Slider.prototype.setAccessibilityHint = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHint = __SLAG__PROPERTY;
};
Slider.prototype.setAccessibilityLabel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityLabel = __SLAG__PROPERTY;
};
Slider.prototype.setAccessibilityValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityValue = __SLAG__PROPERTY;
};
Slider.prototype.setAnchorPoint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.anchorPoint = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundColor = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledColor = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundDisabledImage = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedColor = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundFocusedImage = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundGradient = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundGradient = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundImage = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundLeftCap = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundRepeat = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundRepeat = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedColor = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundSelectedImage = __SLAG__PROPERTY;
};
Slider.prototype.setBackgroundTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundTopCap = __SLAG__PROPERTY;
};
Slider.prototype.setBorderColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderColor = __SLAG__PROPERTY;
};
Slider.prototype.setBorderRadius = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderRadius = __SLAG__PROPERTY;
};
Slider.prototype.setBorderWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderWidth = __SLAG__PROPERTY;
};
Slider.prototype.setBottom = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bottom = __SLAG__PROPERTY;
};
Slider.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Slider.prototype.setCenter = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
Slider.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
Slider.prototype.setDisabledLeftTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disabledLeftTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setDisabledRightTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disabledRightTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setDisabledThumbImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disabledThumbImage = __SLAG__PROPERTY;
};
Slider.prototype.setEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.enabled = __SLAG__PROPERTY;
};
Slider.prototype.setFocusable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.focusable = __SLAG__PROPERTY;
};
Slider.prototype.setHighlightedLeftTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.highlightedLeftTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setHighlightedRightTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.highlightedRightTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setHighlightedThumbImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.highlightedThumbImage = __SLAG__PROPERTY;
};
Slider.prototype.setHorizontalWrap = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.horizontalWrap = __SLAG__PROPERTY;
};
Slider.prototype.setKeepScreenOn = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keepScreenOn = __SLAG__PROPERTY;
};
Slider.prototype.setLayout = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.layout = __SLAG__PROPERTY;
};
Slider.prototype.setLeft = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.left = __SLAG__PROPERTY;
};
Slider.prototype.setLeftTrackImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setLeftTrackLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftTrackLeftCap = __SLAG__PROPERTY;
};
Slider.prototype.setLeftTrackTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.leftTrackTopCap = __SLAG__PROPERTY;
};
Slider.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Slider.prototype.setMax = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.max = __SLAG__PROPERTY;
};
Slider.prototype.setMaxRange = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.maxRange = __SLAG__PROPERTY;
};
Slider.prototype.setMin = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.min = __SLAG__PROPERTY;
};
Slider.prototype.setMinRange = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.minRange = __SLAG__PROPERTY;
};
Slider.prototype.setOpacity = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opacity = __SLAG__PROPERTY;
};
Slider.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
Slider.prototype.setRight = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.right = __SLAG__PROPERTY;
};
Slider.prototype.setRightTrackImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setRightTrackLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightTrackLeftCap = __SLAG__PROPERTY;
};
Slider.prototype.setRightTrackTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rightTrackTopCap = __SLAG__PROPERTY;
};
Slider.prototype.setSelectedLeftTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedLeftTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setSelectedRightTrackImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedRightTrackImage = __SLAG__PROPERTY;
};
Slider.prototype.setSelectedThumbImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedThumbImage = __SLAG__PROPERTY;
};
Slider.prototype.setSoftKeyboardOnFocus = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.softKeyboardOnFocus = __SLAG__PROPERTY;
};
Slider.prototype.setThumbImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.thumbImage = __SLAG__PROPERTY;
};
Slider.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
Slider.prototype.setTop = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.top = __SLAG__PROPERTY;
};
Slider.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
Slider.prototype.setTransform = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transform = __SLAG__PROPERTY;
};
Slider.prototype.setValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.value = __SLAG__PROPERTY;
};
Slider.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
Slider.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
Slider.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
Slider.prototype.setVisible = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
Slider.prototype.setWidth = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.width = __SLAG__PROPERTY;
};
Slider.prototype.setZIndex = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.zIndex = __SLAG__PROPERTY;
};
Slider.prototype.show = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Slider.prototype.startLayout = function () {
	throw new Error('Ti.UI.Slider.startLayout was deprecated, since 3.0.0');
};
Slider.prototype.toImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Slider.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Slider.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Slider(properties);
};