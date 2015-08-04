var crypto = require('crypto');
function ImageView(__SLAG__properties) {
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
			'height',
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
			'url',
			'animating',
			'autorotate',
			'decodeRetries',
			'defaultImage',
			'duration',
			'enableZoomControls',
			'hires',
			'image',
			'images',
			'paused',
			'preventDefaultImage',
			'repeatCount',
			'reverse',
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
		throw new Error('Ti.UI.ImageView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ImageView';
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
		throw new Error('Ti.UI.ImageView.animatedCenter is read only property');
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
		throw new Error('Ti.UI.ImageView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ImageView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ImageView.size is read only property');
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
	if (__SLAG__properties.url) {
		throw new Error('Ti.UI.ImageView.url was deprecated, since 1.5.0');
	}
	if (__SLAG__properties.animating) {
		throw new Error('Ti.UI.ImageView.animating is read only property');
	}
	this.animating = true;
	this.autorotate = __SLAG__properties.autorotate || true;
	this.decodeRetries = __SLAG__properties.decodeRetries || 0;
	this.defaultImage = __SLAG__properties.defaultImage || '';
	this.duration = __SLAG__properties.duration || 0;
	this.enableZoomControls = __SLAG__properties.enableZoomControls || true;
	this.hires = __SLAG__properties.hires || true;
	this.image = __SLAG__properties.image || '';
	this.images = __SLAG__properties.images || '';
	if (__SLAG__properties.paused) {
		throw new Error('Ti.UI.ImageView.paused is read only property');
	}
	this.paused = true;
	this.preventDefaultImage = __SLAG__properties.preventDefaultImage || true;
	this.repeatCount = __SLAG__properties.repeatCount || 0;
	this.reverse = __SLAG__properties.reverse || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
ImageView.prototype.addEventListener = function () {
};
ImageView.prototype.removeEventListener = function () {
};
ImageView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ImageView.prototype.fireEvent = function () {
};
ImageView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ImageView.finishLayout was deprecated, since 3.0.0');
};
ImageView.prototype.removeAllChildren = function () {
};
ImageView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ImageView.startLayout was deprecated, since 3.0.0');
};
ImageView.prototype.toImage = function () {
	return {};
};
ImageView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ImageView.updateLayout was deprecated, since 3.0.0');
};
ImageView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ImageView.prototype.animate = function () {
};
ImageView.prototype.hide = function () {
};
ImageView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ImageView.prototype.show = function () {
};
ImageView.prototype.pause = function () {
};
ImageView.prototype.resume = function () {
};
ImageView.prototype.start = function () {
};
ImageView.prototype.stop = function () {
};
ImageView.prototype.toBlob = function () {
	return {};
};
ImageView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ImageView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ImageView.prototype.getApiName = function () {
	return this.apiName;
};
ImageView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ImageView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ImageView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ImageView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ImageView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ImageView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ImageView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ImageView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ImageView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ImageView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ImageView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ImageView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ImageView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ImageView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ImageView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ImageView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ImageView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ImageView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ImageView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ImageView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ImageView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ImageView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ImageView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ImageView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ImageView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ImageView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ImageView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ImageView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ImageView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ImageView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ImageView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ImageView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ImageView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ImageView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ImageView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ImageView.prototype.getClipMode = function () {
	return this.clipMode;
};
ImageView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ImageView.prototype.getFocusable = function () {
	return this.focusable;
};
ImageView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ImageView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ImageView.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
ImageView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ImageView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ImageView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ImageView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ImageView.prototype.getTransform = function () {
	return this.transform;
};
ImageView.prototype.setTransform = function (property) {
	this.transform = property;
};
ImageView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ImageView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ImageView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ImageView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ImageView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ImageView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ImageView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ImageView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ImageView.prototype.getZIndex = function () {
	return this.zIndex;
};
ImageView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ImageView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ImageView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ImageView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ImageView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ImageView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ImageView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ImageView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ImageView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ImageView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ImageView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ImageView.prototype.getBottom = function () {
	return this.bottom;
};
ImageView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ImageView.prototype.getCenter = function () {
	return this.center;
};
ImageView.prototype.setCenter = function (property) {
	this.center = property;
};
ImageView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ImageView.prototype.getChildren = function () {
	return this.children;
};
ImageView.prototype.getHeight = function () {
	return this.height;
};
ImageView.prototype.setHeight = function (property) {
	this.height = property;
};
ImageView.prototype.getLayout = function () {
	return this.layout;
};
ImageView.prototype.setLayout = function (property) {
	this.layout = property;
};
ImageView.prototype.getLeft = function () {
	return this.left;
};
ImageView.prototype.setLeft = function (property) {
	this.left = property;
};
ImageView.prototype.getOpacity = function () {
	return this.opacity;
};
ImageView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ImageView.prototype.getRect = function () {
	return this.rect;
};
ImageView.prototype.getRight = function () {
	return this.right;
};
ImageView.prototype.setRight = function (property) {
	this.right = property;
};
ImageView.prototype.getSize = function () {
	return this.size;
};
ImageView.prototype.getTintColor = function () {
	return this.tintColor;
};
ImageView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ImageView.prototype.getTop = function () {
	return this.top;
};
ImageView.prototype.setTop = function (property) {
	this.top = property;
};
ImageView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ImageView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ImageView.prototype.getVisible = function () {
	return this.visible;
};
ImageView.prototype.setVisible = function (property) {
	this.visible = property;
};
ImageView.prototype.getWidth = function () {
	return this.width;
};
ImageView.prototype.setWidth = function (property) {
	this.width = property;
};
ImageView.prototype.getUrl = function () {
	throw new Error('Ti.UI.ImageView.getUrl was deprecated, since 1.5.0');
};
ImageView.prototype.setUrl = function () {
	throw new Error('Ti.UI.ImageView.setUrl was deprecated, since 1.5.0');
};
ImageView.prototype.getAnimating = function () {
	return this.animating;
};
ImageView.prototype.getAutorotate = function () {
	return this.autorotate;
};
ImageView.prototype.setAutorotate = function (property) {
	this.autorotate = property;
};
ImageView.prototype.getDecodeRetries = function () {
	return this.decodeRetries;
};
ImageView.prototype.setDecodeRetries = function (property) {
	this.decodeRetries = property;
};
ImageView.prototype.getDefaultImage = function () {
	return this.defaultImage;
};
ImageView.prototype.setDefaultImage = function (property) {
	this.defaultImage = property;
};
ImageView.prototype.getDuration = function () {
	return this.duration;
};
ImageView.prototype.setDuration = function (property) {
	this.duration = property;
};
ImageView.prototype.getEnableZoomControls = function () {
	return this.enableZoomControls;
};
ImageView.prototype.setEnableZoomControls = function (property) {
	this.enableZoomControls = property;
};
ImageView.prototype.getHires = function () {
	return this.hires;
};
ImageView.prototype.setHires = function (property) {
	this.hires = property;
};
ImageView.prototype.getImage = function () {
	return this.image;
};
ImageView.prototype.setImage = function (property) {
	this.image = property;
};
ImageView.prototype.getImages = function () {
	return this.images;
};
ImageView.prototype.setImages = function (property) {
	this.images = property;
};
ImageView.prototype.getPaused = function () {
	return this.paused;
};
ImageView.prototype.getPreventDefaultImage = function () {
	return this.preventDefaultImage;
};
ImageView.prototype.setPreventDefaultImage = function (property) {
	this.preventDefaultImage = property;
};
ImageView.prototype.getRepeatCount = function () {
	return this.repeatCount;
};
ImageView.prototype.setRepeatCount = function (property) {
	this.repeatCount = property;
};
ImageView.prototype.getReverse = function () {
	return this.reverse;
};
ImageView.prototype.setReverse = function (property) {
	this.reverse = property;
};
module.exports = function (properties) {
	return new ImageView(properties);
};