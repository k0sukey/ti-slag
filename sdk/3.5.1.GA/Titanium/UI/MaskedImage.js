function MaskedImage(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.MaskedImage';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.image = properties.image || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.mask = properties.mask || undefined;
	this.mode = properties.mode || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.tint = properties.tint || undefined;
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

MaskedImage.prototype.add = function(){};

MaskedImage.prototype.addEventListener = function(){};

MaskedImage.prototype.animate = function(){};

MaskedImage.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

MaskedImage.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

MaskedImage.prototype.finishLayout = function(){};

MaskedImage.prototype.fireEvent = function(){};

MaskedImage.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

MaskedImage.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

MaskedImage.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

MaskedImage.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

MaskedImage.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

MaskedImage.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

MaskedImage.prototype.getApiName = function(){ return this.apiName; };

MaskedImage.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

MaskedImage.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

MaskedImage.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

MaskedImage.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

MaskedImage.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

MaskedImage.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

MaskedImage.prototype.getBorderColor = function(){ return this.borderColor; };

MaskedImage.prototype.getBorderRadius = function(){ return this.borderRadius; };

MaskedImage.prototype.getBorderWidth = function(){ return this.borderWidth; };

MaskedImage.prototype.getBottom = function(){ return this.bottom; };

MaskedImage.prototype.getBubbleParent = function(){ return this.bubbleParent; };

MaskedImage.prototype.getCenter = function(){ return this.center; };

MaskedImage.prototype.getChildren = function(){ return this.children; };

MaskedImage.prototype.getClipMode = function(){ return this.clipMode; };

MaskedImage.prototype.getHeight = function(){ return this.height; };

MaskedImage.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

MaskedImage.prototype.getImage = function(){ return this.image; };

MaskedImage.prototype.getLayout = function(){ return this.layout; };

MaskedImage.prototype.getLeft = function(){ return this.left; };

MaskedImage.prototype.getMask = function(){ return this.mask; };

MaskedImage.prototype.getMode = function(){ return this.mode; };

MaskedImage.prototype.getOpacity = function(){ return this.opacity; };

MaskedImage.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

MaskedImage.prototype.getRect = function(){ return this.rect; };

MaskedImage.prototype.getRight = function(){ return this.right; };

MaskedImage.prototype.getSize = function(){ return this.size; };

MaskedImage.prototype.getTint = function(){ return this.tint; };

MaskedImage.prototype.getTintColor = function(){ return this.tintColor; };

MaskedImage.prototype.getTop = function(){ return this.top; };

MaskedImage.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

MaskedImage.prototype.getTransform = function(){ return this.transform; };

MaskedImage.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

MaskedImage.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

MaskedImage.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

MaskedImage.prototype.getVisible = function(){ return this.visible; };

MaskedImage.prototype.getWidth = function(){ return this.width; };

MaskedImage.prototype.getZIndex = function(){ return this.zIndex; };

MaskedImage.prototype.hide = function(){};

MaskedImage.prototype.remove = function(){};

MaskedImage.prototype.removeAllChildren = function(){};

MaskedImage.prototype.removeEventListener = function(){};

MaskedImage.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

MaskedImage.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

MaskedImage.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

MaskedImage.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

MaskedImage.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

MaskedImage.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

MaskedImage.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

MaskedImage.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

MaskedImage.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

MaskedImage.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

MaskedImage.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

MaskedImage.prototype.setBorderColor = function(property){ this.borderColor = property; };

MaskedImage.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

MaskedImage.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

MaskedImage.prototype.setBottom = function(property){ this.bottom = property; };

MaskedImage.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

MaskedImage.prototype.setCenter = function(property){ this.center = property; };

MaskedImage.prototype.setClipMode = function(property){ this.clipMode = property; };

MaskedImage.prototype.setHeight = function(property){ this.height = property; };

MaskedImage.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

MaskedImage.prototype.setImage = function(property){ this.image = property; };

MaskedImage.prototype.setLayout = function(property){ this.layout = property; };

MaskedImage.prototype.setLeft = function(property){ this.left = property; };

MaskedImage.prototype.setMask = function(property){ this.mask = property; };

MaskedImage.prototype.setMode = function(property){ this.mode = property; };

MaskedImage.prototype.setOpacity = function(property){ this.opacity = property; };

MaskedImage.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

MaskedImage.prototype.setRight = function(property){ this.right = property; };

MaskedImage.prototype.setTint = function(property){ this.tint = property; };

MaskedImage.prototype.setTintColor = function(property){ this.tintColor = property; };

MaskedImage.prototype.setTop = function(property){ this.top = property; };

MaskedImage.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

MaskedImage.prototype.setTransform = function(property){ this.transform = property; };

MaskedImage.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

MaskedImage.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

MaskedImage.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

MaskedImage.prototype.setVisible = function(property){ this.visible = property; };

MaskedImage.prototype.setWidth = function(property){ this.width = property; };

MaskedImage.prototype.setZIndex = function(property){ this.zIndex = property; };

MaskedImage.prototype.show = function(){};

MaskedImage.prototype.startLayout = function(){};

MaskedImage.prototype.toImage = function(){ return {}; };

MaskedImage.prototype.updateLayout = function(){};

module.exports = function(properties){ return new MaskedImage(properties); };