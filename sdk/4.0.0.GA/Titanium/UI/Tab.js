function Tab(properties) {
	properties = properties || {};

	this.active = properties.active || undefined;
	this.activeIcon = properties.activeIcon || undefined;
	this.activeIconIsMask = properties.activeIconIsMask || undefined;
	this.apiName = 'Titanium.UI.Tab';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.badge = properties.badge || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.icon = properties.icon || undefined;
	this.iconIsMask = properties.iconIsMask || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.window = properties.window || undefined;

	return this;
}

Tab.prototype.addEventListener = function(){};

Tab.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Tab.prototype.close = function(){};

Tab.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

Tab.prototype.finishLayout = function(){};

Tab.prototype.fireEvent = function(){};

Tab.prototype.getActive = function(){ return this.active; };

Tab.prototype.getActiveIcon = function(){ return this.activeIcon; };

Tab.prototype.getActiveIconIsMask = function(){ return this.activeIconIsMask; };

Tab.prototype.getApiName = function(){ return this.apiName; };

Tab.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

Tab.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

Tab.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

Tab.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

Tab.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

Tab.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

Tab.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

Tab.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

Tab.prototype.getBadge = function(){ return this.badge; };

Tab.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Tab.prototype.getClipMode = function(){ return this.clipMode; };

Tab.prototype.getIcon = function(){ return this.icon; };

Tab.prototype.getIconIsMask = function(){ return this.iconIsMask; };

Tab.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Tab.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

Tab.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

Tab.prototype.getTintColor = function(){ return this.tintColor; };

Tab.prototype.getTitle = function(){ return this.title; };

Tab.prototype.getTitleid = function(){ return this.titleid; };

Tab.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

Tab.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

Tab.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

Tab.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

Tab.prototype.getWindow = function(){ return this.window; };

Tab.prototype.open = function(){};

Tab.prototype.removeEventListener = function(){};

Tab.prototype.setActive = function(property){ this.active = property; };

Tab.prototype.setActiveIcon = function(property){ this.activeIcon = property; };

Tab.prototype.setActiveIconIsMask = function(property){ this.activeIconIsMask = property; };

Tab.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

Tab.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

Tab.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

Tab.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

Tab.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

Tab.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

Tab.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

Tab.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

Tab.prototype.setBadge = function(property){ this.badge = property; };

Tab.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Tab.prototype.setClipMode = function(property){ this.clipMode = property; };

Tab.prototype.setIcon = function(property){ this.icon = property; };

Tab.prototype.setIconIsMask = function(property){ this.iconIsMask = property; };

Tab.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Tab.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

Tab.prototype.setTintColor = function(property){ this.tintColor = property; };

Tab.prototype.setTitle = function(property){ this.title = property; };

Tab.prototype.setTitleid = function(property){ this.titleid = property; };

Tab.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

Tab.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

Tab.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

Tab.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

Tab.prototype.setWindow = function(property){ this.window = property; };

Tab.prototype.startLayout = function(){};

Tab.prototype.toImage = function(){ return {}; };

Tab.prototype.updateLayout = function(){};

module.exports = function(properties){ return new Tab(properties); };