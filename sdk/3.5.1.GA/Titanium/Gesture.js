function Gesture(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Gesture';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.landscape = properties.landscape || undefined;
	this.orientation = properties.orientation || undefined;
	this.portrait = properties.portrait || undefined;

	return this;
}

Gesture.prototype.addEventListener = function(){};

Gesture.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Gesture.prototype.fireEvent = function(){};

Gesture.prototype.getApiName = function(){ return this.apiName; };

Gesture.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Gesture.prototype.getLandscape = function(){ return this.landscape; };

Gesture.prototype.getOrientation = function(){ return this.orientation; };

Gesture.prototype.getPortrait = function(){ return this.portrait; };

Gesture.prototype.isFaceDown = function(){ return true; };

Gesture.prototype.isFaceUp = function(){ return true; };

Gesture.prototype.isLandscape = function(){ return true; };

Gesture.prototype.isPortrait = function(){ return true; };

Gesture.prototype.removeEventListener = function(){};

Gesture.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Gesture(properties); };