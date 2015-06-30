function ButtonBar(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.ButtonBar';
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
	this.index = properties.index || undefined;
	this.labels = properties.labels || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
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

ButtonBar.prototype.add = function(){};

ButtonBar.prototype.addEventListener = function(){};

ButtonBar.prototype.animate = function(){};

ButtonBar.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ButtonBar.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

ButtonBar.prototype.finishLayout = function(){};

ButtonBar.prototype.fireEvent = function(){};

ButtonBar.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

ButtonBar.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

ButtonBar.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

ButtonBar.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

ButtonBar.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

ButtonBar.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

ButtonBar.prototype.getApiName = function(){ return this.apiName; };

ButtonBar.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

ButtonBar.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

ButtonBar.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

ButtonBar.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

ButtonBar.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

ButtonBar.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

ButtonBar.prototype.getBorderColor = function(){ return this.borderColor; };

ButtonBar.prototype.getBorderRadius = function(){ return this.borderRadius; };

ButtonBar.prototype.getBorderWidth = function(){ return this.borderWidth; };

ButtonBar.prototype.getBottom = function(){ return this.bottom; };

ButtonBar.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ButtonBar.prototype.getCenter = function(){ return this.center; };

ButtonBar.prototype.getChildren = function(){ return this.children; };

ButtonBar.prototype.getClipMode = function(){ return this.clipMode; };

ButtonBar.prototype.getHeight = function(){ return this.height; };

ButtonBar.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

ButtonBar.prototype.getIndex = function(){ return this.index; };

ButtonBar.prototype.getLabels = function(){ return this.labels; };

ButtonBar.prototype.getLayout = function(){ return this.layout; };

ButtonBar.prototype.getLeft = function(){ return this.left; };

ButtonBar.prototype.getOpacity = function(){ return this.opacity; };

ButtonBar.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

ButtonBar.prototype.getRect = function(){ return this.rect; };

ButtonBar.prototype.getRight = function(){ return this.right; };

ButtonBar.prototype.getSize = function(){ return this.size; };

ButtonBar.prototype.getStyle = function(){ return this.style; };

ButtonBar.prototype.getTintColor = function(){ return this.tintColor; };

ButtonBar.prototype.getTop = function(){ return this.top; };

ButtonBar.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

ButtonBar.prototype.getTransform = function(){ return this.transform; };

ButtonBar.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

ButtonBar.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

ButtonBar.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

ButtonBar.prototype.getVisible = function(){ return this.visible; };

ButtonBar.prototype.getWidth = function(){ return this.width; };

ButtonBar.prototype.getZIndex = function(){ return this.zIndex; };

ButtonBar.prototype.hide = function(){};

ButtonBar.prototype.remove = function(){};

ButtonBar.prototype.removeAllChildren = function(){};

ButtonBar.prototype.removeEventListener = function(){};

ButtonBar.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

ButtonBar.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

ButtonBar.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

ButtonBar.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

ButtonBar.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

ButtonBar.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

ButtonBar.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

ButtonBar.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

ButtonBar.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

ButtonBar.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

ButtonBar.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

ButtonBar.prototype.setBorderColor = function(property){ this.borderColor = property; };

ButtonBar.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

ButtonBar.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

ButtonBar.prototype.setBottom = function(property){ this.bottom = property; };

ButtonBar.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ButtonBar.prototype.setCenter = function(property){ this.center = property; };

ButtonBar.prototype.setClipMode = function(property){ this.clipMode = property; };

ButtonBar.prototype.setHeight = function(property){ this.height = property; };

ButtonBar.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

ButtonBar.prototype.setIndex = function(property){ this.index = property; };

ButtonBar.prototype.setLabels = function(property){ this.labels = property; };

ButtonBar.prototype.setLayout = function(property){ this.layout = property; };

ButtonBar.prototype.setLeft = function(property){ this.left = property; };

ButtonBar.prototype.setOpacity = function(property){ this.opacity = property; };

ButtonBar.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

ButtonBar.prototype.setRight = function(property){ this.right = property; };

ButtonBar.prototype.setStyle = function(property){ this.style = property; };

ButtonBar.prototype.setTintColor = function(property){ this.tintColor = property; };

ButtonBar.prototype.setTop = function(property){ this.top = property; };

ButtonBar.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

ButtonBar.prototype.setTransform = function(property){ this.transform = property; };

ButtonBar.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

ButtonBar.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

ButtonBar.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

ButtonBar.prototype.setVisible = function(property){ this.visible = property; };

ButtonBar.prototype.setWidth = function(property){ this.width = property; };

ButtonBar.prototype.setZIndex = function(property){ this.zIndex = property; };

ButtonBar.prototype.show = function(){};

ButtonBar.prototype.startLayout = function(){};

ButtonBar.prototype.toImage = function(){ return {}; };

ButtonBar.prototype.updateLayout = function(){};

module.exports = function(properties){ return new ButtonBar(properties); };