var crypto = require('crypto');
function View(__SLAG__properties) {
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
			'animate',
			'annotations',
			'mapType',
			'zOrderOnTop',
			'region',
			'userLocation',
			'userLocationButton',
			'compassEnabled',
			'enableZoomControls',
			'maxZoomLevel',
			'minZoomLevel',
			'traffic',
			'camera',
			'pitchEnabled',
			'rotateEnabled',
			'showsBuildings',
			'showsPointsOfInterest',
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
		throw new Error('Modules.Map.View.apiName is read only property');
	}
	this.apiName = 'Modules.Map.View';
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
		throw new Error('Modules.Map.View.animatedCenter is read only property');
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
		throw new Error('Modules.Map.View.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Modules.Map.View.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Modules.Map.View.size is read only property');
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
	this.animate = __SLAG__properties.animate || true;
	this.annotations = __SLAG__properties.annotations || [];
	this.mapType = __SLAG__properties.mapType || 0;
	this.zOrderOnTop = __SLAG__properties.zOrderOnTop || true;
	this.region = __SLAG__properties.region || {};
	this.userLocation = __SLAG__properties.userLocation || true;
	this.userLocationButton = __SLAG__properties.userLocationButton || true;
	this.compassEnabled = __SLAG__properties.compassEnabled || true;
	this.enableZoomControls = __SLAG__properties.enableZoomControls || true;
	if (__SLAG__properties.maxZoomLevel) {
		throw new Error('Modules.Map.View.maxZoomLevel is read only property');
	}
	this.maxZoomLevel = 0;
	if (__SLAG__properties.minZoomLevel) {
		throw new Error('Modules.Map.View.minZoomLevel is read only property');
	}
	this.minZoomLevel = 0;
	this.traffic = __SLAG__properties.traffic || true;
	this.camera = __SLAG__properties.camera || {};
	this.pitchEnabled = __SLAG__properties.pitchEnabled || true;
	this.rotateEnabled = __SLAG__properties.rotateEnabled || true;
	this.showsBuildings = __SLAG__properties.showsBuildings || true;
	this.showsPointsOfInterest = __SLAG__properties.showsPointsOfInterest || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
