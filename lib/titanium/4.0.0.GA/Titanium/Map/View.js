var crypto = require('crypto');
function View(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animate',
			'animated',
			'animatedCenter',
			'annotations',
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
			'height',
			'hideAnnotationWhenTouchMap',
			'horizontalWrap',
			'keepScreenOn',
			'latitudeDelta',
			'layout',
			'left',
			'lifecycleContainer',
			'longitudeDelta',
			'mapType',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'region',
			'regionFit',
			'right',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'userLocation',
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
	this.animate = __SLAG__properties.animate || true;
	this.animated = __SLAG__properties.animated || true;
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.Map.View.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.annotations = __SLAG__properties.annotations || [];
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Map.View.apiName is read only property');
	}
	this.apiName = 'Ti.Map.View';
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
		throw new Error('Ti.Map.View.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.height = __SLAG__properties.height || 0;
	this.hideAnnotationWhenTouchMap = __SLAG__properties.hideAnnotationWhenTouchMap || true;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	if (__SLAG__properties.latitudeDelta) {
		throw new Error('Ti.Map.View.latitudeDelta is read only property');
	}
	this.latitudeDelta = 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.longitudeDelta) {
		throw new Error('Ti.Map.View.longitudeDelta is read only property');
	}
	this.longitudeDelta = 0;
	this.mapType = __SLAG__properties.mapType || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.Map.View.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.region = __SLAG__properties.region || {};
	this.regionFit = __SLAG__properties.regionFit || true;
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.Map.View.size is read only property');
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
	this.userLocation = __SLAG__properties.userLocation || true;
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
View.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
View.prototype.addAnnotation = function () {
};
View.prototype.addAnnotations = function () {
};
View.prototype.addEventListener = function () {
};
View.prototype.addRoute = function () {
};
View.prototype.animate = function () {
};
View.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
View.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.deselectAnnotation = function () {
};
View.prototype.finishLayout = function () {
	throw new Error('Ti.Map.View.finishLayout was deprecated, since 3.0.0');
};
View.prototype.fireEvent = function () {
};
View.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
View.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
View.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
View.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
View.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
View.prototype.getAnimate = function () {
	return this.animate;
};
View.prototype.getAnimated = function () {
	return this.animated;
};
View.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
View.prototype.getAnnotations = function () {
	return this.annotations;
};
View.prototype.getApiName = function () {
	return this.apiName;
};
View.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
View.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
View.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
View.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
View.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
View.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
View.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
View.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
View.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
View.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
View.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
View.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
View.prototype.getBorderColor = function () {
	return this.borderColor;
};
View.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
View.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
View.prototype.getBottom = function () {
	return this.bottom;
};
View.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
View.prototype.getCenter = function () {
	return this.center;
};
View.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
View.prototype.getChildren = function () {
	return this.children;
};
View.prototype.getClipMode = function () {
	return this.clipMode;
};
View.prototype.getFocusable = function () {
	return this.focusable;
};
View.prototype.getHeight = function () {
	return this.height;
};
View.prototype.getHideAnnotationWhenTouchMap = function () {
	return this.hideAnnotationWhenTouchMap;
};
View.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
View.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
View.prototype.getLatitudeDelta = function () {
	return this.latitudeDelta;
};
View.prototype.getLayout = function () {
	return this.layout;
};
View.prototype.getLeft = function () {
	return this.left;
};
View.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
View.prototype.getLongitudeDelta = function () {
	return this.longitudeDelta;
};
View.prototype.getMapType = function () {
	return this.mapType;
};
View.prototype.getOpacity = function () {
	return this.opacity;
};
View.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
View.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
View.prototype.getRect = function () {
	return this.rect;
};
View.prototype.getRegion = function () {
	return this.region;
};
View.prototype.getRegionFit = function () {
	return this.regionFit;
};
View.prototype.getRight = function () {
	return this.right;
};
View.prototype.getSize = function () {
	return this.size;
};
View.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
View.prototype.getTintColor = function () {
	return this.tintColor;
};
View.prototype.getTop = function () {
	return this.top;
};
View.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
View.prototype.getTransform = function () {
	return this.transform;
};
View.prototype.getUserLocation = function () {
	return this.userLocation;
};
View.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
View.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
View.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
View.prototype.getVisible = function () {
	return this.visible;
};
View.prototype.getWidth = function () {
	return this.width;
};
View.prototype.getZIndex = function () {
	return this.zIndex;
};
View.prototype.hide = function () {
};
View.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
View.prototype.removeAllAnnotations = function () {
};
View.prototype.removeAllChildren = function () {
};
View.prototype.removeAnnotation = function () {
};
View.prototype.removeAnnotations = function () {
};
View.prototype.removeEventListener = function () {
};
View.prototype.removeRoute = function () {
};
View.prototype.selectAnnotation = function () {
};
View.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
View.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
View.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
View.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
View.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
View.prototype.setAnimate = function (property) {
	this.animate = property;
};
View.prototype.setAnimated = function (property) {
	this.animated = property;
};
View.prototype.setAnnotations = function (property) {
	this.annotations = property;
};
View.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
View.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
View.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
View.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
View.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
View.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
View.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
View.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
View.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
View.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
View.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
View.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
View.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
View.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
View.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
View.prototype.setBottom = function (property) {
	this.bottom = property;
};
View.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
View.prototype.setCenter = function (property) {
	this.center = property;
};
View.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
View.prototype.setFocusable = function (property) {
	this.focusable = property;
};
View.prototype.setHeight = function (property) {
	this.height = property;
};
View.prototype.setHideAnnotationWhenTouchMap = function (property) {
	this.hideAnnotationWhenTouchMap = property;
};
View.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
View.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
View.prototype.setLayout = function (property) {
	this.layout = property;
};
View.prototype.setLeft = function (property) {
	this.left = property;
};
View.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
View.prototype.setLocation = function () {
};
View.prototype.setMapType = function (property) {
	this.mapType = property;
};
View.prototype.setOpacity = function (property) {
	this.opacity = property;
};
View.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
View.prototype.setRegion = function (property) {
	this.region = property;
};
View.prototype.setRegionFit = function (property) {
	this.regionFit = property;
};
View.prototype.setRight = function (property) {
	this.right = property;
};
View.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
View.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
View.prototype.setTop = function (property) {
	this.top = property;
};
View.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
View.prototype.setTransform = function (property) {
	this.transform = property;
};
View.prototype.setUserLocation = function (property) {
	this.userLocation = property;
};
View.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
View.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
View.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
View.prototype.setVisible = function (property) {
	this.visible = property;
};
View.prototype.setWidth = function (property) {
	this.width = property;
};
View.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
View.prototype.show = function () {
};
View.prototype.startLayout = function () {
	throw new Error('Ti.Map.View.startLayout was deprecated, since 3.0.0');
};
View.prototype.toImage = function () {
	return {};
};
View.prototype.updateLayout = function () {
	throw new Error('Ti.Map.View.updateLayout was deprecated, since 3.0.0');
};
View.prototype.zoom = function () {
};
module.exports = function (properties) {
	return new View(properties);
};