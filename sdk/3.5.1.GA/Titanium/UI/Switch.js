function Switch(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Switch';
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
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.onTintColor = properties.onTintColor || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.thumbTintColor = properties.thumbTintColor || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleOff = properties.titleOff || undefined;
	this.titleOn = properties.titleOn || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

Switch.prototype.add = function(){};

Switch.prototype.addEventListener = function(){};

Switch.prototype.animate = function(){};

Switch.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Switch.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

Switch.prototype.finishLayout = function(){};

Switch.prototype.fireEvent = function(){};

Switch.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

Switch.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

Switch.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

Switch.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

Switch.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

Switch.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

Switch.prototype.getApiName = function(){ return this.apiName; };

Switch.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

Switch.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

Switch.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

Switch.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

Switch.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

Switch.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

Switch.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

Switch.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

Switch.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

Switch.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

Switch.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

Switch.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

Switch.prototype.getBorderColor = function(){ return this.borderColor; };

Switch.prototype.getBorderRadius = function(){ return this.borderRadius; };

Switch.prototype.getBorderWidth = function(){ return this.borderWidth; };

Switch.prototype.getBottom = function(){ return this.bottom; };

Switch.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Switch.prototype.getCenter = function(){ return this.center; };

Switch.prototype.getChildren = function(){ return this.children; };

Switch.prototype.getClipMode = function(){ return this.clipMode; };

Switch.prototype.getColor = function(){ return this.color; };

Switch.prototype.getEnabled = function(){ return this.enabled; };

Switch.prototype.getFocusable = function(){ return this.focusable; };

Switch.prototype.getHeight = function(){ return this.height; };

Switch.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

Switch.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

Switch.prototype.getLayout = function(){ return this.layout; };

Switch.prototype.getLeft = function(){ return this.left; };

Switch.prototype.getOnTintColor = function(){ return this.onTintColor; };

Switch.prototype.getOpacity = function(){ return this.opacity; };

Switch.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

Switch.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

Switch.prototype.getRect = function(){ return this.rect; };

Switch.prototype.getRight = function(){ return this.right; };

Switch.prototype.getSize = function(){ return this.size; };

Switch.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

Switch.prototype.getStyle = function(){ return this.style; };

Switch.prototype.getTextAlign = function(){ return this.textAlign; };

Switch.prototype.getThumbTintColor = function(){ return this.thumbTintColor; };

Switch.prototype.getTintColor = function(){ return this.tintColor; };

Switch.prototype.getTitle = function(){ return this.title; };

Switch.prototype.getTitleOff = function(){ return this.titleOff; };

Switch.prototype.getTitleOn = function(){ return this.titleOn; };

Switch.prototype.getTop = function(){ return this.top; };

Switch.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

Switch.prototype.getTransform = function(){ return this.transform; };

Switch.prototype.getValue = function(){ return this.value; };

Switch.prototype.getVerticalAlign = function(){ return this.verticalAlign; };

Switch.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

Switch.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

Switch.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

Switch.prototype.getVisible = function(){ return this.visible; };

Switch.prototype.getWidth = function(){ return this.width; };

Switch.prototype.getZIndex = function(){ return this.zIndex; };

Switch.prototype.hide = function(){};

Switch.prototype.remove = function(){};

Switch.prototype.removeAllChildren = function(){};

Switch.prototype.removeEventListener = function(){};

Switch.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

Switch.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

Switch.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

Switch.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

Switch.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

Switch.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

Switch.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

Switch.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

Switch.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

Switch.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

Switch.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

Switch.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

Switch.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

Switch.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

Switch.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

Switch.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

Switch.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

Switch.prototype.setBorderColor = function(property){ this.borderColor = property; };

Switch.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

Switch.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

Switch.prototype.setBottom = function(property){ this.bottom = property; };

Switch.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Switch.prototype.setCenter = function(property){ this.center = property; };

Switch.prototype.setClipMode = function(property){ this.clipMode = property; };

Switch.prototype.setColor = function(property){ this.color = property; };

Switch.prototype.setEnabled = function(property){ this.enabled = property; };

Switch.prototype.setFocusable = function(property){ this.focusable = property; };

Switch.prototype.setFont = function(property){ this.font = property; };

Switch.prototype.setHeight = function(property){ this.height = property; };

Switch.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

Switch.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

Switch.prototype.setLayout = function(property){ this.layout = property; };

Switch.prototype.setLeft = function(property){ this.left = property; };

Switch.prototype.setOnTintColor = function(property){ this.onTintColor = property; };

Switch.prototype.setOpacity = function(property){ this.opacity = property; };

Switch.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

Switch.prototype.setRight = function(property){ this.right = property; };

Switch.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

Switch.prototype.setStyle = function(property){ this.style = property; };

Switch.prototype.setTextAlign = function(property){ this.textAlign = property; };

Switch.prototype.setThumbTintColor = function(property){ this.thumbTintColor = property; };

Switch.prototype.setTintColor = function(property){ this.tintColor = property; };

Switch.prototype.setTitle = function(property){ this.title = property; };

Switch.prototype.setTitleOff = function(property){ this.titleOff = property; };

Switch.prototype.setTitleOn = function(property){ this.titleOn = property; };

Switch.prototype.setTop = function(property){ this.top = property; };

Switch.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

Switch.prototype.setTransform = function(property){ this.transform = property; };

Switch.prototype.setValue = function(property){ this.value = property; };

Switch.prototype.setVerticalAlign = function(property){ this.verticalAlign = property; };

Switch.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

Switch.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

Switch.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

Switch.prototype.setVisible = function(property){ this.visible = property; };

Switch.prototype.setWidth = function(property){ this.width = property; };

Switch.prototype.setZIndex = function(property){ this.zIndex = property; };

Switch.prototype.show = function(){};

Switch.prototype.startLayout = function(){};

Switch.prototype.toImage = function(){ return {}; };

Switch.prototype.updateLayout = function(){};

module.exports = function(properties){ return new Switch(properties); };