function LoginButton(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.Facebook.LoginButton';
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
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
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

LoginButton.prototype.add = function(){};

LoginButton.prototype.addEventListener = function(){};

LoginButton.prototype.animate = function(){};

LoginButton.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

LoginButton.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

LoginButton.prototype.finishLayout = function(){};

LoginButton.prototype.fireEvent = function(){};

LoginButton.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

LoginButton.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

LoginButton.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

LoginButton.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

LoginButton.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

LoginButton.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

LoginButton.prototype.getApiName = function(){ return this.apiName; };

LoginButton.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

LoginButton.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

LoginButton.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

LoginButton.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

LoginButton.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

LoginButton.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

LoginButton.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

LoginButton.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

LoginButton.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

LoginButton.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

LoginButton.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

LoginButton.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

LoginButton.prototype.getBorderColor = function(){ return this.borderColor; };

LoginButton.prototype.getBorderRadius = function(){ return this.borderRadius; };

LoginButton.prototype.getBorderWidth = function(){ return this.borderWidth; };

LoginButton.prototype.getBottom = function(){ return this.bottom; };

LoginButton.prototype.getBubbleParent = function(){ return this.bubbleParent; };

LoginButton.prototype.getCenter = function(){ return this.center; };

LoginButton.prototype.getChildren = function(){ return this.children; };

LoginButton.prototype.getClipMode = function(){ return this.clipMode; };

LoginButton.prototype.getEnabled = function(){ return this.enabled; };

LoginButton.prototype.getFocusable = function(){ return this.focusable; };

LoginButton.prototype.getHeight = function(){ return this.height; };

LoginButton.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

LoginButton.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

LoginButton.prototype.getLayout = function(){ return this.layout; };

LoginButton.prototype.getLeft = function(){ return this.left; };

LoginButton.prototype.getOpacity = function(){ return this.opacity; };

LoginButton.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

LoginButton.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

LoginButton.prototype.getRect = function(){ return this.rect; };

LoginButton.prototype.getRight = function(){ return this.right; };

LoginButton.prototype.getSize = function(){ return this.size; };

LoginButton.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

LoginButton.prototype.getStyle = function(){ return this.style; };

LoginButton.prototype.getTintColor = function(){ return this.tintColor; };

LoginButton.prototype.getTop = function(){ return this.top; };

LoginButton.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

LoginButton.prototype.getTransform = function(){ return this.transform; };

LoginButton.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

LoginButton.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

LoginButton.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

LoginButton.prototype.getVisible = function(){ return this.visible; };

LoginButton.prototype.getWidth = function(){ return this.width; };

LoginButton.prototype.getZIndex = function(){ return this.zIndex; };

LoginButton.prototype.hide = function(){};

LoginButton.prototype.remove = function(){};

LoginButton.prototype.removeAllChildren = function(){};

LoginButton.prototype.removeEventListener = function(){};

LoginButton.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

LoginButton.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

LoginButton.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

LoginButton.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

LoginButton.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

LoginButton.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

LoginButton.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

LoginButton.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

LoginButton.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

LoginButton.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

LoginButton.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

LoginButton.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

LoginButton.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

LoginButton.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

LoginButton.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

LoginButton.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

LoginButton.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

LoginButton.prototype.setBorderColor = function(property){ this.borderColor = property; };

LoginButton.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

LoginButton.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

LoginButton.prototype.setBottom = function(property){ this.bottom = property; };

LoginButton.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

LoginButton.prototype.setCenter = function(property){ this.center = property; };

LoginButton.prototype.setClipMode = function(property){ this.clipMode = property; };

LoginButton.prototype.setEnabled = function(property){ this.enabled = property; };

LoginButton.prototype.setFocusable = function(property){ this.focusable = property; };

LoginButton.prototype.setHeight = function(property){ this.height = property; };

LoginButton.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

LoginButton.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

LoginButton.prototype.setLayout = function(property){ this.layout = property; };

LoginButton.prototype.setLeft = function(property){ this.left = property; };

LoginButton.prototype.setOpacity = function(property){ this.opacity = property; };

LoginButton.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

LoginButton.prototype.setRight = function(property){ this.right = property; };

LoginButton.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

LoginButton.prototype.setStyle = function(property){ this.style = property; };

LoginButton.prototype.setTintColor = function(property){ this.tintColor = property; };

LoginButton.prototype.setTop = function(property){ this.top = property; };

LoginButton.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

LoginButton.prototype.setTransform = function(property){ this.transform = property; };

LoginButton.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

LoginButton.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

LoginButton.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

LoginButton.prototype.setVisible = function(property){ this.visible = property; };

LoginButton.prototype.setWidth = function(property){ this.width = property; };

LoginButton.prototype.setZIndex = function(property){ this.zIndex = property; };

LoginButton.prototype.show = function(){};

LoginButton.prototype.startLayout = function(){};

LoginButton.prototype.toImage = function(){ return {}; };

LoginButton.prototype.updateLayout = function(){};

module.exports = function(properties){ return new LoginButton(properties); };