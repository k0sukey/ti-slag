function CoverFlowView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iOS.CoverFlowView';
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
	this.images = properties.images || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.selected = properties.selected || undefined;
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

CoverFlowView.prototype.add = function(){};

CoverFlowView.prototype.addEventListener = function(){};

CoverFlowView.prototype.animate = function(){};

CoverFlowView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

CoverFlowView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

CoverFlowView.prototype.finishLayout = function(){};

CoverFlowView.prototype.fireEvent = function(){};

CoverFlowView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

CoverFlowView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

CoverFlowView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

CoverFlowView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

CoverFlowView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

CoverFlowView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

CoverFlowView.prototype.getApiName = function(){ return this.apiName; };

CoverFlowView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

CoverFlowView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

CoverFlowView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

CoverFlowView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

CoverFlowView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

CoverFlowView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

CoverFlowView.prototype.getBorderColor = function(){ return this.borderColor; };

CoverFlowView.prototype.getBorderRadius = function(){ return this.borderRadius; };

CoverFlowView.prototype.getBorderWidth = function(){ return this.borderWidth; };

CoverFlowView.prototype.getBottom = function(){ return this.bottom; };

CoverFlowView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

CoverFlowView.prototype.getCenter = function(){ return this.center; };

CoverFlowView.prototype.getChildren = function(){ return this.children; };

CoverFlowView.prototype.getClipMode = function(){ return this.clipMode; };

CoverFlowView.prototype.getHeight = function(){ return this.height; };

CoverFlowView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

CoverFlowView.prototype.getImages = function(){ return this.images; };

CoverFlowView.prototype.getLayout = function(){ return this.layout; };

CoverFlowView.prototype.getLeft = function(){ return this.left; };

CoverFlowView.prototype.getOpacity = function(){ return this.opacity; };

CoverFlowView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

CoverFlowView.prototype.getRect = function(){ return this.rect; };

CoverFlowView.prototype.getRight = function(){ return this.right; };

CoverFlowView.prototype.getSelected = function(){ return this.selected; };

CoverFlowView.prototype.getSize = function(){ return this.size; };

CoverFlowView.prototype.getTintColor = function(){ return this.tintColor; };

CoverFlowView.prototype.getTop = function(){ return this.top; };

CoverFlowView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

CoverFlowView.prototype.getTransform = function(){ return this.transform; };

CoverFlowView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

CoverFlowView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

CoverFlowView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

CoverFlowView.prototype.getVisible = function(){ return this.visible; };

CoverFlowView.prototype.getWidth = function(){ return this.width; };

CoverFlowView.prototype.getZIndex = function(){ return this.zIndex; };

CoverFlowView.prototype.hide = function(){};

CoverFlowView.prototype.remove = function(){};

CoverFlowView.prototype.removeAllChildren = function(){};

CoverFlowView.prototype.removeEventListener = function(){};

CoverFlowView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

CoverFlowView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

CoverFlowView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

CoverFlowView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

CoverFlowView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

CoverFlowView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

CoverFlowView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

CoverFlowView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

CoverFlowView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

CoverFlowView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

CoverFlowView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

CoverFlowView.prototype.setBorderColor = function(property){ this.borderColor = property; };

CoverFlowView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

CoverFlowView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

CoverFlowView.prototype.setBottom = function(property){ this.bottom = property; };

CoverFlowView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

CoverFlowView.prototype.setCenter = function(property){ this.center = property; };

CoverFlowView.prototype.setClipMode = function(property){ this.clipMode = property; };

CoverFlowView.prototype.setHeight = function(property){ this.height = property; };

CoverFlowView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

CoverFlowView.prototype.setImage = function(){};

CoverFlowView.prototype.setImages = function(property){ this.images = property; };

CoverFlowView.prototype.setLayout = function(property){ this.layout = property; };

CoverFlowView.prototype.setLeft = function(property){ this.left = property; };

CoverFlowView.prototype.setOpacity = function(property){ this.opacity = property; };

CoverFlowView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

CoverFlowView.prototype.setRight = function(property){ this.right = property; };

CoverFlowView.prototype.setSelected = function(property){ this.selected = property; };

CoverFlowView.prototype.setTintColor = function(property){ this.tintColor = property; };

CoverFlowView.prototype.setTop = function(property){ this.top = property; };

CoverFlowView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

CoverFlowView.prototype.setTransform = function(property){ this.transform = property; };

CoverFlowView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

CoverFlowView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

CoverFlowView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

CoverFlowView.prototype.setVisible = function(property){ this.visible = property; };

CoverFlowView.prototype.setWidth = function(property){ this.width = property; };

CoverFlowView.prototype.setZIndex = function(property){ this.zIndex = property; };

CoverFlowView.prototype.show = function(){};

CoverFlowView.prototype.startLayout = function(){};

CoverFlowView.prototype.toImage = function(){ return {}; };

CoverFlowView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new CoverFlowView(properties); };