function Animation(properties) {
	properties = properties || {};

	this.anchorPoint = properties.anchorPoint || undefined;
	this.apiName = 'Titanium.UI.Animation';
	this.autoreverse = properties.autoreverse || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.color = properties.color || undefined;
	this.curve = properties.curve || undefined;
	this.delay = properties.delay || undefined;
	this.duration = properties.duration || undefined;
	this.height = properties.height || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.opaque = properties.opaque || undefined;
	this.repeat = properties.repeat || undefined;
	this.right = properties.right || undefined;
	this.top = properties.top || undefined;
	this.transform = properties.transform || undefined;
	this.transition = properties.transition || undefined;
	this.view = properties.view || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

Animation.prototype.addEventListener = function(){};

Animation.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Animation.prototype.fireEvent = function(){};

Animation.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

Animation.prototype.getApiName = function(){ return this.apiName; };

Animation.prototype.getAutoreverse = function(){ return this.autoreverse; };

Animation.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

Animation.prototype.getBottom = function(){ return this.bottom; };

Animation.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Animation.prototype.getColor = function(){ return this.color; };

Animation.prototype.getCurve = function(){ return this.curve; };

Animation.prototype.getDelay = function(){ return this.delay; };

Animation.prototype.getDuration = function(){ return this.duration; };

Animation.prototype.getHeight = function(){ return this.height; };

Animation.prototype.getLeft = function(){ return this.left; };

Animation.prototype.getOpacity = function(){ return this.opacity; };

Animation.prototype.getOpaque = function(){ return this.opaque; };

Animation.prototype.getRepeat = function(){ return this.repeat; };

Animation.prototype.getRight = function(){ return this.right; };

Animation.prototype.getTop = function(){ return this.top; };

Animation.prototype.getTransform = function(){ return this.transform; };

Animation.prototype.getTransition = function(){ return this.transition; };

Animation.prototype.getView = function(){ return this.view; };

Animation.prototype.getVisible = function(){ return this.visible; };

Animation.prototype.getWidth = function(){ return this.width; };

Animation.prototype.getZIndex = function(){ return this.zIndex; };

Animation.prototype.removeEventListener = function(){};

Animation.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

Animation.prototype.setAutoreverse = function(property){ this.autoreverse = property; };

Animation.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

Animation.prototype.setBottom = function(property){ this.bottom = property; };

Animation.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Animation.prototype.setCenter = function(property){ this.center = property; };

Animation.prototype.setColor = function(property){ this.color = property; };

Animation.prototype.setCurve = function(property){ this.curve = property; };

Animation.prototype.setDelay = function(property){ this.delay = property; };

Animation.prototype.setDuration = function(property){ this.duration = property; };

Animation.prototype.setHeight = function(property){ this.height = property; };

Animation.prototype.setLeft = function(property){ this.left = property; };

Animation.prototype.setOpacity = function(property){ this.opacity = property; };

Animation.prototype.setOpaque = function(property){ this.opaque = property; };

Animation.prototype.setRepeat = function(property){ this.repeat = property; };

Animation.prototype.setRight = function(property){ this.right = property; };

Animation.prototype.setTop = function(property){ this.top = property; };

Animation.prototype.setTransform = function(property){ this.transform = property; };

Animation.prototype.setTransition = function(property){ this.transition = property; };

Animation.prototype.setView = function(property){ this.view = property; };

Animation.prototype.setVisible = function(property){ this.visible = property; };

Animation.prototype.setWidth = function(property){ this.width = property; };

Animation.prototype.setZIndex = function(property){ this.zIndex = property; };

module.exports = function(properties){ return new Animation(properties); };