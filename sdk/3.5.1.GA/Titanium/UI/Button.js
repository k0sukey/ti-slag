function Button(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Button';
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
	this.disabledColor = properties.disabledColor || undefined;
	this.enabled = properties.enabled || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.image = properties.image || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.selectedColor = properties.selectedColor || undefined;
	this.shadowColor = properties.shadowColor || undefined;
	this.shadowOffset = properties.shadowOffset || undefined;
	this.shadowRadius = properties.shadowRadius || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.systemButton = properties.systemButton || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

Button.prototype.add = function(){};

Button.prototype.addEventListener = function(){};

Button.prototype.animate = function(){};

Button.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Button.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

Button.prototype.finishLayout = function(){};

Button.prototype.fireEvent = function(){};

Button.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

Button.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

Button.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

Button.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

Button.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

Button.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

Button.prototype.getApiName = function(){ return this.apiName; };

Button.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

Button.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

Button.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

Button.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

Button.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

Button.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

Button.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

Button.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

Button.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

Button.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

Button.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

Button.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

Button.prototype.getBorderColor = function(){ return this.borderColor; };

Button.prototype.getBorderRadius = function(){ return this.borderRadius; };

Button.prototype.getBorderWidth = function(){ return this.borderWidth; };

Button.prototype.getBottom = function(){ return this.bottom; };

Button.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Button.prototype.getCenter = function(){ return this.center; };

Button.prototype.getChildren = function(){ return this.children; };

Button.prototype.getClipMode = function(){ return this.clipMode; };

Button.prototype.getColor = function(){ return this.color; };

Button.prototype.getDisabledColor = function(){ return this.disabledColor; };

Button.prototype.getEnabled = function(){ return this.enabled; };

Button.prototype.getFocusable = function(){ return this.focusable; };

Button.prototype.getHeight = function(){ return this.height; };

Button.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

Button.prototype.getImage = function(){ return this.image; };

Button.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

Button.prototype.getLayout = function(){ return this.layout; };

Button.prototype.getLeft = function(){ return this.left; };

Button.prototype.getOpacity = function(){ return this.opacity; };

Button.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

Button.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

Button.prototype.getRect = function(){ return this.rect; };

Button.prototype.getRight = function(){ return this.right; };

Button.prototype.getSelectedColor = function(){ return this.selectedColor; };

Button.prototype.getShadowColor = function(){ return this.shadowColor; };

Button.prototype.getShadowRadius = function(){ return this.shadowRadius; };

Button.prototype.getSize = function(){ return this.size; };

Button.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

Button.prototype.getStyle = function(){ return this.style; };

Button.prototype.getSystemButton = function(){ return this.systemButton; };

Button.prototype.getTextAlign = function(){ return this.textAlign; };

Button.prototype.getTintColor = function(){ return this.tintColor; };

Button.prototype.getTitle = function(){ return this.title; };

Button.prototype.getTitleid = function(){ return this.titleid; };

Button.prototype.getTop = function(){ return this.top; };

Button.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

Button.prototype.getTransform = function(){ return this.transform; };

Button.prototype.getVerticalAlign = function(){ return this.verticalAlign; };

Button.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

Button.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

Button.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

Button.prototype.getVisible = function(){ return this.visible; };

Button.prototype.getWidth = function(){ return this.width; };

Button.prototype.getZIndex = function(){ return this.zIndex; };

Button.prototype.hide = function(){};

Button.prototype.remove = function(){};

Button.prototype.removeAllChildren = function(){};

Button.prototype.removeEventListener = function(){};

Button.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

Button.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

Button.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

Button.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

Button.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

Button.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

Button.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

Button.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

Button.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

Button.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

Button.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

Button.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

Button.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

Button.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

Button.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

Button.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

Button.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

Button.prototype.setBorderColor = function(property){ this.borderColor = property; };

Button.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

Button.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

Button.prototype.setBottom = function(property){ this.bottom = property; };

Button.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Button.prototype.setCenter = function(property){ this.center = property; };

Button.prototype.setClipMode = function(property){ this.clipMode = property; };

Button.prototype.setColor = function(property){ this.color = property; };

Button.prototype.setDisabledColor = function(property){ this.disabledColor = property; };

Button.prototype.setEnabled = function(property){ this.enabled = property; };

Button.prototype.setFocusable = function(property){ this.focusable = property; };

Button.prototype.setFont = function(property){ this.font = property; };

Button.prototype.setHeight = function(property){ this.height = property; };

Button.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

Button.prototype.setImage = function(property){ this.image = property; };

Button.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

Button.prototype.setLayout = function(property){ this.layout = property; };

Button.prototype.setLeft = function(property){ this.left = property; };

Button.prototype.setOpacity = function(property){ this.opacity = property; };

Button.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

Button.prototype.setRight = function(property){ this.right = property; };

Button.prototype.setSelectedColor = function(property){ this.selectedColor = property; };

Button.prototype.setShadowColor = function(property){ this.shadowColor = property; };

Button.prototype.setShadowOffset = function(property){ this.shadowOffset = property; };

Button.prototype.setShadowRadius = function(property){ this.shadowRadius = property; };

Button.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

Button.prototype.setStyle = function(property){ this.style = property; };

Button.prototype.setSystemButton = function(property){ this.systemButton = property; };

Button.prototype.setTextAlign = function(property){ this.textAlign = property; };

Button.prototype.setTintColor = function(property){ this.tintColor = property; };

Button.prototype.setTitle = function(property){ this.title = property; };

Button.prototype.setTitleid = function(property){ this.titleid = property; };

Button.prototype.setTop = function(property){ this.top = property; };

Button.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

Button.prototype.setTransform = function(property){ this.transform = property; };

Button.prototype.setVerticalAlign = function(property){ this.verticalAlign = property; };

Button.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

Button.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

Button.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

Button.prototype.setVisible = function(property){ this.visible = property; };

Button.prototype.setWidth = function(property){ this.width = property; };

Button.prototype.setZIndex = function(property){ this.zIndex = property; };

Button.prototype.show = function(){};

Button.prototype.startLayout = function(){};

Button.prototype.toImage = function(){ return {}; };

Button.prototype.updateLayout = function(){};

module.exports = function(properties){ return new Button(properties); };