function DocumentViewer(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iPad.DocumentViewer';
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

DocumentViewer.prototype.add = function(){};

DocumentViewer.prototype.addEventListener = function(){};

DocumentViewer.prototype.animate = function(){};

DocumentViewer.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

DocumentViewer.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

DocumentViewer.prototype.finishLayout = function(){};

DocumentViewer.prototype.fireEvent = function(){};

DocumentViewer.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

DocumentViewer.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

DocumentViewer.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

DocumentViewer.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

DocumentViewer.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

DocumentViewer.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

DocumentViewer.prototype.getApiName = function(){ return this.apiName; };

DocumentViewer.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

DocumentViewer.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

DocumentViewer.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

DocumentViewer.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

DocumentViewer.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

DocumentViewer.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

DocumentViewer.prototype.getBorderColor = function(){ return this.borderColor; };

DocumentViewer.prototype.getBorderRadius = function(){ return this.borderRadius; };

DocumentViewer.prototype.getBorderWidth = function(){ return this.borderWidth; };

DocumentViewer.prototype.getBottom = function(){ return this.bottom; };

DocumentViewer.prototype.getBubbleParent = function(){ return this.bubbleParent; };

DocumentViewer.prototype.getCenter = function(){ return this.center; };

DocumentViewer.prototype.getChildren = function(){ return this.children; };

DocumentViewer.prototype.getClipMode = function(){ return this.clipMode; };

DocumentViewer.prototype.getHeight = function(){ return this.height; };

DocumentViewer.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

DocumentViewer.prototype.getLayout = function(){ return this.layout; };

DocumentViewer.prototype.getLeft = function(){ return this.left; };

DocumentViewer.prototype.getOpacity = function(){ return this.opacity; };

DocumentViewer.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

DocumentViewer.prototype.getRect = function(){ return this.rect; };

DocumentViewer.prototype.getRight = function(){ return this.right; };

DocumentViewer.prototype.getSize = function(){ return this.size; };

DocumentViewer.prototype.getTintColor = function(){ return this.tintColor; };

DocumentViewer.prototype.getTop = function(){ return this.top; };

DocumentViewer.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

DocumentViewer.prototype.getTransform = function(){ return this.transform; };

DocumentViewer.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

DocumentViewer.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

DocumentViewer.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

DocumentViewer.prototype.getVisible = function(){ return this.visible; };

DocumentViewer.prototype.getWidth = function(){ return this.width; };

DocumentViewer.prototype.getZIndex = function(){ return this.zIndex; };

DocumentViewer.prototype.hide = function(){};

DocumentViewer.prototype.remove = function(){};

DocumentViewer.prototype.removeAllChildren = function(){};

DocumentViewer.prototype.removeEventListener = function(){};

DocumentViewer.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

DocumentViewer.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

DocumentViewer.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

DocumentViewer.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

DocumentViewer.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

DocumentViewer.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

DocumentViewer.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

DocumentViewer.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

DocumentViewer.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

DocumentViewer.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

DocumentViewer.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

DocumentViewer.prototype.setBorderColor = function(property){ this.borderColor = property; };

DocumentViewer.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

DocumentViewer.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

DocumentViewer.prototype.setBottom = function(property){ this.bottom = property; };

DocumentViewer.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

DocumentViewer.prototype.setCenter = function(property){ this.center = property; };

DocumentViewer.prototype.setClipMode = function(property){ this.clipMode = property; };

DocumentViewer.prototype.setHeight = function(property){ this.height = property; };

DocumentViewer.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

DocumentViewer.prototype.setLayout = function(property){ this.layout = property; };

DocumentViewer.prototype.setLeft = function(property){ this.left = property; };

DocumentViewer.prototype.setOpacity = function(property){ this.opacity = property; };

DocumentViewer.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

DocumentViewer.prototype.setRight = function(property){ this.right = property; };

DocumentViewer.prototype.setTintColor = function(property){ this.tintColor = property; };

DocumentViewer.prototype.setTop = function(property){ this.top = property; };

DocumentViewer.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

DocumentViewer.prototype.setTransform = function(property){ this.transform = property; };

DocumentViewer.prototype.setUrl = function(){};

DocumentViewer.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

DocumentViewer.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

DocumentViewer.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

DocumentViewer.prototype.setVisible = function(property){ this.visible = property; };

DocumentViewer.prototype.setWidth = function(property){ this.width = property; };

DocumentViewer.prototype.setZIndex = function(property){ this.zIndex = property; };

DocumentViewer.prototype.show = function(){};

DocumentViewer.prototype.startLayout = function(){};

DocumentViewer.prototype.toImage = function(){ return {}; };

DocumentViewer.prototype.updateLayout = function(){};

module.exports = function(properties){ return new DocumentViewer(properties); };