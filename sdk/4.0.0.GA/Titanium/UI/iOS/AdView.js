function AdView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.adSize = properties.adSize || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iOS.AdView';
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
	this.zIndex = properties.zIndex || undefined;

	return this;
}

AdView.prototype.add = function(){};

AdView.prototype.addEventListener = function(){};

AdView.prototype.animate = function(){};

AdView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

AdView.prototype.cancelAction = function(){};

AdView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

AdView.prototype.finishLayout = function(){};

AdView.prototype.fireEvent = function(){};

AdView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

AdView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

AdView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

AdView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

AdView.prototype.getAdSize = function(){ return this.adSize; };

AdView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

AdView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

AdView.prototype.getApiName = function(){ return this.apiName; };

AdView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

AdView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

AdView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

AdView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

AdView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

AdView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

AdView.prototype.getBorderColor = function(){ return this.borderColor; };

AdView.prototype.getBorderRadius = function(){ return this.borderRadius; };

AdView.prototype.getBorderWidth = function(){ return this.borderWidth; };

AdView.prototype.getBottom = function(){ return this.bottom; };

AdView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

AdView.prototype.getCenter = function(){ return this.center; };

AdView.prototype.getChildren = function(){ return this.children; };

AdView.prototype.getClipMode = function(){ return this.clipMode; };

AdView.prototype.getHeight = function(){ return this.height; };

AdView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

AdView.prototype.getLayout = function(){ return this.layout; };

AdView.prototype.getLeft = function(){ return this.left; };

AdView.prototype.getOpacity = function(){ return this.opacity; };

AdView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

AdView.prototype.getRect = function(){ return this.rect; };

AdView.prototype.getRight = function(){ return this.right; };

AdView.prototype.getSize = function(){ return this.size; };

AdView.prototype.getTintColor = function(){ return this.tintColor; };

AdView.prototype.getTop = function(){ return this.top; };

AdView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

AdView.prototype.getTransform = function(){ return this.transform; };

AdView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

AdView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

AdView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

AdView.prototype.getVisible = function(){ return this.visible; };

AdView.prototype.getWidth = function(){ return this.width; };

AdView.prototype.getZIndex = function(){ return this.zIndex; };

AdView.prototype.hide = function(){};

AdView.prototype.remove = function(){};

AdView.prototype.removeAllChildren = function(){};

AdView.prototype.removeEventListener = function(){};

AdView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

AdView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

AdView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

AdView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

AdView.prototype.setAdSize = function(property){ this.adSize = property; };

AdView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

AdView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

AdView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

AdView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

AdView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

AdView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

AdView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

AdView.prototype.setBorderColor = function(property){ this.borderColor = property; };

AdView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

AdView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

AdView.prototype.setBottom = function(property){ this.bottom = property; };

AdView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

AdView.prototype.setCenter = function(property){ this.center = property; };

AdView.prototype.setClipMode = function(property){ this.clipMode = property; };

AdView.prototype.setHeight = function(property){ this.height = property; };

AdView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

AdView.prototype.setLayout = function(property){ this.layout = property; };

AdView.prototype.setLeft = function(property){ this.left = property; };

AdView.prototype.setOpacity = function(property){ this.opacity = property; };

AdView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

AdView.prototype.setRight = function(property){ this.right = property; };

AdView.prototype.setTintColor = function(property){ this.tintColor = property; };

AdView.prototype.setTop = function(property){ this.top = property; };

AdView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

AdView.prototype.setTransform = function(property){ this.transform = property; };

AdView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

AdView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

AdView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

AdView.prototype.setVisible = function(property){ this.visible = property; };

AdView.prototype.setWidth = function(property){ this.width = property; };

AdView.prototype.setZIndex = function(property){ this.zIndex = property; };

AdView.prototype.show = function(){};

AdView.prototype.startLayout = function(){};

AdView.prototype.toImage = function(){ return {}; };

AdView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new AdView(properties); };