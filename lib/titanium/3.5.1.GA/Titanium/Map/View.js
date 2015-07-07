function View(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animate = properties.animate || undefined;
	this.animated = properties.animated || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.annotations = properties.annotations || undefined;
	this.apiName = 'Ti.Map.View';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hideAnnotationWhenTouchMap = properties.hideAnnotationWhenTouchMap || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.latitudeDelta = properties.latitudeDelta || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.longitudeDelta = properties.longitudeDelta || undefined;
	this.mapType = properties.mapType || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.region = properties.region || undefined;
	this.regionFit = properties.regionFit || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.userLocation = properties.userLocation || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
View.prototype.add = function () {
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
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
View.prototype.getAccessibilityHint = function () {
	return '';
};
View.prototype.getAccessibilityLabel = function () {
	return '';
};
View.prototype.getAccessibilityValue = function () {
	return '';
};
View.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getAnimate = function () {
	return true;
};
View.prototype.getAnimated = function () {
	return true;
};
View.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getAnnotations = function () {
	return [];
};
View.prototype.getApiName = function () {
	return '';
};
View.prototype.getBackgroundColor = function () {
	return '';
};
View.prototype.getBackgroundDisabledColor = function () {
	return '';
};
View.prototype.getBackgroundDisabledImage = function () {
	return '';
};
View.prototype.getBackgroundFocusedColor = function () {
	return '';
};
View.prototype.getBackgroundFocusedImage = function () {
	return '';
};
View.prototype.getBackgroundGradient = function () {
	return {};
};
View.prototype.getBackgroundImage = function () {
	return '';
};
View.prototype.getBackgroundLeftCap = function () {
	return 0;
};
View.prototype.getBackgroundRepeat = function () {
	return true;
};
View.prototype.getBackgroundSelectedColor = function () {
	return '';
};
View.prototype.getBackgroundSelectedImage = function () {
	return '';
};
View.prototype.getBackgroundTopCap = function () {
	return 0;
};
View.prototype.getBorderColor = function () {
	return '';
};
View.prototype.getBorderRadius = function () {
	return 0;
};
View.prototype.getBorderWidth = function () {
	return 0;
};
View.prototype.getBottom = function () {
	return 0;
};
View.prototype.getBubbleParent = function () {
	return true;
};
View.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getChildren = function () {
	return [];
};
View.prototype.getClipMode = function () {
	return 0;
};
View.prototype.getFocusable = function () {
	return true;
};
View.prototype.getHeight = function () {
	return 0;
};
View.prototype.getHideAnnotationWhenTouchMap = function () {
	return true;
};
View.prototype.getHorizontalWrap = function () {
	return true;
};
View.prototype.getKeepScreenOn = function () {
	return true;
};
View.prototype.getLatitudeDelta = function () {
	return 0;
};
View.prototype.getLayout = function () {
	return '';
};
View.prototype.getLeft = function () {
	return 0;
};
View.prototype.getLongitudeDelta = function () {
	return 0;
};
View.prototype.getMapType = function () {
	return 0;
};
View.prototype.getOpacity = function () {
	return 0;
};
View.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
View.prototype.getPullBackgroundColor = function () {
	return '';
};
View.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getRegion = function () {
	return {};
};
View.prototype.getRegionFit = function () {
	return true;
};
View.prototype.getRight = function () {
	return 0;
};
View.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
View.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
View.prototype.getTintColor = function () {
	return '';
};
View.prototype.getTop = function () {
	return 0;
};
View.prototype.getTouchEnabled = function () {
	return true;
};
View.prototype.getTransform = function () {
	return {};
};
View.prototype.getUserLocation = function () {
	return true;
};
View.prototype.getViewShadowColor = function () {
	return '';
};
View.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
View.prototype.getViewShadowRadius = function () {
	return 0;
};
View.prototype.getVisible = function () {
	return true;
};
View.prototype.getWidth = function () {
	return 0;
};
View.prototype.getZIndex = function () {
	return 0;
};
View.prototype.hide = function () {
};
View.prototype.remove = function () {
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
View.prototype.setAccessibilityHidden = function () {
};
View.prototype.setAccessibilityHint = function () {
};
View.prototype.setAccessibilityLabel = function () {
};
View.prototype.setAccessibilityValue = function () {
};
View.prototype.setAnchorPoint = function () {
};
View.prototype.setAnimate = function () {
};
View.prototype.setAnimated = function () {
};
View.prototype.setAnnotations = function () {
};
View.prototype.setBackgroundColor = function () {
};
View.prototype.setBackgroundDisabledColor = function () {
};
View.prototype.setBackgroundDisabledImage = function () {
};
View.prototype.setBackgroundFocusedColor = function () {
};
View.prototype.setBackgroundFocusedImage = function () {
};
View.prototype.setBackgroundGradient = function () {
};
View.prototype.setBackgroundImage = function () {
};
View.prototype.setBackgroundLeftCap = function () {
};
View.prototype.setBackgroundRepeat = function () {
};
View.prototype.setBackgroundSelectedColor = function () {
};
View.prototype.setBackgroundSelectedImage = function () {
};
View.prototype.setBackgroundTopCap = function () {
};
View.prototype.setBorderColor = function () {
};
View.prototype.setBorderRadius = function () {
};
View.prototype.setBorderWidth = function () {
};
View.prototype.setBottom = function () {
};
View.prototype.setBubbleParent = function () {
};
View.prototype.setCenter = function () {
};
View.prototype.setClipMode = function () {
};
View.prototype.setFocusable = function () {
};
View.prototype.setHeight = function () {
};
View.prototype.setHideAnnotationWhenTouchMap = function () {
};
View.prototype.setHorizontalWrap = function () {
};
View.prototype.setKeepScreenOn = function () {
};
View.prototype.setLayout = function () {
};
View.prototype.setLeft = function () {
};
View.prototype.setLocation = function () {
};
View.prototype.setMapType = function () {
};
View.prototype.setOpacity = function () {
};
View.prototype.setPullBackgroundColor = function () {
};
View.prototype.setRegion = function () {
};
View.prototype.setRegionFit = function () {
};
View.prototype.setRight = function () {
};
View.prototype.setSoftKeyboardOnFocus = function () {
};
View.prototype.setTintColor = function () {
};
View.prototype.setTop = function () {
};
View.prototype.setTouchEnabled = function () {
};
View.prototype.setTransform = function () {
};
View.prototype.setUserLocation = function () {
};
View.prototype.setViewShadowColor = function () {
};
View.prototype.setViewShadowOffset = function () {
};
View.prototype.setViewShadowRadius = function () {
};
View.prototype.setVisible = function () {
};
View.prototype.setWidth = function () {
};
View.prototype.setZIndex = function () {
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