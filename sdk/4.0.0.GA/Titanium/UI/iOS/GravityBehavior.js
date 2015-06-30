function GravityBehavior(properties) {
	properties = properties || {};

	this.angle = properties.angle || undefined;
	this.apiName = 'Titanium.UI.iOS.GravityBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.gravityDirection = properties.gravityDirection || undefined;
	this.items = properties.items || undefined;
	this.magnitude = properties.magnitude || undefined;

	return this;
}

GravityBehavior.prototype.addEventListener = function(){};

GravityBehavior.prototype.addItem = function(){};

GravityBehavior.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

GravityBehavior.prototype.fireEvent = function(){};

GravityBehavior.prototype.getAngle = function(){ return this.angle; };

GravityBehavior.prototype.getApiName = function(){ return this.apiName; };

GravityBehavior.prototype.getBubbleParent = function(){ return this.bubbleParent; };

GravityBehavior.prototype.getGravityDirection = function(){ return this.gravityDirection; };

GravityBehavior.prototype.getItems = function(){ return this.items; };

GravityBehavior.prototype.getMagnitude = function(){ return this.magnitude; };

GravityBehavior.prototype.removeEventListener = function(){};

GravityBehavior.prototype.removeItem = function(){};

GravityBehavior.prototype.setAngle = function(property){ this.angle = property; };

GravityBehavior.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

GravityBehavior.prototype.setGravityDirection = function(property){ this.gravityDirection = property; };

GravityBehavior.prototype.setMagnitude = function(property){ this.magnitude = property; };

module.exports = function(properties){ return new GravityBehavior(properties); };