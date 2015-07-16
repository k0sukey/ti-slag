function View(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Map.View';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.animate = properties.animate || true;
	this.animated = properties.animated || true;
	this.annotations = properties.annotations || [];
	this.hideAnnotationWhenTouchMap = properties.hideAnnotationWhenTouchMap || true;
	this.mapType = properties.mapType || 0;
	this.region = properties.region || {};
	this.regionFit = properties.regionFit || true;
	this.userLocation = properties.userLocation || true;
	this.latitudeDelta = properties.latitudeDelta || 0;
	this.longitudeDelta = properties.longitudeDelta || 0;
	return this;
}
View.prototype.addEventListener = function () {
};
View.prototype.removeEventListener = function () {
};
View.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
View.prototype.fireEvent = function () {
};
View.prototype.finishLayout = function () {
	throw new Error('Ti.Map.View.finishLayout was deprecated, since 3.0.0');
};
View.prototype.removeAllChildren = function () {
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
View.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.add = function () {
};
View.prototype.animate = function () {
};
View.prototype.hide = function () {
};
View.prototype.remove = function () {
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
View.prototype.setLocation = function () {
};
View.prototype.setMapType = function () {
};
View.prototype.zoom = function () {
};
View.prototype.getBubbleParent = function () {
	return true;
};
View.prototype.setBubbleParent = function () {
};
View.prototype.getApiName = function () {
	return '';
};
View.prototype.getLifecycleContainer = function () {
	return {};
};
View.prototype.setLifecycleContainer = function () {
};
View.prototype.getAccessibilityHidden = function () {
	return true;
};
View.prototype.setAccessibilityHidden = function () {
};
View.prototype.getAccessibilityHint = function () {
	return '';
};
View.prototype.setAccessibilityHint = function () {
};
View.prototype.getAccessibilityLabel = function () {
	return '';
};
View.prototype.setAccessibilityLabel = function () {
};
View.prototype.getAccessibilityValue = function () {
	return '';
};
View.prototype.setAccessibilityValue = function () {
};
View.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.setAnchorPoint = function () {
};
View.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getBackgroundDisabledColor = function () {
	return '';
};
View.prototype.setBackgroundDisabledColor = function () {
};
View.prototype.getBackgroundDisabledImage = function () {
	return '';
};
View.prototype.setBackgroundDisabledImage = function () {
};
View.prototype.getBackgroundFocusedColor = function () {
	return '';
};
View.prototype.setBackgroundFocusedColor = function () {
};
View.prototype.getBackgroundFocusedImage = function () {
	return '';
};
View.prototype.setBackgroundFocusedImage = function () {
};
View.prototype.getBackgroundGradient = function () {
	return {};
};
View.prototype.setBackgroundGradient = function () {
};
View.prototype.getBackgroundImage = function () {
	return '';
};
View.prototype.setBackgroundImage = function () {
};
View.prototype.getBackgroundRepeat = function () {
	return true;
};
View.prototype.setBackgroundRepeat = function () {
};
View.prototype.getBackgroundLeftCap = function () {
	return 0;
};
View.prototype.setBackgroundLeftCap = function () {
};
View.prototype.getBackgroundSelectedColor = function () {
	return '';
};
View.prototype.setBackgroundSelectedColor = function () {
};
View.prototype.getBackgroundSelectedImage = function () {
	return '';
};
View.prototype.setBackgroundSelectedImage = function () {
};
View.prototype.getBackgroundTopCap = function () {
	return 0;
};
View.prototype.setBackgroundTopCap = function () {
};
View.prototype.getClipMode = function () {
	return 0;
};
View.prototype.setClipMode = function () {
};
View.prototype.getFocusable = function () {
	return true;
};
View.prototype.setFocusable = function () {
};
View.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
View.prototype.setOverrideCurrentAnimation = function () {
};
View.prototype.getPullBackgroundColor = function () {
	return '';
};
View.prototype.setPullBackgroundColor = function () {
};
View.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
View.prototype.setSoftKeyboardOnFocus = function () {
};
View.prototype.getTransform = function () {
	return {};
};
View.prototype.setTransform = function () {
};
View.prototype.getViewShadowRadius = function () {
	return 0;
};
View.prototype.setViewShadowRadius = function () {
};
View.prototype.getViewShadowColor = function () {
	return '';
};
View.prototype.setViewShadowColor = function () {
};
View.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.setViewShadowOffset = function () {
};
View.prototype.getHorizontalWrap = function () {
	return true;
};
View.prototype.setHorizontalWrap = function () {
};
View.prototype.getZIndex = function () {
	return 0;
};
View.prototype.setZIndex = function () {
};
View.prototype.getKeepScreenOn = function () {
	return true;
};
View.prototype.setKeepScreenOn = function () {
};
View.prototype.getBackgroundColor = function () {
	return '';
};
View.prototype.setBackgroundColor = function () {
};
View.prototype.getBorderColor = function () {
	return '';
};
View.prototype.setBorderColor = function () {
};
View.prototype.getBorderRadius = function () {
	return 0;
};
View.prototype.setBorderRadius = function () {
};
View.prototype.getBorderWidth = function () {
	return 0;
};
View.prototype.setBorderWidth = function () {
};
View.prototype.getBottom = function () {
	return '';
};
View.prototype.setBottom = function () {
};
View.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.setCenter = function () {
};
View.prototype.getChildren = function () {
	return [];
};
View.prototype.getHeight = function () {
	return '';
};
View.prototype.setHeight = function () {
};
View.prototype.getLayout = function () {
	return '';
};
View.prototype.setLayout = function () {
};
View.prototype.getLeft = function () {
	return '';
};
View.prototype.setLeft = function () {
};
View.prototype.getOpacity = function () {
	return 0;
};
View.prototype.setOpacity = function () {
};
View.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getRight = function () {
	return '';
};
View.prototype.setRight = function () {
};
View.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getTintColor = function () {
	return '';
};
View.prototype.setTintColor = function () {
};
View.prototype.getTop = function () {
	return '';
};
View.prototype.setTop = function () {
};
View.prototype.getTouchEnabled = function () {
	return true;
};
View.prototype.setTouchEnabled = function () {
};
View.prototype.getVisible = function () {
	return true;
};
View.prototype.setVisible = function () {
};
View.prototype.getWidth = function () {
	return '';
};
View.prototype.setWidth = function () {
};
View.prototype.getAnimate = function () {
	return true;
};
View.prototype.setAnimate = function () {
};
View.prototype.getAnimated = function () {
	return true;
};
View.prototype.setAnimated = function () {
};
View.prototype.getAnnotations = function () {
	return [];
};
View.prototype.setAnnotations = function () {
};
View.prototype.getHideAnnotationWhenTouchMap = function () {
	return true;
};
View.prototype.setHideAnnotationWhenTouchMap = function () {
};
View.prototype.getMapType = function () {
	return 0;
};
View.prototype.setMapType = function () {
};
View.prototype.getRegion = function () {
	return {};
};
View.prototype.setRegion = function () {
};
View.prototype.getRegionFit = function () {
	return true;
};
View.prototype.setRegionFit = function () {
};
View.prototype.getUserLocation = function () {
	return true;
};
View.prototype.setUserLocation = function () {
};
View.prototype.getLatitudeDelta = function () {
	return 0;
};
View.prototype.getLongitudeDelta = function () {
	return 0;
};
module.exports = function (properties) {
	return new View(properties);
};