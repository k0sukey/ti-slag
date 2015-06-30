function NavigationGroup(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iPhone.NavigationGroup';
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
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.window = properties.window || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

NavigationGroup.prototype.add = function(){};

NavigationGroup.prototype.addEventListener = function(){};

NavigationGroup.prototype.animate = function(){};

NavigationGroup.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

NavigationGroup.prototype.close = function(){};

NavigationGroup.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

NavigationGroup.prototype.finishLayout = function(){};

NavigationGroup.prototype.fireEvent = function(){};

NavigationGroup.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

NavigationGroup.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

NavigationGroup.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

NavigationGroup.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

NavigationGroup.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

NavigationGroup.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

NavigationGroup.prototype.getApiName = function(){ return this.apiName; };

NavigationGroup.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

NavigationGroup.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

NavigationGroup.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

NavigationGroup.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

NavigationGroup.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

NavigationGroup.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

NavigationGroup.prototype.getBorderColor = function(){ return this.borderColor; };

NavigationGroup.prototype.getBorderRadius = function(){ return this.borderRadius; };

NavigationGroup.prototype.getBorderWidth = function(){ return this.borderWidth; };

NavigationGroup.prototype.getBottom = function(){ return this.bottom; };

NavigationGroup.prototype.getBubbleParent = function(){ return this.bubbleParent; };

NavigationGroup.prototype.getCenter = function(){ return this.center; };

NavigationGroup.prototype.getChildren = function(){ return this.children; };

NavigationGroup.prototype.getClipMode = function(){ return this.clipMode; };

NavigationGroup.prototype.getHeight = function(){ return this.height; };

NavigationGroup.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

NavigationGroup.prototype.getLayout = function(){ return this.layout; };

NavigationGroup.prototype.getLeft = function(){ return this.left; };

NavigationGroup.prototype.getOpacity = function(){ return this.opacity; };

NavigationGroup.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

NavigationGroup.prototype.getRect = function(){ return this.rect; };

NavigationGroup.prototype.getRight = function(){ return this.right; };

NavigationGroup.prototype.getSize = function(){ return this.size; };

NavigationGroup.prototype.getTintColor = function(){ return this.tintColor; };

NavigationGroup.prototype.getTop = function(){ return this.top; };

NavigationGroup.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

NavigationGroup.prototype.getTransform = function(){ return this.transform; };

NavigationGroup.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

NavigationGroup.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

NavigationGroup.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

NavigationGroup.prototype.getVisible = function(){ return this.visible; };

NavigationGroup.prototype.getWidth = function(){ return this.width; };

NavigationGroup.prototype.getWindow = function(){ return this.window; };

NavigationGroup.prototype.getZIndex = function(){ return this.zIndex; };

NavigationGroup.prototype.hide = function(){};

NavigationGroup.prototype.open = function(){};

NavigationGroup.prototype.remove = function(){};

NavigationGroup.prototype.removeEventListener = function(){};

NavigationGroup.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

NavigationGroup.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

NavigationGroup.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

NavigationGroup.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

NavigationGroup.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

NavigationGroup.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

NavigationGroup.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

NavigationGroup.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

NavigationGroup.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

NavigationGroup.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

NavigationGroup.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

NavigationGroup.prototype.setBorderColor = function(property){ this.borderColor = property; };

NavigationGroup.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

NavigationGroup.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

NavigationGroup.prototype.setBottom = function(property){ this.bottom = property; };

NavigationGroup.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

NavigationGroup.prototype.setCenter = function(property){ this.center = property; };

NavigationGroup.prototype.setClipMode = function(property){ this.clipMode = property; };

NavigationGroup.prototype.setHeight = function(property){ this.height = property; };

NavigationGroup.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

NavigationGroup.prototype.setLayout = function(property){ this.layout = property; };

NavigationGroup.prototype.setLeft = function(property){ this.left = property; };

NavigationGroup.prototype.setOpacity = function(property){ this.opacity = property; };

NavigationGroup.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

NavigationGroup.prototype.setRight = function(property){ this.right = property; };

NavigationGroup.prototype.setTintColor = function(property){ this.tintColor = property; };

NavigationGroup.prototype.setTop = function(property){ this.top = property; };

NavigationGroup.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

NavigationGroup.prototype.setTransform = function(property){ this.transform = property; };

NavigationGroup.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

NavigationGroup.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

NavigationGroup.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

NavigationGroup.prototype.setVisible = function(property){ this.visible = property; };

NavigationGroup.prototype.setWidth = function(property){ this.width = property; };

NavigationGroup.prototype.setZIndex = function(property){ this.zIndex = property; };

NavigationGroup.prototype.show = function(){};

NavigationGroup.prototype.startLayout = function(){};

NavigationGroup.prototype.toImage = function(){ return {}; };

NavigationGroup.prototype.updateLayout = function(){};

module.exports = function(properties){ return new NavigationGroup(properties); };