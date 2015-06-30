function View(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.View';
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
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

View.prototype.add = function(){};

View.prototype.addEventListener = function(){};

View.prototype.animate = function(){};

View.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

View.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

View.prototype.finishLayout = function(){};

View.prototype.fireEvent = function(){};

View.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

View.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

View.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

View.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

View.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

View.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

View.prototype.getApiName = function(){ return this.apiName; };

View.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

View.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

View.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

View.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

View.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

View.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

View.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

View.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

View.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

View.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

View.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

View.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

View.prototype.getBorderColor = function(){ return this.borderColor; };

View.prototype.getBorderRadius = function(){ return this.borderRadius; };

View.prototype.getBorderWidth = function(){ return this.borderWidth; };

View.prototype.getBottom = function(){ return this.bottom; };

View.prototype.getBubbleParent = function(){ return this.bubbleParent; };

View.prototype.getCenter = function(){ return this.center; };

View.prototype.getChildren = function(){ return this.children; };

View.prototype.getClipMode = function(){ return this.clipMode; };

View.prototype.getFocusable = function(){ return this.focusable; };

View.prototype.getHeight = function(){ return this.height; };

View.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

View.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

View.prototype.getLayout = function(){ return this.layout; };

View.prototype.getLeft = function(){ return this.left; };

View.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

View.prototype.getOpacity = function(){ return this.opacity; };

View.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

View.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

View.prototype.getRect = function(){ return this.rect; };

View.prototype.getRight = function(){ return this.right; };

View.prototype.getSize = function(){ return this.size; };

View.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

View.prototype.getTintColor = function(){ return this.tintColor; };

View.prototype.getTop = function(){ return this.top; };

View.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

View.prototype.getTransform = function(){ return this.transform; };

View.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

View.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

View.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

View.prototype.getVisible = function(){ return this.visible; };

View.prototype.getWidth = function(){ return this.width; };

View.prototype.getZIndex = function(){ return this.zIndex; };

View.prototype.hide = function(){};

View.prototype.remove = function(){};

View.prototype.removeAllChildren = function(){};

View.prototype.removeEventListener = function(){};

View.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

View.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

View.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

View.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

View.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

View.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

View.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

View.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

View.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

View.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

View.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

View.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

View.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

View.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

View.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

View.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

View.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

View.prototype.setBorderColor = function(property){ this.borderColor = property; };

View.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

View.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

View.prototype.setBottom = function(property){ this.bottom = property; };

View.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

View.prototype.setCenter = function(property){ this.center = property; };

View.prototype.setClipMode = function(property){ this.clipMode = property; };

View.prototype.setFocusable = function(property){ this.focusable = property; };

View.prototype.setHeight = function(property){ this.height = property; };

View.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

View.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

View.prototype.setLayout = function(property){ this.layout = property; };

View.prototype.setLeft = function(property){ this.left = property; };

View.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

View.prototype.setOpacity = function(property){ this.opacity = property; };

View.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

View.prototype.setRight = function(property){ this.right = property; };

View.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

View.prototype.setTintColor = function(property){ this.tintColor = property; };

View.prototype.setTop = function(property){ this.top = property; };

View.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

View.prototype.setTransform = function(property){ this.transform = property; };

View.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

View.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

View.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

View.prototype.setVisible = function(property){ this.visible = property; };

View.prototype.setWidth = function(property){ this.width = property; };

View.prototype.setZIndex = function(property){ this.zIndex = property; };

View.prototype.show = function(){};

View.prototype.startLayout = function(){};

View.prototype.toImage = function(){ return {}; };

View.prototype.updateLayout = function(){};

module.exports = function(properties){ return new View(properties); };