View.prototype.addEventListener = function () {
};
View.prototype.removeEventListener = function () {
};
View.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
View.prototype.fireEvent = function () {
};
View.prototype.finishLayout = function () {
	throw new Error('Modules.Map.View.finishLayout was deprecated, since 3.0.0');
};
View.prototype.removeAllChildren = function () {
};
View.prototype.startLayout = function () {
	throw new Error('Modules.Map.View.startLayout was deprecated, since 3.0.0');
};
View.prototype.toImage = function () {
	return {};
};
View.prototype.updateLayout = function () {
	throw new Error('Modules.Map.View.updateLayout was deprecated, since 3.0.0');
};
View.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
View.prototype.animate = function () {
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
View.prototype.show = function () {
};
View.prototype.addAnnotation = function () {
};
View.prototype.addAnnotations = function () {
};
View.prototype.addRoute = function () {
};
View.prototype.deselectAnnotation = function () {
};
View.prototype.removeAllAnnotations = function () {
};
View.prototype.removeAnnotation = function () {
};
View.prototype.removeAnnotations = function () {
};
View.prototype.removeRoute = function () {
};
View.prototype.selectAnnotation = function () {
};
View.prototype.setMapType = function (property) {
	this.mapType = property;
};
View.prototype.setLocation = function () {
};
View.prototype.zoom = function () {
};
View.prototype.snapshot = function () {
};
View.prototype.animateCamera = function () {
};
View.prototype.showAnnotations = function () {
};
View.prototype.addPolygon = function () {
};
View.prototype.addPolygons = function () {
};
View.prototype.removePolygon = function () {
};
View.prototype.removeAllPolygons = function () {
};
View.prototype.addPolyline = function () {
};
View.prototype.addPolylines = function () {
};
View.prototype.removePolyline = function () {
};
View.prototype.removeAllPolylines = function () {
};
View.prototype.addCircle = function () {
};
View.prototype.addCircles = function () {
};
View.prototype.removeCircle = function () {
};
View.prototype.removeAllCircles = function () {
};
View.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
View.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
View.prototype.getApiName = function () {
	return this.apiName;
};
View.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
View.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
View.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
View.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
View.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
View.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
View.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
View.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
View.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
View.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
View.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
View.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
View.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
View.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
View.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
View.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
View.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
View.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
View.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
View.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
View.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
View.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
View.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
View.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
View.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
View.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
View.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
View.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
View.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
View.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
View.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
View.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
View.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
View.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
View.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
View.prototype.getClipMode = function () {
	return this.clipMode;
};
View.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
View.prototype.getFocusable = function () {
	return this.focusable;
};
View.prototype.setFocusable = function (property) {
	this.focusable = property;
};
View.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
View.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
View.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
View.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
View.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
View.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
View.prototype.getTransform = function () {
	return this.transform;
};
View.prototype.setTransform = function (property) {
	this.transform = property;
};
View.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
View.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
View.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
View.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
View.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
View.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
View.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
View.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
View.prototype.getZIndex = function () {
	return this.zIndex;
};
View.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
View.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
View.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
View.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
View.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
View.prototype.getBorderColor = function () {
	return this.borderColor;
};
View.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
View.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
View.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
View.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
View.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
View.prototype.getBottom = function () {
	return this.bottom;
};
View.prototype.setBottom = function (property) {
	this.bottom = property;
};
View.prototype.getCenter = function () {
	return this.center;
};
View.prototype.setCenter = function (property) {
	this.center = property;
};
View.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
View.prototype.getChildren = function () {
	return this.children;
};
View.prototype.getHeight = function () {
	return this.height;
};
View.prototype.setHeight = function (property) {
	this.height = property;
};
View.prototype.getLayout = function () {
	return this.layout;
};
View.prototype.setLayout = function (property) {
	this.layout = property;
};
View.prototype.getLeft = function () {
	return this.left;
};
View.prototype.setLeft = function (property) {
	this.left = property;
};
View.prototype.getOpacity = function () {
	return this.opacity;
};
View.prototype.setOpacity = function (property) {
	this.opacity = property;
};
View.prototype.getRect = function () {
	return this.rect;
};
View.prototype.getRight = function () {
	return this.right;
};
View.prototype.setRight = function (property) {
	this.right = property;
};
View.prototype.getSize = function () {
	return this.size;
};
View.prototype.getTintColor = function () {
	return this.tintColor;
};
View.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
View.prototype.getTop = function () {
	return this.top;
};
View.prototype.setTop = function (property) {
	this.top = property;
};
View.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
View.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
View.prototype.getVisible = function () {
	return this.visible;
};
View.prototype.setVisible = function (property) {
	this.visible = property;
};
View.prototype.getWidth = function () {
	return this.width;
};
View.prototype.setWidth = function (property) {
	this.width = property;
};
View.prototype.getAnimate = function () {
	return this.animate;
};
View.prototype.setAnimate = function (property) {
	this.animate = property;
};
View.prototype.getAnnotations = function () {
	return this.annotations;
};
View.prototype.setAnnotations = function (property) {
	this.annotations = property;
};
View.prototype.getMapType = function () {
	return this.mapType;
};
View.prototype.setMapType = function (property) {
	this.mapType = property;
};
View.prototype.getZOrderOnTop = function () {
	return this.zOrderOnTop;
};
View.prototype.setZOrderOnTop = function (property) {
	this.zOrderOnTop = property;
};
View.prototype.getRegion = function () {
	return this.region;
};
View.prototype.setRegion = function (property) {
	this.region = property;
};
View.prototype.getUserLocation = function () {
	return this.userLocation;
};
View.prototype.setUserLocation = function (property) {
	this.userLocation = property;
};
View.prototype.getUserLocationButton = function () {
	return this.userLocationButton;
};
View.prototype.setUserLocationButton = function (property) {
	this.userLocationButton = property;
};
View.prototype.getCompassEnabled = function () {
	return this.compassEnabled;
};
View.prototype.setCompassEnabled = function (property) {
	this.compassEnabled = property;
};
View.prototype.getEnableZoomControls = function () {
	return this.enableZoomControls;
};
View.prototype.setEnableZoomControls = function (property) {
	this.enableZoomControls = property;
};
View.prototype.getMaxZoomLevel = function () {
	return this.maxZoomLevel;
};
View.prototype.getMinZoomLevel = function () {
	return this.minZoomLevel;
};
View.prototype.getTraffic = function () {
	return this.traffic;
};
View.prototype.setTraffic = function (property) {
	this.traffic = property;
};
View.prototype.getCamera = function () {
	return this.camera;
};
View.prototype.setCamera = function (property) {
	this.camera = property;
};
View.prototype.getPitchEnabled = function () {
	return this.pitchEnabled;
};
View.prototype.setPitchEnabled = function (property) {
	this.pitchEnabled = property;
};
View.prototype.getRotateEnabled = function () {
	return this.rotateEnabled;
};
View.prototype.setRotateEnabled = function (property) {
	this.rotateEnabled = property;
};
View.prototype.getShowsBuildings = function () {
	return this.showsBuildings;
};
View.prototype.setShowsBuildings = function (property) {
	this.showsBuildings = property;
};
View.prototype.getShowsPointsOfInterest = function () {
	return this.showsPointsOfInterest;
};
View.prototype.setShowsPointsOfInterest = function (property) {
	this.showsPointsOfInterest = property;
};
module.exports = function (properties) {
	return new View(properties);
};