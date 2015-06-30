function Notification(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.apiName = 'Titanium.UI.Notification';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.duration = properties.duration || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.horizontalMargin = properties.horizontalMargin || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.message = properties.message || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalMargin = properties.verticalMargin || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.xOffset = properties.xOffset || undefined;
	this.yOffset = properties.yOffset || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

Notification.prototype.add = function(){};

Notification.prototype.addEventListener = function(){};

Notification.prototype.animate = function(){};

Notification.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Notification.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

Notification.prototype.finishLayout = function(){};

Notification.prototype.fireEvent = function(){};

Notification.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

Notification.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

Notification.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

Notification.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

Notification.prototype.getApiName = function(){ return this.apiName; };

Notification.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

Notification.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

Notification.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

Notification.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

Notification.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

Notification.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

Notification.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

Notification.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

Notification.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

Notification.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

Notification.prototype.getBorderColor = function(){ return this.borderColor; };

Notification.prototype.getBorderRadius = function(){ return this.borderRadius; };

Notification.prototype.getBorderWidth = function(){ return this.borderWidth; };

Notification.prototype.getBottom = function(){ return this.bottom; };

Notification.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Notification.prototype.getCenter = function(){ return this.center; };

Notification.prototype.getChildren = function(){ return this.children; };

Notification.prototype.getDuration = function(){ return this.duration; };

Notification.prototype.getFocusable = function(){ return this.focusable; };

Notification.prototype.getHeight = function(){ return this.height; };

Notification.prototype.getHorizontalMargin = function(){ return this.horizontalMargin; };

Notification.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

Notification.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

Notification.prototype.getLayout = function(){ return this.layout; };

Notification.prototype.getLeft = function(){ return this.left; };

Notification.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Notification.prototype.getMessage = function(){ return this.message; };

Notification.prototype.getOpacity = function(){ return this.opacity; };

Notification.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

Notification.prototype.getRect = function(){ return this.rect; };

Notification.prototype.getRight = function(){ return this.right; };

Notification.prototype.getSize = function(){ return this.size; };

Notification.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

Notification.prototype.getTop = function(){ return this.top; };

Notification.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

Notification.prototype.getTransform = function(){ return this.transform; };

Notification.prototype.getVerticalMargin = function(){ return this.verticalMargin; };

Notification.prototype.getVisible = function(){ return this.visible; };

Notification.prototype.getWidth = function(){ return this.width; };

Notification.prototype.getXOffset = function(){ return this.xOffset; };

Notification.prototype.getYOffset = function(){ return this.yOffset; };

Notification.prototype.getZIndex = function(){ return this.zIndex; };

Notification.prototype.hide = function(){};

Notification.prototype.remove = function(){};

Notification.prototype.removeAllChildren = function(){};

Notification.prototype.removeEventListener = function(){};

Notification.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

Notification.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

Notification.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

Notification.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

Notification.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

Notification.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

Notification.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

Notification.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

Notification.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

Notification.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

Notification.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

Notification.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

Notification.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

Notification.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

Notification.prototype.setBorderColor = function(property){ this.borderColor = property; };

Notification.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

Notification.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

Notification.prototype.setBottom = function(property){ this.bottom = property; };

Notification.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Notification.prototype.setCenter = function(property){ this.center = property; };

Notification.prototype.setDuration = function(property){ this.duration = property; };

Notification.prototype.setFocusable = function(property){ this.focusable = property; };

Notification.prototype.setHeight = function(property){ this.height = property; };

Notification.prototype.setHorizontalMargin = function(property){ this.horizontalMargin = property; };

Notification.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

Notification.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

Notification.prototype.setLayout = function(property){ this.layout = property; };

Notification.prototype.setLeft = function(property){ this.left = property; };

Notification.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Notification.prototype.setMessage = function(property){ this.message = property; };

Notification.prototype.setOpacity = function(property){ this.opacity = property; };

Notification.prototype.setRight = function(property){ this.right = property; };

Notification.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

Notification.prototype.setTop = function(property){ this.top = property; };

Notification.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

Notification.prototype.setTransform = function(property){ this.transform = property; };

Notification.prototype.setVerticalMargin = function(property){ this.verticalMargin = property; };

Notification.prototype.setVisible = function(property){ this.visible = property; };

Notification.prototype.setWidth = function(property){ this.width = property; };

Notification.prototype.setXOffset = function(property){ this.xOffset = property; };

Notification.prototype.setYOffset = function(property){ this.yOffset = property; };

Notification.prototype.setZIndex = function(property){ this.zIndex = property; };

Notification.prototype.show = function(){};

Notification.prototype.startLayout = function(){};

Notification.prototype.toImage = function(){ return {}; };

Notification.prototype.updateLayout = function(){};

module.exports = function(properties){ return new Notification(properties); };