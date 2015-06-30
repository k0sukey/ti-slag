function NavigationGroup(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.MobileWeb.NavigationGroup';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.navBarAtTop = properties.navBarAtTop || undefined;
	this.opacity = properties.opacity || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
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

NavigationGroup.prototype.getApiName = function(){ return this.apiName; };

NavigationGroup.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

NavigationGroup.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

NavigationGroup.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

NavigationGroup.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

NavigationGroup.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

NavigationGroup.prototype.getBorderColor = function(){ return this.borderColor; };

NavigationGroup.prototype.getBorderRadius = function(){ return this.borderRadius; };

NavigationGroup.prototype.getBorderWidth = function(){ return this.borderWidth; };

NavigationGroup.prototype.getBottom = function(){ return this.bottom; };

NavigationGroup.prototype.getCenter = function(){ return this.center; };

NavigationGroup.prototype.getChildren = function(){ return this.children; };

NavigationGroup.prototype.getHeight = function(){ return this.height; };

NavigationGroup.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

NavigationGroup.prototype.getLayout = function(){ return this.layout; };

NavigationGroup.prototype.getLeft = function(){ return this.left; };

NavigationGroup.prototype.getNavBarAtTop = function(){ return this.navBarAtTop; };

NavigationGroup.prototype.getOpacity = function(){ return this.opacity; };

NavigationGroup.prototype.getRect = function(){ return this.rect; };

NavigationGroup.prototype.getRight = function(){ return this.right; };

NavigationGroup.prototype.getSize = function(){ return this.size; };

NavigationGroup.prototype.getTop = function(){ return this.top; };

NavigationGroup.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

NavigationGroup.prototype.getTransform = function(){ return this.transform; };

NavigationGroup.prototype.getVisible = function(){ return this.visible; };

NavigationGroup.prototype.getWidth = function(){ return this.width; };

NavigationGroup.prototype.getWindow = function(){ return this.window; };

NavigationGroup.prototype.getZIndex = function(){ return this.zIndex; };

NavigationGroup.prototype.hide = function(){};

NavigationGroup.prototype.open = function(){};

NavigationGroup.prototype.remove = function(){};

NavigationGroup.prototype.removeEventListener = function(){};

NavigationGroup.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

NavigationGroup.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

NavigationGroup.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

NavigationGroup.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

NavigationGroup.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

NavigationGroup.prototype.setBorderColor = function(property){ this.borderColor = property; };

NavigationGroup.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

NavigationGroup.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

NavigationGroup.prototype.setBottom = function(property){ this.bottom = property; };

NavigationGroup.prototype.setCenter = function(property){ this.center = property; };

NavigationGroup.prototype.setHeight = function(property){ this.height = property; };

NavigationGroup.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

NavigationGroup.prototype.setLayout = function(property){ this.layout = property; };

NavigationGroup.prototype.setLeft = function(property){ this.left = property; };

NavigationGroup.prototype.setNavBarAtTop = function(property){ this.navBarAtTop = property; };

NavigationGroup.prototype.setOpacity = function(property){ this.opacity = property; };

NavigationGroup.prototype.setRight = function(property){ this.right = property; };

NavigationGroup.prototype.setTop = function(property){ this.top = property; };

NavigationGroup.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

NavigationGroup.prototype.setTransform = function(property){ this.transform = property; };

NavigationGroup.prototype.setVisible = function(property){ this.visible = property; };

NavigationGroup.prototype.setWidth = function(property){ this.width = property; };

NavigationGroup.prototype.setZIndex = function(property){ this.zIndex = property; };

NavigationGroup.prototype.show = function(){};

NavigationGroup.prototype.startLayout = function(){};

NavigationGroup.prototype.updateLayout = function(){};

module.exports = function(properties){ return new NavigationGroup(properties); };