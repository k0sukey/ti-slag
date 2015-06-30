function ActivityIndicator(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.ActivityIndicator';
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.color = properties.color || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.indicatorColor = properties.indicatorColor || undefined;
	this.indicatorDiameter = properties.indicatorDiameter || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.message = properties.message || undefined;
	this.messageid = properties.messageid || undefined;
	this.right = properties.right || undefined;
	this.style = properties.style || undefined;
	this.top = properties.top || undefined;
	this.width = properties.width || undefined;

	return this;
}

ActivityIndicator.prototype.add = function(){};

ActivityIndicator.prototype.addEventListener = function(){};

ActivityIndicator.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ActivityIndicator.prototype.fireEvent = function(){};

ActivityIndicator.prototype.getApiName = function(){ return this.apiName; };

ActivityIndicator.prototype.getBottom = function(){ return this.bottom; };

ActivityIndicator.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ActivityIndicator.prototype.getColor = function(){ return this.color; };

ActivityIndicator.prototype.getHeight = function(){ return this.height; };

ActivityIndicator.prototype.getIndicatorColor = function(){ return this.indicatorColor; };

ActivityIndicator.prototype.getIndicatorDiameter = function(){ return this.indicatorDiameter; };

ActivityIndicator.prototype.getLeft = function(){ return this.left; };

ActivityIndicator.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

ActivityIndicator.prototype.getMessage = function(){ return this.message; };

ActivityIndicator.prototype.getMessageid = function(){ return this.messageid; };

ActivityIndicator.prototype.getRight = function(){ return this.right; };

ActivityIndicator.prototype.getStyle = function(){ return this.style; };

ActivityIndicator.prototype.getTop = function(){ return this.top; };

ActivityIndicator.prototype.getWidth = function(){ return this.width; };

ActivityIndicator.prototype.hide = function(){};

ActivityIndicator.prototype.remove = function(){};

ActivityIndicator.prototype.removeEventListener = function(){};

ActivityIndicator.prototype.setBottom = function(property){ this.bottom = property; };

ActivityIndicator.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ActivityIndicator.prototype.setColor = function(property){ this.color = property; };

ActivityIndicator.prototype.setFont = function(property){ this.font = property; };

ActivityIndicator.prototype.setHeight = function(property){ this.height = property; };

ActivityIndicator.prototype.setIndicatorColor = function(property){ this.indicatorColor = property; };

ActivityIndicator.prototype.setIndicatorDiameter = function(property){ this.indicatorDiameter = property; };

ActivityIndicator.prototype.setLeft = function(property){ this.left = property; };

ActivityIndicator.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

ActivityIndicator.prototype.setMessage = function(property){ this.message = property; };

ActivityIndicator.prototype.setMessageid = function(property){ this.messageid = property; };

ActivityIndicator.prototype.setRight = function(property){ this.right = property; };

ActivityIndicator.prototype.setStyle = function(property){ this.style = property; };

ActivityIndicator.prototype.setTop = function(property){ this.top = property; };

ActivityIndicator.prototype.setWidth = function(property){ this.width = property; };

ActivityIndicator.prototype.show = function(){};

module.exports = function(properties){ return new ActivityIndicator(properties); };