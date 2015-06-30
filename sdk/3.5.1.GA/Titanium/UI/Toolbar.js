function Toolbar(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Toolbar';
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.barColor = properties.barColor || undefined;
	this.borderBottom = properties.borderBottom || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderTop = properties.borderTop || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.items = properties.items || undefined;
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
	this.translucent = properties.translucent || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

Toolbar.prototype.add = function(){};

Toolbar.prototype.addEventListener = function(){};

Toolbar.prototype.animate = function(){};

Toolbar.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Toolbar.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

Toolbar.prototype.finishLayout = function(){};

Toolbar.prototype.fireEvent = function(){};

Toolbar.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

Toolbar.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

Toolbar.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

Toolbar.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

Toolbar.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

Toolbar.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

Toolbar.prototype.getApiName = function(){ return this.apiName; };

Toolbar.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

Toolbar.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

Toolbar.prototype.getBarColor = function(){ return this.barColor; };

Toolbar.prototype.getBorderBottom = function(){ return this.borderBottom; };

Toolbar.prototype.getBorderColor = function(){ return this.borderColor; };

Toolbar.prototype.getBorderRadius = function(){ return this.borderRadius; };

Toolbar.prototype.getBorderTop = function(){ return this.borderTop; };

Toolbar.prototype.getBorderWidth = function(){ return this.borderWidth; };

Toolbar.prototype.getBottom = function(){ return this.bottom; };

Toolbar.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Toolbar.prototype.getCenter = function(){ return this.center; };

Toolbar.prototype.getChildren = function(){ return this.children; };

Toolbar.prototype.getClipMode = function(){ return this.clipMode; };

Toolbar.prototype.getHeight = function(){ return this.height; };

Toolbar.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

Toolbar.prototype.getItems = function(){ return this.items; };

Toolbar.prototype.getLeft = function(){ return this.left; };

Toolbar.prototype.getOpacity = function(){ return this.opacity; };

Toolbar.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

Toolbar.prototype.getRect = function(){ return this.rect; };

Toolbar.prototype.getRight = function(){ return this.right; };

Toolbar.prototype.getSize = function(){ return this.size; };

Toolbar.prototype.getTintColor = function(){ return this.tintColor; };

Toolbar.prototype.getTop = function(){ return this.top; };

Toolbar.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

Toolbar.prototype.getTransform = function(){ return this.transform; };

Toolbar.prototype.getTranslucent = function(){ return this.translucent; };

Toolbar.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

Toolbar.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

Toolbar.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

Toolbar.prototype.getVisible = function(){ return this.visible; };

Toolbar.prototype.getWidth = function(){ return this.width; };

Toolbar.prototype.getZIndex = function(){ return this.zIndex; };

Toolbar.prototype.hide = function(){};

Toolbar.prototype.remove = function(){};

Toolbar.prototype.removeAllChildren = function(){};

Toolbar.prototype.removeEventListener = function(){};

Toolbar.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

Toolbar.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

Toolbar.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

Toolbar.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

Toolbar.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

Toolbar.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

Toolbar.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

Toolbar.prototype.setBarColor = function(property){ this.barColor = property; };

Toolbar.prototype.setBorderBottom = function(property){ this.borderBottom = property; };

Toolbar.prototype.setBorderColor = function(property){ this.borderColor = property; };

Toolbar.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

Toolbar.prototype.setBorderTop = function(property){ this.borderTop = property; };

Toolbar.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

Toolbar.prototype.setBottom = function(property){ this.bottom = property; };

Toolbar.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Toolbar.prototype.setCenter = function(property){ this.center = property; };

Toolbar.prototype.setClipMode = function(property){ this.clipMode = property; };

Toolbar.prototype.setHeight = function(property){ this.height = property; };

Toolbar.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

Toolbar.prototype.setItems = function(property){ this.items = property; };

Toolbar.prototype.setLeft = function(property){ this.left = property; };

Toolbar.prototype.setOpacity = function(property){ this.opacity = property; };

Toolbar.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

Toolbar.prototype.setRight = function(property){ this.right = property; };

Toolbar.prototype.setTintColor = function(property){ this.tintColor = property; };

Toolbar.prototype.setTop = function(property){ this.top = property; };

Toolbar.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

Toolbar.prototype.setTransform = function(property){ this.transform = property; };

Toolbar.prototype.setTranslucent = function(property){ this.translucent = property; };

Toolbar.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

Toolbar.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

Toolbar.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

Toolbar.prototype.setVisible = function(property){ this.visible = property; };

Toolbar.prototype.setWidth = function(property){ this.width = property; };

Toolbar.prototype.setZIndex = function(property){ this.zIndex = property; };

Toolbar.prototype.show = function(){};

Toolbar.prototype.startLayout = function(){};

Toolbar.prototype.toImage = function(){ return {}; };

Toolbar.prototype.updateLayout = function(){};

module.exports = function(properties){ return new Toolbar(properties); };