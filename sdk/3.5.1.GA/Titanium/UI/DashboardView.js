function DashboardView(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.DashboardView';
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
	this.columnCount = properties.columnCount || undefined;
	this.data = properties.data || undefined;
	this.editable = properties.editable || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rowCount = properties.rowCount || undefined;
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
	this.wobble = properties.wobble || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

DashboardView.prototype.add = function(){};

DashboardView.prototype.addEventListener = function(){};

DashboardView.prototype.animate = function(){};

DashboardView.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

DashboardView.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

DashboardView.prototype.finishLayout = function(){};

DashboardView.prototype.fireEvent = function(){};

DashboardView.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

DashboardView.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

DashboardView.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

DashboardView.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

DashboardView.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

DashboardView.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

DashboardView.prototype.getApiName = function(){ return this.apiName; };

DashboardView.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

DashboardView.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

DashboardView.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

DashboardView.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

DashboardView.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

DashboardView.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

DashboardView.prototype.getBorderColor = function(){ return this.borderColor; };

DashboardView.prototype.getBorderRadius = function(){ return this.borderRadius; };

DashboardView.prototype.getBorderWidth = function(){ return this.borderWidth; };

DashboardView.prototype.getBottom = function(){ return this.bottom; };

DashboardView.prototype.getBubbleParent = function(){ return this.bubbleParent; };

DashboardView.prototype.getCenter = function(){ return this.center; };

DashboardView.prototype.getChildren = function(){ return this.children; };

DashboardView.prototype.getClipMode = function(){ return this.clipMode; };

DashboardView.prototype.getColumnCount = function(){ return this.columnCount; };

DashboardView.prototype.getData = function(){ return this.data; };

DashboardView.prototype.getEditable = function(){ return this.editable; };

DashboardView.prototype.getHeight = function(){ return this.height; };

DashboardView.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

DashboardView.prototype.getLayout = function(){ return this.layout; };

DashboardView.prototype.getLeft = function(){ return this.left; };

DashboardView.prototype.getOpacity = function(){ return this.opacity; };

DashboardView.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

DashboardView.prototype.getRect = function(){ return this.rect; };

DashboardView.prototype.getRight = function(){ return this.right; };

DashboardView.prototype.getRowCount = function(){ return this.rowCount; };

DashboardView.prototype.getSize = function(){ return this.size; };

DashboardView.prototype.getTintColor = function(){ return this.tintColor; };

DashboardView.prototype.getTop = function(){ return this.top; };

DashboardView.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

DashboardView.prototype.getTransform = function(){ return this.transform; };

DashboardView.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

DashboardView.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

DashboardView.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

DashboardView.prototype.getVisible = function(){ return this.visible; };

DashboardView.prototype.getWidth = function(){ return this.width; };

DashboardView.prototype.getWobble = function(){ return this.wobble; };

DashboardView.prototype.getZIndex = function(){ return this.zIndex; };

DashboardView.prototype.hide = function(){};

DashboardView.prototype.remove = function(){};

DashboardView.prototype.removeAllChildren = function(){};

DashboardView.prototype.removeEventListener = function(){};

DashboardView.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

DashboardView.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

DashboardView.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

DashboardView.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

DashboardView.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

DashboardView.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

DashboardView.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

DashboardView.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

DashboardView.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

DashboardView.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

DashboardView.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

DashboardView.prototype.setBorderColor = function(property){ this.borderColor = property; };

DashboardView.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

DashboardView.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

DashboardView.prototype.setBottom = function(property){ this.bottom = property; };

DashboardView.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

DashboardView.prototype.setCenter = function(property){ this.center = property; };

DashboardView.prototype.setClipMode = function(property){ this.clipMode = property; };

DashboardView.prototype.setData = function(property){ this.data = property; };

DashboardView.prototype.setEditable = function(property){ this.editable = property; };

DashboardView.prototype.setHeight = function(property){ this.height = property; };

DashboardView.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

DashboardView.prototype.setLayout = function(property){ this.layout = property; };

DashboardView.prototype.setLeft = function(property){ this.left = property; };

DashboardView.prototype.setOpacity = function(property){ this.opacity = property; };

DashboardView.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

DashboardView.prototype.setRight = function(property){ this.right = property; };

DashboardView.prototype.setTintColor = function(property){ this.tintColor = property; };

DashboardView.prototype.setTop = function(property){ this.top = property; };

DashboardView.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

DashboardView.prototype.setTransform = function(property){ this.transform = property; };

DashboardView.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

DashboardView.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

DashboardView.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

DashboardView.prototype.setVisible = function(property){ this.visible = property; };

DashboardView.prototype.setWidth = function(property){ this.width = property; };

DashboardView.prototype.setWobble = function(property){ this.wobble = property; };

DashboardView.prototype.setZIndex = function(property){ this.zIndex = property; };

DashboardView.prototype.show = function(){};

DashboardView.prototype.startEditing = function(){};

DashboardView.prototype.startLayout = function(){};

DashboardView.prototype.stopEditing = function(){};

DashboardView.prototype.toImage = function(){ return {}; };

DashboardView.prototype.updateLayout = function(){};

module.exports = function(properties){ return new DashboardView(properties); };