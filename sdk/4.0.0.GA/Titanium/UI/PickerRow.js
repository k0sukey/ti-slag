function PickerRow(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.PickerRow';
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
	this.color = properties.color || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
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
	this.title = properties.title || undefined;
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

PickerRow.prototype.add = function(){};

PickerRow.prototype.addEventListener = function(){};

PickerRow.prototype.animate = function(){};

PickerRow.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

PickerRow.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

PickerRow.prototype.finishLayout = function(){};

PickerRow.prototype.fireEvent = function(){};

PickerRow.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

PickerRow.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

PickerRow.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

PickerRow.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

PickerRow.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

PickerRow.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

PickerRow.prototype.getApiName = function(){ return this.apiName; };

PickerRow.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

PickerRow.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

PickerRow.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

PickerRow.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

PickerRow.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

PickerRow.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

PickerRow.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

PickerRow.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

PickerRow.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

PickerRow.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

PickerRow.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

PickerRow.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

PickerRow.prototype.getBorderColor = function(){ return this.borderColor; };

PickerRow.prototype.getBorderRadius = function(){ return this.borderRadius; };

PickerRow.prototype.getBorderWidth = function(){ return this.borderWidth; };

PickerRow.prototype.getBottom = function(){ return this.bottom; };

PickerRow.prototype.getBubbleParent = function(){ return this.bubbleParent; };

PickerRow.prototype.getCenter = function(){ return this.center; };

PickerRow.prototype.getChildren = function(){ return this.children; };

PickerRow.prototype.getClipMode = function(){ return this.clipMode; };

PickerRow.prototype.getColor = function(){ return this.color; };

PickerRow.prototype.getFocusable = function(){ return this.focusable; };

PickerRow.prototype.getHeight = function(){ return this.height; };

PickerRow.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

PickerRow.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

PickerRow.prototype.getLayout = function(){ return this.layout; };

PickerRow.prototype.getLeft = function(){ return this.left; };

PickerRow.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

PickerRow.prototype.getOpacity = function(){ return this.opacity; };

PickerRow.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

PickerRow.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

PickerRow.prototype.getRect = function(){ return this.rect; };

PickerRow.prototype.getRight = function(){ return this.right; };

PickerRow.prototype.getSize = function(){ return this.size; };

PickerRow.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

PickerRow.prototype.getTintColor = function(){ return this.tintColor; };

PickerRow.prototype.getTitle = function(){ return this.title; };

PickerRow.prototype.getTop = function(){ return this.top; };

PickerRow.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

PickerRow.prototype.getTransform = function(){ return this.transform; };

PickerRow.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

PickerRow.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

PickerRow.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

PickerRow.prototype.getVisible = function(){ return this.visible; };

PickerRow.prototype.getWidth = function(){ return this.width; };

PickerRow.prototype.getZIndex = function(){ return this.zIndex; };

PickerRow.prototype.hide = function(){};

PickerRow.prototype.remove = function(){};

PickerRow.prototype.removeAllChildren = function(){};

PickerRow.prototype.removeEventListener = function(){};

PickerRow.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

PickerRow.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

PickerRow.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

PickerRow.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

PickerRow.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

PickerRow.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

PickerRow.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

PickerRow.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

PickerRow.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

PickerRow.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

PickerRow.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

PickerRow.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

PickerRow.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

PickerRow.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

PickerRow.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

PickerRow.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

PickerRow.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

PickerRow.prototype.setBorderColor = function(property){ this.borderColor = property; };

PickerRow.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

PickerRow.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

PickerRow.prototype.setBottom = function(property){ this.bottom = property; };

PickerRow.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

PickerRow.prototype.setCenter = function(property){ this.center = property; };

PickerRow.prototype.setClipMode = function(property){ this.clipMode = property; };

PickerRow.prototype.setColor = function(property){ this.color = property; };

PickerRow.prototype.setFocusable = function(property){ this.focusable = property; };

PickerRow.prototype.setFont = function(property){ this.font = property; };

PickerRow.prototype.setHeight = function(property){ this.height = property; };

PickerRow.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

PickerRow.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

PickerRow.prototype.setLayout = function(property){ this.layout = property; };

PickerRow.prototype.setLeft = function(property){ this.left = property; };

PickerRow.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

PickerRow.prototype.setOpacity = function(property){ this.opacity = property; };

PickerRow.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

PickerRow.prototype.setRight = function(property){ this.right = property; };

PickerRow.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

PickerRow.prototype.setTintColor = function(property){ this.tintColor = property; };

PickerRow.prototype.setTitle = function(property){ this.title = property; };

PickerRow.prototype.setTop = function(property){ this.top = property; };

PickerRow.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

PickerRow.prototype.setTransform = function(property){ this.transform = property; };

PickerRow.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

PickerRow.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

PickerRow.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

PickerRow.prototype.setVisible = function(property){ this.visible = property; };

PickerRow.prototype.setWidth = function(property){ this.width = property; };

PickerRow.prototype.setZIndex = function(property){ this.zIndex = property; };

PickerRow.prototype.show = function(){};

PickerRow.prototype.startLayout = function(){};

PickerRow.prototype.toImage = function(){ return {}; };

PickerRow.prototype.updateLayout = function(){};

module.exports = function(properties){ return new PickerRow(properties); };