function ImageView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.animating = properties.animating || undefined;
	this.apiName = 'Titanium.UI.ImageView';
	this.autorotate = properties.autorotate || undefined;
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
	this.decodeRetries = properties.decodeRetries || undefined;
	this.defaultImage = properties.defaultImage || undefined;
	this.duration = properties.duration || undefined;
	this.enableZoomControls = properties.enableZoomControls || undefined;
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hires = properties.hires || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.image = properties.image || undefined;
	this.images = properties.images || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.paused = properties.paused || undefined;
	this.preventDefaultImage = properties.preventDefaultImage || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.repeatCount = properties.repeatCount || undefined;
	this.reverse = properties.reverse || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.url = properties.url || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

ImageView.prototype.add = function(){};

ImageView.prototype.addEventListener = function(){};

ImageView.prototype.animate = function(){};

ImageView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ImageView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

ImageView.prototype.finishLayout = function(){};

ImageView.prototype.fireEvent = function(){};

ImageView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

ImageView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

ImageView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

ImageView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

ImageView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

ImageView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

ImageView.prototype.getAnimating = function(){ return this.animating; };

ImageView.prototype.getApiName = function(){ return this.apiName; };

ImageView.prototype.getAutorotate = function(){ return this.autorotate; };

ImageView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

ImageView.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

ImageView.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

ImageView.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

ImageView.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

ImageView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

ImageView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

ImageView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

ImageView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

ImageView.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

ImageView.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

ImageView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

ImageView.prototype.getBorderColor = function(){ return this.borderColor; };

ImageView.prototype.getBorderRadius = function(){ return this.borderRadius; };

ImageView.prototype.getBorderWidth = function(){ return this.borderWidth; };

ImageView.prototype.getBottom = function(){ return this.bottom; };

ImageView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ImageView.prototype.getCenter = function(){ return this.center; };

ImageView.prototype.getChildren = function(){ return this.children; };

ImageView.prototype.getClipMode = function(){ return this.clipMode; };

ImageView.prototype.getDecodeRetries = function(){ return this.decodeRetries; };

ImageView.prototype.getDefaultImage = function(){ return this.defaultImage; };

ImageView.prototype.getDuration = function(){ return this.duration; };

ImageView.prototype.getEnableZoomControls = function(){ return this.enableZoomControls; };

ImageView.prototype.getEnabled = function(){ return this.enabled; };

ImageView.prototype.getFocusable = function(){ return this.focusable; };

ImageView.prototype.getHeight = function(){ return this.height; };

ImageView.prototype.getHires = function(){ return this.hires; };

ImageView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

ImageView.prototype.getImage = function(){ return this.image; };

ImageView.prototype.getImages = function(){ return this.images; };

ImageView.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

ImageView.prototype.getLayout = function(){ return this.layout; };

ImageView.prototype.getLeft = function(){ return this.left; };

ImageView.prototype.getOpacity = function(){ return this.opacity; };

ImageView.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

ImageView.prototype.getPaused = function(){ return this.paused; };

ImageView.prototype.getPreventDefaultImage = function(){ return this.preventDefaultImage; };

ImageView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

ImageView.prototype.getRect = function(){ return this.rect; };

ImageView.prototype.getRepeatCount = function(){ return this.repeatCount; };

ImageView.prototype.getReverse = function(){ return this.reverse; };

ImageView.prototype.getRight = function(){ return this.right; };

ImageView.prototype.getSize = function(){ return this.size; };

ImageView.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

ImageView.prototype.getTintColor = function(){ return this.tintColor; };

ImageView.prototype.getTop = function(){ return this.top; };

ImageView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

ImageView.prototype.getTransform = function(){ return this.transform; };

ImageView.prototype.getUrl = function(){ return this.url; };

ImageView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

ImageView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

ImageView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

ImageView.prototype.getVisible = function(){ return this.visible; };

ImageView.prototype.getWidth = function(){ return this.width; };

ImageView.prototype.getZIndex = function(){ return this.zIndex; };

ImageView.prototype.hide = function(){};

ImageView.prototype.pause = function(){};

ImageView.prototype.remove = function(){};

ImageView.prototype.removeAllChildren = function(){};

ImageView.prototype.removeEventListener = function(){};

ImageView.prototype.resume = function(){};

ImageView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

ImageView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

ImageView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

ImageView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

ImageView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

ImageView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

ImageView.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

ImageView.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

ImageView.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

ImageView.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

ImageView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

ImageView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

ImageView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

ImageView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

ImageView.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

ImageView.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

ImageView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

ImageView.prototype.setBorderColor = function(property){ this.borderColor = property; };

ImageView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

ImageView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

ImageView.prototype.setBottom = function(property){ this.bottom = property; };

ImageView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ImageView.prototype.setCenter = function(property){ this.center = property; };

ImageView.prototype.setClipMode = function(property){ this.clipMode = property; };

ImageView.prototype.setDecodeRetries = function(property){ this.decodeRetries = property; };

ImageView.prototype.setDefaultImage = function(property){ this.defaultImage = property; };

ImageView.prototype.setDuration = function(property){ this.duration = property; };

ImageView.prototype.setEnableZoomControls = function(property){ this.enableZoomControls = property; };

ImageView.prototype.setEnabled = function(property){ this.enabled = property; };

ImageView.prototype.setFocusable = function(property){ this.focusable = property; };

ImageView.prototype.setHeight = function(property){ this.height = property; };

ImageView.prototype.setHires = function(property){ this.hires = property; };

ImageView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

ImageView.prototype.setImage = function(property){ this.image = property; };

ImageView.prototype.setImages = function(property){ this.images = property; };

ImageView.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

ImageView.prototype.setLayout = function(property){ this.layout = property; };

ImageView.prototype.setLeft = function(property){ this.left = property; };

ImageView.prototype.setOpacity = function(property){ this.opacity = property; };

ImageView.prototype.setPreventDefaultImage = function(property){ this.preventDefaultImage = property; };

ImageView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

ImageView.prototype.setRepeatCount = function(property){ this.repeatCount = property; };

ImageView.prototype.setReverse = function(property){ this.reverse = property; };

ImageView.prototype.setRight = function(property){ this.right = property; };

ImageView.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

ImageView.prototype.setTintColor = function(property){ this.tintColor = property; };

ImageView.prototype.setTop = function(property){ this.top = property; };

ImageView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

ImageView.prototype.setTransform = function(property){ this.transform = property; };

ImageView.prototype.setUrl = function(property){ this.url = property; };

ImageView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

ImageView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

ImageView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

ImageView.prototype.setVisible = function(property){ this.visible = property; };

ImageView.prototype.setWidth = function(property){ this.width = property; };

ImageView.prototype.setZIndex = function(property){ this.zIndex = property; };

ImageView.prototype.show = function(){};

ImageView.prototype.start = function(){};

ImageView.prototype.startLayout = function(){};

ImageView.prototype.stop = function(){};

ImageView.prototype.toBlob = function(){};

ImageView.prototype.toImage = function(){ return {}; };

ImageView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new ImageView(properties); };