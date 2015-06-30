function PushBehavior(properties) {
	properties = properties || {};

	this.active = properties.active || undefined;
	this.angle = properties.angle || undefined;
	this.apiName = 'Titanium.UI.iOS.PushBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.items = properties.items || undefined;
	this.magnitude = properties.magnitude || undefined;
	this.pushDirection = properties.pushDirection || undefined;
	this.pushMode = properties.pushMode || undefined;

	return this;
}

PushBehavior.prototype.addEventListener = function(){};

PushBehavior.prototype.addItem = function(){};

PushBehavior.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

PushBehavior.prototype.fireEvent = function(){};

PushBehavior.prototype.getActive = function(){ return this.active; };

PushBehavior.prototype.getAngle = function(){ return this.angle; };

PushBehavior.prototype.getApiName = function(){ return this.apiName; };

PushBehavior.prototype.getBubbleParent = function(){ return this.bubbleParent; };

PushBehavior.prototype.getItems = function(){ return this.items; };

PushBehavior.prototype.getMagnitude = function(){ return this.magnitude; };

PushBehavior.prototype.getPushDirection = function(){ return this.pushDirection; };

PushBehavior.prototype.getPushMode = function(){ return this.pushMode; };

PushBehavior.prototype.removeEventListener = function(){};

PushBehavior.prototype.removeItem = function(){};

PushBehavior.prototype.setActive = function(property){ this.active = property; };

PushBehavior.prototype.setAngle = function(property){ this.angle = property; };

PushBehavior.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

PushBehavior.prototype.setMagnitude = function(property){ this.magnitude = property; };

PushBehavior.prototype.setPushDirection = function(property){ this.pushDirection = property; };

PushBehavior.prototype.setPushMode = function(property){ this.pushMode = property; };

module.exports = function(properties){ return new PushBehavior(properties); };